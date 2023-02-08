import { useEffect, useState } from "react";
import useSearchParam from "@/lib/search-param";

const useGroupSearchParam = () => {
    const [groupSearchParam, setGroupSearchParam] = useSearchParam("group");
    const [groupId, setGroupId] = useState(groupSearchParam);

    useEffect(() => {
        if (groupId !== groupSearchParam) {
            setGroupSearchParam(groupId);
        }
    }, [groupId, groupSearchParam, setGroupSearchParam]);

    return [groupId, setGroupId];
};

export default useGroupSearchParam;
