import Image from "next/image";
import mainImage from "../public/main.webp";
import logoLong from "../public/romerovaldes-long.png";
import Link from "next/link";

export default function Home() {
  return (
    <main itemScope itemType="http://schema.org/LegalService">
      <div className="container mx-auto px-4 md:px-10 2xl:px-0">
        <section className="my-20 md:my-32 lg:my-36 2xl:my-80 main_section" id="main">
          <div className="grid grid-cols-4 gap-6">
            <div className="flex justify-center items-center col-span-4 md:col-span-2">
              <Image
                src={mainImage}
                alt="imagen estatua sosteniendo una balanza haciendo referencia a la justicia"
                className="rounded-full main__img"
              />
            </div>
            <div className="flex flex-col justify-center col-span-4 md:col-span-2">
              <h1 className="main__title text-3xl md:text-5xl font-bold tracking-tight text-gray-700">
                Abogados penales comprometidos con tu caso.
              </h1>
              <Link href="/agendamiento"
                type="submit"
                className="block w-full md:w-2/4 mt-10 rounded-3xl bg-yellow-400 px-3.5 py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto px-4 mb-20 md:px-10 2xl:px-0">
            <div className="grid grid-cols-4">
              <div className="flex flex-col col-span-4">
                <h3 className="text-3xl text-center font-bold tracking-tight text-yellow-600 mb-3">
                  ¿Por qué elegirnos?
                </h3>
                <p className="text-base font-normal text-gray-700 text-justify" itemProp="description">
                  <b>Romero Valdés & Cía</b> es un equipo de abogados con amplia experiencia
                  en Derecho Penal y Derecho de Familia. Ofrecen soluciones legales
                  efectivas para clientes que enfrentan situaciones legales
                  complicadas. Su enfoque se basa en <strong>brindar un servicio legal
                    completo y personalizado, manteniendo una relación transparente y
                    honesta con los clientes.</strong> Nos esforzamos por proporcionar apoyo y
                  comunicación constante para que nuestros clientes se sientan tranquilos
                  y acompañados durante todo el proceso. Nuestro despacho trabaja en
                  casos relacionados con <strong>delitos económicos, delitos sexuales,
                    delitos de drogas, violencia familiar y conducción en estado de
                    ebriedad, entre otros.</strong> Si necesitas ayuda con tu caso, puedes agendar una consulta con nosotros.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={logoLong}
                alt="logo romero valdes escrito a mano haciendo referencia a su firma de confianza"
                className="w-4/5 lg:w-2/4 h-auto mt-10"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
