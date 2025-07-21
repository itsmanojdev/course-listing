'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import FormField from "../FormField";

const Search = ({ placeholder }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        term ? params.set('search', term) : params.delete('search');

        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <FormField type="text" placeholder={placeholder} handleFunction={handleSearch} defaultValue={searchParams.get('search')?.toString()} />
    )
}

export default Search