"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import navLogo from "../../public/logo-circle.png";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Agenda Consulta", href: "/agendamiento" },
  { name: "Contacto", href: "/contacto"}
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="isolate bg-neutral-900">
      <div className="px-6 py-4 lg:px-8 xl:px-16 navbar">
        <nav
          className="flex items-center justify-between"
          aria-label="barra de navegación"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">
                Abogados penales Romero Valdés y Cía
              </span>
              <Image
                src={navLogo}
                className="h-8 navbar__logo"
                alt="Logo Romero Valdes y Cia"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menu lateral</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium leading-6 text-white hover:text-gray-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel
            focus="true"
            className="fixed inset-0 z-10 overflow-y-auto bg-neutral-900 px-6 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  src={navLogo}
                  className="h-8 navbar__logo"
                  alt="Logo Romero Valdes y Cia"
                />
              </Link>

              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Cerrar menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-white hover:bg-gray-400/10"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link href={"tel:+569-22468611"} className="mx-3 flex items-center rounded-lg py-2 px-3 text-base font-medium leading-7 text-white hover:bg-gray-400/10"><PhoneIcon className="h-4 w-4 mr-2" aria-hidden="true" />+56 922 468 611</Link>
                  <Link href={"mailto:alejandra@romerovaldes.cl"} className="mx-3 flex items-center rounded-lg py-2 px-3 text-base font-medium leading-7 text-white hover:bg-gray-400/10"><EnvelopeIcon className="h-4 w-4 mr-2" aria-hidden="true" />alejandra@romerovaldes.cl</Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </div>
  );
};

export default Navbar;
