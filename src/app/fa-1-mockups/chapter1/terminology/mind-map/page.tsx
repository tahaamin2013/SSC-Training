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
    ** Sales
    *** Exchange of goods or services for money
    *** Includes commission and fees received (e.g., by accountants, lawyers)
    ** Purchases
    *** Goods/services obtained for resale or business use
    ** Receipts
    *** Money received from cash sales or credit customers
    ** Payments
    *** Money paid out in cash, cheque, or electronic means
    ** Income
    *** General term, includes sales, interest received, rent received, etc.
    ** Expenses
    *** Cash paid for rent, utilities, telephone, etc.
    *** Excludes purchases for resale or assets
    ** Expenditure
    *** Includes purchases, expenses, and other business spending
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