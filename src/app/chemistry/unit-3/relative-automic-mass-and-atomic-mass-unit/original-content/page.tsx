"use client";

export default function RelativeAtomicMass() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          3.4 Relative Atomic Mass and Atomic Mass Unit
        </h1>
        <p className="text-gray-700 leading-relaxed">
          The first quantitative information about atomic masses came from the
          work of Dalton, Gay Lussac, Lavoisier, Avogadro, and Berzelius. By
          observing the proportions in which elements combine to form various
          compounds, nineteenth-century chemists calculated relative atomic
          masses.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          An atom is an extremely small particle, therefore, we cannot determine
          the mass of a single atom. However, it is possible to determine the
          mass of one atom of an element relative to another experimentally.
          This can be done by assigning a value to the mass of one atom of a
          given element so that it can be used as a standard.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          By international agreement in 1961, the light isotope of carbon C-12
          has been chosen as a standard. This isotope of carbon (C-12) has been
          assigned a mass of exactly 12 atomic mass units. This value has been
          determined accurately using a mass spectrometer.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          The mass of atoms of all other elements is compared to the mass of
          C-12. Thus,{" "}
          <strong>
            &quot;the mass of an atom of an element relative to the mass of an
            atom of C-12 is called its relative atomic mass&quot;
          </strong>
          .
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          One atomic mass unit (amu) is defined as a mass exactly equal to
          one-twelfth the mass of one C-12 atom.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg mt-4">
          <p className="text-gray-800 font-semibold">
            Mass of one C-12 atom = 12 amu
          </p>
          <p className="text-gray-800 font-semibold">
            1 amu = Mass of one C-12 atom / 12
          </p>
          <p className="text-gray-800 font-semibold">
            A hydrogen atom is 8.40% as massive as the standard C-12 atom.
            Therefore, relative atomic mass of hydrogen.
          </p>
          <p className="text-gray-800">= (8.40 / 100) × 12 amu</p>
          <p className="text-gray-800">= 1.008 amu</p>
          <p className="text-gray-800 font-semibold mt-2">
            Similarly, relative atomic masses of O, Na, Al are 15.9994 amu,
            22.9898 amu, 26.9815 amu respectively. Table 3.1 shows the relative
            atomic masses of some elements.{" "}
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-blue-600 mt-6">
          Table 3.1: Relative Atomic Masses of Some Elements
        </h2>
        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="border border-gray-300 px-4 py-2">Element</th>
                <th className="border border-gray-300 px-4 py-2">
                  Relative Atomic Mass
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border border-gray-300 px-4 py-2">H</td>
                <td className="border border-gray-300 px-4 py-2">1.008 amu</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">N</td>
                <td className="border border-gray-300 px-4 py-2">
                  14.0067 amu
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">O</td>
                <td className="border border-gray-300 px-4 py-2">
                  15.9994 amu
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Na</td>
                <td className="border border-gray-300 px-4 py-2">
                  22.9898 amu
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Al</td>
                <td className="border border-gray-300 px-4 py-2">
                  26.9815 amu
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">S</td>
                <td className="border border-gray-300 px-4 py-2">32.06 amu</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Cl</td>
                <td className="border border-gray-300 px-4 py-2">35.453 amu</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Fe</td>
                <td className="border border-gray-300 px-4 py-2">55.847 amu</td>
              </tr>{" "}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
