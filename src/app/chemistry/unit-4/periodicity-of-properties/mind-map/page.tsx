import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from "next/image";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        PERIODICITY OF PROPERTIES
        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightGreen
        BorderColor darkGreen
        FontColor black
    }
    :depth(1) {
      BackgroundColor lightBlue
    }
    :depth(2) {
      BackgroundColor lightYellow
    }
    :depth(3) {
      BackgroundColor lightPink
    }
}
</style>
* Periodicity of Properties
** Shielding Effect
*** Definition
**** Reduction in attraction between nucleus and valence electrons
*** Trends
**** Constant across a period
**** Increases down a group
*** Examples
**** Mg > Be
**** Si > C
** Atomic Size
*** Definition
**** Average distance between nucleus and outer shell
*** Trends
**** Decreases across a period
**** Increases down a group
*** Examples
**** Mg > Al
**** Si > C
left side
** Ionization Energy
*** Definition
**** Energy to remove outermost electron
*** Trends
**** Increases across a period
**** Decreases down a group
*** Examples
**** B < C
**** P < N
** Electron Affinity
*** Definition
**** Energy change when atom accepts an electron
*** Trends
**** Increases across a period
**** Decreases down a group
*** Examples
**** Cl > Br
**** F > Cl
** Electronegativity
*** Definition
**** Tendency to attract bonding electrons
*** Trends
**** Increases across a period
**** Decreases down a group
*** Examples
**** F > Cl
**** O > N
@endmindmap`}
        />



        <PlantUMLDiagram code={`@startmindmap
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

* 4.3 PERIODICITY OF PROPERTIES
** **Periodic Fluctuation** 
*** Electronic configuration changes with atomic number
*** Leads to periodic variation in properties
** **Variation Across a Group**
*** **Chemical Properties** 
**** Depend on valence shell electronic configuration
**** Elements in the same group have similar properties
*** **Physical Properties** 
**** Depend on atomic size
**** Gradual change from top to bottom in a group
** **Variation Across a Period**
*** Number of valence electrons increases left to right
*** Chemical & physical properties change systematically

@endmindmap
`} />

<PlantUMLDiagram code={`
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

* 4.3.1 Shielding Effect
** **Definition**
*** Inner electrons reduce attraction between nucleus & valence electrons
** **Factors Affecting Shielding Effect**
*** Number of inner shells
*** Number of electrons between nucleus & valence electrons
** **Trends in Shielding Effect**
*** **Across a Period**
**** Inner electrons remain constant
**** Shielding effect remains constant
*** **Down a Group**
**** Number of shells increases
**** Shielding effect increases
** **Impact on Properties**
*** Affects atomic size, ionization energy, electron affinity, and electronegativity
*** Properties show periodic trends
** **Example 4.4: Identifying Greater Shielding Effect**
*** (a) **Mg** has greater shielding than Be
*** (b) **Si** has greater shielding than C
** **Concept Assessment Exercise 4.5**
*** Identify element with **smaller** shielding effect:
**** (a) **F or Cl?**
**** (b) **Li or Na?**
**** (c) **B or Al?**

@endmindmap
`} />

<PlantUMLDiagram code={`
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

* 4.3.2 Atomic Size
** **Definition**
*** Distance between nucleus & outermost electron shell
** **Trends in Atomic Size**
*** **Trend 1: Decreasing Atomic Radius Across a Period**
**** Electron added to same shell
**** Positive charge of nucleus increases
**** Nucleus attraction to valence electrons increases
**** **Example:** Li (2s¹) → Be (2s²) → Atomic size decreases
*** **Trend 2: Increasing Atomic Radius Down a Group**
**** Additional electron shell added
**** Valence shell moves farther from nucleus
**** **Example:** Li (1s², 2s¹) → Na (1s², 2s², 2p⁶, 3s¹) → Atomic size increases

@endmindmap
  `} />

  <PlantUMLDiagram code={`
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

* Example 4.5: Identifying the element with greater atomic radius
** **Problem Statement**
*** Choose the element with a larger atomic radius from given pairs
** **Problem Solving Strategy**
*** **(a) Period Trend**
**** Larger atom lies further left in the periodic table
*** **(b) Group Trend**
**** Larger atom lies closer to the bottom in the periodic table
*** **(c) Use the periodic table to compare elements**
** **Solution**
*** **(a) Mg vs. Al**
**** Larger atom: **Mg**
*** **(b) C vs. Si**
**** Larger atom: **Si**
** **Concept Assessment Exercise 4.6**
*** **Choose the element with smaller atomic radius**
**** (a) **O vs. S**
***** Smaller atom: **O**
**** (b) **O vs. F**
***** Smaller atom: **F**
@endmindmap
`} />

<PlantUMLDiagram code={`@startmindmap
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

* **4.3.3 Ionization Energy**
** **Definition**
*** Minimum energy required to remove the outermost electron from an isolated gaseous atom
*** **Equation:** M(g) + ionization energy → M⁺(g) + e⁻
** **Importance**
*** Measures the strength of attraction between the nucleus and outermost electron
*** **High Ionization Energy**
**** Stronger attraction, harder to remove electron
*** **Low Ionization Energy**
**** Weaker attraction, easier to remove electron
** **Trends in Ionization Energy**
*** **Across a Period (→)**
**** Ionization energy **increases**
**** **Reasons:**
***** Shielding effect remains **unchanged**
***** **Nuclear charge increases**
***** Stronger nucleus-electron attraction
***** Harder to remove electrons
*** **Down a Group (↓)**
**** Ionization energy **decreases**
**** **Reasons:**
***** Increased **shielding effect**
***** Weaker nucleus-electron attraction
***** Electrons are easier to remove
** **Concept Questions**
*** **Which has greater shielding effect?**
**** **Li vs. Na → Na has greater shielding**
*** **Which has higher ionization energy?**
**** **Li vs. Be → Be has higher ionization energy**
@endmindmap
`} />

<PlantUMLDiagram code={`
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

* **4.3.4 Electron Affinity**
** **Definition**
*** Energy released when an electron is added to the valence shell of an isolated gaseous atom
*** **Equation:** X(g) + e⁻ → X⁻(g) + Electron Affinity
** **Factors Affecting Electron Affinity**
*** **Nuclear Charge**
*** **Atomic Radius**
*** **Shielding Effect**
** **Trends in Electron Affinity**
*** **Across a Period (→)**
**** Electron affinity **increases**
**** **Reasons:**
***** **Increased nuclear charge**
***** **Decreased atomic radius** (stronger nucleus-electron attraction)
***** **Shielding effect remains constant**
**** **Highest:** Halogens
**** **Lowest:** Alkali Metals
*** **Down a Group (↓)**
**** Electron affinity **decreases**
**** **Reasons:**
***** **Increased shielding effect**
***** **Increased atomic radius** (weaker nucleus-electron attraction)
***** Less energy released
** **Exceptions**
*** Some elements **do not follow** the general trend (explained in higher grades)
@endmindmap

  `} />

<PlantUMLDiagram code={`
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

* **4.3.5 Electronegativity**
** **Definition**
*** Ability of an atom to attract electrons toward itself in a chemical bond
** **Electronegativity Scale**
*** Devised by **Linus Pauling**
*** **Relative** values assigned to elements
*** Helps in predicting bond types and chemical reactivity
@endmindmap
  `} />

      </section>
    </div>
  );
};

export default MagneticMindmap;
