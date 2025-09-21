"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FAQPage() {
  const faqs = [
    {
      question: "Comment télécharger une épreuve ?",
      answer: "Cliquez sur le bouton 'Télécharger' sur la fiche de l'épreuve.",
    },
    {
      question: "Comment contacter le support technique ?",
      answer: "Utilisez le formulaire de contact ou cliquez sur 'Support technique urgent'.",
    },
    {
      question: "Quels sont les niveaux disponibles ?",
      answer: "Les niveaux disponibles sont L1, L2, L3, M1, et M2.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">FAQ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{faq.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{faq.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}