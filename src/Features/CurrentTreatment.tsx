import { treatmentData } from "../data/TreatmentData";
import { Pill } from "lucide-react";
import ExpandToggle from "../components/Expands";

const CurrentTreatment = () => {
  return (
    <ExpandToggle title="Tratamiento actual" color="bg-green-600" >
      <div className="p-3 space-y-3">
        {treatmentData.length === 0 ? (
          <p className="text-black-500 text-xl">Esto no se ve</p>
        ) : (
          treatmentData.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 border border-gray-200 rounded px-3 py-2 bg-white shadow-sm"
            >
              <Pill className="w-5 h-5 text-blue-700" />
              <div>
                <p className="text-sm text-gray-800 font-medium">{item.name}</p>
                <p className="text-xs text-gray-600">{item.dosage}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </ExpandToggle>
  );
};

export default CurrentTreatment;
