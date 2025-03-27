import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import Image from "next/image";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
          Atomic Models and Concepts
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
* Atomic Models and Concepts
** Particle Paths
*** Illustrate paths of charged particles in uniform electric field
** Proton Number/Atomic Number
*** Definition: Number of protons in nucleus
*** Unique to each element
*** Used to arrange elements in periodic table
*** Can be changed by radioactivity
** Nucleon Number/Atomic Mass and Isotopes
*** Definition: Sum of protons and neutrons in nucleus
*** Isotopes
**** Same number of protons, different neutrons
**** Affect molecular mass but not chemical properties
**** Can exhibit radioactivity
**** Examples: Carbon dating, medical imaging
*** Relative Atomic Mass
**** Average mass of isotopes compared to 1/12th of carbon-12
** Formation of Ions
*** Positive ions (cations)
*** Negative ions (anions)
** Calculations
*** Relative atomic mass from isotope masses and abundance
*** Relative mass of an isotope given atomic mass and abundance
left side
** 3.1 Atomic Models
*** Dalton&apos;s Model (1803)
**** Postulates
***** Elements composed of indivisible atoms
***** Atoms of an element are identical
***** Atoms combine, separate, or rearrange in reactions
***** Atoms cannot be created or destroyed
**** Limitations
***** Later experiments showed atoms are divisible
*** Rutherford&apos;s Experiment (1911)
**** Gold foil experiment with alpha particles
**** Conclusions
***** Most of atom is empty space
***** Nucleus is small, dense, and positively charged
***** Electrons revolve around nucleus
**** Limitations
***** Classical physics predicts electron collapse into nucleus
***** Continuous spectrum not explained
*** Bohr&apos;s Atomic Theory (1913)
**** Postulates
***** Electrons in fixed energy orbits
***** Energy proportional to distance from nucleus
***** Angular momentum quantized
***** Light absorbed/emitted during electron jumps
**** Limitations
***** Does not depict 3D aspect of atom
*** Quantum Mechanical Model
**** Current model used in modern science
**** Treats electrons as wave-particle entities
**** Defines probability distributions (orbitals)
**** Explains complex phenomena
**** Limitation: Complex and involves probability
** Key Points
*** Matter: Anything with mass and occupies space
*** Plasma: Electrically charged gas
*** Allotropy: Element existing in different physical forms
*** Element: Simplest form of matter, same type of atoms
*** Compound: Substance formed by chemically combined different atoms
*** Solution: Homogeneous mixture of two or more components
*** Aqueous solution: Substance dissolved in water
*** Saturated solution: Maximum amount of solute at given temperature
*** Unsaturated solution: Less solute than required for saturation
*** Colloid: Mixture with particles 1-1000 nm in diameter
*** Suspension: Heterogeneous mixture of undissolved particles in liquid
@endmindmap`}
        />

        <PlantUMLDiagram
          code={`
@startmindmap
* Atomic Models
** Dalton's Model 1803
*** Main Postulates
**** Elements & Atoms
***** All elements composed of tiny indivisible particles called atoms
****** Example: Gold atoms make up pure gold
****** Example: Carbon atoms make up diamond
***** Atoms of same element are identical
****** Same mass
******* Example: All oxygen-16 atoms have mass of 16 u.
****** Same volume
******* Example: All oxygen atoms have radius of 60 picometers
**** Chemical Reactions
***** Atoms combine, separate, or rearrange
****** Example: H₂ + O → H₂O (water formation)
****** Example: Breaking water into Hydrogen and Oxygen using electricity H₂O → H₂ + O
***** Combine in simple ratios
****** Example: H₂O has 2:1 ratio of H:O
****** Example: Ammonia NH₃ has 1:3 ratio of N:H
**** Conservation Law
***** Atoms cannot be created
****** Example: Mass before = Mass after in chemical reactions
***** Atoms cannot be destroyed
****** Example: Burning wood transforms atoms but doesn't destroy them
** Historical Impact of Dalton's Atomic Model
*** Explained Quantitative Experimental Results
*** Explained Laws of Chemical Combinations
*** Stimulated Rapid Progress in Chemistry
** Limitations
*** Later Experiments
**** 1850s experiments
**** Early 20th century discoveries
***** Example: JJ. Thomson's discovery of electron In Cathode Ray Experiment (1897)
*** Discovery of Atomic Structure
**** Atoms found to be divisible
***** Example: Uranium nuclear fission
**** Identification of subatomic particles
***** Electrons
***** Protons
***** Neutrons
@endmindmap
`}
        />
        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
  .background {
    BackgroundColor #3498DB
    LineColor #2980B9
    FontColor white
  }
  .experiment {
    BackgroundColor #F39C12
    LineColor #D35400
    FontColor black
  }
  .conclusion {
    BackgroundColor #2ECC71
    LineColor #27AE60
    FontColor white
  }
  .defect {
    BackgroundColor #E74C3C
    LineColor #C0392B
    FontColor white
  }
  .detail {
    BackgroundColor #9B59B6
    LineColor #8E44AD
    FontColor white
  }
  .year {
    BackgroundColor #1ABC9C
    LineColor #16A085
    FontColor white
  }
  .purpose {
    BackgroundColor #8E44AD
    LineColor #732D91
    FontColor white
  }
  .setup {
    BackgroundColor #D35400
    LineColor #A04000
    FontColor white
  }
  .observations {
    BackgroundColor #C0392B
    LineColor #922B21
    FontColor white
  }
  .structure {
    BackgroundColor #2980B9
    LineColor #1F618D
    FontColor white
  }
  .force {
    BackgroundColor #27AE60
    LineColor #1E8449
    FontColor white
  }
  .properties {
    BackgroundColor #F1C40F
    LineColor #D4AC0D
    FontColor black
  }
}
</style>
* Rutherford's Atomic Model
** Background <<background>>
*** Year: 1911 <<year>>
*** Purpose <<purpose>>
**** Understand arrangement of electrons and protons in atoms <<purpose>>
** Rutherford's Experiment (1911) <<experiment>>
*** Experimental Setup <<setup>>
**** Gold Foil Properties <<properties>>
***** Thickness: 0.00004 cm <<properties>>
**** Alpha Particles <<properties>>
***** Source: Polonium disintegration <<properties>>
***** Properties <<properties>>
****** Helium nuclei <<properties>>
****** Doubly positively charged (He2+) <<properties>>
*** Observations <<observations>>
**** Primary Results <<observations>>
***** Most particles passed straight through <<observations>>
***** Few particles slightly deflected <<observations>>
***** One in 1 million deflected > 90° <<observations>>
**** Additional Testing <<observations>>
***** Used thin foils of other elements <<observations>>
***** Similar results observed <<observations>>
left side
** Key Conclusions <<conclusion>>
*** Empty Space Theory <<structure>>
**** Most of atom is empty space <<structure>>
**** Explained undeflected particles <<structure>>
*** Nuclear Structure <<structure>>
**** Strong deflections due to electrostatic repulsion <<structure>>
**** Indicated concentrated positive charge <<structure>>
*** Electron Behavior <<structure>>
**** Alpha particles not deflected by electrons <<structure>>
** Proposed Model <<conclusion>>
*** Structure <<structure>>
**** Nucleus <<structure>>
***** Dense center <<structure>>
***** Positively charged <<structure>>
***** Contains most mass <<structure>>
**** Electrons <<structure>>
***** Negatively charged <<structure>>
***** Revolve in orbits <<structure>>
***** Very light mass <<structure>>
*** Forces <<structure>>
**** Electrostatic Force <<structure>>
***** Attracts electrons to nucleus <<structure>>
***** Due to opposite charges <<structure>>
**** Centrifugal Force <<structure>>
***** Due to circular motion <<structure>>
***** Balances electrostatic force <<structure>>
*** Analogy <<structure>>
**** Solar System <<structure>>
***** Sun like nucleus <<structure>>
***** Planets like electrons <<structure>>
*** Properties <<structure>>
**** Neutral Atom <<structure>>
***** Equal positive & negative charges <<structure>>
**** Mostly Empty Space <<structure>>
***** Mass concentrated in nucleus <<structure>>
** Defects in Rutherford's Atomic Model <<defect>>
*** Electrons emit energy continuously <<defect>>
**** Orbit becomes smaller
**** Eventually collapses into the nucleus
**** Atomic structure collapse


*** Energy Spectrum Issue <<defect>>
**** Continuous energy emission <<defect>>
***** Should form a continuous spectrum (not observed)

@endmindmap
`}
        />
        <div className="flex mt-5 justify-between md:flex-row flex-col">
          <div className="border-r border-2 text-center">
            <Image
              width={800}
              height={800}
              alt="Plum Pudding Model"
              src="/Group 243 (1).png"
            />
          </div>
          <div className="border-r border-2 text-center">
            <Image
              width={800}
              height={800}
              alt="Plum Pudding Model"
              src="/Group 243.png"
            />
          </div>
          <div className="border-r border-2 text-center">
            <Image
              width={800}
              height={800}
              alt="Plum Pudding Model"
              src="/Rutherford.png"
            />
            <video width="640" height="360" controls>
              <source src="/videoplayback.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="flex  items-center justify-between md:flex-row flex-col">
          <Image
            width={650}
            height={700}
            alt="RutherFord Model setup"
            src="/rutherford_model_setup.png"
          />
          <Image
            width={650}
            height={700}
            alt="RutherFord Model setup"
            src="/Rutherfords-Experiment.png"
          />
        </div>
        <div className="flex  items-center justify-between md:flex-row flex-col">
          <Image
            width={650}
            height={700}
            alt="RutherFord Model setup"
            src="/a-Scattering-Experiment-i2tutorials.jpg"
          />
          <Image
            width={650}
            height={700}
            alt="RutherFord Model setup"
            src="/rutherford-atomic-model.png"
          />
        </div>
        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
  node {
    BackgroundColor white
    FontColor black
  }
  :depth(1) {
    BackgroundColor #2E86C1
  }
  :depth(2) {
    BackgroundColor #3498DB
    FontColor white
  }
  :depth(3) {
    BackgroundColor #85C1E9
    FontColor black
  }
  :depth(4) {
    BackgroundColor #D6EAF8
    FontColor black
  }
  .rutherford {
    BackgroundColor #E74C3C
    FontColor white
  }
  .discovery {
    BackgroundColor #F1948A
  }
  .limitations {
    BackgroundColor #EC7063
  }
  .bohr {
    BackgroundColor #27AE60
    FontColor white
  }
  .energy {
  FontColor black
  BackgroundColor #82E0AA
  }
  .momentum {
    BackgroundColor #58D68D
    FontColor black
  }
}
</style>

* /

** Rutherford's Atomic Model <<rutherford>>
*** Discovery <<discovery>>
**** Effectively determined nucleus existed
*** Limitations <<limitations>>
**** Could not explain electron movement
***** Electron Energy Loss (emission): Continuous emission of photons
****** Issue 1: Electron spirals into nucleus
******* Atomic structure collapses
****** Issue 2: Spectrum Problem
******* Expected: Continuous spectrum (rainbow-like)
******* Observed: Only specific colors (line spectrum)

** Bohr's Atomic Theory (1913) <<bohr>>
*** Published by Neils Bohr (Rutherford Student)
*** Circular Orbits
**** <b>Electrons in fixed circular orbits
**** Each orbit has fixed energy
**** Orbits = Energy levels
*** Energy Levels <<energy>>
**** Energy ∝ Distance from nucleus
**** Further = Higher energy

*** Angular Momentum <<momentum>>
**** Must be integral multiple of h/2π
**** h = Planck's constant
**** h = 6.626 × 10⁻³⁴ J.s
**** Pi (π) = approximately 3.14159

*** Energy Transfer <<energy>>
**** Absorption: electron jumps to higher orbit
**** Emission: electron falls to lower orbit
**** No radiation in stable orbit

*** Energy Change <<energy>>
**** ΔE = E₂ - E₁
**** Energy difference = Light energy

legend right
|= Color |= Section |
|<#E74C3C>| Rutherford's Model |
|<#27AE60>| Bohr's Theory |
|<#85C1E9>| Key Concepts |
|<#D6EAF8>| Details |
endlegend

@endmindmap
`}
        />

        <Image
          src="/bohrs-atomic-model.gif"
          alt="Bohr's Atomic Model"
          width={700}
          height={700}
        />
      </section>

      <div className="p-8 bg-gradient-to-r from-teal-100 to-blue-100 rounded-lg shadow-xl">
        <h1 className="text-3xl font-extrabold text-blue-800 mb-6">
          Atomic Models and Concepts
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-700 mb-3">
            I. Atomic Models Evolution
          </h2>

          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            A. Dalton&apos;s Model (1803)
          </h3>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>
              Main postulates:
              <ul className="list-disc list-inside text-blue-900 ml-8">
                <li>a. Elements composed of indivisible atoms</li>
                <li>b. Atoms of same element are identical</li>
                <li>
                  c. Atoms combine, separate, or rearrange in chemical reactions
                </li>
                <li>d. Atoms cannot be created or destroyed</li>
              </ul>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-2">
            B. Rutherford&apos;s Model (1911)
          </h3>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>
              Gold foil experiment findings:
              <ul className="list-disc list-inside text-blue-900 ml-8">
                <li>a. Most space in atom is empty</li>
                <li>b. Positive charge concentrated in nucleus</li>
                <li>c. Electrons revolve around nucleus in orbits</li>
              </ul>
            </li>
            <li>
              Defects:
              <ul className="list-disc list-inside text-blue-900 ml-8">
                <li>
                  a. Contradicts classical physics (continuous energy emission)
                </li>
                <li>
                  b. Predicts continuous spectrum instead of observed line
                  spectrum
                </li>
              </ul>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-2">
            C. Bohr&apos;s Model (1913)
          </h3>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>
              Key postulates:
              <ul className="list-disc list-inside text-blue-900 ml-8">
                <li>a. Electrons in fixed energy orbits</li>
                <li>b. Energy proportional to distance from nucleus</li>
                <li>c. Quantized angular momentum</li>
                <li>d. Light absorbed/emitted during electron transitions</li>
              </ul>
            </li>
            <li>Limitation: Does not depict 3D aspect of atom</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-2">
            D. Quantum Mechanical Model
          </h3>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>Current model based on quantum mechanics</li>
            <li>Defines electron probability distributions (orbitals)</li>
            <li>Explains complex atomic phenomena</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-700 mb-3">
            II. Important Atomic Concepts
          </h2>

          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            A. Proton Number/Atomic Number
          </h3>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>Number of protons in nucleus</li>
            <li>Unique to each element</li>
            <li>Used for arranging elements in periodic table</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-2">
            B. Nucleon Number/Atomic Mass
          </h3>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>Sum of protons and neutrons in nucleus</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-2">
            C. Isotopes
          </h3>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>Same element, different neutron numbers</li>
            <li>Affect molecular mass but not chemical properties</li>
            <li>Applications: Carbon dating, medical imaging</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-2">
            D. Ion Formation
          </h3>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>Cations (positive) and anions (negative)</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-2">
            E. Relative Atomic Mass
          </h3>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>Average mass of isotopes compared to 1/12 of carbon-12</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-teal-700 mb-3">
            III. Limitations of Atomic Models
          </h2>
          <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>1. Each model improved upon previous but had limitations</li>
            <li>
              2. Quantum model most comprehensive but involves probabilities
            </li>
          </ul>
        </div>
      </div>

      <PlantUMLDiagram
        code={`
@startmindmap
<style>
mindmapDiagram {
  .definition {
    BackgroundColor yellow
  }
  .key_statement {
    BackgroundColor lightgreen
  }
  .observation_example {
    BackgroundColor orange
  }
  .electron_orbitals {
    BackgroundColor pink
  }
  .wave_particle_duality {
    BackgroundColor lightpurple
  }
}
</style>
* The Heisenberg Uncertainty Principle #LightBlue
** Wave-Particle Duality <<duality>>
*** Proposed by Louis de Broglie in 1924
*** Electrons exhibit both particle-like and wave-like behavior
*** Opened new possibilities in quantum mechanics

** Contribution to Quantum Mechanics <<contribution>>
*** Significant impact on the field
*** Changed understanding of sub-atomic particles

** Uncertainty Principle <<definition>>
*** Fundamental concept of quantum mechanics
*** Formulated by Werner Heisenberg in 1927
** Key Statement <<key_statement>>
*** Impossible to determine exact location and trajectory of an electron
*** Electron orbit around nucleus cannot be precisely plotted

** Observation Example <<observation_example>>
*** Observation Process <<observation>>
**** Observing electron position at a moment
**** Electron moves unpredictably
**** Repeated observations build a 3D probability map
*** Uncertainty in Position <<uncertainty>>
**** Impossible to determine exact movement
**** Electron's path from one position to another remains unknown
*** Electron Orbitals <<electron_orbitals>>
**** Electron exists in a spherical region around the nucleus
**** 95% probability in a specific region called an orbital
**** Orbital is where the electron resides

** Experimental Confirmation <<confirmation>>
*** Confirmed by Davisson and Germer in 1927
*** Proved electrons have wave-like properties
*** Laid foundation for Modern Quantum Mechanics
@endmindmap

`}
      />
      <PlantUMLDiagram
        code={`
@startmindmap
<style>
mindmapDiagram {
  .yellow {
    BackgroundColor yellow
  }
  .lightgreen {
    BackgroundColor LightGreen
  }
  .orange {
    BackgroundColor Orange
  }
  .lightblue {
    BackgroundColor LightBlue
  }
  .explain {
    BackgroundColor LightYellow
  }
}
</style>
* Quantum Mechanical Model <<lightblue>>
** Definition <<Yellow>>
*** Current model used by modern science <<explain>>
*** Describes the structure of the atom <<explain>>
** Key Principles <<lightgreen>>
*** Incorporates quantum mechanics principles <<explain>>
*** Treats electrons as wave-particle entities <<explain>>
** Electron Behavior <<orange>>
*** No exact orbits <<explain>>
*** Defines probability distributions (orbitals) <<explain>>
*** Electrons are likely found in orbitals <<explain>>
@endmindmap
`}
      />
      <Image
        src="/electron-theory-Bohr-point-mass-energy-levels.webp"
        alt="Electron Theory Bohr Point Mass Energy Levels"
        className="w-full"
        width={300}
        height={300}
      />

      <PlantUMLDiagram
        code={`
  @startmindmap
<style>
mindmapDiagram {
  .definition {
    BackgroundColor yellow
  }
  .conceptualization {
    BackgroundColor lightblue
  }
  .importance {
    BackgroundColor lightgreen
  }
  .evolution {
    BackgroundColor orange
  }
}
</style>
* Understanding Atomic Models
** Atomic Model <<definition>>
*** Tool for understanding atomic structure and behavior
*** Understanding interactions of atoms in chemical reactions
** Conceptualization <<conceptualization>>
*** Not a physical model
*** Represents conceptual imagination
*** Helps explain experimental observations
** Importance <<importance>>
*** Simplifies complex atomic reality
*** Enhances understanding of atomic behavior
** Evolution of Atomic Models <<evolution>>
*** Research and technology improve models
*** Knowledge about atoms continuously refined
@endmindmap
`}
      />

      <PlantUMLDiagram code={`
        @startmindmap
<style>
mindmapDiagram {
  .nucleus {
    BackgroundColor yellow
  }
  .nucleons {
    BackgroundColor lightblue
  }
  .electrons {
    BackgroundColor lightgreen
  }
  .mass_distribution {
    BackgroundColor orange
  }
}
</style>
* A Simple View of Atomic Structure #LightPurple
** Nucleus <<nucleus>>
*** Located at the center of the atom
*** Contains protons and neutrons
** Nucleons <<nucleons>>
*** Protons and neutrons together are called nucleons
*** Massive particles
** Electrons <<electrons>>
*** Surround the nucleus in shells
*** Have very small mass
** Mass Distribution <<mass_distribution>>
*** Atom's mass is concentrated in the nucleus
*** Electron mass is negligible in comparison
@endmindmap
`} />

<PlantUMLDiagram code={`
@startmindmap
<style>
mindmapDiagram {
    .nucleus {
        BackgroundColor #FFB6C1
    }
    .particles {
        BackgroundColor #98FB98
    }
    .force {
        BackgroundColor #87CEEB
    }
    .properties {
        BackgroundColor #DDA0DD
    }
    .interactions {
        BackgroundColor #F0E68C
    }
}
</style>

* Nuclear Force<<nucleus>>
** Nucleus Composition<<particles>>
*** Contains protons (positive charge)
*** Contains neutrons (neutral charge)
*** No negative charge
** Stability Paradox<<properties>>
*** Protons should repel
*** Yet atoms are stable
*** Existed for billions of years
left side
** Strong Nuclear Force<<force>>
*** Definition
**** Powerful attractive force
**** Binds nucleons together
*** Properties
**** Stronger than electrostatic or magnetic forces
**** Not electrostatic
**** Not magnetic
** Particle Interactions<<interactions>>
*** Neutron-Neutron binding
*** Proton-Proton binding
*** Neutron-Proton binding

@endmindmap
`} />
    </div>
  );
};

export default MagneticMindmap;
