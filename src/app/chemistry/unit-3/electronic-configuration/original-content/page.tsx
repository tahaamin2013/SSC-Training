// pages/isotopes.tsx
import { FC } from "react";

const IsotopesPage: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Section 3.7 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            3.7 ELECTRONIC CONFIGURATION
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-6">
              To understand electronic configuration, you should know about
              shells and sub-shells.
            </p>

            {/* Shells subsection */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Shells
              </h3>
              <p className="text-gray-700 mb-4">
                According to Bohr&apos;s atomic theory, the electron in an atom
                revolves around the nucleus in one of the circular paths called
                shells or orbits. Each shell has a fixed energy. So each shell
                is also called energy level. Each shell is described by an n
                value. n can have values 1,2,3.....
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>n = 1 it is K shell</li>
                <li>n = 2 it is L shell</li>
                <li>n = 3 it is M shell etc.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                As the value of n increases the distance of electron from the
                nucleus and energy of the shell increases.
              </p>
            </div>

            {/* Sub-Shells subsection */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Sub-Shells
              </h3>
              <p className="text-gray-700 mb-4">
                A shell or energy level is sub divided into sub-shells or
                sub-energy levels. n value of a shell is placed before the
                symbol for a sub-shell.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>
                  n = 1 for K shell. It has only one sub-shell which is
                  represented by 1s.
                </li>
                <li>
                  For L shell n = 2. L shell has two sub-shells, these are
                  designated as 2s and 2p.
                </li>
                <li>
                  For M shell n = 3. M shell has 3 sub-shells called 3s, 3p and
                  3d.
                </li>
                <li>N shell has 4s, 4p, 4d and 4f sub-shells.</li>
              </ul>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>s sub-shell can accommodate maximum 2 electrons.</li>
                <li>p sub-shell can accommodate maximum 6 electrons.</li>
                <li>d sub-shell can accommodate maximum 10 electrons.</li>
                <li>f sub-shell can accommodate maximum 14 electrons.</li>
              </ul>
              <p className="text-gray-700 mb-4">
                The increasing order of energy of the sub-shells belonging to
                different shells is given below:
              </p>
              <p className="font-mono mb-4">
                1s &lt; 2s &lt; 2p &lt; 3s &lt; 3p &lt; 4s &lt; 3d .....
              </p>
              <p className="text-gray-700">
                The arrangement of electrons in sub-shells is called as the
                electronic configuration. We can fill the electrons present in
                various elements by using Auf Bau Principle. According to this
                principle, electrons fill the lowest energy sub-shell that is
                available first. This means electron will fill first 1s, then
                2s, then 2p and so on.
              </p>
            </div>
          </div>
        </section>

        {/* Symbols for atoms and ions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Symbols for atoms and ions
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              The symbol for an atom represent the element. It consists of one
              or two-letters, the mass number as a left superscript, the atomic
              number as left subscript, and the charge as a right superscript.
              For example:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg text-center font-mono text-xl">
              ²⁴₁₂Mg²⁺
            </div>
            <p className="text-gray-700 mt-4">
              This number is often omitted. This diagram shows symbol for
              magnesium &quot;Mg&quot; which stands for magnesium. The number to the upper
              left of the symbol is the mass number, which is 24. The number to
              the upper right of the symbol is the charge which is positive 2.
              The number to the lower left of the symbol is the atomic number
              which is 12.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IsotopesPage;
