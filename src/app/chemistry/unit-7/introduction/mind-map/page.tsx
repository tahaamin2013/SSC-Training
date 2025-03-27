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

* **Oxidation-Reduction Reactions (Redox)**
** **Introduction**
*** Fundamental chemical processes
*** Crucial in natural and industrial applications
** **Natural Phenomena**
*** Forest Fires
*** Metabolism of Food (Humans & Animals)
** **Industrial Applications**
*** Electricity Production (Batteries)
*** Decolorization (Household Bleaches)
*** Metal & Chemical Production
** **Electrochemistry**
*** Batteries
*** Fuel Cells
*** Conversion of Chemical Energy to Electrical Energy

@endmindmap
            `}
      />
    </div>
  );
};

export default Mindmap;
