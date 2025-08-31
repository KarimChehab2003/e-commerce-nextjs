import { fetchProductById } from "@/app/lib/data";
import AddToCartButton from "@/app/ui/product/AddToCartButton";
import Image from "next/image";
import Link from "next/link";

type ProductDetailsProps = {
    params: Promise<{ id: string }>
}

async function ProductDetails(props: ProductDetailsProps) {
    const params = await props.params;
    const id = params.id;
    const product = await fetchProductById(id);

    return (
        <main className="bg-base-200 max-w-screen-2xl w-full mx-auto p-4 mt-24">
            <Link href="/shop" className="btn btn-sm btn-info btn-outline mb-4">← Back to Shop</Link>

            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <ul className="carousel carousel-center rounded-box h-[75vh] max-w-3xl lg:flex-1">
                    {
                        product.images.map((image, idx) => (
                            <li key={idx} className="carousel-item relative w-full h-full ">
                                <Image src={image} alt={"images of " + product.title} fill className="rounded-box object-contain bg-white" />
                            </li>
                        ))
                    }
                </ul>

                <div className="flex-1 p-4 space-y-6 flex flex-col justify-center">
                    <h2 className="text-4xl lg:text-5xl font-bold">{product.title}</h2>
                    <div className="flex items-center space-x-2">
                        <span className="badge badge-lg font-semibold badge-accent">${(product.price * (1 - (product.discountPercentage / 100))).toFixed(2)}</span>
                        <span className="badge line-through">${product.price}</span>
                    </div>
                    <div className="rating">
                        {
                            Array.from({ length: 5 }).map((_, idx) => (
                                <div key={idx} className="mask mask-star" aria-label={`${idx + 1} star`} aria-current={idx + 1 == Math.floor(product.rating) ? "true" : "false"}></div>
                            ))
                        }
                    </div>
                    <div className="divider"></div>
                    <p className="capitalize font-medium">
                        <span className="text-base-content/80 text-sm font-light">Category: </span> {product.category}
                    </p>
                    <p>{product.description}</p>
                    <AddToCartButton {...product} />
                </div>
            </div>


        </main>
    );
}

export default ProductDetails;