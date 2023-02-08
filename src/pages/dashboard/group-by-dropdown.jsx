import { useEffect } from "react";
import DropdownList from "@/components/dropdown-list";

import { useGroupFilters } from "@/lib/api";

const GroupByDropdown = ({ value, onChange }) => {
    const { data, error } = useGroupFilters();
    useEffect(() => {
        if (data?.length) {
            onChange(data[0]);
        }
    }, [data, onChange]);

    if (!value || !data || error) return null;

    return (
        <DropdownList
            className="w-[200px] bg-gray-900 text-white"
            label="Change grouping"
            items={data}
            value={value}
            onChange={onChange}
        />
    );
};

export default GroupByDropdown;
