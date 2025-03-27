import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from "next/image";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
          Periodic Table Empirical and Molecular Formulas: Periodicity
        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
*[#LightBlue] Stoichiometry
** Student Learning Outcomes
*** State formulae of common elements/compounds
*** Define molecular formula
*** Define empirical formula
*** Deduce formulas and names of binary compounds
*** Calculate moles, mass, molar mass
*** Define mole and Avogadro's constant
*** Construct chemical equations
** Introduction
*** Historical context
**** Ancient Greek philosophy
**** John Dalton's atomic theory
**** 20th century atomic structure
** Empirical Formula
*** Definition
**** Simplest integer ratio of atoms
*** Examples
**** Hydrogen peroxide (HO)
**** Glucose (CH2O)
** Molecular Formula
*** Definition
**** Actual number of atoms in molecule
*** Examples
**** Hydrogen peroxide (H2O2)
**** Glucose (C6H12O6)
**** Benzene (C6H6)
left side
** Relationship between Formulas
*** Sometimes identical
**** Water (H2O)
**** Carbon dioxide (CO2)
*** Sometimes different
**** Benzene (Empirical: CH, Molecular: C6H6)
** Common Formulas Table
*** Elements
**** Hydrogen (H2)
**** Oxygen (O2)
**** Nitrogen (N2)
*** Compounds
**** Water (H2O)
**** Carbon dioxide (CO2)
**** Glucose (C6H12O6)
** Concept Assessment Exercises
*** Writing empirical formulas
*** Aspirin formula
*** Acetic acid formula
*** Caffeine formula
@endmindmap`}
        />

        <PlantUMLDiagram code={
          `@startmindmap
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

* **INTRODUCTION**
** **1. Ancient Greek Philosophers**
*** **Elemental Substance Theory**  
**** Some believed everything was made of **water**  
**** Others thought it was **air**  
**** Some believed in **four elemental substances**  
** **2. 19th Century - John Dalton**  
*** **Proposed Atomic Theory**  
*** Led to **rapid progress in chemistry**  
** **3. 20th Century - Advanced Atomic Model**  
*** Observations showed **need for a new atomic theory**  
*** **Atoms have a complex internal structure**  
** **4. Purpose of this Chapter**
*** **Understanding Matter**  
*** Learning **basic definitions** for **Grade XI**
@endmindmap
`
        } />

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

* **Chemical Formulas**
** **1. Definition**
*** Shows **elements in a compound**  
*** Indicates **whole number ratio** of atoms  
** **2. Components of a Chemical Formula**
*** **Elemental Symbols** - Represent elements  
*** **Numerical Subscripts** - Indicate number of atoms  
** **3. Types of Chemical Formulas**
*** **Empirical Formula**
**** **1. Definition**
***** Simplest **integer ratio** of atoms of each element in a compound  
**** **2. Example: Hydrogen Peroxide (H₂O₂)**
***** **H:O ratio** = **1:1**  
***** Empirical formula = **HO**  
**** **3. Example: Glucose (C₆H₁₂O₆)**
***** **C:H:O ratio** = **1:2:1**  
***** Empirical formula = **CH₂O**
*** **Molecular Formula**
**** **1. Definition**
***** Specifies the **actual number** of atoms in a molecule  
***** Shows the **exact composition** of a compound  
**** **2. Examples**
***** Hydrogen Peroxide → **H₂O₂**  
***** Glucose → **C₆H₁₂O₆**  
***** Benzene → **C₆H₆**  
***** Water → **H₂O**  
***** Carbon Dioxide → **CO₂**  
**** **3. Empirical vs Molecular Formula**
***** **Empirical formula** shows the **simplest ratio**  
***** **Molecular formula** shows the **exact number of atoms**  
***** Examples:
****** **Benzene (C₆H₆)** → Empirical formula = **CH**  
****** **Glucose (C₆H₁₂O₆)** → Empirical formula = **CH₂O**  
****** **Water (H₂O)** → Same for both  
****** **Carbon Dioxide (CO₂)** → Same for both  

@endmindmap
            `
          } />

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

* **Formulae of Elements and Compounds**
** **1. Elements and Their Formulae**
*** Hydrogen → **H₂**
*** Oxygen → **O₂**
*** Nitrogen → **N₂**
*** Fluorine → **F₂**
*** Chlorine → **Cl₂**
*** Bromine → **Br₂**
** **2. Compounds and Their Formulae**
*** Water → **H₂O**
*** Carbon Dioxide → **CO₂**
*** Hydrochloric Acid → **HCl**
*** Sodium Hydroxide → **NaOH**
*** Copper (II) Sulphate → **CuSO₄**
*** Glucose → **C₆H₁₂O₆**
** **3. Concept Assessment Exercises**
*** **Exercise 6.1: Empirical Formula Calculation**
**** **(a)** Carbon:Hydrogen = **1:4** → **CH₄**
**** **(b)** Carbon:Hydrogen = **2:6** → **CH₃**
**** **(c)** Carbon:Hydrogen = **2:2** → **CH**
**** **(d)** Carbon:Hydrogen = **6:6** → **CH**
*** **Exercise 6.2: Empirical and Molecular Formulas**
**** **Aspirin (C₉H₈O₄)**
***** **Empirical Formula** → **C₉H₈O₄**
***** **Molecular Formula** → **C₉H₈O₄**
**** **Acetic Acid (C₂H₄O₂)**
***** **Empirical Formula** → **CH₂O**
***** **Molecular Formula** → **C₂H₄O₂**
**** **Caffeine (C₈H₁₀N₄O₂)**
***** **Empirical Formula** → **C₄H₅N₂O**
@endmindmap
            `} />

      </section>

      <div className="p-6 bg-white text-gray-900 border border-gray-200 rounded-lg shadow-md">
  <h1 className="text-4xl font-bold mb-6">Unit 06: Stoichiometry</h1>

  <section className="mb-6">
    <h2 className="text-3xl font-semibold mb-4">I. Student Learning Outcomes (SLOs):</h2>
    <ul className="list-disc pl-5 space-y-2">
      <li>State formulae of common elements and compounds</li>
      <li>Define molecular formula</li>
      <li>Define empirical formula</li>
      <li>Deduce formula and name of binary compounds from ions</li>
      <li>Deduce formula of molecular substances from given structures</li>
      <li>Use relationship: amount of substance = mass/molar mass</li>
      <li>Define mole and Avogadro&apos;s number</li>
      <li>Explain relationship between mole and Avogadro&apos;s constant</li>
      <li>Construct chemical and ionic equations</li>
      <li>Deduce symbol equations with state symbols</li>
    </ul>
  </section>

  <section className="mb-6">
    <h2 className="text-3xl font-semibold mb-4">II. Introduction:</h2>
    <ul className="list-disc pl-5 space-y-2">
            <li>Historical context: Ancient Greek philosophers&apos; beliefs about elemental substances</li>
      <li>John Dalton&apos;s atomic theory in the 19th century</li>
      <li>20th century developments in atomic structure</li>
      <li>Chapter goal: Understand fundamental concepts about matter</li>
    </ul>
  </section>

  <section className="mb-6">
    <h2 className="text-3xl font-semibold mb-4">III. Empirical and Molecular Formulas:</h2>
    <h3 className="text-2xl font-semibold mb-2">A. Empirical Formula:</h3>
    <p className="mb-4">
      <strong>Definition:</strong> Simplest integer ratio of atoms of each element in a compound.<br/>
      <strong>Example:</strong> Hydrogen peroxide (HO)<br/>
      <strong>Exercise:</strong> Empirical formula of glucose
    </p>
    <h3 className="text-2xl font-semibold mb-2">B. Molecular Formula:</h3>
    <p className="mb-4">
      <strong>Definition:</strong> Specifies the actual number of atoms of each element in one molecule.<br />
      <strong>Example:</strong> Hydrogen peroxide (H₂O₂), Glucose (C₆H₁₂O₆)<br/>
      <strong>Relationship to empirical formula:</strong> Molecular formula is a multiple of the empirical formula.<br/>
      <strong>Examples where empirical and molecular formulas are the same:</strong> H₂O (water), NH₃ (ammonia)
    </p>
  </section>

  <section className="mb-6">
    <h2 className="text-3xl font-semibold mb-4">IV. Common Formulas:</h2>
    <p className="mb-4">
      <strong>Table of common elements and compounds with their formulas:</strong>
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>Elements:</strong> Hydrogen (H₂), Oxygen (O₂), Nitrogen (N₂), etc.</li>
      <li><strong>Compounds:</strong> Water (H₂O), Carbon dioxide (CO₂), Hydrochloric acid (HCl), etc.</li>
    </ul>
  </section>

  <section>
    <h2 className="text-3xl font-semibold mb-4">V. Practice Exercises:</h2>
    <ul className="list-disc pl-5 space-y-2">
      <li>Writing empirical formulas for carbon-hydrogen compounds</li>
      <li>Determining empirical and molecular formulas for aspirin, acetic acid, and caffeine</li>
    </ul>
    <p className="mt-4 text-lg font-medium">
      <strong>Note:</strong> This unit introduces basic concepts of chemical formulas and stoichiometry, providing a foundation for understanding chemical composition and reactions. It emphasizes the difference between empirical and molecular formulas and includes practical exercises for application of these concepts.
    </p>
  </section>
</div>

    </div>
  );
};

export default MagneticMindmap;
