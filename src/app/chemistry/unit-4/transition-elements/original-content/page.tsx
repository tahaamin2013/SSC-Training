import React from 'react';

const TransitionElementsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8">
          {/* Main Header */}
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            4.5 TRANSITION ELEMENTS
          </h1>

          {/* Introduction Section */}
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-lg">
                Elements located in d-block (Group 3 to 12) in the periodic table are called transition elements. These elements exhibit several characteristic properties, which set them apart from other elements. Some of their properties are as follows.
              </p>
            </div>

            {/* High Density */}
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">1. High Density</h3>
              <p className="text-lg">
                Transition elements generally possess high densities due to their higher atomic masses and closely packed structures. For example, iron(Fe) has a density of 7.87 g/cm³, tunguston(W) has a density of 19.3g/cm².
              </p>
            </div>

            {/* High Melting Points */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">2. High Melting Points</h3>
              <p className="text-lg">
                Transition elements have high melting points. This is because their metallic bonding is stronger, which in tern is due to the presence of partially filled d-sub shells. For example tunguston has a melting point of 3422 °C, platinum(Pt) has a melting point of 1768 °C.
              </p>
            </div>

            {/* Variable Oxidation States */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">3. Variable Oxidation States</h3>
              <p className="text-lg">
                Transition elements exhibit multiple oxidation states. This is because of d-sub shell can also participate in bonding along with s-sub shell. For example, iron(Fe) has oxidation states +2 and +3, copper(Cu) has oxidation states +1 and +2.
              </p>
            </div>

            {/* Coloured Compounds */}
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">4. Coloured Compounds</h3>
              <p className="text-lg">
                Transition elements often exhibit vibrant colours. For example, copper compounds appear blue or green, chromium compounds are often red or green.
              </p>
            </div>

            {/* Catalysts Section */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">5. Catalysts for Industrial Processes</h3>
              <p className="text-lg mb-4">
                Transition metals and their compounds are widely used as catalyst in various industrial processes. For example,
              </p>
              <div className="space-y-3 pl-6">
                <p className="text-lg">
                  (a) Iron is used in the Haber Process for the synthesis of ammonia.
                </p>
                <p className="text-lg">
                  (b) Platinum and palladium are used as catalyst in catalytic converters to reduce harmful emissions in automobiles and industrial units.
                </p>
                <p className="text-lg">
                  (c) Nickel is used as catalyst in the manufacture of margarine.
                </p>
                <p className="text-lg">
                  (d) Platinum is used as catalyst in the contact process for the manufacture of sulphuric acid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransitionElementsPage;