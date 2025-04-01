// pages/questions.js

import Head from 'next/head'

export default function Questions() {
  return (
    <div className="container mx-auto p-8">
      <Head>
        <title>MCQs, Short and Long Questions</title>
      </Head>

      <h1 className="text-3xl font-bold mb-4">Multiple-Choice Questions (MCQs), Short Questions, and Long Questions</h1>

      <h2 className="text-2xl font-semibold mb-4">12 MCQs (Each 1 Mark)</h2>

      <div className="space-y-4">
        <div className="question">
          <p className="font-bold">1. What is the correct definition of matter?</p>
          <ul className="list-disc pl-6">
            <li>a) Anything that has energy</li>
            <li>b) Anything that has mass and occupies space</li>
            <li>c) Anything that can be seen and touched</li>
            <li>d) Anything that can flow</li>
          </ul>
        </div>

        <div className="question">
          <p className="font-bold">2. Which of the following is NOT a state of matter?</p>
          <ul className="list-disc pl-6">
            <li>a) Gas</li>
            <li>b) Liquid</li>
            <li>c) Solid</li>
            <li>d) Crystal</li>
          </ul>
        </div>

        <div className="question">
          <p className="font-bold">3. What determines the state of matter?</p>
          <ul className="list-disc pl-6">
            <li>a) The mass of atoms</li>
            <li>b) The arrangement and movement of particles</li>
            <li>c) The size of molecules</li>
            <li>d) The color of the substance</li>
          </ul>
        </div>

        <div className="question">
          <p className="font-bold">4. Which state of matter has high density and is incompressible?</p>
          <ul className="list-disc pl-6">
            <li>a) Gas</li>
            <li>b) Liquid</li>
            <li>c) Solid</li>
            <li>d) Plasma</li>
          </ul>
        </div>

        <div className="question">
          <p className="font-bold">5. What happens when a gas is subjected to a strong electric field or high temperature?</p>
          <ul className="list-disc pl-6">
            <li>a) It turns into a liquid</li>
            <li>b) It turns into a plasma</li>
            <li>c) It remains unchanged</li>
            <li>d) It becomes a solid</li>
          </ul>
        </div>

        <div className="question">
          <p className="font-bold">6. Which state of matter has the highest compressibility?</p>
          <ul className="list-disc pl-6">
            <li>a) Gas</li>
            <li>b) Liquid</li>
            <li>c) Solid</li>
            <li>d) Plasma</li>
          </ul>
        </div>

        <div className="question">
          <p className="font-bold">7. What is the main characteristic of a liquid crystal?</p>
          <ul className="list-disc pl-6">
            <li>a) It has properties of both solids and liquids</li>
            <li>b) It is a type of plasma</li>
            <li>c) It is completely solid</li>
            <li>d) It cannot change its state</li>
          </ul>
        </div>

        <div className="question">
          <p className="font-bold">8. Which of the following is an example of a macroscopic property?</p>
          <ul className="list-disc pl-6">
            <li>a) Atomic number</li>
            <li>b) Electron configuration</li>
            <li>c) Compressibility</li>
            <li>d) Chemical bonding</li>
          </ul>
        </div>

        <div className="question">
          <p className="font-bold">9. What happens when a crystalline solid is heated?</p>
          <ul className="list-disc pl-6">
            <li>a) It directly turns into gas</li>
            <li>b) It becomes a liquid crystal before turning into a liquid</li>
            <li>c) It melts immediately</li>
            <li>d) It remains solid</li>
          </ul>
        </div>

        <div className="question">
          <p className="font-bold">10. Which of the following is a unique state of matter observed at extremely low temperatures?</p>
          <ul className="list-disc pl-6">
            <li>a) Plasma</li>
            <li>b) Liquid crystal</li>
            <li>c) Bose-Einstein Condensate (BEC)</li>
            <li>d) Superfluid</li>
          </ul>
        </div>

        <div className="question">
          <p className="font-bold">11. Which state of matter is NOT commonly found under normal conditions on Earth?</p>
          <ul className="list-disc pl-6">
            <li>a) Solid</li>
            <li>b) Liquid</li>
            <li>c) Gas</li>
            <li>d) Plasma</li>
          </ul>
        </div>

        <div className="question">
          <p className="font-bold">12. What remains unchanged when matter changes from one state to another?</p>
          <ul className="list-disc pl-6">
            <li>a) Physical appearance</li>
            <li>b) Chemical composition</li>
            <li>c) Temperature</li>
            <li>d) Energy level</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4 mt-8">11 Short Questions (Each 3 Marks)</h2>

      <div className="space-y-4">
        <p>1. Define matter with an example.</p>
        <p>2. Name the four main states of matter and describe one.</p>
        <p>3. How does energy affect the states of matter?</p>
        <p>4. What is meant by liquid crystal?</p>
        <p>5. What happens to gases when exposed to strong electric fields or high temperatures?</p>
        <p>6. How does Bose-Einstein Condensate (BEC) form?</p>
        <p>7. Compare the compressibility of solids, liquids, and gases.</p>
        <p>8. Explain why a solid does not flow but a liquid does.</p>
        <p>9. What is a macroscopic property? Give two examples.</p>
        <p>10. How does heating affect crystalline solids?</p>
        <p>11. What physical techniques can be used to change the state of matter?</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 mt-8">4 Long Questions (Each 5 Marks)</h2>

      <div className="space-y-4">
        <p>1. Describe the four states of matter along with their properties.</p>
        <p>2. Explain the relationship between temperature, energy, and the change in states of matter with an example.</p>
        <p>3. Discuss the concept of liquid crystals and how they differ from solids and liquids.</p>
        <p>4. Compare the macroscopic properties of solids, liquids, and gases with examples.</p>
      </div>
    </div>
  )
}
