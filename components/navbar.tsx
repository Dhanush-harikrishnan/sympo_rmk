"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "./mode-toggle"
import Image from "next/image"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const Navbar = () => {
  const pathname = usePathname()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <nav className="bg-gradient-to-r from-gray-100 to-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.gif"
                alt="CSBS Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-xl font-bold text-violet-700 whitespace-nowrap">RMK Engineering College</span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  pathname === item.path
                    ? "border-violet-700 text-violet-700"
                    : "border-transparent text-gray-600 hover:text-violet-700 hover:border-violet-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <div className="sm:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="text-violet-700">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-white">
                  <div className="flex flex-col space-y-4 mt-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        className={`text-lg font-medium ${
                          pathname === item.path
                            ? "text-violet-700"
                            : "text-gray-600 hover:text-violet-700"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

