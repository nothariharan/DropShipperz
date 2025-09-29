import { useState } from 'react';
import Button from '../components/Button';
import './Recommended.css';

function Recommended({ handleClick }) {
  const [active, setActive] = useState(""); // track active button

  return (
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className='recommended-flex'>
        <Button 
          onClickHandler={handleClick} 
          value="" 
          title="All Products" 
          active={active === ""}
          setActive={setActive}
        />
        <Button 
          onClickHandler={handleClick} 
          value="Nike" 
          title="Nike" 
          active={active === "Nike"} 
          setActive={setActive}
        />
        <Button 
          onClickHandler={handleClick} 
          value="Adidas" 
          title="Adidas" 
          active={active === "Adidas"} 
          setActive={setActive}
        />
        <Button 
          onClickHandler={handleClick} 
          value="Puma" 
          title="Puma" 
          active={active === "Puma"} 
          setActive={setActive}
        />
        <Button 
          onClickHandler={handleClick} 
          value="Vans" 
          title="Vans" 
          active={active === "Vans"} 
          setActive={setActive}
        />
      </div>
    </div>
  );
}

export default Recommended;
