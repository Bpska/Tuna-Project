import { useState } from "react";
import { User, MapPin, Heart, History } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/utils/currency";

const Profile = () => {
  const [user] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
  });

  const orderHistory = [
    {
      id: "ORD001",
      restaurant: "Bella Italia",
      date: "2024-01-15",
      total: 45.99,
      status: "delivered",
    },
    {
      id: "ORD002",
      restaurant: "Dragon Wok",
      date: "2024-01-12",
      total: 32.50,
      status: "delivered",
    },
    {
      id: "ORD003",
      restaurant: "Burger Palace",
      date: "2024-01-08",
      total: 28.99,
      status: "delivered",
    },
  ];

  const favoriteRestaurants = [
    { id: "1", name: "Bella Italia", cuisine: "Italian" },
    { id: "3", name: "Spice Paradise", cuisine: "Indian" },
    { id: "6", name: "Sakura Sushi", cuisine: "Japanese" },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile" className="gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="orders" className="gap-2">
              <History className="h-4 w-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="favorites" className="gap-2">
              <Heart className="h-4 w-4" />
              Favorites
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue={user.name} />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={user.email} />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" defaultValue={user.phone} />
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Saved Addresses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">Home</Badge>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                  <p className="text-sm">123 Main Street, Apt 4B</p>
                  <p className="text-sm text-muted-foreground">New York, NY 10001</p>
                </div>
                <Button variant="outline" className="w-full">
                  Add New Address
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-4">
            {orderHistory.map((order) => (
              <Card key={order.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{order.restaurant}</h3>
                      <p className="text-sm text-muted-foreground">
                        Order #{order.id} • {new Date(order.date).toLocaleDateString()}
                      </p>
                      <p className="text-sm mt-1">Total: {formatPrice(order.total)}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge variant="secondary">{order.status}</Badge>
                      <Button variant="outline" size="sm">
                        Reorder
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="favorites" className="space-y-4">
            {favoriteRestaurants.map((restaurant) => (
              <Card key={restaurant.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{restaurant.name}</h3>
                      <p className="text-sm text-muted-foreground">{restaurant.cuisine}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View Menu
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Heart className="h-4 w-4 fill-accent text-accent" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
