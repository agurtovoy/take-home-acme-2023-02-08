import clsx from "clsx";
import { Tab } from "@headlessui/react";

const TabGroup = ({ tabs, children }) => (
    <Tab.Group>
        <Tab.List className="ml-dflt flex">
            {tabs.map(({ id, label }) => (
                <Tab
                    key={id}
                    className={clsx(
                        "relative h-10 w-[200px] text-sm capitalize outline-none",
                        "ui-selected:active-tab-border ui-selected:bg-gray-50 ui-selected:text-gray-800",
                        "ui-not-selected:inactive-tab-border ui-selected:after:bg-gray-50 ui-not-selected:before:border-l"
                    )}
                >
                    {label}
                </Tab>
            ))}
        </Tab.List>
        <Tab.Panels className="bottom-0 flex-grow border-t border-gray-200 bg-gray-50 p-dflt">
            {({ selectedIndex }) =>
                tabs.map((tab, index) => (
                    <Tab.Panel key={index}>{index === selectedIndex ? children && children(tab) : null}</Tab.Panel>
                ))
            }
        </Tab.Panels>
    </Tab.Group>
);

export default TabGroup;
