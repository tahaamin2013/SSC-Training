import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">STATE OF MATTER</h1>
        <p>Q1: Define Matter. Explain that atom is the building block of all matter. </p>
        <div className="min-h-screen flex items-center justify-center bg-blue-100 p-4">
      <div className="max-w-md bg-white p-6 rounded-2xl shadow-lg text-gray-900">
        <h1 className="text-2xl font-bold text-blue-600">What is Matter?</h1>
        <p className="mt-2 text-lg">Matter is anything that takes up space and has weight.</p>
        <p className="mt-2 text-lg">Everything around us is made of matter—air, water, rocks, and even people!</p>
        <h2 className="mt-4 text-xl font-semibold text-blue-500">Atoms:</h2>
        <p className="mt-2 text-lg">Atoms are tiny building blocks of matter. Different atoms join together to form everything we see.</p>
      </div>
    </div>
        <p>Q2: Describe the three main states of matter (solid, liquid and gas) and their distinguishing macroscopic properties: density, compressibility, and fluidity. </p>
        <p>
           <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">Classification of Matter</h1>
      <p className="mb-4">Matter exists in three main forms: solids, liquids, and gases.</p>
      
      <h2 className="text-xl font-semibold mt-4">Examples:</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Solids:</strong> Sugar, sand, wood, rocks, and ice.</li>
        <li><strong>Liquids:</strong> Water, milk, oil, petrol, and alcohol.</li>
        <li><strong>Gases:</strong> Air, oxygen, hydrogen, and carbon dioxide.</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-4">Exotic States of Matter:</h2>
      <p className="mb-4">Beyond these states, exotic matter includes plasma, Bose-Einstein condensates (BEC), and liquid crystals.</p>
      
      <h2 className="text-xl font-semibold mt-4">Properties of Solids:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Solids have a fixed shape and volume.</li>
        <li>Particles are closely packed and do not move freely.</li>
        <li>They have high density and cannot flow.</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-4">Properties of Liquids:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Liquids have a fixed volume but take the shape of their container.</li>
        <li>Particles are loosely packed, allowing movement.</li>
        <li>They can flow and have moderate density.</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-4">Properties of Gases:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Gases have no fixed shape or volume.</li>
        <li>Particles move freely and are far apart.</li>
        <li>They have low density and can be compressed easily.</li>
      </ul>
    </div>
        Q3: Write a detailed note on Plasma, Bose-Einstein Condensate  <br />
Cantab Exercise Question)  <br />
OR <br />
Discuss exotic states of matter in detail. <br />
OR <br />
Recognize other forms of matter beyond the three basic states (e.g plasma, bose-cinstein condensates, liquid crystals). <br />
Relevant SLO in curriculum) 

        </p>
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">Exotic States of Matter</h1>
      <p className="mb-4">
        Matter usually exists in three states: solid, liquid, and gas. But under extreme conditions, it can take on other
        rare forms. These are called exotic states.
      </p>
      <h2 className="text-xl font-semibold mb-2">Types of Exotic States</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>High Temperature States:</strong> Matter turns into ionized gas or plasma.
        </li>
        <li>
          <strong>Low Temperature States:</strong> Includes Bose-Einstein Condensate (BEC) and superfluids.
        </li>
        <li>
          <strong>Combined States:</strong> Includes plastic crystals, amorphous solids, and liquid crystals.
        </li>
      </ul>
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Plasma: The Fourth State of Matter</h1>
        <p className="text-gray-700 mb-4">
          Plasma is a high-energy state of matter found in stars, lightning, and neon lights. It consists of charged
          particles like ions and free electrons. Unlike solids, liquids, and gases, plasma can conduct electricity and
          respond to magnetic fields.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-4">Key Properties</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Highly conductive due to free-moving electrons and ions.</li>
          <li>Extremely hot, ranging from thousands to millions of degrees Celsius.</li>
          <li>Emits light, which is why it&apos;s used in neon signs and plasma TVs.</li>
          <li>Can be influenced by magnetic fields, useful in fusion reactors.</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-800">Chemical Properties</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Ionizes atoms by removing electrons.</li>
          <li>Creates reactive species that enable unique chemical reactions.</li>
          <li>Used in industries to break down harmful chemicals and create new materials.</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-800">Other High-Energy States</h2>
        <p className="text-gray-700 mb-2">
          <strong>Degenerate Matter:</strong> Found in neutron stars and white dwarfs due to extreme pressure.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Quark-Gluon Plasma:</strong> An ultra-rare state seen in particle accelerators at very high energies.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800">How Plasma Forms</h2>
        <p className="text-gray-700 mb-4">
          When a gas is heated to extreme temperatures, its atoms lose electrons, creating a mix of ions and electrons.
          This forms plasma, a highly energetic and dynamic state of matter.
        </p>            
        <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-2xl">
      
      <h3 className="text-xl font-semibold">(1) Liquid Crystals</h3>
      <p className="mt-2 text-gray-700">
        Liquid crystals have qualities of both solids and liquids. Their molecules stay organized like a solid but can move like a liquid. These materials are used in screens for TVs, computers, and phones. They also help in sensors and medical devices.
      </p>
      <p className="mt-2 text-gray-700">
        One key feature of liquid crystals is that they change how they look when electricity is applied. This makes them ideal for LCD screens. They also shift between different states based on temperature.
      </p>
      <p className="mt-2 text-gray-700">
        Some liquid crystals form layers that slide over each other, called the smectic phase. Others align in the same direction but remain fluid, known as the nematic phase.
      </p>
      
      <h3 className="text-xl font-semibold mt-6">(2) Combined States</h3>
      <p className="mt-2 text-gray-700">
        Some materials show mixed properties of different states of matter. These include amorphous solids, plastic crystals, and liquid crystals. Each has unique uses in technology and science.
      </p>
      
      <h3 className="text-xl font-semibold mt-6">Properties of Liquid Crystals</h3>
      <table className="mt-4 w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Property</th>
            <th className="border p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Order</td>
            <td className="border p-2">Partially organized, between solid and liquid.</td>
          </tr>
          <tr>
            <td className="border p-2">Shape and Volume</td>
            <td className="border p-2">Can flow but keeps some structure.</td>
          </tr>
          <tr>
            <td className="border p-2">Fluidity</td>
            <td className="border p-2">Both rigid and fluid-like, based on type.</td>
          </tr>
          <tr>
            <td className="border p-2">Molecular Arrangement</td>
            <td className="border p-2">Has some long-range order but is not fully rigid.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h1 className="text-2xl font-bold mb-4">Low Temperature States</h1>
      <p className="mb-4">
        At extremely low temperatures, matter behaves in unique ways. These states occur near absolute zero (-273.15°C or 0K). Here are some interesting states of matter at such temperatures:
      </p>
      
      <h2 className="text-xl font-semibold mt-4">1. Superconductivity</h2>
      <p className="mb-4">
        Some metals and alloys conduct electricity with zero resistance at very low temperatures. This happens due to Cooper pairs, special electron pairs that move without resistance.
      </p>
      
      <h2 className="text-xl font-semibold mt-4">2. Bose-Einstein Condensates</h2>
      <p className="mb-4">
        When bosonic particles cool down to near absolute zero, they merge into a single quantum state. This gives them unusual properties, like behaving as both waves and particles.
      </p>
      
      <h2 className="text-xl font-semibold mt-4">3. Superfluidity</h2>
      <p className="mb-4">
        Some liquids, like helium-4, flow without friction at very low temperatures. This happens because the helium atoms form a Bose-Einstein condensate.
      </p>
      
      <h2 className="text-xl font-semibold mt-4">4. Magnetic Ordering</h2>
      <p className="mb-4">
        At low temperatures, atoms align to form ordered magnetic structures. This leads to phenomena like ferromagnetism and antiferromagnetism.
      </p>
      
      <h2 className="text-xl font-semibold mt-4">5. Quantum Hall Effect</h2>
      <p className="mb-4">
        When electrons in a two-dimensional gas experience a strong magnetic field at low temperatures, they show the quantum Hall effect, which includes quantized electrical conductance.
      </p>
      
      <h2 className="text-xl font-semibold mt-4">Properties of Bose-Einstein Condensate (BEC)</h2>
      <table className="w-full border border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Property</th>
            <th className="border p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Particle Distribution</td>
            <td className="border p-2">Most particles stay in the lowest energy state.</td>
          </tr>
          <tr>
            <td className="border p-2">Temperature</td>
            <td className="border p-2">Extremely low (near absolute zero).</td>
          </tr>
          <tr>
            <td className="border p-2">Order</td>
            <td className="border p-2">All particles are in sync.</td>
          </tr>
          <tr>
            <td className="border p-2">Fluidity</td>
            <td className="border p-2">Superfluid (flows without friction).</td>
          </tr>
          <tr>
            <td className="border p-2">Conductivity</td>
            <td className="border p-2">Acts as a superconductor.</td>
          </tr>
          <tr>
            <td className="border p-2">Shape & Volume</td>
            <td className="border p-2">Can change shape but stays coherent.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>A Sketch diagrams to show the arrangement of particles in:  <br />
(i) Solid Oxygen  <br />
(ii) liquid oxygen  <br />
(iii) oxygen gas 
</p>
<p className="mt-6">Describe how the particles move in these three states of matter. </p>

<div className="p-6 max-w-lg mx-auto bg-white rounded-2xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center">States of Matter</h1>
      <div className="space-y-3">
        <div className="p-4 bg-blue-100 rounded-lg">
          <h2 className="text-xl font-semibold">Solid</h2>
          <p>Particles are packed tightly in a fixed pattern. They vibrate but don’t move around.</p>
        </div>
        <div className="p-4 bg-green-100 rounded-lg">
          <h2 className="text-xl font-semibold">Liquid</h2>
          <p>Particles stay close but can slide past each other. They move and flow.</p>
        </div>
        <div className="p-4 bg-yellow-100 rounded-lg">
          <h2 className="text-xl font-semibold">Gas</h2>
          <p>Particles are far apart and move freely in all directions.</p>
        </div>
      </div>
    </div>
    <p className="mt-4">Explain, using the kinetic particle theory, what happens to the particles in oxygen as it is cooled down. </p>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-2xl p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">Kinetic Particle Theory of Oxygen</h1>
        <p className="text-gray-700 text-lg mb-4">
          <strong>Ans:</strong> The kinetic particle theory explains that particles in a substance, like oxygen, are always moving.
          Their speed and energy depend on the temperature.
        </p>
        <h2 className="text-xl font-medium text-gray-800 mb-2">At High Temperature:</h2>
        <p className="text-gray-700 mb-4">
          Oxygen molecules (O2) move quickly with lots of energy. They are far apart and can move freely in any direction.
        </p>
        <h2 className="text-xl font-medium text-gray-800 mb-2">As Cooling Begins:</h2>
        <p className="text-gray-700 mb-4">
          When the temperature drops, the molecules slow down and lose energy. They start to get closer but still have some freedom to move.
        </p>
        <h2 className="text-xl font-medium text-gray-800 mb-2">When Liquid Oxygen Forms:</h2>
        <p className="text-gray-700 mb-4">
          At about -183°C, oxygen molecules slow down enough to come together and form a liquid. They still move, but only by vibrating or rotating.
        </p>
        <h2 className="text-xl font-medium text-gray-800 mb-2">When Solid Oxygen Forms:</h2>
        <p className="text-gray-700 mb-4">
          At about -218°C, oxygen molecules slow down even more and become a solid. They only vibrate in place and can&apos;t move freely.
        </p>
      </div>
    </div>
    <p>
Following substances that have been used to create Bose-Einstein condensates (BEC&apos;s) <br />
Rubidium-87  <br />
Sodium-23  <br />
Lithium-6  <br />
Hydrogen  <br />
Photons (light particles)  <br />
Helium atoms etc.  

    </p>

    <p>What are the three common states of matter that we encounter in our everyday lives? </p>
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Flesch Reading Ease Example</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          <span className="font-semibold">Ans:</span> There are three common states of matter. These are solids, liquids, and gases. Solids have a fixed shape and size. Examples are ice and rocks. Liquids have a fixed size, but they change shape to fit their container. Examples are water and milk. Gases have no fixed shape or size. They fill the container they are in. Examples are oxygen and carbon dioxide.
        </p>
      </div>
    </div>

    <p>What is Plamsa, and in which natural phenomenon can it be observed? 
    </p>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">What is Plasma?</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Plasma is a special type of matter, similar to a gas but different in some ways. It is made up of free electrons and ions. These ions are atoms that have gained or lost electrons. Plasma forms when a gas is heated up so much that its atoms lose electrons. This makes charged particles. Plasma can be seen in nature in things like lightning, the auroras (Northern and Southern Lights), and in the Sun and stars. These bright, hot things have enough heat and energy to turn gas into plasma.
        </p>
      </div>
    </div>
    <p>Discuss the conditions required for the formation of a Bose-Einstein Condensate, and what unique properties does it exhibit at such extreme temperatures? 
    </p>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Understanding Bose-Einstein Condensates
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          A Bose-Einstein Condensate (BEC) forms when a group of atoms is cooled to a very low temperature, close to absolute zero (0 Kelvin or -273.15°C). At this cold temperature, the atoms group together and act like one big atom. The BEC can move without any friction. It also shows special qualities like superfluidity and unique quantum effects. This means the atoms move together and show quantum behavior in a way we can see and study.
        </p>
      </div>
    </div>
      <p>How liquid crystals exhibit properties of both liquids and solids?
      </p>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-900 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Liquid Crystals</h1>
        <p className="text-lg mb-4">
          <strong>Ans:</strong> Liquid crystals have traits of both liquids and solids because of their special structure.
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>They move like liquids, so they can change shape and direction.</li>
          <li>They also stay partly organized like solids, with molecules arranged in a pattern.</li>
          <li>This pattern gives them unique abilities, like special optical and electrical features that regular liquids or solids don&apos;t have.</li>
          <li>Because of these traits, liquid crystals are used in things like screens (LCDs), special plastics, and even in living things.</li>
        </ul>
        <p className="text-lg">
          <strong>Student Learning Outcome:</strong> Understand the differences between elements, compounds, and mixtures.
        </p>
      </div>
    </div>
        <PlantUMLDiagram
          code={`
            @startmindmap
            left to right direction
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
* States of Matter
** Definition of Matter
*** Anything that has mass and occupies space
** Four Main States
*** Gas
*** Liquid
*** Solid
*** Plasma
** Determining Factors
*** Particle Arrangement
*** Particle Movement
*** Intermolecular & Atomic Forces
** Energy and Matter States
*** Energy Changes Matter
**** Solids become liquids or gases when heated
**** Gases transform into plasma at very high temperatures or strong electric fields
*** Normal Conditions
**** Most substances remain in one state: solid, liquid, or gas
**** Earth's temperatures and energy levels are not enough to ionize atoms into plasma
** Special States
*** Liquid Crystal (A cloudy state)
**** Forms when some crystalline solids are heated
**** Has properties of both liquids and solids
**** Exists within a certain temperature range
*** Bose-Einstein Condensates (BEC)
**** Occurs at extremely low temperatures
**** Found in superfluids and superconductors materials
left side
** Macroscopic Properties (visualized by the naked eye)
*** Density
*** Fluidity
*** Compressibility
**** is the ability of a substance to decrease in volume when pressure is applied.
** **Changes in Particle Motion (Solid to Gas)**
*** Solid  
**** Particles tightly packed  
**** Vibrate in place  
*** Liquid  
**** Gains heat energy  
**** Particles move more freely  
*** Gas  
**** Particles move very fast  
**** Spread apart in all directions  
** State Characteristics
*** Gas
**** Low density
**** Very compressible
**** Can flow
*** Liquid
**** High density
**** Moderately compressible
**** Can flow
*** Solid
**** High density
**** Not compressible
**** Cannot flow
** State Transitions (Convert one state of matter into the other)
*** Can be achieved through physical techniques
**** Temperature
***** Water turns into the gas by boiling
**** Pressure
*** Chemical composition remains unchanged
@endmindmap`}
        />

        <PlantUMLDiagram code={`
@startmindmap

* Chemistry Connection to Matter
** Matter
*** Has Mass & Volume
*** Made of Atoms
** States of Matter
*** Solid
*** Liquid
*** Gas
*** Plasma
** Composition of Matter
*** Elements
*** Compounds
*** Mixtures
** Changes in Matter
*** Physical Change
**** No new substance
**** Examples: Melting, Freezing
*** Chemical Change
**** New substance forms
**** Examples: Burning, Rusting
** Role of Energy
*** Exothermic (Releases Energy)
*** Endothermic (Absorbs Energy)

@endmindmap

          `} />

          <PlantUMLDiagram code={`
            @startmindmap
* What is Plasma?
** Definition
*** Special state of matter
*** Similar to gas but distinct
** Composition
*** Free electrons
*** Ions (atoms with lost or gained electrons)
** Formation
*** Occurs when gas is heated intensely
*** Atoms lose electrons, creating charged particles
** Natural Examples
*** Lightning
*** Auroras (Northern and Southern Lights)
*** Sun and stars
@endmindmap
`} />

        <div className="container mx-auto p-8">
          <header className="mb-12 text-center">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 mb-4">
              States of Matter
            </h1>
            <p className="text-lg text-gray-800">
              Understanding the different forms of matter and their properties.
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-teal-600 mb-4">
              Main States of Matter
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <li className="card bg-gradient-to-r from-red-200 to-red-100 p-6 rounded-lg shadow-lg hover-effect">
                <h3 className="text-xl font-bold text-black mb-2">Solid</h3>
                <p className="text-gray-800">
                  Defined shape and volume. Particles are closely packed and
                  vibrate in place.
                </p>
              </li>
              <li className="card bg-gradient-to-r from-blue-200 to-blue-100 p-6 rounded-lg shadow-lg hover-effect">
                <h3 className="text-xl font-bold text-black mb-2">Liquid</h3>
                <p className="text-gray-800">
                  Defined volume but no fixed shape. Particles are less packed
                  and flow past each other.
                </p>
              </li>
              <li className="card bg-gradient-to-r from-green-200 to-green-100 p-6 rounded-lg shadow-lg hover-effect">
                <h3 className="text-xl font-bold text-black mb-2">Gas</h3>
                <p className="text-gray-800">
                  No fixed shape or volume. Particles are spread out and move
                  freely.
                </p>
              </li>
              <li className="card bg-gradient-to-r from-purple-200 to-purple-100 p-6 rounded-lg shadow-lg hover-effect">
                <h3 className="text-xl font-bold text-black mb-2">Plasma</h3>
                <p className="text-gray-800">
                  Ionized gas with high energy. Particles are electrically
                  charged.
                </p>
              </li>
            </ul>
          </section>

          <section className="mb-12 gradient-bg p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-black mb-4">
              Changing States of Matter
            </h2>
            <p className="text-black mb-4">
              Energy can change matter from one state to another. Heat can turn
              a solid into a liquid or gas. Very high heat can turn a gas into
              plasma.
            </p>
            <p className="text-black mb-4">
              On Earth, most things are solid, liquid, or gas. We don&apos;t see
              plasma much. It&apos;s too hot here for atoms to break apart into
              plasma.
            </p>
            <p className="text-black mb-4">
              Some solids turn into a cloudy liquid when heated. This is called
              a liquid crystal. It&apos;s part liquid, part solid. Heat it more,
              and it becomes a clear liquid.
            </p>
            <p className="text-black">
              There are other rare states too. One is called Bose-Einstein
              condensate. It happens when atoms get very, very cold.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-teal-600 mb-4">
              Properties of Matter States
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-black mb-4">Gases</h3>
              <ul className="list-disc pl-5 text-gray-800">
                <li>Not dense</li>
                <li>Easy to squeeze</li>
                <li>Can flow</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Liquids
              </h3>
              <ul className="list-disc pl-5 text-gray-800">
                <li>Dense</li>
                <li>Can be squeezed a bit</li>
                <li>Can flow</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
              <h3 className="text-2xl font-semibold text-black mb-4">Solids</h3>
              <ul className="list-disc pl-5 text-gray-800">
                <li>Dense</li>
                <li>Hard to squeeze</li>
                <li>Can&apos;t flow</li>
              </ul>
            </div>
          </section>

          <footer className="text-center">
            <p className="text-gray-800">
              We can change states by heating or cooling. Like when water boils
              and turns to steam. The tiny bits that make up water don&apos;t
              change. Just how they move and stick together.
            </p>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default MagneticMindmap;
