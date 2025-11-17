import { Link } from "react-router-dom";
import { ShoppingCart, User, Search } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "./ui/badge";

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-background border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              QuickBite
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/restaurants" className="text-foreground hover:text-primary transition-colors">
              Restaurants
            </Link>
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/restaurants">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/profile">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            <Link to="/checkout" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
