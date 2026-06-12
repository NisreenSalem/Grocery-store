import { Link } from 'react-router-dom'
import { useState } from 'react'
import  {useCart } from '../context/CartContext'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const  {cartCount} = useCart();
  return (
    <nav className="bg-white/90 backdrop-blur shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center h-16">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-green-600 tracking-wide"
        >
          GroceryStore
        </Link>

        {/* Desktop Menu */}
       <ul className="hidden md:flex space-x-8 font-medium items-center">
  <li>
    <Link
      to="/"
      className="text-gray-700 hover:text-green-600 transition duration-200 relative group"
    >
      Home
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
    </Link>
  </li>

  <li>
    <Link
      to="/products"
      className="text-gray-700 hover:text-green-600 transition duration-200 relative group"
    >
      Products
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
    </Link>
  </li>

  <li>
    <Link
      to="/cart"
      className="text-gray-700 hover:text-green-600 transition duration-200 relative group"
    >
      Cart {cartCount > 0 && <span className='bg-green-600 text-white px-1 rounded-full'>{cartCount}</span>}
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
    </Link>
  </li>

  <li>
    <Link
      to="/login"
      className="text-gray-700 hover:text-green-600 transition duration-200 relative group"
    >
      Login
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
    </Link>
  </li>
</ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "X" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="bg-white px-6 py-4 flex flex-col space-y-4 shadow-inner">
          {["Home", "Products", "Cart", "Login"].map((item, i) => (
            <li key={i}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="block text-gray-700 hover:text-green-600 font-medium transition"
                onClick={() => setIsOpen(false)} // closes menu on click
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar