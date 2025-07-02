import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <PlantUMLDiagram
          code={`
        @startmindmap
        * 9 TIMING OF TRANSACTIONS
        ** Frequency of Transactions
        *** Daily (e.g., Sales)
        *** Monthly (e.g., Salary Payments)
        *** Quarterly (e.g., Utility Bills)
        *** Occasional/Infrequent (e.g., Equipment Purchases)
        ** Importance of Prompt Recording
        *** Completeness of Records
        *** Up-to-date Information
        *** Accurate Financial Statements
        **** True and Fair View
        **** For Management, Owners, Banks, Finance Providers
        ** FA1: Recording Financial Transactions
        *** Activity 3: R&D Project Example
        **** Need for Careful Records
        ***** Track Receipts and Payments
        ***** Accountability and Transparency
        **** System of Authorisation and Control
        ***** Prevent Unauthorised Expenditure
        ***** Ensure Proper Use of Funds
        **** Importance of Timing
        ***** Accurate Reporting
        ***** Budget Control
        ***** Compliance with Policies
        @endmindmap
            `}
        />
       
      </section>
    </div>
  );
};

export default MagneticMindmap;