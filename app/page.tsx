"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, BookOpen, Users, Calendar, Award, Download, Filter, Scroll, GraduationCap, CalendarDays, UserCheck } from "lucide-react"
import Link from "next/link"
import Logo from "@/components/Logo"

export default function HomePage() {
  // Données d'exemple
  const recentExams = [
    {
      id: 1,
      title: "Examen Final - Anglais",
      filiere: "SIL",
      niveau: "L1",
      matiere: "Anglais",
      annee: "2025",
      type: "Examen Final",
      date: "2025-05-22",
      professeur: "Mr. KOUTCHADE",
      duree: "2h",
      pages: 3,
      pdfUrl: "/pdfs/Anglais.pdf", // Chemin mis à jour
    },
      {
      id: 2,
      title: "Examen Final - Algorithme",
      filiere: "SIL",
      niveau: "L1", // Correction du niveau
      matiere: "Algorithme",
      annee: "2025",
      type: "Examen Final",
      date: "2025-05-22",
      professeur: "Mr. --",
      duree: "2h",
      pages: 1,
      pdfUrl: "/pdfs/Algorithme.pdf", // Chemin mis à jour
    },
    {
      id: 3,
      title: "Examen Final - Analyse",
      filiere: "SIL",
      niveau: "L1", // Correction du niveau
      matiere: "Analyse",
      annee: "2025",
      type: "Examen Final",
      date: "2025-05-22",
      professeur: "Dr. R.VODA",
      duree: "2h",
      pages: 1,
      pdfUrl: "/pdfs/Analyse.pdf", // Chemin mis à jour
    },
  ]

  const stats = [
    { label: "Épreuves disponibles", value: "20", icon: Scroll },
    { label: "Filières couvertes", value: "24", icon: GraduationCap },
    { label: "Années d'archives", value: "10", icon: CalendarDays },
    { label: "Étudiants actifs", value: "0000", icon: UserCheck },
  ]

  // Ajoute ces states :
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFiliere, setSelectedFiliere] = useState("")
  const [selectedNiveau, setSelectedNiveau] = useState("")

  // Fonction de filtrage
  const filteredExams = recentExams.filter(exam =>
    (searchTerm === "" || exam.title.toLowerCase().includes(searchTerm.toLowerCase()) || exam.matiere.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedFiliere === "" || exam.filiere.toLowerCase() === selectedFiliere) &&
    (selectedNiveau === "" || exam.niveau.toLowerCase() === selectedNiveau)
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Logo />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Archives-HECM</h1>
                <p className="text-sm text-gray-600">Plateforme des épreuves</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Accueil
              </Link>
              <Link href="/examens" className="text-gray-700 hover:text-blue-600 font-medium">
                Examens
              </Link>
              <Link href="/filieres" className="text-gray-700 hover:text-blue-600 font-medium">
                Filières
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Accédez facilement aux épreuves de l'université HECM
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Trouvez rapidement les examens, partiels et devoirs organisés par filière, niveau, matière et année. Une
            ressource indispensable pour votre réussite académique.
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Rechercher une épreuve, matière..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <Select value={selectedFiliere} onValueChange={setSelectedFiliere}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filière" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fca">FCA</SelectItem>
                    <SelectItem value="ad">AD</SelectItem>
                    <SelectItem value="grh">GRH</SelectItem>
                    <SelectItem value="sil">SIL</SelectItem>
                    <SelectItem value="jl">JL</SelectItem>
                    <SelectItem value="mcc">MCC</SelectItem>
                    <SelectItem value="th">TH</SelectItem>
                    <SelectItem value="bfa">BFA</SelectItem>
                    <SelectItem value="tl">TL</SelectItem>
                    <SelectItem value="rit">RIT</SelectItem>
                    <SelectItem value="cqga">CQGA</SelectItem>
                    <SelectItem value="egp">EGP</SelectItem>
                    <SelectItem value="abm">ABM</SelectItem>
                    <SelectItem value="sjp">SJP</SelectItem>
                    <SelectItem value="se">SE</SelectItem>
                    <SelectItem value="gcl">GCL</SelectItem>
                    <SelectItem value="gpm">GPM</SelectItem>
                    <SelectItem value="ri">RI</SelectItem>
                    <SelectItem value="ssi">SSI</SelectItem>
                    <SelectItem value="gc">GC</SelectItem>
                    <SelectItem value="ge">GE</SelectItem>
                    <SelectItem value="gt">GT</SelectItem>
                    <SelectItem value="ea">EA</SelectItem>
                    <SelectItem value="hr">HR</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedNiveau} onValueChange={setSelectedNiveau}>
                  <SelectTrigger>
                    <SelectValue placeholder="Niveau" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="l1">L1</SelectItem>
                    <SelectItem value="l2">L2</SelectItem>
                    <SelectItem value="l3">L3</SelectItem>
                    <SelectItem value="m1">M1</SelectItem>
                    <SelectItem value="m2">M2</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => {/* rien à faire ici, le filtrage est déjà dynamique */}}
                >
                  <Search className="h-4 w-4 mr-2" />
                  Rechercher
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Exams */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Épreuves récemment ajoutées</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez les dernières épreuves mises à disposition par nos équipes pédagogiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {filteredExams.map((exam) => (
              <Card key={exam.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{exam.type}</Badge>
                    <span className="text-sm text-gray-500">{exam.date}</span>
                  </div>
                  <CardTitle className="text-lg">{exam.title}</CardTitle>
                  <CardDescription>
                    {exam.filiere} • {exam.niveau} • {exam.annee}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-600">{exam.matiere}</span>
                    <a
                    className="flex-1 bg-blue-600 text-white rounded-md text-sm flex items-center justify-center hover:bg-blue-700"
                    href={exam.pdfUrl}
                    download
                    rel="noopener noreferrer"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Télécharger
                  </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/examens">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Voir tous les examens
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Pourquoi choisir notre plateforme ?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Recherche avancée</h4>
              <p className="text-gray-600">
                Filtrez facilement par filière, niveau, matière et année pour trouver exactement ce que vous cherchez.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Archive complète</h4>
              <p className="text-gray-600">
                Accédez à des années d'archives d'épreuves soigneusement organisées et régulièrement mises à jour.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Téléchargement facile</h4>
              <p className="text-gray-600">
                Téléchargez instantanément les épreuves au format PDF pour étudier hors ligne quand vous voulez.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Logo />
                <span className="text-xl font-bold">Archives-HECM</span>
              </div>
              <p className="text-gray-400">
                Votre plateforme de référence pour accéder aux épreuves de l'université HECM.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Navigation</h5>
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

            <div>
              <h5 className="font-semibold mb-4">Filières</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/filieres/FCA" className="hover:text-white">
                    FCA
                  </Link>
                </li>
                <li>
                  <Link href="/filieres/AD" className="hover:text-white">
                    AD
                  </Link>
                </li>
                <li>
                  <Link href="/filieres/GRH" className="hover:text-white">
                    GRH
                  </Link>
                </li>
                <li>
                  <Link href="/filieres/SIL" className="hover:text-white">
                    SIL
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <div className="text-gray-400 space-y-2">
                <p>HECM Atrokpocodji</p>
                <p>contact@hecm-examens.edu</p>
                <p>+229 00 00 00 00</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Archives HECM. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
