import React from "react";

interface WidgetProps {
    title: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
}
const Widget: React.FC<WidgetProps> = ({ title, children, icon }) => {
    return (
        <div className="rounded-lg shadow-lg shadow-gray-400 overflow-hidden  bg-white">
            <div className={`flex justify-between items-center px-4 py-2  bg-blue-200 text-blue-900 font-semibold`}
            ><h2 className="font-semibold text-sm">{title}</h2>
            {icon && <div className="text-white">{icon}</div>}
            </div>
            <div className = "p-4">{children}</div>
        </div>
    );
};
export default Widget;