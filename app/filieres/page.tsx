import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  FileText,
  Briefcase,
  BookOpen,
  Building2,
  Users,
  ShieldCheck,
  Calculator,
  Globe,
  Presentation,
  Landmark,
  Network,
  ClipboardList,
  BadgeCheck,
  FileSearch,
  Settings,
  GraduationCap,
  Brain,
  FolderKanban,
  Gavel,
  Coins,
  Bus,
  Cpu,
  FlaskConical,
  HardDrive,
  Wrench,
  Ruler,
  Droplet,
  Utensils,
  LineChart,
  Newspaper,
  Megaphone,
  Hotel,
  Banknote,
  Truck,
  Wifi,
  CheckCheck,
  Rocket,
  Microscope,
  Scale,
  BarChart,
  Building,
  Zap,
  UtensilsCrossed,
  Book,
} from "lucide-react";
import Link from "next/link"
import Logo from "@/components/Logo"

export default function FilieresPage() {
  const filieres = [
  {
    id: "fca",
    name: "Finance Comptabilité et Audit",
    description: "Expertise comptable, audit et analyse financière",
    niveaux: ["L1", "L2", "L3", "M1", "M2"],
    matieres: ["Comptabilité Générale", "Audit", "Fiscalité", "Analyse Financière"],
    examensCount: 0,
    color: "bg-green-600",
    icon: LineChart,
  },
  {
    id: "ad",
    name: "Assistant de Direction",
    description: "Gestion administrative et organisation d'entreprise",
    niveaux: ["L1", "L2", "L3"],
    matieres: ["Secrétariat", "Gestion du Temps", "Communication", "Bureautique"],
    examensCount: 0,
    color: "bg-yellow-500",
    icon: ClipboardList,
  },
  {
    id: "grh",
    name: "Gestion des Ressources Humaines",
    description: "Gestion du personnel, droit du travail, communication",
    niveaux: ["L1", "L2", "L3", "M1", "M2"],
    matieres: ["Psychologie du Travail", "Droit du Travail", "GRH", "Management RH"],
    examensCount: 0,
    color: "bg-indigo-500",
    icon: Users,
  },
  {
    id: "sil",
    name: "Systèmes Informatiques et Logiciels",
    description: "Programmation, systèmes, base de données",
    niveaux: ["L1", "L2", "L3", "M1", "M2"],
    matieres: ["Algorithmique", "POO", "Base de Données", "Développement Web"],
    examensCount: 14,
    color: "bg-blue-600",
    icon: Cpu,
  },
  {
    id: "jl",
    name: "Journalisme",
    description: "Presse, rédaction, éthique et techniques de communication",
    niveaux: ["L1", "L2", "L3"],
    matieres: ["Écriture Journalistique", "Déontologie", "Interview", "Production Média"],
    examensCount: 0,
    color: "bg-red-500",
    icon: Newspaper,
  },
  {
    id: "mcc",
    name: "Marketing Communication et Commerce",
    description: "Marketing digital, stratégie de communication et commerce international",
    niveaux: ["L1", "L2", "L3", "M1", "M2"],
    matieres: ["Marketing Digital", "Stratégie Commerciale", "Communication", "Négociation"],
    examensCount: 0,
    color: "bg-purple-500",
    icon: Megaphone,
  },
  {
    id: "th",
    name: "Tourisme et Hôtellerie",
    description: "Management hôtelier, guidage touristique, accueil",
    niveaux: ["L1", "L2", "L3"],
    matieres: ["Accueil Client", "Gestion Hôtelière", "Guidage", "Tourisme Durable"],
    examensCount: 0,
    color: "bg-amber-600",
    icon: Hotel,
  },
  {
    id: "bfa",
    name: "Banque Finance et Assurance",
    description: "Produits bancaires, gestion des risques et assurances",
    niveaux: ["L1", "L2", "L3", "M1", "M2"],
    matieres: ["Produits Financiers", "Assurance Vie", "Analyse de Crédit", "Risque Bancaire"],
    examensCount: 0,
    color: "bg-cyan-600",
    icon: Banknote,
  },
  {
    id: "tl",
    name: "Transport et Logistique",
    description: "Chaîne d’approvisionnement, gestion de transport",
    niveaux: ["L1", "L2", "L3", "M1"],
    matieres: ["Gestion Logistique", "Transport International", "Douane", "Supply Chain"],
    examensCount: 0,
    color: "bg-emerald-600",
    icon: Truck,
  },
  {
    id: "rit",
    name: "Réseaux Informatiques et Télécommunications",
    description: "Infrastructure réseaux, sécurité, transmission",
    niveaux: ["L1", "L2", "L3", "M1"],
    matieres: ["Réseaux", "Systèmes", "Télécommunications", "Sécurité Réseau"],
    examensCount: 0,
    color: "bg-gray-600",
    icon: Wifi,
  },
  {
    id: "cqga",
    name: "Contrôle Qualité et Génie Agroalimentaire",
    description: "Normes qualité, sécurité sanitaire, process agro",
    niveaux: ["L1", "L2", "L3"],
    matieres: ["Hygiène Alimentaire", "Normes ISO", "Microbiologie", "Agro-industrie"],
    examensCount: 0,
    color: "bg-lime-600",
    icon: CheckCheck,
  },
  {
    id: "egp",
    name: "Entrepreneuriat et Gestion des Projets",
    description: "Montage de projets, innovation, gestion financière",
    niveaux: ["L1", "L2", "L3", "M1", "M2"],
    matieres: ["Création d'Entreprise", "Gestion de Projet", "Business Plan", "Innovation"],
    examensCount: 0,
    color: "bg-pink-600",
    icon: Rocket,
  },
  {
    id: "abm",
    name: "Analyses Biomédicales",
    description: "Techniques de laboratoire, hématologie, biologie",
    niveaux: ["L1", "L2", "L3"],
    matieres: ["Biochimie", "Hématologie", "Microbiologie", "Parasitologie"],
    examensCount: 0,
    color: "bg-fuchsia-600",
    icon: Microscope,
  },
  {
    id: "sjp",
    name: "Sciences Juridiques et Politiques",
    description: "Droit, institutions politiques, droit constitutionnel",
    niveaux: ["L1", "L2", "L3", "M1", "M2"],
    matieres: ["Droit Civil", "Droit Constitutionnel", "Droit Administratif", "Relations Internationales"],
    examensCount: 0,
    color: "bg-rose-600",
    icon: Scale,
  },
  {
    id: "se",
    name: "Sciences Économiques",
    description: "Microéconomie, macroéconomie, économétrie",
    niveaux: ["L1", "L2", "L3", "M1", "M2"],
    matieres: ["Microéconomie", "Macroéconomie", "Économétrie", "Développement Économique"],
    examensCount: 0,
    color: "bg-sky-600",
    icon: BarChart,
  },
  {
    id: "gcl",
    name: "Gestion des Collectivités Locales",
    description: "Administration publique, gestion municipale",
    niveaux: ["L1", "L2", "L3"],
    matieres: ["Gestion Territoriale", "Droit Public", "Décentralisation", "Gouvernance Locale"],
    examensCount: 0,
    color: "bg-teal-600",
    icon: Landmark,
  },
  {
    id: "gpm",
    name: "Gestion et Passation des Marchés",
    description: "Procédures de passation, marchés publics",
    niveaux: ["L1", "L2", "L3", "M1"],
    matieres: ["Droit des Marchés Publics", "Planification", "Passation", "Suivi Évaluation"],
    examensCount: 0,
    color: "bg-yellow-700",
    icon: FileSearch,
  },
  {
    id: "ri",
    name: "Relations Internationales",
    description: "Diplomatie, droit international, géopolitique",
    niveaux: ["L1", "L2", "L3", "M1", "M2"],
    matieres: ["Relations Diplomatiques", "Géopolitique", "Droit International", "Organisations Internationales"],
    examensCount: 0,
    color: "bg-blue-700",
    icon: Globe,
  },
  {
    id: "ssi",
    name: "Sécurité des Systèmes Informatiques",
    description: "Sécurité, cybersécurité, cryptographie",
    niveaux: ["L1", "L2", "L3", "M1"],
    matieres: ["Sécurité Réseaux", "Cryptographie", "Sécurité Web", "Hacking Éthique"],
    examensCount: 0,
    color: "bg-neutral-700",
    icon: ShieldCheck,
  },
  {
    id: "gc",
    name: "Génie Civil",
    description: "Structures, béton armé, travaux publics",
    niveaux: ["L1", "L2", "L3", "M1", "M2"],
    matieres: ["Mécanique des Structures", "Béton Armé", "Topographie", "Résistance des Matériaux"],
    examensCount: 0,
    color: "bg-gray-800",
    icon: Building,
  },
  {
    id: "ge",
    name: "Génie Électrique",
    description: "Circuits, machines, énergie",
    niveaux: ["L1", "L2", "L3", "M1", "M2"],
    matieres: ["Électronique", "Machines Électriques", "Électrotechnique", "Automatisme"],
    examensCount: 0,
    color: "bg-blue-800",
    icon: Zap,
  },
  {
    id: "gt",
    name: "Géométrie Topographe",
    description: "Cartographie, levé topographique",
    niveaux: ["L1", "L2", "L3"],
    matieres: ["Topographie", "DAO", "Géodésie", "Cartographie"],
    examensCount: 0,
    color: "bg-emerald-800",
    icon: Ruler,
  },
  {
    id: "ea",
    name: "Eau et Assainissement",
    description: "Traitement de l’eau, réseaux d’assainissement",
    niveaux: ["L1", "L2", "L3"],
    matieres: ["Hydraulique", "Traitement des Eaux", "Assainissement", "Pollution"],
    examensCount: 0,
    color: "bg-cyan-800",
    icon: Droplet,
  },
  {
    id: "hr",
    name: "Hôtellerie Restauration",
    description: "Cuisine, service, gestion de la restauration",
    niveaux: ["L1", "L2", "L3"],
    matieres: ["Cuisine Professionnelle", "Service en Salle", "Gestion Hôtelière", "Hygiène Alimentaire"],
    examensCount: 0,
    color: "bg-orange-700",
    icon: UtensilsCrossed,
  },
];

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
              <Link href="/examens" className="text-gray-700 hover:text-blue-600 font-medium">
                Examens
              </Link>
              <Link href="/filieres" className="text-blue-600 font-medium">
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Filières d'Étude</h1>
          <p className="text-gray-600">
            Découvrez les différentes filières proposées à l'université HECM Atrokpocodji et accédez aux épreuves correspondantes
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">{filieres.length}</p>
                <p className="text-gray-600">Filières</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">
                  {filieres.reduce((total, filiere) => total + filiere.examensCount, 0)}
                </p>
                <p className="text-gray-600">Épreuves</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-lg">
                <GraduationCap className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">5</p>
                <p className="text-gray-600">Niveaux</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
                <div className="bg-orange-100 p-3 rounded-lg">
                <Book className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">24</p>
                <p className="text-gray-600">Matières</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filières Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filieres.map((filiere) => (
            <Card key={filiere.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`${filiere.color} p-3 rounded-lg`}>
                    <filiere.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary">{filiere.examensCount} épreuves</Badge>
                </div>
                <CardTitle className="text-xl">{filiere.name}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{filiere.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {/* Niveaux */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Niveaux disponibles</h4>
                    <div className="flex flex-wrap gap-1">
                      {filiere.niveaux.map((niveau) => (
                        <Badge key={niveau} variant="outline" className="text-xs">
                          {niveau}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Matières principales */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Matières principales</h4>
                    <div className="space-y-1">
                      {filiere.matieres.slice(0, 3).map((matiere) => (
                        <p key={matiere} className="text-sm text-gray-600">
                          • {matiere}
                        </p>
                      ))}
                      {filiere.matieres.length > 3 && (
                        <p className="text-sm text-gray-500">+ {filiere.matieres.length - 3} autres matières</p>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link href={`/examens?filiere=${filiere.id.toUpperCase()}`}>
                    <Button className="w-full mt-4">Voir les épreuves</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 rounded-lg p-8 mt-12 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Vous ne trouvez pas votre filière ?</h2>
          <p className="mb-6 opacity-90">
            Contactez-nous pour nous faire part de vos besoins. Nous ajoutons régulièrement de nouvelles filières et
            épreuves.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Nous contacter
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
