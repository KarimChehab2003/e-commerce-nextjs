"use client";

import { CartItem } from "@/app/lib/definitions";
import { selectDecrementQuantity, selectIncrementQuantity, useCartStore } from "@/app/store/useCartStore";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa6";

function CartItemCard({ id, title, thumbnail, price, quantity }: CartItem) {
    const incrementQuantity = useCartStore(selectIncrementQuantity);
    const decrementQuantity = useCartStore(selectDecrementQuantity);

    return (
        <article className="flex items-center space-x-2  w-full overflow-hidden">
            {/* Thumbnail */}
            <div className="w-16 h-16 relative flex-shrink-0 bg-white rounded-box">
                <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    className="object-cover rounded-md"
                />
            </div>

            {/* Details */}
            <div className="flex flex-col flex-grow min-w-0 space-y-1 py-2">
                <h3 className="text-sm font-medium">{title}</h3>


                <div className="flex items-center space-x-2">
                    <p className="text-sm text-base-content/70">${price.toFixed(2)}</p>
                    <p className="text-sm font-semibold text-secondary ">
                        (${(price * quantity).toFixed(2)})
                    </p>
                </div>


                <div className="flex items-center space-x-2 mt-1">
                    <button
                        className="btn btn-xs btn-success"
                        onClick={() => incrementQuantity(id)}
                    >
                        <FaPlus />
                    </button>
                    <p className="w-6 text-center">{quantity}</p>
                    <button
                        className="btn btn-xs btn-error"
                        onClick={() => decrementQuantity(id)}
                    >
                        <FaMinus />
                    </button>
                </div>
            </div>

        </article>
    );
}

export default CartItemCard;