import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <PlantUMLDiagram
          code={`
@startmindmap
* KEEPING A RECORD
** Reasons for keeping records
*** Track amounts owed to suppliers and by credit customers
*** Useful for queries or disputes with customers/suppliers
*** Enable checks for proper processing, errors, omissions, or fraud
*** Monitor business performance (profit or loss)
*** Maintain petty cash records
*** Maintain payroll records (ensure correct pay and deductions)
** How transactions are recorded
*** Transactions recorded in ledger accounts
*** Called accounting/bookkeeping system
*** Organises transactions into structured ledger accounts
*** Further details in subsequent chapters
** Importance of documents
*** Retain documents as evidence of transactions
*** Chapter 2 reviews these documents
@endmindmap
            `}
        />
       
      </section>
    </div>
  );
};

export default MagneticMindmap;