import React from 'react';

const CharacteristicPropertiesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8">
          {/* Main Header */}
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            4.4 CHARACTERISTIC PROPERTIES
          </h1>

          {/* Introduction Section */}
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-lg">
                Characteristic properties of an element in a given group are based on periodicity 
                and chemical reactivity.
              </p>
            </div>

            {/* Group 1 Properties */}
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Group 1 (Alkali Metals)</h3>
              <div className="space-y-4">
                <p className="text-lg">
                  Elements such as lithium, sodium, potassium:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="text-lg">Are highly reactive metals</li>
                  <li className="text-lg">Have general electron configuration ns¹</li>
                  <li className="text-lg">Reactivity increases down the group</li>
                </ul>
                <div className="bg-white p-4 rounded-lg mt-4">
                  <p className="text-lg">
                    Lithium, being at the top of the group is the least reactive metal among 
                    alkali metals. As you move down the group, the atomic size increases and 
                    the outermost electron is further from the nucleus, leading to be lost easily. 
                    This leads to increased reactivity. So, sodium is more reactive than lithium.
                  </p>
                </div>
                <p className="text-lg font-medium text-blue-600">
                  Which is more reactive: sodium or potassium?
                </p>
              </div>
            </div>

            {/* Group 2 Reference */}
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-lg">
                Similar trend is observed in Group 2 (alkaline earth metals).
              </p>
              <p className="text-lg font-medium text-blue-600 mt-2">
                Which is more reactive: Mg or Ca?
              </p>
            </div>

            {/* Metallic Character Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                4.4.1 Metallic Character
              </h2>

              {/* Definition */}
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-lg">
                  Metallic nature refers to a property of elements in the periodic table that 
                  determines how easily they can lose electrons and form positive ions (cations). 
                  Elements with metallic character have a strong tendency to lose electrons and 
                  easily form cations. The metallic character of an element is affected by its 
                  position in the periodic table.
                </p>
              </div>

              {/* Trends */}
              <div className="space-y-6">
                {/* Down Group Trend */}
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Trend Down Group:</h3>
                  <p className="text-lg">
                    Metallic character increases as you move down a group in the periodic table. 
                    This is primarily due to addition of new electronic shells. The outermost 
                    electrons are farther from the nucleus and experiences weaker attractive 
                    forces, making it easier for them to be lost. This promotes metallic character.
                  </p>
                </div>

                {/* Across Period Trend */}
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Trend Across Period:</h3>
                  <p className="text-lg">
                    Metallic character decreases as you move across a period from left to right 
                    in the periodic table. This is because effective nuclear charge increases 
                    across a period, while the number of shells remains the same. The stronger 
                    attractive forces make it more difficult for valence electrons to be lost.
                  </p>
                </div>
              </div>
            </div>

            {/* Example 4.6 */}
            <div className="mt-12 border-t-2 border-gray-100 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Example 4.6: Identifying the element that has higher metallic character
              </h3>

              {/* Problem Statement */}
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <p className="text-lg font-medium mb-4">
                  Choose the element you expect to have higher metallic character in each of the following pairs.
                </p>
                <div className="space-y-2">
                  <p className="text-lg">(a) Na or K</p>
                  <p className="text-lg">(b) Na or Mg</p>
                </div>
              </div>

              {/* Problem Solving Strategy */}
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="text-lg font-bold mb-4">Problem Solving Strategy</h4>
                <p className="text-lg mb-4">Remember that metallic character:</p>
                <div className="space-y-3">
                  <p className="text-lg">
                    (a) Increases down the group. The element that has higher metallic character 
                    will be closer to the bottom.
                  </p>
                  <p className="text-lg">
                    (b) Decreases across a period. The element that has higher metallic character 
                    is further to the left.
                  </p>
                  <p className="text-lg">
                    (c) Check the periodic table to choose the element.
                  </p>
                </div>
              </div>

              {/* Solution */}
              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h4 className="text-lg font-bold mb-4">Solution:</h4>
                <div className="space-y-2">
                  <p className="text-lg">(a) K</p>
                  <p className="text-lg">(b) Mg</p>
                </div>
              </div>

              {/* Concept Assessment Exercise */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-4">CONCEPT ASSESSMENT EXERCISE 4.8</h4>
                <p className="text-lg mb-4">Which element has lower metallic character?</p>
                <div className="space-y-3">
                  <p className="text-lg">(a) Li or K</p>
                  <p className="text-lg">(b) Mg or Ca</p>
                  <div className="mt-6 pt-4 border-t border-blue-200">
                    <p className="text-lg font-medium">
                      (c) Compare and contrast ionization energy and electron affinity
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* New Sections */}
            {/* Reactivity Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                4.4.2 Reactivity
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-lg">
                  The capability of an element to react with other elements to form new compounds is called it reactivity. Reactivity of elements generally increases as you move down a group. This is due to the increase in atomic size. The outermost electrons are farther from the nucleus and experience weaker attractive forces, making it easier for them to participate in chemical reaction.
                </p>
                <p className="text-lg mt-4">
                  Reactivity tends to very across a period. Elements on the left side of a period (Group 1 and 2) are highly reactive due to their strong tendency to lose electrons and form positive ions. Elements on the right side of a period (Group 16 and 17) are highly reactive as well but tend to gain electrons to form negative ions.
                </p>
              </div>
            </div>

            {/* Density Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                4.4.3 Density
              </h2>
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <p className="text-lg">
                  Density of elements generally increases as you move down a group. This is due to the increasing atomic mass and the larger size of atoms. As the number of protons and neutrons in the nucleus increases, the atomic mass increases. This results in higher density.
                </p>
                <p className="text-lg mt-4">
                  Density can wary across the period. In general, density tends to increase from left to right until it reaches a maximum around the middle of the period, and then it starts to decrease.
                </p>
              </div>
            </div>

            {/* Characteristic Properties of Alkali Metals Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                4.4.4 Characteristic Properties of Alkali Metals
              </h2>
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-lg mb-4">Some characteristic properties of alkali metals are as follows:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="text-lg">Highly reactive metals: Alkali metals are highly reactive metals in the periodic table. They readily lose valence electron to form a +1 cations. This trend increases down the group.</li>
                  <li className="text-lg">Softness and low density: Alkali metals have low densities and are relatively soft, which allows them to be easily cut with a knife. This trend increases down the group the group.</li>
                  <li className="text-lg">They are excellent conductors of electricity and heat.</li>
                  <li className="text-lg">They have low melting points.</li>
                  <li className="text-lg">They are highly reactive and monovalent elements.</li>
                  <li className="text-lg">They react with H₂O to give H,and alkali metal hydroxides.</li>
                </ul>
                <p className="text-lg font-medium text-blue-600 mt-4">
                  Which is more soft Na or K?
                </p>
              </div>
            </div>
          </div>

                      {/* Prediction of Properties Section */}
                      <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                4.4.5 Prediction of properties of other elements in Group 1
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-lg mb-4">
                  In Group 1 lithium, sodium and potassium are a collection of relatively soft metals showing a trend in melting point and reaction with water.
                </p>
                <div className="space-y-3">
                  <p className="text-lg">The metals in group I are called alkali metals.</p>
                  <p className="text-lg">They are very soft.</p>
                  <p className="text-lg">Their melting and boiling points decrease down the group.</p>
                  <p className="text-lg">When alkali metals react with water, they produce a metal hydroxide and hydrogen.</p>
                  <div className="bg-white p-4 rounded-lg my-4">
                    <p className="text-lg text-center italic">
                      metal + water --&gt; metal hydroxide + hydrogen
                    </p>
                  </div>
                  <p className="text-lg">The alkali metals become more reactive down the group.</p>
                </div>
              </div>
            </div>

                      <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Activity 4.5
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-lg mb-4">
                Predict the properties of other elements in Group I, from the data given above.
                </p>
                <p className="text-lg mb-4">
                The element after Potassium is Rubidium and you can predict that its reaction with water will be much more violent. We can also predict that Rubidium will have a lower melting and boiling point than the three elements above it. And the elements below Rubidium will be even more reactive and have very low melting and boiling points. It will also react with water to for metal hydroxide and hydrogen.
                </p>
              </div>
            </div>

            {/* Unknown Element Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                4.4.6 Position of Unknown Element in the Periodic Table
              </h2>
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <p className="text-lg mb-4">
                  You can place an unknown element accurately at appropriate position in the periodic table, and can predict about its properties.
                </p>
                <div className="space-y-4">
                  <p className="text-lg">
                    The electronic configuration of an element strongly influences its chemical behaviour. Elements within the group have similar electronic configuration, and therefore similar properties. By examining the electronic configuration of unknown element and comparing it to the known elements in the periodic table, it&apos;s likely position in the periodic table can be determined.
                  </p>
                  <p className="text-lg">
                    The periodic table allows for the identification of trends and patterns across periods and groups. These trends include variations in atomic size, ionization energy, electron affinity, electronegativity, reactivity, and other properties. By analyzing these trends, it becomes possible to estimate the general properties of unknown element and make guess about its position in the periodic table.
                  </p>
                </div>
              </div>

              {/* Example 4.7 */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">
                  Example 4.7: Identifying position of an unknown element in the periodic table
                </h3>
                <div className="space-y-4">
                  <p className="text-lg">
                    Suppose you have an unknown element having atomic number 19, and you want to determine its position in the periodic table.
                  </p>

                  {/* Problem Solving Strategy */}
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="text-lg font-bold mb-3">Problem Solving Strategy</h4>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li className="text-lg">Write its electronic configuration.</li>
                      <li className="text-lg">Use valence electronic configuration to locate its position i.e., find its group and period.</li>
                    </ol>
                  </div>

                  {/* Solution */}
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="text-lg font-bold mb-3">Solution:</h4>
                    <p className="text-lg mb-2">Electronic configuration: 1s², 2s², 2p, 3s, 3p, 4s&apos;</p>
                    <p className="text-lg">
                      Valence shell electronic configuration is 4s&apos;, which shows it is an alkali metal, because, Group 1 elements have one electron in valence sub-shell s. As n value of valence sub-shell is 4, this unknown element must lie in the 4th period in the periodic table. From its position in the periodic table, you can predict its properties. For example will it possess higher or lower melting point, density, reactivity, etc. than the element above or below it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CharacteristicPropertiesPage;