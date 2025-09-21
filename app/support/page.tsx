"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Support Technique</h1>
      <Card>
        <CardHeader>
          <CardTitle>Contactez-nous pour une assistance technique</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Si vous rencontrez des problèmes techniques, veuillez utiliser le formulaire de contact ou nous envoyer un
            e-mail à <strong>support@hecm.com</strong>.
          </p>
          <p className="mt-4">
            Pour les urgences, appelez-nous directement au <strong>+229 123 456 789</strong>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}