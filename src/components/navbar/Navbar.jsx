import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";


const Navbar = () => {

    const user = JSON.parse(localStorage.getItem('users'))

    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear('users')
        navigate("/login")
    }

    const cartItems = useSelector((state) => state.cart)

    // navList Data
    const navList = (
        <ul className="flex space-x-3 gap-3 text-white font-medium text-md px-5 ">
            {/* Home */}
            <li>
                <Link to={'/'}>Home</Link>
            </li>

            {/* All Product */}
            <li>
                <Link to={'/allproduct'}>All Product</Link>
            </li>

            {/* Signup */}
            {!user ? <li>
                <Link to={'/signup'}>Signup</Link>
            </li> : ""
            }

            {/* Login */}
            {!user ? <li>
                <Link to={'/login'}>Login</Link>
            </li> : ""
            }
            
              {/* User */}
              {user?.role === "user" && <li>
                <Link to={'/user-dashboard'}>{user.name}</Link>
            </li>}

             {/* Admin */}
             {user?.role === "admin" && <li>
                <Link to={'/admin-dashboard'}>Admin</Link>
            </li>}

          {/* logout */}
          {user && <li className=" cursor-pointer" onClick={logout}>
            Logout
            </li>}

            {/* Cart */}
            <li>
                <Link to={'/cart'}>
                   Cart({cartItems.length})
                </Link>
            </li>
        </ul>
    )
    return (
        <nav className="bg-[#57b7aa] sticky top-0">
            {/* main  */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                {/* left  */}
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                    <h2 className=" font-bold text-white text-2xl text-center">E-Bharat</h2>
                    </Link>
                </div>

                {/* right  */}
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>

                {/* Search Bar  */}
                <SearchBar />
            </div>
        </nav>
    );
}

export default Navbar;