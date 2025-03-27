import React from 'react';

const NobleGasesPage = () => {
  const tableData = [
    { element: "Helium", atomicNumber: 2, config: "1s²" },
    { element: "Neon", atomicNumber: 10, config: "1s²2s²2p⁶" },
    { element: "Argon", atomicNumber: 18, config: "1s²2s²2p⁶3s²3p⁶" },
    { element: "Krypton", atomicNumber: 36, config: "1s²2s²2p⁶3s²3p⁶3d¹⁰4s²4p⁶" },
    { element: "Xenon", atomicNumber: 54, config: "1s²2s²2p⁶3s²3p⁶3d¹⁰4s²4p⁶4d¹⁰5s²5p⁶" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <main className="max-w-4xl mx-auto">
        <article className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">4.8 NOBLE GASES</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Noble gases, also known as inert gases, are a group of chemical elements found in Group 18 (or Group VIII-A) of the periodic table. They have general electron configuration ns², np⁶ except He, which has 1s². They are characterized by unique properties. They are odorless, colorless mono atomic gases and possess very low reactivity with other elements. This low reactivity is due to the presence of a complete valence shell, which makes them stable and unlikely to form chemical bonds with other elements under normal conditions. Noble gases include elements: Helium (He), neon (Ne), argon (Ar), krypton (Kr), xenon (Xe), radon (Rn), and oganesson (Og).
            </p>

            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-3">Did you know?</h2>
              <p className="text-blue-800">
                Due to their non-reactive nature, noble gases are used in many ways, such as in lighting (e.g. neon signs), refrigeration systems and welding. They are also used in special applications, including filling gas exhaust lines and as a shielding gas in certain industrial processes.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Table 4.1: Electronic Configuration of Noble Gases</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2 text-left">Element</th>
                    <th className="border px-4 py-2 text-left">Atomic Number</th>
                    <th className="border px-4 py-2 text-left">Electronic Configuration</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="border px-4 py-2">{row.element}</td>
                      <td className="border px-4 py-2">{row.atomicNumber}</td>
                      <td className="border px-4 py-2 font-mono">{row.config}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default NobleGasesPage;