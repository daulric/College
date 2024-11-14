"use client"

import { useEffect, useState } from 'react';
import { ShoppingCart, Check, Search } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import Image from 'next/image';
import axios from "axios";
import { cookieStore as Cookies } from "@/tools/cookieClient";
import Link from "next/link";
import { cookieStore } from '@/tools/cookieClient';

const ShopPage = () => {
  const [cart, setCart] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState({});
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10 });

  async function AddExistinOrdersToDB(product) {
    const { data } = await axios.post("/api/order", {
      userid: Number(Cookies.get("userid")),
      product: product,
    })

    if (!data.success) return;
  }

  useEffect(() => {
    if (!cookieStore.get("userid")) {
      return window.location.href = "/login";
    }


    async function GetProducts() {
      const {data} = await axios.get("/api/product");

      if (data.success) {
        setProducts(data.products);
      }

    }

    async function GetExistingOrders() {
      const { data } = await axios.get("/api/order", {
        params: {
          userid: Number(Cookies.get("userid")),
        }
      });

      if (!data.orders) return;
      if (!data.orders[0]) return;
      const user_orders = data.orders[0];

      user_orders.items.map(product => {
        setShowConfirmation(prev => ({
          ...prev,
          [product.productid]: true,
        }));

        setCart(prev => ([...prev, product]))
      })
  
    }

    GetProducts();
    GetExistingOrders();
  }, [])

  const addToCart = async (product) => {

    if (showConfirmation[product.productid] === true) return;
    if (cart.find(item => item.productid === product.productid)) return;
    await AddExistinOrdersToDB(product);  

    setShowConfirmation(prev => ({
      ...prev,
      [product.productid]: true
    }));
  
    setCart(prev => ([...prev, product]))
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.ProductName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.Description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.Price >= priceRange.min && product.Price <= priceRange.max;
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shop</h1>
          <Link href="/cart" >
          <div className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-600" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#4CAF50] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
          </Link>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-2">Price Range</h3>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                placeholder="Min"
                className="w-24 px-2 py-1 border border-gray-300 rounded-md"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
              />
              <span className="text-gray-500">to</span>
              <input
                type="number"
                placeholder="Max"
                className="w-24 px-2 py-1 border border-gray-300 rounded-md"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
              />
            </div>
            <div className="mt-2">
              <input
                type="range"
                min="0"
                max="10"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center py-8 text-gray-500">
              No products found matching your criteria.
            </div>
          ) : (
            filteredProducts.map((product) => (
              <div key={product.productid} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={`/shop/pic-${product.productid}.webp`}
                  alt={product.ProductName}
                  className="w-full h-48 object-cover"
                  height={100}
                  width={100}
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.ProductName}</h2>
                  <p className="text-gray-600 mb-4">{product.Description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">${product.Price}</span>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      disabled={showConfirmation[product.productid] ? showConfirmation[product.productid] : false}
                      className="bg-[#4CAF50] text-white px-4 py-2 rounded-lg hover:bg-[#45a049] transition-colors"
                    >
                      {showConfirmation[product.productid] ? (
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
            ))
          )}
        </div>

        {/* Floating Cart Summary */}
        {cart.length > 0 && (
          <div className="fixed bottom-4 right-4">
            <Link href="/cart" >
              <Alert className="bg-[#4CAF50] text-white">
                <AlertDescription>
                  {cart.length} {cart.length === 1 ? 'item' : 'items'} in cart - Total: $
                  {cart.reduce((sum, item) => sum + item.Price, 0).toFixed(2)}
                </AlertDescription>
              </Alert>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;