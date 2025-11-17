import { useParams } from "react-router-dom";
import { CheckCircle2, Clock, Package, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const OrderTracking = () => {
  const { orderId } = useParams();
  const currentStatus = "preparing"; // In real app, fetch from API

  const statuses = [
    { id: "placed", label: "Order Placed", icon: CheckCircle2 },
    { id: "preparing", label: "Preparing", icon: Package },
    { id: "out-for-delivery", label: "Out for Delivery", icon: Truck },
    { id: "delivered", label: "Delivered", icon: CheckCircle2 },
  ];

  const currentIndex = statuses.findIndex((s) => s.id === currentStatus);
  const progress = ((currentIndex + 1) / statuses.length) * 100;

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold mb-8">Track Your Order</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Order #{orderId}</span>
              <span className="text-sm font-normal text-muted-foreground">
                Estimated: 25-35 min
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Progress value={progress} className="h-2" />
            </div>

            <div className="space-y-6">
              {statuses.map((status, index) => {
                const Icon = status.icon;
                const isCompleted = index <= currentIndex;
                const isCurrent = index === currentIndex;

                return (
                  <div key={status.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                          isCompleted
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      {index < statuses.length - 1 && (
                        <div
                          className={`w-0.5 h-12 transition-colors ${
                            isCompleted ? "bg-primary" : "bg-muted"
                          }`}
                        />
                      )}
                    </div>

                    <div className="flex-1 pt-2">
                      <h3
                        className={`font-semibold ${
                          isCurrent ? "text-primary" : ""
                        }`}
                      >
                        {status.label}
                      </h3>
                      {isCurrent && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Your order is being prepared by the restaurant
                        </p>
                      )}
                      {isCompleted && !isCurrent && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Completed
                        </p>
                      )}
                    </div>

                    {isCurrent && (
                      <div className="pt-2">
                        <Clock className="h-5 w-5 text-primary animate-pulse" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Delivery Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Delivering to</p>
              <p className="font-medium">123 Main Street, Apt 4B</p>
              <p className="text-sm">New York, NY 10001</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Contact</p>
              <p className="font-medium">+1 (555) 123-4567</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderTracking;
