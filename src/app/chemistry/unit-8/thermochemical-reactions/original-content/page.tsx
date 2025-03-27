import React from 'react';

const ThermochemicalReactions = () => {
  return (
    <div className="bg-white text-black min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
      
        <h2 className="text-2xl font-semibold mb-4">8.2 THERMOCHEMICAL REACTIONS</h2>
        <p className="mb-4">
          When a chemical change takes place, energy is exchanged between system and its surroundings. Energy has many forms such as heat, light, work etc. A chemical reaction which proceeds with the evolution or absorption of heat is called a thermochemical reaction. A balanced chemical equation which also shows heat change of a chemical reaction is called thermochemical equation. The branch of chemistry which deals with the heat or thermal energy changes in chemical reactions is called thermochemistry.
        </p>

        <h3 className="text-xl font-semibold mb-4">For example</h3>
        <pre className="bg-gray-100 p-4 rounded mb-4">
          C<sub>2</sub> + O<sub>2</sub> &rarr; CO<sub>2</sub> &Delta;H° = -393.5 kJ
        </pre>

        <h3 className="text-xl font-semibold mb-4">8.2.1 Exothermic Reactions</h3>
        <p className="mb-4">
          A chemical reaction that proceeds with the evolution of heat is called an exothermic reaction. In an exothermic reaction, the chemical system transfers energy to the surroundings as the reactants are converted to products e.g. burning of fuels is a highly exothermic reaction. The energy released can be used to heat a room, or to drive an engine or to cook food. Examples of exothermic reactions are given below:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>CO<sub>2</sub> &Delta;H = -393.5 kJ</li>
          <li>H<sub>2</sub> + 1/2 O<sub>2</sub> &rarr; H<sub>2</sub>O &Delta;H = -571.6 kJ</li>
          <li>CO + 1/2 O<sub>2</sub> &rarr; CO<sub>2</sub> &Delta;H = -110.5 kJ</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">8.2.2 Endothermic Reactions</h3>
        <p className="mb-4">
          A chemical reaction that proceeds with the absorption of heat is called an endothermic reaction. In these reactions, heat is transferred from the surroundings to the system. Examples of endothermic reactions are given below:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>N<sub>2</sub> + O<sub>2</sub> &rarr; 2NO &Delta;H = +180.5 kJ</li>
          <li>CO + H<sub>2</sub>O &rarr; 2HI &Delta;H = +131.4 kJ</li>
          <li>C + H<sub>2</sub>O &rarr; CO + H<sub>2</sub> &Delta;H = +53.8 kJ</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">CONCEPT ASSESSMENT EXERCISE 8.1</h2>
        <p className="mb-4">
          Classify the following processes as exothermic or endothermic:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Freezing of water</li>
          <li>Combustion of methane</li>
          <li>Sublimation of dry ice</li>
          <li>Decomposition of limestone</li>
        </ul>
      </div>
    </div>
  );
};

export default ThermochemicalReactions;
