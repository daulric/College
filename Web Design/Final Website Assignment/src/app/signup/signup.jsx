'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [signupInfo, setSignupInfo] = useState({});

  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  async function HandleSignup() {
    const { data } = await axios.post("/api/auth", signupInfo);
    console.log(data);

    if (!data.success) return;
    if (data.success) return window.location.href = "/";
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex flex-col justify-center w-full px-4 sm:px-6 lg:flex-none lg:w-1/2 xl:w-2/5">
        <div className="w-full max-w-sm mx-auto lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create an account</h2>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-primary hover:text-primary/80">
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <form action={HandleSignup} method="POST" className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </Label>
                <div className="mt-1">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    onChange={(e) => setSignupInfo(prev => ({
                      ...prev,
                      name: e.target.value
                    }))}
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </Label>
                <div className="mt-1">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => setSignupInfo(prev => ({
                      ...prev,
                      email: e.target.value,
                    }))}
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </Label>
                <div className="mt-1 relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    required
                    onChange={(e) => setSignupInfo(prev => ({
                      ...prev,
                      password: e.target.value,
                    }))}
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary focus:border-primary sm:text-sm pr-10"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  required
                />
                <Label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  I agree to the{' '}
                  <a href="#" className="font-medium text-primary hover:text-primary/80">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="font-medium text-primary hover:text-primary/80">
                    Privacy Policy
                  </a>
                </Label>
              </div>

              <div>
                <Button type="submit" className="w-full flex justify-center items-center">
                  Sign up
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}