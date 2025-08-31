"use client";
import { selectCart, useCartStore } from "@/app/store/useCartStore";
import CartItemCard from "./cart-item";


function RenderCartDrawer() {
    const cart = useCartStore(selectCart);
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    return (
        <div className="menu p-4 w-80 min-h-full bg-base-100">
            <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
            {/* Items will be shown here when implemented */}
            {/* dont forget to add fallback when no product in cart */}
            {
                cart.length === 0 ? (
                    <p className="text-center">Cart is empty</p>
                ) : (
                    <>
                        <ul className="menu space-y-2 w-full">
                            {cart.map((item, idx) => (
                                <li key={idx} className="bg-base-200 ">
                                    <CartItemCard {...item} />
                                </li>
                            ))}
                        </ul>

                        <div className="mt-4 border-t border-base-300 pt-2">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-base-content/70">
                                    Total
                                </span>
                                <span className="text-lg font-bold text-success">
                                    ${total.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </>


                )
            }
        </div>
    );
}

export default RenderCartDrawer;