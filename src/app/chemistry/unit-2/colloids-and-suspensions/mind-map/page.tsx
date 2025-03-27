import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Colloids & Suspensions</h1>
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