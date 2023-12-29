import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  rating: number;
  title: string;
  description: string;
}

interface CartInfo {
  cartData: Product[];
}

// Demo Data
const initialState: CartInfo = {
  cartData: [
    {
      title: "Smartphone X",
      description:
        "A high-performance smartphone with a stunning display and advanced camera features.",
      rating: 4.5,
    },
    {
      title: "Laptop Pro",
      description:
        "Powerful laptop for professionals, featuring a sleek design and fast processing speed.",
      rating: 4.2,
    },
    {
      title: "Fitness Tracker 3.0",
      description:
        "Track your fitness goals with this advanced fitness tracker, equipped with heart rate monitoring and GPS.",
      rating: 4.7,
    },
    {
      title: "Coffee Maker Deluxe",
      description:
        "Brew your favorite coffee with this deluxe coffee maker, offering multiple brewing options and a stylish design.",
      rating: 4.0,
    },
    {
      title: "Ultra HD Smart TV",
      description:
        "Experience breathtaking visuals with this Ultra HD Smart TV, featuring smart connectivity and immersive sound.",
      rating: 4.8,
    },
    {
      title: "Gaming Console Elite",
      description:
        "Immerse yourself in gaming with this elite gaming console, offering cutting-edge graphics and a vast game library.",
      rating: 4.6,
    },
    {
      title: "Digital Camera Pro",
      description:
        "Capture stunning photos with this professional-grade digital camera, equipped with advanced imaging technology.",
      rating: 4.4,
    },
    {
      title: "Wireless Earbuds",
      description:
        "Enjoy superior audio quality and convenience with these wireless earbuds, perfect for on-the-go music enthusiasts.",
      rating: 4.3,
    },
    {
      title: "Home Security System",
      description:
        "Protect your home with this state-of-the-art security system, featuring smart sensors and real-time monitoring.",
      rating: 4.9,
    },
    {
      title: "Electric Scooter Max",
      description:
        "Effortlessly commute with this electric scooter, boasting a long battery life and compact design.",
      rating: 4.1,
    },
    {
      title: "Portable Bluetooth Speaker",
      description:
        "Enhance your audio experience with this portable Bluetooth speaker, delivering crisp sound and stylish portability.",
      rating: 4.5,
    },
    {
      title: "Smart Thermostat",
      description:
        "Control your home's temperature with this smart thermostat, offering energy efficiency and remote access.",
      rating: 4.2,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Product>) => {
      state.cartData.push(action.payload);
    },
    Setfilter: (state, action: PayloadAction<Product[]>) => {
      state.cartData = action.payload;
    },
    removeCart: (state, action: PayloadAction<Product>) => {
      const { title, rating, description } = action.payload;
      state.cartData = state.cartData.filter(
        (item) =>
          item.title !== title ||
          item.rating !== rating ||
          item.description !== description
      );
    },
  },
});

export const { addCart, Setfilter, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
