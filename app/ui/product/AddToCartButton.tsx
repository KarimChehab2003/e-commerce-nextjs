"use client";
import { Product } from "@/app/lib/definitions";
import { selectAddToCart, useCartStore } from "@/app/store/useCartStore";

function AddToCartButton({ id, title, thumbnail, price }: Product) {
    const addToCart = useCartStore(selectAddToCart);
    return (
        <button className="btn btn-primary" onClick={() => addToCart({ id, title, thumbnail, price, quantity: 1 })}>Add To Cart</button>
    );
}

export default AddToCartButton;