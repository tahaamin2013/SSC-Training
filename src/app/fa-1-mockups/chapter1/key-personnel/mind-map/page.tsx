import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <PlantUMLDiagram
          code={`
        @startmindmap
        * 7 KEY PERSONNEL
        ** Sales
        *** Shop Floor / Retail Assistants
        ** Purchases of Goods for Resale
        *** Departmental Buyers
        ** General Expenses
        *** Accounts Department
        ** Wages
        *** Payroll Department
        ** Purchases of Equipment
        *** Store Manager
        ** Controls
        *** Authorisation Limits
        *** Prevent Financial Difficulties
        ** Senior Management
        *** Authorise Large Expenditure
        *** Knowledge of Policies & Objectives
        *** Understand Financial Circumstances
        @endmindmap
            `}
        />
       
      </section>
    </div>
  );
};

export default MagneticMindmap;