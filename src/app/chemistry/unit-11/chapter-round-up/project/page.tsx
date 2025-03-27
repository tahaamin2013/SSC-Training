import React from 'react';

const GlobalWarmingReport = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      
      <div className="space-y-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="mb-4">Global warming has become one of the most serious environmental issues in the world in recent times. Prepare a report on this issue in terms of:</p>
          <ol className="list-lower-alpha pl-6 space-y-2">
            <li>The gases contributing to the problem and their sources.</li>
            <li>Which of these gases are causing the most concern?</li>
            <li>Suggest some ways to reduce this problem</li>
          </ol>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <ol className="list-decimal pl-6 space-y-4">
            <li className="font-semibold">Discuss the major sources of air pollutants and their adverse effects on the environment</li>
            <li className="font-semibold">Explain how greenhouse gases like carbon dioxide and methane contribute to global warming and climate change.</li>
            <li className="font-semibold">Describe the strategies that can be employed to reduce the impact of major environmental issues such as climate change and acid rain.</li>
            <li className="font-semibold">Explain the role of oxides of nitrogen in the formation of acid rain and how catalytic converters in vehicles help mitigate this issue</li>
            <li className="font-semibold">Analyze the importance of photosynthesis in the carbon cycle and how it helps reduce the amount of carbon dioxide in the atmosphere and also through some light on the role of CO and other greenhouse gases on global warming.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default GlobalWarmingReport; 