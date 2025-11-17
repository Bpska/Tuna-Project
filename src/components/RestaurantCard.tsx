import { Link } from "react-router-dom";
import { Clock, Star, DollarSign } from "lucide-react";
import { Restaurant } from "@/types";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { formatPrice } from "@/utils/currency";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <Card className="overflow-hidden hover:shadow-hover transition-all duration-300 group cursor-pointer">
        <div className="relative h-48 overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {restaurant.discount && (
            <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
              {restaurant.discount}
            </Badge>
          )}
          {!restaurant.isOpen && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">Closed</span>
            </div>
          )}
        </div>
        
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                {restaurant.name}
              </h3>
              <p className="text-sm text-muted-foreground">{restaurant.cuisine}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-medium text-foreground">{restaurant.rating}</span>
              <span>({restaurant.reviewCount})</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <DollarSign className="h-4 w-4" />
              <span>{formatPrice(restaurant.deliveryFee)}</span>
            </div>
          </div>
          
          <div className="mt-2 text-xs text-muted-foreground">
            Min. order: {formatPrice(restaurant.minimumOrder)}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RestaurantCard;
