import { historyData } from "../data/HistoryData";
import { Eye } from "lucide-react";
import ExpandToggle from "../components/Expands";

const History = () => {
    return (
        <ExpandToggle title="Historial clínico" color="bg-blue-900">
        <div className="p-3 space-y-3">
            {historyData.length === 0 ? (
            <p className="text-gray-500 text-sm">sto no se ve</p>
            ) : (
            historyData.map((item, idx) => (
                <div
                key={idx}
                className="flex justify-between items-center border border-gray-200 rounded px-3 py-2 bg-white shadow-sm"
                >
                <div>
                    <p className="text-blue-700 text-xs font-bold">{item.date}</p>
                    <p className="text-sm text-gray-800">{item.description}</p>
                </div>
                <div className="bg-blue-200 rounded-sm">
                    <Eye className="w-9 h-9 text-blue-500 p-1" />
                </div>
                </div>
            ))
            )}
        </div>
        </ExpandToggle>
    );
};

export default History;

