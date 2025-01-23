import "./css/NavbarStyles.css"
function Navbar(){
    return(
        <div className="navbar-wrapper">
            <ul className="ul">
                <li><a>Shoppingcart</a></li>
                <li><a>Store</a></li>

                <li ><a>Sign in</a></li>
                <li ><a>Sign up</a></li>
            </ul>
        </div>
    )
}
export default Navbar