import { useState, useRef, useLayoutEffect } from "react";
import Color from "tinycolor2";

const cssBackgroundColor = element =>
    Color(window.getComputedStyle(element).getPropertyValue("background-color")).toHexString();

const useBackgroundColor = () => {
    const ref = useRef();
    const [value, setValue] = useState();

    useLayoutEffect(() => {
        if (ref.current) {
            setValue(cssBackgroundColor(ref.current));
        }
    }, [ref]);

    return { ref, value };
};

const Swatch = ({ color }) => {
    const { ref, value } = useBackgroundColor();
    return (
        <div className="flex flex-col">
            <div ref={ref} className={`aspect-square w-20 rounded bg-${color}`} />
            <div className="">{color}</div>
            <div className="font-mono text-xs">{value}</div>
        </div>
    );
};

const BrandColors = () => (
    <div className="flex gap-4">
        <Swatch color="gray-50" />
        <Swatch color="gray-100" />
        <Swatch color="gray-200" />
        <Swatch color="gray-300" />
        <Swatch color="gray-500" />
        <Swatch color="gray-700" />
        <Swatch color="gray-800" />
        <Swatch color="gray-900" />
        <Swatch color="accent" />
    </div>
);

export default {
    title: "Brand Colors",
    component: BrandColors,
};

export const Default = {};
