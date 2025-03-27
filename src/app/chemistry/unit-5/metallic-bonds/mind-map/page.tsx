import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from "next/image";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">METALLIC BONDS</h1>
        <PlantUMLDiagram
          code={`
@startmindmap
* 5.6 METALLIC BONDS
** Definition
*** Special bonding in metals where valence electrons are free and delocalized.
*** Metal atoms lose electrons, forming positive ions.
*** Free electrons move throughout the metal structure, forming an electron sea.
** Delocalised Electrons
*** The electron sea consists of delocalized electrons that are not confined to individual atoms.
*** Strong electrostatic forces between metal cations and electron sea hold the structure together.
*** This type of bonding is called metallic bonding.
** Properties of Metals (Due to Metallic Bonding)
*** Malleability
**** Metals can be bent and shaped due to layers of atoms sliding over each other.
*** Ductility
**** Metals can be drawn into wires due to the same sliding layers.
*** High Melting and Boiling Points
**** Strong metallic bonds lead to high melting and boiling points, making metals thermally stable.
*** High Electrical Conductivity
**** Delocalized electrons allow metals to conduct electricity efficiently.
*** High Thermal Conductivity
**** Delocalized electrons transfer energy, making metals good conductors of heat.
*** Metallic Lustre
**** The electron sea reflects light, giving metals their shiny appearance.
** 5.6.1 Structure and Properties of Metals (Industrial Purposes)
*** Giant Structures
**** Metals have giant structures with strong metallic bonds, contributing to high thermal stability.
*** Sliding Layers
**** The ability of metal layers to slide over each other makes them malleable and ductile, suitable for industrial shaping into wires and sheets.
*** Conductivity
**** Metals are good conductors of electricity and thermal energy due to the mobility of delocalized electrons.
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
}
</style>

* **5.6 METALLIC BONDS**
** **1. Nature of Metallic Bonding**
*** A special type of bonding accurs in metals
*** **Free Electrons** → Valence electrons are not confined to individual atoms
*** **Formation of Metal Cations** → Metal atoms lose electrons and become positive ions
*** **Electron Sea Model** → Free electrons move throughout the entire metal structure
*** **Electrostatic Attraction** → Metal cations are held by negatively charged electron sea
** **2. Properties of Metals**
*** **Malleability** → Can be hammered into sheets
*** **Ductility** → Can be drawn into wires
*** **High Melting & Boiling Points** → Due to strong metallic bonds
*** **Electrical & Thermal Conductivity** → Free electrons transfer energy
*** **Metallic Lustre** → Shiny surface due to interaction with light
@endmindmap
                `}
        />

<Image src="/Metallic-Bonds-2-700x369.png" alt="Metallic bonds 2" width={700} height={700} />

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

* **5.6.1 Structure and Properties of Metals**
** **1. Giant Structure**
*** **Strong Metallic Bonds** → High melting & boiling points
*** **Thermally Stable** → Suitable for industrial applications
** **2. Malleability & Ductility**
*** **Sliding Layers** → Atoms can slide over each other
*** **Bent & Shaped** → Can be drawn into wires & sheets
** **3. Electrical & Thermal Conductivity**
*** **Delocalized Electrons** → Free movement of electrons
*** **Energy Transfer** → Heat & electricity flow easily
@endmindmap
  `} />

      </section>
      <div className="bg-gradient-to-r from-gray-100 to-blue-100 p-10 font-sans">
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-[2rem]">
          <h1 className="text-4xl font-bold text-center text-black mb-8">
            Metallic Bonds and Properties of Metals
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Metallic Bonding
            </h2>
            <p className="text-lg text-gray-700">
              Valence electrons are not confined to individual atoms (free
              electrons). Metal atoms form positive ions, and free electrons
              move throughout the metal structure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Electron Sea Model
            </h2>
            <p className="text-lg text-gray-700">
              Sea of delocalized electrons creates a strong electrostatic
              attraction between metal cations and the electron sea.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Properties of Metals
            </h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>Malleability</li>
              <li>Ductility</li>
              <li>High melting and boiling points</li>
              <li>High electrical and thermal conductivity</li>
              <li>Metallic lustre</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Structure and Industrial Applications
            </h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>Giant structures with strong metallic bonds.</li>
              <li>Thermally stable due to high melting/boiling points.</li>
              <li>
                Malleable and ductile, allowing them to be drawn into wires and
                sheets.
              </li>
              <li>Good conductors of electricity and thermal energy.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Key Concepts
            </h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>
                <strong>Octet Rule:</strong> Atoms tend to acquire
                eight-electron configurations in the valence shell, aiming for
                noble gas electron configuration.
              </li>
              <li>
                <strong>Ionic Bonds:</strong> Formed by electron transfer
                between atoms, with high melting points and conductivity in
                molten state.
              </li>
              <li>
                <strong>Covalent Bonds:</strong> Formed by electron sharing; can
                be single, double, or triple bonds.
              </li>
              <li>
                <strong>Hydrogen Bonding:</strong> Occurs between
                electron-deficient hydrogen and a lone pair on an
                electronegative atom; important for adhesive properties of
                paints and dyes.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">
              Additional Information
            </h2>
            <p className="text-lg text-gray-700">
              References are provided for further reading on chemistry topics.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MagneticMindmap;
