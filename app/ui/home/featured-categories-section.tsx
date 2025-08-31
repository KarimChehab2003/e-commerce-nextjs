import { featuredCategories } from "@/app/lib/placeholder-data";
import beautyCategoryImage from "@/public/beauty.jpg"
import Image from "next/image";
import Link from "next/link";
function FeaturedCategories() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center">Featured Categories</h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-2xl w-full mx-auto p-4">
                <li className="relative aspect-[4/3] lg:row-span-2 lg:aspect-auto rounded-xl overflow-hidden group hover:ring-2 hover:ring-primary transition-shadow duration-200">
                    <Link href="/shop?category=beauty">
                        <Image src={beautyCategoryImage} fill alt={"image of beauty products"} className="object-cover group-hover:scale-105 transition-transform duration-200" />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="text-white text-3xl font-semibold">Beauty</span>
                        </div>
                    </Link>
                </li>
                {
                    featuredCategories.map((category, idx) => (
                        <li key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden group hover:ring-2 hover:ring-primary transition-shadow duration-200">
                            <Link href={category.href}>
                                <Image src={category.image} fill alt={"image of laptops"} className="object-cover group-hover:scale-105 transition-transform duration-200" />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                    <span className="text-white text-3xl font-semibold">{category.label}</span>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}

export default FeaturedCategories;