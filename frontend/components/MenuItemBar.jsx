import React from "react";
import Image from "next/image";


function MenuItem({ image, name, price, onAddToCart }) {
  return (
    <div className="menuItem">
      <div className="imageWrapper">
        <Image src={image} alt={name} width={150} height={200} unoptimized />
      </div>
      <h1>{name}</h1>
      <p>${price}</p>
      <button className="add-card" type="button" onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default MenuItem;