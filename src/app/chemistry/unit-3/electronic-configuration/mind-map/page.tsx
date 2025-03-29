import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
    return (
        <div className="p-8 flex flex-col gap-8">
            <section>
                <h1 className="text-4xl font-bold text-blue-500">ELECTRONIC CONFIGURATION
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
`}
                />

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