import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import fs from "fs";

// Remplace l'import ES par CommonJS
const formidable = require("formidable");

export const config = { api: { bodyParser: false } };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db("hecm-examens");
  const collection = db.collection("examens");

  if (req.method === "POST") {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err: any, fields: any, files: any) => {
      if (err) {
        console.error("Erreur formidable:", err);
        return res.status(500).json({ error: "Erreur upload" });
      }

      if (!files.pdf || !files.pdf[0]) {
        return res.status(400).json({ error: "Aucun fichier PDF reçu." });
      }

      // Vérifie que le dossier existe
      const pdfDir = "./public/pdfs";
      if (!fs.existsSync(pdfDir)) {
        fs.mkdirSync(pdfDir, { recursive: true });
      }

      // Sauvegarde le PDF dans /public/pdfs
      const oldPath = files.pdf[0].filepath;
      const newPath = `${pdfDir}/${files.pdf[0].originalFilename}`;
      fs.copyFileSync(oldPath, newPath);
      fs.unlinkSync(oldPath); // supprime le fichier temporaire

      // Enregistre l’épreuve avec le chemin du PDF
      fields.pdfUrl = `/pdfs/${files.pdf[0].originalFilename}`;

      // Normalisation des champs pour éviter les tableaux
      const examData = {
        title: Array.isArray(fields.title) ? fields.title[0] : fields.title,
        filiere: Array.isArray(fields.filiere) ? fields.filiere[0] : fields.filiere,
        niveau: Array.isArray(fields.niveau) ? fields.niveau[0] : fields.niveau,
        matiere: Array.isArray(fields.matiere) ? fields.matiere[0] : fields.matiere,
        annee: Array.isArray(fields.annee) ? fields.annee[0] : fields.annee,
        type: Array.isArray(fields.type) ? fields.type[0] : fields.type,
        date: Array.isArray(fields.date) ? fields.date[0] : fields.date,
        professeur: Array.isArray(fields.professeur) ? fields.professeur[0] : fields.professeur,
        duree: Array.isArray(fields.duree) ? fields.duree[0] : fields.duree,
        pages: Array.isArray(fields.pages) ? fields.pages[0] : fields.pages,
        pdfUrl: fields.pdfUrl,
      };

      // Validation des données
      if (!examData.title || !examData.filiere || !examData.niveau || !examData.matiere || !examData.date) {
        return res.status(400).json({ error: "Tous les champs obligatoires doivent être remplis." });
      }

      await collection.insertOne(examData);
      return res.status(200).json({ success: true, message: "Épreuve ajoutée avec succès !" });
    });
    return;
  }

  if (req.method === "GET") {
    const examens = await collection.find({}).toArray();
    return res.status(200).json(examens);
  }

  res.status(405).json({ error: "Méthode non autorisée" });
}