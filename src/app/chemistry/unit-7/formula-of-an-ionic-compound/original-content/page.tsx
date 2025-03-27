import React from 'react';

const Page = () => {
  return (
    <div className="p-6 font-sans text-gray-800">
      <h1 className="text-2xl font-bold mb-4">7.3 FORMULA OF AN IONIC COMPOUND</h1>
      <p className="mb-4">
        To determine the formula of an ionic compound from the ionic charges and oxidation numbers of the constituent ions, you must determine the simplest whole-number ratio of cations (positively charged ions) to anions (negatively charged ions) that results in a neutral compound. Ionic compounds are electrically neutral, meaning that the total positive charge of the cations is equal to the total negative charge of the anions. Let&apos;s go through step by step to derive the formula:
      </p>

      <h2 className="text-xl font-semibold mb-2">Example: Calcium chloride</h2>
      <p className="mb-4">
        <strong>Step 1:</strong> Identify the ions in the compound and their charges. Consider, for example, the combination of calcium ions (Ca<sup>2+</sup>) and chloride ions (Cl<sup>-</sup>).<br />
        <strong>Step 2:</strong> Determine the ratio of charges needed to balance each other. In this case, calcium has a charge of +2 and chloride has a charge of -1. You need two chloride ions for every calcium ion to balance the charges.<br />
        <strong>Step 3:</strong> Write a formula with assignments that represents the relationship defined in Step 2. The formula for calcium chloride is CaCl<sub>2</sub>.
      </p>

      <h2 className="text-xl font-semibold mb-2">Example: Magnesium oxide</h2>
      <p className="mb-4">
        <strong>Step 1:</strong> Identify the ions and their charges - magnesium ions (Mg<sup>2+</sup>) and oxide ions (O<sup>2-</sup>).<br />
        <strong>Step 2:</strong> Determine the charge - the magnesium has a charge of +2 and the oxide has a charge of -2. Thus, one magnesium ion is required for each oxide ion.<br />
        <strong>Step 3:</strong> Write the formula - MgO.
      </p>

      <h2 className="text-xl font-semibold mb-2">Example: Aluminum sulphate</h2>
      <p className="mb-4">
        <strong>Step 1:</strong> Identify the ions and their charges - aluminum ions (Al<sup>3+</sup>) and sulphate ions (SO<sub>4</sub><sup>2-</sup>).<br />
        <strong>Step 2:</strong> Determine the charge - aluminum has a charge of +3 and sulphate has a charge of -2. You need two aluminum ions for every three sulphate ions to balance the charges.<br />
        <strong>Step 3:</strong> Write the formula - Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>.
      </p>

      <p className="mb-4">
        It is important to remember that when writing a formula, parentheses must be used to add polyatomic ions when more than one is needed to balance the charges. By following these steps and understanding the charges on the ions, you can derive the formulas of various ionic compounds.
      </p>

      <h2 className="text-xl font-semibold mb-2">7.3.1 Use of Roman numerals as oxidation number</h2>
      <p className="mb-4">
        Roman numerals are used to indicate the oxidation states of elements in compounds, when a metal exhibits variable oxidations in compounds. For examples in transition metal compounds.<br />
        CuSO<sub>4</sub> is written as copper (II) sulphate.<br />
        FeCl<sub>2</sub> is written as iron (II) chloride.<br />
        FeCl<sub>3</sub> is written as iron (III) chloride.
      </p>
    </div>
  );
};

export default Page;