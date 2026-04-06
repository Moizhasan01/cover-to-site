import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-teal-deeper text-primary-foreground/80">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
              <span className="text-gold">Virginia</span> R. Youngren
            </h3>
            <p className="text-sm leading-relaxed max-w-md mb-6">
              Clinical psychologist, screenwriter, and author of <em>Homegrown Crooks</em> — fighting
              back against fraud with weapons of wit, cunning, comedy, and irony.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-teal-deeper transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "The Book", "Blog", "Contact"].map((label) => (
                <Link key={label} to={label === "Home" ? "/" : label === "The Book" ? "/book" : `/${label.toLowerCase()}`} className="text-sm hover:text-gold transition-colors duration-300">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Get the Book</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm hover:text-gold transition-colors duration-300">Amazon</a>
              <a href="#" className="text-sm hover:text-gold transition-colors duration-300">Barnes & Noble</a>
              <a href="#" className="text-sm hover:text-gold transition-colors duration-300">Book Depository</a>
              <a href="#" className="text-sm hover:text-gold transition-colors duration-300">IndieBound</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">© 2026 Virginia R. Youngren. All rights reserved.</p>
          <p className="text-xs">Published by Parker Publishers • ISBN 978-0-7334-2609-4</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
