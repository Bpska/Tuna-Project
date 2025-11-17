import { MenuItem } from "@/types";

// Helper function to convert USD to INR (approximately 20x for better Indian pricing)
const toINR = (usdPrice: number) => Math.round(usdPrice * 20);

export const menuItems: MenuItem[] = [
  // Bella Italia (Italian) - Restaurant 1
  {
    id: "m1",
    restaurantId: "1",
    name: "Margherita Pizza",
    description: "Classic pizza with fresh mozzarella, tomatoes, and basil",
    price: toINR(14.99),
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
    category: "Main Course",
    dietary: ["Vegetarian"],
    popular: true
  },
  {
    id: "m2",
    restaurantId: "1",
    name: "Spaghetti Carbonara",
    description: "Creamy pasta with bacon, eggs, and parmesan cheese",
    price: toINR(16.99),
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&q=80",
    category: "Main Course",
    dietary: [],
    popular: true
  },
  {
    id: "m3",
    restaurantId: "1",
    name: "Bruschetta",
    description: "Toasted bread with tomatoes, garlic, and olive oil",
    price: toINR(8.99),
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&q=80",
    category: "Appetizers",
    dietary: ["Vegetarian", "Vegan"]
  },
  {
    id: "m4",
    restaurantId: "1",
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee and mascarpone",
    price: toINR(7.99),
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80",
    category: "Desserts",
    dietary: ["Vegetarian"]
  },
  {
    id: "m5",
    restaurantId: "1",
    name: "Caprese Salad",
    description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze",
    price: toINR(10.99),
    image: "https://images.unsplash.com/photo-1592417817038-d13bb72b55c1?w=400&q=80",
    category: "Appetizers",
    dietary: ["Vegetarian", "Gluten-Free"]
  },
  
  // Dragon Wok (Chinese) - Restaurant 2
  {
    id: "m6",
    restaurantId: "2",
    name: "Kung Pao Chicken",
    description: "Spicy stir-fried chicken with peanuts and vegetables",
    price: toINR(13.99),
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&q=80",
    category: "Main Course",
    dietary: ["Spicy"],
    popular: true
  },
  {
    id: "m7",
    restaurantId: "2",
    name: "Sweet and Sour Pork",
    description: "Crispy pork with bell peppers in tangy sauce",
    price: toINR(14.99),
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&q=80",
    category: "Main Course",
    dietary: []
  },
  {
    id: "m8",
    restaurantId: "2",
    name: "Spring Rolls",
    description: "Crispy vegetable spring rolls with sweet chili sauce",
    price: toINR(6.99),
    image: "https://images.unsplash.com/photo-1573821663912-6df460f9c684?w=400&q=80",
    category: "Appetizers",
    dietary: ["Vegetarian"]
  },
  {
    id: "m9",
    restaurantId: "2",
    name: "Fried Rice",
    description: "Classic fried rice with egg and vegetables",
    price: toINR(9.99),
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80",
    category: "Main Course",
    dietary: ["Vegetarian"]
  },
  
  // Spice Paradise (Indian) - Restaurant 3
  {
    id: "m10",
    restaurantId: "3",
    name: "Butter Chicken",
    description: "Tender chicken in creamy tomato-based curry sauce",
    price: toINR(15.99),
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80",
    category: "Main Course",
    dietary: [],
    popular: true
  },
  {
    id: "m11",
    restaurantId: "3",
    name: "Chicken Tikka Masala",
    description: "Marinated chicken in spiced curry sauce",
    price: toINR(16.99),
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
    category: "Main Course",
    dietary: []
  },
  {
    id: "m12",
    restaurantId: "3",
    name: "Samosas",
    description: "Crispy pastries filled with spiced potatoes and peas",
    price: toINR(5.99),
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
    category: "Appetizers",
    dietary: ["Vegetarian", "Vegan"]
  },
  {
    id: "m13",
    restaurantId: "3",
    name: "Garlic Naan",
    description: "Fresh baked flatbread with garlic and butter",
    price: toINR(3.99),
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
    category: "Sides",
    dietary: ["Vegetarian"]
  },
  
  // Taco Fiesta (Mexican) - Restaurant 4
  {
    id: "m14",
    restaurantId: "4",
    name: "Chicken Tacos",
    description: "Three soft tacos with grilled chicken, salsa, and guacamole",
    price: toINR(11.99),
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80",
    category: "Main Course",
    dietary: [],
    popular: true
  },
  {
    id: "m15",
    restaurantId: "4",
    name: "Beef Burrito",
    description: "Large burrito with seasoned beef, beans, rice, and cheese",
    price: toINR(13.99),
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80",
    category: "Main Course",
    dietary: []
  },
  {
    id: "m16",
    restaurantId: "4",
    name: "Nachos Supreme",
    description: "Tortilla chips topped with cheese, jalapeños, and sour cream",
    price: toINR(9.99),
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&q=80",
    category: "Appetizers",
    dietary: ["Vegetarian"]
  },
  
  // Burger Palace (American) - Restaurant 5
  {
    id: "m17",
    restaurantId: "5",
    name: "Classic Cheeseburger",
    description: "Beef patty with cheese, lettuce, tomato, and special sauce",
    price: toINR(12.99),
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
    category: "Main Course",
    dietary: [],
    popular: true
  },
  {
    id: "m18",
    restaurantId: "5",
    name: "Bacon Burger",
    description: "Beef patty with crispy bacon, cheese, and BBQ sauce",
    price: toINR(14.99),
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80",
    category: "Main Course",
    dietary: []
  },
  {
    id: "m19",
    restaurantId: "5",
    name: "French Fries",
    description: "Crispy golden fries with your choice of dipping sauce",
    price: toINR(4.99),
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80",
    category: "Sides",
    dietary: ["Vegetarian", "Vegan"]
  },
  {
    id: "m20",
    restaurantId: "5",
    name: "Milkshake",
    description: "Thick and creamy milkshake - chocolate, vanilla, or strawberry",
    price: toINR(5.99),
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&q=80",
    category: "Beverages",
    dietary: ["Vegetarian"]
  },
  
  // Sakura Sushi (Japanese) - Restaurant 6
  {
    id: "m21",
    restaurantId: "6",
    name: "California Roll",
    description: "Crab, avocado, and cucumber roll with sesame seeds",
    price: toINR(12.99),
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80",
    category: "Main Course",
    dietary: [],
    popular: true
  },
  {
    id: "m22",
    restaurantId: "6",
    name: "Salmon Nigiri",
    description: "Fresh salmon over seasoned rice (6 pieces)",
    price: toINR(14.99),
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400&q=80",
    category: "Main Course",
    dietary: ["Gluten-Free"]
  },
  {
    id: "m23",
    restaurantId: "6",
    name: "Edamame",
    description: "Steamed soybeans with sea salt",
    price: toINR(5.99),
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=400&q=80",
    category: "Appetizers",
    dietary: ["Vegetarian", "Vegan", "Gluten-Free"]
  },
  {
    id: "m24",
    restaurantId: "6",
    name: "Miso Soup",
    description: "Traditional Japanese soup with tofu and seaweed",
    price: toINR(3.99),
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80",
    category: "Appetizers",
    dietary: ["Vegetarian", "Vegan"]
  }
];
