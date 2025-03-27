import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from "next/image";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
          6.3 Chemical Formula and Name of Binary Ionic Compounds{" "}
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
}
</style>

* **Chemical Formula & Naming of Binary Ionic Compounds**
** **1. Definition of Binary Ionic Compound**
*** **Composed of mono-atomic metal cations & mono-atomic non-metal anions**
*** **Cation named first, followed by anion**
*** **Cation name = same as metal**
*** **Anion name = root name + "ide" suffix**
*** **Examples:** Sodium chloride, magnesium oxide, aluminium nitride
** **2. Steps to Write Chemical Formula**
*** **Step 1:** Write symbols for cation & anion along with their charges
*** **Step 2:** Balance charges using smallest coefficient (total charge must be neutral)
*** **Step 3:** Write coefficients as subscripts for each ion
*** **Step 4:** Write final formula (omit charges & subscripts of 1)
** **3. Examples**
*** **Sodium Chloride (NaCl)**
**** Na⁺¹ Cl⁻¹ → (1×+1) = (1×-1) → Na₁Cl₁ → **NaCl**
*** **Aluminium Oxide (Al₂O₃)**
**** Al³⁺ O²⁻ → (2×+3) = (3×-2) → +6 = -6 → **Al₂O₃**
@endmindmap
          `}
        />

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
      </section>

      <div className="p-6 bg-white text-gray-900 border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">
          6.3 Chemical Formula and Name of Binary Ionic Compounds
        </h2>

        <h3 className="text-2xl font-semibold mb-4">Binary Ionic Compounds:</h3>
        <p className="mb-4">
          Composed of mono-atomic metal cations and mono-atomic non-metal
          anions.
          <br />
          <strong>Naming convention:</strong> Cation name first, followed by
          anion name.
          <br />
          <strong>Cation name:</strong> Same as the metal name.
          <br />
          <strong>Anion name:</strong> Root name of the element + suffix{" "}
          <strong>&apos;ide&apos;</strong>.<br />
          <strong>Examples:</strong> Sodium chloride, magnesium oxide, aluminium
          nitride.
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          Steps to Write Chemical Formula of Binary Ionic Compounds:
        </h3>
        <ol className="list-decimal pl-5 mb-4">
          <li>
            Write symbols for cation first, then anion, including their charges.
          </li>
          <li>
            Balance charges using smallest coefficients (compound must be
            neutral).
          </li>
          <li>Write coefficients as subscripts for each ion.</li>
          <li>Omit charge subscripts of 1 in the final formula.</li>
        </ol>

        <h4 className="text-xl font-medium mb-4">Examples:</h4>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Sodium chloride:</strong> Na⁺ Cl⁻ → NaCl
          </li>
          <li>
            <strong>Aluminium oxide:</strong> Al³⁺ O²⁻ → Al₂O₃
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">
          Common Cations and Anions:
        </h3>
        <div className="grid grid-cols-2 gap-6 mb-4">
          <div>
            <h4 className="text-xl font-medium mb-2">Cations:</h4>
            <ul className="list-disc pl-5">
              <li>Lithium</li>
              <li>Sodium</li>
              <li>Potassium</li>
              <li>Magnesium</li>
              <li>Calcium</li>
              <li>Copper</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-medium mb-2">Anions:</h4>
            <ul className="list-disc pl-5">
              <li>Fluoride</li>
              <li>Chloride</li>
              <li>Bromide</li>
              <li>Nitrite</li>
              <li>Nitrate</li>
              <li>Sulfate</li>
            </ul>
          </div>
        </div>

        <p className="mt-6 text-lg font-medium">
          <strong>Note:</strong> This section covers the basics of naming and
          writing formulas for binary ionic compounds. It emphasizes the
          importance of charge balancing and provides a list of common cations
          and anions for reference.
        </p>
      </div>
    </div>
  );
};

export default MagneticMindmap;
