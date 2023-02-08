import PageLayout from "@/layouts/page";

import GroupByDropdown from "./group-by-dropdown";
import useGroupSearchParam from "./group-search-param";
import Reports from "./reports";

const Dashboard = () => {
    const [groupId, setGroupId] = useGroupSearchParam();
    return (
        <PageLayout header={() => <GroupByDropdown id={groupId} onChange={setGroupId} />}>
            {groupId && <Reports groupId={groupId} />}
        </PageLayout>
    );
};

export default Dashboard;
