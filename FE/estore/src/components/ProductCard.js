// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 m-2">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-700">{product.price}</p>
    </div>
  );
};

export default ProductCard;
