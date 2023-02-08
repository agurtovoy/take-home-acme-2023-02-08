import { useState } from "react";
import PageLayout from "@/layouts/page";

import GroupByDropdown from "./group-by-dropdown";
import Reports from "./reports";

const Dashboard = () => {
    const [groupBy, setGroupBy] = useState();
    return (
        <PageLayout header={() => <GroupByDropdown value={groupBy} onChange={setGroupBy} />}>
            {groupBy && <Reports groupBy={groupBy} />}
        </PageLayout>
    );
};

export default Dashboard;
