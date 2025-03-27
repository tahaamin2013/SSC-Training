import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">CHEMICAL BONDING
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
* Chemical Bonds
** Fundamental Nature
*** Forces of Attraction
**** Between Atoms
**** Electrical in Nature
**** Holds Substances Together

** Electronic Structure
*** Role in Bonding
**** Determines Reactivity
**** Influences Stability
**** Guides Bond Formation

left side

** Atomic Tendencies
*** Noble Gases
**** Stable Configuration
**** Generally Unreactive
**** Complete Electron Shells

*** Other Elements
**** Reactive Nature
**** Seek Stability Through
***** Electron Loss
***** Electron Gain
***** Electron Sharing

** Element Properties
*** Metals
**** Electropositive
**** Tend to Lose Electrons
**** Form Positive Ions

*** Non-metals
**** Electronegative
**** Tend to Gain Electrons
**** Form Negative Ions

** Stability Achievement
*** Methods
**** Electron Transfer
***** Loss (Metals)
***** Gain (Non-metals)

**** Electron Sharing
***** Between Atoms
***** Forms Covalent Bonds

*** Goal
**** Noble Gas Configuration
**** Complete Electron Shells
**** Stable Electronic State
@endmindmap
`}
        />

<PlantUMLDiagram code={`

@startmindmap
<style>
mindmapDiagram {
   node {
       BackgroundColor #E1F5FE
       BorderColor #01579B
       FontColor black
   }
   :depth(1) {
       BackgroundColor #C8E6C9
   }
   :depth(2) {
       BackgroundColor #FFECB3
   }
   :depth(3) {
       BackgroundColor #F8BBD0
   }
}
</style>
* 5.2 CHEMICAL BONDS
** Electrical Forces of Attraction
*** Hold Atoms Together
** Electronic Structure
*** Explains Bonding
** Reactivity
*** Atoms (non-noble gases)
**** Tendency to React
**** Gain Stability
***** Losing Electrons (Electropositivity)
****** In Metal Atoms
******* Alkali Metals (Group 1)
******* Alkaline Earth Metals (Group 2)
******* Transition Metals (Groups 3-12)
***** Gaining Electrons (Electronegativity)
****** In Non-Metal Atoms
***** Sharing Electrons
**** Next Noble Gas Element Configuration
@endmindmap
`} />


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
* Elements
** Electropositive (Metals)
*** Characteristics
**** Low ionization energy
**** Low electronegativity
**** Lose electrons easily
**** Form positive ions
*** Examples
**** Na → Na+ + e-
**** Mg → Mg2+ + 2e-
*** Process
**** Lose outer shell electrons
**** Become positively charged
**** Achieve stability
left side
** Electronegative (Non-metals)
*** Characteristics
**** High electronegativity
**** High electron affinity
**** Gain electrons easily
**** Form negative ions
*** Examples
**** F + e- → F-
**** O + 2e- → O2-
*** Process
**** Gain electrons
**** Become negatively charged
**** Achieve stability
@endmindmap
`}
        />

      </section>
       
      <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-10 font-sans">
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-[2rem]">
        <h1 className="text-4xl font-bold text-center text-black mb-8">Chemical Bonds</h1>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Definition</h2>
            <p className="text-lg text-gray-700">
                Forces of attraction that hold atoms together in substances.<br />
                Electrical in nature.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Atomic Reactivity</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>Most atoms (except noble gases) tend to react with other elements.</li>
                <li>Atoms gain stability by losing or gaining electrons.</li>
                <li>Goal: Acquire the electron configuration of the nearest noble gas.</li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Electropositivity and Electronegativity</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li><strong>Electropositivity:</strong> Tendency of metal atoms to lose electrons.</li>
                <li><strong>Electronegativity:</strong> Tendency of non-metal atoms to gain electrons.</li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Electron Sharing</h2>
            <p className="text-lg text-gray-700">
                Atoms can also achieve noble gas configuration by sharing electrons.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Electropositive Elements (Metals)</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>Lose electrons from outermost shell.</li>
                <li>Become positively charged.</li>
                <li>Characteristics:
                    <ul className="list-decimal pl-5">
                        <li>Low ionization energy</li>
                        <li>Low electronegativity</li>
                    </ul>
                </li>
                <li>Form positive ions.</li>
                <li>Examples:
                    <ul className="list-none pl-5">
                        <li>Na → Na<sup>+</sup> + e<sup>-</sup></li>
                        <li>Mg → Mg<sup>2+</sup> + 2e<sup>-</sup></li>
                    </ul>
                </li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Electronegative Elements (Non-metals)</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>Gain electrons.</li>
                <li>Become negatively charged.</li>
                <li>Characteristics:
                    <ul className="list-decimal pl-5">
                        <li>High electronegativity</li>
                        <li>High electron affinity</li>
                    </ul>
                </li>
                <li>Form negative ions.</li>
                <li>Example:
                    <ul className="list-none pl-5">
                        <li>F + e<sup>-</sup> → F<sup>-</sup></li>
                    </ul>
                </li>
            </ul>
        </section>
    </div>
</div>


    </div>
  );
};

export default MagneticMindmap;