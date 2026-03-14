import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          
{/* Brand */}
<div className="space-y-4">
  <div className="flex items-center gap-3">
   <img
  src="/images/play-area-logo.png"
  alt="Play Area Supplier Logo"
  className="h-12 w-auto"
/>
    <span className="font-display font-bold text-xl">
      Play Area<span className="text-secondary"> Supplier</span>
    </span>
  </div>

  <p className="text-primary-foreground/70 text-sm leading-relaxed">
    We design, manufacture, and install indoor and outdoor play area equipment for schools, communities, and commercial spaces.
  </p>
</div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "Products", path: "/products" },
                { label: "About Us", path: "/about" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Our Solutions</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Kids Entertainment Centers</li>
              <li>Soft Play Systems</li>
              <li>Trampoline Parks</li>
              <li>School Play Zones</li>
              <li>Community Play Spaces</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone size={16} className="text-secondary shrink-0" />
                96003 14586
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail size={16} className="text-secondary shrink-0" />
                tortuousreach@yahoo.com
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin size={16} className="text-secondary shrink-0 mt-0.5" />
                Serving schools, entrepreneurs & communities
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Play Area Supplier. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Where Play Comes to Life
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
