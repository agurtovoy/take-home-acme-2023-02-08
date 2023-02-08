import { useSearchParams } from "react-router-dom";

const useSearchParam = name => {
    const [searchParams, setSearchParams] = useSearchParams();
    return [
        searchParams.get(name),
        value => {
            if (value) {
                searchParams.set(name, value);
                setSearchParams(searchParams);
            }
        },
    ];
};

export default useSearchParam;
