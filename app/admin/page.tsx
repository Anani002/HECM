"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSession, signIn } from "next-auth/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const [adminCode, setAdminCode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [newExam, setNewExam] = useState({
    title: "",
    filiere: "",
    niveau: "",
    matiere: "",
    annee: "",
    type: "",
    date: "",
    professeur: "",
    duree: "",
    pages: "",
    pdfUrl: "",
  });
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const handleAuth = () => {
    if (adminCode === "1234") {
      setIsAuthenticated(true);
    } else {
      alert("Code d'admin incorrect !");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setNewExam((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPdfFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(newExam).forEach(([key, value]) => {
      formData.append(key, value);
    });
    if (pdfFile) {
      formData.append("pdf", pdfFile);
    }
    const res = await fetch("/api/exams", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("Épreuve ajoutée avec succès !");
      setNewExam({
        title: "",
        filiere: "",
        niveau: "",
        matiere: "",
        annee: "",
        type: "",
        date: "",
        professeur: "",
        duree: "",
        pages: "",
        pdfUrl: "",
      });
      setPdfFile(null);
    } else {
      alert("Erreur lors de l'ajout de l'épreuve.");
    }
  };

  if (status === "loading") {
    return <div className="flex justify-center items-center h-screen">Chargement...</div>;
  }

  if (!session) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle className="text-center">Connexion Admin</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-center text-gray-600">
              Veuillez vous connecter pour accéder à l’espace d’administration.
            </p>
            <Button className="w-full" onClick={() => signIn()}>
              Se connecter
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Espace Admin</h1>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/" className="hover:text-white">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/examens" className="hover:text-white">
                Examens
              </Link>
            </li>
            <li>
              <Link href="/filieres" className="hover:text-white">
                Filières
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/admin" className="hover:text-white font-bold">
                Admin
              </Link>
            </li>
          </ul>
        </div>
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Authentification Admin</h2>
            <Input
              id="adminCode"
              type="password"
              placeholder="Entrez le code d'admin"
              value={adminCode}
              onChange={(e) => setAdminCode(e.target.value)}
              className="mb-4"
            />
            <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700" onClick={handleAuth}>
              Accéder
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ajouter une nouvelle épreuve</h2>
            <Input
              id="title"
              placeholder="Titre de l'épreuve"
              value={newExam.title}
              onChange={handleChange}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <Input id="filiere" placeholder="Filière" value={newExam.filiere} onChange={handleChange} />
            <Input id="niveau" placeholder="Niveau" value={newExam.niveau} onChange={handleChange} />
            <Input id="matiere" placeholder="Matière" value={newExam.matiere} onChange={handleChange} />
            <Input id="annee" placeholder="Année" value={newExam.annee} onChange={handleChange} />
            <Input id="type" placeholder="Type (Examen Final, etc.)" value={newExam.type} onChange={handleChange} />
            <Input id="date" type="date" placeholder="Date" value={newExam.date} onChange={handleChange} />
            <Input id="professeur" placeholder="Professeur" value={newExam.professeur} onChange={handleChange} />
            <Input id="duree" placeholder="Durée (ex: 2h)" value={newExam.duree} onChange={handleChange} />
            <Input id="pages" placeholder="Nombre de pages" value={newExam.pages} onChange={handleChange} />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Fichier PDF</label>
              <Input
                type="file"
                name="pdf"
                accept="application/pdf"
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              Ajouter l'épreuve
            </Button>
          </form>
        )}
      </div>
    </>
  );
}