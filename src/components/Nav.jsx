import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-in">
          <Link className="logo" to="/">
            <img src="/logos/Hapnn-green.png" alt="Logo" />
          </Link>
          <nav className="nav-links">
            <Link to="/services">Services</Link>
            <Link to="/#numbers">Numbers</Link>
            <Link to="/#process">Process</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <Link className="btn btn-primary btn-sm nav-cta" to="/contact">
            Book a call
          </Link>
        </div>
      </header>
      <nav className="bottom-nav">
        <Link to="/services">Services</Link>
        <Link to="/#numbers">Numbers</Link>
        <Link to="/#process">Process</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  )
}
