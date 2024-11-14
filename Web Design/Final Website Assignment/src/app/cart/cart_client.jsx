'use client'

import { useState, useEffect } from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import axios from "axios";
import { redirect } from 'next/navigation';
import { cookieStore } from '@/tools/cookieClient';

import Image from "next/image";

const ShoppingCart = () => {
  // Sample cart data - in a real app this would come from your state management
  const [cartItems, setCartItems] = useState([]);
  const [order_id, setOrderId] = useState(null);
  const [user_id, setUserId] = useState(null);

  let quantity_update_timeout;

  useEffect(() => {
    if (!cookieStore.get("userid")) {
      return window.location.href = "/login";
    }

    async function getCartItems() {
      setUserId(parseFloat(JSON.parse(sessionStorage.getItem("user_client")).userid));
      if (!user_id) return;

      const { data } = await axios.get("/api/order", {
        params: {
          userid: user_id,
        }
      })

      setOrderId(data.orders[0].orderid);
      if (!data || !data.success) return;
      if (!data.orders) return;
      if (!data.orders[0]) return;
      setCartItems(prev => ([...prev, ...data.orders[0].items]));
    }

    getCartItems();
  }, [user_id]);

  async function redirectToReceipt(e) {
    e.preventDefault();

    if (!order_id) return;

    await axios.put("/api/order", {
      userid: user_id,
      orderid: order_id,
      checked_out: true,
    }).then(async () => {
      await axios.post("/api/receipt", {
        orderid: order_id,
      }).then((receipt) => {
        console.log(receipt);
        if (!receipt.data.success) return;
        if (!receipt.data.data) return;
        redirect(`/receipt/${receipt.data.data.receiptid}`);
      });
    });

  }

  async function UpdateOrder() {
    console.log("updating order");
    await axios.put('/api/order', {
      orderid: order_id,
      userid: user_id,
      order: cartItems,
    })
  };

  const updateQuantity = async (id, newQuantity) => {
    if (newQuantity < 1) return;

    const updated_items = cartItems.map((item) => {

      if (item.productid === id) {
        clearTimeout(quantity_update_timeout);
        quantity_update_timeout = setTimeout(UpdateOrder, 2000);
        item.Quantity = newQuantity;
      }

      return item;
    });

    setCartItems(updated_items);
  };

  const removeItem = (id) => {
    axios.delete("/api/order", {
      params: {
        userid: user_id,
        product_id: id,
        order_id: order_id
      }
    }).then(() => {
      
      setCartItems(cartItems.filter(item => item.productid !== id));
    });

  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.Price * item.Quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      
      <div className="space-y-4">
        {cartItems.map(item => (
          <Card key={item.productid} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <Image
                  src={`/shop/pic-${item.productid}.webp`} 
                  alt={item.ProductName}
                  className="w-24 h-24 object-cover rounded-md"
                  height={100}
                  width={100}
                />
                
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg">{item.ProductName}</h3>
                  <p className="text-gray-600">${item.Price.toFixed(2)}</p>
                  
                  <div className="flex items-center gap-2 mt-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.productid, item.Quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.Quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.productid, item.Quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="font-semibold text-lg">
                    ${(item.Price * item.Quantity).toFixed(2)}
                  </p>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeItem(item.productid)}
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (8%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg pt-2 border-t">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        
        <Button onClick={redirectToReceipt} className="w-full mt-4 bg-[#4CAF50] hover:bg-[#4CAF51] text-white">
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default ShoppingCart;