import React from 'react';

const HalogensPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8">
          {/* Main Header */}
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            4.7 HALOGENS
          </h1>

          {/* Introduction */}
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-lg">
                The elements in group 17 (or Gruop VII-A) are called halogens. The name halogen is derived from the Greek words &quot;halous&quot; meaning salt and &quot;gen&quot; meaning former. Halogens include fluorine, chlorine, bromine, fodine, astatine, and tenessine (astatine and tenessine are radio- active elements. Little is known about their properties). All halogens are reactive non-metals and exist as diatomic molecules.
              </p>
            </div>

            {/* Appearance Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                4.7.1 Appearance of halogens
              </h2>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="text-lg">
                  They all exist as diatomic coloured molecular substances. The colour of halogen become darker as you go down the group. At room temperature and pressure(RTP) fluorine(F₂) exist as pale yellow gas, chlorine(Cl₂) as yellow-green gas, bromine (Br₂) as red-brown liquid and iodine(I₂) as grey-black solid. lodine easily turn into a dark purple vapours on warming.
                </p>
              </div>
            </div>

            {/* Electronic Configuration */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Electronic Configuration</h3>
              <p className="text-lg">
                Halogens possess 7 electrons in their valence shell. They have general electronic configuration ns²np⁵. They need only one electron to complete their valence shell. Consequently, they tend to gain one electron to form univalent negative ions, F⁻, Cl⁻, Br⁻, I⁻.
              </p>
            </div>

            {/* Density Section */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Density of halogens</h3>
              <p className="text-lg mb-4">
                As you move down the group the number of electrons and protons increases, the size of the atom increases and the volume increases. However, the increase in mass exceeds the increase in volume, so the density, which is mass per unit volume, increases in general. Also fluorine and chlorine are gases, bromine is a liquid, and iodine is a solid. So, the forces of attraction between molecules increase down the group. Solid iodine has molecules that are highly attracted and tightly packed together than bromine. Therefore, as you go down the group of halogens, the forces of attraction between molecules increase and the density of the halogen increases.
              </p>
              
              {/* Density Table */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm mt-4">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-lg font-bold">Halogen</th>
                      <th className="px-4 py-2 text-left text-lg font-bold">Density (g/cm³ at 25°C)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2 text-lg">Fluorine</td>
                      <td className="border px-4 py-2 text-lg">0.0017</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 text-lg">Chlorine</td>
                      <td className="border px-4 py-2 text-lg">0.0032</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 text-lg">Bromine</td>
                      <td className="border px-4 py-2 text-lg">3.1028</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 text-lg">lodine</td>
                      <td className="border px-4 py-2 text-lg">4.933</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Reactivity Section */}
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Reactivity of halogens</h3>
              <p className="text-lg mb-4">
                The reactivity of halogens is directly related to their ability to gain an electron and form a halide ion (fluoride ion F⁻, chloride ion Cl⁻, bromide ion Br⁻, iodide ion I⁻) when they react with other elements. Fluorine has the greatest tendency to gain electrons and form a halide ion, making it the most reactive halogen. As you move down the group, the electronegativity of the halogens decreases. This leads to a decrease in reactivity. Which halogen is the least reactive? Bromine or lodine. Because halogens have a strong tendency to gain electrons, they have a strong oxidizing power, and this power decreases down the group. Thus, the order of decreasing oxidizing power is:
              </p>
              <p className="text-lg text-center font-bold">
                F₂ &gt; Cl₂ &gt; Br₂ &gt; I₂
              </p>
            </div>

            {/* Displacement Reactions */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Displacement reactions of halogens</h3>
              <p className="text-lg mb-4">
                Oxidizing power of F₂ is the highest and that of I₂ is lowest. Due to the relative strength as oxidizing agent, it is possible for a free halogen to oxidize or displace the ion of halogen next to it in the group from their aqueous solutions. This means F₂ can oxidize and displace all the halide ions to free halogen. For example,
              </p>
              <div className="bg-white p-4 rounded-lg space-y-2">
                <p className="text-lg">F₂ + 2KCl → 2KF + Cl₂</p>
                <p className="text-lg">F₂ + 2KBr → 2KF + Br₂</p>
                <p className="text-lg">F₂ + 2NaI → 2NaF + I₂</p>
              </div>
              <p className="text-lg mt-4">
                Similarly Cl₂ can oxidize Br⁻ and I⁻ ions. But I₂ can not oxidize any halide ion.
              </p>
            </div>

            {/* Hydrogen Halides Section */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Hydrogen halides and their thermal stabilities</h3>
              <p className="text-lg mb-4">
                Halogens react with hydrogen to form hydrogen halides.
              </p>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-center">H₂ + X₂ → 2HX</p>
                <p className="text-lg text-center">Where X = F₂, Cl₂, Br₂, I₂</p>
              </div>
              <p className="text-lg mb-4">
                The strength of the hydrogen-halogen bond is related to the electronegativity difference between the hydrogen and halogen atoms. A larger electronegativity difference results in a stronger bond. As we move from HF to HI, the electronegativity difference between the hydrogen and halogen atoms decreases, resulting in weaker bonds in HCl, HBr, and HI. So, the relative thermal stability of hydrogen halides gradually decreases from HF to HI.
              </p>
              <p className="text-lg">
                Consequently, the energy needed to break H-X decreases in the following orders:
              </p>
              <p className="text-lg text-center font-bold mt-2">
                HF &gt; HCl &gt; HBr &gt; HI
              </p>
            </div>

            {/* Prediction Section */}
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Prediction of properties of elements in Group VIIA or Group 17</h3>
              <p className="text-lg">
                The elements present in Group 17 or VIIA are called halogens. They are poisonous non-metals that have low melting and boiling points that increase down the group. As a result of this increasing boiling and melting points, the state of the halogens at room temperature, changes from gas to liquid to solid down the group (fluorine and chlorine, the 1st and 2nd halogens, are a gas; bromine, the 3rd halogen is a liquid; and iodine, the 4th halogen, is a solid). The colours of halogens also get darker from top to bottom.
              </p>
            </div>

            {/* Concept Assessment Exercise */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">CONCEPT ASSESSMENT EXERCISE 4.9</h3>
              <p className="text-lg mb-4">Which of the following displacement reactions will occur?</p>
              <div className="space-y-2 bg-white p-4 rounded-lg">
                <p className="text-lg">1. Cl₂ + 2NaF → 2NaCl + F₂</p>
                <p className="text-lg">2. Br₂ + 2KI → 2KBr + I₂</p>
                <p className="text-lg">3. I₂ + 2KBr → 2KI + Br₂</p>
                <p className="text-lg">4. Cl₂ + 2KBr → 2KCl + Br₂</p>
                <p className="text-lg">5. Cl₂ + 2NaI → 2NaCl + I₂</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalogensPage;