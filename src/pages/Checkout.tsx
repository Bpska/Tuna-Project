import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Minus, Plus, Trash2, CreditCard, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/utils/currency";

const Checkout = () => {
  const { cart, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [deliveryDetails, setDeliveryDetails] = useState({
    street: "",
    apt: "",
    city: "",
    zip: "",
    instructions: ""
  });

  const deliveryFee = 49;
  const tax = cartTotal * 0.05;
  const total = cartTotal - discount + deliveryFee + tax;

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === "SAVE10") {
      setDiscount(cartTotal * 0.1);
      toast.success("Promo code applied! 10% off");
    } else {
      toast.error("Invalid promo code");
    }
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    // Validate delivery details
    if (!deliveryDetails.street || !deliveryDetails.city || !deliveryDetails.zip) {
      toast.error("Please fill in all required delivery details");
      return;
    }

    const orderId = `ORD${Date.now()}`;
    toast.success("Order placed successfully!");
    clearCart();
    navigate(`/order-tracking/${orderId}`);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Add some delicious items to get started!</p>
          <Button onClick={() => navigate("/restaurants")}>Browse Restaurants</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Order</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-4 border-b last:border-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{formatPrice(item.price)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        {item.dietary.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Delivery Address */}
            <Card>
              <CardHeader>
                <CardTitle>Delivery Address</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="street">Street Address *</Label>
                    <Input 
                      id="street" 
                      placeholder="123 Main St" 
                      value={deliveryDetails.street}
                      onChange={(e) => setDeliveryDetails({...deliveryDetails, street: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="apt">Apt/Suite</Label>
                    <Input 
                      id="apt" 
                      placeholder="Apt 4B" 
                      value={deliveryDetails.apt}
                      onChange={(e) => setDeliveryDetails({...deliveryDetails, apt: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input 
                      id="city" 
                      placeholder="Mumbai" 
                      value={deliveryDetails.city}
                      onChange={(e) => setDeliveryDetails({...deliveryDetails, city: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="zip">PIN Code *</Label>
                    <Input 
                      id="zip" 
                      placeholder="400001" 
                      value={deliveryDetails.zip}
                      onChange={(e) => setDeliveryDetails({...deliveryDetails, zip: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="instructions">Delivery Instructions (Optional)</Label>
                  <Input 
                    id="instructions" 
                    placeholder="Ring doorbell twice" 
                    value={deliveryDetails.instructions}
                    onChange={(e) => setDeliveryDetails({...deliveryDetails, instructions: e.target.value})}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <Button variant="outline" className="justify-start gap-2 h-auto p-4">
                    <CreditCard className="h-5 w-5" />
                    <div className="text-left">
                      <div className="font-semibold">Credit/Debit Card</div>
                      <div className="text-sm text-muted-foreground">Visa, Mastercard, Amex</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="justify-start gap-2 h-auto p-4">
                    <Wallet className="h-5 w-5" />
                    <div className="text-left">
                      <div className="font-semibold">Cash on Delivery</div>
                      <div className="text-sm text-muted-foreground">Pay when you receive</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span>{formatPrice(deliveryFee)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">GST (5%)</span>
                    <span>{formatPrice(tax)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm text-secondary">
                      <span>Discount</span>
                      <span>-{formatPrice(discount)}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="promo">Promo Code</Label>
                  <div className="flex gap-2">
                    <Input
                      id="promo"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                    />
                    <Button variant="outline" onClick={handleApplyPromo}>
                      Apply
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">Try code: SAVE10</p>
                </div>

                <Button className="w-full" size="lg" onClick={handlePlaceOrder}>
                  Place Order
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By placing your order, you agree to our terms and conditions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
