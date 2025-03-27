import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500"> WHY DO ATOMS REACT?
        </h1>
       
      
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
* Atomic Reactivity
** Periodic Table Groups
*** Normal Elements
**** Group IA
**** Group IIA
**** Group IIIA
**** Group IVA
**** Group VA
**** Group VIA
**** Group VIIA
**** Group VIIIA (Noble Gases)
***** Characteristics
****** Chemically Inert
****** Very Stable
****** Exist as Atoms
****** Complete Valence Shell
****** Found in Atmosphere

***** Electronic Configuration
****** General Form
******* ns² np⁶
******* 8 Valence Electrons
******* Exception: He (2 electrons)

left side

** Noble Gas Examples
*** Helium (He)
**** Electronic Config
***** 1s²
***** 2 Valence Electrons

*** Neon (Ne)
**** Electronic Config
***** 1s²
***** 2s²
***** 2p⁶

*** Argon (Ar)
**** Electronic Config
***** 1s²
***** 2s²
***** 2p⁶
***** 3s²
***** 3p⁶

** Lewis Theory (1916)
*** Octet Rule
**** 8 Electrons
**** Explains Stability
**** Explains Reactivity

*** Duplet Rule
**** 2 Electrons
**** Applies to Helium
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

* Octet Rule
** Core Principle
*** Definition
**** Atoms most stable with 8 valence electrons
**** Represents optimal electron configuration
*** Application
**** Only Applies to major group elements
**** Based on s and p electrons only
*** Chemical Bonding
**** Atoms form bonds to achieve 8 electrons
**** Results in stable molecules
*** Predictive Power
**** Predicts chemical behavior
**** Helps understand main group elements

*** Example Molecules follow the octet principle
**** Oxygen
**** Nitrogen
**** Halogens

left side

** Exceptions
*** Duplet Rule
**** Applicable Elements
***** Hydrogen
***** Helium
***** Lithium
**** Based on s Orbital
**** Two Electron Stability

** Examples of Unstable Config
*** Sodium (Na)
**** Initial Config
***** 1s² 2s² 2p⁶ 3s¹
***** Unstable
***** Reactive
***** Incomplete Octet

**** After Losing Electron
***** 1s² 2s² 2p⁶
***** Matches Neon
***** Stable Configuration

*** Chlorine (Cl)
**** Initial Config
***** 1s² 2s² 2p⁶ 3s² 3p⁵
***** Unstable
***** Reactive
***** Incomplete Octet

**** After Gaining Electron
***** 1s² 2s² 2p⁶ 3s² 3p⁶
***** Matches Argon
***** Stable Configuration
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
* Duplet Rule
** Core Concept
*** Two Electrons in Outer Shell
*** Achieves Helium-like Configuration
*** Applies to Elements Near Helium
*** Based on s Orbital

** Reference Element
*** Helium
**** Electronic Config
***** 1s²
**** Properties
***** Chemically Inert
***** Two Valence Electrons
***** Stable Configuration

left side

** Examples
*** Lithium (Li)
**** Initial Config
***** 1s² 2s¹
**** Transformation
***** Loses 1 Electron
***** Forms Li⁺
**** Final Config
***** 1s²
***** Matches Helium

*** Beryllium (Be)
**** Initial Config
***** 1s² 2s²
**** Transformation
***** Loses 2 Electrons
***** Forms Be²⁺
**** Final Config
***** 1s²
***** Matches Helium

*** Hydrogen (H)
**** Initial Config
***** 1s¹
**** Transformation
***** Gains/Shares 1 Electron
**** Final Config
***** 1s²
***** Matches Helium

** Applications
*** Bond Formation
*** Chemical Reactivity
*** Stability Prediction
*** Ion Formation
@endmindmap
            `}
        />

      </section>

      <div className="bg-gradient-to-r from-green-100 to-blue-100 p-10 font-sans">
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-[2rem]">
        <h1 className="text-4xl font-bold text-center text-black mb-8">Why Do Atoms React?</h1>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Noble Gases (Group VIIIA)</h2>
            <p className="text-lg text-gray-700">
                Noble gases are very stable and chemically inert. They have a general electronic configuration of <code>ns² np⁶</code> (except Helium: <code>1s²</code>) and completely filled valence shells, making them non-reactive in ordinary chemical reactions.
            </p>
        </section>

        <section className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">Octet Rule (G. N. Lewis, 1916)</h3>
            <p className="text-lg text-gray-700">
                The octet rule states that an atom is most stable when its valence shell contains eight electrons. This rule applies to major group elements, involving s and p electrons. Examples include oxygen, nitrogen, and halogens.
            </p>
        </section>

        <section className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">Duplet Rule</h3>
            <p className="text-lg text-gray-700">
                The duplet rule is the tendency of atoms to acquire two electrons in their outermost shell during bond formation, leading to a stable electronic configuration like helium. Examples include hydrogen, lithium, and beryllium.
            </p>
        </section>

        <section className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">Atomic Stability and Reactivity</h3>
            <p className="text-lg text-gray-700">
                Unstable atoms with incomplete octets are reactive, while stable atoms with complete octets or duplets are less reactive. For example:
            </p>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>Na: 1s² 2s² 2p⁶ 3s¹ (unstable, reactive)</li>
                <li>Na⁺: 1s² 2s² 2p⁶ (stable, like Ne)</li>
                <li>Cl: 1s² 2s² 2p⁶ 3s² 3p⁵ (unstable, reactive)</li>
                <li>Cl⁻: 1s² 2s² 2p⁶ 3s² 3p⁶ (stable, like Ar)</li>
            </ul>
        </section>

        <section className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">Exceptions to Octet Rule</h3>
            <p className="text-lg text-gray-700">
                Hydrogen, helium, and lithium follow the duplet rule. Their electrons lie in the s orbital, making them exceptions to the octet rule.
            </p>
        </section>

        <section>
            <h3 className="text-xl font-semibold text-black mb-4">Importance of Electronic Configuration</h3>
            <p className="text-lg text-gray-700">
                Electronic configuration determines the reactivity and stability of atoms and helps predict the chemical behavior of main group elements.
            </p>
        </section>
    </div>
</div>

    </div>
  );
};

export default MagneticMindmap;