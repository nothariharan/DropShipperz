import './Products.css'
import { FaStar } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";

function Products() {
  return (<>
    <section className='card-container'>
      <section className='card'>
        <img src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg'alt='Nike Air Monarch 1' className='card-image'/>
        <div className='card-details'>
          <h3 className='card-title'>Air Monarch 1</h3>
          <section className='card-reviews'>
            <FaStar className='rating-star'/>  <FaStar className='rating-star' />  <FaStar className='rating-star'/>  <FaStar className='rating-star'/>  <FaStar className='rating-star'/>
            <span className='total-reviews'>4</span>
            </section>
            <section className='card-price'>
              <div className='price'>
                <del>$690</del>   $500
              </div>
              <div className='bag'>
                <IoBagOutline className='bag-icon'/>
              </div>
            </section>
        </div>
      </section>
      
    </section>
  
      
    </>)
}

export default Products