"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Download, Filter, Calendar, BookOpen, Eye } from "lucide-react"
import Link from "next/link"
import Logo from "@/components/Logo"

interface Exam {
  id?: string
  title: string
  matiere: string
  professeur: string
  date: string
  filiere: string
  niveau: string
  type: string
  annee: string
  duree: string
  pages: string
  pdfUrl: string
}

export default function ExamensPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFiliere, setSelectedFiliere] = useState("all");
  const [selectedNiveau, setSelectedNiveau] = useState("all")
  const [selectedAnnee, setSelectedAnnee] = useState("all")
  const [examens, setExamens] = useState<Exam[]>([])

  useEffect(() => {
    fetch("/api/exams")
      .then((res) => res.json())
      .then((data) => setExamens(data))
  }, [])

  // Filtrage des examens
  const filteredExamens = examens.filter((exam) => {
    const matchesSearch =
      exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.matiere.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.professeur.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFiliere =
      selectedFiliere === "all" ||
      (exam.filiere && exam.filiere.toLowerCase() === selectedFiliere.toLowerCase())
    const matchesNiveau = selectedNiveau === "all" || exam.niveau === selectedNiveau
    const matchesAnnee = selectedAnnee === "all" || exam.annee === selectedAnnee

    return matchesSearch && matchesFiliere && matchesNiveau && matchesAnnee
  })

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Examen Final":
        return "bg-red-100 text-red-800"
      case "Partiel":
        return "bg-orange-100 text-orange-800"
      case "Devoir":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

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
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Accueil
              </Link>
              <Link href="/examens" className="text-blue-600 font-medium">
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

      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Catalogue des Examens</h1>
          <p className="text-gray-600">
            Explorez notre collection complète d'épreuves organisées par filière et niveau
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-gray-500" />
            <h2 className="text-lg font-semibold">Filtres de recherche</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Rechercher par titre, matière ou professeur..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <Select value={selectedFiliere} onValueChange={setSelectedFiliere}>
              <SelectTrigger>
                <SelectValue placeholder="Toutes les filières" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les filières</SelectItem>
                <SelectItem value="FCA">FCA</SelectItem>
                <SelectItem value="AD">AD</SelectItem>
                <SelectItem value="GRH">GRH</SelectItem>
                <SelectItem value="SIL">SIL</SelectItem>
                <SelectItem value="JL">JL</SelectItem>
                <SelectItem value="MCC">MCC</SelectItem>
                <SelectItem value="TH">TH</SelectItem>
                <SelectItem value="BFA">BFA</SelectItem>
                <SelectItem value="TL">TL</SelectItem>
                <SelectItem value="RIT">RIT</SelectItem>
                <SelectItem value="CQGA">CQGA</SelectItem>
                <SelectItem value="EGP">EGP</SelectItem>
                <SelectItem value="ABM">ABM</SelectItem>
                <SelectItem value="SJP">SJP</SelectItem>
                <SelectItem value="SE">SE</SelectItem>
                <SelectItem value="GCL">GCL</SelectItem>
                <SelectItem value="GPM">GPM</SelectItem>
                <SelectItem value="RI">RI</SelectItem>
                <SelectItem value="SSI">SSI</SelectItem>
                <SelectItem value="GC">GC</SelectItem>
                <SelectItem value="GE">GE</SelectItem>
                <SelectItem value="GT">GT</SelectItem>
                <SelectItem value="EA">EA</SelectItem>
                <SelectItem value="HR">HR</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedNiveau} onValueChange={setSelectedNiveau}>
              <SelectTrigger>
                <SelectValue placeholder="Tous les niveaux" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les niveaux</SelectItem>
                <SelectItem value="L1">L1</SelectItem>
                <SelectItem value="L2">L2</SelectItem>
                <SelectItem value="L3">L3</SelectItem>
                <SelectItem value="M1">M1</SelectItem>
                <SelectItem value="M2">M2</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedAnnee} onValueChange={setSelectedAnnee}>
              <SelectTrigger>
                <SelectValue placeholder="Toutes les années" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les années</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
                <SelectItem value="2019">2019</SelectItem>
                <SelectItem value="2018">2018</SelectItem>
                <SelectItem value="2017">2017</SelectItem>
                <SelectItem value="2016">2016</SelectItem>
                <SelectItem value="2015">2015</SelectItem>
                <SelectItem value="2014">2014</SelectItem>
                <SelectItem value="2013">2013</SelectItem>
                <SelectItem value="2012">2012</SelectItem>
                <SelectItem value="2011">2011</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredExamens.length} épreuve{filteredExamens.length > 1 ? "s" : ""} trouvée
            {filteredExamens.length > 1 ? "s" : ""}
          </p>
        </div>

        {/* Examens Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExamens.map((exam) => (
            <Card key={exam.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getTypeColor(exam.type)}>{exam.type}</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {exam.date}
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">{exam.title}</CardTitle>
                <CardDescription>
                  <div className="space-y-1">
                    <div>
                      {exam.filiere} • {exam.niveau} • {exam.annee}
                    </div>
                    <div className="text-blue-600 font-medium">{exam.matiere}</div>
                    <div>Prof. {exam.professeur}</div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Durée: {exam.duree}</span>
                    <span>{exam.pages} pages</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  {/* Aperçu */}
                  <a
                    className="flex-1 bg-transparent border border-gray-300 rounded-md text-gray-700 text-sm flex items-center justify-center hover:bg-gray-100"
                    href={exam.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Aperçu
                  </a>

                  {/* Télécharger */}
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

        {/* No Results */}
        {filteredExamens.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucun résultat trouvé</h3>
            <p className="text-gray-600 mb-4">
              Essayez de modifier vos critères de recherche ou de supprimer certains filtres.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedFiliere("all")
                setSelectedNiveau("all")
                setSelectedAnnee("all")
              }}
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
