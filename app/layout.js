import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react';
import { FloatingWhatsapp } from './components/FloatingWhatsapp'
import HuinchaTop from './components/HuinchaTop'
import './globals.css'

export const metadata = {
  title: 'Abogados Penales Expertos - Romero Valdés & Cía',
  description: 'Abogados penales expertos, amplia experiencia en juicios, nos desempeñamos como abogados querellantes y defensores. Agenda tu consulta gratis',
  keywords: 'Mejores abogados penales, libertad condicional, robos y hurtos, estafas, delitos sexuales, eliminación de antecedentes, abogado santiago, abogados defensores',
  robots: "follow, index"
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <HuinchaTop />
        {children}
        <FloatingWhatsapp />
        <Footer />
      </body>
      <Analytics />
    </html>
  )
}
