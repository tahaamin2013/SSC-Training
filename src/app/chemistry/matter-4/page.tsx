// pages/MatterQuestions.js

import React from 'react';

const MatterQuestions = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-6">Multiple Choice Questions (1 mark each)</h1>
        
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <p>What is matter?</p>
            <ul className="list-disc pl-5">
              <li>a) Anything that has weight and takes up space</li>
              <li>b) Only things that can be seen</li>
              <li>c) Only solid materials</li>
              <li>d) Anything that moves</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <p>Atoms are the building blocks of:</p>
            <ul className="list-disc pl-5">
              <li>a) Liquids</li>
              <li>b) Energy</li>
              <li>c) All matter</li>
              <li>d) Solids only</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <p>Which of the following is an example of a gas?</p>
            <ul className="list-disc pl-5">
              <li>a) Ice</li>
              <li>b) Water</li>
              <li>c) Oxygen</li>
              <li>d) Wood</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <p>Which property is NOT associated with solids?</p>
            <ul className="list-disc pl-5">
              <li>a) Fixed shape</li>
              <li>b) High compressibility</li>
              <li>c) High density</li>
              <li>d) Definite volume</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <p>Liquids have:</p>
            <ul className="list-disc pl-5">
              <li>a) Fixed shape and volume</li>
              <li>b) No fixed shape but fixed volume</li>
              <li>c) No fixed shape and no fixed volume</li>
              <li>d) None of these</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <p>Which state of matter has the highest compressibility?</p>
            <ul className="list-disc pl-5">
              <li>a) Solid</li>
              <li>b) Liquid</li>
              <li>c) Gas</li>
              <li>d) Plasma</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <p>Plasma is found in:</p>
            <ul className="list-disc pl-5">
              <li>a) Stars and lightning</li>
              <li>b) Oceans and rivers</li>
              <li>c) Mountains and rocks</li>
              <li>d) Metals and wood</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <p>What is an example of a low-temperature state of matter?</p>
            <ul className="list-disc pl-5">
              <li>a) Plasma</li>
              <li>b) Bose-Einstein Condensate</li>
              <li>c) Ionized Gas</li>
              <li>d) Superheated Steam</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <p>Liquid crystals are used in:</p>
            <ul className="list-disc pl-5">
              <li>a) Light bulbs</li>
              <li>b) LCD screens</li>
              <li>c) Batteries</li>
              <li>d) Magnets</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <p>Bose-Einstein Condensates form at:</p>
            <ul className="list-disc pl-5">
              <li>a) High temperatures</li>
              <li>b) Room temperature</li>
              <li>c) Extremely low temperatures</li>
              <li>d) In the Earth's core</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <p>Which property is common to both gases and liquids?</p>
            <ul className="list-disc pl-5">
              <li>a) They can flow</li>
              <li>b) They have fixed volume</li>
              <li>c) They are incompressible</li>
              <li>d) They have a definite shape</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <p>Which of the following is NOT a property of plasma?</p>
            <ul className="list-disc pl-5">
              <li>a) It is highly conductive</li>
              <li>b) It contains free electrons and ions</li>
              <li>c) It behaves like a regular gas</li>
              <li>d) It emits light</li>
            </ul>
          </div>
        </div>

        <h1 className="text-2xl font-semibold my-6">Short Questions (3 marks each)</h1>

        <div className="space-y-4">
          <p>Define matter and explain why atoms are considered the building blocks of all matter.</p>
          <p>Describe the three main states of matter (solid, liquid, and gas) and their distinguishing properties.</p>
          <p>Explain how gas turns into plasma.</p>
          <p>Describe how the particles move in solid, liquid, and gas states.</p>
          <p>What is meant by the term "compressibility," and which state of matter is the most compressible?</p>
          <p>How does the kinetic particle theory explain the change of states in oxygen when cooled?</p>
          <p>What are liquid crystals, and how do they differ from normal liquids and solids?</p>
          <p>How do Bose-Einstein Condensates exhibit quantum behavior?</p>
          <p>What are some natural occurrences of plasma in the universe?</p>
          <p>Describe the conditions required to form a Bose-Einstein Condensate.</p>
          <p>How does plasma differ from a regular gas in terms of its properties?</p>
        </div>

        <h1 className="text-2xl font-semibold my-6">Short Questions (5 marks each)</h1>

        <div className="space-y-4">
          <p>Discuss the different exotic states of matter and give examples of each.</p>
          <p>Explain the key properties of plasma and its applications.</p>
          <p>What are superconductors and superfluids, and how do they relate to Bose-Einstein Condensates?</p>
          <p>Describe the role of temperature in changing states of matter and give examples of how substances transition between solid, liquid, gas, and plasma.</p>
        </div>
      </div>
    </div>
  );
};

export default MatterQuestions;
