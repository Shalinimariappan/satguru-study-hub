
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Satguru Study Centre</h3>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/258a9587-e030-4708-9a22-c5eb53234bc6.png" 
                alt="Satguru Study Centre Logo" 
                className="h-16 bg-white rounded-full p-1"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Professional tuition centre with 6 years of experience and a 98% success rate for students from LKG to XII.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-satguru-light">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-satguru-light">About Us</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-satguru-light">Courses</Link>
              </li>
              <li>
                <Link to="/results" className="text-gray-300 hover:text-satguru-light">Results</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-satguru-light">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-satguru-light mt-0.5" />
                <span className="text-gray-300">Chennai - 81</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-satguru-light mt-0.5" />
                <span className="text-gray-300">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-satguru-light mt-0.5" />
                <a href="mailto:satguru162019@gmail.com" className="text-gray-300 hover:text-satguru-light">
                  satguru162019@gmail.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-satguru hover:bg-satguru-light transition-colors p-2 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-satguru hover:bg-satguru-light transition-colors p-2 rounded-full">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-satguru hover:bg-satguru-light transition-colors p-2 rounded-full">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Satguru Study Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
