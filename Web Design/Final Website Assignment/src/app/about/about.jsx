"use client"

import React from 'react';
import { ShoppingBag, Users, Headphones } from 'lucide-react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-black">Your Trusted Online Shopping Destination</h1>
          <p className="text-xl max-w-2xl text-black">
            Since 2024, we&apos;ve been revolutionizing the way people shop online. 
            With thousands of quality products and a commitment to exceptional 
            customer service, we make online shopping simple, secure, and enjoyable.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <ShoppingBag className="mx-auto mb-4 text-[#4CAF50]" size={32} />
            <h3 className="text-2xl font-bold text-black">100K+</h3>
            <p className="text-black">Products</p>
          </div>
          <div className="text-center">
            <Users className="mx-auto mb-4 text-[#4CAF50]" size={32} />
            <h3 className="text-2xl font-bold text-black">1M+</h3>
            <p className="text-black">Happy Customers</p>
          </div>
          <div className="text-center">
            <Headphones className="mx-auto mb-4 text-[#4CAF50]" size={32} />
            <h3 className="text-2xl font-bold text-black">24/7</h3>
            <p className="text-black">Customer Support</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Why Choose Us</h2>
          <div className="max-w-3xl mx-auto text-black text-lg leading-relaxed">
            <p className="mb-4">
              We believe shopping should be accessible, easy, and secure. Our platform 
              offers a carefully curated selection of products, competitive prices, and 
              a seamless shopping experience from browse to delivery.
            </p>
            <p>
              With secure payment options, fast shipping, and a hassle-free return policy, 
              we ensure that every purchase you make is backed by our commitment to 
              customer satisfaction. Our dedicated team works tirelessly to bring you 
              the latest trends and highest quality products.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-2 border-[#4CAF50] rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-black">Secure Shopping</h3>
            <p className="text-black">
              Protected payments and data encryption ensure your shopping experience is 
              100% secure and worry-free.
            </p>
          </div>
          <div className="border-2 border-[#4CAF50] rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-black">Fast Delivery</h3>
            <p className="text-black">
              Quick processing and reliable shipping partners ensure your orders arrive 
              on time, every time.
            </p>
          </div>
          <div className="border-2 border-[#4CAF50] rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-black">Easy Returns</h3>
            <p className="text-black">
              Simple, hassle-free return policy with full refunds processed within 
              24 hours of return confirmation.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="border-2 border-[#4CAF50] rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">Start Shopping Today</h2>
          <p className="mb-6 text-black">
            Join millions of satisfied customers and discover why we&apos;re the preferred 
            choice for online shopping.
          </p>
          <Link href="/shop" >
            <button className="bg-[#4CAF50] text-white px-8 py-3 rounded-lg font-semibold 
              hover:bg-white hover:text-[#4CAF50] hover:border-2 hover:border-[#4CAF50] transition-colors">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;