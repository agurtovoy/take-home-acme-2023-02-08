import Header from "@/components/header";
import DropdownList from "@/components/dropdown-list";

const Dashboard = () => {
    return (
        <main className="flex h-screen flex-col">
            <Header>
                <DropdownList
                    className="w-[200px] bg-gray-900 text-white"
                    label="Change group"
                    items={[
                        { id: "group1", label: "Group 1" },
                        { id: "group2", label: "Group 2" },
                    ]}
                />
            </Header>
        </main>
    );
};

export default Dashboard;
