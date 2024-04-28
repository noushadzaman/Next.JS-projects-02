'use client';

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Search = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(term) {
        const params = new URLSearchParams(searchParams)
        if (term) {
            params.set('query', term);
        }
        else {
            params.delete('query', term);
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <input
            onChange={(e) => {
                handleSearch(e.target.value)
            }}
            defaultValue={searchParams.get('query')?.toString()}
            type="text"
            placeholder="Search..."
            className="bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
        />
    );
};

export default Search;