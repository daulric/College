"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Package, CreditCard, Calendar } from 'lucide-react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import dateUtils from '@/tools/dateUtils';

const OrderReceipt = ({orderid}) => {
  const orderData = {
    orderId: `#${orderid}`,
    date: dateUtils.getCustomFormat("DD/MM/YYYY"),
    items: [
      { id: 1, name: "Wireless Headphones", price: 129.99, quantity: 1 },
      { id: 2, name: "Phone Case", price: 24.99, quantity: 2 },
      { id: 3, name: "USB-C Cable", price: 12.99, quantity: 1 }
    ],
    subtotal: 192.96,
    shipping: 8.99,
    tax: 19.30,
    total: 221.25,
    shippingAddress: {
      name: "John Doe",
      street: "123 Main St",
      city: "Austin",
      state: "TX",
      zip: "78701"
    },
    paymentMethod: "Visa ending in 4242"
  };

  const generatePDF = () => {
    // Initialize PDF document
    const doc = new jsPDF();
    
    // Add company logo/header
    doc.setFontSize(20);
    doc.text("ua store", 105, 20, { align: 'center' });
    
    // Add order details
    doc.setFontSize(12);
    doc.text(`Order ID: ${orderData.orderId}`, 20, 40);
    doc.text(`Date: ${orderData.date}`, 20, 50);
    
    // Add items table
    const tableColumn = ["Item", "Quantity", "Price", "Total"];
    const tableRows = orderData.items.map(item => [
      item.name,
      item.quantity,
      `$${item.price.toFixed(2)}`,
      `$${(item.price * item.quantity).toFixed(2)}`
    ]);
    
    doc.autoTable({
      startY: 60,
      head: [tableColumn],
      body: tableRows,
      theme: 'striped',
      headStyles: { fillColor: [66, 139, 202] }
    });

    // Add cost breakdown
    const finalY = doc.lastAutoTable.finalY + 10;
    doc.text(`Subtotal: $${orderData.subtotal.toFixed(2)}`, 140, finalY);
    doc.text(`Shipping: $${orderData.shipping.toFixed(2)}`, 140, finalY + 10);
    doc.text(`Tax: $${orderData.tax.toFixed(2)}`, 140, finalY + 20);
    doc.setFontSize(14);
    doc.text(`Total: $${orderData.total.toFixed(2)}`, 140, finalY + 35);
    
    // Add shipping address
    doc.setFontSize(12);
    doc.text("Shipping Address:", 20, finalY);
    doc.text(orderData.shippingAddress.name, 20, finalY + 10);
    doc.text(orderData.shippingAddress.street, 20, finalY + 20);
    doc.text(`${orderData.shippingAddress.city}, ${orderData.shippingAddress.state} ${orderData.shippingAddress.zip}`, 20, finalY + 30);
    
    // Add payment method
    doc.text(`Payment Method: ${orderData.paymentMethod}`, 20, finalY + 45);
    
    // Add footer
    doc.setFontSize(10);
    doc.text("Thank you for your purchase!", 105, 280, { align: 'center' });
    
    // Save the PDF
    doc.save(`receipt-${orderData.orderId}.pdf`);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Card className="mb-8">
        <CardHeader className="border-b">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold">Order Confirmation</CardTitle>
            <button
              onClick={generatePDF}
              className="flex items-center gap-2 bg-[#4CAF50] text-white px-4 py-2 rounded-lg hover:bg-[#3b8945]"
            >
              <Download size={20} />
              Download Receipt
            </button>
          </div>
        </CardHeader>
        
        <CardContent className="pt-6">
          <div className="grid gap-6">
            {/* Order Summary */}
            <div className="flex justify-between items-start">
              <div>
                <p className="text-lg font-semibold">Order {orderData.orderId}</p>
                <div className="flex items-center gap-2 text-gray-600 mt-1">
                  <Calendar size={16} />
                  <span>{orderData.date}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 text-gray-600">
                  <Package size={16} />
                  <span>Estimated Delivery: 3-5 business days</span>
                </div>
              </div>
            </div>

            {/* Items */}
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-4">Items Purchased</h3>
              <div className="space-y-4">
                {orderData.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-4">Cost Breakdown</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${orderData.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${orderData.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${orderData.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                  <span>Total</span>
                  <span>${orderData.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Shipping and Payment */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-4">Shipping Address</h3>
                <p>{orderData.shippingAddress.name}</p>
                <p>{orderData.shippingAddress.street}</p>
                <p>{orderData.shippingAddress.city}, {orderData.shippingAddress.state} {orderData.shippingAddress.zip}</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-4">Payment Method</h3>
                <div className="flex items-center gap-2">
                  <CreditCard size={20} />
                  <span>{orderData.paymentMethod}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderReceipt;