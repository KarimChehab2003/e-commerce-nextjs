import { Suspense } from "react";
import CategoryList from "../ui/shop/category-list";
import CategoryListSkeleton from "../ui/shop/category-list-skeleton";
import SortByList from "../ui/shop/sort-by-list";
import ProductsGrid from "../ui/shop/products-grid";
import ProductsGridSkeleton from "../ui/shop/products-grid-skeleton";
import { SearchParams } from "../lib/definitions";


function Shop({ searchParams }: SearchParams) {
    return (
        <main className="min-h-screen h-full mt-24">
            <div className="max-w-screen-2xl mx-auto w-full flex flex-col lg:flex-row gap-6 justify-between">
                <aside className="order-first px-4">
                    <p className="text-xs label mb-2">Collections</p>
                    <Suspense fallback={<CategoryListSkeleton />}>
                        <CategoryList />
                    </Suspense>
                </aside>

                <Suspense fallback={<ProductsGridSkeleton />}>
                    <ProductsGrid searchParams={searchParams} />
                </Suspense>

                <aside className="order-none lg:order-last px-4">
                    <p className="text-xs font-light label mb-2">Sort By</p>
                    <SortByList />
                </aside>
            </div>
        </main>
    );
}

export default Shop;