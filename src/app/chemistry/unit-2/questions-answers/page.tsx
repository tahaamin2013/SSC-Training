// QuestionPage.jsx
import React from 'react';

export default function QuestionPage() {

const data = [
  { aspect: 'Definition', concentrated: 'A solution with a high amount of solute relative to solvent.', dilute: 'A solution with a low amount of solute relative to solvent.' },
  { aspect: 'Solute Amount', concentrated: 'High solute content.', dilute: 'Low solute content.' },
  { aspect: 'Solvent Amount', concentrated: 'Less solvent.', dilute: 'More solvent.' },
  { aspect: 'Concentration', concentrated: 'High solute concentration.', dilute: 'Low solute concentration.' },
  { aspect: 'Example', concentrated: 'Strong saltwater solution.', dilute: 'Weak saltwater solution.' },
  { aspect: 'Taste', concentrated: 'Stronger taste (e.g., concentrated lemon juice is very sour).', dilute: 'Milder taste (e.g., diluted lemon juice is less sour).' },
  { aspect: 'Viscosity', concentrated: 'Can be thicker (e.g., syrup).', dilute: 'Closer to water’s viscosity.' },
  { aspect: 'Boiling Point', concentrated: 'Higher than pure solvent.', dilute: 'Lower, closer to pure solvent.' },
  { aspect: 'Freezing Point', concentrated: 'Lower than pure solvent.', dilute: 'Higher, closer to pure solvent.' },
  { aspect: 'Uses', concentrated: 'Used in industrial processes.', dilute: 'Used in cooking and drinking.' },
];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="whitespace-pre-line text-gray-800">
<h1 className='text-4xl font-bold mb-3 text-purple-900'>Short Response Question</h1>
(1) Can you write the formula of the carbon dioxide gas that we exhale.  <br /> 
<p>Ans: The formula of carbon dioxide gas that we exhale is (CO2) </p>
(ii) Define the element, compound and mixture. <br /> 
<div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold text-gray-900">Simple Science Terms</h1>
      <div className="space-y-2">
        <p>
          <strong>Element:</strong> A pure thing made of one kind of atom. It can't break into simpler parts. (Example: Oxygen, O)
        </p>
        <p>
          <strong>Compound:</strong> A mix of two or more different elements that join in fixed amounts. (Example: Water, H₂O)
        </p>
        <p>
          <strong>Mixture:</strong> Two or more things put together but not joined chemically. You can separate them. (Example: Saltwater)
        </p>
      </div>
    </div>
(iii) Differentiate between compound and mixture. <br /> 
<div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center">Compound vs. Mixture</h1>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Definition</h2>
        <p><strong>Compound:</strong> A substance made when different elements bond chemically in fixed ratios.</p>
        <p><strong>Mixture:</strong> A combination of substances mixed physically, not chemically bonded.</p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Formation</h2>
        <p><strong>Compound:</strong> Formed through chemical reactions with bonds like ionic, covalent, or metallic.</p>
        <p><strong>Mixture:</strong> Formed by simply mixing substances without chemical changes.</p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Proportions</h2>
        <p><strong>Compound:</strong> Has fixed, definite proportions.</p>
        <p><strong>Mixture:</strong> Can have any proportion of components.</p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Properties</h2>
        <p><strong>Compound:</strong> Has new physical and chemical properties.</p>
        <p><strong>Mixture:</strong> Retains the properties of its components.</p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Separation Methods</h2>
        <p><strong>Compound:</strong> Separated only by chemical reactions.</p>
        <p><strong>Mixture:</strong> Separated by physical methods like filtration or distillation.</p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Examples</h2>
        <p><strong>Compound:</strong> Water (H₂O) - Fixed ratio of hydrogen and oxygen.</p>
        <p><strong>Mixture:</strong> Air - A mix of gases like nitrogen, oxygen, and CO₂.</p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Uniformity</h2>
        <p><strong>Compound:</strong> Always the same throughout (homogeneous).</p>
        <p><strong>Mixture:</strong> Can be uniform (homogeneous) or non-uniform (heterogeneous).</p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Energy Changes</h2>
        <p><strong>Compound:</strong> Formation involves energy changes.</p>
        <p><strong>Mixture:</strong> Mixing usually does not require much energy.</p>
      </div>
    </div>
(iv) Differentiate between concentrated and dilute solution. <br /> 
<div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Difference Between Concentrated and Dilute Solutions</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Aspect</th>
              <th className="border p-2">Concentrated Solution</th>
              <th className="border p-2">Dilute Solution</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="odd:bg-gray-100">
                <td className="border p-2 font-semibold">{item.aspect}</td>
                <td className="border p-2">{item.concentrated}</td>
                <td className="border p-2">{item.dilute}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
3. Define the term allotropes. Explain the allotropes of carbon. <br /> 
<p>Ans: See Question 5 in theory </p>

4. What is the difference between Homogeneous and Heterogeneous solutions? <br /> 
<div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Heterogeneous Solution</h1>
      <p className="text-gray-700 mb-4">
        Here’s a simple way to understand the difference between homogeneous and heterogeneous mixtures.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-blue-100 rounded-xl">
          <h2 className="text-xl font-semibold text-blue-800">Homogeneous Mixture</h2>
          <ul className="list-disc pl-5 text-gray-700 mt-2">
            <li>Looks the same throughout.</li>
            <li>Only one phase (solid, liquid, or gas).</li>
            <li>Very tiny particles, even smaller than a nanometer.</li>
            <li>You can’t see different parts with your eyes.</li>
            <li>Hard to separate using simple methods.</li>
            <li>Examples: Saltwater, sugar in water, air.</li>
          </ul>
        </div>
        
        <div className="p-4 bg-green-100 rounded-xl">
          <h2 className="text-xl font-semibold text-green-800">Heterogeneous Mixture</h2>
          <ul className="list-disc pl-5 text-gray-700 mt-2">
            <li>Looks different in different places.</li>
            <li>Can have more than one phase (solid-liquid, liquid-gas, etc.).</li>
            <li>Particles are bigger and can be seen.</li>
            <li>You can see different components.</li>
            <li>Easy to separate using methods like filtration or decantation.</li>
            <li>Examples: Sand in water, oil and vinegar, concrete.</li>
          </ul>
        </div>
      </div>
    </div>
5. Differentiate between colloids, suspensions and solutions? <br /> 
<div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Comparison of Solution, Colloids, and Suspension</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-3">No.</th>
              <th className="border border-gray-300 p-3">Solution</th>
              <th className="border border-gray-300 p-3">Colloids</th>
              <th className="border border-gray-300 p-3">Suspension</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-3">1</td>
              <td className="border border-gray-300 p-3">A homogeneous mixture of two or more components.</td>
              <td className="border border-gray-300 p-3">A heterogeneous mixture of two or more components.</td>
              <td className="border border-gray-300 p-3">A heterogeneous mixture of two or more components.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">2</td>
              <td className="border border-gray-300 p-3">Particle size &lt; 1 nm. Not visible to the naked eye.</td>
              <td className="border border-gray-300 p-3">Particle size between 1-10 nm. Visible under certain conditions.</td>
              <td className="border border-gray-300 p-3">Particle size &gt; 10 nm. Visible to the naked eye.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">3</td>
              <td className="border border-gray-300 p-3">Particles pass through normal and ultra-filter paper.</td>
              <td className="border border-gray-300 p-3">Particles pass through normal filter paper but not ultra-filter paper.</td>
              <td className="border border-gray-300 p-3">Particles do not pass through normal filter paper.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">4</td>
              <td className="border border-gray-300 p-3">Does not scatter light.</td>
              <td className="border border-gray-300 p-3">Scatters light (Tyndall effect).</td>
              <td className="border border-gray-300 p-3">Scatters light (Tyndall effect).</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">5</td>
              <td className="border border-gray-300 p-3">Does not separate over time.</td>
              <td className="border border-gray-300 p-3">Does not separate over time.</td>
              <td className="border border-gray-300 p-3">Separates or settles when left undisturbed.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">6</td>
              <td className="border border-gray-300 p-3">Example: Sea water.</td>
              <td className="border border-gray-300 p-3">Example: Milk.</td>
              <td className="border border-gray-300 p-3">Example: Muddy water.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
6. If there are 18 protons in the Argon atom, then what is the atomic number of Argon? <br /> 
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800">Atomic Number of Argon</h1>
        <p className="text-gray-600 mt-4 text-lg">
          An element's atomic number is the count of protons in its nucleus. Since Argon has 18 protons, its atomic number is 18.
        </p>
    </div>
7. Describe state of matter with example. <br /> 
<p>Ans: See Question 2 in theory </p>
8. Differentiate between the following <br /> 
(a) Colloids and Suspensions <br /> 
(b) Elements and Compounds <br /> 
(c) Concentrated and Dilute solutions <br /> 
<div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Chemistry Concepts</h1>
      
      <section>
        <h2 className="text-xl font-semibold text-gray-800">Colloids vs Suspensions</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Colloids:</strong> Tiny particles (1 to 1000 nm) that do not settle. Example: Milk, fog.</li>
          <li><strong>Suspensions:</strong> Larger particles (&gt;1000 nm) that settle over time. Example: Muddy water.</li>
          <li>Colloids scatter light (Tyndall effect); Suspensions may or may not.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800">Elements vs Compounds</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Elements:</strong> Made of one type of atom, cannot be broken down. Example: Oxygen (O), Gold (Au).</li>
          <li><strong>Compounds:</strong> Made of two or more atoms bonded together. Example: Water (H₂O), Carbon dioxide (CO₂).</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800">Concentrated vs Diluted Solutions</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Concentrated:</strong> High solute, strong taste/effect, higher boiling point.</li>
          <li><strong>Dilute:</strong> Low solute, milder taste/effect, lower boiling point.</li>
          <li><strong>Example:</strong> Strong saltwater vs Weak saltwater.</li>
        </ul>
      </section>
    </div>
9. Examine the concept of solubility. <br /> 
<p>Ans: See theory Question No. 
</p>
10. Why is a solution considered mixture? <br /> 
<div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl bg-white p-6 rounded-2xl shadow-lg text-lg leading-relaxed">
        <h1 className="text-2xl font-bold mb-4">Why is a Solution a Mixture?</h1>
        <p>
          A solution is a mixture because it combines two or more substances (solute and solvent) without any chemical change. The solute spreads out evenly in the solvent at a tiny level, but both keep their original properties. No new substance forms.
        </p>
        <p className="mt-4">
          You can separate a solution into its parts using simple methods like evaporation or distillation. This is a key trait of mixtures.
        </p>
      </div>
    </div>
11. How will you test weather given solution is colloid or a solution? <br /> 
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-xl text-lg text-gray-800">
        <h1 className="text-2xl font-bold mb-4 text-center">Tyndall Effect Test</h1>
        <p className="mb-4">
          To check if a solution is a colloid or a true solution, we use the Tyndall Effect.
        </p>
        <h2 className="text-xl font-semibold mb-2">Steps:</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Shine a light through the solution.</li>
          <li>Observe what happens to the light.</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Results:</h2>
        <ul className="list-disc pl-6">
          <li>
            <span className="font-bold">Colloid:</span> If the light spreads out and is visible, it's a colloid.
          </li>
          <li>
            <span className="font-bold">True Solution:</span> If the light passes straight through, it's a true solution.
          </li>
        </ul>
      </div>
1. Why does pouring juice from a carton seems effortless compared to pushing a block of cheese across the table? <br /> 
<div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl p-6 bg-white shadow-lg rounded-2xl text-lg">
        <p className="mb-4">
          Liquids move easily because they have low thickness and no set shape. Solids, on the other hand, keep their shape and resist movement more.
        </p>
        <p>
          Pouring juice is simple since it flows smoothly when you tilt the container. But sliding a block of cheese on a table takes more effort because it is solid and does not flow.
        </p>
      </div>
    </div>
2. Why do these liquids flow differently? <br /> 
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Understanding Viscosity</h1>
        <p className="text-lg text-gray-700 mb-4">
          Different liquids flow at different speeds because of their thickness, called viscosity. Viscosity depends on how the liquid’s molecules move and how hot the liquid is.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          For example, juice flows easily because its molecules move past each other easily. Honey, however, flows slowly because its molecules are thicker and stick together more. The way molecules move and stick together determines how fast a liquid can flow.
        </p>
    </div>
3. What makes exotic states different from fundamentals states of matter? <br /> 
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Exotic States of Matter
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Exotic states of matter are different from basic states. These states have special properties and need extreme conditions to exist. Basic states include solids, liquids, gases, and plasmas. These are common and behave in familiar ways. Exotic states, like Bose-Einstein condensates and fermionic condensates, happen under very cold or very high pressure. These states can show strange behaviors like superfluidity and superconductivity. They help scientists discover new physics that goes beyond what we know about regular matter.
        </p>
    </div>
4. The display on your phone or laptop utilizes a special type of matter called a &quot;liquid crystal&quot;. How does this state differ from a typical liquid, and what unique properties does it possess? <br /> 
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Liquid Crystals: An Introduction
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Liquid crystals are different from regular liquids because their molecules are partly ordered. This allows them to align in certain directions, while still being able to flow. Regular liquids have molecules that are randomly arranged. Liquid crystals can change their optical properties when exposed to electric fields or temperature changes. This makes them very important in LCD screens, where they help control light to form images and text. Their unique phases and properties allow precise control of light, setting them apart from regular liquids.
        </p>
      </div>
5. Where might you encounter plasma outside of a laboratory, and what are some key features that distinguish it from the other states? <br /> 
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          What is Plasma?
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Plasma can be found in nature, like in lightning or the Northern Lights. You can also see it in things like neon signs and plasma TVs. Plasma is different from solids, liquids, and gases. It is made of gas that has been charged, with free electrons and ions. This makes plasma able to carry electricity and react to magnetic fields. Plasma can also shine and create electromagnetic fields. Its high energy makes it very special compared to other types of matter.
        </p>
    </div>
6. How is a mixture of Sulphur and iron (in powder form) different from their compound-iron sulphide (it is formed by heating iron and Sulphur together)? <br /> 
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg text-gray-800">
        <h1 className="text-2xl font-bold mb-4 text-center">FOCUS Chemistry IX</h1>
        <h2 className="text-xl font-semibold mb-3">Chapter 2: Matter</h2>
        <p className="mb-4">
          A mixture of sulfur and iron powders contains two substances that are simply mixed
          together. They do not change chemically. Each substance keeps its own properties.
          You can easily separate them using methods like a magnet.
        </p>
        <p className="mb-4">
          But iron sulfide is different. It forms when iron and sulfur are heated together.
          This causes a chemical reaction. A new substance is made, and its properties are different.
          The iron and sulfur bond together in a fixed way.
        </p>
        <p>
          Iron sulfide cannot be separated easily like a mixture. Its physical and chemical
          properties are not the same as those of iron and sulfur.
        </p>
    </div>

7. Sugar dissolves in water to form a clear liquid, while orange juice appears cloudy. <br /> 
<div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Why Sugar Water is Clear and Orange Juice is Cloudy</h1>
      <p className="text-gray-700 text-lg mb-4">
        Sugar dissolves in water because its tiny molecules mix completely with the liquid. This creates a clear and even solution.
      </p>
      <p className="text-gray-700 text-lg mb-4">
        Orange juice, however, contains pulp, fibers, and oils. These do not dissolve fully, making the liquid cloudy. This type of mixture is called heterogeneous.
      </p>
      <p className="text-gray-700 text-lg mb-4">
        In orange juice, tiny solid pieces spread throughout the liquid and scatter light. That’s why it looks cloudy. In contrast, sugar water stays clear because no solid particles are left floating around.
      </p>
      <p className="text-gray-700 text-lg font-semibold">
        In short, sugar water is a smooth solution, while orange juice is a mix of solid pieces in liquid.
      </p>
    </div>
8. What type of mixture is each? Explain the key difference between them based on particle size and distribution. <br /> 
<div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-lg bg-white p-6 rounded-2xl shadow-lg text-gray-800">
        <h1 className="text-xl font-bold mb-4">Types of Mixtures</h1>
        <p className="mb-2">
          <strong>Sugar in Water:</strong> Sugar dissolves completely, creating a clear liquid. This is called a solution.
        </p>
        <p>
          <strong>Orange Juice:</strong> It contains tiny pulp particles that stay mixed and do not settle. This is a colloid.
        </p>
      </div>
    </div>

9. Fog and smoke appear hazy compared to clean air. How would you classify these mixtures based on their dispersed particles? What makes them different from clean air? <br /> 

<div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-2xl bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Fog and Smoke as Colloids</h1>
        <p className="text-gray-700 text-lg mb-4">
          Fog and smoke are both examples of colloids, specifically aerosols. In these mixtures, tiny liquid (fog) or solid (smoke) particles spread through the air. They make the air look hazy because they scatter light.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Fog forms when small water droplets mix with air, while smoke contains solid or liquid particles in the air. These particles are larger than those in solutions but smaller than those in suspensions. This is why fog and smoke do not mix completely like air but do not settle like heavier particles.
        </p>
        <p className="text-gray-700 text-lg">
          Clean air, on the other hand, is a smooth mixture of gases without visible particles. Because it has no scattered light, it looks clear.
        </p>
      </div>
    </div>

10. After a while, sand in a glass of water settle to the bottom, while milk remains uniformly mixed. What type of mixture is each? Why the suspended particles in sand water behave differently from those in milk. <br /> 
<div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl bg-white p-6 rounded-2xl shadow-lg text-lg text-gray-800">
        <h1 className="text-2xl font-bold mb-4">Suspension and Emulsion</h1>
        <p>
          Sand in water is a suspension. You can see the sand particles, and they slowly settle at the bottom due to gravity.
        </p>
        <p className="mt-4">
          Milk is an emulsion, a special kind of mixture. Tiny fat droplets spread throughout the liquid, and they do not settle. This happens because of their small size and how they mix with other parts of the milk.
        </p>
      </div>
    </div>

11. Why more cocoa powder dissolve in hot milk compared to cold milk? How temperature affects the solubility of a solute in a solvent?<br /> 

<div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-xl text-lg leading-relaxed">
        <h1 className="text-2xl font-bold mb-4 text-center">Why Cocoa Dissolves Better in Hot Milk</h1>
        <p>
          When the temperature rises, molecules move faster. This extra movement helps break cocoa powder apart
          and spread it into the milk. That’s why hot milk dissolves more cocoa than cold milk.
        </p>
      </div>
    </div>

12. How does the arrangement of atoms differ between allotropes of carbon? <br /> 
<div className="p-6 max-w-2xl mx-auto bg-white rounded-2xl shadow-md">
      <h1 className="text-xl font-bold mb-4">Carbon Structures</h1>
      <p className="text-gray-700">
        Diamond has carbon atoms arranged in a strong 3D tetrahedral structure.
        Graphite has carbon atoms in flat hexagonal layers that slide over each other.
        Fullerenes, like buckminsterfullerene (C60), have carbon atoms forming a spherical shape.
      </p>
    </div>
13. Can allotropy occur in other elements beside carbon? <br /> 
<div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold text-gray-900">Allotropy in Elements</h1>
      <p className="text-gray-700">
        Yes! Allotropy happens in many elements, not just carbon. For example:
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Oxygen has two forms: O₂ (oxygen) and O₃ (ozone).</li>
        <li>Sulfur appears in different shapes and forms.</li>
        <li>Phosphorus has white, red, and black types.</li>
      </ul>
      <p className="text-gray-700">These forms have different properties but are still the same element!</p>
    </div>
14. State which of the substances listed below are: <br /> 
a. Metallic elements <br /> 
b. non-metallic elements <br /> 
c. compounds <br /> 
d. mixtures <br /> 
silicon, sea water, calcium, argon, water, air, carbon monoxide, iron, sodium chloride, diamond, brass, copper, dilute sulphuric acid, sulphur, oil, nitrogen, ammonia. 
<br /> 
<div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center">Substances and Their Categories</h1>

      <h2 className="text-xl font-semibold">Metallic Elements</h2>
      <ul className="list-disc pl-5">
        <li><strong>Calcium (Ca):</strong> A reactive metal from the alkaline earth group.</li>
        <li><strong>Iron (Fe):</strong> A common metal found on Earth.</li>
        <li><strong>Copper (Cu):</strong> A ductile metal with great conductivity.</li>
      </ul>

      <h2 className="text-xl font-semibold">Non-Metallic Elements</h2>
      <ul className="list-disc pl-5">
        <li><strong>Silicon (Si):</strong> A metalloid, used in electronics.</li>
        <li><strong>Argon (Ar):</strong> A colorless, inert noble gas.</li>
        <li><strong>Diamond:</strong> A crystalline form of carbon, non-metallic.</li>
        <li><strong>Sulfur (S):</strong> A yellow, non-metallic element.</li>
        <li><strong>Nitrogen (N):</strong> A gas making up 78% of Earth’s air.</li>
      </ul>

      <h2 className="text-xl font-semibold">Compounds</h2>
      <ul className="list-disc pl-5">
        <li><strong>Water (H₂O):</strong> Made of hydrogen and oxygen.</li>
        <li><strong>Carbon Monoxide (CO):</strong> A toxic gas.</li>
        <li><strong>Sodium Chloride (NaCl):</strong> Common table salt.</li>
        <li><strong>Dilute Sulfuric Acid (H₂SO₄ + H₂O):</strong> Used in many processes.</li>
        <li><strong>Ammonia (NH₃):</strong> Used in fertilizers and chemicals.</li>
      </ul>

      <h2 className="text-xl font-semibold">Mixtures</h2>
      <ul className="list-disc pl-5">
        <li><strong>Sea Water:</strong> Water with dissolved salts and minerals.</li>
        <li><strong>Air:</strong> A mix of nitrogen, oxygen, and gases.</li>
        <li><strong>Brass:</strong> A mix of copper and zinc.</li>
        <li><strong>Oil:</strong> A mix of hydrocarbons (vegetable, motor, etc.).</li>
      </ul>

      <h2 className="text-xl font-semibold">Classification Summary</h2>
      <p><strong>Metallic Elements:</strong> Calcium, Iron, Copper.</p>
      <p><strong>Non-Metallic Elements:</strong> Silicon, Argon, Sulfur, Nitrogen, Diamond.</p>
      <p><strong>Compounds:</strong> Water, Carbon Monoxide, Sodium Chloride, Sulfuric Acid, Ammonia.</p>
      <p><strong>Mixtures:</strong> Sea Water, Air, Brass, Oil.</p>
    </div>
1. Differentiate between elements, compounds, and mixtures. <br /> 
<div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold text-center mb-4">Elements, Compounds, and Mixtures</h1>
      
      <section className="mb-4">
        <h2 className="text-xl font-semibold">Elements</h2>
        <p><strong>Definition:</strong> Elements are pure substances that cannot be broken down into simpler ones using chemical methods.</p>
        <p><strong>Composition:</strong> Made of only one type of atom.</p>
        <p><strong>Example:</strong> <span className="text-blue-600">Iron (Fe)</span></p>
        <p><strong>Properties:</strong> Defined by the number of protons in its nucleus.</p>
      </section>
      
      <section className="mb-4">
        <h2 className="text-xl font-semibold">Compounds</h2>
        <p><strong>Definition:</strong> A compound is a substance made of two or more different elements that are chemically bonded in a fixed ratio.</p>
        <p><strong>Composition:</strong> Contains atoms of different elements joined together.</p>
        <p><strong>Example:</strong> <span className="text-blue-600">Water (H₂O)</span></p>
        <p><strong>Properties:</strong> Compounds have unique properties different from their elements.</p>
        <p><strong>Separation:</strong> Can only be broken down by chemical reactions.</p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold">Mixtures</h2>
        <p><strong>Definition:</strong> A mixture consists of two or more substances (elements or compounds) that are physically combined, not chemically.</p>
        <p><strong>Separation:</strong> Mixtures can be separated using physical methods.</p>
      </section>
    </div>
2. Explain allotropes and their significance. <br /> 
<div className="max-w-3xl mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center mb-4">Mixtures</h1>
      
      <div className="space-y-4">
        <p><strong>Ans:</strong> See theory Question No.</p>
        
        <p className="text-lg">
          In a mixture, each substance keeps its own chemical properties. You can usually separate the components using physical methods.
        </p>
        
        <h2 className="text-xl font-semibold">Types of Mixtures</h2>
        <ul className="list-disc pl-6">
          <li><strong>Homogeneous</strong>: Uniform throughout (also called solutions).</li>
          <li><strong>Heterogeneous</strong>: Not uniform throughout.</li>
        </ul>

        <h2 className="text-xl font-semibold">Separation</h2>
        <p className="text-lg">
          You can often separate mixtures using physical methods like filtration, evaporation, or distillation.
        </p>

        <h2 className="text-xl font-semibold">Composition</h2>
        <p className="text-lg">
          Mixtures have two or more substances that are physically combined but not chemically bonded.
        </p>

        <h2 className="text-xl font-semibold">Example</h2>
        <p className="text-lg">
          Air is a mixture.
        </p>
      </div>
    </div>
3. Differentiate between solutions, colloids, and suspensions as types of mixtures and provide examples of each. 
<br /> 
<div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">Properties of Solutions</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-medium mb-4">Particle Size</h2>
        <ul className="list-disc pl-6">
          <li><strong>Less than 1 nanometer:</strong> Invisible particles.</li>
          <li><strong>Between 1 nanometer and 1 micrometer:</strong> Homogeneous mixture; particles do not settle.</li>
          <li><strong>Larger than 1 micrometer:</strong> Heterogeneous mixture; particles can be seen and will settle.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-medium mb-4">Types of Mixtures</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Suspension</h3>
          <ul className="list-inside">
            <li><strong>Particle Size:</strong> Larger than 1 micrometer.</li>
            <li><strong>Description:</strong> Heterogeneous; particles can be seen and will settle due to gravity.</li>
            <li><strong>Visibility:</strong> Particles may scatter light if present in enough quantity (Tyndall effect).</li>
            <li><strong>Examples:</strong> Muddy water, sand in water.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">Colloid</h3>
          <ul className="list-inside">
            <li><strong>Particle Size:</strong> Between 1 nanometer and 1 micrometer.</li>
            <li><strong>Description:</strong> Homogeneous; particles do not settle but are large enough to scatter light.</li>
            <li><strong>Visibility:</strong> Particles may cause the mixture to look cloudy or opaque.</li>
            <li><strong>Examples:</strong> Milk, mayonnaise, fog.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">Solution</h3>
          <ul className="list-inside">
            <li><strong>Particle Size:</strong> Less than 1 nanometer.</li>
            <li><strong>Description:</strong> Homogeneous; particles are too small to scatter light.</li>
            <li><strong>Visibility:</strong> Invisible particles.</li>
            <li><strong>Examples:</strong> Salt water, sugar in water.</li>
          </ul>
        </div>
      </section>
    </div>
4. Explain how temperature affects the solubility of a solid state in a liquid solvent. <br /> 
<div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-4">Temperature and Solubility</h1>
        <p className="text-lg text-gray-800 mb-6">
          Temperature has a big effect on how well a solid can dissolve in a liquid. Solubility is the amount of solute that
          can dissolve in a solvent at a certain temperature and pressure. Here's how temperature affects this:
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Increase in Temperature:</h2>
        <ol className="list-decimal pl-6 text-lg text-gray-800 mb-6">
          <li><strong>More Movement:</strong> When the temperature goes up, the solvent molecules move faster. This means they have more energy.</li>
          <li><strong>Better Mixing:</strong> The faster the solvent molecules move, the better they can mix with the solute particles. This helps break the solute apart.</li>
          <li><strong>More Dissolving:</strong> With more energy, the solute can mix better with the solvent. More solute can dissolve at higher temperatures than at lower ones.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dynamic Equilibrium:</h2>
        <p className="text-lg text-gray-800 mb-6">
          Solubility is like a balance between the solute dissolving and the solute coming back out of the solution. At higher
          temperatures, the balance shifts to more dissolving because:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-800 mb-6">
          <li>The extra energy helps the solute break free from the solid.</li>
          <li>Solvent molecules can surround and stabilize the solute better.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusion:</h2>
        <p className="text-lg text-gray-800 mb-6">
          In short, temperature plays a big role in how much solid can dissolve in a liquid. As the temperature rises, more
          solute typically dissolves. This is important in chemistry and many other areas.
        </p>
      </div>
    </div>
5. You are tasked with designing a separation process for a mixture containing sand, salt and oil. Explain the steps involved in separating each component based on their physical properties and justify your chosen methods. 
<br /> 

<div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Separation of Sand, Salt, and Oil</h1>
        <p className="text-lg mb-4">
          <strong>Ans:</strong> To separate a mixture of sand, salt, and oil, we use the physical properties of each part. Here’s how it’s done:
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-500">Step 1: Separate Oil from Sand and Salt</h2>
          <p className="text-lg mb-2">
            <strong>Method:</strong> Decantation
          </p>
          <p className="text-lg mb-2">
            <strong>Process:</strong> Oil floats on top of water because it is lighter. Gently tilt the container to pour the oil into a new one. The sand and salt stay behind.
          </p>
          <p className="text-lg mb-2">
            <strong>Why it works:</strong> Oil is less dense than water and does not mix with it. This makes it easy to separate.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-500">Step 2: Separate Sand from Salt</h2>
          <p className="text-lg mb-2">
            <strong>Method:</strong> Filtration
          </p>
          <p className="text-lg mb-2">
            <strong>Process:</strong> Add water to the sand and salt mixture. Stir to dissolve the salt. Use a funnel with filter paper to strain it. The sand stays on the paper, and the saltwater goes through.
          </p>
          <p className="text-lg mb-2">
            <strong>Why it works:</strong> Sand doesn’t dissolve in water, but salt does. This difference makes filtration useful.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-500">Step 3: Get the Salt from the Solution</h2>
          <p className="text-lg mb-2">
            <strong>Method:</strong> Evaporation
          </p>
          <p className="text-lg mb-2">
            <strong>Process:</strong> Heat the saltwater solution. The water will evaporate, leaving salt crystals behind.
          </p>
          <p className="text-lg mb-2">
            <strong>Why it works:</strong> Salt has a higher boiling point than water. By heating the water, it evaporates first, leaving the salt behind.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-500">Summary</h2>
          <ul className="list-disc pl-6 text-lg">
            <li><strong>Step 1:</strong> Use decantation to separate oil.</li>
            <li><strong>Step 2:</strong> Filter the sand from the saltwater.</li>
            <li><strong>Step 3:</strong> Evaporate the water to get the salt back.</li>
          </ul>
        </div>

        <p className="text-lg">
          These steps use differences in density, solubility, and boiling points to separate the mixture.
        </p>
      </div>
    </div>
6. Write a detailed ote on: Plasma, Bose-Einstein condensate. <br /> 
Ans: See theory

        </div>
      </div>
    </div>
  );
}