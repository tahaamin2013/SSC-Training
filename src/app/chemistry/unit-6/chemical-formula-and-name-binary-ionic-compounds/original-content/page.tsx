import React from 'react';

export default function Unit06() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">UNIT 06</h1>

      <h2 className="text-xl font-semibold mb-3">6.3 CHEMICAL FORMULA AND NAME OF BINARY IONIC COMPOUNDS</h2>

      <p className="mb-2">
        A binary ionic compound is composed of mono-atomic metal cations and mono-atomic non-metal anions. To write the name of an ionic compound, the cation is named first followed by the name of anion. How do you name cations and anions? The name of the cation is the same as the name of the metal, but in the name of mono-atomic anion, the suffix ide is added to the root name of the element. For example, sodium chloride, magnesium oxide, aluminium nitride, etc.
      </p>

      <p className="mb-2">
        The following steps are used to write the chemical formula of a binary ionic compound.
      </p>

      <ol className="list-decimal pl-5 mb-2">
      <li><strong>Step 1:</strong> Write the symbols for the cation first and then the symbols for the anion along with their charges.</li>
      <li><strong>Step 2:</strong> Balance the charges on the cations and anions using the smallest coefficient. The total charge on the cation must equal the total charge on the anion because an ionic compound is neutral.</li>
      <li><strong>Step 3:</strong> Write coefficients as subscripts for each ion.</li>
      <li><strong>Step 4:</strong> Write the formula of the ionic compound. Leave out all charges and subscripts which are 1.</li>

      </ol>

      <p className="mb-2">
        For example, the chemical formula of sodium chloride is written as follows;
      </p>
      <pre className="bg-gray-100 p-3 rounded">
        Na<sup>+1</sup> Cl<sup>-1</sup><br />
        1 (+1) = (-1)1 <br />
        Na<sub>1</sub> Cl<sub>1</sub> = NaCl
      </pre>

      <p className="mb-2">
        Example 2, the chemical formula of aluminium oxide is written as follows;
      </p>
      <pre className="bg-gray-100 p-3 rounded">
        Al<sup>+3</sup> O<sup>-2</sup> <br /> 
        2(+3) = (-2)3 <br />
        +6 = -6 <br />
        Al<sub>2</sub> O<sub>2</sub>
      </pre>

      <h4 className="text-lg font-semibold mb-2">Table indicating names and symbols for cations and anions</h4>

      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2 border">Cations</th>
                        <th className="px-4 py-2 border"> </th>
                        <th className="px-4 py-2 border">Anions</th>
                        <th className="px-4 py-2 border"> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border">
                        <td className="px-4 py-2 border">Lithium</td>
                        <td className="px-4 py-2 border">Li</td>
                        <td className="px-4 py-2 border">Fluoride</td>
                        <td className="px-4 py-2 border">F⁻</td>
                    </tr>
                    <tr className="border">
                        <td className="px-4 py-2 border">Sodium</td>
                        <td className="px-4 py-2 border">Na</td>
                        <td className="px-4 py-2 border">Chloride</td>
                        <td className="px-4 py-2 border">Cl⁻</td>
                    </tr>
                    <tr className="border">
                        <td className="px-4 py-2 border">Ammonium</td>
                        <td className="px-4 py-2 border">NH₄⁺</td>
                        <td className="px-4 py-2 border">Nitrite</td>
                        <td className="px-4 py-2 border">NO₂⁻</td>
                    </tr>
                    <tr className="border">
                        <td className="px-4 py-2 border">Potassium</td>
                        <td className="px-4 py-2 border">K</td>
                        <td className="px-4 py-2 border">Bromide</td>
                        <td className="px-4 py-2 border">Br⁻</td>
                    </tr>
                    <tr className="border">
                        <td className="px-4 py-2 border">Magnesium</td>
                        <td className="px-4 py-2 border">Mg²⁺</td>
                        <td className="px-4 py-2 border">Nitrate</td>
                        <td className="px-4 py-2 border">NO₃⁻</td>
                    </tr>
                    <tr className="border">
                        <td className="px-4 py-2 border">Calcium</td>
                        <td className="px-4 py-2 border">Ca²⁺</td>
                        <td className="px-4 py-2 border">Phosphate</td>
                        <td className="px-4 py-2 border">PO₄³⁻</td>
                    </tr>
                    <tr className="border">
                        <td className="px-4 py-2 border">Copper (II)</td>
                        <td className="px-4 py-2 border">Cu²⁺</td>
                        <td className="px-4 py-2 border">Sulfate</td>
                        <td className="px-4 py-2 border">SO₄²⁻</td>
                    </tr>
                </tbody>
            </table>
    </div>
  );
}
