// import localFont from "next/font/local"
import { Nunito_Sans, Montserrat, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { jsonLd } from "../requests/structured-data"  
import "./globals.css"

const nunito_sans = Nunito_Sans({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-nunito_sans"
})
const montserrat = Montserrat({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-montserrat",
})
const lato = Lato({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lato"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="pt-BR"
      className={`${nunito_sans.variable} ${montserrat.variable} ${lato.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
