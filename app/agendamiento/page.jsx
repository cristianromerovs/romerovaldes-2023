'use client'

import Formulario from "../components/Formulario";

const Agendamiento = () => {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <section className="my-20 schedule_section" id="schedule">
        <div className="grid grid-cols-12 gap-6 mb-10">
          <div className="col-span-12">
            <h3 className="text-3xl font-bold tracking-tight text-cyan-600 mb-3 px-6">
              Agenda tu consulta gratuita
            </h3>
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