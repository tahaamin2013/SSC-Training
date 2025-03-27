    import PlantUMLDiagram from '@/components/PlantUMLDiagram'
import React from 'react'

const Mindmap = () => {
  return (
    <div>
        <PlantUMLDiagram code={`
                @startmindmap
<style>
mindmapDiagram {
    BackgroundColor WhiteSmoke
    LineColor Black
    NodeFontColor Black
}
:depth(1) {
    BackgroundColor FireBrick
    FontColor White
}
:depth(2) {
    BackgroundColor IndianRed
    FontColor White
}
:depth(3) {
    BackgroundColor LightCoral
    FontColor Black
}
:depth(4) {
    BackgroundColor MistyRose
    FontColor Black
}
</style>

* **Corrosion (7.5.1)**
** **Definition**
*** **Electrochemical Process:** Metal reacts with its environment.
*** **Involves Oxygen & Moisture:** Leads to metal oxide formation.
*** **Damage to Structures:** Affects buildings, vehicles, and equipment.

** **Example: Rusting of Iron**
*** **Conditions for Rusting:** Oxygen and water are required.
*** **Oxidation-Reduction Reaction:** Rusting is a redox process.

** **Anodic Region (Oxidation)**
*** **Occurs in Areas with Less Moisture**
*** **Iron Oxidation Reaction:**  
**** **Fe(s) → Fe²⁺(aq) + 2e⁻**  
*** **Electrons are Released**

** **Cathodic Region (Reduction)**
*** **Occurs in Areas with More Moisture**
*** **Oxygen Reduction Reaction:**  
**** **O₂ + 2H₂O + 4e⁻ → 4OH⁻**  

** **Formation of Rust**
*** **Fe²⁺ ions move to cathodic regions**
*** **React with Oxygen to form Rust:**  
**** **Fe₂O₃·xH₂O** (Hydrated Iron Oxide)

@endmindmap
            `} />

            <PlantUMLDiagram code={`
@startmindmap
<style>
mindmapDiagram {
    BackgroundColor WhiteSmoke
    LineColor Black
    NodeFontColor Black
}
:depth(1) {
    BackgroundColor SteelBlue
    FontColor White
}
:depth(2) {
    BackgroundColor LightSteelBlue
    FontColor Black
}
:depth(3) {
    BackgroundColor SkyBlue
    FontColor Black
}
:depth(4) {
    BackgroundColor LightCyan
    FontColor Black
}
</style>

* **Prevention of Corrosion (7.5.2)**
** **Importance**
*** **Affects Industries & Infrastructure**
*** **Conserves Natural Resources**
*** **Protects Everyday Objects**

** **Methods of Corrosion Prevention**
*** **1. Coating with Paint**
**** **Forms a Protective Barrier**
**** **Prevents Contact with Air & Moisture**
**** **Used in Cars, Bridges, Bikes, etc.**
**** **Also Enhances Appearance**

*** **2. Alloying**
**** **Mixing Iron with Other Metals**
**** **Example:** **Stainless Steel (Iron + Chromium)**
**** **Highly Resistant to Corrosion**

*** **3. Coating with Another Metal**
**** **Protects Metals from Corrosion**
**** **Three Main Methods:**
***** **(a) Tinning**
****** **Iron Sheet Dipped in Molten Tin**
****** **Passed Through Hot Rollers**
****** **Tin is Stable & Prevents Corrosion**
***** **(b) Galvanizing (Zinc Coating)**
****** **Iron Sheet Dipped in Hot Zinc Chloride Bath**
****** **Then Rolled in a Zinc Bath & Cooled**
***** **(c) Electroplating**
****** **Electrolytic Process**
****** **Deposits One Metal onto Another**

*** **4. Cathodic Protection (Sacrificial Protection)**
**** **Metal to be Protected is Made the Cathode**
**** **Connected to a More Active Metal (Magnesium, Aluminum)**
**** **Active Metal Oxidizes, Protecting Iron**
**** **Used in Underground & Marine Environments**
**** **Protects Pipelines, Tanks, Oil Rigs, Ships, etc.**

@endmindmap
                `} />
    </div>
  )
}

export default Mindmap