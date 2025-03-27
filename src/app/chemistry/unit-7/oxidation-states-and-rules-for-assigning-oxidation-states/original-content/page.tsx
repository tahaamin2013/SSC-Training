import React from 'react';

const Page = () => {
  return (
    <div className="p-4 font-sans">
      <h1 className="text-2xl font-bold mb-4">7.2 OXIDATION STATES AND RULES FOR ASSIGNING OXIDATION STATES</h1>
      
      <h2 className="text-xl font-semibold mt-6 mb-2">7.2.1 Oxidation States</h2>
      <p className="mb-4">
        Oxidation state or oxidation number is defined as the number of charges an atom will have in a molecule or a compound.
        The elements that show an increase in oxidation number are oxidized. The elements that show a decrease in oxidation number are reduced. Do you think H in HCI is oxidized and Cl is reduced? Comparison of oxidation and reduction processes is given in table 7.1.
      </p>

      <h3 className="text-lg font-semibold mt-4 mb-2">Table 7.1: Process leading to oxidation and reduction</h3>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Oxidation</th>
            <th className="px-4 py-2">Reduction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Gain of oxygen</td>
            <td className="border px-4 py-2">Loss of oxygen</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Loss of hydrogen</td>
            <td className="border px-4 py-2">Gain of hydrogen</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Loss of electrons</td>
            <td className="border px-4 py-2">Gain of electrons</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Increase in oxidation number</td>
            <td className="border px-4 py-2">Decrease in oxidation number</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mt-6 mb-2">7.2.2 Rules for Assigning Oxidation States or Numbers</h2>
      <ol className="list-decimal list-inside mb-4">
        <li className="mb-2">The oxidation state of any uncombined or free elements is always zero e.g., oxidation state of Zn, Na, H in H,, S in S, etc is zero.</li>
        <li className="mb-2">In simple ions, oxidation state is same as their charge e.g., oxidation state of Na in Na&quot;and Ca in Ca is +1 and +2 respectively.</li>
        <li className="mb-2">In a complex ion the sum of oxidation states of atoms is equal to the charge on their ion. e.g., in CO,&apos, the sum of oxidation states of C and 30 atoms is -2. Similarly, in NH,&quot;, the sum of oxidation states of N and 4H atoms is +1.</li>
        <li className="mb-2">The oxidation number of each of the atoms in a molecule or compound is counted separately and their algebraic sum is zero e.g., In HCL, the sum of oxidation states of H and Cl atoms is zero. Similarly in CO,, the sum of oxidation states of one C and 2 oxygen atoms is zero.</li>
      </ol>

      <h3 className="text-lg font-semibold mt-4 mb-2">Table 7.2: Oxidation states of some elements in binary compounds that rarely change</h3>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Elements</th>
            <th className="px-4 py-2">Oxidation State</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Group-IA</td>
            <td className="border px-4 py-2">+1</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Group-IIA</td>
            <td className="border px-4 py-2">+2</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Group-IIIA</td>
            <td className="border px-4 py-2">+3</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Group-VIIA</td>
            <td className="border px-4 py-2">-1</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">H</td>
            <td className="border px-4 py-2">+1 (except in metal hydrides where it is -1)</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">O</td>
            <td className="border px-4 py-2">-2 (except peroxides and in OF₂)</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-lg font-semibold mt-4 mb-2">Monoatomic ions and their oxidation numbers</h3>
      <p className="mb-4">
        The oxidation number of a monatomic ion is equal to its charge. For example, Na&apos is formed after a Na atom has lost one electron to gain a +1 charge. So its oxidation number is +1. Similarly, a chlorine atom forms a Cl ion after gaining one electron to obtain a 1 charge. So its oxidation number is -1. The oxidation number of an atom is the number of electrons the atom has lost or gained. Because a monatomic ion is formed by the gain or loss of electrons from a single atom, its charge is equal to its oxidation number.
      </p>

      <h3 className="text-lg font-semibold mt-4 mb-2">Polyatomic ions and their oxidation numbers</h3>
      <p className="mb-4">
        In a polyatomic ion, the sum of the oxidation numbers of all the atoms is equal to the charge on the ion. For example, in CO, ion the oxidation numbers of carbon and oxygen are +4 and -2 respectively. So, the sum of the oxidation number of one carbon atom and three oxygen atoms would be 1(+4) 3(-2)-2 which is the charge on the ion.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7.2.3 Determining the Oxidation Number of an Atom in a Compound</h2>
      <p className="mb-4">
        Let&apos;s see how to use rules discussed in section 7.2.2 to determine the oxidation number of an atom of an element in a compound.
      </p>

      <h3 className="text-lg font-semibold mt-4 mb-2">Example 7.3: Determining oxidation number</h3>
      <p className="mb-4">
        Adevice called Breathalyzer is used by police to test a person&aposs breath for alcohol. It contains an acidic solution of potassium dichromate K,Cr,O,. It is a strong oxidizing agent. Determine oxidation state of Cr in it.
      </p>
      <h4 className="font-semibold mt-2 mb-2">Problem Solving Strategy:</h4>
      <p className="mb-4">
        Use rules 1 to 4 and table 7.1 to get as many oxidation numbers as you can. Use rule 4 to get oxidation number that has not been assigned.
      </p>
      <h4 className="font-semibold mt-2 mb-2">Solution:</h4>
      <ol className="list-decimal list-inside mb-4">
        <li className="mb-2">The oxidation number of K is +1, since it belongs to Group-1A. There are 2 K atoms therefore, overall oxidation number for K is 2(+1) =+2</li>
        <li className="mb-2">There are 7 oxygen atoms, therefore overall oxidation state for O is 7(-2)=-14</li>
        <li className="mb-2">Suppose oxidation for Cr is x, since there are two Cr atoms, therefore, overall oxidation sate for Cr is 2x.</li>
        <li className="mb-2">The sum of oxidation numbers must be zero. +2+2x+(-14) = 0 2x-12 = 0 2x = 12 x = +6 Thus oxidation state for Cr in K,Cr,O, is +6</li>
      </ol>

      <h3 className="text-lg font-semibold mt-4 mb-2">Example 7.4: Determining oxidation state</h3>
      <p className="mb-4">
        Boric acid H,BO, is used in eye wash. What is the oxidation state of B in this acid?
      </p>
      <h4 className="font-semibold mt-2 mb-2">Problem solving strategy:</h4>
      <p className="mb-4">
        Use rules and table 7.2 to get the oxidation state of H and O- atoms. Use rule 4 to get the oxidation state of B.
      </p>
      <h4 className="font-semibold mt-2 mb-2">Solution:</h4>
      <ol className="list-decimal list-inside mb-4">
        <li className="mb-2">There are 3 H-atoms, therefore, overall oxidation state for H is 3(+1) +3</li>
        <li className="mb-2">There are 30-atoms, therefore, overall oxidation state for O is 3(-2)--6</li>
        <li className="mb-2">Suppose the oxidation state for B is x.</li>
        <li className="mb-2">The total oxidation states for all the atoms must be zero. 
            +3 + X + (-6) = 0 <br />
            +3 +x -6 = 0<br />
            x-3 = 0<br />
            x = 3<br />
            Thus the oxidation state for B in H.,BO, is + 3.</li>
      </ol>

      <h3 className="text-lg font-semibold mt-4 mb-2">CONCEPT ASSESSMENT EXERCISE 3.1</h3>
      <p className="mb-4">
        One major problem of air pollution is the formation of acid rain. Air pollutants such as SO, and NO, combine with oxygen and water vapours in the air to form H,SO, and HNO,. These acids fall to the ground with the rain, making the rain acidic. Clouds can also absorb the acids and carry them hundreds of kilometers away from where the pollutants are released. Determine the oxidation number of N in NO, and HNO,, S in SO, and H,SO,
      </p>

      <h3 className="text-lg font-semibold mt-4 mb-2">Example 7.5: Determining the oxidation number of an element in an ion.</h3>
      <p className="mb-4">
        What is the oxidation number of C in carbonate ion, CO,
      </p>
      <h4 className="font-semibold mt-2 mb-2">Problem Solving Strategy:</h4>
      <ol className="list-decimal list-inside mb-4">
        <li className="mb-2">Use rule that oxidation number of O is -2</li>
        <li className="mb-2">Use rule 3 to find oxidation state of C</li>
      </ol>
      <h4 className="font-semibold mt-2 mb-2">Solution:</h4>
      <p className="mb-4">
        Oxidation State of one C-atom Oxidation state of 3-0 atoms = -2 <br />
         Oxidation state of C-atom + 3(-2) = -2 <br />
         Oxidation state of C-atom-6 = -2 <br />
         Oxidation state of C-atom = 2+6
         <br />
          Oxidation state of C-atom = +4 <br />
           Thus the oxidation of C in carbonate ion is +4
      </p>

      <h3 className="text-lg font-semibold mt-4 mb-2">CONCEPT ASSESSMENT EXERCISE 7.4</h3>
      <p className="mb-4">
        Determine the oxidation state of
      </p>
      <ol className="list-decimal list-inside mb-4">
        <li className="mb-2">S in sulphate ion, SO,</li>
        <li className="mb-2">P in phosphate ion, PO,</li>
        <li className="mb-2">N in ammonium ion, NH,&quot;</li>
      </ol>
    </div>
  );
};

export default Page;