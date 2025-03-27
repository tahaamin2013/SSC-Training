import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">ISOTOPES</h1>
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
