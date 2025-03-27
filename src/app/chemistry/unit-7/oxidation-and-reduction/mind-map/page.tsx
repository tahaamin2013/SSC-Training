import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const Mindmap = () => {
  return (
    <div>
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

* **7.1 Oxidation and Reduction**
** **Definition of Redox Reactions**
*** Transfer of oxygen, hydrogen, and electrons
*** Oxidation and reduction occur simultaneously
** **7.1.1 Oxidation-Reduction in Terms of Oxygen Transfer**
*** **Oxidation:** Gain of oxygen
*** **Reduction:** Loss of oxygen
*** **Example (Iron Extraction)**
**** Fe₂O₃ + 3CO → 2Fe + 3CO₂
**** CO gains oxygen → Undergoes oxidation
**** Fe₂O₃ loses oxygen → Undergoes reduction
** **7.1.2 Oxidation-Reduction in Terms of Hydrogen Transfer**
*** **Oxidation:** Loss of hydrogen
*** **Reduction:** Gain of hydrogen
*** **Example (Acetylene Combustion)**
**** 2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O
**** C₂H₂ loses hydrogen → Undergoes oxidation
**** O₂ gains hydrogen → Undergoes reduction
** **7.1.3 Oxidation-Reduction in Terms of Electron Transfer**
*** **Oxidation:** Loss of electrons
*** **Reduction:** Gain of electrons
*** **Example (Zinc and Copper Reaction)**
**** CuO + Zn → Cu + ZnO
**** Ionic form: Cu²⁺ + Zn → Cu + Zn²⁺
**** Cu²⁺ gains electrons → Undergoes reduction
**** Zn loses electrons → Undergoes oxidation
** **Summary**
*** **Oxidation:** Loss of hydrogen, gain of oxygen, or loss of electrons
*** **Reduction:** Gain of hydrogen, loss of oxygen, or gain of electrons

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

* **Oxidation and Reduction**
** **Example 7.1: Identifying Oxidation (Oxygen/Hydrogen Transfer)**
*** **Reaction:** CH₄ + 2O₂ → CO₂ + 2H₂O + heat
*** **Problem-Solving Strategy**
**** Identify the substance that **gains oxygen** or **loses hydrogen**.
*** **Solution**
**** C in CH₄ **loses H-atoms** and combines with O → **Oxidation**
**** O-atoms combine with H to form H₂O → **Reduction**
** **Society, Technology, and Science: Redox in Photography**
*** **Photographic Film**
**** Emulsion of **silver bromide (AgBr)** in gelatin
**** **Exposure to light** activates silver bromide granules
*** **Development Process**
**** **Reducing agent (hydroquinone)** converts Ag⁺ → **Ag (black metallic silver)**
**** Inactivated AgBr removed using **sodium thiosulphate (fixer)**
*** **Reaction:** Ag⁺ + 1e⁻ → Ag
*** **Darkest areas on film** = **Highest metallic silver concentration**
*** **Photography involves Redox reactions**
** **Concept Assessment Exercise 7.1**
*** Identify oxidation & reduction in:
**** **N₂ + 3H₂ → 2NH₃**
**** **2H₂O → 2H₂ + O₂**
**** **Fe₂O₃ + 3CO → 2Fe + 3CO₂**
**** **4Al + 3O₂ → 2Al₂O₃**
** **Example 7.2: Identifying Oxidation (Electron Transfer)**
*** **Reaction:** 2Ca + O₂ → 2CaO
*** **Problem-Solving Strategy**
**** **Metals (Ca)** → Lose electrons (oxidation)
**** **Non-Metals (O₂)** → Gain electrons (reduction)
*** **Solution**
**** **Calcium (Ca) Oxidation:**  
***** **2Ca → 2Ca²⁺ + 4e⁻**
**** **Oxygen (O₂) Reduction:**  
***** **O₂ + 4e⁻ → 2O²⁻**
** **Concept Assessment Exercise 7.2**
*** Identify oxidation & reduction in:
**** **4Na + O₂ → 2Na₂O**
**** **2Al + 3Cl₂ → 2AlCl₃**
**** **Mg + Cl₂ → MgCl₂**
@endmindmap
        `} />
    </div>
  );
};

export default Mindmap;
