import Header from "@/components/header";

export default {
    title: "components/Header",
    component: Header,
    parameters: {
        layout: "fullsreen",
    },
};

export const Default = {
    render: () => (
        <Header>
            <div className="text-white">Header Content</div>
        </Header>
    ),
};
