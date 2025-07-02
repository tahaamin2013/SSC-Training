import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <PlantUMLDiagram
          code={`
    @startmindmap
    * CONCLUSION
    ** Purpose of Business
    *** Provide goods/services to customers
    *** Benefit the public (charitable work)
    ** Transactions
    *** Series of transactions to facilitate goods/services
    *** Need to be recorded in accounting system
    **** Enables management to produce/review reports
    **** Understand financial performance & position
    **** Operate business effectively & efficiently
    ** Types of Transactions
    *** Cash transactions
    **** Small, day-to-day payments
    *** Credit transactions
    **** Sale and purchase of goods/services
    **** Receipt of income and payment of expenditure
    ** Payment Methods
    *** Cash
    *** Cheque
    *** Automated payments (bank account)
    ** Financial Controls
    *** Expenditure authorised at different levels
    *** System of financial control
    ** Employee Payments
    *** Controlled and authorised
    *** Made regularly and timely
    @endmindmap
            `}
        />
       
      </section>
    </div>
  );
};

export default MagneticMindmap;