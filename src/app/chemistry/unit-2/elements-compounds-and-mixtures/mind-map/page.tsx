import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
    return (
        <div className="p-8 flex flex-col gap-8">
            <section>
                <h1 className="text-4xl font-bold text-blue-500">ELEMENTS, COMPOUNDS AND MIXTURES</h1>
                <PlantUMLDiagram
                    code={`
@startmindmap
<style>
mindmapDiagram {
  node {
    FontSize 14
    FontStyle bold
  }
}
</style>

* Matter Classification
** Pure Substance
*** Element
**** Simplest form of matter
**** Made up of same type of atoms
**** Same atomic number (proton number)
**** Cannot be broken down chemically
**** Examples
***** Hydrogen (H)
***** Oxygen (O)
***** Gold (Au)
***** Carbon (C)
***** Iron (Fe)
*** Compound
**** Formed when two or more different atoms chemically combine
**** New substance with different properties
**** Examples
***** Water (H₂O)
***** Carbon Dioxide (CO₂)
***** Sodium Chloride (NaCl)
***** Glucose (C₆H₁₂O₆)
***** Ammonia (NH₃)
** Mixture
*** Homogeneous Mixtures
**** Uniform Composition
***** Components evenly distributed
***** Parts are not visible
**** Examples
***** Saltwater
***** Air
***** Vinegar
***** Tea (milk, water, tea leaves, sugar)
*** Heterogeneous Mixtures
**** Colloid
**** Suspension
**** Non-uniform Composition
***** Components are not evenly spread
***** Parts can be seen
**** Examples
***** Salad
***** Oil and Water
***** Sand and Iron Filings
*** Physical combination of substances
*** Particles have different chemical compositions
** Differences Between Compounds and Mixtures
*** Composition
**** Compounds: Fixed ratio of elements
***** Example: Water (H₂O) always has 2 hydrogen atoms and 1 oxygen atom
**** Mixtures: Variable proportions of substances
***** Example: Saltwater can have any amount of salt dissolved in water
*** Bonding
**** Compounds: Chemical bonds
***** Example: Sodium (Na) and Chlorine (Cl) chemically bond to form Sodium Chloride (NaCl)
**** Mixtures: No chemical bonds
***** Example: Air is a mixture of gases (oxygen, nitrogen, etc.) without chemical bonding
*** Separation
**** Compounds: Need chemical reactions to separate
***** Example: Electrolysis of water (H₂O) separates it into hydrogen and oxygen
**** Mixtures: Can be separated physically
***** Example: Filtration separates sand from water
*** Properties
**** Compounds: New properties different from elements
***** Example: Sodium (Na) is reactive, Chlorine (Cl) is toxic, but Sodium Chloride (NaCl) is safe to eat
**** Mixtures: Properties of original substances remain
***** Example: Saltwater tastes salty (salt's property) and is liquid (water's property)
** Properties of Matter
*** Physical Properties
**** Examples
***** Color (e.g., gold is yellow)
***** Density (e.g., iron is dense)
***** Melting Point (e.g., ice melts at 0°C)
***** Boiling Point (e.g., water boils at 100°C)
***** Solubility (e.g., sugar dissolves in water)
*** Chemical Properties
**** Examples
***** Reactivity (e.g., sodium reacts with water)
***** Flammability (e.g., gasoline is flammable)
***** Toxicity (e.g., chlorine gas is toxic)
***** Stability (e.g., gold is chemically inert)
***** Oxidation (e.g., iron rusts in the presence of oxygen)
** Changes in Matter
*** Physical Change
**** Alters physical properties
**** Examples
***** Melting ice (solid to liquid)
***** Boiling water (liquid to gas)
***** Cutting paper (changes shape)
***** Dissolving sugar in water (changes state)
***** Crushing a can (changes shape and size)
*** Chemical Change
**** Forms a new substance
**** Examples
***** Burning wood (produces ash and smoke)
***** Rusting iron (forms iron oxide)
***** Cooking an egg (changes protein structure)
***** Baking a cake (irreversible change)
***** Digestion of food (breaks down into simpler substances)
@endmindmap`}
                />
                <PlantUMLDiagram
                    code={`
@startmindmap
* Dispersed Substances / Mixture
** Colloid
*** Definition
**** Microscopic particles dispersed in a medium
**** Particles not dissolved
*** Characteristics
**** Particles do not settle if undisturbed
*** Example
**** Pumice (air in stone)
** Emulsion
*** Definition
**** Type of colloid
**** Liquid particles in another liquid
*** Example
**** Milk (butterfat in water-based medium)
** Suspension
*** Definition
**** Similar to colloid, but larger particles
*** Characteristics
**** Particles eventually settle
*** Example
**** Sand in water
@endmindmap`}
                />
            </section>

            <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-xl">
                <h1 className="text-3xl font-extrabold text-purple-800 mb-6">Classification of Matter</h1>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-3">I. Classification of Matter</h2>
                    <h3 className="text-xl font-bold text-purple-600 mb-2">A. Pure Substances</h3>
                    <ul className="list-disc list-inside text-blue-900 ml-8">
                        <li>1. Elements</li>
                        <li>2. Compounds</li>
                    </ul>

                    <h3 className="text-xl font-bold text-purple-600 mt-4 mb-2">B. Mixtures</h3>
                    <ul className="list-disc list-inside text-blue-900 ml-8">
                        <li>1. Homogeneous</li>
                        <li>2. Heterogeneous</li>
                        <ul className="list-disc list-inside text-blue-700 ml-8">
                            <li>a. Colloid</li>
                            <li>b. Suspension</li>
                        </ul>
                        <div className="p-6 bg-white text-gray-900 border border-gray-200 rounded-lg shadow-md">
  <h1 className="text-4xl font-bold mb-6">Colloids, Emulsions, and Suspensions</h1>

  <section className="mb-6">
    <h2 className="text-3xl font-semibold mb-4">1. Colloid</h2>
    <p className="mb-4">
      <strong>Definition:</strong> A substance with microscopic particles dispersed in a medium, not dissolved.
    </p>
    <p className="mb-4">
      <strong>Characteristics:</strong>
      <ul className="list-disc pl-5 space-y-2">
        <li>Dispersed particles do not settle or form sediment if left undisturbed.</li>
      </ul>
    </p>
    <p>
      <strong>Example:</strong> Pumice (air particles dispersed in solid stone).
    </p>
  </section>

  <section className="mb-6">
    <h2 className="text-3xl font-semibold mb-4">2. Emulsion</h2>
    <p className="mb-4">
      <strong>Definition:</strong> A specific type of colloid.
    </p>
    <p className="mb-4">
      <strong>Characteristics:</strong>
      <ul className="list-disc pl-5 space-y-2">
        <li>Microscopic particles of liquid dispersed in another liquid.</li>
      </ul>
    </p>
    <p>
      <strong>Example:</strong> Milk (lipophilic butterfat particles dispersed in a water-based medium).
    </p>
  </section>

  <section className="mb-6">
    <h2 className="text-3xl font-semibold mb-4">3. Suspension</h2>
    <p className="mb-4">
      <strong>Definition:</strong> Similar to a colloid, but with larger dispersed particles.
    </p>
    <p className="mb-4">
      <strong>Characteristics:</strong>
      <ul className="list-disc pl-5 space-y-2">
        <li>Dispersed particles will eventually settle or form sediment.</li>
      </ul>
    </p>
    <p>
      <strong>Example:</strong> Sand in water (when shaken, sand disperses; when left alone, it settles at the bottom).
    </p>
  </section>

  <section>
    <h2 className="text-3xl font-semibold mb-4">## Key Differences</h2>
    <ul className="list-disc pl-5 space-y-4 mb-4">
      <li>
        <strong>Particle Size:</strong>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Colloids and Emulsions: Microscopic particles</li>
          <li>Suspensions: Larger particles</li>
        </ul>
      </li>
      <li>
        <strong>Settling Behavior:</strong>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Colloids and Emulsions: Do not settle</li>
          <li>Suspensions: Will settle over time</li>
        </ul>
      </li>
      <li>
        <strong>Medium:</strong>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Colloids: Any medium (solid, liquid, or gas)</li>
          <li>Emulsions: Specifically liquid in liquid</li>
          <li>Suspensions: Typically solid in liquid</li>
        </ul>
      </li>
    </ul>
  </section>
</div>

                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-3">II. Elements</h2>
                    <h3 className="text-xl font-bold text-purple-600 mb-2">A. Definition</h3>
                    <p className="text-blue-900 bg-blue-100 p-4 rounded-lg">Simplest form of matter made up of the same type of atoms.</p>

                    <h3 className="text-xl font-bold text-purple-600 mt-4 mb-2">B. Characteristics</h3>
                    <ul className="list-disc list-inside text-blue-900 ml-8">
                        <li>1. Consist of atoms with the same atomic number (proton number).</li>
                        <li>2. Cannot be broken down through chemical means.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-purple-600 mt-4 mb-2">C. Physical vs. Chemical Changes</h3>
                    <ul className="list-disc list-inside text-blue-900 ml-8">
                        <li>1. Physical change: Alters physical properties.</li>
                        <li>2. Chemical change: Forms a new substance.</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-3">III. Compounds</h2>
                    <h3 className="text-xl font-bold text-purple-600 mb-2">A. Definition</h3>
                    <p className="text-blue-900 bg-blue-100 p-4 rounded-lg">Substance formed when two or more different atoms chemically combine.</p>

                    <h3 className="text-xl font-bold text-purple-600 mt-4 mb-2">B. Key Points</h3>
                    <ul className="list-disc list-inside text-blue-900 ml-8">
                        <li>1. Result of a chemical reaction.</li>
                        <li>2. New substance with properties different from constituent elements.</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-3">IV. Mixtures</h2>
                    <h3 className="text-xl font-bold text-purple-600 mb-2">A. Definition</h3>
                    <p className="text-blue-900 bg-blue-100 p-4 rounded-lg">Substance formed when two or more substances physically combine.</p>

                    <h3 className="text-xl font-bold text-purple-600 mt-4 mb-2">B. Characteristics</h3>
                    <ul className="list-disc list-inside text-blue-900 ml-8">
                        <li>1. Does not contain the same types of particles.</li>
                        <li>2. Particles have different chemical compositions.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-purple-600 mt-4 mb-2">C. Example</h3>
                    <p className="text-blue-900 bg-blue-100 p-4 rounded-lg">Tea (combination of milk, water, tea leaves, and sugar).</p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-3">V. Properties of Matter</h2>
                    <ul className="list-disc list-inside text-blue-900 ml-8">
                        <li>A. Physical properties</li>
                        <li>B. Chemical properties</li>
                    </ul>
                </div>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-lg p-8 mt-10">
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Differences Between Compounds and Mixtures</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-2">Composition</h3>
            <p>
              Compounds have a fixed ratio of elements. Mixtures can have any amount of substances.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-secondary mb-2">Bonding</h3>
            <p>
              Compounds have chemical bonds. Mixtures do not have chemical bonds.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-secondary mb-2">Separation</h3>
            <p>
              Compounds need chemical reactions to separate. Mixtures can be separated physically.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-secondary mb-2">Properties</h3>
            <p>
              Compounds have new properties. Mixtures keep the properties of the original substances.
            </p>
          </div>
        </div>
      </section>
    </div>
        </div>
    );
};

export default MagneticMindmap;