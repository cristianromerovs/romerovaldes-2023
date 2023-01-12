import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top py-3">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="#" className="nav-link active" aria-current="page">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link">
                Quiénes somos
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link">
                Áreas que trabajamos
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link">
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
