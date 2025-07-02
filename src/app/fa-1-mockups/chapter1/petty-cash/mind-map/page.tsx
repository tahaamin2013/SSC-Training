import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <PlantUMLDiagram
          code={`
        @startmindmap
        * Petty Cash
        ** Reasons for using cash
        *** Convenience for small payments
        *** Necessary in some situations
        ** Examples of cash payments
        *** Office expenses (refreshments, postage)
        *** Taxi fares (business purposes)
        *** Travel costs (rail, bus for business)
        *** Flowers for ill employees
        ** Petty cash management
        *** Small amount held on premises
        *** Separate from sales income (in cash-handling businesses)
        *** Easier reconciliation and investigation of discrepancies
        ** Security considerations
        *** Prefer cheques/online for most payments (reduce risk)
        @endmindmap

            `}
        />
       
      </section>
    </div>
  );
};

export default MagneticMindmap;