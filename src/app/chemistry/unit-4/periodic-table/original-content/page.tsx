import React from "react";

const ChemistryContent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          {/* Title Section */}
          <h1 className="text-3xl font-bold text-center text-zinc-900 mb-8">
            INTRODUCTION
          </h1>

          {/* Main Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-zinc-700 leading-relaxed mb-6">
              Welcome to the exciting world of chemistry, where the elements
              come to life thanks to th remarkable periodic table. From its
              humble beginnings, where only 23 elements were known unt the end
              of the 18th century, to its development of 118 elements today. It
              is very difficult am impossible to remember information about the
              reactions, properties, and atomic masses elements. So we obviously
              need a way to organize our information about them. The periodic
              tab is one of the most important tools in chemistry. It is very
              useful for understanding and predictin the properties of elements.
              For example, if you know the physical and chemical properties of
              or element in a group, you can predict the physical and chemical
              properties of any other element the same group. The periodic table
              allows you to relate the reactivity tendencies of elements their
              atomic structure. You can also predict which elements can form
              ionic or covalent bonds.
            </p>

            {/* Periodic Table Section */}
            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">
              4.1 PERIODIC TABLE
            </h2>
            <p className="text-zinc-700 leading-relaxed mb-6">
              One of the most important activities is the search for order. A
              large number of observations objects can be arranged into groups
              according to common features they share, it becomes easier to
              describe them. After the discovery of atomic number by Moseley in
              1913, it was noticed the atomic number could serve as a base for
              systematic arrangement of elements. Thus elements a arranged in
              the order of increasing atomic number. A table showing systematic
              arrangement of elements is called periodic table. It is based on
              the Periodic law that states if the elements are arranged in the
              order of their increasing atomic numbers, their properties are
              repeated in a periodic manner.
            </p>

            {/* Periods and Groups Section */}
            <h3 className="text-xl font-bold text-zinc-900 mt-8 mb-4">
              4.1.1 Periods and Groups of Elements
            </h3>
            <p className="text-zinc-700 leading-relaxed mb-6">
              The most commonly used form of the periodic table is shown in
              figure 4.1. Note that the elements are listed in order of
              increasing atomic numbers, from left to right and from top to
              bottom. Hydrogen (H) is in the top left corner. Helium (He),
              atomic number 2, is at the top right corner. Lithium (Li), atomic
              number 3, is at the left end of the second row.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              The horizontal rows of the periodic table are called periods.
              There are varying number of elements in periods. How many periods
              you find in the periodic table? There are seven periods. The
              number of elements per period range from 2 in period 1 to 32 in
              period 6. First three periods are called short periods and the
              remaining periods are called long periods. The properties of
              elements within a period change gradually as you move from left to
              right in it. But when you move from one period to the next, the
              pattern of properties within a period repeats. This is in
              accordance to the periodic law.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              International Union of Pure and Applied Chemistry (IUPAC) has
              recently renamed newly discovered elements and placed them on the
              periodic table.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              Elements that have similar properties lie in the same column in
              the periodic table. Each vertical column of elements in the
              periodic table is called a group or family.
            </p>

            <p className="text-zinc-700 leading-relaxed">
              Two numbering systems are often used to designate groups. You
              should know both. In the traditional system and the old IUPAC, the
              letters A and B are used. The first two groups are IA and IIA,
              while the last six groups are IIIA to VIIIA and the middle groups
              are in group B. The International Union of Pure and Applied
              Chemistry (IUPAC) decided that the groups would be 1-18 from left
              to right.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              The elements in the same group have same number of valence
              electrons. Group number indicates the number of valence electrons
              in an element. For example, Group1 and Group 2 elements have 1 and
              2 valence electrons respectively. In Groups 13 elements have 3,
              Group 14 have 4, Group15 have 5 valence electrons and so on. It is
              important to note that in Groups 13 to 18 (p block elements), the
              number of valence electrons is equal to group number minus 10.
            </p>

            <p className="text-zinc-700 leading-relaxed mb-6">
              Group A elements are called normal or representative elements.
              They are also called main group elements. Group B elements are
              called transition elements.
            </p>
          </div>
          {/* Group Names Section */}
          <div className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">
              Names of Some Groups in the Periodic Table
            </h2>
            <p className="text-zinc-700 leading-relaxed mb-6">
              Some groups of elements in the periodic table have been given
              group names. For example metallic elements in Group 1 are called
              alkali metals. Group 2 elements are called alkaline earth metals.
              The elements in Group 17 or VIIA are called halogens. The Group 18
              or VIIIA elements are called noble gases because they do not
              readily undergo chemical reactions.
            </p>
            <p className="text-zinc-700 leading-relaxed mb-6">
              Recall that all elements have a unique identification number known
              as the atomic number or proton number. The atomic number of an
              element represents the number of electrons or protons present in
              the atom of the element. Aufbau&apos;s Principle helps in determining
              the order in which the electron orbitals get filled.
            </p>
            {/* Electronic Configuration Section */}
            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-6">
              Electronic Configuration
            </h2>
            <p className="text-zinc-700 leading-relaxed mb-6">
              According to Aufbau&apos;s principle, the order in which the orbitals
              fill up is as follows:
            </p>
            <div className="bg-zinc-50 p-4 rounded-lg mb-6">
              <p className="text-zinc-800 font-mono">
                1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, 7s,
                5f, 6d, 7p and so on.
              </p>
            </div>
            <p className="text-zinc-700 leading-relaxed mb-6">
              Each orbital has a fixed capacity for the maximum number of
              electrons accommodated, s-orbitals have the capacity of 2
              electrons, while p orbitals have the capacity for 6 electrons, d
              orbitals have the capacity for 10 electrons and f orbitals have
              the capacity for 14 electrons.
            </p>
            <p className="text-zinc-700 leading-relaxed mb-6">
              Using these concepts, we can determine the electronic
              configuration of the given element.
            </p>
            {/* Rules Section */}
            <div className="space-y-4 mb-6">
              <p className="text-zinc-700 leading-relaxed">
                <span className="font-semibold">Block of an element:</span> When
                you have filled all the electrons, the orbital in which the last
                electron is in, represents the block in which the element is
                placed.
              </p>
              <p className="text-zinc-700 leading-relaxed">
                <span className="font-semibold">Period of an element:</span>{" "}
                Now, to determine the period in which the element is placed, you
                need to look at the principal quantum number(n) of the valence
                electron. This number repersents period number of element
              </p>
              <p className="text-zinc-700 leading-relaxed">
                <span className="font-semibold">Group of an element:</span> To
                determine the group, we need to understand some rules:
              </p>
            </div>
            <div className="ml-6 space-y-3 mb-6">
              <p className="text-zinc-700 leading-relaxed">
                (a) If the element is in s block, then the group number is equal
                to the number of valence electrons.
              </p>
              <p className="text-zinc-700 leading-relaxed">
                (b) If the element is in the p block, then the number of the
                group can be determined by the formula: (number of valence
                electrons + 10).
              </p>
            </div>
            {/* Example Section */}
            <div className="bg-zinc-50 p-6 rounded-lg mb-6">
              <p className="text-zinc-700 leading-relaxed">
                For example, the atomic number of sodium is 11. Hence its
                electronic configuration is: 1s, 2s, 2p, 3s. Since the valence
                electron is in the 3s subshell, sodium belongs to belongs to the
                s block. The principal quantum number of the valence electron of
                Na is 3. Hence, it belongs to the 3rd period. Since Na belongs
                to the s block, its group number is equal to a number of
                electrons in valence subshells. This is equal to 1. Hence,
                sodium belongs to the Group 1.
              </p>
            </div>
            {/* Note Section */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-zinc-700 leading-relaxed">
                <span className="font-semibold">Note:</span> we can start
                filling the orbitals in the order mentioned by the Aufbau
                principle. 1s, 2s, 2p, 3s, 3p, 4s
              </p>
            </div>

            {/* Example 4.1 Section */}
            <div className="mt-12 border-t pt-8">
              <div className="bg-gradient-to-r from-zinc-50 to-zinc-100 p-6 rounded-xl">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                  Example 4.1: Identifying the group and period of an element
                </h2>

                <p className="text-zinc-700 mb-4">
                  Identify the group, period, and block of following elements on
                  the basis of electronic configuration.
                </p>

                <div className="ml-6 mb-6">
                  <p className="text-zinc-700">1. Al (atomic number=13)</p>
                  <p className="text-zinc-700">2. K (atomic number = 19)</p>
                </div>

                {/* Problem Solving Strategy */}
                <div className="bg-white p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-zinc-900 mb-2">
                    Problem Solving Strategy:
                  </h3>
                  <p className="text-zinc-700">
                    Write electronic configuration of element. Identify its
                    valence shell. Remember that n value of the valence shell
                    indicates period. Total number of electrons in the valence
                    shells represents group number if element belongs to s
                    block. If it belongs to p block, then group number is equal
                    to the total number of valence + 10.
                  </p>
                </div>

                {/* Solution */}
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold text-zinc-900 mb-4">
                    Solution:
                  </h3>

                  {/* Solution for Al */}
                  <div className="mb-6">
                    <p className="text-zinc-700 mb-2">
                      1. Electronic configuration of Al (atomic no. 13): 1s²,
                      2s², 2p⁶, 3s², 3p¹
                    </p>
                    <div className="ml-4 space-y-2">
                      <p className="text-zinc-700">
                        • Valence sub-shells is 3p, so Al belongs to p block
                      </p>
                      <p className="text-zinc-700">
                        • As n = 3, Al is present in the 3rd period
                      </p>
                      <p className="text-zinc-700">
                        • Total number of electrons in the valence shell = 2+1=3
                      </p>
                      <p className="text-zinc-700">
                        • Group number of Al = total number of electrons in the
                        valence sub-shells + 10 = 3+10 = 13
                      </p>
                      <p className="text-zinc-700 font-semibold">
                        Hence Al belongs to Group 13
                      </p>
                    </div>
                  </div>

                  {/* Solution for K */}
                  <div>
                    <p className="text-zinc-700 mb-2">
                      2. Electronic configuration of K (atomic no. 19) = 1s²,
                      2s², 2p⁶, 3s², 3p⁶, 4s¹
                    </p>
                    <div className="ml-4 space-y-2">
                      <p className="text-zinc-700">
                        • Valence shells is 4s, hence K belongs to s block
                      </p>
                      <p className="text-zinc-700">
                        • As n=4, K is present in the 4th period
                      </p>
                      <p className="text-zinc-700">
                        • Total number of electrons in the valence shell = 1
                      </p>
                      <p className="text-zinc-700">
                        • Group number of K = total number of electrons in the
                        valence sub-shells = 1
                      </p>
                      <p className="text-zinc-700 font-semibold">
                        Hence K belongs to Group 1
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Example 4.2 Section */}
              <div className="mt-12 border-t pt-8">
                <div className="bg-gradient-to-r from-zinc-50 to-zinc-100 p-6 rounded-xl">
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                    Example 4.2: Classifying or dividing elements into groups
                    and periods
                  </h2>

                  <p className="text-zinc-700 mb-4">
                    Electronic configuration of atoms of some elements are given
                    below. Classify them in groups and periods.
                  </p>

                  {/* Electronic Configurations */}
                  <div className="bg-white p-4 rounded-lg mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="text-zinc-700">A. 1s² 2s²</p>
                        <p className="text-zinc-700">B. 1s² 2s² 2p³</p>
                        <p className="text-zinc-700">C. 1s² 2s² 2p⁵</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-zinc-700">D. 1s² 2s² 2p⁶ 3s²</p>
                        <p className="text-zinc-700">E. 1s² 2s² 2p⁶ 3s² 3p⁵</p>
                        <p className="text-zinc-700">F. 1s² 2s² 2p⁶ 3s² 3p¹</p>
                      </div>
                    </div>
                  </div>

                  {/* Problem Solving Strategy */}
                  <div className="bg-white p-4 rounded-lg mb-6">
                    <h3 className="font-semibold text-zinc-900 mb-3">
                      Problem Solving Strategy:
                    </h3>
                    <p className="text-zinc-700 mb-2">Remember that:</p>
                    <div className="ml-4 space-y-2">
                      <p className="text-zinc-700">
                        1. The elements whose atoms have similar valence shell
                        electronic configuration belong to the same group.
                      </p>
                      <p className="text-zinc-700">
                        2. The n value of the valence shell indicates period.
                      </p>
                      <p className="text-zinc-700">
                        3. The elements whose atoms have same value of n for the
                        valence shell lie in the same period.
                      </p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold text-zinc-900 mb-4">
                      Solution:
                    </h3>

                    {/* Solution Table */}
                    <div className="overflow-x-auto">
                      <table className="min-w-full border-collapse">
                        <thead>
                          <tr className="bg-zinc-50">
                            <th className="border p-2 text-left">Group</th>
                            <th className="border p-2 text-center">II A</th>
                            <th className="border p-2 text-center">V A</th>
                            <th className="border p-2 text-center">VII A</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border p-2 font-semibold">
                              Period 2
                            </td>
                            <td className="border p-2">A: 2s²</td>
                            <td className="border p-2">B: 2s²2p³</td>
                            <td className="border p-2">C: 2s²2p⁵</td>
                          </tr>
                          <tr>
                            <td className="border p-2 font-semibold">
                              Period 3
                            </td>
                            <td className="border p-2">D: 3s²</td>
                            <td className="border p-2">F: 3s²3p¹</td>
                            <td className="border p-2">E: 3s²3p⁵</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* s and p Blocks Section */}
              <div className="mt-12 border-t pt-8">
                <h2 className="text-2xl font-bold text-zinc-900 mb-6">
                  4.1.2 s and p Blocks in the Periodic Table
                </h2>

                <div className="space-y-6">
                  <p className="text-zinc-700 leading-relaxed">
                    Group 1 and Group 2 elements contain their valence electrons
                    in the s sub-shell. Therefore, these elements are called
                    s-block elements. Elements in groups 13 to 18 (except He)
                    are known as p-block elements because their valence
                    electrons are located in the p sub-shell. Lanthanides and
                    actinides are known as f-block elements since their valence
                    electrons lie in f sub-shell. Figure 4.2 shows the blocks of
                    the periodic table.
                  </p>

                  {/* Examples Box */}
                  <div className="bg-zinc-50 p-6 rounded-lg">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <span className="font-semibold">Example 1:</span>
                        <p className="text-zinc-700">
                          Li 1s², 2s¹, as valence electron is in s sub-shell, Li
                          belongs to s-block.
                        </p>
                      </div>

                      <div className="flex items-start space-x-2">
                        <span className="font-semibold">Example 2:</span>
                        <p className="text-zinc-700">
                          C-1s², 2s², 2p², as valence electron is in sub-shell
                          p, C belongs to p-block.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChemistryContent;
