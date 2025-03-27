// pages/periodicity.tsx
import React from "react";

const PeriodicityPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8">
          {/* Header Section */}
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            4.3 PERIODICITY OF PROPERTIES
          </h1>

          {/* Main Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            {/* First Section Content */}
            <p className="text-lg">
              There is a periodic fluctuation in the electronic configuration of
              the elements as the atomic number increases. Therefore, the
              physical and chemical properties of the elements vary in a
              periodic manner.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-lg">
                Elements with a similar valence shell electronic configuration
                are placed in the same group, one below the other. Chemical
                properties depend on the electronic configuration of the valence
                shell.
              </p>
            </div>

            <p className="text-lg">
              Because all the elements in a given group have similar valence
              shell electronic configurations, they have similar chemical
              properties. Physical properties depend on the size of atoms.
              Because the sizes of atoms change gradually from top to bottom in
              a group.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-lg">
                Therefore, the elements show a gradation of physical properties
                within the same group. In the period of the periodic table, the
                number of electrons in the valence shell increases gradually
                from left to right. Their chemical and physical properties also
                differ in the same way.
              </p>
            </div>

            <p className="text-lg font-medium text-blue-600">
              In this section, you will learn about the variation of physical
              properties of certain elements within a group and across a period.
            </p>

            {/* Shielding Effect Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                4.3.1 Shielding Effect
              </h2>

              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <p className="text-lg mb-4">
                  Figure 4.3 shows electronic configuration of Li, Be and Mg.
                  Which atom has more shells, Be or Mg? Which atom has more
                  electrons between the nucleus and the valence electrons, Be or
                  Mg?
                </p>
              </div>

              <p className="text-lg mb-4">
                Electrons present in the inner shells cut off attractive force
                between the nucleus and the valence electrons.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-lg font-medium">
                  The reduction in force of attraction between nucleus and the
                  valence electrons by the electrons present in the inner
                  sub-shells is called shielding effect.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg">
                  Which atom has greater shielding effect, Be or Mg?
                </p>
                <p className="text-lg">
                  Which atom, Li or Be has greater number of shells? Which atom,
                  Li or Be has greater number of electrons between nucleus and
                  valence electrons?
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500 my-6">
                <p className="text-lg mb-4">
                  As you move from left to right in a period the number of
                  electrons in the inner shells remains constant, therefore,
                  shielding effect remains constant.
                </p>
                <p className="text-lg">
                  As you move from top to bottom in a group the number of
                  electronic shells increase. So the number of electrons in the
                  inner shell also increase. As a result shielding effect
                  increases.
                </p>
              </div>

              <div className="bg-blue-100 p-6 rounded-lg mt-8">
                <p className="text-lg">
                  All the physical and chemical properties of elements depend on
                  the electronic configuration of their atoms. We now consider
                  some properties of atoms that are affected by electronic
                  configuration: atomic size, ionization energy, electron
                  affinity and electronegativity. They usually increase and
                  decrease repeatedly throughout the periodic table. That is,
                  they show consistent changes or trends within a group or a
                  period. These tendencies are correlated with their behaviour.
                </p>
              </div>

              {/* Example Section */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Example 4.4: Identifying the element whose atoms periodic
                  table
                </h3>

                <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                  <p className="text-lg font-medium mb-4">
                    Choose the elements whose atoms you expect to have greater
                    shielding effect.
                  </p>
                  <p className="text-lg">(a) Be or Mg</p>
                  <p className="text-lg">(b) C or Si</p>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-bold mb-4">
                    Problem Solving Strategy:
                  </h4>
                  <p className="text-lg">
                    Look at the periodic table and find the relative position of
                    given elements in the periodic table. Apply the trend of
                    increasing shielding effect in a group.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-bold mb-4">Solution:</h4>
                  <p className="text-lg mb-2">
                    (a) Mg atoms will have greater shielding effect.
                  </p>
                  <p className="text-lg">
                    (b) Si atoms will have greater shielding effect.
                  </p>
                </div>

                {/* Concept Assessment Exercise */}
                <div className="bg-blue-50 p-6 rounded-lg mt-8">
                  <h4 className="text-lg font-bold mb-4">
                    CONCEPT ASSESSMENT EXERCISE 4.5
                  </h4>
                  <p className="text-lg mb-4">
                    Choose the element whose atoms you expect to have smaller
                    shielding effect.
                  </p>
                  <div className="space-y-2">
                    <p className="text-lg">(a) F or Cl</p>
                    <p className="text-lg">(b) Li or Na</p>
                    <p className="text-lg">(c) B or Al</p>
                  </div>
                </div>
              </div>
              {/* Atomic Size Section */}
              <div className="mt-12 border-t-2 border-gray-100 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  4.3.2 Atomic Size
                </h2>

                <div className="space-y-6 text-gray-700">
                  {/* Definition */}
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-lg">
                      The size of an atom depends on its electronic
                      configuration. Atomic size is the average distance between
                      the atomic nucleus and the electronic outer shell.
                    </p>
                  </div>

                  {/* Figure Reference */}
                  <p className="text-lg">
                    Figure 4.4 shows the atomic radii of the main group
                    elements. Figure 4.4 shows the variation of atomic radii
                    within a period and within a group. You can see two general
                    trends in atomic radii.
                  </p>

                  {/* Trend 1 */}
                  <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                    <h3 className="text-lg font-bold mb-4">
                      Trend 1: Decreasing Atomic Radius Across a Period
                    </h3>
                    <div className="space-y-4">
                      <p className="text-lg">
                        The atomic radius decreases in each period as you move
                        across the period. This is because as you move from one
                        element in the sequence to the next, to the right of it:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li className="text-lg">
                          Another electron is added to the same valence shell
                        </li>
                        <li className="text-lg">
                          The positive charge of the core increases by one
                        </li>
                        <li className="text-lg">
                          The attraction of the nucleus to the electron in the
                          valence shell increases
                        </li>
                      </ul>
                      <div className="bg-white p-4 rounded-lg mt-4">
                        <p className="text-lg">
                          <span className="font-medium">Example:</span> Going
                          from lithium to beryllium, the atomic size decreases.
                          You can understand this from the electronic
                          configuration of the valence shell of Li (2s¹) and Be
                          (2s²). Moving from Li to Be, the number of shells does
                          not change, but the atomic number increases from 3 to
                          4. Therefore, the strength of the nucleus on the
                          valence shell electron increases, and the atomic
                          radius decreases.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Trend 2 */}
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <h3 className="text-lg font-bold mb-4">
                      Trend 2: Increasing Atomic Radius Down a Group
                    </h3>
                    <div className="space-y-4">
                      <p className="text-lg">
                        Atomic radius increases in each main group as you move
                        down the element group. This is because the size of an
                        atom is determined by the size of its valence shell.
                      </p>
                      <p className="text-lg">
                        As you move down the group to the next lower element,
                        the atom has an additional shell of electrons. This
                        increases the radius of the atom.
                      </p>
                      <div className="bg-white p-4 rounded-lg mt-4">
                        <p className="text-lg">
                          <span className="font-medium">Example:</span> Going
                          from Li to Na, the atomic radius increases. Consider
                          the electron configuration of Li (1s², 2s¹) and Na
                          (1s², 2s², 2p⁶, 3s¹). A new electron shell is added,
                          increasing the size of the atom.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 border-t-2 border-gray-100 pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Example 4.5: Identifying the element that has greater atomic
                  radius
                </h3>

                {/* Problem Statement */}
                <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                  <p className="text-lg font-medium mb-4">
                    Choose the element whose atom you expect to have larger
                    atomic radius in each of the following pairs.
                  </p>
                  <div className="space-y-2">
                    <p className="text-lg">(a) Mg, Al</p>
                    <p className="text-lg">(b) C, Si</p>
                  </div>
                </div>

                {/* Problem Solving Strategy */}
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-bold mb-4">
                    Problem Solving Strategy:
                  </h4>
                  <p className="text-lg mb-4">
                    Remember that the larger atom in any:
                  </p>
                  <div className="space-y-2 pl-4">
                    <p className="text-lg">
                      (a) Period lies further to the left in the periodic table.
                    </p>
                    <p className="text-lg">
                      (b) Group lies closer to the bottom in the periodic table.
                    </p>
                    <p className="text-lg">
                      (c) Check the periodic table and choose the element.
                    </p>
                  </div>
                </div>

                {/* Solution */}
                <div className="bg-green-50 p-6 rounded-lg mb-8">
                  <h4 className="text-lg font-bold mb-4">Solution:</h4>
                  <div className="space-y-2">
                    <p className="text-lg">(a) The larger atom is Mg</p>
                    <p className="text-lg">(b) The larger atom is Si</p>
                  </div>
                </div>

                {/* Concept Assessment Exercise */}
                <div className="bg-blue-50 p-6 rounded-lg mt-8">
                  <h4 className="text-lg font-bold mb-4">
                    CONCEPT ASSESSMENT EXERCISE 4.6
                  </h4>
                  <p className="text-lg mb-4">
                    Using the periodic table but without looking at the figure
                    4.4, choose the element whose atom you expect to have
                    smaller atomic radius in each of the following pairs.
                  </p>
                  <div className="space-y-2">
                    <p className="text-lg">(a) O or S</p>
                    <p className="text-lg">(b) O or F</p>
                  </div>
                </div>
              </div>

              {/* Ionization Energy Section */}
              <div className="mt-12 border-t-2 border-gray-100 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  4.3.3 Ionization Energy
                </h2>

                {/* Introduction and Definition */}
                <div className="space-y-6">
                  <p className="text-lg">
                    Ionization energy is an important property of atoms that
                    explains cation formation.
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-lg font-medium">
                      &quot;Ionization energy is defined as the minimum amount
                      of energy required to remove the outermost electron from
                      an isolated gaseous atom&quot;.
                    </p>
                  </div>

                  {/* Chemical Equation */}
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <p className="text-lg font-mono">
                      M(g) + ionization energy → M⁺(g) + e⁻
                    </p>
                  </div>

                  {/* Explanation of Concept */}
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <div className="space-y-4">
                      <p className="text-lg">
                        Ionization energy is a measure of the extent to which
                        the nucleus attracts the outermost electron.
                      </p>
                      <ul className="space-y-2">
                        <li className="text-lg">
                          A high value of ionization energy means stronger
                          attraction between the nucleus and the outermost
                          electron.
                        </li>
                        <li className="text-lg">
                          A low ionization energy indicates a weaker force of
                          attraction between the nucleus and the outermost
                          electron.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Figure Reference */}
                  <p className="text-lg">
                    Figure 4.5 shows the ionization energies of the main group
                    elements. Values are given in units of kJ mole⁻¹ or kJ/mole.
                  </p>

                  {/* Trends Section */}
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">
                      Trends in ionization energy values
                    </h3>

                    {/* Trend 1: Down the Group */}
                    <div className="mb-6">
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-lg">
                          The value of the ionization energy decreases from top
                          to bottom in the group. This is because:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                          <li className="text-lg">
                            The shielding effect of the atoms increases down the
                            group
                          </li>
                          <li className="text-lg">
                            Greater shielding effects result in a weaker
                            attraction of the valence electrons to the nucleus
                          </li>
                          <li className="text-lg">
                            So they are easier to remove
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Interactive Question */}
                    <p className="text-lg font-medium mb-4">
                      Which atom has a greater shielding effect, Li or Na?
                    </p>

                    {/* Trend 2: Across the Period */}
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-lg">
                        As you move from left to right in the period:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li className="text-lg">
                          The shielding effect remains unchanged
                        </li>
                        <li className="text-lg">
                          But little by little the nuclear charge increases
                        </li>
                        <li className="text-lg">
                          The stronger attraction between the nucleus and the
                          valence electron increases
                        </li>
                        <li className="text-lg">
                          As a result, the ionization energy increases from left
                          to right in a period
                        </li>
                      </ul>
                    </div>

                    {/* Final Question */}
                    <p className="text-lg font-medium mt-4">
                      Which atom has the higher ionization energy, Li or Be?
                    </p>
                  </div>
                </div>
              </div>

              {/* Electron Affinity Section */}
              <div className="mt-12 border-t-2 border-gray-100 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  4.3.4 Electron Affinity
                </h2>

                {/* Definition and Equation */}
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-lg">
                      Electron affinity explains the anion formation. Electron
                      affinity is defined as the amount of energy released when
                      an electron adds up in the valence shell of an isolated
                      atom to form a uni negative gaseous ion.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <p className="text-lg font-mono">
                      X(g) + e⁻ → X⁻(g) + electron affinity
                    </p>
                  </div>

                  {/* Factors and Trends */}
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <p className="text-lg mb-4">
                      Figure 4.6 shows electron affinities of main group
                      elements. Factors affecting electron affinity are:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li className="text-lg">Nuclear charge</li>
                      <li className="text-lg">Atomic radius</li>
                      <li className="text-lg">Shielding effect</li>
                    </ul>
                  </div>

                  {/* Trends */}
                  <div className="bg-green-50 p-6 rounded-lg space-y-6">
                    <div>
                      <h4 className="text-lg font-bold mb-3">
                        Trend Across Period:
                      </h4>
                      <p className="text-lg">
                        As you move from left to right through a period,
                        electron affinity generally increases. This is due to an
                        increase in nuclear charge and a decrease in atomic
                        radius, which binds the extra electron more tightly to
                        the nucleus. But the shielding effect remains constant
                        in each cycle. Therefore, the alkali metals have the
                        lowest and the halogens the highest electron affinities
                        in each period.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold mb-3">
                        Trend Down Group:
                      </h4>
                      <p className="text-lg">
                        Electron affinity decreases from top to bottom in a
                        group. This is due to an increase in the shielding
                        effect. Due to the increased shielding effect and
                        increase in atomic radius, the added electron binds less
                        tightly to the nucleus. As a result, less energy is
                        released.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-6 rounded-lg">
                    <p className="text-lg italic">
                      There are several exceptions to the general trend of
                      election affinity values. You will learn reasons for it in
                      higher grade.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-lg font-bold mb-3">
                  4.3.5 Electronegativity
                </h4>
                <p className="text-lg">
                  Electronegativity is the ability of an atom to attract
                  electrons toward itself in a chemical bond. Figure 4.7 shows
                  as a scale of electronegativities of the elements devised by
                  Linus Pauling. The American chemist Linus Pauling devised a
                  method for calculating the relative electronegativities of
                  elements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeriodicityPage;
