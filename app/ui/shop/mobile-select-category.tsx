"use client"

import { redirect } from "next/navigation";
function MobileSelectCategory({ categories }: { categories: string[] }) {
    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;
        if (value === "all") {
            redirect("/shop");
        } else {
            redirect(`/shop?category=${value}`);
        }
    }

    return (
        <select
            className="bg-base-100 block lg:hidden border p-2 rounded text-sm w-full"
            onChange={handleChange}
            defaultValue="all"
        >
            <option value="all">All</option>
            {categories.map((category) => (
                <option key={category} value={category}>
                    {category.replace("-", " ")}
                </option>
            ))}
        </select>
    );
}

export default MobileSelectCategory;