function ProductsGridSkeleton() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 grow mx-4 order-last lg:order-none  ">
            {Array.from({ length: 9 }).map((_, idx) => (
                <article key={idx} className="card bg-base-200 w-96 shadow-sm">
                    <figure className="relative w-full h-64">
                        <div className="skeleton w-full h-full" />
                    </figure>
                    <div className="card-body space-y-4">
                        <div className="skeleton h-6 w-3/4" />
                        <div className="flex justify-between items-center">
                            <div className="skeleton h-6 w-16" />
                            <div className="skeleton h-10 w-24 rounded-lg" />
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default ProductsGridSkeleton;