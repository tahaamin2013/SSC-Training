import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <PlantUMLDiagram
          code={`
    @startmindmap
    * PAYROLL
    ** Payroll Department Responsibilities
    *** Ensure wages paid on correct due dates
    *** Pay weekly employees (wage earners)
    **** Paid at least once a week
    **** Common pay days: Thursday or Friday
    *** Pay monthly employees (salary earners)
    **** Paid once a month
    **** Pay day formulas:
    ***** Last day of calendar month
    ***** Last Thursday or Friday of month
    ***** Same date each month (e.g., 26th)
    ** Payment Methods
    *** Cash or cheque
    *** Bank transfer
    *** BACS (Banks Automated Clearing System)
    ** Payments to Outside Agencies
    *** Tax authorities
    *** Social services authorities
    *** Pension schemes
    ** Related Activities
    *** Classifying payments (e.g., electricity as Expense)
    *** Petty cash usage (e.g., envelopes at local store)
    *** Payroll transactions
    **** Taxes on employee income
    **** Pension scheme payments
    **** Wages
    @endmindmap
            `}
        />
       
      </section>
    </div>
  );
};

export default MagneticMindmap;