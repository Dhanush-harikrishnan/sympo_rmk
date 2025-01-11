import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold">
              CSBS Symposium
            </Link>
            <p className="text-base">
              Empowering Innovation and Business Acumen
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-secondary">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-secondary">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-secondary">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-secondary">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-4">
              {["About", "Events", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-base hover:text-secondary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Contact Us</h3>
            <address className="not-italic">
              <p>123 University Avenue</p>
              <p>Chennai, Tamil Nadu 600001</p>
              <p className="mt-4">Email: info@csbssymposium.com</p>
              <p>Phone: +91 123 456 7890</p>
            </address>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-base">
            &copy; 2025 CSBS Symposium. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

