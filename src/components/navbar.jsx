import { useState } from "react";
import { Logo } from "./logo";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

//React router doesn't automatically scroll to hash links, <a> must be used instead
function optimalLink(ref) {
  if (ref.link.startsWith("#")){
    return (<a href={ref.link} className="nav-link">{ref.name}</a>)
  }
  return(<Link to={ref.link} className="nav-link">{ref.name}</Link>)
}

export default function Navbar({links}) {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Logo/>
          
          <div className="nav-links">
            {links.map((ref)=> (optimalLink(ref)))}
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        {links.map((ref)=> (optimalLink(ref)))}
      </div>
    </>
  );
}