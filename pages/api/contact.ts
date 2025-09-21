import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { prenom, nom, email, filiere, niveau, sujet, message } = req.body;

    // Validation des données
    if (!prenom || !nom || !email || !message) {
      return res.status(400).json({ error: "Tous les champs obligatoires doivent être remplis." });
    }

    if (!email.includes("@")) {
      return res.status(400).json({ error: "L'adresse email est invalide." });
    }

    // Configurer le transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // Utilisez votre service de messagerie (ex: Gmail, Outlook, etc.)
      auth: {
        user: "ananijasper@gmail.com", // Remplacez par votre adresse e-mail
        pass: "yjfbvluwaztzhqku", // Remplacez par votre mot de passe ou token d'application
      },
    });

    // Configurer le contenu de l'e-mail
    const mailOptions = {
      from: email, // Adresse e-mail de l'expéditeur
      to: "ananijasper@gmail.com", // Adresse e-mail du destinataire
      subject: sujet || "Nouveau message de contact",
      text: `Prénom : ${prenom}\nNom : ${nom}\nEmail : ${email}\nFilière : ${filiere || "Non spécifiée"}\nNiveau : ${niveau || "Non spécifié"}\nMessage : ${message}`,
    };

    try {
      // Envoyer l'e-mail
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: "Message envoyé avec succès !" });
    } catch (error: unknown) {
      const errorMessage = (error instanceof Error) ? error.message : "Erreur inconnue";
      console.error("Erreur lors de l'envoi de l'e-mail :", errorMessage);
      res.status(500).json({ error: `Une erreur est survenue lors de l'envoi du message : ${errorMessage}` });
    }
  } else {
    res.status(405).json({ error: "Méthode non autorisée" });
  }
}