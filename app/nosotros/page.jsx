import React from "react";
import Image from "next/image";
import attorneyImg from "../../public/attorney.webp";
import hugoBello from "../../public/hugo-bello.webp";
import alejandraRomero from "../../public/alejandra-romero.webp";

const Nosotros = () => {
  return (
    <div className="container mx-auto px-4 md:px-10">
      <section className="my-20 about_section" id="about">
        <div className="grid grid-cols-4 gap-6 mb-10">
          <div className="flex flex-col col-span-4 md:col-span-2">
            <h2 className="text-3xl text-center md:text-start font-bold tracking-tight text-yellow-600 mb-3">
              Sobre nosotros
            </h2>
            <p className="text-base font-normal text-gray-700 text-justify">
              <b>Romero Valdés & Cía.</b> es un estudio jurídico, integrado por{" "}
              <strong>abogados penales expertos</strong>, quienes se desempeñan
              como querellantes y defensores penales. Nuestra misión es
              proteger,{" "}
              <strong>
                reclamar y defender los derechos de nuestros clientes
              </strong>{" "}
              a través de un servicio de asesoría legal y representación legal,
              personalizado, integral y a tu alcance. La visión de nuestro
              estudio jurídico se ve reflejada en el esfuerzo de nuestros
              abogados por estar en constante perfeccionamiento para brindar de
              esta forma, un excelente servicio a nuestros clientes.
            </p>
          </div>
          <div className="flex justify-center items-center col-span-4 md:col-span-2">
            <Image
              src={attorneyImg}
              alt="Imagen representativa de la ley"
              className="attorney__img rounded-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="flex flex-col col-span-4">
            <h3 className="text-3xl text-center md:text-start font-bold tracking-tight text-yellow-600 mb-3">
              Nuestra trayectoria profesional
            </h3>
            <p className="text-base font-normal text-gray-700 text-justify">
              Nuestro equipo de abogados penales se enorgullece de haber
              representado a una amplia gama de clientes a lo largo de estos
              años, brindando servicios legales especializados y obteniendo
              resultados exitosos.{" "}
              <strong>
                Hemos asistido a más de 500 clientes en casos penales diversos
              </strong>
              , desde delitos menores hasta delitos graves, y{" "}
              <strong>
                hemos logrado una tasa de éxito del 93% en resolución de casos
              </strong>
              . Nuestro enfoque se centra en brindar a nuestros clientes la
              representación legal más sólida y efectiva en el ámbito penal en
              Chile. Entendemos que enfrentar un caso penal puede ser una
              experiencia intimidante y estresante, por lo que nos comprometemos
              a brindar un servicio personalizado y comprensivo a cada uno de
              nuestros clientes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 shadow-lg p-10 my-10 rounded-lg">
          <div className="col-span-12 md:col-span-2 flex justify-center md:justify-start">
            <Image
              src={alejandraRomero}
              alt="Imagen de abogada Alejandra Romero"
              className="profile_img rounded-full"
            />
          </div>
          <div className="col-span-12 md:col-span-10">
            <h4 className="text-2xl font-bold text-center md:text-start text-yellow-600 my-3">
              Alejandra Romero Valdés
            </h4>
            <p className="text-justify text-sm text-gray-700 font-normal">
              Abogada litigante y penalista con estudios en Universidad Central
              de Chile. Posee una gran experiencia laboral en área del derecho
              penal, desarrollandose como Defensora Penal Pública, abogada
              litigante en Alto S.A, BustosGomez, entre otros. Contando con
              diversas especializaciones en el área del Derecho Penal, gracias a
              sus estudios de postgrado, consistentes en postítulo de Litigación
              Penal Estratégica en Universidad Alberto Hurtado, Magister en
              Derecho Penal y Derecho Procesal Penal en Universidad Andrés
              Bello, además posee estudios de especialización en litigación
              penal en Fundación Capacita. Contando además con diplomados en
              Derecho Penal parte general y Derecho Penal parte especial, ambos
              títulos otorgados por Universidad Andrés Bello.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
