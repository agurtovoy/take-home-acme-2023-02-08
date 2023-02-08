import Header from "@/components/header";

const PageLayout = ({ header, children }) => (
    <div className="flex h-screen flex-col">
        <Header>{header && header()}</Header>
        <main className="flex h-full flex-col bg-gray-100 pt-dflt">{children}</main>
    </div>
);

export default PageLayout;
