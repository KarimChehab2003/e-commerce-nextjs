import { Product } from "./definitions";

export const fetchCategories = async () => {
  const res = await fetch("https://dummyjson.com/products/category-list");
  const data: string[] = await res.json();
  return data;
};

export const fetchProducts = async ({
  query,
  category,
  sortBy,
  order,
}: {
  query?: string;
  category?: string;
  sortBy?: string;
  order?: string;
}) => {
  const url = new URL("https://dummyjson.com/products");

  if (query) {
    url.pathname = "/products/search";
    url.searchParams.set("q", query);
  } else if (category) url.pathname = `/products/category/${category}`;

  if (sortBy) url.searchParams.set("sortBy", sortBy);
  if (order) url.searchParams.set("order", order);

  url.searchParams.set("limit", "10");

  const res = await fetch(url.toString());
  // console.log(query, category, sortBy, order);
  const data = await res.json();
  return data.products as Product[];
};

export const fetchProductById = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data: Product = await res.json();
  return data;
};
