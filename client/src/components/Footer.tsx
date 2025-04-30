import {Facebook, Twitter, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold text-white mb-4">QuickBite</h3>
          <p className="mb-4 text-sm">The fastest and most reliable food delivery service in town.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Restaurants</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Become a Partner</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm">Contact</h4>
          <address className="not-italic text-sm">
            <p>123 Delivery Street</p>
            <p>Food City, FC 12345</p>
            <p className="mt-2">Email: info@quickbite.com</p>
            <p>Phone: (123) 456-7890</p>
          </address>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
        <p>© {new Date().getFullYear()} QuickBite. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer