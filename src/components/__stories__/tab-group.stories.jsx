import TabGroup from "@/components/tab-group";

export default {
    title: "components/TabGroup",
    component: TabGroup,
};

export const Default = {
    render: () => (
        <TabGroup tabs={["Tab 1", "Tab 2", "Tab 3"].map(t => ({ id: t, label: t }))}>
            {tab => <div>{JSON.stringify(tab)}</div>}
        </TabGroup>
    ),
};
