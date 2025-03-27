// pages/unit06.js

import React from 'react';

export default function Unit06() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
 
      <div className="mb-6">
        <h3 className="text-lg font-semibold">6.2 MOLECULAR MASS AND FORMULA MASS</h3>
        <p className="mb-2">Molecular mass is the sum of the atomic masses of all the atoms present in the molecule. All you have to do is to add up the atomic masses of all the atoms in the compound. For example,
          <br />
           Molecular mass of water H₂O <br /> = 2(atomic mass of H) + atomic mass of oxygen <br /> = 2(1.008)+16.00 <br /> = 2.016+16.00  <br />
           = 18.016amu</p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold">Example 6.1: Determining molecular mass</h4>
        <ol className="list-decimal pl-5">
          <li>Determine the molecular mass of glucose C₆H₁₂O₆, which is also known as blood sugar.</li>
          <li>Determine the molecular mass of naphthalene C₁₀H₈, which is used in mothballs.</li>
        </ol>
        <p className="mb-2">Problem solving strategy:<br />Multiply atomic masses of carbon, hydrogen and oxygen by their subscripts and add.</p>
        <p className="mb-2  text-lg font-bold">Solution:</p>
        <div className=" pl-5">
          <div>1. Molecular mass of C₆H₁₂O₆  <br /> = 6(12.00) + 12(1.008) + 6(16.00) <br />
180.096 amu
</div>
          <div>2. Molecular mass of C₁₀H₈ <br />
            = 12 x 10 + 1 x 8 <br />
= 120 + 8 = 128 amu
</div>
        </div>
        <p className="mb-2">The term molecular mass is used for molecular compounds. Whereas, the term formula mass is used for ionic compounds. Ionic compounds consist of arrays of oppositely charged ions rather than separate molecules. So we represent an ionic compound by its formula unit. A formula unit indicates the simplest ratio between cations and anions in an ionic compound. For example, the common salt consists of Na⁺ and Cl⁻ ions. It has one Na⁺ ion for every Cl⁻ ion. So formula unit for common salt is NaCl.</p>
        <p className="mb-2">The sum of the atomic masses of all the atoms in the formula unit of a substance is called formula mass.</p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold">Example 6.2: Determining formula mass</h4>
        <ol className="list-decimal pl-5">
          <li>Sodium Chloride, also called as table salt is used to flavour food, preserve meat, and in the preparation of large number of compounds. Determine its formula mass.</li>
          <li>Milk of magnesia which contains Mg(OH)₂, is used to treat acidity. Determine its formula mass.</li>
        </ol>
        <p className="mb-2">Problem solving strategy:<br />Add the atomic masses of all the atoms in the formula unit.</p>
        <p className="mb-2 text-lg font-bold">Solution:</p>
        <div className=" pl-5">

<p className='text-md'>1.Formula mass of NaCl </p>
<p>= 1 x Atomic mass of Na + 1 x Atomic mass of Cl  
</p>
<p>= 1 x 23+ 1 x 35.5 
</p>
<p>= 58.5amu 
</p>
<p className='text-md'> 2. Formula mass of  Mg(OH)2
</p>
<p>= 24+16x2 + 1x2 
</p>
<p>= 24 +32 +2,
</p>
<p>= 58 amu
</p>



      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold">CONCEPT ASSESSMENT EXERCISE 6.3</h4>
        <ol className="list-decimal pl-5">
          <li>Potassium Chlorate (KClO₃) is used commonly for the laboratory preparation of oxygen gas. Calculate its formula mass.</li>
          <li>When baking soda, NaHCO₃ is heated carbon dioxide is released, which is responsible for the rising of cookies and bread. Determine the formula masses of baking soda and carbon dioxide.</li>
          <li>Following compounds are used as fertilizers. Determine their formula masses.<br />
            (i) Urea, (NH₂)₂CO<br />
            (ii) Ammonium nitrate, NH₄NO₃</li>
        </ol>
      </div>
    </div>
    </div>
  );
}
