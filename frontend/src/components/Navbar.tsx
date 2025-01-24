import "./css/NavbarStyles.css"
import { useState } from "react";
function Navbar(){
    const [isNavActive , setIsNavActive] = useState(true)

    const handleNavbar=()=>{
        setIsNavActive((prevState)=>!prevState)
    

      
    }
    return(
        <div className={`navbar-wrapper ${isNavActive ? "": "active"}`}>
            <div className="close-btn-wrapper">
            <button onClick={handleNavbar} className="close-btn">{isNavActive ? <i className="fa fa-bars"></i>: "x"}</button>
            </div>
            <ul className="ul">
                <li><a>clothing</a></li>
                <li><a>books</a></li>
                <li><a>merchandise</a></li>
                <li><a>toys</a></li>
            </ul>
        </div>
    )
}
export default Navbar