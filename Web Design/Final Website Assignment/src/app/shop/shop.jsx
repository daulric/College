"use client"

import React, { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 199.99,
    description: "Premium noise-canceling wireless headphones",
    image: "/api/placeholder/400/300"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299.99,
    description: "Feature-rich smartwatch with health tracking",
    image: "/api/placeholder/400/300"
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 79.99,
    description: "Water-resistant laptop backpack with USB charging port",
    image: "/api/placeholder/400/300"
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 129.99,
    description: "Portable waterproof bluetooth speaker",
    image: "/api/placeholder/400/300"
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 149.99,
    description: "RGB mechanical gaming keyboard",
    image: "/api/placeholder/400/300"
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 59.99,
    description: "Ergonomic wireless gaming mouse",
    image: "/api/placeholder/400/300"
  }
];

const ShopPage = () => {
  const [cart, setCart] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setShowConfirmation(product.id);
    setTimeout(() => {
      setShowConfirmation(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shop</h1>
          <div className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-600" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#4CAF50] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
                height={100}
                width={100}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-[#4CAF50] text-white px-4 py-2 rounded-lg hover:bg-[#45a049] transition-colors"
                  >
                    {showConfirmation === product.id ? (
                      <div className="flex items-center">
                        <Check className="h-5 w-5 mr-1" /> Added
                      </div>
                    ) : (
                      "Add to Cart"
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Cart Summary */}
        {cart.length > 0 && (
          <div className="fixed bottom-4 right-4">
            <Alert className="bg-[#4CAF50] text-white">
              <AlertDescription>
                {cart.length} {cart.length === 1 ? 'item' : 'items'} in cart - Total: $
                {cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
              </AlertDescription>
            </Alert>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;