import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from "next/image";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section className="relative">
        <h1 className="text-4xl font-bold text-blue-500">
          Relative Atomic Mass and Atomic Mass Unit
        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
    .concept1 {
        BackgroundColor #FFCDD2
    }
    .concept2 {
        BackgroundColor #C8E6C9
    }
    .concept3 {
        BackgroundColor #BBDEFB
    }
    .concept4 {
        BackgroundColor #FFE0B2
    }
    .concept5 {
        BackgroundColor #E1BEE7
    }
    .concept6 {
        BackgroundColor #B2EBF2
    }
}
</style>

* Relative Atomic Mass and AMU <<concept1>>
** Historical Development <<concept2>>
*** Work by early 19th century chemists
**** Dalton
**** Gay Lussac
**** Lavoisier
**** Avogadro
**** Berzelius
*** Based on observing element proportions in compound formation
**** H₂ O (Water)
**** CO₂ (Carbon di Oxide)

** Atomic Measurement Principles <<concept6>>
*** Atoms are extremely small particles
*** Direct mass measurement impossible
*** Relative mass determination
**** Experimental comparison between elements
**** Standard reference element needed

** Light Isotope of Carbon-12 Standard <<concept3>>
*** By international agreement in 1961
*** Mass = 12 amu exactly
*** Measured by mass spectrometer
*** Used as reference point
** Atomic Mass Unit (AMU) <<concept4>>
*** Definition
**** (mass of C-12 atom)/12
*** Mass comparisons
**** Other elements compared to C-12
** Example Elements <<concept5>>
*** Hydrogen
**** 1.008 amu
**** 8.40% of C-12 mass
*** Nitrogen
**** 14.0067 amu
*** Oxygen
**** 15.9994 amu
*** Sodium
**** 22.9898 amu
*** Aluminum
**** 26.9815 amu
*** Iron
**** 55.847 amu

@endmindmap
            `}
        />

        <Image
          src="/Mass-Spectrometry-MS.webp"
          alt="Mass Spectrometry"
          width={450}
          height={450}
          className="absolute top-1/2 right-5"
        />

      </section>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/HVc7QyGgDso?si=c2aChltIxxW3UY_C" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
   <p>Q19: Discuss the concept of relative atomic mass and atomic mass unit. Also discuss relative atomic masses of some elements. 
   </p>
   <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-2xl">
      <h1 className="text-2xl font-bold text-center mb-4">Relative Atomic Mass</h1>
      
      <h2 className="text-xl font-semibold">Background</h2>
      <p className="mt-2 text-gray-700">
        Atoms are super tiny, so measuring their actual mass is really hard. For example, a hydrogen atom weighs about 1.672 × 10⁻²⁴ grams, which is too small to measure with regular tools. To make things easier, scientists compare atomic masses to a standard atom. The standard is carbon-12, which has been given a mass of exactly 12 atomic mass units (amu). One atomic mass unit is 1/12 of the mass of a carbon-12 atom.
      </p>
      
      <h2 className="text-xl font-semibold mt-4">Definition</h2>
      <p className="mt-2 text-gray-700">
        The relative atomic mass of an element is the average mass of its atoms compared to 1/12 of the mass of a carbon-12 atom.
      </p>
      
      <h2 className="text-xl font-semibold mt-4">Examples</h2>
      <ul className="list-disc pl-6 mt-2 text-gray-700">
        <li>Hydrogen (H) = 1 amu</li>
        <li>Oxygen (O) = 16 amu</li>
        <li>Magnesium (Mg) = 24 amu</li>
        <li>Calcium (Ca) = 40 amu</li>
        <li>Sodium (Na) = 23 amu</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-4">Atomic Mass Scale</h2>
      <p className="mt-2 text-gray-700">
        The atomic mass scale is based on carbon-12. Scientists measure the mass of other atoms by comparing them to carbon-12.
      </p>
      
      <h2 className="text-xl font-semibold mt-4">Atomic Mass Unit</h2>
      <p className="mt-2 text-gray-700">
        One atomic mass unit (amu) is exactly 1/12 of the mass of a carbon-12 atom.
      </p>
      
      <h2 className="text-xl font-semibold mt-4">Relative Atomic Mass Table</h2>
      <table className="mt-4 w-full border border-gray-300 text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Element</th>
            <th className="p-2 border">Relative Atomic Mass</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">Hydrogen (H)</td><td className="p-2 border">1.008 amu</td></tr>
          <tr><td className="p-2 border">Aluminum (Al)</td><td className="p-2 border">26.9815 amu</td></tr>
          <tr><td className="p-2 border">Nitrogen (N)</td><td className="p-2 border">14.0067 amu</td></tr>
          <tr><td className="p-2 border">Sulfur (S)</td><td className="p-2 border">32.06 amu</td></tr>
          <tr><td className="p-2 border">Oxygen (O)</td><td className="p-2 border">15.9994 amu</td></tr>
          <tr><td className="p-2 border">Chlorine (Cl)</td><td className="p-2 border">35.453 amu</td></tr>
          <tr><td className="p-2 border">Sodium (Na)</td><td className="p-2 border">22.9898 amu</td></tr>
          <tr><td className="p-2 border">Iron (Fe)</td><td className="p-2 border">55.847 amu</td></tr>
        </tbody>
      </table>
    </div>

    <p className="mt-4 text-lg">
    How can we determine the number of isotopes of a specific element, their masses, and also most abundant isotopes for a specific element? 

    </p>
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold text-gray-900">Understanding Mass Spectrometry</h1>
      
      <p className="text-gray-700">
        If you have a solid or liquid sample, heat can turn it into gas. If it&apos;s already a gas, you can use it as is. Here, we use neon gas as a sample.
      </p>
      
      <p className="text-gray-700">
        Electrons move quickly from a tungsten coil to an electron trapper. As they move, they hit neon gas atoms and give them a positive charge. The positive atoms move away from the positive plate and rush toward the negative plate. This makes them move fast into the magnetic field. This step is key in a mass spectrometer.
      </p>
      
      <p className="text-gray-700">
        When these charged atoms enter the magnetic field, they bend based on their mass. Lighter atoms bend more than heavier ones. You can see this in the figure. Finally, the ions land on a detector. This detector counts them and measures their masses.
      </p>
      <Image
          src="/Mass-Spectrometry-MS.webp"
          alt="Mass Spectrometry"
          width={450}
          height={450}
        />
    </div>    
      <div className="p-8 bg-gradient-to-r from-blue-100 to-teal-200 rounded-lg shadow-xl">
        <h1 className="text-3xl font-extrabold text-teal-800 mb-6">
          3.4 Relative Atomic Mass and Atomic Mass Unit
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Historical Context
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-blue-900 ml-6">
              <li>
                Early chemists (Dalton, Gay Lussac, Lavoisier, Avogadro,
                Berzelius) made initial calculations based on element
                combination proportions in compounds
              </li>
              <li>
                Direct measurement of atomic masses not possible due to the
                extremely small size of atoms
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Standardization of Atomic Mass
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-blue-900 ml-6">
              <li>1961: Carbon-12 isotope chosen as the standard</li>
              <li>
                Carbon-12 assigned a value of exactly 12 atomic mass units (amu)
              </li>
              <li>All other atomic masses compared to this standard</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Atomic Mass Unit (amu)
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-blue-900">
              Definition: One-twelfth the mass of a carbon-12 atom
              <br />
              Used to express atomic mass (also known as atomic weight)
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Relative Atomic Mass
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-blue-900">
              The mass of an atom compared to the mass of the carbon-12 standard
              <br />
              Expressed in atomic mass units (amu)
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Examples of Relative Atomic Masses
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-blue-900 ml-6">
              <li>
                Hydrogen: ~1.008 amu (about 8.40% as massive as carbon-12)
              </li>
              <li>Oxygen: 15.9994 amu</li>
              <li>Sodium: 22.9898 amu</li>
              <li>Aluminum: 26.9815 amu</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagneticMindmap;
