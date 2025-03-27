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
    BackgroundColor Crimson
    FontColor White
}
:depth(2) {
    BackgroundColor LightCoral
    FontColor Black
}
:depth(3) {
    BackgroundColor LightGoldenRodYellow
    FontColor Black
}
:depth(4) {
    BackgroundColor PaleGreen
    FontColor Black
}
</style>

* **Oxidizing and Reducing Agents**
** **Oxidizing Agent**
*** **Definition**: Causes another substance to **oxidize** by **taking electrons** (electron acceptor).
*** **Process**: **Gains electrons** and is **reduced**.
*** **Examples**:
**** **Oxygen (O₂)**
**** **Hydrogen Peroxide (H₂O₂)**
**** **Chlorine (Cl₂)**
**** **Potassium Permanganate (KMnO₄)**

** **Reducing Agent**
*** **Definition**: Causes another substance to **reduce** by **donating electrons** (electron donor).
*** **Process**: **Loses electrons** and is **oxidized**.
*** **Examples**:
**** **Hydrogen gas (H₂)**
**** **Metal hydrides (NaBH₄)**
**** **Carbon monoxide (CO)**
**** **Metals: Zinc (Zn), Aluminum (Al)**

** **Example Reaction: Sodium + Chlorine → Sodium Chloride**
*** **Equation**: 2Na + Cl₂ → 2NaCl
*** **Roles**:
**** **Na (Sodium) = Reducing Agent** (Oxidized)
**** **Cl₂ (Chlorine) = Oxidizing Agent** (Reduced)

@endmindmap
            `} />

            <PlantUMLDiagram code={`@startmindmap
<style>
mindmapDiagram {
    BackgroundColor WhiteSmoke
    LineColor Black
    NodeFontColor Black
}
:depth(1) {
    BackgroundColor DarkBlue
    FontColor White
}
:depth(2) {
    BackgroundColor RoyalBlue
    FontColor White
}
:depth(3) {
    BackgroundColor LightSkyBlue
    FontColor Black
}
:depth(4) {
    BackgroundColor LightCyan
    FontColor Black
}
</style>

* **Identifying Oxidizing and Reducing Agents**
** **Reaction: Fe₂O₃ + 3CO → 2Fe + 3CO₂**
*** **Oxidation States of Elements**
**** **Fe₂O₃:** Fe = **+3**, O = **-2**
**** **CO:** C = **+2**, O = **-2**
**** **Fe (product):** 0
**** **CO₂:** C = **+4**, O = **-2**

*** **Step-by-Step Identification**
**** **Carbon is oxidized** → Its oxidation state **increases** from **+2 to +4**.
**** **Iron is reduced** → Its oxidation state **decreases** from **+3 to 0**.
**** **Reducing Agent:** **CO** (since **C is oxidized**).
**** **Oxidizing Agent:** **Fe₂O₃** (since **Fe is reduced**).

*** **Important Note**
**** **The whole molecule or formula unit is the oxidizing or reducing agent**, not just the individual atom.

@endmindmap
`}/>


<PlantUMLDiagram code={`
        @startmindmap
<style>
mindmapDiagram {
    BackgroundColor WhiteSmoke
    LineColor Black
    NodeFontColor Black
}
:depth(1) {
    BackgroundColor DarkRed
    FontColor White
}
:depth(2) {
    BackgroundColor FireBrick
    FontColor White
}
:depth(3) {
    BackgroundColor OrangeRed
    FontColor White
}
:depth(4) {
    BackgroundColor LightCoral
    FontColor Black
}
</style>

* **Example 7.6: Identifying Oxidizing and Reducing Agents**
** **Reaction: WO₃ + 3H₂ → W + 3H₂O**
*** **Problem-Solving Strategy**
**** **Step 1:** Determine oxidation states of all elements.
**** **Step 2:** Identify the element that **increases** in oxidation state → **Reducing Agent**.
**** **Step 3:** Identify the element that **decreases** in oxidation state → **Oxidizing Agent**.

*** **Solution**
**** **Oxidation States:**
***** **WO₃:** W = **+6**, O = **-2**.
***** **H₂:** H = **0**.
***** **W (Product):** **0**.
***** **H₂O:** H = **+1**, O = **-2**.
**** **Identifying Agents**
***** **WO₃ is the Oxidizing Agent** (W is reduced: **+6 → 0**).
***** **H₂ is the Reducing Agent** (H is oxidized: **0 → +1**).

*** **Concept Assessment Exercise 7.5**
**** **1. Identify oxidizing and reducing agents in the following reactions:**
***** a) **2S + Cl₂ → S₂Cl₂**
***** b) **2Na + Br₂ → 2NaBr**
**** **2. Differentiate between oxidizing and reducing agents.**

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
    BackgroundColor DarkSlateBlue
    FontColor White
}
:depth(2) {
    BackgroundColor MediumPurple
    FontColor White
}
:depth(3) {
    BackgroundColor Plum
    FontColor Black
}
:depth(4) {
    BackgroundColor Lavender
    FontColor Black
}
</style>

* **Redox in Photography**
** **Silver and Its Properties**
*** **Soft Metal:** Silver atoms have weak interactions and are loosely packed.
*** **Tarnishing:** Reacts with **H₂S** or **SO₂** in the atmosphere.
*** **Reaction with Sulfur:** Silver tarnish is **Silver Sulfide (Ag₂S)**.
*** **Food Reaction:** Sulfur-rich foods like **eggs** speed up tarnishing.

** **Effects of Tarnishing**
*** **Blackish Appearance:** Silver loses its shine due to Ag₂S formation.
*** **Impact on Objects:** Decorative and practical objects turn black.

** **Plating with Silver**
*** **Purpose:** To maintain a shiny appearance and prevent tarnishing.
*** **Firm Adherence:** Silver atoms in thin layers adhere to metal objects.
*** **Durability:** Forms a protective, durable coating.
*** **Thick Plating:** Many silver layers provide protection but still tarnish over time.

@endmindmap
        `} />
    </div>
  )
}

export default Mindmap