import { sortByFields } from "@/app/lib/placeholder-data";
import Link from "next/link";
import MobileSelectSortBy from "./mobile-select-sort-by";

function SortByList() {
    return (
        <>
            <ul className="space-y-1 hidden lg:block">
                {
                    sortByFields.map((field, idx) => (
                        <li key={idx}>
                            <Link href={field.href} className="hover:link text-sm">{field.label}</Link>
                        </li>
                    ))
                }
            </ul>
            <MobileSelectSortBy />
        </>
    );
}

export default SortByList;