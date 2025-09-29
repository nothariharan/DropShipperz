import { FaStar } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
export default function Card({ img, title, star, reviews, newPrice, prevPrice}) {
  return (
    <section className='card'>
        <img src={img} className="card-img" alt={title} style={{width:"200px"}}/>
        <div className='card-details'>
          <h3 className='card-title'>{title}</h3>
          <section className='card-reviews'>
            {star}{star}{star}{star}
            <span className='total-reviews'>{reviews}</span>
            </section>
            <section className='card-price'>
              <div className='price'>
                <del>{prevPrice}</del>       {newPrice}
              </div>
              <div className='bag'>
                <IoBagOutline className='bag-icon'/>
              </div>
            </section>
        </div>
      </section>
  )
}
