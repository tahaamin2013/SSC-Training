import React from "react";

const IonEducationPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">
        4.2 GROUP NUMBER AND CHARGE ON AN ION
      </h1>

      <div className="space-y-6 text-gray-800">
        <p className="leading-relaxed">
          The group number of an element in the periodic table can provide
          information about the charge of an ion formed by an element. Valence
          electrons are involved in the formation of ions. The relationship
          between group number and ions formed by elements is based on the
          number of valence electrons in the element.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg">
          <p className="mb-2">
            The group number of an s-block element in the periodic table
            corresponds to its number of valence electrons.
          </p>
          <p>
            Whereas in the case of p-block elements, the number of valence
            electrons is equal to Group number minus 10.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="mb-4">
            Some elements tend to lose electrons. Why? Elements tend to achieve
            a stable electron configuration such as the noble gases. Remember
            that the 2 or 8 electron configuration is the most stable
            configuration. Elements with 1-3 electrons in their valence shell
            tend to lose those electrons and form +1, +2, +3 ions respectively.
            Elements with 5-7 electrons in their valence shell tend to gain 3,
            2, 1 electrons respectively and form negatively charged ions with
            -3, -2, -1 charges respectively. Elements with 4 valence electrons
            can lose 4 electrons to form +4 ions. They can also gain 4 electrons
            and form -4 ions.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-700">
            Group 1 (alkali metals):
          </h2>
          <p className="leading-relaxed">
            Group 1 elements such as lithium (Li), sodium (Na), and potassium
            (K) have one valence electron and belong to s block. S block
            elements lose electrons equal to their group number. They tend to
            lose this electron to form a +1 ion, also known as a mono-valent
            cation. For example: Lithium (Li) loses one valence electron to form
            Li⁺. Sodium (Na) loses one valence electron to form Na⁺. Potassium
            (K) loses one valence electron to form K⁺. These elements after
            losing an electron acquire 8 electron configuration of a noble gas.
          </p>
          <div className="bg-gray-100 p-4 rounded font-mono">
            Na = 1s², 2s², 2p⁶, 3s¹
            <br />
            Na⁺ = 1s², 2s², 2p⁶
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-700">
            Group 2 (alkaline earth metals):
          </h2>
          <p className="leading-relaxed">
            Group 2 elements such as beryllium (Be), magnesium (Mg), and calcium
            (Ca) have two valence electrons and are s block element. They tend
            to lose these two electrons to form +2 ions, also called divalent
            cations. For example: Beryllium (Be) loses two valence electrons to
            form Be²⁺. Magnesium (Mg) loses two valence electrons to form Mg²⁺.
            Calcium (Ca) loses two valence electrons to form Ca²⁺.
          </p>
          <div className="bg-gray-100 p-4 rounded font-mono">
            Mg = 1s², 2s², 2p⁶, 3s²
          </div>
        </section>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">
            How many electrons Mg can lose to achieve stable electron
            configuration?
          </h3>
          <p>
            Magnesium will lose 2 electrons to achieve stable configuration and
            this no. is same as it group number i.e., 2<br />
            Mg²⁺ = 1s², 2s², 2p⁶
          </p>
        </div>

        <section className="space-y-4">
          <p className="leading-relaxed">
            Some elements tend to gain electrons to achieve noble gas
            configuration. For example,
          </p>

          <h2 className="text-2xl font-semibold text-blue-700">
            Group 17 (Halogens):
          </h2>
          <p className="leading-relaxed">
            Group 17 elements such as fluorine (F), chlorine (Cl), and bromine
            (Br) have seven valence electrons. They tend to gain one electron to
            reach a stable octet and form -1 ion, also called a monovalent
            anion. For example: Fluorine (F) gains one electron to form F⁻.
            Chlorine (Cl) gains one electron to form Cl⁻. Bromine (Br) gains one
            electron to form Br⁻.
          </p>
          <div className="bg-gray-100 p-4 rounded font-mono">
            F = 1s², 2s², 2p⁵
            <br />
            F⁻ = 1s², 2s², 2p⁶
            <br />
            Similarly,
            <br />
            Cl = 1s², 2s², 2p⁶, 3s², 3p⁵
            <br />
            Cl⁻ = 1s², 2s², 2p⁶, 3s², 3p⁶
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-700">
            Group 16 (chalcogens):
          </h2>
          <p className="leading-relaxed">
            Group 16 elements such as oxygen (O), sulfur (S), and selenium (Se)
            have six valence electrons. They tend to gain two electrons to reach
            a stable octet and form a -2 ion, also called a divalent anion. For
            example: Oxygen (O) gains two electrons to form O²⁻. Sulfur (S)
            gains two electrons to form S²⁻.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-700">
            Group 18 (precious gases):
          </h2>
          <p className="leading-relaxed">
            Group 18 elements such as helium (He), neon (Ne), and argon (Ar)
            have full valence electron shells (except helium, which has only two
            valence electrons). They are chemically stable and do not form ions
            under normal conditions. Noble gases are known for their low
            reactivity due to their stable electronic configuration.
          </p>
        </section>

        {/* New Example Section */}
        <div className="mt-12 border-t-2 border-blue-100 pt-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            Example 4.3: Obtaining the position of element in the periodic table
            from the electronic configuration
          </h2>

          <div className="bg-yellow-50 p-6 rounded-lg mb-6">
            <p className="font-semibold mb-4">
              Find out the position of the following elements in the periodic
              table from the electronic configuration:
            </p>
            <p>Nitrogen (atomic number: 7)</p>
            <p>Oxygen (atomic number: 8)</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="font-semibold mb-2">Problem Solving Strategy:</h3>
            <p>
              Write electronic configuration of the element. Identify the
              valence shell configuration, co-efficient of s or p sub-shell
              represents period number and total number of electrons in valence
              shell is equal to the group number.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Solution:</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">
                    a) Electronic configuration of N = 1s², 2s², 2p³
                  </p>
                  <ul className="ml-6 space-y-1 mt-2">
                    <li>Valence shell has configuration = 2s², 2p³</li>
                    <li>Period number = 2</li>
                    <li>Number of valence electrons = 2+3 = 5</li>
                    <li>N belongs to p-block</li>
                    <li>So, Group number = 5 + 10 = 15</li>
                    <li className="font-medium">
                      Nitrogen is present in the 2nd period of Group 15
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <p className="font-medium">
                    b) Electronic configuration of oxygen = 1s², 2s², 2p⁴
                  </p>
                  <ul className="ml-6 space-y-1 mt-2">
                    <li>Valence shell has configuration = 2s², 2p⁴</li>
                    <li>Period number = 2</li>
                    <li>Number of valence electrons = 2+4 = 6</li>
                    <li>O belongs to p-block</li>
                    <li>So, Group number = 6+10 = 16</li>
                    <li className="font-medium">
                      Oxygen is present in the 2nd period of Group 16
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IonEducationPage;
