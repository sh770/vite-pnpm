import react_logo from "../assets/react.svg"

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <img className="nav-logo" src={react_logo} />

        <ul className="nav-items">

          <li>ראשון</li>
          <li>שני</li>
          <li>שלישי</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;