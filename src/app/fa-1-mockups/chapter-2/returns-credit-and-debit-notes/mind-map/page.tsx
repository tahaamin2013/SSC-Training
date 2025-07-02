import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <PlantUMLDiagram
          code={`
@startmindmap
* CASH AND CREDIT TRANSACTIONS
** Cash Transactions
*** Buyer pays immediately or in advance
*** Examples: Shop or supermarket sales
** Credit Transactions
*** Buyer pays later (credit period)
*** Example: Velocity Book Publishers orders from Q Print
**** 5,000 books printed
**** $15,000 invoice, payable within 60 days
*** Most business-to-business transactions are credit
*** Credit terms agreed in advance
** Comparison: Cash vs Credit
*** Sale
**** Cash: Immediate payment
**** Credit: Payment at a later date
*** Purchase
**** Cash: Immediate payment
**** Credit: Payment at a later date
** Activity Example
*** Client gets haircut, pays $20 cash
**** Client: Purchase of a service
**** Hairdresser: Cash sale
*** Every purchase is a sale from the other party's perspective
** Methods of Payment
*** Cash (notes and coins)
*** Debit/Credit cards & electronic payments
*** Cheque
*** Automated bank payments (standing orders, direct debits)
@endmindmap
            `}
        />
       
      </section>
    </div>
  );
};

export default MagneticMindmap;