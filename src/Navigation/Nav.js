import './Nav.css'
import { FiHeart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


function Nav() {
  return (
    <nav>
      <div className='nav-container'>
        <FaSearch className='nav-icons-search'/>
        <input type='text' className='search-input' placeholder='Search'></input>
      </div>

      <div className='profile-container'>
        <a href = '#'>
          <FiHeart className='nav-icons'/>
        </a>
        <a href = '#'>
          <FaRegUser className='nav-icons'/>
        </a>
        <a href = '#'>
          <FaShoppingCart className='nav-icons'/>
        </a>
      </div>
    </nav>
  )
}

export default Nav