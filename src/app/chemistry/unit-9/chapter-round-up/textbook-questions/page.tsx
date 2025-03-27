import React from 'react';

const QuestionsPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Chemistry Questions</h1>
        <ol className="list-decimal space-y-6 pl-5">
          <li className="mb-4">
            <strong>Q1: Define Matter. Explain that atom is the building block of all matter.</strong>
          </li>
          <li className="mb-4">
            <strong>Q2: Explain Reversible and Irreversible reactions.</strong>
          </li>
          <li className="mb-4">
            <strong>Q3: Explain the reaction of hydrogen and iodine in a closed flask/container.</strong>
          </li>
          <li className="mb-4">
            <strong>Q4: What happens when SO<sub>2</sub> and O<sub>2</sub> gases are mixed in a sealed container?</strong>
          </li>
          <li className="mb-4">
            <strong>Q5: What is Chemical Equilibrium? Explain.</strong>
          </li>
          <li className="mb-4">
            <strong>Q6: Differentiate between Reversible and Irreversible reactions.</strong>
          </li>
          <li className="mb-4">
            <strong>Q7: Define forward and reverse reactions.</strong>
          </li>
          <li className="mb-4">
            <strong>Q8: Write down the comparison of macroscopic characteristics of forward and reverse reactions.</strong>
          </li>
          <li className="mb-4">
            <strong>Q9: Explain Equilibrium in Physical and Chemical processes.</strong>
          </li>
          <li className="mb-4">
            <strong>Q10: What happens when some liquid is placed in a closed container?</strong>
          </li>
          <li className="mb-4">
            <strong>Q11: What are the main conditions required for chemical equilibrium?</strong>
          </li>
          <li className="mb-4">
            <strong>Q12: Discuss how Le Chatelier&lsquo;s Principle can be used to predict the behavior of a chemical system when its concentration, volume, or temperature is changed.</strong>
          </li>
          <li className="mb-4">
            <strong>Q13: Describe the effects of adding more reactant or product to a system at chemical equilibrium. How does the system respond according to Le Chatelier&lsquo;s Principle?</strong>
          </li>
          <li className="mb-4">
            <strong>Q14: Analyze the impact of temperature changes on the equilibrium of a reversible reaction. How does the direction of the equilibrium shift in response to an increase or decrease in temperature?</strong>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default QuestionsPage;