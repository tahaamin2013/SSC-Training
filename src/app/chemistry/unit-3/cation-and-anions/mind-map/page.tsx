import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Cations and Anions
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
* Cations and Anions
** Cations
*** Definition
**** Positively charged ions
**** Formed when atom loses electrons
*** Characteristics
**** Usually from metal atoms
**** Achieve noble gas configuration
**** More protons than electrons
*** Examples
**** Na+ formation
**** Mg2+ formation
** Anions
*** Definition
**** Negatively charged ions
**** Formed when atom gains electrons
*** Characteristics
**** Usually from non-metal atoms
**** High electron affinity
**** More electrons than protons
*** Examples
**** O2- formation
**** F- formation
** Formation Process
*** Cations
**** Lose valence electrons
**** Electronic configuration changes
*** Anions
**** Gain electrons to complete octet
**** Electronic configuration changes
** Representation Methods
*** Complete electronic configuration
*** Electron dot structure
** Concept Assessment Exercises
*** Cation formation (Li, Al)
*** Anion formation (S, Cl)
@endmindmap`}
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
    :depth(3) {
      BackgroundColor lightPink
    }
}
</style>
* Cations
** Definition
*** Positively charged ions
*** Formed when an atom loses one or more electrons
** Formation
*** Usually formed from metal atoms
*** Metals lose electrons to achieve noble gas configuration
*** Example:
**** Na → Na⁺ + e⁻
**** Mg → Mg²⁺ + 2e⁻
** Charge Acquisition
*** Neutral atoms have equal protons and electrons
*** Losing electrons increases proton count relative to electrons
*** Results in a positive charge
** Electronic Configuration
*** Cations attain noble gas configuration
*** More stable than the neutral atom
** Example 3.1: Formation of Cations
*** Problem Statement
**** Describe the formation of Na⁺ and Mg²⁺ cations
*** Problem Solving Strategy
**** Sodium (Na)
***** Belongs to Group IA
***** Has **one** valence electron
***** Loses **one** electron to achieve an octet
**** Magnesium (Mg)
***** Belongs to Group IIA
***** Has **two** valence electrons
***** Loses **two** electrons to achieve noble gas configuration
*** Solution
**** (a) Formation of Na⁺ Ion
***** Na: 1s² 2s² 2p⁶ 3s¹ (-e) → Na⁺: 1s² 2s² 2p⁶
**** (b) Formation of Mg²⁺ Ion
***** Mg: 1s² 2s² 2p⁶ 3s² (-2e) → Mg²⁺: 1s² 2s² 2p⁶
@endmindmap
        `} />

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
* Anions
** Definition
*** Negatively charged ions
*** Form when an atom **gains** one or more electrons
** Formation Process
*** Atoms with **high electron affinity** attract electrons
*** Gaining electrons helps achieve **noble gas configuration**
*** Number of **electrons > protons**, resulting in **negative charge**
** Example 3.1: Formation of Anions
*** Problem Statement
**** Describe anion formation for:
***** (a) Oxygen (atomic no. 8)
***** (b) Fluorine (atomic no. 9)
*** Problem-Solving Strategy
**** Write **electronic configuration** or **dot structure**
**** Find **electrons needed** to complete **octet**
**** Represent **addition of electrons**
*** Solution
**** (a) Formation of O²⁻ (Oxide Ion)
***** Oxygen belongs to **Group VIA**
***** Has **6 valence electrons**
***** Needs **2 electrons** to achieve noble gas configuration
***** **Reaction:**
****** O 1s² 2s² 2p⁴ **+2e⁻** → O²⁻ 1s² 2s² 2p⁶ (Octet achieved)
**** (b) Formation of F⁻ (Fluoride Ion)
***** Fluorine belongs to **Group VIIA**
***** Has **7 valence electrons**
***** Needs **1 electron** to complete octet
***** **Reaction:**
****** F 1s² 2s² 2p⁵ **+ e⁻** → F⁻ 1s² 2s² 2p⁶ (Octet achieved)
@endmindmap
`}
        />

      </section>
      <div className="p-8 bg-gradient-to-r from-blue-100 to-purple-200 rounded-lg shadow-xl">
    <h1 className="text-3xl font-extrabold text-purple-800 mb-6">3.6 Cations and Anions</h1>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Cations</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Definition and Formation</h3>
            <p className="text-blue-900 mb-4">
                Positively charged ions formed when an atom loses one or more electrons.<br / >
                Usually formed from metal atoms.<br / >
                Aim to achieve a stable electron configuration similar to noble gases.
            </p>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Characteristics</h3>
            <p className="text-blue-900 mb-4">
                Number of protons&lt; Number of electrons, resulting in a positive charge.
            </p>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Example 3.1: Formation of Cations</h3>
            <ul className="list-disc list-inside text-blue-900 ml-6 mb-4">
                <li><strong>Na<sup>+</sup> formation:</strong><br / >
                    Na: 1s² 2s² 2p⁶ 3s¹ → Na<sup>+</sup>: 1s² 2s² 2p⁶
                </li>
                <li><strong>Mg<sup>2+</sup> formation:</strong><br /  >
                    Mg: 1s² 2s² 2p⁶ 3s² → Mg<sup>2+</sup>: 1s² 2s² 2p⁶
                </li>
            </ul>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Problem Solving Strategy for Cation Formation</h3>
            <ol className="list-decimal list-inside text-blue-900 ml-6">
                <li>Identify the element&apos;s  group in the periodic table.</li>
                <li>Determine the number of valence electrons.</li>
                <li>Represent the loss of valence electrons using electronic configuration or electron dot structure.</li>
            </ol>
        </div>
    </div>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Anions</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Definition and Formation</h3>
            <p className="text-blue-900 mb-4">
                Negatively charged ions formed when an atom gains one or more electrons.<br / >
                Usually occurs in atoms with high electron affinity.<br / >
                Aim to achieve a stable electron configuration similar to noble gases.
            </p>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Characteristics</h3>
            <p className="text-blue-900 mb-4">
                Number of electrons &lt; Number of protons, resulting in a negative charge.
            </p>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Example 3.1: Formation of Anions</h3>
            <ul className="list-disc list-inside text-blue-900 ml-6 mb-4">
                <li><strong>O<sup>2-</sup> formation:</strong><br / >
                    O: 1s² 2s² 2p⁴ + 2e⁻ → O<sup>2-</sup>: 1s² 2s² 2p⁶
                </li>
                <li><strong>F<sup>-</sup> formation:</strong><br /  >
                    F: 1s² 2s² 2p⁵ + e⁻ → F<sup>-</sup>: 1s² 2s² 2p⁶
                </li>
            </ul>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Problem Solving Strategy for Anion Formation</h3>
            <ol className="list-decimal list-inside text-blue-900 ml-6">
                <li>Write the electronic configuration or dot structure.</li>
                <li>Determine the number of electrons needed to achieve an octet configuration.</li>
                <li>Represent the addition of electrons.</li>
            </ol>
        </div>
    </div>

    <div>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Concept Assessment Exercises</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-blue-900 ml-6">
                <li><strong>Exercise 3.2:</strong> Describe cation formation for Li and Al.</li>
                <li><strong>Exercise 3.3:</strong> Describe anion formation for S and Cl.</li>
            </ul>
        </div>
    </div>
</div>

    </div>
  );
};

export default MagneticMindmap;