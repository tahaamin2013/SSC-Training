import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from "next/image";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
          Periodic Table and Periodicity
        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
*[#LightBlue] Molecular Mass and Formula Mass
** Molecular Mass
*** Definition
**** Sum of atomic masses of all atoms in a molecule
*** Calculation Method
**** Add up atomic masses of all atoms
*** Examples
**** Water (H2O)
***** 2(1.008) + 16.00 = 18.016 amu
**** Glucose (C6H12O6)
***** 6(12.00) + 12(1.008) + 6(16.00) = 180.096 amu
**** Naphthalene (C10H8)
***** 10(12.00) + 8(1.008) = 128.00 amu
** Formula Mass
*** Definition
**** Sum of atomic masses in formula unit of ionic compound
*** Formula Unit
**** Simplest ratio between cations and anions
**** Example: NaCl (one Na+ for every Cl-)
*** Examples
**** Sodium Chloride (NaCl)
***** 23 + 35.5 = 58.5 amu
**** Magnesium Hydroxide (Mg(OH)2)
***** 24 + 16x2 + 1x2 = 58 amu
** Concept Assessment Exercises
*** Potassium Chlorate (KClO3)
*** Baking Soda (NaHCO3)
*** Carbon Dioxide (CO2)
*** Fertilizers
**** Urea ((NH2)2CO)
**** Ammonium Nitrate (NH4NO3)
** Key Differences
*** Molecular Mass
**** Used for molecular compounds
*** Formula Mass
**** Used for ionic compounds
@endmindmap`}
        />

        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
    :depth(1) {
        BackgroundColor lightGreen
    }
    :depth(2) {
        BackgroundColor lightYellow
    }
}
</style>
+ Molecular Mass and Formula Mass
++ Molecular Mass
+++ Definition
++++ Sum of atomic masses of all atoms in a molecule
+++ Used for
++++ Molecular compounds
+++ Calculation Method
++++ Add up atomic masses of individual atoms
+++ Example: Water (H₂O)
++++ Calculation: 2(atomic mass of H) + atomic mass of oxygen
++++ Result: 2(1.008) + 16.00 = 18.016 amu
++ Formula Mass
+++ Definition
++++ Sum of atomic masses of atoms in a formula unit
+++ Used for
++++ Ionic compounds
+++ Characteristics
++++ Represents simplest ratio of cations and anions
+++ Example: Sodium Chloride (NaCl)
++++ Consists of Na⁺ and Cl⁻ ions
++++ One Na⁺ ion for every Cl⁻ ion
@endmindmap
          `}
        />

        <PlantUMLDiagram
          code={`
        @startmindmap

        <style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
    :depth(1) {
        BackgroundColor lightGreen
    }
    :depth(2) {
        BackgroundColor lightYellow
    }
}
</style>

+ Molecular and Formula Mass Calculations
++ Example 6.1: Molecular Mass Determination
+++ Glucose (C₆H₁₂O₆)
++++ Calculation Method
+++++ Multiply atomic masses by subscripts
+++++ 6(12.00) + 12(1.008) + 6(16.00)
+++++ Result: 180.096 amu
+++ Naphthalene (C₁₀H₈)
++++ Calculation Method
+++++ Multiply atomic masses
+++++ 10 x 12 + 8 x 1
+++++ Result: 128 amu

++ Example 6.2: Formula Mass Determination
+++ Sodium Chloride (NaCl)
++++ Calculation Method
+++++ Add atomic masses of Na and Cl
+++++ 1 x 23 + 1 x 35.5
+++++ Result: 58.5 amu
+++ Magnesium Hydroxide (Mg(OH)₂)
++++ Calculation Method
+++++ Add atomic masses of Mg, O, and H
+++++ 24 + 16 x 2 + 1 x 2
+++++ 24 + 32 + 2
+++++ Result: 58 amu

++ Concept Assessment Exercise 6.3
+++ Compounds to Calculate Formula Mass
++++ Potassium Chlorate (KClO₃)
++++ Baking Soda (NaHCO₃)
++++ Carbon Dioxide
++++ Urea ((NH₂)₂CO)
++++ Ammonium Nitrate (NH₄NO₃)
@endmindmap
        `}
        />
      </section>

      <div className="p-6 bg-white text-gray-900 border border-gray-200 rounded-lg shadow-md">
        <section className="mb-6">
          <h2 className="text-3xl font-semibold mb-4">
            III. Molecular Mass and Formula Mass:
          </h2>
          <h3 className="text-2xl font-semibold mb-2">A. Molecular Mass:</h3>
          <p className="mb-4">
            <strong>Definition:</strong> Sum of atomic masses of all atoms in a
            molecule.
            <br />
            <strong>Calculation method:</strong> Add up atomic masses of all
            atoms.
            <br />
            <strong>Example:</strong> Water (H₂O) = 2(1.008) + 16.00 = 18.016
            amu
          </p>
          <h3 className="text-2xl font-semibold mb-2">B. Formula Mass:</h3>
          <p className="mb-4">
            <strong>Used for:</strong> Ionic compounds
            <br />
            <strong>Definition:</strong> Sum of atomic masses of all atoms in
            the formula unit.
            <br />
            <strong>Example:</strong> Sodium Chloride (NaCl) = 23 + 35.5 = 58.5
            amu
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">
            IV. Examples and Exercises:
          </h2>
          <h3 className="text-2xl font-semibold mb-2">
            A. Determining Molecular Mass:
          </h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Glucose (C₆H₁₂O₆) = 180.096 amu</li>
            <li>Naphthalene (C₁₀H₈) = 128.00 amu</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-2">
            B. Determining Formula Mass:
          </h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Sodium Chloride (NaCl) = 58.5 amu</li>
            <li>Magnesium Hydroxide (Mg(OH)₂) = 58 amu</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-2">C. Practice Problems:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Calculate formula mass for:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Potassium Chlorate (KClO₃)</li>
                <li>Sodium Bicarbonate (NaHCO₃) and Carbon Dioxide (CO₂)</li>
                <li>Urea ((NH₂)₂CO) and Ammonium Nitrate (NH₄NO₃)</li>
              </ul>
            </li>
          </ul>
          <p className="mt-4 text-lg font-medium">
            <strong>Note:</strong> This unit covers the fundamental concepts of
            chemical formulas, molecular and formula mass calculations. It
            provides a foundation for understanding chemical composition and
            stoichiometric calculations. The content includes definitions,
            examples, and practice exercises to reinforce learning.
          </p>
        </section>
      </div>
    </div>
  );
};

export default MagneticMindmap;
