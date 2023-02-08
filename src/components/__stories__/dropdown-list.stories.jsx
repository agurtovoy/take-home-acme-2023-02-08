import { useState } from "react";
import DropdownList from "@/components/dropdown-list";

export default {
    title: "components/DropdownList",
    component: DropdownList,
};

export const Default = {
    render: () => {
        const items = [
            { id: "group1", label: "Group 1" },
            { id: "group2", label: "Group 2" },
        ];

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [selectedItem, setSelectedItem] = useState(items[0]);
        return (
            <div className="h-screen">
                <DropdownList
                    className="w-[200px] bg-gray-200 text-gray-800"
                    label="Change group"
                    items={items}
                    value={selectedItem}
                    onChange={setSelectedItem}
                />
            </div>
        );
    },
};
