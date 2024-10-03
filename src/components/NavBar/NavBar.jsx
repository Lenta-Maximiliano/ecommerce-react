import './NavBar.css'

export default function NavBar () {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Mi Logo</h1>
        <div className="navbar-links">
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#cervezas">Cervezas</a></li>
            <li><a href="#vinos">Vinos</a></li>
            <li><a href="#sidras">Sidras</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}