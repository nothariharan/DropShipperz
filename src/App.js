import { Divide } from "lucide-react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import './index.css'

//database
import products from './db/data'
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // input filter
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(product =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== 
    -1
  );

  // radio filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // button filter 
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
  return products
    .filter(({ title }) =>
      query ? title.toLowerCase().includes(query.toLowerCase()) : true
    )
    .filter(({ category, color, company, newPrice, title }) =>
      selected
        ? category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
        : true
    )
    .map(({ img, title, star, reviews, newPrice, prevPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
    ));
}


  const result = filteredData(products,selectedCategory,query)

  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Navigation query = {query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result}/>
    </>
  );
}

export default App;
