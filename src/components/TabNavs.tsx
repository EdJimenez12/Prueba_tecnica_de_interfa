interface TabNavProps {
    tabs: string[];
    activeTab: string;
    onChange: (tab: string) => void;
}

const TabNav: React.FC<TabNavProps> = ({ tabs, activeTab, onChange }) => {
    return (
    <div className="bg-blue-50 p-2 mx-4 flex justify-around gap-2  rounded-md shadow-sm shadow-gray-400">
        {tabs.map((tab) => (
            <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`flex-1 text-center py-2 transition px-4 py-1 rounded-md transition${
                activeTab === tab
                    ? " text-blue-900 bg-blue-200 font-bold shadow-md shadow-gay-600 hover:shadow-md shadow-gey-400"
                    : "text-gray-50 hover:bg-blue-100 font-bold"
            }`}>
        {tab}
        </button>
    ))}
    </div>
    );
};

export default TabNav;
