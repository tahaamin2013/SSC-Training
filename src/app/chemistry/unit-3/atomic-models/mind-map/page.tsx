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
        
<p>Q2: What do you know about Dalton atomic theory? OR <br />
Write down the main postulates of Dalton&apos;s Atomic Theory. OR <br />
Why Dalton&apos;s atomic theory is considered as a base for modern atomic concepts.</p>
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

<iframe width="560" height="315" src="https://www.youtube.com/embed/NfRpUGNjM8U?si=ET6QCw__x1avQ8G1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
         <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold text-center text-blue-600">FOCUS Chemistry IX</h1>
      <h2 className="text-xl font-semibold mt-4">Chapter 3: Atomic Structure</h2>
      
      <section className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Dalton&apos;s Atomic Theory</h3>
        <p className="mt-2 text-gray-700">
          In 1803, John Dalton, a British chemist, introduced a theory about matter. 
          This theory is called Dalton&apos;s Atomic Theory. Here are its key points:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>All elements consist of tiny, indivisible particles called atoms.</li>
          <li>Atoms of the same element are identical in mass and size.</li>
          <li>Atoms rearrange, combine, or separate in chemical reactions.</li>
          <li>Atoms cannot be created or destroyed.</li>
        </ul>
      </section>
      
      <section className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Limitations of Dalton&apos;s Atomic Theory</h3>
        <p className="mt-2 text-gray-700">
          Over time, scientists found that some parts of Dalton&apos;s theory were incorrect:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Atoms are not indivisible; they have smaller particles like electrons, protons, and neutrons.</li>
          <li>Atoms of the same element can have different masses (isotopes). For example, chlorine has atoms with masses of 35u and 37u.</li>
          <li>Atoms of different elements can have the same mass (isobars). For example, potassium and calcium both have an atomic mass of 40.</li>
          <li>Substances made of the same element can have different properties. For example, diamond and graphite are both made of carbon but look and behave differently.</li>
          <li>Atoms combine in fixed ratios to form compounds, but the ratio is not always simple. For example, sugar (C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>) has a fixed but complex atomic ratio.</li>
        </ul>
      </section>
    </div>
 <p className="mt-3 mx-[140px]">Q3: Give an account of the experiment that led Rutherford to conclude that every atom has a positively charged nucleus that occupies a very small volume. What were the drawbacks of Rutherford&apos;s nuclear model of the atom? (Cantab Exercise Question)  <br />
OR <br />
Summarize Rutherford&apos;s model of an atom and explain how he developed this model based on the results of his famous gold-foil experiment. <br />
OR <br />
Discuss Rutherford gold metal foil experiment in the light of structure of atom <br />
OR <br />
Can you describe the experiment and result deduced by Rutherford for explaining atomic structure? <br />
OR <br />
Describe the contribution that Rutherford made to the development of the atomic theory. <br />
OR <br />
How Rutherford discovered that atom has a nucleus located at the centre of the atom?
</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/YDlCSPQ2uOQ?si=sGWMTdk23NloDAlO" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
<div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold text-center text-blue-600">FOCUS Chemistry IX</h1>
      <h2 className="text-xl font-semibold mt-4">Chapter 3: Atomic Structure</h2>
      
      <section className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">The Discovery of the Electron</h3>
        <p className="mt-2 text-gray-700">
          In the late 1800s, scientists believed atoms were unbreakable. But further research revealed that atoms consist of even smaller parts: electrons, protons, and neutrons.
        </p>
      </section>
      
      <section className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Rutherford&apos;s Atomic Model</h3>
        <p className="mt-2 text-gray-700">
          In 1911, Rutherford conducted an experiment to understand the structure of an atom.
        </p>
        
        <h4 className="text-md font-semibold mt-2">Experiment:</h4>
        <p className="mt-2 text-gray-700">
          He directed high-energy alpha particles at a thin gold foil. A fluorescent screen detected where the particles landed.
        </p>
        
        <h4 className="text-md font-semibold mt-2">Observations:</h4>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Most particles passed through without any deflection.</li>
          <li>Some particles deflected at small angles.</li>
          <li>Very few particles bounced back at 180°.</li>
        </ul>
        
        <h4 className="text-md font-semibold mt-2">Conclusions:</h4>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Most of the atom is empty space.</li>
          <li>A small, dense, positively charged center (nucleus) exists.</li>
          <li>The nucleus is heavy and tiny compared to the atom.</li>
        </ul>
      </section>
      
      <section className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Rutherford&apos;s Model of the Atom</h3>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>The atom has a small, dense nucleus with positive charge.</li>
          <li>Electrons orbit the nucleus in circular paths.</li>
          <li>The nucleus holds most of the atom’s mass.</li>
          <li>Number of electrons equals the number of protons.</li>
        </ul>
      </section>
      
      <section className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Limitations of Rutherford&apos;s Model</h3>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>It does not explain how electrons are arranged around the nucleus.</li>
          <li>According to physics, electrons should lose energy and fall into the nucleus, but they don’t.</li>
          <li>It fails to explain why atoms emit line spectra instead of continuous spectra.</li>
        </ul>
      </section>
    </div>
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

        <p>

        Q4: State the postulates of Bohr&apos;s theory of the hydrogen atom. Write an expression for the nth orbit of a hydrogen atom. Also, write an expression for the radius of any orbit in the atom?  <br />
OR <br />
State the postulates which Bohr suggested to overcome the shortcomings of the Rutherford&apos;s atomic model. <br />
OR <br />
Explain how Bohr&apos;s atomic theory differed from Rutherford&apos;s atomic theory? <br />
OR <br />
How did Bohr proved that an atom must exist? <br />
OR <br />
Explain how Bohr helped in understanding the structure of atoms? <br />
OR <br />
Explain how Bohr&apos;s atomic model is different from Rutherford atomic model? 



        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/W10NWbd5gFk?si=jcWCGCsmSQiFAh6g" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold text-center text-blue-600">FOCUS Chemistry IX</h1>
      <h2 className="text-xl font-semibold mt-4">Chapter 3: Atomic Structure</h2>
      <section>
        <h2 className="text-xl font-semibold text-gray-800">Background</h2>
        <p className="text-gray-600">
          Rutherford&apos;s model showed that atoms have a nucleus with electrons around it. However, it didn’t explain how electrons are arranged or why they don’t fall into the nucleus.
        </p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold text-gray-800">History</h2>
        <p className="text-gray-600">
          In 1913, Niels Bohr introduced a new atomic model. This model explained electron arrangement and the hydrogen emission spectrum.
        </p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold text-gray-800">Bohr’s Postulates</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Atoms have a tiny nucleus with electrons moving in fixed circular orbits.</li>
          <li>Each orbit has a set energy level.</li>
          <li>Electrons do not lose or gain energy while in an orbit.</li>
          <li>Electrons absorb energy when moving to a higher orbit and release energy when moving to a lower one.</li>
          <li>Energy change is given by the equation: <span className="font-mono">ΔE = E₂ - E₁ = hv</span>, where <span className="font-mono">h</span> is Planck’s constant (6.63 × 10⁻³⁴ Js) and <span className="font-mono">v</span> is the frequency of light.</li>
          <li>Electrons revolve in orbits with fixed angular momentum: <span className="font-mono">mvr = n(h/2π)</span>, where <span className="font-mono">n</span> is the orbit number.</li>
        </ul>
      </section>
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Second Answer</h1>
        
        <p className="mb-4">
          In 1913, Niels Bohr introduced a new atomic model to fix problems in Rutherford’s theory. His model is based on these key ideas:
        </p>
        
        <ul className="list-disc list-inside space-y-2">
          <li>Electrons move in fixed circular paths called shells or energy levels.</li>
          <li>Each orbit has a fixed energy. The farther the electron, the higher its energy.</li>
          <li>As long as an electron stays in its orbit, its energy remains constant.</li>
          <li>When an electron jumps between orbits, it absorbs or releases energy.</li>
          <li>Electrons can only exist in specific orbits, not in between them.</li>
          <li>Angular momentum follows the rule: <code>mvr = nh / (2π)</code>.</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-700 mt-4">Energy Levels</h2>
        <p className="mb-4">
          Bohr’s model defines different shells: K, L, M, N, O, P, Q. Electrons in the K-shell (n = 1) have the lowest energy and are closest to the nucleus. The next shell is L (n = 2), and so on.
        </p>
        
        <div className="mt-6 p-4 bg-gray-200 rounded-lg">
          <h3 className="text-lg font-semibold">Formula for Energy Difference</h3>
          <p className="text-sm mt-2">
            ΔE = E₂ - E₁ = hv <br />
            (where h = Planck’s constant, v = frequency)
          </p>
        </div>
=
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
<p>Q11: What are the limitations of Bohr&apos;s atomic model? 
</p>
<div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Limitations of Bohr&apos;s Atomic Model</h1>
      <p className="mb-4">
        Bohr&apos;s model helped us understand atoms, but it had flaws. Over time, scientists found cases where it did not match the data. Here are some key issues:
      </p>
      
      <h2 className="text-lg font-semibold mt-4">1. Only for Hydrogen</h2>
      <p>
        The model worked well for hydrogen, which has one electron. But it failed for atoms with more electrons.
      </p>

      <h2 className="text-lg font-semibold mt-4">2. Electrons&apos;Pathway</h2>
      <p>
        Bohr said electrons move in circles around the nucleus, like planets around the sun. But electrons do not follow fixed paths.
      </p>

      <h2 className="text-lg font-semibold mt-4">3. Quantum Nature of Electrons</h2>
      <p>
        Electrons belong to the quantum world, where rules are different. We cannot know their exact position and movement at the same time.
      </p>

      <h2 className="text-lg font-semibold mt-4">4. Probabilistic Movement</h2>
      <p>
        Electrons move like fast, unpredictable flies. Unlike cars on roads, they do not stay in fixed lanes but prefer certain areas.
      </p>

      <h2 className="text-lg font-semibold mt-4">5. Quantum Uncertainty</h2>
      <p>
        The Uncertainty Principle states we cannot know both an electron’s position and speed exactly—like spotting a race car and guessing its speed in a blink.
      </p>

      <h2 className="text-lg font-semibold mt-4">6. Bohr’s Model Falls Short</h2>
      <p>
        The model could not explain electrons&apos; unpredictable quantum behavior. Scientists needed a better model.
      </p>
      
      <p className="mt-4 font-semibold">In short, Bohr’s model was a great step forward, but it had limits—especially for complex atoms and quantum effects.</p>
    </div>

      <p>Q5: How can Bohr&apos;s atomic model be applied to hydrogen atom to calculate the radius and energy of shell? 
      </p>

      <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Bohr&apos;s Atomic Model Applications</h1>
      <p className="text-gray-700 mb-4">
        Bohr&apos;s atomic model helps us calculate two important things:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>The radius of a hydrogen atom&apos;s orbit.</li>
        <li>The energy of an electron in different orbits.</li>
      </ul>
      <h2 className="text-xl font-semibold text-blue-500 mb-3">Bohr&apos;s Energy Calculation</h2>
      <p className="text-gray-700 mb-4">
        Bohr used energy quantization to determine the energy of an electron in a hydrogen atom.
        The formula for energy in the nth orbit is:
      </p>
      <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono">
        E_n = - 1313.315 / (n²) kJ/mol
      </pre>
      <p className="text-gray-700 mt-4">
        Here are the energy values for different orbits:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>n = 1 → -1313.31 kJ/mol</li>
        <li>n = 2 → -328.32 kJ/mol</li>
        <li>n = 3 → -145.92 kJ/mol</li>
        <li>n = 4 → -82.08 kJ/mol</li>
        <li>n = 5 → -52.53 kJ/mol</li>
      </ul>
      <h2 className="text-xl font-semibold text-blue-500 mb-3">Bohr&apos;s Radius Calculation</h2>
      <p className="text-gray-700 mb-4">
        The radius of an electron’s orbit is calculated using the formula:
      </p>
      <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono">
        r = 0.529 × (n²) Å
      </pre>
      <p className="text-gray-700 mt-4">For different orbits:</p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>n = 1 → 0.529 Å</li>
        <li>n = 2 → 2.11 Å</li>
        <li>n = 3 → 4.75 Å</li>
        <li>n = 4 → 8.4 Å</li>
        <li>n = 5 → 13.23 Å</li>
      </ul>
      <p className="text-gray-700">
        As we move to higher orbits, both energy and radius increase.
      </p>
    </div>

    <p>Q6: How staircase is the example of orbits or energy levels 
    </p>
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Understanding Electron Shells</h1>
      <p className="text-lg mb-2">
        Imagine climbing a staircase. At the bottom, the steps are tall and hard to climb. These steps
        represent the inner electron shells close to the nucleus. The large step size shows the big energy
        difference between these shells.
      </p>
      <p className="text-lg mb-2">
        As you move up, the steps get shorter, making them easier to climb. This represents the smaller
        energy gaps between the outer shells of an atom. However, while these steps are shorter, they are
        also farther apart, showing that the outer shells are spread out more than the inner ones.
      </p>
      <p className="text-lg font-semibold text-center mt-4">Summary:</p>
      <ul className="list-disc list-inside text-lg">
        <li>Inner shells: Large energy gaps, small distances.</li>
        <li>Outer shells: Small energy gaps, larger distances.</li>
      </ul>
    </div>

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

       <p>Q8: State Heisenberg Uncertainty principle.</p>

       
       <div className="p-6 max-w-3xl mx-auto bg-white rounded-2xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center text-blue-600">Heisenberg&apos;s Uncertainty Principle</h1>
      
      <p className="text-gray-700">
        Imagine trying to take a selfie while riding a rollercoaster. The picture is always blurry because the ride is too fast! The same happens with tiny particles like electrons. Their movement is too unpredictable to measure both their position and speed exactly at the same time.
      </p>
      
      <h2 className="text-xl font-semibold text-blue-500">Statement</h2>
      <p className="text-gray-700">
        The principle states that it is impossible to know both the exact position and speed of an electron at the same time. This makes it impossible to precisely track an electron&apos;s path around the nucleus.
      </p>
      
      <h2 className="text-xl font-semibold text-blue-500">Mathematical Expression</h2>
      <p className="text-gray-700">
        <span className="font-mono">Δx × Δp ≥ h / (4π)</span>
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li><b>Δx:</b> Uncertainty in position (how precisely you know where the particle is).</li>
        <li><b>Δp:</b> Uncertainty in momentum (how fast and in which direction it moves).</li>
        <li><b>h:</b> Planck’s constant (a tiny value: 6.626 × 10⁻³⁴ Js).</li>
      </ul>
      
      <h2 className="text-xl font-semibold text-blue-500">What It Means</h2>
      <p className="text-gray-700">
        The more accurately you measure an electron&apos;s position, the less accurately you can measure its speed and direction.
      </p>
      
      <h2 className="text-xl font-semibold text-blue-500">Example</h2>
      <p className="text-gray-700">
        Imagine using a super-powerful microscope to see an electron. You need to shine a strong light beam on it. But this light pushes the electron, changing its speed! So, the more precisely you measure its position, the more you disturb its speed.
      </p>
      
      <h2 className="text-xl font-semibold text-blue-500">In Simple Words</h2>
      <p className="text-gray-700">
        The Heisenberg Uncertainty Principle means you can’t measure both the position and speed of tiny particles at the same time. The more you try to measure one, the less you know about the other!
      </p>
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

<p>Q7: How Quantum Mechanical Model explains the structure of an atom? </p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/1lLWqz18Jcc?si=N3NmJKK3GFK981jK" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
<div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold text-center mb-4">Quantum Mechanical Model</h1>
      <p className="mb-2">
        The <strong>Quantum Mechanical Model</strong> explains the structure of an atom in this way:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Electrons move in cloud-like areas (orbitals) instead of fixed paths.</li>
        <li>Energy levels are set, meaning electrons can only have specific amounts of energy.</li>
        <li>Electrons act like both waves and particles.</li>
        <li>Electrons have natural properties like spin and magnetism.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-4">Key Principles</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Pauli&apos;s Exclusion Principle:</strong> No two electrons can have the same four quantum numbers.</li>
        <li><strong>Aufbau Principle:</strong> Electrons fill orbitals from lower to higher energy levels.</li>
      </ul>
      <p className="mt-4">
        This model helps us understand atoms better, predicting their energy, light emission, and chemical reactions.
      </p>
    </div>
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

      <p>Q9: Explore the concept of modern Quantum mechanics including the contribution of Louis de Broglie and Davission and Germer? 
      </p>
      <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold text-center">Quantum Mechanics Made Simple</h1>
      <p className="text-gray-700">
        Quantum mechanics is a science that explains how tiny particles behave. These particles, like electrons, can act like waves too!
      </p>
      <h2 className="text-lg font-semibold">Key Contributors</h2>
      <div className="space-y-3">
        <div>
          <h3 className="font-medium">1. Louis de Broglie</h3>
          <p className="text-gray-600">
            He discovered that tiny particles, like electrons, also behave like waves. This idea is called wave-particle duality.
          </p>
          <p className="text-gray-600">
            His formula, λ = h/p, shows that the wavelength (λ) depends on Planck’s constant (h) and the particle’s momentum (p).
          </p>
        </div>
        <div>
          <h3 className="font-medium">2. Davisson and Germer</h3>
          <p className="text-gray-600">
            In 1927, they ran an experiment and proved de Broglie was right! They shot electrons at a nickel crystal and saw a pattern—just like waves make!
          </p>
        </div>
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
      <iframe width="560" height="315" src="https://www.youtube.com/embed/mjGIbxP-KzQ?si=-iWiioBkIVBZ8xER" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    <p>Q1: What do you know about atoms? </p>
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Introduction to Atoms</h1>
      <p className="text-gray-700 mb-4">
        Atoms are tiny building blocks that make up everything around us. From gold and carbon to the oxygen we breathe, all materials are made of atoms. Even though they are everywhere, atoms are extremely small. To understand their size, imagine a sheet of paper—it is as thick as a stack of one million atoms!
      </p>
      <h2 className="text-xl font-semibold text-blue-500 mb-2">Parts of an Atom:</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li><strong>Proton</strong></li>
        <li><strong>Neutron</strong></li>
        <li><strong>Electron</strong></li>
        <li><strong>Electron Shell</strong></li>
      </ul>
      <p className="text-gray-700 mb-4">
        <strong>Figure:</strong> This shows protons, neutrons, and electrons inside an atom.
      </p>
      <h2 className="text-xl font-semibold text-blue-500 mb-2">Word Meaning:</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li><strong>Omni:</strong> Means &quot;all&quot; or &quot;every.&quot;</li>
        <li><strong>Presence:</strong> Means &quot;being there.&quot;</li>
        <li><strong>Omnipresence:</strong> Means &quot;being everywhere at the same time.&quot;</li>
      </ul>
    </div>
  



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

<iframe width="560" height="315" src="https://www.youtube.com/embed/aYxm2q9eKNI?si=_GK9AfXmxgXbE1XC" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>

<p>Q10: Explore the concept of nuclear force including binding of proton, neutron and nucleus? 
</p>
<div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Nuclear Force</h1>
      <p className="text-lg text-gray-700">
        The nuclear force is a powerful force that holds the tiny parts of an atom together.
        It keeps protons and neutrons inside the nucleus, even though protons repel each other.
      </p>
      <h2 className="text-xl font-semibold mt-4 text-blue-500">Why is it Important?</h2>
      <ul className="list-disc pl-6 text-gray-700 text-lg">
        <li>It binds protons and neutrons together.</li>
        <li>It prevents the nucleus from breaking apart.</li>
        <li>It helps form different types of atoms.</li>
      </ul>
      <p className="text-lg text-gray-700 mt-4">
        This force works only at very short distances and is carried by particles called gluons.
      </p>
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-lg text-gray-800">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Second Answer</h1>
        <p className="text-lg leading-relaxed">
          Nuclear force is the strong force that holds protons and neutrons together in the nucleus of an atom.
          Even though protons repel each other because they have the same charge, the nuclear force is much stronger
          at very short distances (about 1 femtometer).
        </p>
        <p className="text-lg leading-relaxed mt-2">
          This force pulls all nucleons (protons and neutrons) together, keeping the nucleus stable. It overcomes
          the repulsion between protons and ensures atoms do not fall apart.
        </p>
      </div>
    </div>

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

<iframe width="560" height="315" src="https://www.youtube.com/embed/BIV_x3NGluo?si=RPGsyJClTHX1DgC1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  );
};

export default MagneticMindmap;
