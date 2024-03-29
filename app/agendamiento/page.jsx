'use client'

import Formulario from "../components/Formulario";

const Agendamiento = () => {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <section className="my-20 schedule_section" id="schedule">
        <div className="grid grid-cols-12 gap-6 mb-10">
          <div className="col-span-12">
            <h2 className="text-3xl text-center md:text-start font-bold tracking-tight text-yellow-600 mb-3 px-6">
              Agenda tu consulta gratuita
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 calendar p-6">
            <Formulario />
          </div>
          <div className="col-span-12 md:col-span-6 bg-form m-6 rounded-lg hidden md:block"></div>
        </div>
      </section>
    </div>
  );
};

export default Agendamiento;