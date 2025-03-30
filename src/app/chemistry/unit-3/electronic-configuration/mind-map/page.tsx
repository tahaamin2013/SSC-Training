import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
    const elements = [
        { number: 1, symbol: 'H', name: 'Hydrogen', config: '1s¹' },
        { number: 2, symbol: 'He', name: 'Helium', config: '1s²' },
        { number: 3, symbol: 'Li', name: 'Lithium', config: '1s² 2s¹' },
        { number: 4, symbol: 'Be', name: 'Beryllium', config: '1s² 2s²' },
        { number: 5, symbol: 'B', name: 'Boron', config: '1s² 2s² 2p¹' },
        { number: 6, symbol: 'C', name: 'Carbon', config: '1s² 2s² 2p²' },
        { number: 7, symbol: 'N', name: 'Nitrogen', config: '1s² 2s² 2p³' },
        { number: 8, symbol: 'O', name: 'Oxygen', config: '1s² 2s² 2p⁴' },
        { number: 9, symbol: 'F', name: 'Fluorine', config: '1s² 2s² 2p⁵' },
        { number: 10, symbol: 'Ne', name: 'Neon', config: '1s² 2s² 2p⁶' },
        { number: 11, symbol: 'Na', name: 'Sodium', config: '1s² 2s² 2p⁶ 3s¹' },
        { number: 12, symbol: 'Mg', name: 'Magnesium', config: '1s² 2s² 2p⁶ 3s²' },
        { number: 13, symbol: 'Al', name: 'Aluminum', config: '1s² 2s² 2p⁶ 3s² 3p¹' },
        { number: 14, symbol: 'Si', name: 'Silicon', config: '1s² 2s² 2p⁶ 3s² 3p²' },
        { number: 15, symbol: 'P', name: 'Phosphorus', config: '1s² 2s² 2p⁶ 3s² 3p³' },
        { number: 16, symbol: 'S', name: 'Sulfur', config: '1s² 2s² 2p⁶ 3s² 3p⁴' },
        { number: 17, symbol: 'Cl', name: 'Chlorine', config: '1s² 2s² 2p⁶ 3s² 3p⁵' },
        { number: 18, symbol: 'Ar', name: 'Argon', config: '1s² 2s² 2p⁶ 3s² 3p⁶' }
      ];
    return (
        <div className="p-8 flex flex-col gap-8">
            <section>
                <h1 className="text-4xl font-bold text-blue-500">ELECTRONIC CONFIGURATION</h1>
                <p>Q27: Discuss Electronic Configuration. </p>
                <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold text-center mb-4">Arrangement of Electrons in an Atom</h1>
      <p className="text-lg mb-4">
        Electrons move around the nucleus in different layers, called shells. These shells are like energy levels that hold the electrons. The shells are labeled with numbers and letters:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>1st energy level:</strong> K shell</li>
        <li><strong>2nd energy level:</strong> L shell</li>
        <li><strong>3rd energy level:</strong> M shell</li>
        <li><strong>4th energy level:</strong> N shell</li>
      </ul>
      <p className="text-lg mb-4">
        The shells are arranged in circles around the nucleus. The K shell, with the least energy, is closest to the nucleus. The L shell has more energy and is farther away, and so on. The outermost shell holds the most energy.
      </p>
    </div>

    <div className="p-6 max-w-2xl mx-auto bg-white rounded-2xl shadow-md space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Electronic Configuration</h1>
      <p className="text-gray-700">
        The way electrons are arranged in an atom’s shells is called its electronic configuration.
      </p>
      <h2 className="text-xl font-semibold text-gray-700">How to Write It:</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Find the atomic number (it tells the number of electrons).</li>
        <li>Know the maximum electrons each shell can hold.</li>
      </ul>
      <h2 className="text-xl font-semibold text-gray-700">Electron Limits per Shell:</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Shell</th>
            <th className="border border-gray-300 px-4 py-2">Max Electrons</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">K</td>
            <td className="border border-gray-300 px-4 py-2">2</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">L</td>
            <td className="border border-gray-300 px-4 py-2">8</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">M</td>
            <td className="border border-gray-300 px-4 py-2">18</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">N</td>
            <td className="border border-gray-300 px-4 py-2">32</td>
          </tr>
        </tbody>
      </table>
      <p className="text-gray-700">
        The formula to calculate maximum electrons per shell is <strong>2n²</strong>, where <em>n</em> is the shell number.
      </p>
    </div>
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">Concept of Sub-shell / Sub-Orbit</h1>
      <p className="text-gray-700 mb-4">
        An energy level, or shell, is divided into smaller parts called sub-shells. Research shows that shells contain
        sub-shells, and each sub-shell has orbitals.
      </p>
      <h2 className="text-xl font-semibold mb-2 text-green-600">Maximum Electron Capacity:</h2>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li>2 electrons</li>
        <li>8 electrons</li>
        <li>18 electrons</li>
        <li>32 electrons</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2 text-green-600">Types of Sub-shells:</h2>
      <p className="text-gray-700 mb-4">There are four sub-shells: s, p, d, and f. These stand for:</p>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li><strong>s:</strong> Sharp - Holds up to 2 electrons</li>
        <li><strong>p:</strong> Principal - Holds up to 6 electrons</li>
        <li><strong>d:</strong> Diffused - Holds up to 10 electrons</li>
        <li><strong>f:</strong> Fundamental - Holds up to 14 electrons</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2 text-green-600">Shells & Electron Capacity:</h2>
      <table className="w-full border-collapse border border-gray-300 text-gray-700">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Shell Number (n)</th>
            <th className="border p-2">Shell Name</th>
            <th className="border p-2">Max Electrons</th>
            <th className="border p-2">Sub-shells</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">K</td>
            <td className="border p-2">2</td>
            <td className="border p-2">1s</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">L</td>
            <td className="border p-2">8</td>
            <td className="border p-2">2s, 2p</td>
          </tr>
          <tr>
            <td className="border p-2">3</td>
            <td className="border p-2">M</td>
            <td className="border p-2">18</td>
            <td className="border p-2">3s, 3p, 3d</td>
          </tr>
          <tr>
            <td className="border p-2">4</td>
            <td className="border p-2">N</td>
            <td className="border p-2">32</td>
            <td className="border p-2">4s, 4p, 4d, 4f</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-4">Electronic Configuration of First 18 Elements</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 bg-white">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Atomic No.</th>
              <th className="border p-2">Symbol</th>
              <th className="border p-2">Element</th>
              <th className="border p-2">Configuration</th>
            </tr>
          </thead>
          <tbody>
            {elements.map((el) => (
              <tr key={el.number} className="odd:bg-gray-50 even:bg-white">
                <td className="border p-2 text-center">{el.number}</td>
                <td className="border p-2 text-center font-bold">{el.symbol}</td>
                <td className="border p-2">{el.name}</td>
                <td className="border p-2">{el.config}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 p-4 bg-white border border-gray-300 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Aufbau Principle</h2>
        <p>The Aufbau principle states that electrons are added to orbitals in order of increasing energy levels. The order is:</p>
        <p className="font-mono bg-gray-200 p-2 rounded">1s &lt; 2s &lt; 2p &lt; 3s &lt; 3p &lt; 4s &lt; 3d &lt; 4p &lt; 5s &lt; 4d &lt; 5p</p>
        <p>This principle helps determine the electron configuration of an atom in its ground state.</p>
      </div>
    </div>

















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
* Electronic Configuration
** Shells
*** Defined by Bohr’s atomic theory
*** Electrons revolve in circular paths (shells/orbits)
*** Each shell has **fixed energy** (energy level)
*** **Shell notation:**
**** n = 1 → **K shell**
**** n = 2 → **L shell**
**** n = 3 → **M shell**
**** As **n increases** → Energy & distance from nucleus increase
** Sub-Shells
*** Shells are subdivided into **sub-shells (sub-energy levels)**
*** **Notation:**
**** **K shell (n = 1):** 1s
**** **L shell (n = 2):** 2s, 2p
**** **M shell (n = 3):** 3s, 3p, 3d
**** **N shell (n = 4):** 4s, 4p, 4d, 4f
*** **Electron Capacity:**
**** **s-sub-shell:** max **2** electrons
**** **p-sub-shell:** max **6** electrons
**** **d-sub-shell:** max **10** electrons
**** **f-sub-shell:** max **14** electrons
*** **Energy order of sub-shells:**
**** 1s < 2s < 2p < 3s < 3p < 4s < 3d ...
*** **The arrangement of electrons in sub-shells is called the electronic configuration.**
left side
** Aufbau Principle
*** **Electrons fill the lowest energy sub-shells first**
*** **Filling Order:** 
**** **1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → 7s → 5f → 6d → 7p**
** Symbols for Atoms and Ions
*** Definition
**** The symbol for an atom represents the element.
**** Consists of:
***** **Element symbol** (one or two letters)
***** **Mass number** (left superscript)
***** **Atomic number** (left subscript)
***** **Charge** (right superscript)
*** Example: Magnesium Ion (Mg²⁺)
**** **Symbol:** ²⁴₁₂Mg²⁺
**** **Explanation:**
***** **Mg** represents Magnesium.
***** **Upper left (24):** Mass number.
***** **Lower left (12):** Atomic number.
***** **Upper right (+2):** Charge.
**** The atomic number is often omitted.

@endmindmap
`}  />

<iframe width="560" height="315" src="https://www.youtube.com/embed/UYFkGGkDzpw?si=FyumDIio44jNbWYf" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            </section>
            <div className="p-8 bg-gradient-to-r from-green-100 to-yellow-200 rounded-lg shadow-xl">
                <h1 className="text-3xl font-extrabold text-yellow-800 mb-6">3.7 Electronic Configuration</h1>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">Shells</h2>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-green-600 mb-2">Definition</h3>
                        <p className="text-green-900 mb-4">
                            Based on Bohr&apos;s  atomic theory, shells are circular paths where electrons revolve around the nucleus. Each shell has fixed energy, described by the quantum number <i>n</i> (n = 1, 2, 3, ...). As <i>n</i> increases, the distance from the nucleus and the energy of the shell increase.
                        </p>
                        <h3 className="text-xl font-semibold text-green-600 mb-2">Nomenclature</h3>
                        <ul className="list-disc list-inside text-green-900 ml-6 mb-4">
                            <li><strong>n = 1:</strong> K shell</li>
                            <li><strong>n = 2:</strong> L shell</li>
                            <li><strong>n = 3:</strong> M shell</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">Sub-Shells</h2>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-green-600 mb-2">Definition and Distribution</h3>
                        <p className="text-green-900 mb-4">
                            Sub-shells are subdivisions of shells or energy levels. They are represented by combining the <i>n</i> value and sub-shell symbol.
                        </p>
                        <ul className="list-disc list-inside text-green-900 ml-6 mb-4">
                            <li><strong>K shell (n = 1):</strong> 1s</li>
                            <li><strong>L shell (n = 2):</strong> 2s, 2p</li>
                            <li><strong>M shell (n = 3):</strong> 3s, 3p, 3d</li>
                            <li><strong>N shell (n = 4):</strong> 4s, 4p, 4d, 4f</li>
                        </ul>
                        <h3 className="text-xl font-semibold text-green-600 mb-2">Electron Capacity and Energy Order</h3>
                        <ul className="list-disc list-inside text-green-900 ml-6 mb-4">
                            <li><strong>s sub-shell:</strong> 2 electrons</li>
                            <li><strong>p sub-shell:</strong> 6 electrons</li>
                            <li><strong>d sub-shell:</strong> 10 electrons</li>
                            <li><strong>f sub-shell:</strong> 14 electrons</li>
                        </ul>
                        <p className="text-green-900 mb-4">
                            Energy order: 1s &lt; 2s &lt; 2p &lt; 3s &lt; 3p &lt; 4s &lt; 3d ...
                        </p>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">Electronic Configuration</h2>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-green-600 mb-2">Definition</h3>
                        <p className="text-green-900 mb-4">
                            Electronic configuration refers to the arrangement of electrons in sub-shells. It follows the Auf Bau Principle, which states that electrons fill the lowest energy sub-shells first.
                        </p>
                        <h3 className="text-xl font-semibold text-green-600 mb-2">Symbols for Atoms and Ions</h3>
                        <p className="text-green-900 mb-4">
                            Format: [Mass number][Element symbol][Charge][Atomic number]. For example: Mg<sub>12</sub><sup>24</sup><sup>2+</sup> (Magnesium with mass number 24, charge +2, atomic number 12).
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">Key Points</h2>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <ul className="list-disc list-inside text-green-900 ml-6 mb-4">
                            <li>Rutherford&apos;s  planetary model: Nucleus (protons) surrounded by electrons.</li>
                            <li>Bohr&apos;s  model: Electrons in fixed circular orbits (shells).</li>
                            <li>Isotopes: Atoms with the same number of protons but different numbers of neutrons.</li>
                            <li>Uranium isotope: Used in nuclear reactors and atomic bombs.</li>
                            <li>Radioactive isotopes: Various applications in science and medicine.</li>
                            <li>Electronic configuration: Arrangement of electrons in sub-shells.</li>
                            <li>Auf Bau Principle: Electrons fill lowest energy levels first.</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">References</h2>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <ul className="list-disc list-inside text-green-900 ml-6">
                            <li>B. Earl and LDR Wilford, &quot;Introduction to Advanced Chemistry&quot;</li>
                            <li>Iain Brand and Richard Grime, &quot;Chemistry (11-14)&quot;</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MagneticMindmap;