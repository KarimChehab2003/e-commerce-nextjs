import clsx from "clsx";

function CategoryListSkeleton() {
    return (
        <ul className="space-y-2">
            {
                Array.from({ length: 24 }).map((_, idx) => (
                    <p key={idx} className={clsx("h-4 bg-gray-500 skeleton", {
                        "w-44": idx % 2 == 0,
                        "w-32": true
                    })}></p>
                ))
            }
        </ul>
    );
}

export default CategoryListSkeleton;