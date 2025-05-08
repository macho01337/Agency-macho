import properties from "../data/properties";
import React, {useState} from "react";




const Nekretnine = () => {
    const [filters, setFilters] = useState({
      minPrice: "",
      maxPrice: "",
      description: "",
    });
  
    const filteredProperties = properties.filter((property) => {
      const minPriceMatch = !filters.minPrice || property.price >= parseInt(filters.minPrice);
      const maxPriceMatch = !filters.maxPrice || property.price <= parseInt(filters.maxPrice);
  
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
                <p>Lokacija: {property.location}</p>
                <p>Cijena: {property.price}</p>
                <p>Opis: {property.description}</p>
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