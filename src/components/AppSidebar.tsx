import { Home, Store, ShoppingCart, User, Package, Moon, Sun } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { useTheme } from "next-themes";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";

const menuItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Restaurants", url: "/restaurants", icon: Store },
  { title: "Checkout", url: "/checkout", icon: ShoppingCart },
  { title: "Profile", url: "/profile", icon: User },
  { title: "Orders", url: "/order-tracking/ORD123", icon: Package },
];

export function AppSidebar() {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              QuickBite
            </div>
          </Link>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <Link to={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="p-4">
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <>
                <Sun className="h-4 w-4 mr-2" />
                Light Mode
              </>
            ) : (
              <>
                <Moon className="h-4 w-4 mr-2" />
                Dark Mode
              </>
            )}
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
