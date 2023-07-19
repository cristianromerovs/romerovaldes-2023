"use client";

import { Footer } from "flowbite-react";

export default function DefaultFooter() {
  return (
    <Footer container className="footer-component">
      <Footer.Copyright by="Romero Valdés Abogados" href="https://www.romerovaldes.cl" year={2023} />
      <Footer.LinkGroup className="hidden md:flex">
        <Footer.Link className="mr-2" href="/nosotros">Nosotros</Footer.Link>
        <Footer.Link className="mr-2" href="/servicios">Servicios</Footer.Link>
        <Footer.Link className="mr-2" href="/agendamiento">Consultas</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
