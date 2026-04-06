import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "The Book", path: "/book" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-teal-deeper/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="font-heading text-2xl font-bold text-primary-foreground tracking-wide">
          <span className="text-gold">Virginia</span> R. Youngren
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wider uppercase transition-colors duration-300 hover:text-gold ${
                location.pathname === link.path
                  ? "text-gold"
                  : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/book"
            className="ml-2 px-5 py-2 bg-gold text-teal-deeper font-semibold text-sm rounded-sm uppercase tracking-wider hover:bg-gold-light transition-colors duration-300"
          >
            Buy Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-teal-deeper/98 backdrop-blur-md border-t border-primary/20">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wider uppercase transition-colors hover:text-gold ${
                  location.pathname === link.path ? "text-gold" : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/book"
              className="mt-2 px-5 py-2 bg-gold text-teal-deeper font-semibold text-sm rounded-sm uppercase tracking-wider text-center"
            >
              Buy Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
