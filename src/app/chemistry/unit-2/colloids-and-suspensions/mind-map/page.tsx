import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">

      <section>
        <h1 className="text-4xl font-bold text-blue-500">Colloids & Suspensions</h1>
        <p>Q10: Explain colloids and suspensions as mixtures and give examples of each. </p>
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">Suspension</h1>
      
      <h2 className="text-xl font-semibold mb-2">Definition</h2>
      <p className="mb-4">A suspension is a mixture where solid particles spread through a liquid but do not dissolve.</p>
      
      <h2 className="text-xl font-semibold mb-2">Examples</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Chalk and water</li>
        <li>Muddy water</li>
        <li>Milk of magnesia</li>
        <li>Sand in water</li>
        <li>Flour in water</li>
      </ul>
      
      <h2 className="text-xl font-semibold mb-2">Properties</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Particles are large and visible.</li>
        <li>Can be separated using filtration.</li>
        <li>Particles settle over time.</li>
        <li>Suspensions scatter light (Tyndall effect).</li>
      </ul>
      
      <h2 className="text-xl font-semibold mb-2">Study Example</h2>
      <p className="mb-4">Shaking chalk powder with water creates a milky suspension. The chalk settles over time, and filtration separates it from water. A light beam scatters in the suspension.</p>
      
      <h1 className="text-2xl font-bold mb-4">Colloids</h1>
      
      <h2 className="text-xl font-semibold mb-2">Definition</h2>
      <p className="mb-4">A colloid is a mixture where the solute particles are smaller than in suspensions but larger than in solutions.</p>
      
      <h2 className="text-xl font-semibold mb-2">Examples</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Soap solution</li>
        <li>Starch solution</li>
        <li>Milk</li>
        <li>Ink</li>
        <li>Blood</li>
        <li>Jelly</li>
      </ul>
      
      <h2 className="text-xl font-semibold mb-2">Properties</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Looks uniform but is actually heterogeneous.</li>
        <li>Particles are too small to see.</li>
        <li>Passes through filter paper.</li>
        <li>Particles do not settle over time.</li>
        <li>Scatters light (Tyndall effect).</li>
      </ul>
      
      <h2 className="text-xl font-semibold mb-2">Study Example</h2>
      <p className="mb-4">Shaking soap powder in water forms a stable colloidal solution. The particles do not settle, cannot be filtered out, and scatter light.</p>
      
      <h2 className="text-xl font-semibold mb-2">Tyndall Effect</h2>
      <p className="mb-4">The Tyndall effect is when light scatters in a colloid but not in a true solution.</p>
      
      <h1 className="text-2xl font-bold mb-4">Comparison</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Property</th>
            <th className="border p-2">Solution</th>
            <th className="border p-2">Colloid</th>
            <th className="border p-2">Suspension</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Particle Size</td>
            <td className="border p-2">Less than 1 nm</td>
            <td className="border p-2">1 - 100 nm</td>
            <td className="border p-2">Greater than 100 nm</td>
          </tr>
          <tr>
            <td className="border p-2">Visibility</td>
            <td className="border p-2">Not visible</td>
            <td className="border p-2">Not visible</td>
            <td className="border p-2">Visible</td>
          </tr>
          <tr>
            <td className="border p-2">Filtration</td>
            <td className="border p-2">Passes through</td>
            <td className="border p-2">Passes through</td>
            <td className="border p-2">Does not pass</td>
          </tr>
          <tr>
            <td className="border p-2">Stability</td>
            <td className="border p-2">Stable</td>
            <td className="border p-2">Stable</td>
            <td className="border p-2">Unstable</td>
          </tr>
          <tr>
            <td className="border p-2">Tyndall Effect</td>
            <td className="border p-2">No</td>
            <td className="border p-2">Yes</td>
            <td className="border p-2">Yes</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>3. Write down the difference between a solution, a colloid, and a suspension, including the particle sizes and properties of each. </p>
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">Types of Mixtures</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Solution</h2>
        <p className="text-gray-700">
          A solution is a uniform mixture where one substance dissolves in another. The particles are super tiny (less than 1 nanometer). Solutions look clear and never separate. Example: saltwater.
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Colloid</h2>
        <p className="text-gray-700">
          A colloid is a mixture with small particles spread throughout. The particles are between 1 nanometer and 1 micrometer in size. Colloids look cloudy but don&apos;t settle. They also show the Tyndall effect (light scattering). Example: milk.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Suspension</h2>
        <p className="text-gray-700">
          A suspension is a mixture where bigger particles float in a liquid or gas. The particles are larger than 1 micrometer. Suspensions look cloudy, and the particles settle over time. Example: muddy water.
        </p>
      </div>
    </div>
    <p>4. Provide real life examples of a suspension and explain why its particles settle over time. </p>
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-lg text-gray-800">
        <h1 className="text-2xl font-bold mb-4">Suspension Example</h1>
        <p className="text-lg"><strong>Ans:</strong> Muddy water.</p>
        <p className="text-lg mt-4">
          <strong>Explanation:</strong> In a suspension, the particles are big and heavy. They do not dissolve. Over time, gravity pulls them down. This makes them settle at the bottom. They are too large to stay floating forever.
        </p>
      </div>
    </div>
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
  :depth(3) {
    BackgroundColor lightPink
  }
}
</style>
* Types of Heterogeneous Mixtures
** Colloid
*** Definition
**** Heterogeneous mixture
**** Particles larger than in true solutions
**** Particles not visible to naked eye
*** Characteristics
**** Particle size: 1-1000 nm
**** Remains dispersed without settling
**** Scatters light (Tyndall effect)
*** Examples
**** Starch
**** Albumin
**** Soap solutions
**** Blood
**** Milk
**** Ink
**** Jelly
**** Toothpaste
left side
** Suspension
*** Definition
**** Heterogeneous mixture
**** Solid particles spread in liquid without dissolving
*** Characteristics
**** Particle size: > 1000 nm
**** Visible to naked eye
**** Settles when stationary
**** Scatters light (Tyndall effect)
*** Examples
**** Chalk in water
**** Paints
**** Milk of magnesia
center footer Comparison of Solution, Colloids, and Suspension
@endmindmap`}
        />

        
       
      </section>
      <div className="p-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg shadow-xl">
    <h1 className="text-3xl font-extrabold text-pink-800 mb-6">Colloids, Suspensions, and Their Comparison</h1>
    
    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-700 mb-3">I. Colloids</h2>
        <ul className="list-disc list-inside text-pink-900 ml-8">
            <li>A. Definition: Heterogeneous mixtures with solute particles larger than true solutions but not visible to naked eye</li>
            <li>B. Characteristics:
                <ul className="list-disc list-inside text-pink-900 ml-8">
                    <li>1. Particle size: 1-1000 nm</li>
                    <li>2. Remain dispersed without settling</li>
                    <li>3. Scatter light (Tyndall effect)</li>
                </ul>
            </li>
            <li>C. Examples: Starch, albumin, soap solutions, blood, milk, ink, jelly, toothpaste</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-3">II. Suspensions</h2>
        <ul className="list-disc list-inside text-pink-900 ml-8">
            <li>A. Definition: Heterogeneous mixture of undissolved solid particles in a liquid medium</li>
            <li>B. Characteristics:
                <ul className="list-disc list-inside text-pink-900 ml-8">
                    <li>1. Particle size: &lt; 1000 nm</li>
                    <li>2. Visible to naked eye</li>
                    <li>3. Settle over time</li>
                </ul>
            </li>
            <li>C. Examples: Chalk in water, paints, milk of magnesia</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-3">III. Comparison of Solutions, Colloids, and Suspensions</h2>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-purple-200 text-purple-800">
                <tr>
                    <th className="px-4 py-2 border">Characteristic</th>
                    <th className="px-4 py-2 border">Solution</th>
                    <th className="px-4 py-2 border">Colloid</th>
                    <th className="px-4 py-2 border">Suspension</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-gray-100">
                    <td className="px-4 py-2 border">Homogeneity</td>
                    <td className="px-4 py-2 border">Homogeneous</td>
                    <td className="px-4 py-2 border">Heterogeneous</td>
                    <td className="px-4 py-2 border">Heterogeneous</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 border">Particle size</td>
                    <td className="px-4 py-2 border">&lt; 1 nm</td>
                    <td className="px-4 py-2 border">1-1000 nm</td>
                    <td className="px-4 py-2 border">&gt; 1000 nm</td>
                </tr>
                <tr className="bg-gray-100">
                    <td className="px-4 py-2 border">Visibility</td>
                    <td className="px-4 py-2 border">Not visible</td>
                    <td className="px-4 py-2 border">Not visible</td>
                    <td className="px-4 py-2 border">Visible</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 border">Filtration</td>
                    <td className="px-4 py-2 border">Particles can pass through normal as well as ultra-filter paper</td>
                    <td className="px-4 py-2 border">Passes normal filter paper, not ultra-filter paper</td>
                    <td className="px-4 py-2 border">Cannot pass filter papers</td>
                </tr>
                <tr className="bg-gray-100">
                    <td className="px-4 py-2 border">Light scattering</td>
                    <td className="px-4 py-2 border">No</td>
                    <td className="px-4 py-2 border">Yes (Tyndall effect)</td>
                    <td className="px-4 py-2 border">Yes</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 border">Separation</td>
                    <td className="px-4 py-2 border">Does not separate</td>
                    <td className="px-4 py-2 border">Does not separate</td>
                    <td className="px-4 py-2 border">Separates when stationary</td>
                </tr>
                <tr className="bg-gray-100">
                    <td className="px-4 py-2 border">Example</td>
                    <td className="px-4 py-2 border">Salt Water</td>
                    <td className="px-4 py-2 border">Soup Water</td>
                    <td className="px-4 py-2 border">Muddy water</td>
                </tr>
            </tbody>
        </table>
        
        <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-3">IV. Key Points Summary</h2>
        <p className="text-pink-900 bg-pink-100 p-4 rounded-lg">Summarizes main concepts from the provided content</p>
        
        <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-3">V. Review Questions</h2>
        <p className="text-pink-900 bg-pink-100 p-4 rounded-lg">Includes multiple-choice and short answer questions</p>
        
        <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-3">VI. Think Tank and Project</h2>
        <ul className="list-disc list-inside text-pink-900 ml-8">
            <li>A. Analytical questions about solutions and colloids</li>
            <li>B. Poster project on forms of matter in everyday environment</li>
        </ul>
    </div>
</div>

    </div>
  );
};

export default MagneticMindmap;