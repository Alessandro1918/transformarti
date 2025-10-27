// import localFont from "next/font/local"
import { Nunito_Sans, Montserrat, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// })
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// })
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
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`antialiased font-body ${nunito_sans.variable} ${montserrat.variable} ${lato.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
