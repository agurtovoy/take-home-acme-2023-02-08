import { useEffect, useRef } from "react";
import DropdownList from "@/components/dropdown-list";

import { useGroupFilters } from "@/lib/api";

const groupLookup = (data, id) => (data || []).reduce((res, group) => ({ ...res, [group.id]: group }), {})[id];

const GroupByDropdown = ({ id, onChange }) => {
    const { data, error } = useGroupFilters();
    const filtersLoaded = useRef(false);

    const value = groupLookup(data, id);

    useEffect(() => {
        if (data?.length && !filtersLoaded.current) {
            filtersLoaded.current = true;
            onChange((groupLookup(data, id) || data[0]).id);
        }
    }, [data, id, onChange]);

    if (!value || error) return null;

    return (
        <DropdownList
            className="w-[200px] bg-gray-900 text-white"
            label="Change grouping"
            items={data}
            value={value}
            onChange={({ id }) => onChange(id)}
        />
    );
};

export default GroupByDropdown;
