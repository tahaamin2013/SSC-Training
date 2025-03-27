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
