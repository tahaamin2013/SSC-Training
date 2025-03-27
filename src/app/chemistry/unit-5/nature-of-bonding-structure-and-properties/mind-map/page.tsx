import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">NATURE OF BONDING, STRUCTURE, AND PROPERTIES
        </h1>
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

* **Nature of Bonding, Structure, and Properties**
** **Factors Affecting Properties**
*** **1. Type of Particles**
**** **Atoms, Ions, or Molecules**
**** **Example: Sodium chloride (NaCl)**
***** **Conducts electricity when melted or dissolved**
***** **Soluble in water if ions or polar molecules present**
*** **2. Connection Between Particles**
**** **Types of Bonds: Ionic, Covalent, Metallic, Intermolecular Forces**
**** **Stronger bonds = Higher melting/boiling points & hardness**
**** **Examples:**
***** **Silicon Dioxide (SiO₂)**
****** **Strong covalent bonds = Hard & High melting point**
***** **Carbon Dioxide (CO₂)**
****** **Strong covalent bonds between atoms**
****** **Weak intermolecular forces between molecules = Low melting/boiling point**

*** **Arrangement of Particles**
**** **1. Planes**
***** **Example: Polymers**
***** **Particles arranged in repeating units**
**** **2. Layers**
***** **Example: Clays, Graphite**
***** **Graphite**
****** **Atoms arranged in 2D layers**
****** **Layers slide over one another**
****** **Used in pencils (Graphite writing)**
**** **3. 3D Networks**
***** **Example: Diamonds, Metals**
***** **Diamond**
****** **Strong 3D carbon network**
****** **Hardest natural substance**
***** **Metals**
****** **Giant structures**
****** **Strong metallic bonding**
****** **High melting & boiling points**
****** **Thermally stable**
@endmindmap
`}
        />


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

* **Conduction of Electricity in Ionic Compounds**
** **1. Electrical Conductivity**
*** **Achieved by movement of charged particles**
** **2. Solid State**
*** **Ions are fixed in position**
*** **Cannot move freely**
*** **No electrical conductivity**
** **3. Molten or Aqueous State**
*** **Ionic compound melts or dissolves in water**
*** **Ions move freely**
*** **Electricity can pass through**
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

* **Conduction of Electricity through Acids**
** **1. Covalent Compounds**
*** **No free charged particles**
*** **Do not conduct electricity**
** **2. Acids in Water**
*** **Examples: HCl, H₂SO₄, HNO₃**
*** **Ionize in water**
*** **Form H⁺ ions & negative ions**
*** **Ions move freely in solution**
*** **Aqueous acids conduct electricity**
** **3. Metals & Electricity**
*** **Metals have free electrons**
*** **Electrons move under electric field**
*** **Good conductors of electricity**
** **4. Properties of Covalent Compounds**
*** **Made of covalent molecules**
*** **Weak intermolecular forces**
*** **Low melting & boiling points**
*** **No free electrons or ions**
*** **Poor conductors of electricity**
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

* **Intermolecular Forces & Their Influence on Melting & Boiling Points**
** **1. Covalent Compounds**
*** **Lower melting & boiling points**
*** **Breaking weak intermolecular forces**
*** **Example: Water (H₂O)**
**** **Melting Point: 0°C**
**** **Boiling Point: 100°C**
*** **Example: Methane (CH₄)**
**** **Melting Point: -183°C**
**** **Boiling Point: -162°C**
*** **Example: Ethanol (CH₃CH₂OH)**
**** **Melting Point: -117°C**
**** **Boiling Point: 78°C**
** **4. Why Covalent Compounds Have Low Melting Points**
*** **Intermolecular forces are weaker than ionic bonds**
*** **Less energy needed to separate molecules**
left side
** **2. Ionic Compounds**
*** **Higher melting & boiling points**
*** **Breaking strong electrostatic forces**
*** **Require large amounts of energy**
*** **Example: Sodium Chloride (NaCl)**
**** **Melting Point: 801°C**
**** **Boiling Point: 1465°C**
*** **Example: Sodium Fluoride (NaF)**
**** **Melting Point: 996°C**
**** **Boiling Point: 1695°C**
*** **Example: Magnesium Chloride (MgCl₂)**
**** **Melting Point: 714°C**
**** **Boiling Point: 1412°C**
** **3. Why Ionic Compounds Have High Melting Points**
*** **Ionic bonds are strong**
*** **Breaking electrostatic forces needs more energy**
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

* **Graphite**
** **1. Name & Origin**
*** **Derived from Greek "graphein" (to write)**
*** **Also called black lead**
*** **An allotrope of carbon**
*** **Formed under high heat & pressure in Earth's crust**
** **2. Structure & Properties**
*** **Has both metallic & non-metallic qualities**
*** **Soft, black, slippery, and lustrous**
*** **Layered structure**
left side
** **3. Uses of Graphite**
*** **3.1 High-Temperature & Chemical Applications**
**** **Used in refractory items (e.g., carbon refractory bricks)**
**** **Graphite electrodes in electrical metallurgical furnaces**
**** **Anode in electrolytic processes**
*** **3.2 Nuclear Industry**
**** **Used in moderator rods**
**** **Reflector components in nuclear reactors**
*** **3.3 Electrical & Mechanical Uses**
**** **Used in carbon brushes & electric motors**
**** **Engineering applications: thrust & journal bearings, piston rings, valves**
*** **3.4 Other Applications**
**** **Used in metallurgy**
**** **Acts as a lubricant**
**** **Used in paints & pencil production**
** **4. Unique Bonding & Structure**
*** **Layered structure makes it ideal for various applications**
*** **Patterned bonding contributes to its diverse uses**
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

* **Diamond**
** **1. General Information**
*** **An allotrope of carbon**
*** **Carbon atoms arranged in a diamond cubic crystal lattice**
*** **Hardest known material due to strong covalent bonds**
*** **Rigid tetrahedral structure**
** **2. Structure of Diamond**
*** **Carbon atoms arranged tetrahedrally**
*** **Each carbon bonds with 4 other carbon atoms**
*** **C-C-C bond angle = 109.5°**
*** **Strong, rigid 3D structure**
*** **High density (3.514 g/cm³)**
left side
** **3. Properties of Diamond**
*** **Extraordinary hardness**
*** **Elasticity & high yield strength**
*** **Low conductivity**
*** **Chemical inertness**
** **4. Uses of Diamond**
*** **4.1 Gem Industry**
**** **Used in jewelry (rings, necklaces, earrings, etc.)**
**** **High value due to durability & lustre**
*** **4.2 Industrial Applications**
**** **Used for cutting, grinding & drilling hard materials**
**** **Blades & drill tips contain small diamonds**
*** **4.3 Medical & Beauty Applications**
**** **Used in medicines & beauty products**
**** **Used in medical tools (e.g., cataract surgery)**
**** **Nano-diamonds have health benefits**
*** **4.4 Audio & Sound Technology**
**** **Produces high-quality sound due to hardness**
**** **Used in DJ equipment & high-end recorders**
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

* **5.6 METALLIC BONDS**
** **1. Nature of Metallic Bonding**
*** **Valence electrons are free (delocalized)**
*** **Forms a 'sea of electrons' around metal cations**
*** **Held together by strong electrostatic forces**
*** **Gives metals their unique properties**
** **2. Properties of Metals (Due to Metallic Bonding)**
*** **Malleability** → Can be bent & shaped
*** **Ductility** → Can be drawn into wires
*** **High melting & boiling points** → Thermally stable
*** **High electrical & thermal conductivity** → Free-moving electrons transfer energy
*** **Metallic lustre** → Shiny appearance
** **3. Structure & Industrial Uses of Metals**
*** **Giant structures → Strong metallic bonds**
*** **Layers slide over each other → Malleable & ductile**
*** **Delocalized electrons → Good conductors of electricity & heat**
@endmindmap
                `} />

      </section>
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-10 font-sans">
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-[2rem]">
        <h1 className="text-4xl font-bold text-center text-black mb-8">Nature of Bonding, Structure, and Properties</h1>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Key Factors Determining Substance Properties</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>Type of Particles</li>
                <li>Type of Bonding</li>
                <li>Arrangement of Particles</li>
            </ul>
        </section>

        <section className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">Type of Particles</h3>
            <p className="text-lg text-gray-700">
                Particles can be atoms, ions, or molecules. Ionic substances conduct electricity when melted or dissolved, and water solubility requires ions or polar molecules.
            </p>
        </section>

        <section className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">Type of Bonding</h3>
            <p className="text-lg text-gray-700">
                Bonding can be ionic, covalent, metallic, or involve weak intermolecular forces. Stronger bonds lead to higher melting/boiling points and hardness.
                Example: SiO₂ (strong covalent bonds) vs. CO₂ (weak intermolecular forces).
            </p>
        </section>

        <section className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">Arrangement of Particles</h3>
            <p className="text-lg text-gray-700">
                Particles can be arranged in planes, layers, or 3D networks, affecting properties like hardness and conductivity.
                Example: Graphite (2D layers) vs. Diamond (3D network).
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Electrical Conductivity</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li><strong>Ionic Compounds:</strong> Non-conductive in solid state but conductive when melted or dissolved.</li>
                <li><strong>Acids:</strong> Conduct electricity when dissolved due to ionization.</li>
                <li><strong>Metals:</strong> Good conductors due to free electrons.</li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Diamond Properties and Uses</h2>
            <p className="text-lg text-gray-700">
                Diamond is the hardest known material, used in ornaments, cutting tools, medical instruments, and audio equipment.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Graphite Properties and Uses</h2>
            <p className="text-lg text-gray-700">
                Graphite has a 2D layered structure with weak van der Waals forces between layers. It is used in refractory items, nuclear reactors, lubricants, and pencils.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Comparing Ionic and Covalent Compounds</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li><strong>Ionic:</strong> Strong in compression, brittle, poor solid conductors.</li>
                <li><strong>Covalent (giant structures):</strong> Strong, hard, typically poor conductors.</li>
            </ul>
        </section>
    </div>
</div>
    </div>
  );
};

export default MagneticMindmap;