import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <PlantUMLDiagram
          code={`
        @startmindmap
        * TYPES OF BUSINESS TRANSACTION
        ** Selling goods/services to customers
        *** Should be paid for what it sells
        ** Buying goods/services from suppliers
        *** Must pay for what it buys
        *** Examples
        **** Retail businesses buy goods for resale
        **** Garages buy car parts for repairs
        **** Businesses buy stationery and computers
        ** Incurring expenses for services
        *** Electricity supply
        *** Telephone services
        *** Property rental costs
        *** Local taxation (business rates)
        ** Paying employees
        *** Wages and salaries
        ** Definition of 'business'
        *** Organisation/entity undertaking trading activities
        *** Legal structure not required (focus on sole proprietors)
        *** Sole proprietors own and manage the business
        @endmindmap

            `}
        />
       
      </section>
    </div>
  );
};

export default MagneticMindmap;