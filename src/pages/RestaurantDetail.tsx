import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Star, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MenuItemCard from "@/components/MenuItemCard";
import { restaurants } from "@/data/restaurants";
import { menuItems } from "@/data/menuItems";
import { useMemo } from "react";

const RestaurantDetail = () => {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === id);
  
  const restaurantMenuItems = useMemo(() => {
    return menuItems.filter((item) => item.restaurantId === id);
  }, [id]);

  const categories = useMemo(() => {
    return Array.from(new Set(restaurantMenuItems.map((item) => item.category)));
  }, [restaurantMenuItems]);

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Restaurant not found</h2>
          <Link to="/restaurants">
            <Button>Back to Restaurants</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-8">
      {/* Header Image */}
      <div className="relative h-64 md:h-80">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="absolute top-4 left-4">
          <Link to="/restaurants">
            <Button variant="secondary" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
        </div>

        {restaurant.discount && (
          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
            {restaurant.discount}
          </Badge>
        )}
      </div>

      <div className="container mx-auto px-4 -mt-8 relative">
        {/* Restaurant Info Card */}
        <div className="bg-card rounded-lg shadow-card p-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{restaurant.name}</h1>
          <p className="text-lg text-muted-foreground mb-4">{restaurant.cuisine}</p>
          
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-medium">{restaurant.rating}</span>
              <span className="text-muted-foreground">({restaurant.reviewCount} reviews)</span>
            </div>
            
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            
            <div className="flex items-center gap-1 text-muted-foreground">
              <DollarSign className="h-4 w-4" />
              <span>${restaurant.deliveryFee} delivery fee</span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <Badge variant={restaurant.isOpen ? "secondary" : "destructive"}>
              {restaurant.isOpen ? "Open Now" : "Closed"}
            </Badge>
            <span className="text-sm text-muted-foreground">
              Min. order: ${restaurant.minimumOrder}
            </span>
          </div>
        </div>

        {/* Menu Categories */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Menu</h2>
          
          {categories.map((category) => {
            const categoryItems = restaurantMenuItems.filter(
              (item) => item.category === category
            );
            
            return (
              <div key={category} className="mb-8">
                <h3 className="text-xl font-semibold mb-4 pb-2 border-b">
                  {category}
                </h3>
                <div className="grid gap-4">
                  {categoryItems.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            );
          })}

          {restaurantMenuItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No menu items available yet
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
