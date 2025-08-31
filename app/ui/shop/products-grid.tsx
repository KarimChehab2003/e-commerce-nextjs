import { fetchProducts } from "@/app/lib/data";
import { Product, SearchParams } from "@/app/lib/definitions";
import ProductCard from "./product-card";


async function ProductsGrid(props: SearchParams) {
    const searchParams = await props.searchParams;
    const query = searchParams.query || "";
    const category = searchParams.category || "";
    const sortBy = searchParams.sortBy || "";
    const order = searchParams.order || "";
    const products: Product[] = await fetchProducts({ query, category, sortBy, order });
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 grow mx-4 order-last lg:order-none ">
            {
                products.length === 0 ? (
                    <div role="alert" className="alert alert-error alert-soft h-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>No products found for <span className="font-semibold">{query}</span></p>
                    </div>
                ) : (
                    products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))
                )
            }
        </div>
    );
}

export default ProductsGrid;