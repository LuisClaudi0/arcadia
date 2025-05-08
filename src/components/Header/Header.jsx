import { Link } from "react-router-dom";

const Header = () => {
  return(
    <div className="header">
      <Link to="/"><img src="/assets/img/arcadia.webp" alt="Logo Arcadia" className="h-12 w-auto lg:h-12"/></Link>
    </div>
  )
}

export default Header;