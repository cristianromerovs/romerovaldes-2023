import mapImage from "../../public/map-image.webp";
import Link from "next/link";
import Image from "next/image";

const Contacto = () => {
  return (
    <div className="container mx-auto px-4 lg:px-0">
      <section className="my-20 contact_section" id="contact">
        <div className="grid grid-cols-12 gap-6 mb-10">
          <div className="col-span-12">
            <h3 className="text-3xl text-center md:text-start font-bold tracking-tight text-yellow-600 mb-3">
              Contáctanos gratis
            </h3>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <h4 className="text-2xl font-bold tracking-tight text-gray-700">Direccion:</h4>
            <p itemProp="streetAddress" className="text-base font-normal text-gray-500 mb-5 lg:mb-10">Huelén 10, Of 403, Providencia, Región Metropolitana.</p>
            <h4 className="text-2xl font-bold tracking-tight text-gray-700">Teléfono:</h4>
            <p itemProp="telephone" className="text-base font-normal text-gray-500 mb-5 lg:mb-10">+56922468611</p>
            <h4 className="text-2xl font-bold tracking-tight text-gray-700">Email:</h4>
            <p itemProp="email" className="text-base font-normal text-gray-500 mb-5 lg:mb-10">alejandra@romerovaldes.cl</p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <Link target="_blank" href={'https://goo.gl/maps/P7GfQvoKbS6EZT3y5'}>
              <Image
                src={mapImage}
                alt="Imagen de mapa Google Maps mostrando la dirección de nuestra oficina"
                className="w-full"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
