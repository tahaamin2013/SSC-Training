import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from "next/image";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
          Chemical Calculations{" "}
        </h1>
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

* **Mole-Mass Calculations**
** **Example 6.3: Molar Mass Calculation**
*** **(a) Sodium (Na)** → **Molar Mass = 23 g**
*** **(b) Nitrogen (N₂)** → **Molar Mass = 28 g** (14 × 2)
*** **(c) Sucrose (C₁₂H₂₂O₁₁)** → **Molar Mass = 342 g** 
    **** **Calculation:** (12 × 12) + (1 × 22) + (16 × 11)
** **Concept Assessment Exercise 6.4**
*** **Calculate the mass of one mole of:** 
    **** Copper (Cu)
    ***** Atomic mass of Cu = 63.5 g/mol
    ***** Mass of one mole = 63.5 g
    **** Iodine (I)
    ***** Atomic mass of I = 127 g/mol
    ***** Mass of one mole = 127 g
    **** Potassium (K)
    ***** Atomic mass of K = 39 g/mol
***** Mass of one mole = 39 g
    **** Oxygen (O₂)
    ***** Atomic mass of O = 16 g/mol
            ***** Molecular mass of O₂ = 16 × 2 = 32 g/mol
***** Mass of one mole = 32 g

*** **Differentiate between:**
    **** **Gram Formula Mass** → Used for ionic compounds (formula units).
    **** **Gram Molecular Mass** → Used for covalent compounds (molecules).
    ** **Example 6.4: Mass of Given Moles**
    *** **Problem:** Calculate the mass of **9.05 moles** of Ozone (O₃)
    *** **Solution:** 
    **** **Molar Mass of O₃ = 48 g**
    **** **9.05 moles × 48 g** = **434.4 g**
    left side
    ** **Example 6.5: Mass of CO₂ Formed**
*** **Problem:** 0.25 moles of CO₂ is formed. What is its mass?
*** **Solution:** 
    **** **Molar Mass of CO₂ = 44 g**
    **** **0.25 × 44 g = 11 g**
    ** **Example 6.6: Converting Grams to Moles**
*** **5 g of H₂** → **How many moles?**
    **** **Molar Mass of H₂ = 2.016 g**
    **** **Moles = (5 / 2.016) = 2.48 moles**
*** **100 g of Ice (H₂O)** → **How many moles?**
    **** **Molar Mass of H₂O = 18.016 g**
    **** **Moles = (100 / 18.016) = 5.55 moles**
** **Concept Assessment Exercise 6.5**
*** **1. Calculate:**
    **** (a) Mass of 2.5 moles of H₂O₂ (Hydrogen Peroxide)
    ***** Molecular mass of H₂O₂ = 34 g/mol
    ***** Mass = Moles × Molar Mass
    ***** 2.5 × 34 = 85 g
    **** (b) Number of moles in 30 g of H₂O₂
    ***** Moles = Mass ÷ Molar Mass
    ***** 30 / 34 = 0.88 moles
    *** Find the moles in **12.5 g of NaCl (Table Salt)**
    **** Molar mass of NaCl = 58.5 g/mol
    **** Moles = Mass ÷ Molar Mass
    **** 12.5 / 58.5 = 0.21 moles
*** **3. Mass of one mole of BaSO₄ (Barium Sulfate)**
    **** Atomic masses:
    ***** Ba = 137 g/mol
    ***** S = 32 g/mol
    ***** O₄ = 4 × 16 = 64 g/mol
    **** Molecular mass of BaSO₄ = 137 + 32 + 64 = 233 g/mol
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

* **Mole-Particles Calculations**
** **Example 6.7: Atoms in Given Moles**
*** **1. Zinc (Zn) - 1.25 moles**
    **** **1 mole Zn** = **6.022 × 10²³ atoms**
    **** **1.25 moles Zn** = **7.53 × 10²³ atoms**
*** **2. Aluminium (Al) - 0.2 moles**
    **** **1 mole Al** = **6.022 × 10²³ atoms**
    **** **0.2 moles Al** = **1.2044 × 10²³ atoms**
** **Example 6.8: Molecules in Given Moles**
*** **1. Methane (CH₄) - 0.5 moles**
    **** **1 mole CH₄** = **6.022 × 10²³ molecules**
    **** **0.5 moles CH₄** = **3.011 × 10²³ molecules**
*** **2. Sulphur Dioxide (SO₂) - 0.25 moles**
    **** **1 mole SO₂** = **6.022 × 10²³ molecules**
    **** **0.25 moles SO₂** = **1.5055 × 10²³ molecules**
** **Example 6.9: Moles from Given Atoms**
*** **Titanium (Ti) - 3.011 × 10²³ atoms**
    **** **6.022 × 10²³ atoms** = **1 mole Ti**
    **** **3.011 × 10²³ atoms** = **0.5 moles Ti**
** **Example 6.10: Moles from Given Molecules**
*** **Formaldehyde (CH₂O) - 3.011 × 10²³ molecules**
    **** **6.022 × 10²³ molecules** = **1 mole CH₂O**
    **** **3.011 × 10²³ molecules** = **0.5 moles CH₂O**
** **Concept Assessment Exercise 6.5**
*** **1. Aspirin Mole Calculation**
    **** Tablet contains **1.25 × 10²³ molecules**
    **** Find **moles of aspirin**
*** **2. Cathodic Protection with Magnesium**
    **** **1 billion Mg atoms (1 × 10⁹)**
    **** Find **moles of Mg**
@endmindmap
              `}
        />
      </section>

      <div className="p-6 bg-gray-50 text-gray-800">
        <h2 className="text-3xl font-bold mb-4">6.5 Chemical Calculations</h2>

        <h3 className="text-2xl font-semibold mb-3">
          6.5.1 Mole-Mass Calculations
        </h3>

        <p className="text-lg font-medium mb-2">
          <strong>
            Example 6.3: Calculating Mass of One Mole of a Substance
          </strong>
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Sodium (Na)</strong>: 1 mole = 23 g
          </li>
          <li>
            <strong>Nitrogen (N₂)</strong>: 1 mole = 28 g
          </li>
          <li>
            <strong>Sucrose (C₁₂H₂₂O₁₁)</strong>: 1 mole = 342 g
          </li>
        </ul>

        <p className="text-lg font-medium mb-2">
          <strong>Problem-solving Strategy:</strong>
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>For metals: Molar mass = Atomic mass in grams</li>
          <li>For molecular elements: Molar mass = Molecular mass in grams</li>
        </ul>

        <p className="text-lg font-medium mb-2">
          <strong>Example 6.4: Calculating Mass of Given Moles</strong>
        </p>
        <p className="mb-2">
          <strong>Problem:</strong> 9.05 moles of ozone (O₃)
        </p>
        <p className="font-medium mb-4">
          <strong>Solution:</strong>
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Molar mass of O₃ = 48 g</li>
          <li>Mass = Molar mass × Number of moles</li>
          <li>Mass of 9.05 moles O₃ = 48 g × 9.05 = 434.4 g</li>
        </ul>

        <p className="text-lg font-medium mb-2">
          <strong>
            Example 6.5: CO₂ Formation from Natural Gas Combustion
          </strong>
        </p>
        <p className="mb-2">
          <strong>Problem:</strong> Mass of 0.25 moles CO₂
        </p>
        <p className="font-medium mb-4">
          <strong>Solution:</strong>
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Molar mass of CO₂ = 44 g</li>
          <li>Mass of 0.25 moles CO₂ = 44 g × 0.25 = 11 g</li>
        </ul>

        <p className="text-lg font-medium mb-2">
          <strong>Example 6.6: Converting Grams to Moles</strong>
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>a) 5 g of hydrogen (H₂)</strong>
          </li>
          <li>Molar mass of H₂ = 2.016 g/mol</li>
          <li>Moles = 5 g ÷ 2.016 g/mol = 2.48 moles</li>
          <li>
            <strong>b) 100 g of ice (H₂O)</strong>
          </li>
          <li>Molar mass of H₂O = 18.016 g/mol</li>
          <li>Moles = 100 g ÷ 18.016 g/mol = 5.55 moles</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-3">
          6.5.2 Mole-Particles Calculations
        </h3>

        <p className="text-lg font-medium mb-2">
          <strong>
            Example 6.7: Calculating Number of Atoms in Given Moles
          </strong>
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>1.25 moles of Zn</strong>
          </li>
          <li>Number of atoms = 6.022 × 10²³ × 1.25 = 7.53 × 10²³ Zn atoms</li>
          <li>
            <strong>0.2 moles of Al</strong>
          </li>
          <li>Number of atoms = 6.022 × 10²³ × 0.2 = 1.2044 × 10²³ Al atoms</li>
        </ul>

        <p className="text-lg font-medium mb-2">
          <strong>
            Example 6.8: Calculating Number of Molecules in Given Moles
          </strong>
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>0.5 moles of methane (CH₄)</strong>
          </li>
          <li>
            Number of molecules = 6.022 × 10²³ × 0.5 = 3.011 × 10²³ molecules
          </li>
          <li>
            <strong>1.6 moles of H₂O₂</strong>
          </li>
          <li>
            Number of molecules = 6.022 × 10²³ × 1.6 = 9.635 × 10²³ molecules
          </li>
        </ul>

        <p className="text-lg font-medium mb-2">
          <strong>Key Concepts:</strong>
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Mole-mass conversions use molar mass (g/mol)</li>
          <li>
            Mole-particle conversions use Avogadro&apos;s number (6.022 × 10²³)
          </li>
          <li>For metals, molar mass equals gram atomic mass</li>
          <li>
            For molecular substances, molar mass equals gram molecular mass
          </li>
        </ul>

        <p className="text-lg font-medium mb-2">
          <strong>Problem-solving Steps:</strong>
        </p>
        <ul className="list-disc pl-5">
          <li>Identify the substance (metal, molecular, ionic)</li>
          <li>Determine molar mass</li>
          <li>
            Use appropriate conversion factor (molar mass or Avogadro&apos;s
            number)
          </li>
          <li>Perform calculations</li>
        </ul>
      </div>
    </div>
  );
};

export default MagneticMindmap;
