
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  
  return (
    <header className="w-full">
      {/* Admission Banner */}
      <div className="bg-satguru text-white text-center py-1 text-sm font-medium">
        Admission open for all LKG to XII students
      </div>
      
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/258a9587-e030-4708-9a22-c5eb53234bc6.png" 
                alt="Satguru Study Centre Logo" 
                className="h-16"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-800 hover:text-satguru font-medium">
                Home
              </Link>
              
              {/* About Us Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center text-gray-800 hover:text-satguru font-medium"
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                >
                  About Us <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 transition-all duration-150 ${aboutDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} group-hover:opacity-100 group-hover:visible`}>
                  <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-satguru hover:text-white">
                    About Us
                  </Link>
                  <Link to="/results" className="block px-4 py-2 text-sm text-gray-700 hover:bg-satguru hover:text-white">
                    Results
                  </Link>
                  <Link to="/events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-satguru hover:text-white">
                    Events
                  </Link>
                  <Link to="/gallery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-satguru hover:text-white">
                    Gallery
                  </Link>
                </div>
              </div>
              
              <Link to="/courses" className="text-gray-800 hover:text-satguru font-medium">
                Courses
              </Link>
              
              <Link to="/contact" className="text-gray-800 hover:text-satguru font-medium">
                Contact Us
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white pb-4 px-4">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-gray-800 hover:text-satguru font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile About Dropdown */}
              <div>
                <button 
                  className="flex items-center justify-between w-full text-gray-800 hover:text-satguru font-medium py-2"
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                >
                  About Us <ChevronDown className={`h-4 w-4 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {aboutDropdownOpen && (
                  <div className="pl-4 mt-1 space-y-2">
                    <Link 
                      to="/about" 
                      className="block text-gray-700 hover:text-satguru py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link 
                      to="/results" 
                      className="block text-gray-700 hover:text-satguru py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      Results
                    </Link>
                    <Link 
                      to="/events" 
                      className="block text-gray-700 hover:text-satguru py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      Events
                    </Link>
                    <Link 
                      to="/gallery" 
                      className="block text-gray-700 hover:text-satguru py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      Gallery
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                to="/courses" 
                className="text-gray-800 hover:text-satguru font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              
              <Link 
                to="/contact" 
                className="text-gray-800 hover:text-satguru font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
