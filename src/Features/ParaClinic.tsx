import { paraclinicData } from "../data/ParaClinicData";
import { Eye, AlertTriangle, TestTube } from "lucide-react";
import ExpandToggle from "../components/Expands";

const Paraclinic = () => {
    return (
        <ExpandToggle title="Paraclínicos" color="bg-orange-500">
        <div className="p-3 space-y-3">
            {paraclinicData.length === 0 ? (
            <p className="text-gray-500 text-sm">Esto no se verá</p>
            ) : (
            paraclinicData.map((item, idx) => (
                <div
                key={idx}
                className="flex items-center gap-3 border border-gray-200 rounded px-3 py-2 bg-white shadow-sm"
                >
                <TestTube className="w-5 h-5 text-purple-700" />
                <div>
                    <p className="text-sm text-gray-800 font-medium">{item.name}</p>
                    <p className="text-xs text-gray-600">{item.result}</p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                    {item.alert && (
                    <div className="bg-orange-200 p-1.5 rounded-sm">
                        <AlertTriangle className="w-6 h-6 text-red-500" />
                    </div>
                    )}
                    <button className="bg-blue-200 rounded-sm p-1">
                    <Eye className="w-7 h-7 text-blue-500" />
                    </button>
                </div>
                </div>
            ))
            )}
        </div>
        </ExpandToggle>
    );
};

export default Paraclinic;

