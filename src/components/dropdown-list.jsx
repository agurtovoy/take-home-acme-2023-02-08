import clsx from "clsx";
import { Listbox } from "@headlessui/react";
import Chevron from "@/components/svg/chevron.svg";

const DropdownList = ({ label, items, value, onChange, className }) => (
    <div className="inline-flex select-none flex-col gap-[4px]">
        <Listbox value={value} by="id" onChange={onChange}>
            <Listbox.Button
                className={clsx(
                    "flex h-10 place-content-between items-center whitespace-nowrap rounded px-3",
                    "active-outline text-sm font-semibold",
                    className
                )}
            >
                {value.label} <Chevron className="ml-3 h-2/5 w-auto pt-[1px] [fill:currentcolor]" />
            </Listbox.Button>
            <div className="relative">
                <Listbox.Options className="absolute z-50 w-full border bg-white py-1 outline-none drop-shadow-md">
                    <li className="py-1 px-3">
                        <Listbox.Label className="text-xs uppercase text-gray-500">{label}</Listbox.Label>
                    </li>
                    {items.map(item => (
                        <Listbox.Option
                            key={item.id}
                            value={item}
                            className="cursor-pointer px-3 text-sm leading-10 hover:bg-gray-100"
                        >
                            {item.label}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </div>
        </Listbox>
    </div>
);

export default DropdownList;
