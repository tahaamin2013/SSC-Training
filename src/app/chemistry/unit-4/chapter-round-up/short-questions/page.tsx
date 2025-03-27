import React from 'react';

const ShortResponseQuestions = () => {
    const data = [
        { atomicNumber: 11, massNumber: null, protons: null, neutrons: 12, electrons: 11 },
        { atomicNumber: null, massNumber: null, protons: 14, neutrons: 15, electrons: null },
        { atomicNumber: null, massNumber: 47, protons: null, neutrons: 25, electrons: null },
        { atomicNumber: null, massNumber: 27, protons: null, neutrons: null, electrons: 13 },
      ];
    
  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Short Response Questions</h1>
      <ol className="list-decimal pl-6 space-y-4">
        <li>Write the valence shell electronic configuration of an element present in the period and Group IIIA.</li>
        <li>Define halogens.</li>
        <li>Which atom has a higher shielding effect, Li or Na?</li>
        <li>Explain why Na has higher ionization energy than K.</li>
        <li>Alkali metals belong to the S-block in the periodic table. Why?</li>
        <li>
          Arrange the elements in each of the following groups in order of increasing ionization energy:
          <br />
          a) Li, Na, K
          <br />
          b) Cl, Br, I
        </li>
        <li>
          Arrange the elements in each of the following in order of decreasing shielding effect:
          <br />
          a) Li, Na, K
          <br />
          b) Cl, Br, I
          <br />
          c) Cl, Br
        </li>
        <li>
          Specify which of the following elements you would expect to have the greatest electron affinity:
          <br />
          S, P, Cl
        </li>
        <li>
          Electronic configuration of some elements is given below. Group the elements in pairs that would represent similar
          chemical properties:
          <br />
          Given electronic configuration:
          <br />
          A = 1s<sup>2</sup> 2s<sup>2</sup>
          <br />
          B = 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup>
          <br />
          C = 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup>
          <br />
          D = 1s<sup>2</sup>
          <br />
          E = 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>5</sup>
          <br />
          F = 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup>
          <br />
          G = 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup> 3s<sup>2</sup>
        </li>
        <li>Arrange the elements in groups and periods in Q. No. 6.</li>
        <li>
          For normal elements, the number of valence electrons of an element is equal to the group number. Find the group
          number of the following elements: Al, S, K, O.
        </li>
        <li>
          Write the valence shell electronic configuration for the following groups:
          <br />
          a. Alkali metals
          <br />
          b. Alkaline earth metals
          <br />
          c. Halogens
          <br />
          d. Noble gases
        </li>
        <li>
          Write electron dot symbols for an atom of the following elements:
          <br />
          (a) Be
          <br />
          (b) K
          <br />
          (c) N
          <br />
          (d) I
        </li>
        <li>
          Write the valence shell electronic configuration of the atoms of the following elements:
          <br />
          a) An element present in period 3 of Group VA
          <br />
          b) An element present in period 2 of Group VIA
        </li>
        <li>Copy and complete the following table:</li>
        <div className="container mx-auto p-4">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Atomic Number</th>
            <th className="border border-gray-300 p-2">Mass Number</th>
            <th className="border border-gray-300 p-2">No. of Protons</th>
            <th className="border border-gray-300 p-2">No. of Neutrons</th>
            <th className="border border-gray-300 p-2">No. of Electrons</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="text-center odd:bg-white even:bg-gray-100">
              <td className="border border-gray-300 p-2">{row.atomicNumber}</td>
              <td className="border border-gray-300 p-2">{row.massNumber}</td>
              <td className="border border-gray-300 p-2">{row.protons}</td>
              <td className="border border-gray-300 p-2">{row.neutrons}</td>
              <td className="border border-gray-300 p-2">{row.electrons}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        <li>
          In which block and period in the periodic table would you place each of the following elements with the
          following electronic configurations?
          <br />
          a. 1s<sup>2</sup> 2s<sup>1</sup>
          <br />
          b. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>5</sup>
          <br />
          c. 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup>
          <br />
          d. 1s<sup>2</sup>
        </li>
        <li>
          What types of elements have the highest ionization energies, and what types of elements have the lowest
          ionization energies? Argue.
        </li>
        <li>
          i) Two atoms have electronic configurations 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> and 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup>.
          The ionization energy of one is 2080 kJ/mole, and that of the other is 496 kJ/mole. Match each ionization energy
          with one of the given electronic configurations. Give a reason for your choice.
          <br />
          ii) Use the second member of each group from Group IA, IIA, and VIIA to justify that the number of valence
          electrons in an atom of the element is the same as its group number.
        </li>
        <li>
          Letters A, B, C, D, E, F indicate elements in the following figure:
          <br />
          a) Which elements are in the same periods?
          <br />
          b) Write the valence shell electronic configuration of element D.
          <br />
          c) Which elements are metals?
          <br />
          d) Which element can lose two electrons?
          <br />
          e) In which group is E present?
          <br />
          f) Which of the elements is a halogen?
          <br />
          g) Which element will form a dipositive cation?
          <br />
          h) Write the electronic configuration of element E.
          <br />
          i) Which two elements can form an ionic bond?
          <br />
          j) Can element C form a C<sub>2</sub> molecule? Interpret.
          <br />
          k) Which element can form covalent bonds?
          <br />
          l) Is element F a metal or non-metal?
        </li>
        <li>
          Electronic configurations of four elements are given below:
          <br />
          a) 1s<sup>2</sup> 2s<sup>2</sup>
          <br />
          b) 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>5</sup>
          <br />
          c) 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup>
          <br />
          d) 1s<sup>2</sup>
          <br />
          Which of these elements is:
          <br />
          1) An alkali metal
          <br />
          2) An alkaline earth metal
          <br />
          3) A noble gas
          <br />
          4) A halogen
        </li>
        <li>Argue in what region of the periodic table you will find elements with relatively high ionization energies.</li>
        <li>Define the periodic table.</li>
        <li>What is the significance of the atomic number in the periodic table?</li>
        <li>Discuss the concept of groups in the periodic table.</li>
        <li>What are periods in the periodic table?</li>
        <li>Why does atomic radius decrease across a period?</li>
        <li>What is electron affinity, and how does it change across a period and down a group?</li>
        <li>What is electronegativity, and how does it change across a period and down a group?</li>
        <li>Write down the properties of alkali metals.</li>
        <li>What are noble gases, and why are they inert?</li>
        <li>Discuss the significance of transition metals in the periodic table.</li>
      </ol>
    </div>
  );
};

export default ShortResponseQuestions;