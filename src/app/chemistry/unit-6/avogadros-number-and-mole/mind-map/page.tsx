import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
          Chemical Formulas and Mole Concept
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

* **Avogadro's Number & Mole**
** **Counting Units**
*** **Pairs** (Shoes)
*** **Dozens** (Eggs, Oranges)
*** **Reams** (Paper)
*** **Moles** (Atoms, Molecules, Ions)
** **Definition of a Mole**
*** 1 Mole = **6.022 × 10²³** Particles
*** **Avogadro’s Number (Nₐ)**
*** Examples:
**** 1 Mole of Carbon = **6.022 × 10²³ Atoms**
**** 1 Mole of Sulfur = **6.022 × 10²³ Atoms**
**** 1 Mole of Water = **6.022 × 10²³ Molecules**

left side

** **Molar Mass**
*** **Definition:** Mass of 1 Mole of a Substance is called Molar Mass
*** Example Questions:
**** **Mass of 1 Mole of Carbon Atoms?**
**** **How many atoms in 32.1g of Sulfur?**
*** **Mass Comparisons:**
**** **Dozen Eggs ≠ Dozen Bananas** (Mass Difference)
**** **1 Mole of Carbon ≠ 1 Mole of Sulfur** (Mass Difference)
** **Representative Particles**
*** **Atoms** (e.g., Carbon)
*** **Molecules** (e.g., Water, H₂)
*** **Formula Units** (e.g., NaCl)
*** **Ions** (e.g., Na⁺, Cl⁻)
@endmindmap
            `}
        />

        <PlantUMLDiagram code={`
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

* **Gram Atomic Mass, Gram Molecular Mass & Gram Formula Mass**
** **Gram Atomic Mass**
*** **Definition:** Atomic mass of an element in grams is called Gram Atomic Mass
*** **Examples:**
**** Carbon (C) = **12 g** (12 amu)
**** Sodium (Na) = **23 g** (23 amu)
**** Zinc (Zn) = **63.54 g** (63.54 amu)
*** **1 Mole = 6.022 × 10²³ Atoms**
**** 1 mole of C-atoms = **12 g**
**** 1 mole of Na-atoms = **23 g**
**** 1 mole of Zn-atoms = **63.54 g**
** **Gram Molecular Mass**
*** **Definition:** Molecular mass of a substance in grams is called Gram Molecular Mass
*** **Examples:**
**** Water (H₂O) = **18.016 g**
**** Glucose (C₆H₁₂O₆) = **180.096 g**
*** **1 Mole = 6.022 × 10²³ Molecules**
**** 1 mole of H₂O = **18.016 g**
**** 1 mole of C₆H₁₂O₆ = **180.096 g**
** **Gram Formula Mass**
*** **Definition:** Formula mass of a substance (an ionic compound) in grams is called Gram Formula Mass
*** **Examples:**
**** Sodium Chloride (NaCl) = **58.5 g**
**** Potassium Chloride (KCl) = **74.5 g**
*** **Formula Unit Representation**
**** NaCl, KCl, CuSO₄, etc.
** Mole Day
*** Mole Day is celebrated every year on October 23 in order
*** to commemorate Avogrado’s number (6.02 x 1023), a basic measurement unit used in chemistry.
@endmindmap
            `} />

            <PlantUMLDiagram code={
                `
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
* Difference Between Gram Atomic Mass, Gram Molecular Mass & Gram Formula Mass
** Definition
*** Gram Atomic Mass → One mole of atoms of an element
**** Hydrogen (H) → 1 g/mol
**** Oxygen (O) → 16 g/mol
**** Calcium (Ca) → 40 g/mol
*** Gram Molecular Mass → One mole of molecules of a compound or molecular element
**** Oxygen Gas (O₂) → 32 g/mol
**** Water (H₂O) → 18 g/mol
**** Carbon Dioxide (CO₂) → 44 g/mol

*** Gram Formula Mass → One mole of ionic formula units of a compound
**** Sodium Chloride (NaCl) → 58.5 g/mol
**** Calcium Carbonate (CaCO₃) → 100 g/mol
**** Magnesium Sulfate (MgSO₄) → 120 g/mol

*** Formula Unit → The **smallest** whole-number ratio of ions in an **ionic compound**
**** Example: **NaCl** (Sodium Chloride) consists of Na⁺ and Cl⁻ in a 1:1 ratio
**** Example: **CaCO₃** (Calcium Carbonate) consists of Ca²⁺ and CO₃²⁻ in a 1:1 ratio

** Number of Particles
*** Gram Atomic Mass → Contains **6.022 × 10²³ atoms**
*** Gram Molecular Mass → Contains **6.022 × 10²³ molecules**
*** Gram Formula Mass → Contains **6.022 × 10²³ formula units**

** Molar Mass
*** All three represent molar mass
*** Definition: Molar Mass is mass of **one mole** of a substance in grams
*** Mole Representation:
**** Atomic mass, Molecular mass, or Formula mass expressed in grams
@endmindmap

                `
            } />
      </section>

      <div>
        <div className="bg-gradient-to-r from-gray-100 to-blue-300 text-gray-900">
          <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold text-center mb-8">
              Chemical Formula and Avogadro&apos;s Number
            </h1>

            <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
              <h2 className="text-3xl font-semibold mb-4">
                6.3 Chemical Formula and Name of Binary Ionic Compounds
              </h2>
              <p className="text-lg mb-4">
                Binary ionic compound: Composed of mono-atomic metal cations and
                mono-atomic non-metal anions.
              </p>
              <p className="text-lg mb-4">
                Naming convention: Cation name + anion name (with -ide suffix).
              </p>
              <p className="text-lg mb-4">Steps to write chemical formula:</p>
              <ol className="list-decimal list-inside space-y-2 text-lg">
                <li>Write symbols for cation and anion with charges</li>
                <li>Balance charges using smallest coefficients</li>
                <li>Write coefficients as subscripts</li>
                <li>Omit charge subscripts of 1</li>
              </ol>
              <p className="text-lg mt-4">Examples:</p>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>
                  <strong>NaCl:</strong> Sodium chloride
                </li>
                <li>
                  <strong>Al₂O₃:</strong> Aluminium oxide
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
              <h2 className="text-3xl font-semibold mb-4">
                6.4 Avogadro&apos;s Number and Mole
              </h2>
              <p className="text-lg mb-4">
                Mole: Amount of substance containing 6.022 x 10<sup>23</sup>{" "}
                particles
              </p>
              <p className="text-lg mb-4">
                Avogadro&apos;s number (N<sub>A</sub>): 6.022 x 10<sup>23</sup>
              </p>
              <p className="text-lg mb-4">
                Molar mass: Mass of one mole of a substance
              </p>

              <div className="bg-gray-50 p-4 rounded-lg mt-6">
                <h3 className="text-2xl font-semibold mb-4">
                  6.4.1 Gram Atomic Mass, Gram Molecular Mass, and Gram Formula
                  Mass
                </h3>
                <p className="text-lg mb-4">
                  Gram atomic mass: Atomic mass of an element expressed in grams
                </p>
                <p className="text-lg mb-4">
                  Gram molecular mass: Molecular mass of a substance expressed
                  in grams
                </p>
                <p className="text-lg mb-4">
                  Gram formula mass: Formula mass of a substance expressed in
                  grams
                </p>
                <p className="text-lg mt-4">Examples:</p>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>
                    <strong>Gram atomic mass of C:</strong> 12 g
                  </li>
                  <li>
                    <strong>Gram molecular mass of H₂O:</strong> 18.016 g
                  </li>
                  <li>
                    <strong>Gram formula mass of NaCl:</strong> 58.5 g
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mt-6">
                <h3 className="text-2xl font-semibold mb-4">
                  6.4.2 Differences between Gram Atomic Mass, Gram Molecular
                  Mass, and Gram Formula Mass
                </h3>
                <p className="text-lg mb-4">Representation:</p>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>
                    <strong>Gram atomic mass:</strong> One mole of atoms
                  </li>
                  <li>
                    <strong>Gram molecular mass:</strong> One mole of molecules
                  </li>
                  <li>
                    <strong>Gram formula mass:</strong> One mole of ionic
                    formula units
                  </li>
                </ul>
                <p className="text-lg mb-4">
                  Particle count: All contain 6.022 x 10<sup>23</sup> particles
                </p>
                <p className="text-lg mb-4">
                  Molar mass: All represent molar mass (mass of one mole of
                  substance in grams)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagneticMindmap;
