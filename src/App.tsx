import AddHealthData from "./Features/AddHealdData.tsx";
import History from "./Features/History.tsx";
import CurrentTreatment from "./Features/CurrentTreatment.tsx";
import Plan from "./Features/Plan.tsx";
import Paraclinical from "./Features/ParaClinic.tsx";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="grid gap-6 max-w-lg mx-auto">
        <AddHealthData />
        <History />
        <CurrentTreatment/>
        <Plan/>
        <Paraclinical/>
      </div>
      
    </main>
  );
}


