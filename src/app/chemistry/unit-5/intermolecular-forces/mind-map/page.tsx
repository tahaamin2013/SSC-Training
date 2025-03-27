import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">INTERMOLECULAR FORCES
        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
* Dipole-Dipole Forces
** Definition
*** Dipole-dipole interactions occur between polar molecules
** Example
*** Figure 5.1 shows these interactions
** Applications
*** Paints and dyes
**** Protect solid surfaces from atmospheric effects
**** Provide visual appeal
*** Resins
**** Coat materials for toughness, flexibility, adhesion, and chemical resistance
**** Used in dams, bridges, floors, trains, buses, cars, etc.
**** Synthetic resins used where water resistance is required
**** Chemically, resins are either adhesive or form bond linkages
***** Bond linkages help materials stick together
** Nature of Dipole-Dipole Interactions
*** Slightly negative end of a polar molecule is weakly attracted to the slightly positive end of another molecule
*** These attracting forces are called dipole-dipole interactions
@endmindmap
`}
        />

        <Image src="/dipole=dipole-forces.png" alt='Dipole Dipole' width={500} height={500} />
        <Image src="/dipole.gif" alt='Dipole Dipole' width={500} height={500} />

<PlantUMLDiagram code={`
    
    @startmindmap
* Hydrogen Bonding
** Definition
*** Hydrogen bonding is a special type of dipole-dipole interaction but much stronger.
*** Hydrogen bonding specifically occurs when hydrogen is bonded to highly electronegative atoms (O, N, or F)
*** Hydrogen covalently bonded to an electronegative atom (O, N, F)
*** Weakly bonded to a lone pair of another electronegative atom
*** Can occur within the same molecule or between nearby molecules
** Mechanism
*** Electronegative atoms make hydrogen electron-deficient
*** Electron-deficient hydrogen interacts with lone pairs to compensate deficiency
** Example
*** Figure 5.2 shows hydrogen bonding in water molecules
** Importance
*** Determines properties of water
*** Affects biological molecules (proteins, DNA)
*** Influences synthetic materials (glue, paints, resins)
** Applications
*** Adhesive action of paints and dyes due to hydrogen bonding
*** Synthetic resins bind surfaces via hydrogen bonding or dipole-dipole interactions
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

* **Society, Technology, and Science**
** **Epoxy Adhesives**
*** **Excellent properties**
**** **Chemical resistance**
**** **Good adhesion**
**** **High heat resistance**
**** **Forms strong and tough coating**
*** **Applications**
**** **Used in aircraft, boats, cars, trucks, spacecraft**
**** **Essential for assembling, saving money, and reducing weight**
*** **Chemical Nature**
**** **Contains partially positive H-atoms**
**** **Oxygen atoms with lone pairs**
**** **Sticky due to hydrogen bonding**
**** **Adheres strongly to other substances**
*** **Daily Life Importance**
**** **Used in modern transportation**
**** **Glues and adhesives have become essential in daily life**
@endmindmap
    `} />

      </section>
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-10 font-sans">
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-[2rem]">
        <h1 className="text-4xl font-bold text-center text-black mb-8">Intermolecular Forces</h1>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Definition</h2>
            <p className="text-lg text-gray-700">
                Attractive forces existing between molecules.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Dipole-Dipole Forces</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>Occur between polar molecules.</li>
                <li>Slightly negative end of one molecule attracts slightly positive end of another.</li>
                <li>Applications:
                    <ul className="list-disc pl-5">
                        <li>Paints and dyes for protection and visual appeal.</li>
                        <li>Resins for coating materials (toughness, flexibility, adhesion, chemical resistance).</li>
                        <li>Synthetic resins for water resistance.</li>
                    </ul>
                </li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Hydrogen Bonding</h2>
            <p className="text-lg text-gray-700">
                Occurs when hydrogen is covalently bonded to very electronegative atoms (O, N, F).
            </p>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>Interaction between electron-deficient hydrogen and lone pair on nearby electronegative atom.</li>
                <li>Can occur within same molecule or between nearby molecules.</li>
                <li>Example: Hydrogen bonding in water molecules.</li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Importance of Intermolecular Forces</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>Determine properties of:
                    <ul className="list-disc pl-5">
                        <li>Water</li>
                        <li>Biological molecules (proteins, DNA)</li>
                        <li>Synthetic materials (glue, paints, resins)</li>
                    </ul>
                </li>
                <li>Crucial for adhesive action of paints and dyes.</li>
                <li>Enable synthetic resins to bind surfaces.</li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Applications in Society and Technology</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>Epoxy adhesives:
                    <ul className="list-disc pl-5">
                        <li>Excellent chemical resistance</li>
                        <li>Good adhesion properties</li>
                        <li>Heat resistance</li>
                        <li>Used in propellers, aircraft parts, boats, cars, trucks</li>
                    </ul>
                </li>
                <li>Mechanism: Contains partially positively charged H-atoms and O atoms with lone pairs.</li>
                <li>Benefits:
                    <ul className="list-disc pl-5">
                        <li>Cost savings</li>
                        <li>Weight reduction in vehicles and aircraft</li>
                    </ul>
                </li>
                <li>Widespread use in daily life and industry.</li>
            </ul>
        </section>
    </div>
</div>
    </div>
  );
};

export default MagneticMindmap;