"use client";

import { Footer } from "flowbite-react";

export default function DefaultFooter() {
  return (
    <Footer container>
      <Footer.Copyright by="Romero Valdés Abogados Penalistas" href="https://www.romerovaldes.cl" year={2023} />
      <Footer.LinkGroup>
        <Footer.Link href="/nosotros">Nosotros</Footer.Link>
        <Footer.Link href="/servicios">Servicios</Footer.Link>
        <Footer.Link href="/agendamiento">Consultas</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
