import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
          Proton or Atomic Number
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
    :depth(3) {
      BackgroundColor lightPink
    }
}
</style>
* Proton or Atomic Number
** What Determines the Identity of an Element? <<identity>>
*** Proton Number (Z) <<proton_number>>
**** Number of protons in the nucleus
**** Also called atomic number (Z)
*** Charge Balance <<charge_balance>>
**** Protons have a positive charge
**** In neutral atoms, protons = electrons
**** Ensures overall charge neutrality
*** Examples <<examples>>
**** Hydrogen (H) has 1 proton → Z = 1
**** Helium (He) has 2 protons → Z = 2
**** Carbon (C) has 6 protons → Z = 6

** Uniqueness of Proton Number <<uniqueness>>
*** Importance of Proton Number <<importance>>
**** Each element has a unique proton number
**** Defines the properties of an element
*** Proton Number & Periodic Table <<periodic_table>>
**** Elements are arranged by atomic number
**** Proton number determines the element's position
*** Examples <<examples>>
**** Carbon (C) → 6 protons
**** Sodium (Na) → 11 protons
**** Nitrogen (N) → 7 protons
**** Oxygen (O) → 8 protons

left side
** Nucleon Number or Atomic Mass <<nucleon_number>>
*** Definition <<definition>>
**** Total number of protons and neutrons
**** Also called mass number
*** Isotopes <<isotopes>>
**** Atoms with same protons but different neutrons
*** Formula <<formula>>
**** No. of neutrons = mass number - atomic number
*** Example 3.1 <<example>>
**** Given: Atomic number = 17, Mass number = 35
**** Protons = Atomic number = 17
**** Neutrons = Mass number - Atomic number = 35 - 17 = 18

** Radioactivity
*** Nuclear Balance
**** Stable Elements
***** Nuclear forces are balanced
**** Unstable Elements
***** Nuclear forces are unbalanced
***** Undergoes radioactive decay
*** Radioactive Decay Process
**** Changes in Nucleus
***** Neutron emission
****** Creates new isotope
***** Proton emission
****** Creates new element
**** Continues until
***** Nuclear forces become balanced
*** Examples

**** Carbon-14
***** Natural Occurrence
****** Present in atmosphere
****** Found in carbon dioxide
***** Incorporation Process
****** Living organisms
******* Take in CO2 from air
******* Absorb both C-14 and C-12
******* Store in tissues
***** Decay Process
****** Radioactive decay occurs
****** Transforms into Nitrogen-14

**** Uranium-238 Decay
***** Radioactive isotope
***** Eventually becomes Lead-206
@endmindmap`}
        />

<iframe width="560" height="315" src="https://www.youtube.com/embed/vxLmv-8ideQ?si=DRAfJN-onZXl2d2d" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

<p>Q16: Discuss atomic number or proton number in detail? </p>
<div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">Atomic Number</h1>
      
      <section>
        <h2 className="text-xl font-semibold text-gray-700">What is it?</h2>
        <p className="text-gray-600">The atomic number tells us how many protons are in an atom. It is also called the proton number.</p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold text-gray-700">Who discovered it?</h2>
        <p className="text-gray-600">Henry Moseley discovered the atomic number in 1913.</p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold text-gray-700">How is it written?</h2>
        <p className="text-gray-600">The atomic number is represented by the symbol <strong>Z</strong>.</p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold text-gray-700">Why is it important?</h2>
        <p className="text-gray-600">Each element has a unique number of protons. If an atom had a different number, it would be a different element.</p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold text-gray-700">Are atoms neutral?</h2>
        <p className="text-gray-600">Yes, because they have the same number of protons (positive) and electrons (negative).</p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold text-gray-700">How are elements arranged?</h2>
        <p className="text-gray-600">Elements in the periodic table are arranged by their atomic number.</p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold text-gray-700">Formula</h2>
        <p className="text-gray-600">Atomic Number (Z) = Number of protons = Number of electrons</p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold text-gray-700">Examples</h2>
        <table className="w-full border border-gray-300 text-gray-700">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">No.</th>
              <th className="border px-4 py-2">Element</th>
              <th className="border px-4 py-2">Symbol</th>
              <th className="border px-4 py-2">Atomic Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">Hydrogen</td>
              <td className="border px-4 py-2">H</td>
              <td className="border px-4 py-2">1</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">Oxygen</td>
              <td className="border px-4 py-2">O</td>
              <td className="border px-4 py-2">8</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">3</td>
              <td className="border px-4 py-2">Sodium</td>
              <td className="border px-4 py-2">Na</td>
              <td className="border px-4 py-2">11</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">4</td>
              <td className="border px-4 py-2">Carbon</td>
              <td className="border px-4 py-2">C</td>
              <td className="border px-4 py-2">6</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">5</td>
              <td className="border px-4 py-2">Helium</td>
              <td className="border px-4 py-2">He</td>
              <td className="border px-4 py-2">2</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">6</td>
              <td className="border px-4 py-2">Chlorine</td>
              <td className="border px-4 py-2">Cl</td>
              <td className="border px-4 py-2">17</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>

    <p>Q17: Discuss uniqueness of proton number. </p>
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Proton Number: What Makes Elements Unique?</h1>
      <p className="text-gray-700 text-lg mb-4">
        Every element has its own special proton number. This number makes it different from all other elements. It also decides where the element goes in the periodic table.
      </p>
      <p className="text-gray-700 text-lg mb-4">
        The periodic table arranges elements by their proton numbers. So, the number of protons helps us find an element&apos;s place in the table. Each element is defined by its proton count.
      </p>
      <h2 className="text-xl font-semibold text-blue-500 mb-3">Examples:</h2>
      <ul className="list-disc list-inside text-gray-700 text-lg">
        <li>An atom with 6 protons is always carbon.</li>
        <li>An atom with 11 protons is always sodium.</li>
        <li>Every nitrogen atom has 7 protons.</li>
        <li>Every oxygen atom has 8 protons.</li>
      </ul>
      <p className="text-gray-700 text-lg mt-4">
        You can always recognize an atom by counting its protons!
      </p>
    </div>
    <p>Q18: Discuss nucleon number or mass number in detail.</p>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Mass Number & Atomic Structure</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center mb-6">
        The mass number of an atom is the total of its protons and neutrons. Electrons are much lighter, so they don’t affect the mass much.
      </p>

      <table className="table-auto border-collapse border border-gray-500 w-full max-w-4xl text-center">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-500 px-4 py-2">Element</th>
            <th className="border border-gray-500 px-4 py-2">Symbol</th>
            <th className="border border-gray-500 px-4 py-2">Atomic Number</th>
            <th className="border border-gray-500 px-4 py-2">Mass Number</th>
            <th className="border border-gray-500 px-4 py-2">Protons</th>
            <th className="border border-gray-500 px-4 py-2">Neutrons</th>
            <th className="border border-gray-500 px-4 py-2">Electrons</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Hydrogen', 'H', 1, 1, 1, 0, 1],
            ['Nitrogen', 'N', 7, 14, 7, 7, 7],
            ['Oxygen', 'O', 8, 16, 8, 8, 8],
            ['Chlorine', 'Cl', 17, 37, 17, 20, 17],
            ['Iron', 'Fe', 26, 58, 26, 32, 26],
            ['Gold', 'Au', 79, 197, 79, 118, 79],
          ].map((el, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-100">
              {el.map((data, i) => (
                <td key={i} className="border border-gray-500 px-4 py-2">{data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    

              </section>

              <p>Determining the number of protons and neutrons in an atom 
Atomic Number of an element is 17 and mass number is 35. How many protons and neutrons are in the nucleus of an atom of this element? 
</p>
      <div className="max-w-md p-6 bg-white rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Finding Protons and Neutrons</h1>
        <p className="text-gray-700 text-lg">
          An element has an atomic number of <strong>17</strong> and a mass number of <strong>35</strong>.
          How many protons and neutrons are in its nucleus?
        </p>
    </div>
    <p>(1) What is the charge of a particle with 19 protons and 18 electrons? </p>
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-lg text-gray-800">
        <h1 className="text-2xl font-bold mb-4">Understanding Net Charge</h1>
        <p className="text-lg mb-2">
          Protons have a positive charge (+1). Electrons have a negative charge (-1).
        </p>
        <p className="text-lg mb-2">
          To find the net charge, subtract the electrons from the protons:
        </p>
        <p className="text-lg font-semibold">19 (protons) - 18 (electrons) = 1</p>
        <p className="text-lg mt-2">
          Since the result is +1, the particle has a net positive charge. This means it is a
          <span className="font-bold"> K⁺ ion (potassium ion).</span>
        </p>
    </div>
    <p>(ii) What is the charge of a particle with 7 protons and 10 electrons? </p>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-xl font-bold text-gray-800">Understanding Net Charge</h1>
        <p className="mt-4 text-gray-700">
          Protons have a positive charge (+1), and electrons have a negative charge (-1).
        </p>
        <p className="mt-2 text-gray-700">
          To find the net charge, subtract the electrons from the protons:
        </p>
        <p className="mt-2 font-semibold text-gray-900">7 protons - 10 electrons = -3</p>
        <p className="mt-2 text-gray-700">
          Since the result is -3, the particle has a negative charge of -3. This is called a <span className="font-semibold">nitride ion (N³⁻)</span>.
        </p>
      </div>
    </div>
    <p>(iii) What is the difference between the mass number and the atomic mass of an element? </p>
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Mass Number vs. Atomic Mass</h1>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Mass Number</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>The mass number is the total weight of an atom&apos;s nucleus.</li>
          <li>It is written in the upper left corner of an element’s symbol.</li>
          <li>It does not consider isotopes; it only focuses on a single atom&apos;s weight.</li>
          <li>It is a whole number without decimals.</li>
          <li>The mass number is easy to use for general purposes.</li>
        </ul>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold">Atomic Mass</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Atomic mass is the average weight of all atoms of an element.</li>
          <li>It is not represented as a symbol.</li>
          <li>It considers isotopes and their natural abundance.</li>
          <li>It includes decimal values because it is a weighted average.</li>
          <li>Atomic mass is useful for precise calculations.</li>
        </ul>
      </div>
    </div>
    <p>Write the names and symbols for the elements with the following atomic numbers: 
a. 1 
b. 11 
c. 19 
d. 82 
e. 35 
f. 47 
g. 15 
h. 2
</p>

<div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold text-center">Chemistry Basics</h1>
      <p className="text-gray-700">Atoms are the building blocks of everything. Each element has a name and a symbol.</p>
      
      <h2 className="text-lg font-semibold">Common Elements and Their Symbols</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>Hydrogen - H</li>
        <li>Sodium - Na</li>
        <li>Potassium - K</li>
        <li>Lead - Pb</li>
        <li>Bromine - Br</li>
        <li>Silver - Ag</li>
        <li>Phosphorus - P</li>
        <li>Helium - He</li>
      </ul>

      <h2 className="text-lg font-semibold">What Are Isotopes?</h2>
      <p className="text-gray-700">Isotopes are different versions of the same element. They have the same chemical properties but different atomic masses.</p>

      <h2 className="text-lg font-semibold">How to Calculate Atomic Mass</h2>
      <p className="text-gray-700">You can find the relative atomic mass of an element by using the mass and abundance of its isotopes.</p>
    </div>
      <div className="p-8 bg-gradient-to-r from-yellow-100 to-orange-200 rounded-lg shadow-xl">
        <h1 className="text-3xl font-extrabold text-orange-800 mb-6">
          3.3 Proton or Atomic Number
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-700 mb-4">
            Identity of an Element
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-semibold text-orange-700 mb-2">
              Proton Number (Atomic Number)
            </h3>
            <ul className="list-disc list-inside text-yellow-900 ml-6">
              <li>Symbol: Z</li>
              <li>Refers to the number of protons in the nucleus</li>
              <li>Determines the identity of an element</li>
              <li>Equal to the number of electrons in a neutral atom</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-700 mb-4">
            Uniqueness of Proton Number
          </h2>
          <ul className="list-disc list-inside text-yellow-900 ml-6">
            <li>Each element has a unique proton number</li>
            <li>
              Determines:
              <ul className="list-disc list-inside text-yellow-900 ml-6">
                <li>Element&apos;sproperties</li>
                <li>Position in the periodic table</li>
              </ul>
            </li>
          </ul>
          <div className="bg-white p-4 rounded-lg shadow-md mt-4">
            <h3 className="text-xl font-semibold text-orange-700 mb-2">
              Examples:
            </h3>
            <ul className="list-disc list-inside text-yellow-900 ml-6">
              <li>Carbon: 6 protons</li>
              <li>Sodium: 11 protons</li>
              <li>Nitrogen: 7 protons</li>
              <li>Oxygen: 8 protons</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-700 mb-4">
            Nucleon Number (Mass Number)
          </h2>
          <ul className="list-disc list-inside text-yellow-900 ml-6">
            <li>Total number of protons and neutrons in an atom</li>
            <li>Calculation: No. of neutrons = mass number - atomic number</li>
            <li>
              Isotopes: Atoms of an element with different numbers of neutrons
            </li>
          </ul>
          <div className="bg-white p-4 rounded-lg shadow-md mt-4">
            <h3 className="text-xl font-semibold text-orange-700 mb-2">
              Example 3.1: Determining Protons and Neutrons
            </h3>
            <p className="text-yellow-900">
              Given:
              <br />
              Atomic number = 17
              <br />
              Mass number = 35
            </p>
            <p className="text-yellow-900">
              Solution:
              <br />
              Number of protons = atomic number = 17
              <br />
              Number of neutrons = mass number - atomic number = 35 - 17 = 18
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-700 mb-4">
            Radioactivity
          </h2>
          <ul className="list-disc list-inside text-yellow-900 ml-6">
            <li>Occurs in elements with unbalanced nuclear forces</li>
            <li>
              Radioactive decay: Process of nucleus decay to become another atom
            </li>
            <li>
              Effects on atomic identity:
              <ul className="list-disc list-inside text-yellow-900 ml-6">
                <li>
                  Neutron emission: Changes to another isotope of the same
                  element
                </li>
                <li>Proton emission: Changes to a different element</li>
              </ul>
            </li>
          </ul>
          <div className="bg-white p-4 rounded-lg shadow-md mt-4">
            <h3 className="text-xl font-semibold text-orange-700 mb-2">
              Examples:
            </h3>
            <ul className="list-disc list-inside text-yellow-900 ml-6">
              <li>Carbon-14 decay to Nitrogen-14</li>
              <li>Uranium-238 decay to Lead-206</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagneticMindmap;
