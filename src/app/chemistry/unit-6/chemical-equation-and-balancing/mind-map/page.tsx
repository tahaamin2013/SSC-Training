import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from "next/image";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        Chemical Equations and Balancing</h1>
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

* **Chemical Equation and Balancing**
** **Definition**
*** **Chemical Equation** = Symbolic representation of a chemical reaction
*** **Reactants** → **Substances that start the reaction**
*** **Products** → **Substances formed in the reaction**
*** **Arrow (→)** shows the direction of the chemical change
** **Steps to Write a Chemical Equation**
*** **Step 1: Identify Reactants & Products**
    **** Write a **word equation** (Reactants → Products)
*** **Step 2: Use Chemical Symbols**
    **** Replace words with **symbols & formulae**
    **** Indicate **physical states**:
    ***** (s) = Solid
    ***** (l) = Liquid
    ***** (g) = Gas
    ***** (aq) = Aqueous solution
** **Example 6.11: Burning of Coal**
*** **Word Equation:** Coal + Oxygen → Carbon Dioxide
*** **Symbolic Equation:** C + O₂ → CO₂
** **Concept Assessment Exercise 6.6**
*** **1. Burning of Hydrogen**
    **** H₂ + O₂ → H₂O
*** **2. Burning of Magnesium**
    **** Mg + O₂ → MgO
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

* **Balancing a Chemical Equation**
** **Basic Principle**
*** Chemical reaction **only rearranges atoms**, it does not create or destroy them
*** **Balanced Equation** → Number of atoms of each type must be equal on both sides
** **Example 1: Already Balanced Reaction**
*** **Reactants:** C + O₂
*** **Products:** CO₂
*** **Atom Count:**
    **** C-atoms: 1 (Reactants) = 1 (Products)
    **** O-atoms: 2 (Reactants) = 2 (Products)
*** ✅ This equation is already balanced
** **Example 2: Unbalanced Reaction**
*** **Reactants:** CH₄ + O₂
*** **Products:** CO₂ + H₂O
*** **Atom Count (Before Balancing)**
    **** C-atoms: 1 (Reactants) = 1 (Products) ✅
    **** H-atoms: 4 (Reactants) ≠ 2 (Products) ❌
    **** O-atoms: 2 (Reactants) ≠ 3 (Products) ❌
** **Steps to Balance**
*** **Step 1: Balance Hydrogen (H)**
    **** Add **coefficient 2** before H₂O
    **** CH₄(g) + O₂(g) → CO₂(g) + **2H₂O**
*** **Step 2: Balance Oxygen (O)**
    **** Now O-atoms: **2 (Reactants) ≠ 4 (Products)** ❌
    **** Add **coefficient 2** before O₂
    **** CH₄(g) + **2O₂(g)** → CO₂(g) + 2H₂O
*** **Step 3: Verify**
    **** C-atoms: 1 = 1 ✅
    **** H-atoms: 4 = 4 ✅
    **** O-atoms: 4 = 4 ✅
    **** **Equation is now balanced!** 🎯
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

* **Exploring Ionic Equations**
** Definition
*** A chemical equation where substances dissolved in water are written as individual ions
** Example Process
*** Original Equation
**** HCl(aq) + NaOH(aq) → NaCl(aq) + H2O(l)
*** Step 1: Write soluble substances in dissociated form
**** H+(aq) + Cl-(aq) + Na+(aq) + OH-(aq) → Na+(aq) + Cl-(aq) + H2O(l)
*** Step 2: Remove spectator ions
**** Spectator ions: Na+(aq) and Cl-(aq)
**** These ions appear on both sides and don't participate in the reaction
*** Step 3: Write net ionic equation
**** H+(aq) + OH-(aq) → H2O(l)
** **Example 6.12: Magnesium and Sulfuric Acid**
*** **Molecular Equation:**  
    **** Mg + H₂SO₄ → MgSO₄ + H₂
*** **Ionic Equation:**  
    **** Mg(s) + 2H⁺(aq) + SO₄²⁻(aq) → Mg²⁺(aq) + SO₄²⁻(aq) + H₂(g)
*** **Net Ionic Equation:**  
    **** Remove spectator ion (SO₄²⁻)
    **** Mg + 2H⁺ → Mg²⁺ + H₂
** **Concept Assessment Exercise 6.7**
*** Transform into Ionic Equations:
**** Ionic Equation for AgNO₃ + NaCl
***** Raw Chemical Equation
****** AgNO₃ (aq) + NaCl (aq) → AgCl (s) + NaNO₃ (aq)
***** Full Ionic Equation
****** Ag⁺ (aq) + NO₃⁻ (aq) + Na⁺ (aq) + Cl⁻ (aq) → AgCl (s) + Na⁺ (aq) + NO₃⁻ (aq)
***** Spectator Ions
****** Na⁺ (aq)
****** NO₃⁻ (aq)
***** Net Ionic Equation
****** Ag⁺ (aq) + Cl⁻ (aq) → AgCl (s)

**** Ionic Equation for Zn + HCl
***** Raw Chemical Equation
****** Zn (s) + 2HCl (aq) → ZnCl₂ (aq) + H₂ (g)
***** Full Ionic Equation
****** Zn (s) + 2H⁺ (aq) + 2Cl⁻ (aq) → Zn²⁺ (aq) + 2Cl⁻ (aq) + H₂ (g)
***** Spectator Ions
****** Cl⁻ (aq)
***** Net Ionic Equation
****** Zn (s) + 2H⁺ (aq) → Zn²⁺ (aq) + H₂ (g)

@endmindmap
`
} />

      </section>

      <div className="p-6 bg-white text-gray-900 border border-gray-200 rounded-lg shadow-md">
  <h2 className="text-3xl font-bold mb-4">Chemical Equations and Balancing</h2>

  <p className="text-lg mb-4"><strong>Definition:</strong></p>
  <p className="mb-4">
    A chemical equation is the symbolic representation of a chemical reaction.<br />
    <strong>Reactants:</strong> Substances initiating the reaction (left side of equation)<br />
    <strong>Products:</strong> Substances formed during the reaction (right side of equation)<br />
    Arrow (→) indicates the direction of chemical change
  </p>

  <h3 className="text-2xl font-semibold mb-4">Writing a Chemical Equation:</h3>
  <p className="mb-4"><strong>Step 1:</strong> Identify reactants and products, write a word equation</p>
  <p className="mb-4"><strong>Step 2:</strong> Write symbols and formulae, indicate physical states</p>
  <ul className="list-disc pl-5 mb-4">
    <li><strong>(s)</strong> for solid</li>
    <li><strong>(l)</strong> for liquid</li>
    <li><strong>(g)</strong> for gas</li>
    <li><strong>(aq)</strong> for aqueous</li>
  </ul>

  <p className="text-lg font-medium mb-4"><strong>Example: Burning of Coal</strong></p>
  <p className="mb-4">Word equation: Coal + Oxygen → Carbon Dioxide</p>
  <p className="mb-4">Chemical equation: C + O₂ → CO₂</p>

  <h3 className="text-2xl font-semibold mb-4">Balancing a Chemical Equation:</h3>
  <p className="mb-4"><strong>Principle:</strong> Number of atoms remains the same, only arrangement changes</p>
  <p className="mb-4"><strong>Example of Balanced Equation:</strong> C + O₂ → CO₂</p>
  <p className="mb-4"><strong>Steps for Balancing:</strong></p>
  <ul className="list-disc pl-5 mb-4">
    <li>Balance one element at a time using coefficients</li>
    <li>Start with the lowest coefficient</li>
    <li>Do not change subscripts in chemical formulas</li>
  </ul>

  <p className="text-lg font-medium mb-4"><strong>Example of Balancing:</strong></p>
  <p className="mb-4"><strong>Unbalanced:</strong> CH₄ + O₂ → CO₂ + H₂O</p>
  <p className="mb-4">Step 1: CH₄ + O₂ → CO₂ + 2H₂O (balance H atoms)</p>
  <p className="mb-4">Step 2: CH₄ + 2O₂ → CO₂ + 2H₂O (balance O atoms)</p>
  <p className="mb-4"><strong>Final Balanced Equation:</strong> CH₄ + 2O₂ → CO₂ + 2H₂O</p>

  <h3 className="text-2xl font-semibold mb-4">Ionic Equations:</h3>
  <p className="mb-4"><strong>Definition:</strong> Chemical equation where substances dissolved in water are written as individual ions</p>
  <p className="mb-4"><strong>Steps:</strong></p>
  <ul className="list-disc pl-5 mb-4">
    <li>Write soluble substances in dissociated form</li>
    <li>Remove spectator ions (common ions on both sides)</li>
  </ul>
  <p className="mb-4"><strong>Example:</strong></p>
  <p className="mb-4">Reaction: HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)</p>
  <p className="mb-4">Dissociated: H⁺(aq) + Cl⁻(aq) + Na⁺(aq) + OH⁻(aq) → Na⁺(aq) + Cl⁻(aq) + H₂O(l)</p>
  <p className="mb-4"><strong>Net Ionic Equation:</strong> H⁺(aq) + OH⁻(aq) → H₂O(l)</p>

  <h3 className="text-2xl font-semibold mb-4">Practice Exercises:</h3>
  <ul className="list-disc pl-5">
    <li>Writing chemical equations for given reactions</li>
    <li>Balancing chemical equations</li>
    <li>Transforming chemical equations into ionic equations</li>
  </ul>

  <p className="mt-6 text-lg font-medium"><strong>Note:</strong> This content covers the basics of chemical equations, balancing, and ionic equations. It provides a foundation for understanding chemical reactions and their symbolic representations.</p>
</div>

    </div>
  );
};

export default MagneticMindmap;
