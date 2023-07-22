"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { TextInput, Label, Radio, Button } from "flowbite-react";
import { sendContactForm } from "@/lib/api";
import DismissableAlert from "./AlertSuccess";

const Formulario = () => {
  const { register, handleSubmit } = useForm();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); 

  const onSubmit = async (data) => {
    const formData = { ...data };
    console.log(formData);
    try {
      await sendContactForm(formData);
      setIsFormSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      {isFormSubmitted && (
        <DismissableAlert />
      )}
      <p className="text-sm font-semibold mb-3">Indicanos tu correo</p>
      <TextInput
        id="email"
        type="email"
        inputMode="email"
        placeholder="tu@correo.com"
        required={true}
        {...register("email")}
        className="input__text"
      />
      <p className="text-sm font-semibold mt-5 mb-3">
        Indicanos tu numero de teléfono
      </p>
      <TextInput
        id="phone"
        type="tel"
        placeholder="Tu teléfono"
        required={true}
        inputMode="tel"
        maxLength={9}
        {...register("phone")}
        className="input__text"
      />
      <fieldset className="flex flex-col gap-4 mt-5 mb-3" id="radio">
        <legend className="text-sm font-semibold mb-3">
          Elige como te contactaremos
        </legend>
        <div className="flex items-center gap-2">
          <fieldset className="flex max-w-md flex-col gap-4" id="radio">
            <div className="flex items-center gap-2">
              <Radio
                defaultChecked
                id="whatsapp"
                name="opción whatsapp"
                value="whatsapp"
                {...register("option")}
              />
              <Label htmlFor="whatsapp">Whatsapp</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                id="video-call"
                name="opción video llamada"
                value="video-call"
                {...register("option")}
              />
              <Label htmlFor="video-call">Video llamada</Label>
            </div>
          </fieldset>
        </div>
      </fieldset>
      <Button gradientDuoTone="cyanToBlue" size="lg" disabled={isFormSubmitted} type="submit"
          aria-label="agendar una consulta con nosotros">{isFormSubmitted ? "Formulario Enviado" : "Agendar"}</Button>
      {/* <button
          type="submit"
          aria-label="agendar una consulta con nosotros"
          className="block w-full mt-10 rounded-3xl bg-yellow-400 px-3.5 py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
          disabled={isFormSubmitted}
        >
          {isFormSubmitted ? "Formulario Enviado" : "Agendar"}
        </button> */}
    </form>
  );
};

export default Formulario;
