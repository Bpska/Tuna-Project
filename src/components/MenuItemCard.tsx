import { Plus } from "lucide-react";
import { MenuItem } from "@/types";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/utils/currency";

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="overflow-hidden hover:shadow-hover transition-all duration-300 group">
      <div className="flex gap-4 p-4">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {item.name}
              </h4>
              {item.popular && (
                <Badge variant="secondary" className="mt-1">
                  Popular
                </Badge>
              )}
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {item.description}
          </p>
          
          <div className="flex items-center gap-2 mb-3">
            {item.dietary.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-primary">
              {formatPrice(item.price)}
            </span>
            <Button
              size="sm"
              onClick={() => addToCart(item)}
              className="gap-1"
            >
              <Plus className="h-4 w-4" />
              Add
            </Button>
          </div>
        </div>
        
        <div className="w-24 h-24 flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </Card>
  );
};

export default MenuItemCard;
