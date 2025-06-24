import { Heart , Ruler,  Slice, ChartColumnIncreasing, FlaskConical, Calculator} from "lucide-react";

const cards = [
    { label: "Signos vitales", icon: <Heart className="w-5 h-5 text-red-500" /> },
    { label: "Talla y/o peso", icon: <Ruler className="w-5 h-5 text-green-600" /> },
    { label: "Dato de laboratorio", icon: <FlaskConical className="w-5 h-5 text-purple-500" /> },
    { label: "Cirugía", icon: <Slice className="w-5 h-5 text-blue-500" /> },
    { label: "Escala / Clasificación", icon: <ChartColumnIncreasing className="w-5 h-5 text-orange-400" /> },
    { label: "Calculadora clínica", icon: <Calculator className="w-5 h-5 text-gray-600" /> },
];

const AddHealthDataCards = () => {
    return (
    <div className="grid grid-cols-2 gap-3">
        {cards.map((card) => (
            <button
            key={card.label}
            className="flex items-center justify-between bg-white border border-gray-200 rounded-md px-3 
            py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-blue-50 transition"
            >
            <span>{card.label}</span>
            {card.icon}
            </button>
        ))}
    </div>
    );
};

export default AddHealthDataCards;
