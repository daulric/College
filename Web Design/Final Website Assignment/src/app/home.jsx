'use client'

import { useState, useEffect } from 'react'
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

// Reusable ProductCard component
const ProductCard = ({ name, price, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative w-full h-48">
      <Image
        src={image} 
        alt={name} 
        fill
        className="object-cover"
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-[#333] mb-2">{name}</h3>
      <div className="flex justify-between items-center">
        <span className="text-[#4CAF50] font-bold">
          {typeof price === 'number' ? `$${price.toFixed(2)}` : 'Price not available'}
        </span>
        <button className="bg-[#4CAF50] text-white p-2 rounded-full hover:bg-[#45a049] transition-colors duration-200">
          <ShoppingCart size={20} />
        </button>
      </div>
    </div>
  </div>
)

// Reusable CategoryItem component
const CategoryItem = ({ name, icon: Icon }) => (
  <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center hover:bg-[#f0f0f0] transition-colors duration-200 cursor-pointer">
    <Icon size={40} className="text-[#4CAF50] mb-2" />
    <span className="text-[#333] font-medium text-center">{name}</span>
  </div>
)

export default function HomePage() {
  const [currentPromo, setCurrentPromo] = useState(0)
  const promotions = [
    { id: 1, title: "Summer Sale! Up to 50% off", image: "/assets/ad3.jpg" },
    { id: 2, title: "Fresh Produce Week", image: "/assets/ad1.jpg" },
    { id: 3, title: "Buy 1 Get 1 Free on Selected Items", image: "/assets/ad2.jpg" },
  ]

  const featuredProducts = [
    { id: 1, name: "Organic Bananas", price: 1.99, image: "/assets/banana.jpg" },
    { id: 2, name: "Fresh Milk", price: 2.49, image: "/assets/milk.jpg" },
    { id: 3, name: "Whole Grain Bread", price: 3.29, image: "/assets/bread.webp" },
    { id: 4, name: "Free Range Eggs", price: 4.99, image: "/assets/eggs.webp" },
  ]

  const categories = [
    { name: "Fruits & Vegetables", icon: () => <span className="text-2xl">🍎</span> },
    { name: "Dairy & Eggs", icon: () => <span className="text-2xl">🥛</span> },
    { name: "Bakery", icon: () => <span className="text-2xl">🍞</span> },
    { name: "Meat & Seafood", icon: () => <span className="text-2xl">🍗</span> },
    { name: "Frozen Foods", icon: () => <span className="text-2xl">🧊</span> },
    { name: "Snacks", icon: () => <span className="text-2xl">🍿</span> },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromo((prevPromo) => (prevPromo + 1) % promotions.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [promotions.length])

  const nextPromo = () => {
    setCurrentPromo((prevPromo) => (prevPromo + 1) % promotions.length)
  }

  const prevPromo = () => {
    setCurrentPromo((prevPromo) => (prevPromo - 1 + promotions.length) % promotions.length)
  }

  return (
    <div className="min-h-screen bg-[#f4f4f4]">
      <main className="container mx-auto px-4 py-8">
        {/* Promotions Slider */}
        <section className="mb-12 relative">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={promotions[currentPromo].image}
              alt={promotions[currentPromo].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-4xl font-bold text-center px-4">
                {promotions[currentPromo].title}
              </h2>
            </div>
          </div>
          <button
            onClick={prevPromo}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
            aria-label="Previous promotion"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextPromo}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
            aria-label="Next promotion"
          >
            <ChevronRight size={24} />
          </button>
        </section>

        {/* Featured Products */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#333] mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section>
          <h2 className="text-2xl font-bold text-[#333] mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <CategoryItem key={index} {...category} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}