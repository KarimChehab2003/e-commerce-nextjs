import { StaticImageData } from "next/image";

export type NavLink = {
  href: string;
  label: string;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  tags: string[];
  images: string[];
  thumbnail: string;
};

export type SearchParams = {
  searchParams: Promise<{
    query?: string;
    category?: string;
    sortBy?: string;
    order?: string;
  }>;
};

export type CartItem = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
};

export type FeaturedCategory = {
  label: string;
  image: StaticImageData;
  href: string;
};
