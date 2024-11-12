import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
function Footer() {
  return (
    <footer className="bg-black text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Shoes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Clothing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Accessories
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Returns
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Investors
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <Facebook />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-400">
          <p>&copy; 1779 OnlineStore, p27. Pritivi Narayan Shah</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
