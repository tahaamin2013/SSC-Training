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
    BackgroundColor RoyalBlue
    FontColor White
}
:depth(2) {
    BackgroundColor LightSkyBlue
    FontColor Black
}
:depth(3) {
    BackgroundColor PaleGreen
    FontColor Black
}
:depth(4) {
    BackgroundColor Gold
    FontColor Black
}
</style>

* **Formula of an Ionic Compound**
** **Steps to Determine the Formula**
*** Identify the **ions** and their **charges**.
*** Determine the **simplest whole-number ratio** of cations and anions.
*** Write the formula ensuring **electrical neutrality**.

** **Example: Calcium Chloride (CaCl₂)**
*** **Step 1**: Identify ions → **Ca²⁺ and Cl⁻**
*** **Step 2**: Balance charges → **2 Cl⁻ ions needed for 1 Ca²⁺**
*** **Step 3**: Write the formula → **CaCl₂**

** **Example: Magnesium Oxide (MgO)**
*** **Step 1**: Identify ions → **Mg²⁺ and O²⁻**
*** **Step 2**: Balance charges → **1 Mg²⁺ balances 1 O²⁻**
*** **Step 3**: Write the formula → **MgO**

** **Example: Aluminum Sulphate (Al₂(SO₄)₃)**
*** **Step 1**: Identify ions → **Al³⁺ and SO₄²⁻**
*** **Step 2**: Balance charges → **2 Al³⁺ for 3 SO₄²⁻**
*** **Step 3**: Write the formula → **Al₂(SO₄)₃**
*** **Note**: Parentheses are used for polyatomic ions.

** **Use of Roman Numerals as Oxidation Numbers**
*** Used for **transition metals** with **variable oxidation states**.
*** **Examples:**
**** **CuSO₄ → Copper (II) Sulphate**
**** **FeCl₂ → Iron (II) Chloride**
**** **FeCl₃ → Iron (III) Chloride**
*** **Examples of Variable Oxidation States in Transition Metals**
**** **Copper (Cu):** +1, +2 → Cu₂O (Cu⁺), CuSO₄ (Cu²⁺)
**** **Iron (Fe):** +2, +3 → FeCl₂ (Fe²⁺), FeCl₃ (Fe³⁺)
**** **Manganese (Mn):** +2, +4, +7 → MnO₂ (Mn⁴⁺), KMnO₄ (Mn⁷⁺)
**** **Chromium (Cr):** +2, +3, +6 → CrCl₃ (Cr³⁺), K₂Cr₂O₇ (Cr⁶⁺)
@endmindmap
            `} />
    </div>
  )
}

export default Mindmap