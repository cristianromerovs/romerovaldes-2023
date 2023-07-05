"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { TextInput, Button, Label, Radio } from "flowbite-react";
import { sendContactForm } from "@/lib/api";

const Formulario = () => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = { ...data, option: selectedOption };
    console.log(formData);
    try {
      await sendContactForm(formData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheck1 = () => {
    setSelectedOption("whatsapp");
    setCheck1(!check1);
    setCheck2(false);
  };

  const handleCheck2 = () => {
    setSelectedOption("video-call");
    setCheck2(!check2);
    setCheck1(false);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <p className="text-sm font-semibold mb-3">Indicanos tu correo</p>
      <TextInput
        id="email"
        type="text"
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
        type="number"
        placeholder="+56"
        required={true}
        maxLength={9}
        {...register("phone")}
        className="input__text"
      />
      <fieldset className="flex flex-col gap-4 mt-5 mb-3" id="radio">
        <legend className="text-sm font-semibold mb-3">
          Elige como te contactaremos
        </legend>
        <div className="flex items-center gap-2">
          <Radio
            id="whatsapp"
            name="whatsapp"
            value="whatsapp"
            checked={selectedOption === "whatsapp"}
            onChange={handleCheck1}
          />
          <Label htmlFor="whatsapp">Whatsapp</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            id="video-call"
            name="video-call"
            value="video-call"
            checked={selectedOption === "video-call"}
            onChange={handleCheck2}
          />
          <Label htmlFor="video-call">Video llamada</Label>
        </div>
      </fieldset>
      <Button className="mt-6" type="submit">
        Agendar
      </Button>
    </form>
  );
};

export default Formulario;
