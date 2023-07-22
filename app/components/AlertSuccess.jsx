'use client';

import { Alert } from 'flowbite-react';

export default function DismissableAlert() {
  return (
    <Alert
      color="success"
      onDismiss={()=>alert("Alert dismissed!")}
      className='mb-10'
    >
      <span>
        <p>
          <span className="font-medium mr-2">
            Formulario enviado con exito!
          </span>
          Te contactaremos dentro de los proximos minutos.
        </p>
      </span>
    </Alert>
  )
}


