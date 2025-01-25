import "./css/NavbarStyles.css"
import { useState } from "react";
import cartIcon from "../assets/grocery-store.png"
function Navbar(){
    const [isNavActive , setIsNavActive] = useState(true)

    const handleNavbar=()=>{
        setIsNavActive((prevState)=>!prevState)
    

      
    }
    return(
        <div className="container">
            <div className={`wrapper ${isNavActive ? "": "active"}`}>
                <ul className="main-nav-ul">
                    <li className="logo">Berserk Bazaar</li>
                    <li><button className="nav-btn-shoppingCart"><img src={cartIcon} alt="Shopping Cart"></img></button></li>
                    <li><button className="nav-btn-likedItems"><i className="fa fa-heart"></i></button></li>
                </ul>
                </div>
        <div className={`navbar-wrapper ${isNavActive ? "": "active"}`}>
            <div className="close-btn-wrapper">
            <button onClick={handleNavbar} className="close-btn">{isNavActive ? <i className="fa fa-bars"></i>: "x"}</button>
            </div>
            <ul className="ul">
                <li><a>Clothing</a></li>
                <li><a>Books</a></li>
                <li><a>Merchandise</a></li>
                <li><a>Toys</a></li>
            </ul>
        </div>
        </div>
    )
}
export default Navbar