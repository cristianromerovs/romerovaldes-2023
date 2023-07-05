import React from "react";

import {
  BanknotesIcon,
  ExclamationTriangleIcon,
  LockClosedIcon,
  PencilSquareIcon,
  XCircleIcon,
  UsersIcon,
  CommandLineIcon,
  FaceFrownIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";
import CardServicios from "../components/CardServicios";

const Servicios = () => {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <section
        className="my-20 md:mx-10 xl:mx-20 services_section"
        id="services"
      >
        <h2 className="text-2xl text-center font-bold tracking-tight text-gray-900 mb-10">
          Áreas Que Trabajamos
        </h2>
        <div className="grid grid-cols-12 gap-6 mb-10">
          <CardServicios
            data={{
              titulo: "Delitos de tránsito",
              elementos: [
                "Conducción en Estado de Ebriedad",
                "Conducción Bajo Sustancias",
                "Ley Emilia",
                "Robo de vehículos",
                "Portonazos",
              ],
            }}
          />
          <CardServicios
            data={{
              titulo: "Delitos económicos",
              elementos: ["Estafas", "Apropiación indebida", "Robos", "Hurtos"],
            }}
          />
          <CardServicios
            data={{
              titulo: "Beneficios carcelarios",
              elementos: [
                "Libertad condicional",
                "Beneficios carcelarios",
                "Indultos",
                "Eliminación de antecedentes",
                "Trámites migratorios",
              ],
            }}
          />
          <CardServicios
            data={{
              titulo: "Delitos de falsificación",
              elementos: [
                "Falsificación de documentos",
                "Administración desleal",
                "Contratos simulados",
                "Ejercicio ilegal de la profesión",
                "Delitos/infracciones Covid-19",
              ],
            }}
          />
          <CardServicios
            data={{
              titulo: "Lesiones y negligencias",
              elementos: [
                "Homicidio",
                "Amenazas",
                "Porte de armas",
                "Agresiones y riñas"
              ],
            }}
          />
          <CardServicios
            data={{
              titulo: "Delitos sexuales",
              elementos: [
                "Violaciones",
                "Abusos sexuales",
                "Estupros"
              ],
            }}
          />
          <CardServicios
            data={{
              titulo: "Delitos informáticos",
              elementos: [
                "Ciber delitos",
                "Extorsiones",
                "Material pornográfico"
              ],
            }}
          />
          <CardServicios
            data={{
              titulo: "Vida y su integridad",
              elementos: [
                "Homicidio",
                "Amenazas",
                "Porte de armas",
                "Agresiones y riñas"
              ],
            }}
          />
          <CardServicios
            data={{
              titulo: "Delitos de drogas",
              elementos: [
                "Microtráfico de drogas",
                "Tráfico de drogas",
                "Consumo y porte de drogas",
                "Cultivo o producción de drogas"
              ],
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Servicios;
