import PlantUMLDiagram from '@/components/PlantUMLDiagram'
import React from 'react'

const page = () => {
  return (
    <div>
        <PlantUMLDiagram code={`
           @startmindmap
<style>
mindmapDiagram {
    backgroundColor WhiteSmoke
    lineColor Black
    node {
        FontColor Black
    }
    :depth(1) {
        BackgroundColor CornflowerBlue
        FontColor White
    }
    :depth(2) {
        BackgroundColor Gold
        FontColor Black
    }
    :depth(3) {
        BackgroundColor PaleGreen
        FontColor Black
    }
}
</style>

* **Oxidation States and Rules** 🌡️
** **7.2.1 Oxidation States** 🔢
*** **Definition** 📖
**** Oxidation state (oxidation number) is **the number of charges an atom has** in a molecule or compound.
*** **Key Concept** 💡
**** **Oxidation** = **Increase in oxidation number** 📈
**** **Reduction** = **Decrease in oxidation number** 📉
*** **Example Question** ❓
**** **In HCl, is H oxidized and Cl reduced?**
***** Since **H** goes from **0** in **H₂** (its elemental form) to **+1** in **HCl**, it **loses an electron**, meaning **H is oxidized**.
***** Since **Cl** goes from **0** in **Cl₂** (its elemental form) to **-1** in **HCl**, it **gains an electron**, meaning **Cl is reduced**.
***** So, **H is oxidized, and Cl is reduced** in this reaction. 🔥⚡
** **Comparison of Oxidation & Reduction** ⚖️
*** **Table 7.1: Processes Leading to Oxidation and Reduction** 📊
**** **Oxidation** 🔥
***** ✅ **Gain of oxygen**
***** ✅ **Loss of hydrogen**
***** ✅ **Loss of electrons** ⚡
***** ✅ **Increase in oxidation number** 📈
**** **Reduction** 💧
***** ✅ **Loss of oxygen**
***** ✅ **Gain of hydrogen**
***** ✅ **Gain of electrons** ⚡
***** ✅ **Decrease in oxidation number** 📉

@endmindmap
            `} />

            <PlantUMLDiagram code={`
                @startmindmap
<style>
mindmapDiagram {
    backgroundColor WhiteSmoke
    lineColor Black
    node {
        FontColor Black
    }
    :depth(1) {
        BackgroundColor SteelBlue
        FontColor White
    }
    :depth(2) {
        BackgroundColor LightGoldenrodYellow
        FontColor Black
    }
    :depth(3) {
        BackgroundColor PaleGreen
        FontColor Black
    }
}
</style>

* **Rules for Assigning Oxidation States or Numbers**
** **General Rules**
*** **Uncombined Elements**
**** Oxidation state of any **free element** is always **zero** (e.g., Zn, Na, H in H₂, S in S₈).
**** **Free element** means the element is not chemically bonded to any other different element.
**** Sulfur in S₈ has an oxidation state of 0 since **all atoms are the same**.
*** **Simple Ions**
**** Oxidation state is the **same as their charge** (e.g., Na⁺ = +1, Ca²⁺ = +2).
*** **Complex Ions**
**** Sum of oxidation states equals the **charge on the ion**.
**** Example: In **CO₃²⁻**, sum of oxidation states of C and 3 O atoms is **-2**.
**** Example: In **NH₄⁺**, sum of oxidation states of N and 4 H atoms is **+1**.
*** **Molecules or Compounds**
**** Sum of oxidation numbers of atoms in a **neutral molecule** is **zero**.
**** Example: In **HCl**, sum of oxidation states of H and Cl is **zero**.
**** Example: In **CO₂**, sum of oxidation states of **1 C and 2 O atoms** is **zero**.

** **Oxidation States of Some Elements**
*** **Group-IA** → +1
*** **Group-IIA** → +2
*** **Group-IIIA** → +3
*** **Group-VIIA** → -1
*** **Hydrogen (H)** → +1 (**except in metal hydrides, where it is -1**)
*** **Oxygen (O)** → -2 (**except in peroxides and in OF₂**)

** **Oxidation Numbers of Ions**
*** **Monatomic Ions**
**** Oxidation number of a **monatomic ion** is equal to **its charge**.
**** Example: Na⁺ forms after Na loses **one electron** → **Oxidation number = +1**.
**** Example: Cl⁻ forms after Cl **gains one electron** → **Oxidation number = -1**.
**** Oxidation number represents **electrons lost or gained**.

*** **Polyatomic Ions**
**** Sum of oxidation numbers in a **polyatomic ion** equals the **charge on the ion**.
**** Example: In **CO₃²⁻**, oxidation numbers:
***** Carbon (C) = +4
***** Oxygen (O) = -2 (each)
***** Sum = **1(+4) + 3(-2) = -2**, which matches the charge.

@endmindmap

                `} />
            <PlantUMLDiagram code={`
                    @startmindmap
<style>
mindmapDiagram {
    LineColor Black
    NodeFontColor Black
}
:depth(1) {
    BackgroundColor SteelBlue
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

* **Determining the Oxidation Number of an Atom in a Compound**
** **General Strategy**
*** Use **Rules from Section 7.2.2** to assign known oxidation numbers.
*** Use the **sum rule**: Total oxidation number in a neutral compound is **zero**.
*** In a polyatomic ion, the sum equals the **ion charge**.

** **Example 7.3: Oxidation Number of Cr in K₂Cr₂O₇**
*** **Given Compound**: K₂Cr₂O₇ (Potassium Dichromate)
*** **Step 1**: Assign oxidation numbers of known elements.
**** **K (Group-IA):** +1 → 2K atoms contribute **2(+1) = +2**
**** **Oxygen (O):** -2 → 7O atoms contribute **7(-2) = -14**
*** **Step 2**: Let oxidation state of Cr be **x**.
**** Since there are **2 Cr atoms**, total oxidation for Cr = **2x**
**** Equation: **+2 + 2x - 14 = 0**
**** Solve for x: **2x = 12 → x = +6**
*** **Conclusion**: **Cr in K₂Cr₂O₇ has an oxidation state of +6**.

** **Example 7.4: Oxidation Number of B in H₃BO₃**
*** **Given Compound**: Boric Acid (H₃BO₃)
*** **Step 1**: Assign known oxidation numbers.
**** **H:** +1 → 3H atoms contribute **3(+1) = +3**
**** **O:** -2 → 3O atoms contribute **3(-2) = -6**
*** **Step 2**: Let oxidation state of **B** be **x**.
**** Equation: **+3 + x - 6 = 0**
**** Solve for x: **x - 3 = 0 → x = +3**
*** **Conclusion**: **B in H₃BO₃ has an oxidation state of +3**.

** **Concept Assessment Exercise 7.3**
*** **Determine Oxidation Numbers for:**
**** **N in NO₂ and HNO₃**
**** **S in SO₂ and H₂SO₄**

** **Example 7.5: Oxidation Number of C in Carbonate Ion (CO₃²⁻)**
*** **Given Ion**: CO₃²⁻ (Carbonate Ion)
*** **Step 1**: Assign known oxidation numbers.
**** **Oxygen (O):** -2 → 3O atoms contribute **3(-2) = -6**
*** **Step 2**: Let oxidation state of C be **x**.
**** Equation: **x - 6 = -2**
**** Solve for x: **x = +4**
*** **Conclusion**: **C in CO₃²⁻ has an oxidation state of +4**.

** **Concept Assessment Exercise 7.4**
*** **Determine Oxidation Numbers for:**
**** **S in Sulfate Ion (SO₄²⁻)**
**** **P in Phosphate Ion (PO₄³⁻)**
**** **N in Ammonium Ion (NH₄⁺)**
@endmindmap
                `} />

    </div>
  )
}

export default page