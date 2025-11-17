import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, DollarSign, MapPin } from "lucide-react";
import RestaurantCard from "@/components/RestaurantCard";
import { restaurants } from "@/data/restaurants";
import heroFood from "@/assets/hero-food.jpg";

const Index = () => {
  const featuredRestaurants = restaurants.filter((r) => r.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroFood}
            alt="Delicious food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Delicious Food,
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Delivered Fast
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
            Order from your favorite restaurants and get it delivered in minutes
          </p>
          <Link to="/restaurants">
            <Button size="lg" className="gap-2 shadow-primary animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              Order Now
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 shadow-primary">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Location</h3>
              <p className="text-muted-foreground">
                Enter your address to see restaurants that deliver to you
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 shadow-primary">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pick Your Meal</h3>
              <p className="text-muted-foreground">
                Browse menus and add items to your cart
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 shadow-primary">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Get your food delivered hot and fresh to your door
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Restaurants
            </h2>
            <Link to="/restaurants">
              <Button variant="outline" className="gap-2">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
