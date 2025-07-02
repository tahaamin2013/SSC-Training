import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <PlantUMLDiagram
          code={`
    @startmindmap
    * TERMINOLOGY
    ** Income (A more general term than sales)
    *** includes Revenue (Regular Sales)
    **** Exchange of goods for money
    **** Exchange of services for money
    ***** Includes commission (e.g., by accountants, lawyers)
    ***** Includes fees received (e.g., by accountants, lawyers)

    *** Gains (Irregular)
    **** interest received
    **** rent received
  
    ** Expenditure
    *** Purchases
    **** Goods/services obtained for
    ***** resale use
    ***** business use
    *** Expenses
    **** Cash paid for rent, utilities, telephone, etc.
    **** Excludes purchases for resale 
    **** Excludes purchases for assets

    ** Receipts
    *** Money received from
    **** cash sales
    **** credit customers
    ** Payments
    *** Money paid out in
    **** cash
    **** cheque
    **** electronic 
    ** Petty cash
    *** Small amounts of cash for minor expenses (e.g., refreshments, travel)
    *** Employee reimbursed after payment
    ** Payroll
    *** Accounting for employee costs
    *** Includes gross pay, bonuses, commissions, employer costs
    @endmindmap
            `}
        />
       
      </section>
    </div>
  );
};

export default MagneticMindmap;