"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Mail, Phone, MapPin, Clock } from "lucide-react";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    filiere: "",
    niveau: "",
    sujet: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Votre message a été envoyé avec succès !");
      } else {
        const errorData = await response.json();
        alert(`Erreur : ${errorData.error}`);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Logo />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Archives-HECM</h1>
                <p className="text-sm text-gray-600">Plateforme des épreuves</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Accueil
              </Link>
              <Link
                href="/examens"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Examens
              </Link>
              <Link
                href="/filieres"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Filières
              </Link>
              <Link
                href="/contact"
                className="text-blue-600 font-medium"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une question, une suggestion ou besoin d'aide ? Notre équipe est là
            pour vous accompagner dans votre parcours académique.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Envoyez-nous un message
                </CardTitle>
                <CardDescription>
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans
                  les plus brefs délais.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="prenom"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Prénom *
                      </label>
                      <Input
                        id="prenom"
                        placeholder="Votre prénom"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="nom"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nom *
                      </label>
                      <Input
                        id="nom"
                        placeholder="Votre nom"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre.email@exemple.com"
                      required
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="filiere"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Filière
                      </label>
                      <Input
                        id="filiere"
                        placeholder="Ex: FCA, AD, GRH..."
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="niveau"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Niveau
                      </label>
                      <Input
                        id="niveau"
                        placeholder="Ex: L1, L2, M1..."
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="sujet"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Sujet *
                    </label>
                    <Input
                      id="sujet"
                      placeholder="Objet de votre message"
                      required
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Décrivez votre demande en détail..."
                      rows={6}
                      required
                      onChange={handleChange}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Informations de contact</CardTitle>
                <CardDescription>Plusieurs moyens pour nous joindre</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Mail className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-600">contact@hecm-examens.edu</p>
                    <p className="text-sm text-gray-600">support@hecm-examens.edu</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Phone className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-sm text-gray-600">+229 00 00 00 00</p>
                    <p className="text-sm text-gray-600">+229 00 00 00 00</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <MapPin className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-sm text-gray-600">
                      HECM Atrokpocodji
                      </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Clock className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium">Horaires</p>
                    <p className="text-sm text-gray-600">
                      Lun - Ven: 8h00 - 18h00
                      <br />
                      Sam: 9h00 - 12h00
                      <br />
                      Dim: Fermé
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Questions fréquentes</CardTitle>
                <CardDescription>Trouvez rapidement des réponses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-sm">
                    Comment télécharger une épreuve ?
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Cliquez sur le bouton "Télécharger" sur la fiche de
                    l'épreuve.
                  </p>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-sm">
                    Puis-je proposer une épreuve ?
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Oui, contactez-nous avec les détails de l'épreuve.
                  </p>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-sm">
                    Les épreuves sont-elles gratuites ?
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Oui, toutes les ressources sont gratuites pour les étudiants.
                  </p>
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-4 bg-transparent"
                  onClick={() => (window.location.href = "/faq")}
                >
                  Voir toutes les FAQ
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-800">Support urgent</CardTitle>
                <CardDescription className="text-red-600">
                  Pour les problèmes techniques urgents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-700 mb-3">
                  Si vous rencontrez un problème technique urgent (accès bloqué,
                  erreur de téléchargement), contactez notre support technique :
                </p>
                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={() => (window.location.href = "/support")} // Assurez-vous que "/support" est le bon chemin
                >
                  Support technique urgent
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-blue-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Rejoignez notre communauté</h2>
          <p className="mb-6 opacity-90">
            Restez informé des nouvelles épreuves ajoutées et des mises à jour de la plateforme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input placeholder="Votre email" className="bg-white text-gray-900" />
            <Button variant="secondary">S'abonner</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
