import { Divide } from "lucide-react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";

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
    product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
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
    let filteredProducts = products;

    // filtering inputs
    if (query) {
      filteredProducts = filteredItems;
    }

    // selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(({ img, title, star, reviews, newPrice, prevPrice }) => (
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

  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Nav />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
