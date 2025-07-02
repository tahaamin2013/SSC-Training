import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <PlantUMLDiagram
          code={`
    @startmindmap
    * KEY TERMS
    ** Expenses
    *** Money spent for rent, electricity for lighting, telephone accounts, etc.
    *** Excludes purchases for resale or business assets.
    ** Income
    *** Includes sales, interest received, rent received, etc.
    ** Ledger account
    *** Record of similar financial transactions.
    ** Payroll
    *** List of employees and their wages/salaries.
    ** Petty cash
    *** Small amount of cash for minor business payments.
    ** Purchases
    *** Buying goods/services for use or resale.
    ** Receipt
    *** Written statement of money paid/received.
    ** Sales
    *** Exchange of goods/services for money.
    *** Includes commission and fees for some services.
    ** Till roll
    *** Printed list of all payments received at point of sale.
    @endmindmap
            `}
        />
       
      </section>
    </div>
  );
};

export default MagneticMindmap;