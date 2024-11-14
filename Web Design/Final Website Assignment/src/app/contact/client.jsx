"use client"

import { useState, useEffect } from 'react';
import { Send, Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Link from "next/link"
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const socialLinks = [
    { Icon: Instagram, url: 'https://instagram.com/ulricaird' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    axios.post("/api/email", {
      info: {
        title: `Email from ${formData.name} <${formData.email}>`,
        text: `Subject: ${formData.subject}\n${formData.message}`,
      }
    }).then(() => {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSending(false);
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }) ;

    
  };

  useEffect(() => {
    let user_client = sessionStorage.getItem("user_client");
    if (!user_client) return;

    user_client = JSON.parse(user_client);
    setFormData(prev => ({...prev, name: user_client.username, email: user_client.email}));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto p-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3 text-gray-800">Get in Touch</h1>
          <div className="w-20 h-1 bg-[#4CAF50] mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have questions or feedback? We&apos;d love to hear from you. Send us a message 
            and our team will respond within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1 space-y-6">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="h-2 bg-[#4CAF50]"></div>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6 text-gray-800">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Phone className="h-5 w-5 text-[#4CAF50]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <p className="text-gray-600">(473) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Mail className="h-5 w-5 text-[#4CAF50]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-gray-600">ulricaird@yahoo.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <MapPin className="h-5 w-5 text-[#4CAF50]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Address</p>
                      <p className="text-gray-600">Gouyave</p>
                      <p className="text-gray-600">St. John, Grenada</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Clock className="h-5 w-5 text-[#4CAF50]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Business Hours</p>
                      <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sat - Sun: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-8 pt-6 border-t">
                  <p className="font-medium text-gray-800 mb-4">Follow Us</p>
                  <div className="flex space-x-4">
                    {socialLinks.map(({ Icon, url }, index) => (
                      <Link
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-green-100 rounded-full hover:bg-[#4CAF50] hover:text-white transition-colors"
                      >
                        <Icon className="h-5 w-5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="h-2 bg-[#4CAF50]"></div>
              <CardContent className="p-8">
                <h2 className="text-xl font-semibold mb-6 text-gray-800">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="name">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white py-3 h-auto text-base"
                    disabled={isSending}
                  >
                    <Send className="h-5 w-5 mr-2" />
                    {isSending ? "Sending..." : "Send Message"}
                  </Button>
                </form>

                {submitted && (
                  <Alert className="mt-6 bg-green-50 border-[#4CAF50]">
                    <AlertDescription className="text-[#4CAF50] flex items-center gap-2">
                      <div className="h-2 w-2 bg-[#4CAF50] rounded-full"></div>
                      Thank you for your message! We&apos;ll get back to you soon.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;