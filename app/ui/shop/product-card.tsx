import { Product } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../product/AddToCartButton";

function ProductCard(props: Product) {
    return (
        <article className="card bg-base-200 max-w-sm shadow-sm hover:ring-1 hover:ring-primary transition-shadow duration-200 h-fit">
            <Link href={`/product/${props.id}`} className=" h-full flex flex-col justify-between">
                <figure className="relative w-full aspect-[4/3]">
                    <Image
                        src={props.thumbnail}
                        alt={"image of " + props.title}
                        fill
                        className="object-contain"
                    />
                </figure>
            </Link>
            <div className="card-body justify-center">
                <Link href={`/product/${props.id}`} className="hover:text-accent transition-colors duration-200">
                    <h2 className="card-title">{props.title}</h2>
                </Link>
                {/* <p>{props.description}</p> */}
                <div className="card-actions justify-between items-center">
                    <p>${props.price}</p>
                    <AddToCartButton {...props} />
                </div>
            </div>

        </article>
    );
}

export default ProductCard;