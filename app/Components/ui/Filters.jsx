'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import FormField from "../FormField"
import { useTransition } from 'react';

const Filters = ({ tagList }) => {
    const [isPending, startTransition] = useTransition();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleTypeFilters = (term) => {
        const params = new URLSearchParams(searchParams);
        term ? params.set('type', term) : params.delete('search');
        console.log("Params Type setting", params.toString());
        startTransition(() => {
            replace(`${pathname}?${params.toString()}`);
        });
    };

    const handleTagFilters = (term) => {
        const params = new URLSearchParams(searchParams);
        const selectedTags = params.get('tags') ? params.get('tags').split(",") : [];
        let updatedTags = selectedTags.includes(term)
            ? selectedTags.filter(tag => tag !== term)
            : [...selectedTags, term];
        console.log("updatedTags", updatedTags);
        updatedTags.length ? params.set('tags', updatedTags.join(",")) : params.delete('tags');
        console.log("Params Tag setting", params.toString());
        startTransition(() => {
            replace(`${pathname}?${params.toString()}`);
        });
    };

    return (
        <div className="h-dvh flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Filters</h2>
            <div>
                <h3 className="text-base text-gray-600 pb-2">Course Type</h3>
                <div className="flex flex-col gap-2">
                    <FormField type="radio" name="course-type" label="All" isDisabled={isPending} handleFunction={handleTypeFilters} />
                    <FormField type="radio" name="course-type" label="Paid" isDisabled={isPending} handleFunction={handleTypeFilters} />
                    <FormField type="radio" name="course-type" label="Discount" isDisabled={isPending} handleFunction={handleTypeFilters} />
                    <FormField type="radio" name="course-type" label="Free" isDisabled={isPending} handleFunction={handleTypeFilters} />
                </div>
            </div>
            {tagList &&
                <div>
                    <h3 className="text-base text-gray-600 pb-2">Tags</h3>
                    <div className="flex flex-col gap-2 h-50 overflow-y-auto md:h-100">
                        {tagList.map((tag) => <FormField key={tag.id} type="checkbox" label={tag.name} name={tag.name} value={tag.id} isDisabled={isPending} handleFunction={handleTagFilters} />)}
                    </div>

                </div>
            }

        </div>
    )
}

export default Filters