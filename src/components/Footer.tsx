import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Criminal Background Checks", href: "/#services" },
        { name: "Employment Verification", href: "/#services" },
        { name: "Education Verification", href: "/#services" },
        { name: "Driving Record Checks", href: "/#services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/#about" },
        { name: "Our Team", href: "/#about" },
        { name: "Careers", href: "#" },
        { name: "News", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "FCRA Compliance", href: "#" },
        { name: "Data Security", href: "#" }
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Support", href: "/contact" },
        { name: "Help Center", href: "#" },
        { name: "Get Started", href: "/signup" }
      ]
    }
  ];

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">SecureHire</span>
            </Link>
            <p className="text-gray-300 text-sm">
              Professional background screening services to help you make informed hiring decisions with confidence.
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SecureHire. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;