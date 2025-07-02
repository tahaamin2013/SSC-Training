import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <PlantUMLDiagram
          code={`
        @startmindmap
        * 8 CONTROL OVER TRANSACTIONS
        ** Importance of Control
        *** Only authorised employees can transact
        **** Example: Only trained sales assistants make sales
        **** Example: Only departmental buyer purchases goods
        *** Transactions follow correct procedures
        **** Sales entered into till/cash register
        **** Money received placed in till
        ** Correct Recording of Transactions
        *** Systems ensure proper recording
        **** Cash sale receipt recorded as money received
        **** Sale recorded in accounting system
        **** Cash recorded in till and till roll
        ** Errors and Internal Checks
        *** Errors may occur in recording
        *** Internal checks/controls identify and correct errors
        ** 8.1 EXAMPLES of Internal Checks
        *** Reconciliation of cash in till to till roll
        *** Checking addition of cheque listings for paying in slips
        *** Reconciliation of petty cash to records
        *** Checking accounting entries
        *** Checking bank payments and petty cash authorisations
        *** Reconciliation of bank/cash records to bank statements
        @endmindmap
            `}
        />
       
      </section>
    </div>
  );
};

export default MagneticMindmap;