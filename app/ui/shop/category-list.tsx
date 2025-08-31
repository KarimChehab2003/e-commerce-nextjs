import { fetchCategories } from "@/app/lib/data";
import Link from "next/link";
import MobileSelectCategory from "./mobile-select-category";

async function CategoryList() {
    const categories: string[] = await fetchCategories();
    return (
        <>
            <ul className="space-y-1 hidden lg:block">
                <li>
                    <Link href="/shop" className="hover:link text-sm">All</Link>
                </li>
                {
                    categories.map((category, idx) => (
                        <li key={idx} className="capitalize">
                            <Link href={`/shop?category=${category}`} className="hover:link text-sm">{category.replace("-", " ")}</Link>
                        </li>
                    ))
                }
            </ul>

            <MobileSelectCategory categories={categories} />
        </>
    );
}



export default CategoryList;