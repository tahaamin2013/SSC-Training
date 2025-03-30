import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Cations and Anions
        </h1> 
        <p>Q26: Describe the process by which positive (cation) and negative (anions) are formed from atoms, including the role of electrons in this transformation? </p>
        <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Cations & Anions</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">What is a Cation?</h2>
        <p className="text-gray-600 mt-2">
          A cation is a positively charged ion. It forms when an atom loses one or more electrons.
          Since protons remain the same, the atom gets a net positive charge.
        </p>

        <h3 className="text-lg font-medium text-gray-700 mt-4">Example: Sodium (Na)</h3>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Sodium atom (Na) has 11 protons and 11 electrons (neutral charge).</li>
          <li>It loses one electron, becoming Na⁺ with 11 protons and 10 electrons.</li>
          <li>Since protons are more than electrons, Na⁺ has a +1 charge.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700">What is an Anion?</h2>
        <p className="text-gray-600 mt-2">
          An anion is a negatively charged ion. It forms when an atom gains extra electrons,
          making electrons more than protons.
        </p>

        <h3 className="text-lg font-medium text-gray-700 mt-4">Example: Chlorine (Cl)</h3>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Chlorine atom (Cl) has 17 protons and 17 electrons (neutral charge).</li>
          <li>It gains one extra electron, becoming Cl⁻ with 17 protons and 18 electrons.</li>
          <li>Since electrons are more than protons, Cl⁻ has a -1 charge.</li>
        </ul>
      </section>
    </div>

    <h1 className="text-xl font-bold mt-4">Formation of Cations</h1>
        <p>Describe the formation of Na<sup>+</sup> + and Mg<sup>2+</sup> cations. </p>
        <h2 className="text-lg font-semibold text-blue-600">(a) Formation of Na<sup>+</sup> ion:</h2>
        <p className="text-gray-700 mb-4">
            Na: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup> → Na<sup>+</sup>: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup>
        </p>
        
        <h2 className="text-lg font-semibold text-blue-600">(b) Formation of Mg<sup>2+</sup> ion:</h2>
        <p className="text-gray-700">
            Mg: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> → Mg<sup>2+</sup>: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup>
        </p>

        <p className="mt-6 mb-6">
        Describe the formation of cations for the following metal atoms  <br />
(a) Li (atomic no 3)  <br />
(b) Al (atomic no 13) 

        </p>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
    Formation of <span className="text-blue-600">L i<sup>+</sup></span> and <span className="text-green-600">A l<sup>3+</sup></span> Cations
  </h2>
  
  <h3 className="text-lg font-semibold text-blue-600">(a) Formation of Li<sup>+</sup> ion:</h3>
  <p className="text-gray-700 mb-4">
    Li: 1s<sup>2</sup> 2s<sup>1</sup> → Li<sup>+</sup>: 1s<sup>2</sup>
  </p>
  
  <h3 className="text-lg font-semibold text-green-600">(b) Formation of Al<sup>3+</sup> ion:</h3>
  <p className="text-gray-700">
    Al: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>1</sup> → Al<sup>3+</sup>: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup>
  </p>

  <p className="mt-6 mb-6">
  Describe the formation of anions for the following non-metal atoms.. <br />
(a) oxygen (atomic no.8) <br />
(b) Fluorine (atomic no 9)  </p>
<div className="max-w-lg p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-xl font-bold mb-4">Formation of Anions</h1>
        
        <h2 className="text-lg font-semibold text-blue-600">(a) Formation of anion by oxygen atom:</h2>
        <p className="text-gray-700 mb-4">
            Oxygen belongs to Group VIA on the periodic table. It has six electrons in its valence shell and needs two electrons to achieve noble gas configuration.
            <br/>
            O: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup> + 2e<sup>-</sup> → O<sup>2-</sup>: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> (octet)
        </p>
        
        <h2 className="text-lg font-semibold text-green-600">(b) Formation of anion by fluorine atom:</h2>
        <p className="text-gray-700">
            Fluorine belongs to Group VIIA on the periodic table. It has seven electrons in its valence shell and requires one electron to complete its octet.
            <br/>
            F: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>5</sup> + 1e<sup>-</sup> → F<sup>-</sup>: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> (octet)
        </p>
        <p>
        Describe the formation of anions for the following non-metal atoms.  <br />
(a) Sulphur (atomic no.16).  <br />
(b) Chlorine (atomic no.17) 
        </p>

        <div className="max-w-lg p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-xl font-bold mb-4">Formation of Sulfur and Chlorine Anions</h1>
        
        <h2 className="text-lg font-semibold text-yellow-600">(a) Sulfur (Atomic No. 16):</h2>
        <p className="text-gray-700 mb-4">
            S + 2e<sup>-</sup> → S<sup>2-</sup>
            <br />
            Sulfur Electron Configuration:
            <br />
            S: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>4</sup>
            <br />
            S<sup>2-</sup>: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup>
        </p>
        
        <h2 className="text-lg font-semibold text-green-600">(b) Chlorine (Atomic No. 17):</h2>
        <p className="text-gray-700">
            Cl + 1e<sup>-</sup> → Cl<sup>-</sup>
            <br />
            Chlorine Electron Configuration:
            <br />
            Cl: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>5</sup>
            <br />
            Cl<sup>-</sup>: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup>
        </p>
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

        <iframe width="560" height="315" src="https://www.youtube.com/embed/HZL1i_2qGZU?si=yp9UQ-WcpUDgoB8X" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

      </section>

      <p>Q28: How can we assign symbols for atoms and ions? </p>
      <div className="p-6 max-w-2xl mx-auto bg-white rounded-2xl shadow-lg">
      <h1 className="text-xl font-bold mb-4">Symbols for Atoms and Ions</h1>
      <p className="mb-4">
        Atoms and ions are represented by symbols. These symbols use one or two letters. They may also have numbers:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>A mass number at the top left</li>
        <li>An atomic number at the bottom left</li>
        <li>A charge at the top right</li>
      </ul>
      <p className="mb-4">
        For example, the symbol for a magnesium ion (Mg²⁺) has:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Mass number: 24 (upper left)</li>
        <li>Atomic number: 12 (lower left)</li>
        <li>Charge: +2 (upper right)</li>
      </ul>
      <h2 className="text-lg font-semibold mb-2">Student Learning Outcome</h2>
      <ul className="list-disc list-inside">
        <li>Radioactivity can change the number of protons and the identity of an atom.</li>
        <li>Some isotopes are radioactive.</li>
        <li>Isotopes are useful in carbon dating and medical imaging.</li>
      </ul>
    </div>
  
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