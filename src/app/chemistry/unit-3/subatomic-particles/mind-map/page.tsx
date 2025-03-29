import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
          Subatomic Particles
        </h1>
        <p> 
        Q12: Write down the fundamental properties of the fundamental particles of an atom?  <br />
OR <br />
Write fundamental properties of electron, proton and neutron? <br />
OR <br />
Elaborate the concept of subatomic particles by showing their mutual relationship? <br />
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/7dEk2CHXjmo?si=ZKi8yrYD_h5PkqiP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center">Fundamental Particles of an Atom</h1>
      <p>
        Atoms have more than 100 sub-atomic particles, but three are most important:
        <strong> Electron, Proton,</strong> and <strong>Neutron</strong>. These are called fundamental particles.
      </p>

      <h2 className="text-xl font-semibold">1. Electron</h2>
      <ul className="list-disc pl-5">
        <li>Negatively charged particle.</li>
        <li>Moves around the nucleus.</li>
        <li>Charge: <code>-1.6022 × 10⁻¹⁹</code> C.</li>
        <li>Mass: <code>9.11 × 10⁻³¹</code> kg.</li>
      </ul>

      <h2 className="text-xl font-semibold">2. Proton</h2>
      <ul className="list-disc pl-5">
        <li>Positively charged particle.</li>
        <li>Located in the nucleus.</li>
        <li>Charge: <code>+1.6022 × 10⁻¹⁹</code> C.</li>
        <li>Mass: <code>1.6726 × 10⁻²⁷</code> kg (1837 times heavier than electron).</li>
      </ul>

      <h2 className="text-xl font-semibold">3. Neutron</h2>
      <ul className="list-disc pl-5">
        <li>Neutral particle (no charge).</li>
        <li>Located in the nucleus.</li>
        <li>Mass: <code>1.6749 × 10⁻²⁷</code> kg (1842 times heavier than electron).</li>
      </ul>

      <h2 className="text-xl font-semibold">Sub-Atomic Particles Comparison</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Particle</th>
            <th className="border px-4 py-2">Charge</th>
            <th className="border px-4 py-2">Mass (kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Electron</td>
            <td className="border px-4 py-2">-1</td>
            <td className="border px-4 py-2">9.11 × 10⁻³¹</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Proton</td>
            <td className="border px-4 py-2">+1</td>
            <td className="border px-4 py-2">1.6726 × 10⁻²⁷</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Neutron</td>
            <td className="border px-4 py-2">0</td>
            <td className="border px-4 py-2">1.6749 × 10⁻²⁷</td>
          </tr>
        </tbody>
      </table>
    </div>
        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
  node {
    BackgroundColor lightBlue
    FontColor black
    FontSize 14
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
  :depth(4) {
    BackgroundColor lightGray
  }
      .radioisotopes {
    BackgroundColor lightyellow
  }
  .isotopes {
    BackgroundColor lightblue
  }
  .unstable {
    BackgroundColor lightpink
  }
  .examples {
    BackgroundColor lightgreen
  }
}
}
</style>

* Subatomic Particles
** Proton
*** Relative charge: +1
*** Relative mass: ~1 amu (1.6726 x 10-27 kg)
** Neutron
*** Relative charge: 0 (neutral)
*** Relative mass: ~1 amu (1.6749 x 10-27 kg)
** Electron
*** Relative charge: -1
*** Relative mass: ~1/1836 amu (9.11 x 10-31 kg)
** Location
*** Protons and neutrons in nucleus
*** Electrons orbit nucleus in energy levels/shells
** Strong nuclear force
*** Holds neutrons and protons together in nucleus
left side
** Relationships
*** Protons and neutrons have similar mass
*** Electrons have negligible mass contribution
*** Electron-proton interaction holds atoms together
** Behavior in Electric Field
*** Protons: Deflected towards negative plate
*** Electrons: Deflected towards positive plate
*** Neutrons: Go straight ahead
*** Electrons deflected more strongly than protons due to light mass
** Charge Neutrality
*** Number of protons = Number of electrons
*** Net charge on atoms is zero
** Radioisotopes <<radioisotopes>>
*** Isotopes <<isotopes>>
**** Same element, same protons
**** Different neutrons
*** Unstable Isotopes <<unstable>>
**** Undergo radioactive decay
**** Contain excess energy in nucleas
**** contains an unstable neutron-proton combination
*** Examples <<examples>>
**** Hydrogen-3 (Tritium)
**** Carbon-14
**** Uranium-238
@endmindmap`}
        />

        <Image
          src="/1000447338.jpg"
          alt='forces'
          width={300}
          height={300}
          className="w-full"
        />
        <p>Q13: Illustrate the behavior of protons, neutrons, and electrons in an electric field? </p>
        <div className="p-6 max-w-2xl mx-auto bg-white rounded-2xl shadow-lg space-y-4">
      <h1 className="text-xl font-bold text-gray-900">Behavior of Protons, Neutrons, and Electrons in an Electric Field</h1>
      
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">1. Protons</h2>
        <p className="text-gray-700">Protons have a positive charge (+1). In an electric field, they move towards the negatively charged plate.</p>
      </div>
      
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">2. Neutrons</h2>
        <p className="text-gray-700">Neutrons have no charge (0). They are not affected by an electric field and remain stationary.</p>
      </div>
      
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">3. Electrons</h2>
        <p className="text-gray-700">Electrons have a negative charge (-1). They move towards the positively charged plate in an electric field.</p>
      </div>
    </div>
        <p>Q14: Why atoms are neutral? </p>
      <div className="max-w-xl bg-white p-6 rounded-2xl shadow-lg text-lg">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Why Are Atoms Neutral?</h1>
        <p className="text-gray-700">
          Atoms have no charge because they have the same number of protons and electrons.
          Protons have a positive charge, and electrons have a negative charge. Since they
          cancel each other out, the atom stays neutral.
        </p>
      </div>
        <p>Q15: What are Radioisotopes? </p>
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Radioisotopes</h1>
      <p className="mb-4">
        Radioisotopes are atoms of the same element. They have the same number of protons but a different number of neutrons. This makes them unstable. To become stable, they release radiation.
      </p>
      <h2 className="text-xl font-semibold mb-2">Characteristics</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Same number of protons</li>
        <li>Different number of neutrons</li>
        <li>Unstable nucleus</li>
        <li>Emits radiation (alpha, beta, gamma)</li>
        <li>Used in medicine, industry, and research</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Examples</h2>
      <ul className="list-disc pl-5">
        <li><strong>Carbon-14:</strong> Used to date ancient objects.</li>
        <li><strong>Iodine-131:</strong> Helps treat thyroid problems.</li>
        <li><strong>Uranium-238:</strong> Powers nuclear plants.</li>
      </ul>
    </div>
        <Image
          src="/isotopes-of-hydrogen.webp"
          alt='isotopes-of-hydrogen'
          width={600}
          height={600}
        />
        <span className="font-bold my-5 text-xl">isotopes, protium <sup>1</sup> <sub>1</sub> H, deuterium <sup>2</sup> <sub>1</sub> H or D, and <sup>3</sup> <sub>1</sub> H, Tritium or T</span>
        <Image
          src="/IsotopesofCarbon.png"
          alt='IsotopesofCarbon'
          width={600}
          height={600}
        />
        <Image
          src="/uranium.jpg"
          alt='uranium'
          width={600}
          height={600}
        />
      </section>
      <div className="p-8 bg-gradient-to-r from-indigo-100 to-blue-200 rounded-lg shadow-xl">
        <h1 className="text-3xl font-extrabold text-blue-800 mb-6">
          3.2 Subatomic Particles
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            Main Subatomic Particles
          </h2>

          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              1. Proton
            </h3>
            <ul className="list-disc list-inside text-blue-900 ml-6">
              <li>Relative charge: +1</li>
              <li>
                Relative mass: ~1 atomic mass unit (amu) or 1.6726 x 10
                <sup>-27</sup> kg
              </li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              2. Neutron
            </h3>
            <ul className="list-disc list-inside text-blue-900 ml-6">
              <li>Relative charge: 0 (neutral)</li>
              <li>
                Relative mass: ~1 atomic mass unit (amu) or 1.6749 x 10
                <sup>-27</sup> kg
              </li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              3. Electron
            </h3>
            <ul className="list-disc list-inside text-blue-900 ml-6">
              <li>Relative charge: -1</li>
              <li>
                Relative mass: ~1/1836 amu or 9.11 x 10<sup>-31</sup> kg
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            Location and Interactions
          </h2>
          <ul className="list-disc list-inside text-blue-900 ml-6">
            <li>Protons and neutrons: Found in the nucleus</li>
            <li>
              Electrons: Orbit around the nucleus in energy levels or shells
            </li>
            <li>
              Nuclear force: Holds neutrons and protons together in the nucleus
              <ul className="list-disc list-inside text-blue-900 ml-6">
                <li>
                  Exists between: neutron-neutron, proton-proton, and
                  neutron-proton
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            Mass and Charge Relationships
          </h2>
          <ul className="list-disc list-inside text-blue-900 ml-6">
            <li>
              Protons and neutrons: Similar mass (~1 amu), significant
              contribution to total atomic mass
            </li>
            <li>
              Electrons: Much less mass, negligible contribution to total atomic
              mass
            </li>
            <li>
              Atom cohesion: Interaction between negatively charged electrons
              and positively charged protons
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            Behavior in Electric Fields
          </h2>
          <ul className="list-disc list-inside text-blue-900 ml-6">
            <li>Protons: Deflected towards negative plate</li>
            <li>
              Electrons: Deflected towards positive plate (more strongly than
              protons at same speed)
            </li>
            <li>Neutrons: No deflection, travel straight</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            Charge Neutrality
          </h2>
          <ul className="list-disc list-inside text-blue-900 ml-6">
            <li>Atoms are electrically neutral</li>
            <li>Number of protons = Number of electrons in a neutral atom</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            Radioisotopes
          </h2>
          <ul className="list-disc list-inside text-blue-900 ml-6">
            <li>
              Definition: Atoms with unstable combination of neutrons and
              protons or excess energy in nucleus
            </li>
            <li>
              Isotopes: Same number of protons, different number of neutrons
            </li>
            <li>Examples: hydrogen-3 (protium), carbon-14, uranium-238</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MagneticMindmap;
