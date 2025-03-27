import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from "next/image";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
          Characteristic Properties
        </h1>
      </section>
      <PlantUMLDiagram
        code={`
              @startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
                .group {
        BackgroundColor lightBlue
            MaximumWidth 200
    }
    :depth(1) {
        BackgroundColor lightGreen
    }
    :depth(2) {
        BackgroundColor lightYellow
    }
}
</style>

* **4.4 Characteristic Properties**
** **In a given group based on**
*** Periodicity/perodic properties/Periodic Trends
****[#66CCFF] Shielding Effect
*****_ Increases down a group
*****_ Constant across a period
****[#66CCFF] Atomic Size
*****_ Decreases across a period
*****_ Increases down a group
****[#66CCFF] Ionization Energy
*****_ Increases across a period
*****_ Decreases down a group
****[#66CCFF] Electron Affinity
*****_ Increases (magnitude) across a period
*****_ Decreases down a group
****[#66CCFF] Electronegativity
*****_ Increases across a period
*****_ Decreases down a group
*** Chemical Reactivity
** **Group 1: Alkali Metals  Group 2: Alkaline Earth Metals*** <<group>>
*** **Properties**
**** Highly reactive metals
**** General electron configuration: **ns¹**
**** **Reactivity trend:** Increases down the group
*** **Why Reactivity Increases?**
**** Atomic size increases
**** Outer electron farther from nucleus
**** Electron is lost more easily
*** **Reactivity Order**
**** Group 1
***** **Li < Na < K** 
***** **Sodium is more reactive than lithium**
***** **Which is more reactive? Na or K?**
**** Group 2
***** **Mg < Ca**
***** **Which is more reactive? Mg or Ca?**

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
}
</style>

* Metallic Character
** Definition
*** Property determining electron loss ability
*** Stronger tendency = Higher metallic character
*** Forms positive ions (cations)
*** Position dependent in periodic table

** Trends
*** Down Group
**** Increases down group
**** Due to new electronic shells
**** Outer electrons farther from nucleus
**** Weaker attractive forces

*** Across Period
**** Decreases left to right
**** Due to increased effective nuclear charge
**** Same number of shells
**** Stronger attractive forces

left side

** Problem Examples
*** Example 4.6
**** Compare pairs
***** Na vs K
***** Na vs Mg
**** Solution
***** K has higher character than Na
***** Na has higher character than Mg

*** Exercise 4.8
**** Lower metallic character
***** Li vs K
***** Mg vs Ca
***** Compare ionization energy & electron affinity

** Problem Solving Strategy
*** Check group position
**** Lower = more metallic
*** Check period position
**** Left = more metallic
*** Consult periodic table
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
}
</style>
* Reactivity
** Definition
*** Capability to form new compounds
*** Interaction with other elements

** Group Trends
*** Increases down group
*** Reasons
**** Larger atomic size
**** Outer electrons farther from nucleus
**** Weaker attractive forces
**** Easier chemical reactions

left side

** Period Trends
*** Left Side (Groups 1 & 2)
**** Highly reactive
**** Tends to lose electrons
**** Forms positive ions

*** Right Side (Groups 16 & 17)
**** Highly reactive
**** Tends to gain electrons
**** Forms negative ions

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
}
</style>

* Density
** Group Trends
*** Increases down group
*** Reasons
**** Increasing atomic mass
**** Larger atomic size
**** More protons & neutrons
**** Heavier nucleus
left side
** Period Trends
*** Pattern
**** Increases left to right
**** Peaks in middle
**** Decreases towards right
*** Variable pattern
**** Not uniform increase/decrease
**** Maximum around center

@endmindmap
`}
      />

<Image src="/density_balls_b.png" alt="Density Balls" width={900} height={900} />

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
}
</style>
* Group IA - Alkali Metals Properties (Li, Na, K, Rb, Cs, Fr)
** Reactivity
*** Highly reactive metals
*** Readily form +1 cations
*** Increases down group
*** Lose valence electrons easily
left side
** Physical Properties
*** Softness
**** Easily cut with knife
**** Increases down group
**** K softer than Na

*** Low Density
**** Increases down group

*** Conductivity
**** Excellent electrical conductors
**** Excellent heat conductors

*** Melting Points
**** Low melting points
right side

** Chemical Properties
*** Monovalent Elements
*** Water Reactivity
**** React with H₂O
**** Form metal hydroxides
**** Produce hydrogen gas
**** 2M+2H₂​O→2MOH+H₂ ​↑
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
}
</style>

* Prediction of Properties of Other Elements in Group 1 (Alkali Metals)
** Group Name
*** Called Alkali Metals
*** Examples include Li, Na, K

** Physical Properties
*** Softness
**** Very soft metals
**** Increases down group

*** Thermal Properties
**** Melting points decrease down group
**** Boiling points decrease down group

left side

** Chemical Properties
*** Water Reactivity
**** General Reaction
***** Metal + Water →
***** Metal Hydroxide + Hydrogen

*** Reactivity Trend
**** Increases down group
**** Examples
***** Lithium
***** Sodium
***** Potassium

** Activity 4.5
*** Predict properties of Group I elements
**** Based on given data
*** Rubidium (Next after Potassium)
**** Reaction with water
***** Much more violent
**** Melting & Boiling Point
***** Lower than elements above it
*** Elements below Rubidium
**** Even more reactive
**** Very low melting and boiling points
**** React with water
***** Form metal hydroxide
***** Release hydrogen

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
}
</style>

* Position of Unknown Elements
** Determining Factors
*** Electronic Configuration
**** Influences chemical behavior
**** Similar within groups
**** Key for position prediction

*** Periodic Trends
**** Atomic size
**** Ionization energy
**** Electron affinity
**** Electronegativity
**** Reactivity
left side
** Example Problem (Element 19)
*** Problem Strategy
**** Step 1
***** Write electronic configuration
***** 1s², 2s², 2p⁶, 3s², 3p⁶, 4s¹

**** Step 2
***** Analyze valence configuration
***** Identify group and period

*** Solution
**** Group Determination
***** 4s¹ indicates Group 1
***** Alkali metal family

**** Period Determination
***** n=4 indicates Period 4


** Property Prediction
*** Compare with neighbors
**** Melting point
**** Density
**** Reactivity
*** Based on periodic trends
**** Higher/lower than elements above
**** Higher/lower than elements below

@endmindmap
`}
      />


      <div className="bg-gradient-to-r from-blue-100 to-green-200 text-gray-900">
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-4xl font-bold text-center mb-8">
            Characteristic Properties
          </h1>

          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">General Trends</h2>
            <p className="text-lg mb-4">
              Group 1 (alkali metals) and Group 2 (alkaline earth metals)
              reactivity increases down the group. Atomic size increases down a
              group, leading to increased reactivity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">Metallic Character</h2>
            <p className="text-lg mb-4">
              Definition: Tendency to lose electrons and form positive ions
              (cations). Trends:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>
                Increases down a group (new electronic shells, weaker nuclear
                attraction)
              </li>
              <li>
                Decreases across a period left to right (increased effective
                nuclear charge)
              </li>
            </ul>
            <p className="text-lg mt-4 font-semibold">Example 4.6:</p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>
                Higher metallic character: (a) K (over Na), (b) Na (over Mg)
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">Reactivity</h2>
            <p className="text-lg mb-4">
              Definition: Capability to react with other elements to form new
              compounds. Trends:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>
                Increases down a group (larger atomic size, weaker nuclear
                attraction)
              </li>
              <li>Varies across a period (high for Groups 1, 2, 16, and 17)</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">Density</h2>
            <p className="text-lg mb-4">
              Generally increases down a group (increased atomic mass and size).
              Varies across a period (tends to peak in the middle).
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">
              Characteristic Properties of Alkali Metals
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Highly reactive (increases down the group)</li>
              <li>Soft with low density (increases down the group)</li>
              <li>Excellent conductors of electricity and heat</li>
              <li>Low melting points</li>
              <li>
                React with water to form metal hydroxides and hydrogen gas
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">
              Prediction of Properties in Group 1
            </h2>
            <p className="text-lg mb-4">
              Reactivity increases down the group. General reaction with water:
              metal + water → metal hydroxide + hydrogen.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">
              Positioning Unknown Elements
            </h2>
            <p className="text-lg mb-4">
              Use electronic configuration to determine position and predict
              properties. Elements in the same group have similar electronic
              configurations and properties.
            </p>
            <p className="text-lg mt-4 font-semibold">Example 4.7:</p>
            <p className="text-lg">
              Unknown element (atomic number 19): Electronic configuration: 1s²
              2s² 2p⁶ 3s² 3p⁶ 4s¹. Position: Alkali metal in the 4th period.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">
              Concept Assessment Exercise 4.8
            </h2>
            <p className="text-lg mb-4">Lower metallic character:</p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>(a) Li (compared to K)</li>
              <li>(b) Mg (compared to Ca)</li>
              <li>
                (c) Compare ionization energy (energy required to remove an
                electron) and electron affinity (energy released when an atom
                gains an electron)
              </li>
            </ul>
            <p className="text-lg mt-4 font-semibold">Example 4.8:</p>
            <p className="text-lg">Softer metal: K (compared to Na)</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Key Points</h2>
            <p className="text-lg mb-4">
              Characteristic properties are based on periodicity and chemical
              reactivity. Understanding trends in metallic character,
              reactivity, and density helps predict element behavior. Electronic
              configuration is crucial for determining an element&apos;s
              position and properties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagneticMindmap;
