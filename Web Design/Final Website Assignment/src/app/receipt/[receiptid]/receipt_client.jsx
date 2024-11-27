"use client"

import {useCallback, useEffect, useState} from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Package, Calendar } from 'lucide-react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import dateUtils from '@/tools/dateUtils';
import axios from "axios";
import { cookieStore } from '@/tools/cookieClient';
import { redirect } from 'next/navigation';

const OrderReceipt =  ({receiptid}) => {
  const [orderData, setOrderData] = useState({
    orderId: "",
    date: dateUtils.getCustomFormat("DD/MM/YYYY"),
    items: [],
    subtotal: 0,
    shipping: 4.99,
    tax: 0,
    total: 0,
    shippingAddress: {
      name: "John Doe",
      street: "123 Main St",
      city: "Austin",
      state: "TX",
      zip: "78701"
    },
    paymentMethod: "Visa ending in 1234",
  });

  const doc_PDF = useCallback(() => {
    if (!cookieStore.get("userid")) {
      redirect("/login");
      return;
    }

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
      item.ProductName,
      item.Quantity,
      `$${item.Sub_Price.toFixed(2)}`,
      `$${(item.Price).toFixed(2)}`
    ]);
    
    doc.autoTable({
      startY: 60,
      head: [tableColumn],
      body: tableRows,
      theme: 'striped',
      headStyles: { fillColor: [76, 175, 80] }
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
    doc.text(orderData.shippingAddress.email, 20, finalY + 20);
    doc.text(orderData.shippingAddress.street, 20, finalY + 30);
    doc.text(`${orderData.shippingAddress.city}, ${orderData.shippingAddress.state} ${orderData.shippingAddress.zip}`, 20, finalY + 40);
    
    // Add payment method
    doc.text(`Payment Method: 1234`, 20, finalY + 55);
    
    // Add footer
    doc.setFontSize(10);
    doc.text("Thank you for your purchase!", 105, 280, { align: 'center' });

    return doc;
  }, [orderData]);

  const [loading, setLoading] = useState(false);

  const getOrderData = useCallback(async (receiptid) => {
    if (loading) return; // Prevent further calls if already loading
    setLoading(true); // Set loading state

    try {
      const { data: receipt_data } = await axios.get("/api/receipt", {
        params: { receipt_id: receiptid }
      });

      if (!receipt_data || receipt_data.success === false) {
        console.error("Failed to fetch receipt data");
        return;
      }

      const receipt_info = receipt_data.data;
      const user = receipt_info.user;
      const order_info = receipt_info.order_info;

      if (!order_info || !order_info.items) {
        console.error("Order info or items missing");
        return;
      }

      const orders = order_info.items;

      // Subtotal Calculation
      let subtotal = 0;

      let temp_data_items = orders.map((item) => {
        let temp_sub_price = item.Price;
        item.Sub_Price = temp_sub_price;

        item.Price = item.Sub_Price * item.Quantity;
        subtotal += item.Price;

        return item;
      });

      const tax_percent = 8; // 8%
      let tax = subtotal * (tax_percent / 100);

      // Total Calculation
      let total = subtotal + orderData.shipping + tax;

      // Prepare the order data
      let temp_data = {
        orderId: order_info.orderid,
        items: temp_data_items,
        subtotal: subtotal,
        tax: tax,
        total: total,
        shippingAddress: {
          name: user.username,
          email: user.email,
          street: "Lucas Street",
          city: "St. George's",
          state: "St. George",
          zip: "12345",
        },
        paymentMethod: order_info.paymentMethod,
      };

      setOrderData(prev => ({ ...prev, ...temp_data }));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching or processing order data: ", error);
    }

  }, [orderData, loading]);

  useEffect(() => {
    if (receiptid) {
      getOrderData(receiptid);
    }
  }, [receiptid, getOrderData]);
  

  const generatePDF = () => {
    const docPDF = doc_PDF();
    docPDF.save(`receipt-${orderData.orderId}.pdf`);
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
                <p className="text-lg font-semibold">Order: {`#${orderData.orderId.slice(0, 8)}...`}</p>
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
                  <div key={item.productid} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.ProductName}</p>
                      <p className="text-sm text-gray-600">Quantity: {item.Quantity}</p>
                    </div>
                    <p className="font-medium">${(item.Price).toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Details */}
            <div className="border rounded-lg p-4 mt-6">
              <h3 className="font-semibold mb-4">Shipping Address</h3>
              <p>{orderData.shippingAddress.name}</p>
              <p>{orderData.shippingAddress.street}</p>
              <p>{orderData.shippingAddress.city}, {orderData.shippingAddress.state} {orderData.shippingAddress.zip}</p>
              <p>{orderData.shippingAddress.email}</p>
            </div>

            {/* Cost Breakdown */}
            <div className="flex justify-between mt-6">
              <div className="text-left">
                <p>Subtotal: ${orderData.subtotal.toFixed(2)}</p>
                <p>Shipping: ${orderData.shipping.toFixed(2)}</p>
                <p>Tax: ${orderData.tax.toFixed(2)}</p>
              </div>
              <div className="text-right font-semibold">
                <p>Total: ${orderData.total.toFixed(2)}</p>
              </div>
            </div>

            {/* Payment Method */}
            <div className="flex justify-between items-center mt-6">
              <p>Payment Method: {orderData.paymentMethod}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderReceipt;