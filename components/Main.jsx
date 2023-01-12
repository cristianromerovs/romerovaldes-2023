import Link from 'next/link'
import Image from 'next/image'

export default function Main() {
  return (
    <section className="top d-flex align-items-center" id="main">
      <div className="container">
        <div className="row">
          <div className="order-1 order-md-0 col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <h1 className="text__title">Abogados penales comprometidos, enfocados en dar apoyo y solución real a tu problema.</h1>
            <Link href="#" className="btn btn__consultanos mt-md-3 mt-lg-4">
                Haz tu consulta
            </Link>
          </div>
          <div className="order-0 order-md-1 col-12 col-md-6 d-flex align-items-center justify-content-center">
            <Image src="/law.png" width={800} height={800} alt="imagen de una escultura representativa de la justicia" className='img__main' />
          </div>
        </div>
      </div>
    </section>
  );
}
