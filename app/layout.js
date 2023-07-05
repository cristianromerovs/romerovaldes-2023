import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './globals.css'

export const metadata = {
  title: 'Abogados Penales Expertos - Romero Valdés & Cía',
  description: 'Abogados penales expertos, contamos con una amplia experiencia en juicios, nos desempeñamos como querellantes y defensores penales.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
