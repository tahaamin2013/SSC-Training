import Image from "next/image";
import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">SOLUTION</h1>
        <p>Q6: Define Solution, and also write down its properties. </p>
        <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">Solutions</h1>
      
      <h2 className="text-xl font-semibold">Definition:</h2>
      <p className="mb-4">A solution is a mixture where one substance dissolves in another. It looks the same throughout.</p>
      
      <h2 className="text-xl font-semibold">Examples:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Saltwater</li>
        <li>Sugar water</li>
        <li>Vinegar</li>
        <li>Metal alloys like brass</li>
        <li>Air</li>
      </ul>
      
      <h2 className="text-xl font-semibold">Properties of a Solution:</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>A solution is completely mixed and looks uniform.</li>
        <li>The solute particles are tiny, smaller than 1 nm.</li>
        <li>You cannot see the particles, even with a microscope.</li>
        <li>A solution passes through filter paper, so it cannot be filtered.</li>
        <li>Solutions stay mixed and do not separate over time.</li>
        <li>They do not scatter light because the particles are very small.</li>
      </ol>
    </div>
        <p>Q7: What are the components of solution and write its properties. </p>
        <div className="p-6 max-w-3xl mx-auto text-lg leading-relaxed">
      <h1 className="text-2xl font-bold mb-4">Understanding Solutions</h1>
      <p>A solution is a uniform mixture of two or more substances. It has two main parts:</p>
      
      <h2 className="text-xl font-semibold mt-4">Components of a Solution</h2>
      <ul className="list-disc ml-6">
        <li><strong>Solute:</strong> The substance that dissolves. It is present in a smaller amount.</li>
        <li><strong>Solvent:</strong> The substance that dissolves the solute. It is present in a larger amount.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Examples</h2>
      <p>In a salt solution, salt is the solute and water is the solvent. Some solutions have multiple solutes, like soft drinks. Here, water is the solvent, and sugar, salts, and CO₂ are solutes. Air is another example, where nitrogen is the solvent, and oxygen, carbon dioxide, and other gases are solutes.</p>

      <h2 className="text-xl font-semibold mt-4">Types of Solutions</h2>
      <p>Solutions exist in different physical states based on the state of the solvent.</p>
      
      <h3 className="text-lg font-semibold mt-3">Gaseous Solutions</h3>
      <p>These have a gas as the solvent. The Haber&apos;s process uses a mixture of nitrogen and hydrogen to produce ammonia. Other examples include:</p>
      <ul className="list-disc ml-6">
        <li>Fog, clouds, and mist (water droplets in air)</li>
        <li>Smoke (carbon particles in air)</li>
      </ul>

      <h3 className="text-lg font-semibold mt-3">Liquid Solutions</h3>
      <p>Here, the solvent is a liquid. Examples include:</p>
      <ul className="list-disc ml-6">
        <li>Carbonated drinks (water as solvent, CO₂ as solute)</li>
        <li>Vinegar (acetic acid in water)</li>
        <li>Brine and sugar solutions (salt or sugar in water)</li>
      </ul>
      
      <h3 className="text-lg font-semibold mt-3">Solid Solutions</h3>
      <p>In solid solutions, the solvent is solid. Examples include:</p>
      <ul className="list-disc ml-6">
        <li>Hydrogen gas absorbed by nickel (used in the ghee industry)</li>
        <li>Amalgams (metals dissolved in liquid mercury)</li>
        <li>Alloys (mixtures of metals like brass, bronze, and steel)</li>
      </ul>
    </div>
        <p>Q8: Write classification of solution in detail </p>
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Classification of Solutions</h1>
      
      <section>
        <h2 className="text-xl font-semibold">1. Based on Solvent Nature</h2>
        <p>Solutions are classified by the type of solvent used.</p>
        
        <h3 className="text-lg font-semibold mt-2">Aqueous Solutions</h3>
        <p>These solutions use water as the solvent.</p>
        <p><strong>Example:</strong> Salt in water, sugar in water.</p>
        <p>Water is called the universal solvent because it dissolves many substances.</p>
        
        <h3 className="text-lg font-semibold mt-2">Non-Aqueous Solutions</h3>
        <p>These solutions use solvents other than water, such as alcohol or ammonia.</p>
        <p><strong>Example:</strong> Sugar dissolved in alcohol.</p>
      </section>
      
      <section className="mt-4">
        <h2 className="text-xl font-semibold">2. Based on Solubility</h2>
        
        <h3 className="text-lg font-semibold mt-2">Saturated Solutions</h3>
        <p>These contain the maximum solute that can dissolve at a given temperature.</p>
        <p>If more solute is added, it won’t dissolve.</p>
        <p><strong>Example:</strong> A sugar solution with the maximum sugar dissolved.</p>
        
        <h3 className="text-lg font-semibold mt-2">Unsaturated Solutions</h3>
        <p>These have less solute than they can hold. More solute can still dissolve.</p>
        <p><strong>Example:</strong> A sugar solution that can still dissolve more sugar.</p>
        
        <h3 className="text-lg font-semibold mt-2">Supersaturated Solutions</h3>
        <p>These hold more solute than a saturated solution. They are unstable.</p>
        <p>Formed by heating a solution, dissolving excess solute, and cooling it slowly.</p>
        <p><strong>Example:</strong> A sugar solution that, when cooled, forms sugar crystals.</p>
      </section>
      
      <section className="mt-4">
        <h2 className="text-xl font-semibold">3. Based on Solute Quantity</h2>
        
        <h3 className="text-lg font-semibold mt-2">Concentrated Solutions</h3>
        <p>Contain a high amount of solute relative to the solvent.</p>
        <p><strong>Example:</strong> 90% sugar, 10% water.</p>
        
        <h3 className="text-lg font-semibold mt-2">Dilute Solutions</h3>
        <p>Contain a low amount of solute relative to the solvent.</p>
        <p><strong>Example:</strong> 10% sugar, 90% water.</p>
      </section>
    </div>
        <p>Q9: Define Solubility. What are the factors which affect solubility? </p>
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Solubility</h1>
      <h2 className="text-xl font-semibold mt-4">Definition</h2>
      <p className="mt-2">
        Solubility is the maximum amount of a substance that can dissolve in 100 grams of a solvent at a given temperature.
      </p>
      <p className="mt-2">
        If the solvent is water, solubility refers to how much of a substance can dissolve in 100 grams of water at a specific temperature.
      </p>
      
      <h2 className="text-xl font-semibold mt-4">Factors Affecting Solubility</h2>
      <p className="mt-2">Solubility depends on the type of solvent, temperature, and pressure.</p>
      
      <h2 className="text-xl font-semibold mt-4">Effect of Temperature on Solubility</h2>
      <h3 className="text-lg font-medium mt-2">Solids in Liquids</h3>
      <p className="mt-2">
        Most solids dissolve better in hot liquids. Heat gives energy to molecules, helping them break apart and mix into the liquid.
      </p>
      <p className="mt-2">Example: Sugar dissolves better in hot water.</p>
      <p className="mt-2 font-semibold">Exception: Some solids dissolve less in hot water. Example: Calcium sulfate.</p>
      
      <h3 className="text-lg font-medium mt-2">Liquids in Liquids</h3>
      <p className="mt-2">
        Temperature has little effect on liquid-to-liquid solubility because both are already in the same phase.
      </p>
      <p className="mt-2">Example: Ethanol and water mix well at all temperatures.</p>
      
      <h3 className="text-lg font-medium mt-2">Gases in Liquids</h3>
      <p className="mt-2">
        Gases dissolve less in warm liquids. Higher temperature makes gas molecules move faster and escape.
      </p>
      <p className="mt-2">Example: Soda loses fizz faster in warm temperatures.</p>
      
      <h2 className="text-xl font-semibold mt-4">Solubility of Some Salts</h2>
      <table className="mt-4 w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Solute</th>
            <th className="border border-gray-300 p-2">At 20°C</th>
            <th className="border border-gray-300 p-2">At 100°C</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">NaCl</td>
            <td className="border border-gray-300 p-2">36.5g</td>
            <td className="border border-gray-300 p-2">39.2g</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">KCl</td>
            <td className="border border-gray-300 p-2">37.5g</td>
            <td className="border border-gray-300 p-2">77g</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Ca(OH)₂</td>
            <td className="border border-gray-300 p-2">0.173g</td>
            <td className="border border-gray-300 p-2">0.066g</td>
          </tr>
        </tbody>
      </table>
      
      <p className="mt-4">Example: Calcium hydroxide dissolves less in hot water.</p>
    </div>

    <p>5. Describe the factors that influence the solubility of a substance, with a specific focus on the effect of temperature. </p>
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center">Factors Affecting Solubility</h1>
      <ul className="list-decimal pl-6 space-y-2">
        <li><strong>Solute & Solvent Nature:</strong> Substances dissolve best in similar types of solvents. Polar dissolves polar, non-polar dissolves non-polar.</li>
        <li><strong>Temperature:</strong> Higher temperatures usually help solids dissolve faster in liquids. However, gases dissolve less as temperature rises.</li>
        <li><strong>Pressure:</strong> This mostly affects gases. More pressure means more gas dissolves in liquids.</li>
        <li><strong>Stirring:</strong> Mixing speeds up the dissolving process by spreading solute particles evenly.</li>
      </ul>
    </div>
    <p>6 . If you have a saturated solution of sugar in water, what will happen if you increase the temperature and why? </p>
    <div className="p-6 bg-gray-50 min-h-screen text-gray-800">
      <div className="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-2xl">
        <h1 className="text-2xl font-bold mb-4">Understanding Matter</h1>
        <p className="mb-4">
          When you heat a saturated sugar solution, more sugar dissolves. This is because higher temperature breaks forces between molecules, allowing more sugar to mix in.
        </p>
        
        <h2 className="text-xl font-semibold mt-4">Key Points</h2>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Matter:</strong> Anything with mass that takes up space.</li>
          <li><strong>Plasma:</strong> A charged gas affected by electric and magnetic fields.</li>
          <li><strong>Allotropy:</strong> An element’s ability to exist in different forms.</li>
          <li><strong>Element:</strong> The simplest matter, made of identical atoms.</li>
          <li><strong>Compound:</strong> A substance with two or more different atoms bonded together.</li>
          <li><strong>Solution:</strong> A uniform mixture of two or more substances.</li>
          <li><strong>Aqueous Solution:</strong> A solution where water is the solvent.</li>
          <li><strong>Saturated Solution:</strong> A solution that holds the maximum solute at a given temperature.</li>
          <li><strong>Unsaturated Solution:</strong> A solution with less solute than a saturated one.</li>
          <li><strong>Colloid:</strong> A mixture with particles between 1 and 1000 nanometers.</li>
          <li><strong>Suspension:</strong> A mix where solid particles float but don’t dissolve.</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-4">Study Resources</h2>
        <p className="mt-2">
          Students preparing for FBISE exams can refer to both NBF and Cantab books. These resources ensure comprehensive learning and help in SLO-based exam preparation.
        </p>
      </div>
    </div>
    <PlantUMLDiagram
          code={`
@startmindmap
*[#lightblue] Solutions
**[#lightcyan] Definition of Solution
***[#white] Homogeneous mixture of two or more substances
**[#palegreen] Key characteristics
***[#white] One substance dissolved in another
***[#white] No visible particles
***[#white] Uniform appearance
**[#pink] Components
***[#white] Solute
***[#white] Solvent
**[#lavender] Particle size
***[#white] Microscopic (< 1 nm)
**[#lightyellow] Stability
***[#white] Very stable
left side
**[#peachpuff] Types
***[#lightsalmon] Gaseous solutions
****[#white] Solute: Gas, liquid, or solid
****[#white] Solvent: Gas
****[#white] Examples
*****[#white] Ammonia Solution in Haber's process
****** Solute (nitrogen [N₂])
****** Solvent (hydrogen [H₂])
*****[#white] Urea Solution
****** Solute (NH₃ [Ammonia])
****** Solvent (CO₂ [Carbon Dioxide])
*****[#white] Fog, clouds, mist are examples of solutions
****** Solute (Liquid Water)
****** Solvent (Air)
*****[#white] Smoke (Solution)
****** Solute (Carbon Particle)
****** Solvent (Gaseous Air)
***[#lightblue] Liquid solutions
****[#white] Examples
*****[#white] Carbonated drinks (Solutions)
****** Solute (Gaseous Carbon dioxide)
****** Solvent (Liquid Water)
*****[#white] Rectified spirit Produced by fermentation of sugar cane
****** Solute (Liquid)
****** Solvent (Liquid)
*****[#white] Vinegar (Acetic Acid in Water)
****** Solute (Liquid)
****** Solvent (Water)
*****[#white] Brine & Sugar syrup (Solution)
****** Solute (Solid Salt and Sugar)
****** Solvent (Water)
***[#plum] Solid solutions
****[#white] Examples
*****[#white] Hydrogen gas on Nickle Metal surface in Ghee Industry
****** Solute (Hydrogen Gas)
****** Solvent (Nickle Catalyst)
*****[#white] Amalgam
****** Solute (Any Metal [Solid])
****** Solvent (Liquid Mercury)
*****[#white] Alloys
******[#white] Brass
******[#white] Bronze
******[#white] Steel
@endmindmap`}
        />

        <Image
          src="/solute-solvent-solution4 (1).png"
          alt="Solute Solvent Solution Image"
          className="fixed bottom-0 left-0"
          width={200}
          height={200}
        />
      </section>

      <div className="p-8 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg shadow-xl">
        <h1 className="text-3xl font-extrabold text-teal-800 mb-6">Solution</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            I. Solution
          </h2>
          <h3 className="text-xl font-bold text-teal-600 mb-2">
            A. Definition
          </h3>
          <p className="text-blue-900 bg-blue-100 p-4 rounded-lg">
            Homogeneous mixture of two or more substances.
          </p>

          <h3 className="text-xl font-bold text-teal-600 mt-4 mb-2">
            B. Key characteristics:
          </h3>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>1. One substance dissolved in another</li>
            <li>2. No visible particles of different substances</li>
            <li>3. Uniform appearance</li>
          </ul>

          <h3 className="text-xl font-bold text-teal-600 mt-4 mb-2">
            C. Components:
          </h3>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>1. Solute: Substance that is dissolved</li>
            <li>2. Solvent: Substance in which solute is dissolved</li>
          </ul>

          <h3 className="text-xl font-bold text-teal-600 mt-4 mb-2">
            D. Particle size:
          </h3>
          <p className="text-blue-900 bg-blue-100 p-4 rounded-lg">
            Microscopic ( 1 nm in diameter).
          </p>

          <h3 className="text-xl font-bold text-teal-600 mt-4 mb-2">
            E. Stability:
          </h3>
          <p className="text-blue-900 bg-blue-100 p-4 rounded-lg">
            Very stable, solute doesn&apos;t separate from solvent.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            II. Types of Solutions (based on physical states)
          </h2>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>A. Gaseous solutions</li>
            <li>B. Liquid solutions</li>
            <li>C. Solid solutions</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            III. Gaseous Solutions
          </h2>
          <h3 className="text-xl font-bold text-teal-600 mb-2">A. Solvent:</h3>
          <p className="text-blue-900 bg-blue-100 p-4 rounded-lg">Gas.</p>

          <h3 className="text-xl font-bold text-teal-600 mt-4 mb-2">
            B. Solute:
          </h3>
          <p className="text-blue-900 bg-blue-100 p-4 rounded-lg">
            Can be gas, liquid, or solid.
          </p>

          <h3 className="text-xl font-bold text-teal-600 mt-4 mb-2">
            C. Examples:
          </h3>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>1. Mixture of nitrogen and hydrogen (Haber&apos;s process)</li>
            <li>2. Mixture of ammonia and carbon dioxide (urea preparation)</li>
            <li>3. Fog, clouds, mist (liquid water in air)</li>
            <li>4. Smoke (carbon particles in air)</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            IV. Liquid Solutions
          </h2>
          <h3 className="text-xl font-bold text-teal-600 mb-2">A. Examples:</h3>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>1. Carbonated drinks (gaseous CO₂ in liquid water)</li>
            <li>2. Rectified spirit (liquid in liquid)</li>
            <li>3. Vinegar (acetic acid in water)</li>
            <li>4. Brine (solid salt in water)</li>
            <li>5. Sugar syrup (solid sugar in water)</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            V. Solid Solutions
          </h2>
          <h3 className="text-xl font-bold text-teal-600 mb-2">A. Examples:</h3>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>
              1. Hydrogen gas on nickel metal surface (used in ghee industry)
            </li>
            <li>2. Amalgam (metal dissolved in liquid mercury)</li>
            <li>3. Alloys (mixture of different metals)</li>
            <li className="ml-8">a. Brass</li>
            <li className="ml-8">b. Bronze</li>
            <li className="ml-8">c. Steel</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            VI. Real-life Examples
          </h2>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>
              A. Air: Gaseous solution (N₂ solvent; O₂, CO₂, trace gases as
              solutes)
            </li>
            <li>B. Seawater: Liquid solution</li>
            <li>C. Alloy: Solid solution</li>
          </ul>
        </div>
      </div>

      <section>
        <h1 className="text-4xl font-bold text-blue-500">Aqueous Solutions</h1>
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
* Aqueous Solutions
** Definition
*** Formed by dissolving a substance in water
** Dissolved substances
*** Solids
*** Gases
*** Other liquids
** Characteristics
*** Must be stable to be a true solution
** Examples
*** Sugar in water
*** Table salt in water
** Water as universal solvent
*** Dissolves majority of compounds in Earth&apos;s crust
** Usage
*** Mostly used in laboratories

center footer 2.4.1 Aqueous Solutions
@endmindmap`}
        />
      </section>

      <div className="p-8 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg shadow-xl">
        <h1 className="text-3xl font-extrabold text-indigo-800 mb-6">
          Aqueous Solutions
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            I. Aqueous Solutions
          </h2>
          <h3 className="text-xl font-bold text-indigo-600 mb-2">
            A. Definition
          </h3>
          <p className="text-blue-900 bg-blue-100 p-4 rounded-lg">
            Solution formed by dissolving a substance in water.
          </p>

          <h3 className="text-xl font-bold text-indigo-600 mt-4 mb-2">
            B. Characteristics:
          </h3>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>1. Can contain dissolved solids, gases, or liquids</li>
            <li>2. Must be stable to be a true solution</li>
          </ul>

          <h3 className="text-xl font-bold text-indigo-600 mt-4 mb-2">
            C. Examples:
          </h3>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>1. Sugar in water</li>
            <li>2. Table salt in water</li>
          </ul>

          <h3 className="text-xl font-bold text-indigo-600 mt-4 mb-2">
            D. Water as a universal solvent
          </h3>
          <p className="text-blue-900 bg-blue-100 p-4 rounded-lg">
            Water is known as a universal solvent because it can dissolve many
            substances.
          </p>

          <h3 className="text-xl font-bold text-indigo-600 mt-4 mb-2">
            E. Common use:
          </h3>
          <p className="text-blue-900 bg-blue-100 p-4 rounded-lg">
            Laboratories
          </p>
        </div>
      </div>

      <section>
        <h1 className="text-4xl font-bold text-blue-500">Saturated Solution</h1>
        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
  node {
    BackgroundColor lightGreen
  }
  :depth(1) {
    BackgroundColor lightBlue
  }
  :depth(2) {
    BackgroundColor pink
  }
  :depth(3) {
    BackgroundColor lightyellow
  }
}
</style>
* Types of Solutions
** Saturated Solution
*** Definition
**** Contains maximum amount of solute at given temperature
*** Characteristics
**** Solvent cannot dissolve more solute
**** Undissolved solute settles at bottom
**** Dynamic equilibrium between dissolved and undissolved solute
*** Particle Level
**** Undissolved solute in equilibrium with dissolved solute
*** Process
**** Dissolution and crystallization continue
**** Net amount of dissolved solute remains constant
** Unsaturated Solution
*** Definition
**** Contains less solute than required for saturation
*** Characteristics
**** Can dissolve more solute
**** Can become saturated by adding more solute
** Supersaturated Solution
*** Definition
**** More concentrated than saturated solution
*** Characteristics
**** Contains more solute than saturated solution
**** Not stable
*** Formation
**** Prepare saturated solution at high temperature
**** Cool to lower temperature
**** Excess solute crystallizes out
@endmindmap`}
        />
      </section>

      <div className="p-8 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg shadow-xl">
        <h1 className="text-3xl font-extrabold text-teal-800 mb-6">
          Types of Solutions Based on Concentration
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">
            II. Types of Solutions Based on Concentration
          </h2>

          <h3 className="text-xl font-bold text-teal-600 mb-2">
            A. Saturated Solution
          </h3>
          <ul className="list-disc list-inside text-green-900 ml-8">
            <li>
              1. Definition: Contains maximum amount of solute at a given
              temperature
            </li>
            <li>
              2. Characteristics:
              <ul className="list-disc list-inside text-green-900 ml-8">
                <li>a. No more solute can dissolve</li>
                <li>
                  b. Undissolved solute in equilibrium with dissolved solute
                </li>
                <li>c. Dynamic equilibrium established</li>
              </ul>
            </li>
          </ul>

          <h3 className="text-xl font-bold text-teal-600 mt-4 mb-2">
            B. Unsaturated Solution
          </h3>
          <ul className="list-disc list-inside text-green-900 ml-8">
            <li>
              1. Definition: Contains less solute than required for saturation
            </li>
            <li>2. Characteristic: Can dissolve more solute</li>
          </ul>

          <h3 className="text-xl font-bold text-teal-600 mt-4 mb-2">
            C. Supersaturated Solution
          </h3>
          <ul className="list-disc list-inside text-green-900 ml-8">
            <li>
              1. Definition: Contains more solute than a saturated solution
            </li>
            <li>
              2. Characteristics:
              <ul className="list-disc list-inside text-green-900 ml-8">
                <li>a. Unstable</li>
                <li>
                  b. Prepared by cooling a saturated solution from high
                  temperature
                </li>
              </ul>
            </li>
            <li>
              3. Identification: Crystallization occurs when seed crystal is
              added
            </li>
          </ul>
        </div>
      </div>

      <section>
        <h1 className="text-4xl font-bold text-blue-500">
          Solution Properties
        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
  node {
    BackgroundColor lightGreen
  }
  :depth(1) {
    BackgroundColor lightBlue
  }
  :depth(2) {
    BackgroundColor pink
  }
  :depth(3) {
    BackgroundColor lightyellow
  }
}
</style>
* Solution Properties
** 2.4.6 Concentrated and Dilute Solution
*** Concentrated Solution
**** Contains relatively large amounts of dissolved solute
**** Example: Brine (concentrated salt solution)
*** Dilute Solution
**** Contains relatively small amounts of dissolved solute
*** Note
**** Adding more solvent dilutes the solution
**** Concentration decreases with dilution
** 2.4.7 Solubility
*** Definition
**** Maximum amount of solute that dissolves in a specified amount of solvent
*** Factors Affecting Solubility
**** Type of solvent
**** Temperature
**** Pressure
** 2.4.8 Effect of Temperature on Solubility
*** Increase in solubility with temperature
**** Examples: KCl, NH₄Cl
*** Decrease in solubility with temperature
**** Example: Ca(OH)₂
@endmindmap`}
        />

        <div className="flex items-center justify-between sm:flex-row flex-col">
          <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
              Solubility Table
            </h2>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Solute</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Solubility (Amount of solute in 100g of solvent at 20°C)
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Solubility (Amount of solute in 100g of solvent at 100°C)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-300">
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    NaCl
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    36.5g/100g H₂O
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    39.2g/100g H₂O
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    KCl
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    24.7g/100g H₂O
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    56g/100g H₂O
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    NH₂Cl
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    37.5g/100g H₂O
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    77g/100g H₂O
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    Ca(OH)₂
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    0.173g/100g H₂O
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    0.066g/100g H₂O
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Image
            src="/solubility_curves.png"
            alt="Solubility Curves"
            width={300}
            height={300}
            className="m-5 mt-10"
          />
        </div>
      </section>

      <div className="p-8 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg shadow-xl">
        <h1 className="text-3xl font-extrabold text-orange-800 mb-6">
          Types of Solutions and Solubility
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-700 mb-3">
            D. Concentrated and Dilute Solutions
          </h2>
          <ul className="list-disc list-inside text-orange-900 ml-8">
            <li>1. Dilute: Relatively small amount of dissolved solute</li>
            <li>
              2. Concentrated: Relatively large amount of dissolved solute
            </li>
            <li>3. Example: Brine (concentrated salt solution)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-700 mt-6 mb-3">
            III. Solubility
          </h2>
          <ul className="list-disc list-inside text-orange-900 ml-8">
            <li>
              A. Definition: Maximum amount of solute that dissolves in a
              specified amount of solvent at a specific temperature
            </li>
            <li>
              B. Factors affecting solubility:
              <ul className="list-disc list-inside text-orange-900 ml-8">
                <li>1. Solvent used</li>
                <li>2. Temperature</li>
                <li>3. Pressure</li>
              </ul>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-700 mt-6 mb-3">
            IV. Effect of Temperature on Solubility
          </h2>
          <ul className="list-disc list-inside text-orange-900 ml-8">
            <li>
              A. Increase in solubility with temperature (e.g., KCl, NH₄Cl)
            </li>
            <li>B. Decrease in solubility with temperature (e.g., Ca(OH)₂)</li>
            <li>C. No change in solubility with temperature (e.g., NaCl)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-700 mt-6 mb-3">
            V. Activity: Demonstrating Types of Solutions
          </h2>
          <ul className="list-disc list-inside text-orange-900 ml-8">
            <li>A. Unsaturated solution: Sugar dissolves in water</li>
            <li>
              B. Saturated solution: Sugar stops dissolving at a certain point
            </li>
            <li>
              C. Supersaturated solution: More sugar dissolves upon heating
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MagneticMindmap;
