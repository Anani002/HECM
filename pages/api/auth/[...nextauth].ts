import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" }
      },
      async authorize(credentials) {
        // Remplace par ta logique de vérification
        if (
          credentials?.email === "ananijasper@gmail.com" &&
          credentials?.password === "admin123"
        ) {
          return { id: "1", name: "Admin", email: "admin@hecm.edu" }
        }
        return null
      }
    })
  ],
  session: { strategy: "jwt" }
})