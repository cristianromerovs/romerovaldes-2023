"use client";

import { Card } from "flowbite-react";

export default function CardServicios({ data }) {
  const { titulo, elementos } = data;

  return (
    <Card
      className="max-w-sm col-span-12 md:col-span-6 lg:col-span-4"
      title={titulo}
    >
      <h3 className="text-xl font-bold leading-tight tracking-tight text-gray-600 dark:text-white">
        {titulo}
      </h3>
        <ul>
          {elementos.map((item, index) => (
            <li className="text-sm font-light text-gray-500" key={index}>{item}</li>
          ))}
        </ul>
    </Card>
  );
}
