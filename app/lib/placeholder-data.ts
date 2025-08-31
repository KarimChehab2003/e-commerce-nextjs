import { FeaturedCategory, NavLink } from "./definitions";
import laptopsCategoryImage from "@/public/laptops.jpg";
import groceriesCategoryImage from "@/public/groceries.jpg";
import vehiclesCategoryImage from "@/public/vehicules.jpg";
import furnitureCategoryImage from "@/public/furniture.jpg";

export const navbarLinks: NavLink[] = [
  {
    label: "shop",
    href: "/shop",
  },
  {
    label: "groceries",
    href: "/shop?category=groceries",
  },
  {
    label: "furniture",
    href: "/shop?category=furniture",
  },
  {
    label: "skin care",
    href: "/shop?category=skin-care",
  },
];

export const sortByFields: NavLink[] = [
  {
    label: "Price: Low to high",
    href: "/shop?sortBy=price&order=asc",
  },
  {
    label: "Price: High to low",
    href: "/shop?sortBy=price&order=desc",
  },
  {
    label: "Rating: Low to high",
    href: "/shop?sortBy=rating&order=asc",
  },
  {
    label: "Rating: High to low",
    href: "/shop?sortBy=rating&order=desc",
  },
];

export const featuredCategories: FeaturedCategory[] = [
  {
    label: "Laptops",
    image: laptopsCategoryImage,
    href: "/shop?category=laptops",
  },
  {
    label: "Groceries",
    image: groceriesCategoryImage,
    href: "/shop?category=groceries",
  },
  {
    label: "Furniture",
    image: furnitureCategoryImage,
    href: "/shop?category=furniture",
  },
  {
    label: "Vehicles",
    image: vehiclesCategoryImage,
    href: "/shop?category=vehicle",
  },
];
