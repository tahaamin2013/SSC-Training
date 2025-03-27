import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Nature of Science in Chemistry</h1>
        <PlantUMLDiagram
          code={`
@startmindmap
skinparam BackgroundColor white
skinparam NodeFontSize 12

*[#E6F3FF]:DEFINITION OF CHEMISTRY AND
ITS INTERACTION WITH OTHER MATTER
AND ENERGY;
**[#F0F9FF] Definition
***[#F5FBFF] Science that Investigates
****[#F8FDFF] The materials of the universe
*****[#FAFEFF] Example: Water (H₂O), Oxygen (O₂), Carbon Dioxide (CO₂) 
****[#F8FDFF] The changes that these materials undergo
*****[#FAFEFF] Example: Rusting of iron (Fe + O₂ → Fe₂O₃)  
***[#F5FBFF] Chemistry deals with
****[#F8FDFF] Composition of Matter & Energy
*****[#FAFEFF] Example: Water (H₂O) – Its composition (H & O atoms),
****[#F8FDFF] Structure of Matter & Energy
*****[#FAFEFF] Example: Water (H₂O), Structure (bent molecular shape)
****[#F8FDFF] Properties of Matter & Energy
*****[#FAFEFF] Example: Water (H₂O), Properties (boiling point 100°C)
****[#F8FDFF] Behavior of Matter & Energy
*****[#FAFEFF] Example: Water (H₂O), Behavior (dissolves many substances)
****[#F8FDFF] Changes in Matter & Energy
*****[#FAFEFF] Example: Water (H₂O), Changes (evaporation, freezing, condensation)
**[#FFE6E6] Applications
***[#FFF0F0] Explaining natural phenomena
****[#FFF5F5] Example: Why the sky is blue (Rayleigh scattering)
***[#FFF0F0] Development of essential substances
****[#FFF5F5] Example: Production of fertilizers (Urea, NH₂CONH₂)
***[#FFF0F0] Development of drugs
****[#FFF5F5] Example: Aspirin (C₉H₈O₄) for pain relief
***[#FFF0F0] Development of technologies
****[#FFF5F5] Example: Lithium-ion batteries in smartphones  
**[#E6FFE6] Green Chemistry
***[#F0FFF0] Model for chemical products and processes that
****[#F5FFF5] Reduces use of hazardous substances
***[#F0FFF0] Helps understand pollution
***[#F0FFF0] Aids in reducing pollution
@endmindmap`}
        />
       
      </section>
    </div>
  );
};

export default MagneticMindmap;