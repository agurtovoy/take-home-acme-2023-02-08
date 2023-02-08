import TabGroup from "@/components/tab-group";
import { useReportsData } from "@/lib/api";

import { Trans } from "react-i18next";

const ReportCard = ({ id, label, data }) => (
    <section className="flex flex-col bg-white p-8">
        <h4 className="text-xs uppercase text-gray-500">{label}</h4>
        <div className="mt-5 max-w-md text-lg text-black">
            <Trans i18nKey={id} values={data} components={[<strong></strong>]} />
        </div>
    </section>
);

const ReportPanel = ({ data }) => (
    <div className="grid gap-dflt grid-auto-fit-sm">
        {Object.keys(data).map(id => (
            <ReportCard key={id} id={id} {...data[id]} />
        ))}
    </div>
);

const Reports = ({ groupId }) => {
    const { data, error } = useReportsData({ groupId });
    if (!data || error) return null;

    const reports = data.data;
    const tabs = Object.keys(reports).map(key => ({ id: key, label: key }));
    return <TabGroup tabs={tabs}>{tab => <ReportPanel data={reports[tab.id]} />}</TabGroup>;
};

export default Reports;
