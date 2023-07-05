import Image from "next/image";
import mainImage from "../public/main.jpeg";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-4 md:px-0">
        <section className="my-10 md:my-32 lg:my-40 main_section" id="main">
          <div className="grid grid-cols-4 gap-6">
            <div className="flex justify-center items-center col-span-4 md:col-span-2">
              <Image
                src={mainImage}
                alt="imagen estatua sosteniendo una balanza haciendo referencia a la justicia"
                className="rounded-full main__img"
              />
            </div>
            <div className="flex flex-col justify-center col-span-4 md:col-span-2">
              <h1 className="main__title text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
                Abogados penales enfocados en dar apoyo y solución real a tu
                problema.
              </h1>
              <button
                type="submit"
                className="block w-full md:w-2/4 mt-10 rounded-3xl bg-indigo-600 px-3.5 py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contáctanos
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
