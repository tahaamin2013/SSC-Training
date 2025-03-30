import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  function calculateAtomicMass() {
    return (
      [
        { mass: 12, abundance: 98.8 },
        { mass: 13, abundance: 1.1 },
        { mass: 14, abundance: 0.009 },
      ].reduce(function (sum, iso) {
        return sum + iso.mass * iso.abundance;
      }, 0) / 100
    ).toFixed(5);
  }
  const isotopes = [
    {
      element: 'Hydrogen',
      data: [
        { name: 'Protium', protons: 1, neutrons: 0, electrons: 1, abundance: '99.985%' },
        { name: 'Deuterium', protons: 1, neutrons: 1, electrons: 1, abundance: '0.015%' },
        { name: 'Tritium', protons: 1, neutrons: 2, electrons: 1, abundance: 'Very rare' },
      ],
    },
    {
      element: 'Carbon',
      data: [
        { name: 'Carbon-12', protons: 6, neutrons: 6, electrons: 6, abundance: '98.9%, stable' },
        { name: 'Carbon-13', protons: 6, neutrons: 7, electrons: 6, abundance: '~1.1%, stable' },
        { name: 'Carbon-14', protons: 6, neutrons: 8, electrons: 6, abundance: 'Trace, unstable' },
      ],
    },
    {
      element: 'Oxygen',
      data: [
        { name: 'Oxygen-16', protons: 8, neutrons: 8, electrons: 8 },
        { name: 'Oxygen-17', protons: 8, neutrons: 9, electrons: 8 },
        { name: 'Oxygen-18', protons: 8, neutrons: 10, electrons: 8 },
      ],
    },
    {
      element: 'Chlorine',
      data: [
        { name: 'Chlorine-35', protons: 17, neutrons: 18, electrons: 17, abundance: '75.53%' },
        { name: 'Chlorine-37', protons: 17, neutrons: 20, electrons: 17, abundance: '24.47%' },
      ],
    },
    {
      element: 'Uranium',
      data: [
        { name: 'Uranium-234', protons: 92, neutrons: 142, electrons: 92, abundance: '0.05%' },
        { name: 'Uranium-235', protons: 92, neutrons: 143, electrons: 92, abundance: '0.75%' },
        { name: 'Uranium-238', protons: 92, neutrons: 146, electrons: 92, abundance: '99.245%' },
      ],
    },
  ];
  
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">ISOTOPES</h1>
        <p>
        Q20: Define isotopes. Discuss isotopes of Hydrogen, Carbon, Chlorine,
        and Uranium?
        </p>
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl text-gray-900">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Isotopes</h1>
      
      <h2 className="text-xl font-semibold text-gray-700">Word History</h2>
      <p className="mb-4">The word &quot;isotope&quot; comes from Greek: &quot;isos&quot; meaning equal and &quot;topos&quot; meaning place. This refers to their position in the periodic table.</p>
      
      <h2 className="text-xl font-semibold text-gray-700">Discovery</h2>
      <p className="mb-4">In 1913, a scientist named Soddy discovered isotopes. He won the Nobel Prize in Chemistry in 1921 for this discovery.</p>
      
      <h2 className="text-xl font-semibold text-gray-700">Definition</h2>
      <p className="mb-4">Isotopes are different forms of the same element. They have the same atomic number but different mass numbers.</p>
      
      <h2 className="text-xl font-semibold text-gray-700">Explanation</h2>
      <p className="mb-4">Since isotopes have the same number of protons and electrons, their chemical properties remain the same. However, they have different numbers of neutrons, which affects their mass.</p>
      
      <p className="mb-4">Because of these mass differences, their physical properties like density, melting point, and boiling point can vary.</p>
      <h1 className="text-2xl font-bold text-center mb-6">Isotopes of Elements</h1>
      {isotopes.map((iso, index) => (
        <div key={index} className="mb-6 p-4 border rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">{iso.element}</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Protons</th>
                <th className="border px-4 py-2">Neutrons</th>
                <th className="border px-4 py-2">Electrons</th>
                <th className="border px-4 py-2">Abundance</th>
              </tr>
            </thead>
            <tbody>
              {iso.data.map((item, i) => (
                <tr key={i} className="odd:bg-white even:bg-gray-100">
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">{item.protons}</td>
                  <td className="border px-4 py-2">{item.neutrons}</td>
                  <td className="border px-4 py-2">{item.electrons}</td>
                  <td className="border px-4 py-2">{'abundance' in item ? item.abundance.toString() : 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
    <p>Q21: How does the discovery of isotopes contradicted Dalton&apos;s atomic theory? </p>
      <div className="w-full p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">Dalton&apos;s Atomic Theory</h1>
        <p className="text-gray-700 text-lg">
          Dalton&apos;s atomic theory said that all atoms of an element are the same in mass and properties.
          But later, scientists found isotopes. Isotopes are atoms of the same element with different masses.
          This happens because they have different numbers of neutrons. For example, carbon-12 and carbon-14 are
          both carbon atoms but have different masses. This discovery changed Dalton&apos;s theory. Now, we know that
          atoms of the same element can have different masses but still act the same in chemical reactions.
        </p>
    </div>
    <p>Q22: Give comparison of ordinary water and heavy water.     </p>
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold text-center mb-4">Comparison of Ordinary Water and Heavy Water</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Property</th>
            <th className="border border-gray-300 px-4 py-2">Ordinary Water (H₂O)</th>
            <th className="border border-gray-300 px-4 py-2">Heavy Water (D₂O)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Chemical Composition</td>
            <td className="border border-gray-300 px-4 py-2">H₂O (Hydrogen, Oxygen)</td>
            <td className="border border-gray-300 px-4 py-2">D₂O (Deuterium, Oxygen)</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">Hydrogen Isotope</td>
            <td className="border border-gray-300 px-4 py-2">Protium (H)</td>
            <td className="border border-gray-300 px-4 py-2">Deuterium (D)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Molecular Weight</td>
            <td className="border border-gray-300 px-4 py-2">18 g/mol</td>
            <td className="border border-gray-300 px-4 py-2">20 g/mol</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">Density</td>
            <td className="border border-gray-300 px-4 py-2">1 g/cm³</td>
            <td className="border border-gray-300 px-4 py-2">1.1 g/cm³</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Boiling Point</td>
            <td className="border border-gray-300 px-4 py-2">100°C (212°F)</td>
            <td className="border border-gray-300 px-4 py-2">101.4°C (214.5°F)</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">Freezing Point</td>
            <td className="border border-gray-300 px-4 py-2">0°C (32°F)</td>
            <td className="border border-gray-300 px-4 py-2">3.8°C (38.8°F)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Uses</td>
            <td className="border border-gray-300 px-4 py-2">General Purpose</td>
            <td className="border border-gray-300 px-4 py-2">Nuclear Reactors, Research</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>  <p className="mb-4">
        Uranium has three isotopes with mass numbers <strong>234, 235, and 238</strong>. Among these, the
        <strong> ²³⁵U </strong> isotope is used in nuclear reactors and atomic bombs, whereas <strong> ²³⁸U </strong> lacks
        the necessary properties for such applications. The <strong> ²³⁵U </strong> isotope is relatively rare.
      </p>
      <p className="mb-4 font-semibold">The natural abundance of Uranium isotopes is as follows:</p>
      <ul className="list-disc pl-6 mb-4">
        <li><strong> ²³⁴U </strong> = <span className="text-blue-600">0.009%</span></li>
        <li><strong> ²³⁵U </strong> = <span className="text-blue-600">0.72%</span></li>
        <li><strong> ²³⁸U </strong> = <span className="text-blue-600">99.27%</span></li>
      </ul>
      <p className="mb-4 font-semibold">Fill in the blanks:</p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="mb-2">1. <strong>²³⁴U</strong> has <span className="text-red-500">___</span> protons, <span className="text-red-500">___</span> electrons, and <span className="text-red-500">___</span> neutrons.</p>
        <p className="mb-2">2. <strong>²³⁵U</strong> has <span className="text-red-500">___</span> protons, <span className="text-red-500">___</span> electrons, and <span className="text-red-500">___</span> neutrons.</p>
        <p className="mb-2">3. <strong>²³⁸U</strong> has <span className="text-red-500">___</span> protons, <span className="text-red-500">___</span> electrons, and <span className="text-red-500">___</span> neutrons.</p>
      </div></p>
      <p>
        ANS:
      U-234: 92 protons, 92 electrons, 142 neutrons <br />

U-235: 92 protons, 92 electrons, 143 neutrons<br />

U-238: 92 protons, 92 electrons, 146 neutrons<br />
      </p>


      <p className="mt-6">Q29: Write a note on radioactivity and how the identity of an element chan,, by radioactivity? </p>
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Radioactivity</h1>
      <p className="text-gray-700 mb-4">
        Radioactivity ek process hai jisme kuch elements apni energy loose karte hain aur radiation nikalte hain. Yeh
        naturally hota hai uranium aur thorium jaise elements mein, ya artificially nuclear reactions se.
      </p>
      
      <h2 className="text-xl font-semibold text-blue-600 mb-2">Radioactive Decay</h2>
      <p className="text-gray-700 mb-2">Teen tareeqe ke radioactive decay hote hain:</p>
      <ul className="list-disc pl-5 text-gray-700 mb-4">
        <li><strong>Alpha Decay:</strong> Alpha particle (helium nucleus) nikalta hai. Isse atomic number 2 kam hota hai aur mass number 4 kam hota hai.</li>
        <li><strong>Beta Decay:</strong> Ek electron ya positron nikalta hai. Isse atomic number 1 zyada ya kam hota hai.</li>
        <li><strong>Gamma Decay:</strong> High-energy gamma rays nikalti hain, lekin atomic number aur mass number nahi badalte.</li>
      </ul>
      
      <h2 className="text-xl font-semibold text-blue-600 mb-2">Radioactivity Element Ko Kaise Change Karti Hai?</h2>
      <p className="text-gray-700 mb-2">Jab ek atom radiation emit karta hai, to iska atomic number badal sakta hai. Isse ek element doosre element mein badal sakta hai.</p>
      <ul className="list-disc pl-5 text-gray-700 mb-4">
        <li><strong>Alpha Decay:</strong> Atomic number 2 kam ho jata hai, aur mass number 4 kam hota hai. <br /> <span className="text-blue-600">Example: Uranium-238 → Thorium-234 + Alpha particle</span></li>
        <li><strong>Beta Decay:</strong> Atomic number 1 badhta ya kam hota hai. <br /> <span className="text-blue-600">Example: Carbon-14 → Nitrogen-14 + Beta particle</span></li>
        <li><strong>Gamma Decay:</strong> Koi change nahi hota, sirf energy release hoti hai.</li>
      </ul>



      <h1 className="text-2xl font-bold mb-4">Second Answer</h1>
      <p className="mb-4 text-gray-700">
        The proton number decides which element it is. Normally, forces in the nucleus are balanced.
        But sometimes, they aren't. When that happens, the atom's nucleus breaks down and changes into
        another atom. This process is called radioactive decay, and we call this behavior radioactivity.
      </p>
      <p className="mb-4 text-gray-700">
        This continues until the nucleus becomes stable. When an atom loses a neutron, it turns into a
        different isotope. If it loses a proton, it becomes a different element. This means radioactivity
        can change an atom’s identity.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Examples:</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          <strong>Carbon-14:</strong> A radioactive form of carbon found in the air. Living things absorb
          carbon-14 and carbon-12. Over time, carbon-14 turns into nitrogen-14.
        </li>
        <li>
          <strong>Uranium-238:</strong> A radioactive form of uranium. It slowly changes and finally becomes
          stable lead-206.
        </li>
      </ul>
    </div>

    <p>
    Q30: What is Carbon dating?  <br />
OR  <br />
Explain how, through carbon dating scientists determine the age of ancient artifacts or human remains? 
    </p>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-2xl bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Carbon Dating</h1>
        
        <h2 className="text-xl font-semibold mb-2 text-gray-700">What is Carbon Dating?</h2>
        <p className="text-gray-600 mb-4">
          Carbon dating is a way to find out how old things made from once-living materials are. It works for items up to 50,000 years old.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-gray-700">How Does It Work?</h2>
        <p className="text-gray-600 mb-2">
          Cosmic rays from space hit the Earth's atmosphere every day. These rays create tiny particles called neutrons. When these neutrons hit nitrogen in the air, they turn into carbon-14. This carbon-14 mixes with oxygen to make carbon dioxide.
        </p>
        <p className="text-gray-600 mb-2">
          Plants take in this carbon dioxide during photosynthesis. Animals and humans eat these plants, so they also take in carbon-14. The amount of carbon-14 in living things stays the same.
        </p>
        <p className="text-gray-600 mb-4">
          But when an organism dies, it stops taking in carbon-14. Over time, carbon-14 slowly turns into nitrogen-14. Scientists can measure the amount of carbon-14 left in a sample. This helps them find out how old it is.
        </p>

        <p className="text-gray-700 font-semibold">Carbon dating is a powerful tool for studying the past!</p>
      </div>
    </div>

    <p>Q31: Write a note on how radio isotopes use in medical imaging technology along applications of different isotopes? </p>
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Radioisotopes in Medical Imaging</h1>
      <p className="text-gray-700 mb-4">
        Radioisotopes help doctors see inside the body. They allow for accurate disease diagnosis and treatment.
      </p>
      
      <h2 className="text-xl font-semibold text-blue-600 mb-2">Common Uses:</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li><strong>PET Scans:</strong> F-18 for cancer, O-15 for brain studies, N-13 for heart scans.</li>
        <li><strong>SPECT Scans:</strong> Tc-99m for bones, I-131 for thyroid, Ga-67 for infection detection.</li>
        <li><strong>Radiation Therapy:</strong> I-125 and Ir-192 for treating cancer.</li>
        <li><strong>Bone Scans:</strong> Tc-99m for bone cancer diagnosis.</li>
        <li><strong>Thyroid Scans:</strong> I-123 for thyroid function tests.</li>
      </ul>
      
      <h2 className="text-xl font-semibold text-blue-600 mb-2">How It Works:</h2>
      <ol className="list-decimal list-inside text-gray-700 mb-4">
        <li>Radioisotopes attach to specific body parts.</li>
        <li>They emit radiation, captured by imaging tools.</li>
        <li>Doctors analyze images to diagnose conditions.</li>
      </ol>
      
      <h2 className="text-xl font-semibold text-blue-600 mb-2">Why It’s Beneficial:</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Quick and painless.</li>
        <li>Detects diseases early.</li>
        <li>Highly accurate results.</li>
        <li>Helps doctors plan the best treatments.</li>
      </ul>
      
      <h2 className="text-xl font-semibold text-blue-600 mb-2">Interesting Fact:</h2>
      <p className="text-gray-700">
        Gamma rays are best for imaging because they pass through the body easily, creating clear pictures. Alpha and beta particles don’t travel far, making them less useful.
      </p>
    </div>
    <p className="mt-5">Q32: Discuss some differences between chemical reaction and nuclear reactions? </p>
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Chemical and Nuclear Reactions</h1>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Chemical Reactions</h2>
        <p>
          In chemical reactions, atoms stay the same because their atomic numbers do not change. 
          Usually, only the outer electrons take part in these reactions.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Nuclear Reactions</h2>
        <p>
          In nuclear reactions, atoms change since the number of protons and neutrons shifts. 
          This affects both atomic number and mass. 
        </p>
        <p>
          These reactions involve protons and neutrons. The outer electrons do not matter here.
        </p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-2">Exam Resources</h2>
        <p>
          Since NBF and Cantab books are both recommended for FBISE students, exercises from both 
          books are included. This helps students understand concepts from different textbooks used in Pakistan. 
        </p>
        <p>
          These resources also assist with SLO-based exam preparation.
        </p>
      </section>
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
* Isotopes
** Definition
*** Same atomic number, different mass numbers
*** Same number of protons, different number of neutrons
** Origin of the Word Isotope
*** First used by Soddy
*** Derived from Greek
**** "Isos" means same
**** "Tope" means place
** Characteristics
*** Chemically alike
*** Differ in physical properties
*** Contradicts Dalton's atomic theory
**** Dalton stated that all atoms of an element are identical
**** Isotopes have different masses but are the same element
**** This disproves Dalton's assumption
@endmindmap
`}
        />
        <div className="flex flex-row gap-5 justify-center items-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/PFjUhp9PnmA?si=29pUyNx6d1UdlR8y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rQISd1kiZXs?si=ZfhBjdZIZqtYiTZr" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/MKmOc7AVwwQ?si=DW_yz7WiH31-JB4E" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        </div>

        <PlantUMLDiagram
          code={`@startmindmap
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
* Isotopes of Hydrogen & Carbon
** Hydrogen
*** Hydrogen-1 (Protium)
**** No neutron
**** Most abundant (99.99%)
**** Symbol: ¹₁H
**** Properties:
***** Colourless, odourless, tasteless gas
***** Insoluble in water
***** Highly inflammable
*** Hydrogen-2 (Deuterium)
**** One neutron
**** Symbol: ²₁H
**** Found in heavy water
**** Hydrogen-2 (Deuterium): 0.0015%
*** Hydrogen-3 (Tritium)
**** Two neutrons
**** Symbol: ³₁H
**** Radioactive and rare
**** Not found naturally due to unstable nucleus
*** Effects of Isotopes
**** Affect molecular mass
**** Change physical properties
***** Example: Heavy water (D₂O) has a higher boiling and melting point than ordinary water (H₂O)
***** Example: Deuterium gas (D₂) is denser than hydrogen gas (H₂)
**** Do not change chemical properties
***** Example: Carbon-12 and Carbon-14 both form CO₂ with oxygen
***** Example: Chlorine-35 and Chlorine-37 both react with sodium to form NaCl
*** Heavy Water vs. Ordinary Water
**** Heavy water contains deuterium instead of protium
**** Property comparison:
***** **Melting Point:** 0.00°C (Ordinary) | 3.81°C (Heavy)
***** **Boiling Point:** 100°C (Ordinary) | 101.2°C (Heavy)
***** **Density at 25°C:** 0.99701 g/cm³ (Ordinary) | 1.1044 g/cm³ (Heavy)

left side

** Carbon
*** Overview
**** Carbon has three isotopes
**** Almost all carbon is Carbon-12
**** Different forms are black or greyish-black solids (except diamond)
**** Odourless and tasteless
**** High melting and boiling points
**** Insoluble in water
*** Carbon-12
**** Symbol: ¹²₆C
**** 6 protons
**** 6 neutrons
**** Most abundant (98.8%)
*** Carbon-13
**** Symbol: ¹³₆C
**** 6 protons
**** 7 neutrons
**** Natural abundance: 1.1%
*** Carbon-14
**** Symbol: ¹⁴₆C
**** 6 protons
**** 8 neutrons
**** Radioactive
**** Natural abundance: 0.009%
@endmindmap
`}
        />

<div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Q23: Calculate the Relative Atomic Mass of Carbon</h2>
      <p className="mb-4">
        The relative atomic mass of an element can be calculated from the relative masses of its isotopes and their relative
        abundance.
      </p>
      <p className="mb-4 font-semibold">Natural abundance of isotopes of carbon is as follows:</p>
      <ul className="list-disc pl-6 mb-4">
        <li><strong> ¹²C </strong> = <span className="text-blue-600">98.8%</span></li>
        <li><strong> ¹³C </strong> = <span className="text-blue-600">1.1%</span></li>
        <li><strong> ¹⁴C </strong> = <span className="text-blue-600">0.009%</span></li>
      </ul>
      <p className="mb-4 font-semibold">Solution:</p>
      <p className="mb-4">
        The relative atomic mass is a weighted average of all the naturally occurring isotopes of an element, taking into
        consideration their natural abundance. The general formula used is:
      </p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="mb-2">Relative atomic mass of element = (atomic mass × abundance) / 100</p>
      </div>
      <p className="mt-4">Substituting values:</p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p>Relative atomic mass of C = (98.8 × 12 + 1.1 × 13 + 0.009 × 14) / 100</p>
        <p>= (1185.6 + 14.3 + 0.126) / 100</p>
        <p>= <strong>12.00026 amu</strong></p>
      </div>
    </div>

    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Calculate the Isotopic Mass of B</h2>
      <p className="mb-4">
        The relative atomic mass of an element is <strong>35.5 amu</strong>. The relative abundance of isotope A is <strong>75.77%</strong> with an isotopic mass of <strong>35</strong>. 
        Find the isotopic mass of isotope B if its relative abundance is <strong>24.23%</strong>.
      </p>
      <p className="mb-4 font-semibold">Solution:</p>
      <p>Let the isotopic mass of B be <strong>m<sub>B</sub></strong>. We use the formula:</p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p>Relative atomic mass = (atomic mass × abundance) / 100</p>
      </div>
      <p className="mt-4">Substituting the given values:</p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p>35.5 = ((35 × 75.77) + (m<sub>B</sub> × 24.23)) / 100</p>
        <p>35.5 = (2652 + 24.23m<sub>B</sub>) / 100</p>
        <p>Multiplying both sides by 100:</p>
        <p>3550 = 2652 + 24.23m<sub>B</sub></p>
        <p>24.23m<sub>B</sub> = 3550 - 2652</p>
        <p>24.23m<sub>B</sub> = 898.05</p>
        <p>m<sub>B</sub> = 898.05 / 24.23</p>
        <p><strong>m<sub>B</sub> = 37</strong></p>
      </div>
      <p className="mt-4">Thus, the isotopic mass of B is <strong>37</strong>.</p>
    </div>  
        <PlantUMLDiagram
          code={`@startmindmap
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
* Isotopes of Chlorine & Uranium
** Chlorine
*** Overview
**** Chlorine has two natural isotopes
**** Greyish-yellow gas
**** Sharp pungent irritating smell
**** Fairly soluble in water
*** Chlorine-35
**** Symbol: ³⁵₁₇Cl
**** 17 protons
**** 18 neutrons
**** Natural abundance: 75.77%
*** Chlorine-37
**** Symbol: ³⁷₁₇Cl
**** 17 protons
**** 20 neutrons
**** Natural abundance: 24.23%

left side
** Isotopes of Uranium
*** Overview
**** Uranium has three natural isotopes
**** Used in nuclear reactors and atomic bombs
**** Undergoes radioactive decay
*** Uranium-234
**** Symbol: ²³⁴₉₂U
**** 92 protons
**** 92 electrons
**** 142 neutrons
**** Rare isotope
**** Natural abundance: 0.006%
*** Uranium-235
**** Symbol: ²³⁵₉₂U
**** 92 protons
**** 92 electrons
**** 143 neutrons
**** Used in nuclear fission
**** Natural abundance: 0.72%
**** Fission releases neutrons and energy
**** 1 kg U-235 ≈ Energy from burning 17,000 kg coal
*** Uranium-238
**** Symbol: ²³⁸₉₂U
**** 92 protons
**** 92 electrons
**** 146 neutrons
**** Does not have nuclear properties like U-235
**** Natural abundance: 99.27%
**** Decays into thorium-234
**** Emits alpha particle (⁴₂He)
**** Reaction: ²³⁸₉₂U → ²³⁴₉₂Th + ⁴₂He
*** Chemical Properties
**** Depend on protons & electrons
**** Neutrons do not affect chemical reactions
**** Isotopes have similar chemical properties

@endmindmap
`}
        />

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
* Determination of Relative Atomic Mass
** Definition
*** Calculated using isotopic masses & relative abundance
*** Weighted average of all naturally occurring isotopes
** Example: Carbon
*** Natural Abundance
**** ¹²₆C = 98.8%
**** ¹³₆C = 1.1%
**** ¹⁴₆C = 0.009%
*** Formula:
**** RA = Relative Abundance
**** Relative atomic mass of C =
**** (RA of C-12 × Mass of C-12 + RA of C-13 × Mass of C-13 + RA of C-14 × Mass of C-14) / 100
*** Calculation:
**** (98.8 × 12 + 1.1 × 13 + 0.009 × 14) / 100
**** (1185.6 + 14.3 + 0.126) / 100
**** 12.00026 amu
** Example: Hydrogen
*** Natural Abundance
**** ¹₁H (Protium) = 99.99%
**** ²₁H (Deuterium) = 0.0015%
**** ³₁H (Tritium) = Rare (Radioactive)
*** Formula:
**** RA = Relative Abundance
**** Relative atomic mass of H =
**** (RA of H-1 × Mass of H-1 + RA of H-2 × Mass of H-2 + RA of H-3 × Mass of H-3) / 100
*** Calculation:
**** (99.99 × 1 + 0.0015 × 2 + 0 × 3) / 100
**** (99.99 + 0.003) / 100
**** ≈ 1.008 amu
** Example: Chlorine
*** Natural Abundance
**** ³⁵₁₇Cl = 75.77%
**** ³⁷₁₇Cl = 24.23%
*** Formula:
**** RA = Relative Abundance
**** Relative atomic mass of Cl =
**** (RA of Cl-35 × Mass of Cl-35 + RA of Cl-37 × Mass of Cl-37) / 100
*** Calculation:
**** (75.77 × 35 + 24.23 × 37) / 100
**** (2651.95 + 896.51) / 100
**** ≈ 35.5 amu
** Concept Assessment Exercise 3.1
*** Problem:
**** An element has two isotopes A & B
**** Relative atomic mass of element = 35.5 amu
**** Isotope A:
***** Relative abundance = 75.77%
***** Isotopic mass = 35
**** Isotope B:
***** Relative abundance = 24.23%
***** Find isotopic mass of B
@endmindmap
`}
        />

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
* Uses of Isotopes
** Medical Applications
*** Iodine-131
**** Used as a tracer for diagnosing thyroid problems
*** Sodium-24 (Na-24)
**** Traces blood flow
**** Detects circulatory system constrictions or obstructions
*** Iodine-123
**** Used for brain imaging
*** Cobalt-60
**** Used in cancer treatment
**** Irradiates cancer cells to shrink or kill tumors
** Scientific Applications
*** Carbon-14
**** Traces carbon path in photosynthesis
*** Sulphur-35
**** Determines molecular structure (e.g., thiosulphate S₂O₃⁻² ion)
*** Radioactive Isotopes
**** Used to study chemical reaction mechanisms
**** Helps in understanding molecular structure
** Archaeological & Geological Applications
*** Carbon-14
**** Used to date archaeological objects, mummies, and fossils
*** Other Radioactive Isotopes
**** Used to date rocks and soils
@endmindmap
`}
        />
            <p>Q24: Explain different uses of isotopes. </p>
      <div className="max-w-2xl bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Uses of Isotopes</h1>
        <p className="mb-2">Isotopes have many uses in science and medicine. Some common uses are:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Doctors use radioactive iodine-131 to check thyroid problems.</li>
          <li>Sodium-24 helps find blockages in blood flow.</li>
          <li>Iodine-123 is useful for brain imaging.</li>
          <li>Cobalt-60 helps in treating cancer by shrinking tumors.</li>
          <li>Carbon-14 helps scientists study how plants use carbon in photosynthesis.</li>
          <li>Scientists use isotopes like sulfur-35 to study molecule structures.</li>
          <li>Chemists use radioactive isotopes to understand how reactions work.</li>
          <li>Archaeologists use them to date rocks, soil, and ancient objects.</li>
        </ul>
        <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">Second Answer</h1>
      <p className="mb-4">
        Isotopes are used in many ways, such as in medicine, industry, and energy production. Here are some key uses:
      </p>
      
      <h2 className="text-xl font-semibold mt-4">1. Medical Uses</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Certain isotopes help treat diseases like cancer.</li>
        <li>Doctors use them to locate tumors and check blood conditions.</li>
        <li>They also help detect blood clots and anemia.</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-4">2. Radiocarbon Dating</h2>
      <p className="mb-4">
        Scientists use carbon isotopes to determine the age of ancient objects like fossils and old wood.
      </p>
      
      <h2 className="text-xl font-semibold mt-4">3. Tracer Technique</h2>
      <p className="mb-4">
        Special isotopes help scientists study how plants use carbon dioxide during photosynthesis.
      </p>
      
      <h2 className="text-xl font-semibold mt-4">4. Industrial Uses</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>They help detect cracks in gas, oil, and water pipelines.</li>
        <li>Used in steel production to check for phosphorus removal.</li>
        <li>Help track wear and tear in engine parts.</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-4">5. Agriculture</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Help in fertilizer production and tracking nutrient absorption.</li>
        <li>Used to create better seeds and preserve food.</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-4">6. Nuclear Energy</h2>
      <p>
        Isotopes like uranium and plutonium provide fuel for nuclear power plants, producing electricity in an efficient way.
      </p>
    </div>
      </div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/d7J5rebHsEc?si=Jo_reaJtQNHAQfZi" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
* Carbon Dating
** Purpose
*** Estimates the age of carbon-containing substances
** Role of Carbon-14
*** Circulates between oceans and living organisms
*** Absorbed by living organisms at a faster rate than it decays
*** As a result, the concentration of C-14 in all living things keeps on increasing
*** After death, organisms stop absorbing C-14
** Process
*** Compare C-14 activity in ancient samples (e.g., skulls, jawbones) with living tissues
*** Estimate time since the organism died
*** Known as **Radiocarbon Dating**
@endmindmap
`}
        />
      </section>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/agpn3JpJvhg?si=EQT5B6GaX9s0zgCh" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <p>Q25: Why do the chemical properties of isotopes of same element remains the same? </p>
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Isotopes and Their Chemical Properties</h1>
        <p className="text-gray-700 text-lg">
          Isotopes of the same element have the same chemical properties because they have the same number of protons and electrons. 
          Protons decide the element, and electrons control chemical reactions. Since isotopes only differ in neutrons, which do not affect reactions, 
          their chemical properties stay the same.
        </p>
   
        <h1 className="text-2xl font-bold mb-4 text-blue-600">Second Answer</h1>
        <p className="text-gray-700 mb-2">Isotopes of an element have the same chemical properties because:</p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>They have the same atomic number (same number of protons).</li>
          <li>Their electron arrangement is identical.</li>
          <li>They have the same number of valence electrons.</li>
        </ul>
        <p className="text-gray-700">Since isotopes only differ in neutrons, their chemical properties do not change. Their tiny mass difference does not affect reactivity. So, all isotopes of an element behave the same way chemically.</p>
    </div>

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-2xl w-full">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">Isotopes and Atomic Mass Calculations</h1>
        
        <div className="mb-6">
          <h2 className="text-lg font-semibold">(i) Zinc Isotopes</h2>
          <p className="text-gray-700">Zinc consists of five naturally occurring isotopes: Zn, Zn, Zn, and Zn. None of these isotopes has the atomic mass of 65.41 listed for zinc on the periodic table.</p>
          <p className="text-gray-700 font-semibold">Explanation:</p>
          <p className="text-gray-700">Zinc consists of five natural isotopes. None of these isotopes has the atomic mass of 65.41 because this is the average atomic mass of all isotopes.</p>
        </div>
        
        <div className="mb-6">
          <h2 className="text-lg font-semibold">(ii) Gallium Isotopes</h2>
          <p className="text-gray-700">Two isotopes of gallium occur naturally:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Ga at 60.11% (68.93 amu)</li>
            <li>Ga at 39.89% (70.92 amu)</li>
          </ul>
          <p className="text-gray-700 font-semibold">Calculation:</p>
          <p className="text-gray-700">Average atomic mass = (68.93 × 60.11%) + (70.92 × 39.89%) / 100</p>
          <p className="text-gray-700 font-semibold">Result: 69.72 amu</p>
        </div>
        
        <div className="mb-6">
          <h2 className="text-lg font-semibold">(iii) Rubidium Isotopes</h2>
          <p className="text-gray-700">Two isotopes of rubidium occur naturally:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Rb at 72.17% (84.91 amu)</li>
            <li>Rb at 27.83% (86.91 amu)</li>
          </ul>
          <p className="text-gray-700 font-semibold">Calculation:</p>
          <p className="text-gray-700">Average atomic mass = (84.91 × 72.17%) + (86.91 × 27.83%) / 100</p>
          <p className="text-gray-700">= (6127.9 + 2418.7) / 100</p>
          <p className="text-gray-700 font-semibold">Result: 85.4 amu</p>
        </div>
      </div>
    </div>
<p>
<div>Why do we find average atomic mass of an element? </div> <br />

Average atomic mass is found because elements have different types called isotopes. Each isotope has its own mass. The average mass depends on how much of each isotope is present in nature. This helps in chemistry calculations.

</p>

<div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold text-gray-900">Chlorine Average Mass Calculation</h1>
      
      <p className="text-gray-700">
        <strong>Given Data:</strong>
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Isotope: Cl-35, Mass Number: 35, Relative Abundance: 75.76%</li>
        <li>Isotope: Cl-37, Mass Number: 37, Relative Abundance: 24.24%</li>
      </ul>
      
      <p className="text-gray-700">
        <strong>Average Atomic Mass Calculation:</strong>
      </p>
      <p className="text-gray-700">
        (35 × 75.76 + 37 × 24.24) ÷ 100 = (2651.6 + 896.88) ÷ 100
      </p>
      <p className="text-gray-700 font-bold">
        = 35.4 amu
      </p>
      
      <h2 className="text-lg font-semibold text-gray-900">Student Learning Outcomes:</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Describe how positive (cation) and negative (anion) ions form from atoms.</li>
        <li>Interpret and use symbols for atoms and ions.</li>
      </ul>
    </div>  

      <div className="p-8 bg-gradient-to-r from-green-100 to-yellow-200 rounded-lg shadow-xl">
        <h1 className="text-3xl font-extrabold text-yellow-800 mb-6">
          3.5 Isotopes
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Definition and Characteristics
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-green-900 mb-4">
              Isotopes: Atoms of an element with the same atomic number but
              different mass numbers
            </p>
            <p className="text-green-900 mb-4">
              <strong>Similarities:</strong>
              <br />
              a) Same number of protons
              <br />
              b) Same number of electrons
              <br />
              c) Same atomic number
            </p>
            <p className="text-green-900">
              <strong>Differences:</strong>
              <br />
              d) Different numbers of neutrons
              <br />
              e) Different mass numbers
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Historical Context
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-green-900">
              Term &quot;isotope&quot; first used by Soddy
              <br />
              Greek origin: &quot;isos&quot; (same) + &quot;tope&quot; (place)
              <br />
              Contradicts Dalton&apos;satomic theory of identical atoms for a
              given element
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Isotopes of Hydrogen
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-green-900 ml-6">
              <li>Protium (H)</li>
              <li>Deuterium (D)</li>
              <li>Tritium (T)</li>
            </ul>
            <p className="text-green-900 mt-4">
              Heavy water: Contains Deuterium instead of Protium
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Isotopes of Carbon
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-green-900 ml-6">
              <li>Carbon-12</li>
              <li>Carbon-13</li>
              <li>Carbon-14</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Isotopes of Chlorine
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-green-900 ml-6">
              <li>Chlorine-35</li>
              <li>Chlorine-37</li>
            </ul>
            <p className="text-green-900 mt-4">Natural abundance details</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Isotopes of Uranium
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-green-900 ml-6">
              <li>Uranium-234</li>
              <li>Uranium-235</li>
              <li>Uranium-238</li>
            </ul>
            <p className="text-green-900 mt-4">
              Natural abundance and applications
              <br />
              Fission of Uranium-235
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Determination of Relative Atomic Mass
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-green-900">
              Calculation method using isotopic masses and relative abundance
              <br />
              Example with carbon
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Uses of Isotopes
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-green-900 ml-6">
              <li>
                Medical applications (e.g., Iodine-131, Sodium-24, Cobalt-60)
              </li>
              <li>
                Scientific applications (e.g., Carbon-14 in photosynthesis
                research)
              </li>
              <li>Archaeological dating</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Carbon Dating
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-green-900">
              Process of using Carbon-14 to estimate age of carbon-containing
              substances
              <br />
              Principle and application in archaeology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagneticMindmap;
