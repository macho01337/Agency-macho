import properties from "../data/properties";
import React, {useState} from "react";
import { parsePrice } from "../data/utils.js";



const Nekretnine = () => {
    const [filters, setFilters] = useState({
      minPrice: "",
      maxPrice: "",
      
    });

    //  Price to numbers

    const parsedProperties = properties.map((property) => ({
      ...property,
      price: parsePrice(property.price),
    }))


  
    const filteredProperties = parsedProperties.filter((property) => {
      const minPrice = filters.minPrice !== ""? parseFloat(filters.minPrice) : null;
      const maxPrice = filters.maxPrice !== ""? parseFloat(filters.maxPrice) : null;
  
       

      const minPriceMatch = minPrice === null || property.price >= minPrice;
      const maxPriceMatch = maxPrice === null || property.price <= maxPrice;
  
    return minPriceMatch && maxPriceMatch;
    });
      
      
      
      return (
      <>
        <div className="nek-pag">
          <h1 className="nek-title">Nekretnine</h1>
          <div className="nek-list">
            {filteredProperties.map((property) => (
              <div key={property.id} className="property-card">
                <h3>{property.name}</h3>
                <img src={property.img} alt={property.name} width="300" height="200"/>
                <p>Location: {property.location}</p>
                <p>Price: {property.price} $</p>
                <p>Description: {property.description}</p>
              </div>
            ))}
          </div>
  
          <div className="nek-filter">
            <input
              type="number"
              placeholder="Min. cijena"
              value={filters.minPrice}
              onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
            />
            <input
              type="number"
              placeholder="Max. cijena"
              value={filters.maxPrice}
              onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
            />
          </div>
        </div>
      </>
    );
  };
  
  export default Nekretnine;