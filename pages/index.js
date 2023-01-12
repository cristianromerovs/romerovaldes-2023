import Head from 'next/head'
import Layout from '../components/Layout'
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <html lang='es'/>
        <title>Abogados Penales Expertos | ROMERO VALDÉS & CIA.</title>
        

      </Head>

      <main>
        <Layout>
          <Main />
        </Layout>
      </main>
    </>
  )
}
