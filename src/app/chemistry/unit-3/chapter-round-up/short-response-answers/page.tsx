import React from 'react'



const page = () => {
  const elements = [
    { symbol: 'Si', name: 'Silicon', atomicNumber: 14, config: '1s² 2s² 2p⁶ 3s² 3p²' },
    { symbol: 'Mg', name: 'Magnesium', atomicNumber: 12, config: '1s² 2s² 2p⁶ 3s²' },
    { symbol: 'Al', name: 'Aluminum', atomicNumber: 13, config: '1s² 2s² 2p⁶ 3s² 3p¹' },
    { symbol: 'Ar', name: 'Argon', atomicNumber: 18, config: '1s² 2s² 2p⁶ 3s² 3p⁶' }
  ];
  
  return (
    <div className='text-lg p-7'>
   <h1 className='text-3xl font-bold'>Short Response Questions </h1>
<p>1. Distinguish between shell and sub-shell? </p>
<p>Ans:
<div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold text-center mb-4">Shells vs. Sub-Shells in Atomic Structure</h1>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Shells</h2>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li><strong>Definition:</strong> Shells are energy levels around an atom’s nucleus.</li>
          <li><strong>Energy Levels:</strong> As the shell number (n) increases, energy increases.</li>
          <li><strong>Capacity:</strong> A shell can hold up to 2n² electrons.</li>
          <li><strong>Labels:</strong> Shells are named K, L, M, N (n = 1, 2, 3, 4,...).</li>
          <li><strong>Example:</strong> The first shell (K) holds 2 electrons, the second (L) holds 8.</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold">Sub-Shells</h2>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li><strong>Definition:</strong> Sub-shells divide shells and help organize electrons.</li>
          <li><strong>Types:</strong> s, p, d, and f sub-shells.</li>
          <li><strong>Energy Levels:</strong> Within a shell, sub-shells have different energies.</li>
          <li><strong>Capacity:</strong> s = 2, p = 6, d = 10, f = 14 electrons.</li>
          <li><strong>Example:</strong> The second shell has 2 sub-shells (2s = 2e, 2p = 6e, total = 8e).</li>
        </ul>
      </section>
        <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Second Answer</h1>
      
      <h2 className="text-xl font-semibold mt-4">Understanding Shells and Sub-shells</h2>
      <p className="mt-2">Atoms have energy levels called shells. Each shell contains smaller sections called sub-shells.</p>
      
      <h2 className="text-lg font-semibold mt-4">Shells vs. Sub-shells</h2>
      <ul className="list-disc list-inside mt-2">
        <li><strong>Shells:</strong> Large energy levels around the nucleus.</li>
        <li><strong>Sub-shells:</strong> Smaller sections within a shell.</li>
      </ul>
      
      <h2 className="text-lg font-semibold mt-4">Numbering System</h2>
      <p className="mt-2">Shells are numbered from 1 (K shell) onward. Sub-shells are labeled as s, p, d, and f.</p>
      
      <h2 className="text-lg font-semibold mt-4">Capacity</h2>
      <ul className="list-disc list-inside mt-2">
        <li><strong>Shells:</strong> Hold 2, 8, 18, or more electrons.</li>
        <li><strong>Sub-shells:</strong> Hold fewer electrons (2, 6, 10, etc.).</li>
      </ul>
      
      <h2 className="text-lg font-semibold mt-4">Energy Levels</h2>
      <p className="mt-2">Shells represent big energy levels, while sub-shells break these into smaller parts.</p>
      
      <h2 className="text-lg font-semibold mt-4">Electron Order</h2>
      <p className="mt-2">Electrons fill shells first, then go into sub-shells in a set order.</p>
      
      <h2 className="text-lg font-semibold mt-4">Examples</h2>
      <ul className="list-disc list-inside mt-2">
        <li><strong>Shells:</strong> K (1st), L (2nd)</li>
        <li><strong>Sub-shells:</strong> s, p, d</li>
      </ul>
    </div>
    </div>
</p>
<p>2. Why an atom electrically neutral? </p>
<p>
  Ans:
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full text-left">
        <h1 className="text-xl font-bold text-gray-800 mb-4">Why is an Atom Neutral?</h1>
        <p className="text-gray-700">
          An atom stays neutral because it has the same number of protons and electrons. Protons are positive and sit in the nucleus. Electrons are negative and move around the nucleus. Since their charges cancel out, the atom has no overall charge. This balance keeps atoms stable and helps everything around us exist!
        </p>
    </div>
</p>
<p>3. How many sub-shells are there in N shell?</p> 
<div className="max-w-md mx-auto p-6 bg-blue-100 rounded-2xl shadow-lg mt-10 text-center">
      <h1 className="text-xl font-bold text-blue-800">N Shell and Its Sub-Shells</h1>
      <p className="mt-4 text-gray-700">
        The N shell has a principal quantum number of <strong>n = 4</strong>. The number of sub-shells in a shell is equal to n. So, the N shell has 4 sub-shells:
      </p>
      <ul className="mt-3 text-gray-800 font-medium">
        <li>1. 4s (l = 0)</li>
        <li>2. 4p (l = 1)</li>
        <li>3. 4d (l = 2)</li>
        <li>4. 4f (l = 3)</li>
      </ul>
      <p className="mt-4 text-gray-700">Thus, the N shell contains 4 sub-shells.</p>
    </div>
<p>4. Give notation for sub-shells of M shell. </p>
<div className="p-6 bg-white rounded-2xl shadow-lg text-center max-w-md">
        <h1 className="text-2xl font-bold text-gray-800">M Shell Notation</h1>
        <p className="mt-4 text-lg text-gray-600">
          The M shell is written as <strong>n = 3</strong>. It has three sub-shells: <strong>3s</strong>, <strong>3p</strong>, and <strong>3d</strong>.
        </p>
      </div>

<p>5. List the sub-shells of M shell in order of increasing energy</p> 
<p>Ans: {'3s < 3p < 3d'}</p>
<p>6. Can you identify an atom without knowing number of neutrons in it?</p> 
      <div className="max-w-2xl bg-white p-6 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Atomic Number & Element Identification</h1>
        <p className="text-gray-700 text-lg mb-4">
          Yes! You can identify an atom without knowing the number of neutrons. Just look at the number of protons!
        </p>
        <p className="text-gray-700 text-lg mb-4">
          The atomic number (Z) is the number of protons in an atom. It is unique for every element. For example, carbon (C) always has 6 protons.
        </p>
        <p className="text-gray-700 text-lg">
          Neutrons only affect the isotope of an element, not its identity. So, the atomic number alone tells you which element it is!
        </p>
    </div>
<p>7. The electronic configurations listed are incorrect. Explain what mistakes have been made in each and write correct electronic configurations. </p>
<p>x = 1s ^ 2 y = 1s ^ 2 2s ^ 2 2s ^ 1 2p ^ 4 2p ^ 1 3s ^ 2 z = 1s ^ 2 2s ^ 2 , 2p ^ 5 3s ^ 1 </p>
      <div className="max-w-2xl bg-white p-6 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Atomic Number & Element Identification</h1>
        <p className="text-gray-700 text-lg mb-4">
          Yes! You can identify an atom without knowing the number of neutrons. Just look at the number of protons!
        </p>
        <p className="text-gray-700 text-lg mb-4">
          The atomic number (Z) is the number of protons in an atom. It is unique for every element. For example, carbon (C) always has 6 protons.
        </p>
        <p className="text-gray-700 text-lg">
          Neutrons only affect the isotope of an element, not its identity. So, the atomic number alone tells you which element it is!
        </p>
      </div>
<p>8. Which orbital in each of the following pairs is lower in energy. </p>
<p>
(a) 2s,2p <br />
(b) 3p, 2p <br />
(c) 3s, 4s 
</p>
<div className="p-6 max-w-lg mx-auto bg-white rounded-2xl shadow-md">
      <h1 className="text-xl font-bold mb-4">Afbau Principle</h1>
      <p className="text-gray-700">
        The Afbau principle explains how electrons fill energy levels in atoms.
        The order of energy levels from lowest to highest is:
      </p>
      <ul className="list-disc list-inside mt-2 text-gray-700">
        <li>1s &lt; 2s &lt; 2p &lt; 3s &lt; 3p &lt; 4s &lt; 3d</li>
      </ul>
      <p className="text-gray-700 mt-2">
        This means:
      </p>
      <ul className="list-disc list-inside mt-2 text-gray-700">
        <li>2s is lower than 2p</li>
        <li>2p is lower than 3p</li>
        <li>3s is lower than 4s</li>
      </ul>
    </div>
<p>8. Draw Bohr&apos;s model for the following atoms indicating the location for electron, protons and neutrons. </p>
<p>
(a) Potassium (Atomic No 19, Mass No 39) <br /> 
(b) Silicon (Atomic No.14, Mass No 28)  <br />
(c) Argon (Atomic No. 18, Mass No 39) 
</p>
<div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold">Bohr's Model Drawing Task</h1>
      <p>Draw Bohr's model for these atoms. Show electrons, protons, and neutrons.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Potassium</strong> (Atomic No: 19, Mass No: 39)</li>
        <li><strong>Silicon</strong> (Atomic No: 14, Mass No: 28)</li>
        <li><strong>Argon</strong> (Atomic No: 18, Mass No: 39)</li>
      </ul>
    </div>
<p>9. Write electronic configuration for the following elements </p>
<p>
(a) Si  <br />
(b) 12 ^ 26 Mg  <br />
(c) 12 ^ 24 Mg <br />
(d) Ar 
</p>
<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Atomic Numbers and Configurations</h1>
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6">
        {elements.map((element) => (
          <div key={element.symbol} className="mb-4 border-b pb-4 last:border-b-0">
            <h2 className="text-xl font-semibold text-gray-700">{element.name} ({element.symbol})</h2>
            <p className="text-gray-600">Atomic Number: <span className="font-medium">{element.atomicNumber}</span></p>
            <p className="text-gray-600">Electronic Configuration: <span className="font-mono">{element.config}</span></p>
          </div>
        ))}
      </div>
    </div>














<p>10. State the importance and uses of isotopes in various fields of life. 
</p>
<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-2xl bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-center mb-4">How Isotopes Help in Different Fields</h1>
        <div className="space-y-4 text-gray-700">
  <div>
    <h2 className="text-lg font-semibold">Medical Uses</h2>
    <ul className="list-disc list-inside">
      <li>Doctors use isotopes like carbon-11, oxygen-15, and fluorine-18 in PET scans.</li>
      <li>Some, like iodine-131 and cobalt-60, help treat cancer.</li>
    </ul>
  </div>

  <div>
    <h2 className="text-lg font-semibold">Farming</h2>
    <ul className="list-disc list-inside">
      <li>Isotopes like nitrogen-15 and carbon-13 improve crops.</li>
      <li>Phosphorus-32 helps study how plants take nutrients.</li>
    </ul>
  </div>

  <div>
    <h2 className="text-lg font-semibold">Environment</h2>
    <ul className="list-disc list-inside">
      <li>Carbon-14 and tritium track pollution in water and air.</li>
      <li>Cesium-137 and strontium-90 show pollution sources.</li>
    </ul>
  </div>

  <div>
    <h2 className="text-lg font-semibold">Archaeology & Geology</h2>
    <ul className="list-disc list-inside">
      <li>Carbon-14, uranium-238, and potassium-40 help date old objects.</li>
    </ul>
  </div>

  <div>
    <h2 className="text-lg font-semibold">Energy Production</h2>
    <ul className="list-disc list-inside">
      <li>Uranium-235 and plutonium-239 power nuclear plants.</li>
      <li>Cobalt-60 and cesium-137 also have nuclear uses.</li>
    </ul>
  </div>

  <div>
    <h2 className="text-lg font-semibold">Industry</h2>
    <ul className="list-disc list-inside">
      <li>Iridium-192 and cobalt-60 help test materials and sterilize tools.</li>
      <li>Americium-241 finds material defects.</li>
    </ul>
  </div>
</div>

      </div>
    </div>

<p>
11. The atomic number of an element is 23 and its mass number is 56. 
</p>


<p>
(a) How many protons and electrons does an atom of this element have? 

</p>
<p>
(b) How many neutrons does this atom have? 

</p>
<div className="p-6 max-w-lg mx-auto bg-white rounded-2xl shadow-lg space-y-4">
      <h1 className="text-xl font-bold text-blue-700">Atomic Structure</h1>
      <p className="text-gray-700">
        Given:
      </p>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Atomic Number (Z) = 23</li>
        <li>Mass Number (A) = 56</li>
      </ul>
      <h2 className="text-lg font-semibold text-blue-600">Number of Protons and Electrons</h2>
      <p className="text-gray-700">
        The atomic number (Z) tells us the number of protons in an atom. So, this atom has 23 protons. Since neutral atoms have the same number of electrons as protons, it also has 23 electrons.
      </p>
      <h2 className="text-lg font-semibold text-blue-600">Number of Neutrons</h2>
      <p className="text-gray-700">
        Neutrons are found using the formula:
      </p>
      <p className="text-gray-900 font-bold">Neutrons (N) = Mass Number (A) - Atomic Number (Z)</p>
      <p className="text-gray-700">
        So, N = 56 - 23 = 33.
      </p>
    </div>
<p>12. The atomic symbol of aluminum is written as Al. What information do you get from it? </p>
<div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-lg bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Aluminum Atomic Symbol</h1>
        <p className="text-gray-700">
          The atomic symbol for aluminum is <strong>Al</strong>. It gives us important details:
        </p>
        <ul className="list-disc pl-5 text-gray-700 my-4">
          <li>
            <strong>Element Symbol (Al):</strong> "Al" stands for aluminum.
          </li>
          <li>
            <strong>Atomic Number (13):</strong> This means aluminum has <strong>13 protons</strong> in its nucleus. Since it's neutral, it also has <strong>13 electrons</strong>.
          </li>
          <li>
            <strong>Mass Number (27):</strong> This is the sum of protons and neutrons in the nucleus.
          </li>
        </ul>
        <p className="text-gray-700">
          From this, we can figure out:
        </p>
        <ul className="list-disc pl-5 text-gray-700 my-4">
          <li>
            <strong>Protons:</strong> 13
          </li>
          <li>
            <strong>Electrons:</strong> 13
          </li>
          <li>
            <strong>Neutrons:</strong> 27 - 13 = <strong>14</strong>
          </li>
        </ul>
        <p className="text-gray-500 text-sm mt-4">Cantab Publishers</p>
      </div>
    </div>

<p>1: Describe the composition and charge of alpha particles emitted from certain radioactive nuclei and their impact on the original nucleus. </p>
<div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">Alpha Particles</h1>
      
      <h2 className="text-xl font-semibold mb-2">What Are Alpha Particles?</h2>
      <p className="mb-4">Alpha particles are tiny bits of matter. They are made of two protons and two neutrons. This means they have a positive charge.</p>
      
      <h2 className="text-xl font-semibold mb-2">How Are They Released?</h2>
      <p className="mb-4">Some atoms throw out alpha particles. When this happens, the atom loses two protons and two neutrons. This makes the atom lighter and changes what kind of element it is.</p>
      
      <h2 className="text-xl font-semibold mb-2">What Happens to the Atom?</h2>
      <p className="mb-4">The atom becomes more stable. It turns into a new element with a lower atomic number. This process is called radioactive decay, and it helps the atom get rid of extra energy.</p>
    </div>
<p>
2: Describe the decay process of C-14 in carbon dating and its role in determining the age of organic materials. 

</p>
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-xl text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Carbon Dating Explained</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Carbon-14 (C-14) is a type of carbon that slowly turns into nitrogen over time.
          This happens through beta decay and takes about 5,730 years. Living things take in C-14
          from the air and food. But when they die, they stop absorbing it, and the C-14 starts to disappear.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mt-4">
          Scientists use carbon dating to check how much C-14 is left in old objects. By comparing
          it to what a living thing would have, they can guess its age. This method helps
          archaeologists, historians, and geologists date things up to 50,000 years old. It gives
          us clues about history, cultures, and nature.
        </p>
      </div>
    </div>
<p>
3: Explain how the strong nuclear force holds protons and neutrons together in the nucleus of an atom. </p>


<p>
<div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-2xl bg-white p-6 rounded-2xl shadow-xl text-gray-800">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">The Strong Nuclear Force</h1>
        <p className="mb-4 text-lg">
          The strong nuclear force is what holds the center of an atom together. It keeps protons and neutrons bound inside the nucleus.
        </p>
        <p className="mb-4 text-lg">
          This force is stronger than the electromagnetic force, which would normally push protons apart because they have the same charge.
        </p>
        <p className="mb-4 text-lg">
          However, the strong force only works at very short distances. It acts between tiny particles called quarks, which make up protons and neutrons.
        </p>
        <p className="text-lg">
          Without this force, atoms wouldn't exist, and neither would we!
        </p>
      </div>
    </div>
4: Why do isotopes not alter the chemical properties of an atom? </p>
<div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">Why Do Isotopes Have the Same Chemical Properties?</h1>
      <p className="mb-2">
        Isotopes are atoms of the same element with different numbers of neutrons. Even though their masses are different, their chemical properties remain the same. Here's why:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Same Number of Electrons:</strong> Isotopes have the same number of electrons and protons, which control how atoms react.
        </li>
        <li>
          <strong>Identical Electron Arrangement:</strong> Electrons form bonds, and since isotopes have the same electron configuration, their bonding behavior is identical.
        </li>
        <li>
          <strong>Valence Electrons Matter:</strong> Chemical reactions involve the outermost (valence) electrons. Isotopes of the same element have the same valence electrons, so they react the same way.
        </li>
        <li>
          <strong>Neutrons Don't Affect Chemistry:</strong> Neutrons are inside the nucleus and only change an atom's mass, not its chemical properties.
        </li>
      </ul>
      <p className="mt-4">
        In short, isotopes behave the same in chemical reactions because their electron configuration stays the same, and only the nucleus changes.
      </p>
    </div>
<p>5: How can the presence of isotopes affect the overall atomic mass of an element? </p>
<div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">How Isotopes Affect Atomic Mass</h1>
      <p className="mb-2">
        Isotopes change an element’s atomic mass in three ways:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Averaging Masses:</strong> The atomic mass is a weighted average of its isotopes.</li>
        <li><strong>More Neutrons, More Mass:</strong> Heavier isotopes have more neutrons, increasing the total mass.</li>
        <li><strong>Abundance Matters:</strong> The percentage of each isotope affects the final atomic mass.</li>
      </ul>
      <p className="mt-4">
        Take chlorine (Cl) as an example. It has two main isotopes:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Cl-35:</strong> 75.78% abundance, mass of 34.97 u.</li>
        <li><strong>Cl-37:</strong> 24.22% abundance, mass of 36.97 u.</li>
      </ul>
      <p className="mt-4">
        The atomic mass of chlorine is 35.45 u, which is the weighted average of these isotopes.
      </p>
      <p className="mt-4 font-bold">In short, isotopes affect atomic mass through averaging, extra neutrons, and abundance.</p>
    </div>
<p>6: Calculate the relative atomic mass of element x with isotopes x-35 (70%) and x-37 (30%). </p>
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md text-center">
        <h1 className="text-xl font-bold mb-4">Isotope Calculation</h1>
        <p className="text-gray-700">
          We have two isotopes of an element:
        </p>
        <ul className="text-left list-disc list-inside my-3">
          <li>Isotope 1: Mass = 35, Abundance = 70%</li>
          <li>Isotope 2: Mass = 37, Abundance = 30%</li>
        </ul>
        <p className="text-gray-700">
          Using the formula:
        </p>
        <p className="text-gray-900 font-semibold">
          Relative Atomic Mass = ((35 × 70) + (37 × 30)) / 100
        </p>
        <p className="text-gray-900 font-semibold">= (2450 + 1110) / 100</p>
        <p className="text-gray-900 font-semibold">= 35.6 amu</p>
      </div>
    </div>
<p>
7: Define relative atomic mass and its calculation, emphasizing its role in representing the average mass of isotopes in an element. 
</p>
<div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-4 text-center">Relative Atomic Mass</h1>
      <p className="mb-4">
        Atoms are tiny! Measuring their actual weight is extremely difficult.
        For example, a hydrogen atom weighs about <strong>1.672 × 10⁻²⁴ g</strong>.
        Such small numbers are hard to use in calculations.
      </p>
      <p className="mb-4">
        To make things easier, scientists use <strong>relative atomic mass</strong>. Instead of
        measuring actual mass, they compare it to carbon-12, which is assigned a mass of
        <strong>12 atomic mass units (amu)</strong>.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Definition</h2>
      <p className="mb-4">
        The relative atomic mass of an element is the average mass of its atoms compared
        to <strong>1/12th</strong> of a carbon-12 atom.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Examples</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Hydrogen (H) = 1 amu</li>
        <li>Oxygen (O) = 16 amu</li>
        <li>Magnesium (Mg) = 24 amu</li>
        <li>Calcium (Ca) = 40 amu</li>
        <li>Sodium (Na) = 23 amu</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">How to Calculate</h2>
      <p className="mb-4">
        Elements often have different versions called <strong>isotopes</strong>. Their relative atomic mass
        is calculated using the formula:
      </p>
      <p className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
        Relative Atomic Mass = (mass × abundance) + (mass × abundance) / 100
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Example: Carbon</h2>
      <p className="mb-4">Carbon has three isotopes with these natural abundances:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Carbon-12: 98.8%</li>
        <li>Carbon-13: 1.1%</li>
        <li>Carbon-14: 0.009%</li>
      </ul>
      <p className="mb-4">Using the formula:</p>
      <p className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
        (98.8 × 12 + 1.1 × 13 + 0.009 × 14) ÷ 100 = <strong>12.00026 amu</strong>
      </p>
    </div>
<p>
8: Compare and contrast the properties of protons, neutrons, and electrons in terms of their charge, mass, and location within the atom. 

</p>
<div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-center mb-4">Comparison of Protons, Neutrons, and Electrons</h1>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Particle</th>
              <th className="border border-gray-300 px-4 py-2">Charge Discovery</th>
              <th className="border border-gray-300 px-4 py-2">Charge</th>
              <th className="border border-gray-300 px-4 py-2">Relative Charge</th>
              <th className="border border-gray-300 px-4 py-2">Relative Mass</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Electron</td>
              <td className="border border-gray-300 px-4 py-2">Discovered in cathode ray experiments</td>
              <td className="border border-gray-300 px-4 py-2">-1.602 × 10⁻¹⁹ C</td>
              <td className="border border-gray-300 px-4 py-2">-1</td>
              <td className="border border-gray-300 px-4 py-2">1/1836</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Proton</td>
              <td className="border border-gray-300 px-4 py-2">Discovered in experiments</td>
              <td className="border border-gray-300 px-4 py-2">1.602 × 10⁻¹⁹ C</td>
              <td className="border border-gray-300 px-4 py-2">+1</td>
              <td className="border border-gray-300 px-4 py-2">1</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Neutron</td>
              <td className="border border-gray-300 px-4 py-2">Discovered by James Chadwick</td>
              <td className="border border-gray-300 px-4 py-2">0 (neutral)</td>
              <td className="border border-gray-300 px-4 py-2">0</td>
              <td className="border border-gray-300 px-4 py-2">Slightly more than 1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
<p>
9: Compare and contrast the concepts of nucleon number and atomic mass in the context of an atom&apos;s composition. 

</p>
<div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-3xl w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Comparison: Nucleon Number vs. Atomic Mass</h1>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-200">
              <th className="border border-gray-300 p-2">Concept</th>
              <th className="border border-gray-300 p-2">Nucleon Number (Mass Number)</th>
              <th className="border border-gray-300 p-2">Atomic Mass</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Definition</td>
              <td className="border border-gray-300 p-2">Total count of protons and neutrons in a nucleus.</td>
              <td className="border border-gray-300 p-2">Average mass of all isotopes of an element, considering abundance.</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-2">Formula</td>
              <td className="border border-gray-300 p-2">A = Z + N</td>
              <td className="border border-gray-300 p-2">(Isotopic mass × Relative abundance) summed.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Units</td>
              <td className="border border-gray-300 p-2">Atomic mass units (amu)</td>
              <td className="border border-gray-300 p-2">Atomic mass units (amu)</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-2">Example</td>
              <td className="border border-gray-300 p-2">Carbon-12 has 12 nucleons (6 protons + 6 neutrons).</td>
              <td className="border border-gray-300 p-2">Carbon's atomic mass is ~12.01 amu (average of C-12 & C-13).</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
<p>
10: Describe the formation of a negatively charged ion (anion) from an atom. 

</p>
<div className="max-w-lg mx-auto p-6 bg-blue-100 rounded-2xl shadow-lg text-gray-800">
      <h1 className="text-2xl font-bold mb-4">How a Negative Ion Forms</h1>
      <p className="mb-2">A negative ion (anion) forms when an atom gains extra electrons. This happens in two ways:</p>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Electron gain:</strong> The atom grabs free electrons.</li>
        <li><strong>Electron transfer:</strong> Another atom gives it electrons.</li>
      </ul>
      <p>Since electrons are negatively charged, the atom becomes a negative ion.</p>
    </div>
<p>
11: Illustrate and explain the pathways that positively and negatively charged particles would follow under influence of a uniform electric field. 

</p>
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Pathways of Charged Particles</h1>
        <p className="text-gray-700 mb-2">
          <strong>Positively Charged Particles (e.g., Protons):</strong>
        </p>
        <p className="text-gray-700 mb-4">
          They move along the electric field lines, going from the positive plate to the negative plate.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Negatively Charged Particles (e.g., Electrons):</strong>
        </p>
        <p className="text-gray-700 mb-4">
          They move in the opposite direction of the electric field lines, from the negative plate to the positive plate.
        </p>
        <h2 className="text-xl font-semibold text-blue-500 mb-3">Key Points:</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Like charges push each other away.</li>
          <li>Opposite charges pull each other closer.</li>
          <li>Electric field lines start from positive charges and end at negative charges.</li>
          <li>Charged particles follow these lines: positive ones move with the field, negative ones move against it.</li>
          <li>In a steady electric field, charged particles travel in straight lines.</li>
        </ul>
      </div>
    </div>
<p>
12: For each representation of a nucleus a through e, write the atomic symbol and identify which are isotopes. 

</p>
<div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Atomic Structure</h1>
        <p className="text-lg">Atoms are made of protons, neutrons, and electrons.</p>
        <div className="mt-4 space-y-3">
          <div className="p-3 bg-blue-100 rounded-lg">
            <p className="font-semibold">Beryllium (Be)</p>
            <p>Protons: 4 | Neutrons: 5</p>
            <p className="text-sm text-gray-600">Type: Metal</p>
          </div>
          <div className="p-3 bg-green-100 rounded-lg">
            <p className="font-semibold">Boron (B)</p>
            <p>Protons: 5 | Neutrons: 6</p>
            <p className="text-sm text-gray-600">Type: Metalloid</p>
          </div>
          <div className="p-3 bg-yellow-100 rounded-lg">
            <p className="font-semibold">Carbon (C)</p>
            <p>Protons: 6 | Neutrons: 6</p>
            <p className="text-sm text-gray-600">Type: Non-metal</p>
          </div>
        </div>
      </div>
    </div>
<p>
13: Identify the element represented by each nucleus A through E in the problem as a metal and nonmetal? 

</p>
<div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-2xl text-xl font-semibold">
        <p>Ans: A is a metal.</p>
        <p>E is a non-metal.</p>
      </div>
    </div>
    </div>
  )
}




export default page