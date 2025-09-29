import './Nav.css'
import { FiHeart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Nav({ query, handleInputChange }) {
  return (
    <nav>
      <div className='nav-container'>
        <FaSearch className='nav-icons-search'/>
        <input 
          type='text' 
          className='search-input' 
          placeholder='Search'
          value={query}                 // controlled input
          onChange={handleInputChange}  // updates query in App.js
        />
      </div>

      <div className='profile-container'>
        <a href='#'>
          <FiHeart className='nav-icons'/>
        </a>
        <a href='#'>
          <FaRegUser className='nav-icons'/>
        </a>
        <a href='#'>
          <FaShoppingCart className='nav-icons'/>
        </a>
      </div>
    </nav>
  )
}

export default Nav;
