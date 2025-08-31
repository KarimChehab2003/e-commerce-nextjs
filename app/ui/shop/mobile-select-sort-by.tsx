"use client";

import { redirect } from "next/navigation";
import { sortByFields } from "@/app/lib/placeholder-data";

function MobileSelectSortBy() {
    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;
        if (value) {
            redirect(value);
        }
    }

    return (
        <select
            className="bg-base-100 block lg:hidden border p-2 rounded text-sm w-full"
            onChange={handleChange}
            defaultValue=""
        >
            <option value="" disabled>
                Sort by
            </option>
            {sortByFields.map((field, idx) => (
                <option key={idx} value={field.href}>
                    {field.label}
                </option>
            ))}
        </select>
    );
}

export default MobileSelectSortBy;