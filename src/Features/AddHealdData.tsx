import { useState } from "react";
import Widget from "../components/Widget";
import TabNav from "../components/TabNavs";
import AddHealthDataCards from "./AddHealthDataCards";
import { TABS } from "../components/tabs";

const AddHealthData = () => {
    const [tabActiva, setTabActiva] = useState("TODOS");

    return (
    <Widget title="Agregar dato de salud" >
    <TabNav tabs={TABS} activeTab={tabActiva} onChange={setTabActiva} />

    <div className="p-4">
        {tabActiva === "TODOS" ?(
            <AddHealthDataCards />
        ) : (
        <div className="text-sm text-gray-500 text-center py-6">
            {tabActiva === "DIAGNOSIS CIE-10"
            ? "Vista de Diagnóstico CIE-10"
            : "Vista de Hallazgos Clínicos"}
            </div>
        )}
        </div>
    </Widget>
    );
};

export default AddHealthData;
