import ExpandToggle from "../components/Expands";
import { planData } from "../data/PlanData";
import { Pill, Eye } from "lucide-react";

const Plan = () => {
  return (
    <ExpandToggle title="Plan" color="bg-blue-800">
      {planData.length === 0 ? (
        <p className="text-gray-500 text-sm">No hay datos para mostrar.</p>
      ) : (
        planData.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 border border-gray-200 rounded px-3 py-2 bg-white shadow-sm"
          >
            <Pill className="w-5 h-5 text-blue-700" />
            <div>
              <p className="text-sm text-gray-800 font-medium">{item.name}</p>
              <p className="text-xs text-gray-600">{item.dosage}</p>
            </div>
            <div className="bg-blue-200 rounded-sm ml-auto">
              <Eye className="w-9 h-9 text-blue-500 p-1" />
            </div>
          </div>
        ))
      )}
    </ExpandToggle>
  );
};

export default Plan;

