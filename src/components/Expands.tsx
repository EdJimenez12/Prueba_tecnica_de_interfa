import { useState } from "react";
import { Maximize2, Minimize2 } from "lucide-react";

interface ExpandToggleProps {
    title: string;
    color: string; 
    children: React.ReactNode;
}

const ExpandToggle = ({ title, color, children }: ExpandToggleProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const textColor = color.replace("bg-", "text-");

    return (
        <div className="bg-white border border-gray-200 rounded-md shadow-lg 
        shadow-gray-400 w-full max-w-md mx-auto transition-all duration-300">
        <div className={`flex justify-between items-center px-4 py-2 rounded-t-md ${color}`}>
            <h2 className="text-sm font-bold text-white">{title}</h2>
            <button onClick={() => setIsExpanded(!isExpanded)} className="bg-white rounded-sm">
            {isExpanded ? (
                <Minimize2 className={`w-7 h-7 ${textColor}`} />
            ) : (
                <Maximize2 className={`w-7 h-7 ${textColor}`} />
            )}
            </button>
        </div>

        
        {isExpanded && <div className="p-3 space-y-3">{children}</div>}
    </div>
    );
};

export default ExpandToggle;

