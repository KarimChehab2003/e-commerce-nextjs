"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";


function SearchComponent() {
    const [query, setQuery] = useState<string>("");
    const router = useRouter()
    const handleSubmit = () => {
        router.push(`/shop?query=${query}`)
    }
    return (
        <form action={handleSubmit} className="grow">
            <label className="flex justify-center mx-4 w-full">
                <label className="input bg-base-200 w-full outline-none focus-within:outline-none ring-0 focus-within:ring-1 transition-shadow duration-200">
                    <FaSearch />
                    <input type="search" placeholder="Search for products..." value={query} onChange={(e) => setQuery(e.target.value)} />
                </label>
            </label>
        </form>
    );
}

export default SearchComponent;