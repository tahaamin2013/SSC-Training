import React from 'react'
import PlantUMLDiagram from "@/components/PlantUMLDiagram";

const page = () => {
  return (
    <div>
        <h1 className='text-2xl ml-5 mt-6 font-bold'>Introduction of Chemical Bonding</h1>
              <PlantUMLDiagram
                    code={`@startmindmap
    <style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
                .group {
        BackgroundColor lightBlue
            MaximumWidth 200
    }
    :depth(1) {
        BackgroundColor lightGreen
    }
    :depth(2) {
        BackgroundColor lightYellow
    }
}
</style>

* INTRODUCTION

** Matter Composition
*** Compounds
**** Different atoms bonded together
**** Examples
***** Human, animal, plant bodies
***** Rocks, soil
***** Petroleum, coal
*** Mixtures
**** Complex mixtures of compounds
*** Elements (Few)
**** Unbounded atoms
**** Examples
***** Helium (He)
***** Neon (Ne)
***** Argon (Ar)
***** Xenon (Xe)
***** Krypton (Kr)

left side

** Bonding & Structure
*** Profound effect on properties
*** Examples of varying properties
**** Hard & Tough substances
**** Soft & Flexible substances
*** Applications & Related Questions
**** Resins
***** Used in paints (dams, bridges, buildings, automobiles)
***** What makes them sticky?
**** Adhesives (Glue)
***** How do they bind surfaces?
***** What is the nature of linkages?

** Key Concept
*** Chemical Bonding
*** Molecular Structure

** Importance
*** Understanding behavior of substances
*** Basis for further study

@endmindmap`}
                />
    </div>
  )
}

export default page
