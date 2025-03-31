import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import Image from "next/image";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">ALLOTROPES</h1>
        <p>
        Q5: Define the term Allotropes. Explain the allotropes of carbon. NBF Exercise Question).  <br />
OR  <br />
Explain allotropes and their significance (Cantab Exercise Question).

        </p>
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-6 space-y-6">
        <h1 className="text-3xl font-bold text-blue-600">Allotropy</h1>
        <p className="text-gray-700">
          Allotropy is when an element can exist in different physical forms.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800">Allotropes</h2>
        <p className="text-gray-700">
          These are different structural forms of the same element in the same physical state.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800">Examples of Allotropes</h2>
        <p className="text-gray-700">
          Carbon has three main allotropes: Diamond, Graphite, and Fullerenes.
        </p>

        <h3 className="text-xl font-semibold text-gray-800">1. Diamond</h3>
        <p className="text-gray-700">
          In a diamond, carbon atoms form a strong, three-dimensional network. Each atom bonds with four others, making diamond very hard and giving it a high melting point. It also conducts heat well and is used in jewelry and cutting tools.
        </p>

        <h3 className="text-xl font-semibold text-gray-800">Properties of Diamond</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Extremely hard</li>
          <li>Very high melting point</li>
          <li>High density</li>
          <li>Transparent to X-rays</li>
          <li>High refractive index</li>
          <li>Bad conductor of electricity</li>
          <li>Good conductor of heat</li>
          <li>Insoluble in all solvents</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800">2. Graphite</h3>
        <p className="text-gray-700">
          Graphite has layers of carbon atoms arranged in hexagons. These layers slide over each other, making graphite slippery. It conducts electricity well due to free-moving electrons and is used in pencils, electrodes, and lubricants.
        </p>

        <h3 className="text-xl font-semibold text-gray-800">3. Fullerenes</h3>
        <p className="text-gray-700">
          Fullerenes are carbon molecules shaped like spheres, cylinders, or ellipsoids. The most famous one, the buckyball, has 60 carbon atoms arranged like a soccer ball. Fullerenes are useful in nanotechnology, electronics, and medicine.
        </p>
      </div>
    </div>
    <p>1. What are allotropic forms of solids, and why do they have distinct properties. </p>
    <div className="max-w-lg bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Allotropic Forms</h1>
        <p className="text-gray-700 text-lg">
          Allotropes are different forms of the same element in the same state. They have unique properties because their atoms are arranged differently. This leads to differences in hardness, electrical conductivity, and reactivity.
        </p>
      </div>
    <p>2. Provide examples of allotropic forms of carbon and briefly describe their structural differences.     </p>
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Examples of Allotropic Forms of Carbon</h1>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          <strong>Diamond:</strong> Each carbon atom connects to four others in a strong, three-dimensional network. This makes it very hard and shiny.
        </li>
        <li>
          <strong>Graphite:</strong> Carbon atoms form flat layers stacked on top of each other. These layers slide easily, making graphite smooth and useful in pencils.
        </li>
        <li>
          <strong>Fullerenes (e.g., Buckminsterfullerene, C60):</strong> These are hollow shapes made of carbon, like tiny spheres or tubes, with hexagonal and pentagonal patterns.
        </li>
      </ul>
    </div>
    <p>3. How does the atomic arrangement in diamond differ from that in graphite, and how do these differences affect their properties? </p>
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold text-gray-900">Diamond vs. Graphite</h1>
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">Diamond</h2>
        <p className="text-gray-700">
          Diamond is super strong because each carbon atom links to four others, forming a solid 3D network. 
          This structure makes it extremely hard, great at carrying heat, and unable to conduct electricity.
        </p>
      </div>
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">Graphite</h2>
        <p className="text-gray-700">
          Graphite has layers where each carbon atom bonds with three others in a hexagonal pattern. 
          These layers slide easily, making graphite soft and perfect for lubrication. It also conducts electricity 
          well because of free-moving electrons within the layers.
        </p>
      </div>
    </div>
    <p>4. Can you compare and contrast the electrical conductivity of diamond. Graphite and fullerenes based on their atomic structure? </p>
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center">Electrical Conductivity of Carbon Allotropes</h1>
      
      <div className="bg-blue-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold">Diamond</h2>
        <p>Diamond does not conduct electricity. This is because all four valence electrons of each carbon atom form strong covalent bonds. Since no free electrons are left, electricity cannot pass through.</p>
      </div>
      
      <div className="bg-green-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold">Graphite</h2>
        <p>Graphite is a good conductor of electricity. Each carbon atom forms three bonds, leaving one free electron. These free electrons move within the layers and help conduct electricity.</p>
      </div>
      
      <div className="bg-yellow-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold">Fullerenes</h2>
        <p>Fullerenes are made of carbon atoms arranged in closed cages. They can conduct some electricity due to free electrons on their surface. However, they conduct less than graphite but more than diamond. Conductivity changes depending on their form and modifications.</p>
      </div>
    </div>
        <PlantUMLDiagram
          code={`
@startmindmap
skinparam monochrome false
* 2.3 ALLOTROPES
** Definition
*** Property of an element to exist in different physical forms
*** Different forms in the same physical state
*** Atoms of same element arranged differently
left side
** Carbon Allotropes
*** Graphite
**** Composition
***** Flat 2D layers
***** Hexagonally arranged carbon atoms
**** Bonding
***** Each C-atom covalently bonded to 3 others
***** Weak intermolecular bonds between layers
**** Properties
***** Soft and slippery
***** Good conductor of electricity
**** Uses
***** Lubricant
*** Diamond
**** Structure
***** Each C-atom covalently bonded to 4 others
***** Rigid network of tetrahedral shape
**** Properties
***** Hardest substance
***** Very high melting point
***** Non-conductor of electricity
*** Buckyballs (C-60)
**** Structure
***** Football-like fused hollow ring
***** 20 hexagons and 12 pentagons
**** Composition
***** 60 carbon atoms
***** Each atom bonded to 3 others
** Fig 2.2: Classification of matter
@endmindmap`}
        />
      </section>

      <div className="flex flex-wrap items-center justify-between">
        <div className="text-center font-bold w-fit">
          Graphite Structure
          <Image
            src="/graphite_structure.jpeg"
            alt="Structure of Graphite"
            width={300}
            height={300}
          />
        </div>
        <div className="text-center font-bold w-fit">
          Diamond Structure
          <Image
            src="/diamond_structure.webp"
            alt="Structure of Graphite"
            width={300}
            height={300}
          />
        </div>
        <div className="text-center font-bold w-fit">
          BuckyBalls Structure
          <Image
            src="/buckyball_structure.webp"
            alt="Structure of Graphite"
            width={450}
            height={300}
          />
        </div>
      </div>

      <div className="p-8 bg-gradient-to-r from-green-50 to-yellow-50 rounded-lg shadow-xl">
        <h1 className="text-3xl font-extrabold text-yellow-800 mb-6">
          Allotropy
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">
            I. Allotropy
          </h2>
          <h3 className="text-xl font-bold text-yellow-600 mb-2">
            A. Definition
          </h3>
          <p className="text-green-900 bg-green-100 p-4 rounded-lg">
            Property of an element to exist in different physical forms.
          </p>

          <h3 className="text-xl font-bold text-yellow-600 mt-4 mb-2">
            B. Allotropes
          </h3>
          <p className="text-green-900 bg-green-100 p-4 rounded-lg">
            Different forms of the same element in the same physical state.
          </p>

          <h3 className="text-xl font-bold text-yellow-600 mt-4 mb-2">
            C. Characteristic
          </h3>
          <p className="text-green-900 bg-green-100 p-4 rounded-lg">
            Same element atoms arranged in different manners.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">
            II. Carbon Allotropes
          </h2>
          <h3 className="text-xl font-bold text-yellow-600 mb-2">
            A. Three important allotropes:
          </h3>
          <ul className="list-disc list-inside text-green-900 ml-8">
            <li>1. Graphite</li>
            <li>2. Diamond</li>
            <li>3. Buckyballs (C-60)</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">
            III. Graphite
          </h2>
          <h3 className="text-xl font-bold text-yellow-600 mb-2">
            A. Structure:
          </h3>
          <ul className="list-disc list-inside text-green-900 ml-8">
            <li>1. Flat two-dimensional layers</li>
            <li>2. Hexagonally arranged carbon atoms</li>
            <li>3. Each C-atom covalently bonded to three others</li>
          </ul>

          <h3 className="text-xl font-bold text-yellow-600 mt-4 mb-2">
            B. Inter-layer bonding:
          </h3>
          <ul className="list-disc list-inside text-green-900 ml-8">
            <li>1. Weak intermolecular bonds</li>
            <li>2. Allows layers to slide over one another</li>
          </ul>

          <h3 className="text-xl font-bold text-yellow-600 mt-4 mb-2">
            C. Properties:
          </h3>
          <ul className="list-disc list-inside text-green-900 ml-8">
            <li>1. Soft and slippery</li>
            <li>2. Good conductor of electricity</li>
          </ul>

          <h3 className="text-xl font-bold text-yellow-600 mt-4 mb-2">
            D. Application:
          </h3>
          <p className="text-green-900 bg-green-100 p-4 rounded-lg">
            Used as a lubricant.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">
            IV. Diamond
          </h2>
          <h3 className="text-xl font-bold text-yellow-600 mb-2">
            A. Structure:
          </h3>
          <ul className="list-disc list-inside text-green-900 ml-8">
            <li>1. Each C-atom covalently bonded to four others</li>
            <li>2. Rigid network of tetrahedral shape</li>
            <li>3. Three-dimensional arrangement</li>
          </ul>

          <h3 className="text-xl font-bold text-yellow-600 mt-4 mb-2">
            B. Properties:
          </h3>
          <ul className="list-disc list-inside text-green-900 ml-8">
            <li>1. Hardest crystalline allotrope of carbon</li>
            <li>2. Very high melting point</li>
            <li>3. Non-conductor of electricity</li>
          </ul>

          <h3 className="text-xl font-bold text-yellow-600 mt-4 mb-2">
            C. Reason for non-conductivity:
          </h3>
          <p className="text-green-900 bg-green-100 p-4 rounded-lg">
            No free electrons.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">
            V. Buckyballs (C-60)
          </h2>
          <h3 className="text-xl font-bold text-yellow-600 mb-2">
            A. Also known as fullerenes
          </h3>
          <h3 className="text-xl font-bold text-yellow-600 mt-4 mb-2">
            B. Structure:
          </h3>
          <ul className="list-disc list-inside text-green-900 ml-8">
            <li>1. Football-like fused hollow ring</li>
            <li>2. Composed of 20 hexagons and 12 pentagons</li>
            <li>3. 60 carbon atoms, each bonded to 3 others</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MagneticMindmap;
