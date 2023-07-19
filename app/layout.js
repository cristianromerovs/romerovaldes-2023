import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { FloatingWhatsapp } from './components/FloatingWhatsapp'
import HuinchaTop from './components/HuinchaTop'
import './globals.css'

export const metadata = {
  title: 'Abogados Penales Expertos - Romero Valdés & Cía',
  description: 'Somos un equipo de abogados penales expertos, contamos con una amplia experiencia en juicios, nos desempeñamos como abogados querellantes y defensores.',
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
    </html>
  )
}
