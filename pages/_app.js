import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import { Poppins } from '@next/font/google'
import { useEffect } from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500']
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle")
  }, []);

  return (
  <main className={poppins.className}>
    <Component {...pageProps} />
  </main>
)}

export default MyApp
