// pages/isotopes.tsx
import { FC } from "react";

const IsotopesPage: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Section 3.5 */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            3.5 ISOTOPES
          </h1>
          <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <p className="text-gray-700">
              Figure 3.1 shows Bohr&apos;s Model for two atoms A and B. Can you
              identify three similarities and two differences in these atoms?
            </p>
            <p className="text-gray-700">You will find,</p>
            <ul className="list-none space-y-2 pl-4">
              <li>(a) Both the atoms have same number of protons.</li>
              <li>(b) Both the atoms have same number of electrons.</li>
              <li>(c) Both have same atomic number.</li>
              <li>(d) Both have different number of neutrons.</li>
              <li>
                (e) Both differ in total number of protons and neutron. This
                means they have different mass numbers.
              </li>
            </ul>

            <p className="text-gray-700">
              Since both the atoms have the same atomic number, they must be the
              atoms of same element and are called isotopes. The word isotope
              was first used by Soddy. It is a Greek word &quot;isos&quot; means same and
              &quot;tope&quot; means place.
            </p>

            <p className="text-gray-700">
              Isotopes are atoms of an element whose nuclei have the same atomic
              number but different mass number. This is because atoms of an
              element can differ in the number of neutrons. Isotopes are
              chemically alike and differ in their physical properties.
            </p>
          </div>
        </section>

        {/* Section 3.5.1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            3.5.1 Isotopes of Hydrogen
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <p className="text-gray-700">
              Hydrogen has three isotopes. Hydrogen 1 (Protium) has no neutron.
              Almost all the hydrogen is Hydrogen-1. Its symbol is ¹₁H. Hydrogen
              - 2 (deuterium) has one neutron and hydrogen-3 (Tritium) has two
              neutrons. Their symbols are ²₁H and ³₁H respectively. Because
              hydrogen -1 also known as protium has only one proton, adding a
              neutron doubles it mass.
            </p>

            <p className="text-gray-700">
              Protium / Hydrogen is a colourless, odourless, and tasteless gas.
              It is insoluble in water and is highly inflammable gas. Water that
              contain hydrogen-2 atoms in place of hydrogen-1 is called heavy
              water.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2">
                      Property
                    </th>
                    <th className="border border-gray-200 px-4 py-2">
                      Ordinary water
                    </th>
                    <th className="border border-gray-200 px-4 py-2">
                      Heavy water
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">
                      Melting Point
                    </td>
                    <td className="border border-gray-200 px-4 py-2">0.00°C</td>
                    <td className="border border-gray-200 px-4 py-2">3.81°C</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">
                      Boiling point
                    </td>
                    <td className="border border-gray-200 px-4 py-2">100°C</td>
                    <td className="border border-gray-200 px-4 py-2">
                      101.2°C
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">
                      Density at 25⁰C
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      0.99701 g/cm³
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      1.1044 g/cm³
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700">
              Isotopes affect molecular mass of a substance, can change physical
              properties but do not change chemical properties.
            </p>

            <p className="text-gray-700">
              Naturally occurring hydrogen contains 99.99% protium, 0.0015%
              Deuterium. Tritium is radioactive and is rare. Tritium is not
              found in naturally occurring hydrogen because its nucleus is
              highly unstable.
            </p>
          </div>
        </section>

        {/* Section 3.5.2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            3.5.2 Isotopes of Carbon
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <p className="text-gray-700">
              Carbon has three isotopes. Carbon-12, carbon-13 and carbon-14.
              Almost all the carbon is carbon-12. Its symbol is ¹²₆C. It has six
              neutrons and six protons. Carbon-13 has symbol ¹³₆C. It has seven
              neutrons and six protons. Carbon-14 has eight neutrons and six
              protons. Different forms of carbon are black or greyish black
              solids except diamond. They are odourless and tasteless. They have
              high melting and boiling points and are insoluble in water.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Activity 3.1</h3>
              <p className="text-gray-700">
                Carbon has three Isotopes ¹²₆C, ¹³₆C, ¹⁴₆C. Natural abundance of
                isotopes of carbon is as follows:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li>¹²₆C = 98.8%</li>
                <li>¹³₆C = 1.1%</li>
                <li>¹⁴₆C = 0.009%</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3.5.3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            3.5.3 Isotopes of Chlorine
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <p className="text-gray-700">
              There are two natural isotopes of chlorine, chlorine-35 and
              chlorine-37. An atom of chlorine-35 has 17 protons and 18
              neutrons. An atom of chlorine-37 has 17 protons and 20 neutrons.
              Chlorine-35 occurs in nature about 75% and chlorine-37 about 25%.
              Chlorine is a greyish yellow gas with sharp pungent irritating
              smell. It is fairly soluble in water.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Activity 3.2</h3>
              <p className="text-gray-700">
                Chlorine has two isotopes. Natural abundance:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li>75.77%</li>
                <li>24.23%</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3.5.4 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            3.5.4 Isotopes of Uranium
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Activity 3.3</h3>
              <p className="text-gray-700">
                Uranium has three isotopes with mass number 234, 235 and 238
                respectively. ²³⁴₉₂U, ²³⁵₉₂U, ²³⁸₉₂U
              </p>
              <p className="text-gray-700 mt-4">
                The ²³⁵₉₂U isotope is used in nuclear reactors and atomic bombs,
                whereas the ²³⁸₉₂U isotope lacks the properties necessary for
                these applications. ²³⁴₉₂U is rare. Natural abundance of Uranium
                isotopes is as follows:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li>²³⁴₉₂U = 0.006%</li>
                <li>²³⁵₉₂U = 0.72%</li>
                <li>²³⁸₉₂U = 99.27%</li>
              </ul>

              <h2 className="text-xl font-semibold mb-4">
                Fill in the blanks?
              </h2>
              <p className="mb-2 text-lg font-medium">
                ²³⁴₉₂U has ____ protons, ____ electrons and ____ neutrons
              </p>
              <p className="mb-2 text-lg font-medium">
                ²³⁵₉₂U has ____ protons, ____ electrons and ____ neutrons
              </p>
              <p className="mb-2 text-lg font-medium">
                ²³⁸₉₂U has ____ protons, ____ electrons and ____ neutrons
              </p>
            </div>

            <p className="text-gray-700 mt-4">
              When uranium-238 decays into thorium-234, it emits alpha particle.
              An alpha particle is doubly positively charged helium nucleus.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg font-mono">
              ²³⁸₉₂U → ²³⁴₉₂Th + ⁴₂He
            </div>

            <p className="text-gray-700">
              The fission of uranium-235 yields neutron and energy. The nuclear
              energy released by the fission of one kilogram of uranium-235 is
              equivalent to chemical energy produced by burning more than 17000
              kg of coal. Chemical properties of an element depend upon the
              number of protons and electrons. Neutrons do not take part in
              ordinary chemical reactions. Therefore, isotopes of an element
              have similar chemical properties.
            </p>
          </div>
        </section>

        {/* Section 3.5.5 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            3.5.5 Determination of Relative Atomic Mass
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <p className="text-gray-700">
              The relative atomic mass of an element can be calculated from the
              relative masses of its isotopes and their relative abundance.
              Natural abundance of isotopes of carbon is as follows:
            </p>

            <div className="bg-gray-50 p-4 rounded-lg font-mono">
              ₆¹²C = 98.8%
              <br />
              ₆¹³C = 1.1%
              <br />
              ₆¹⁴C = 0.009%
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Solution:</h3>
              <p className="text-gray-700">
                The relative atomic mass is a weighed average of all the
                naturally occurring isotopes of an element, taking into
                consideration of their natural abundance. Use general formula:
              </p>
              <div className="bg-white p-4 rounded-lg mt-4 font-mono text-sm">
                Relative atomic mass of C = (RA of C-12 x at.mass of C-12+RA of
                C-13 x at.mass of C-13+RA of C-14 x at.mass of C-14) / 100{" "}
                <br />
                Relative atomic mass of C = (98.8 × 12 + 1.1 × 13 + 0.009 ×
                14)/100
                <br />
                Relative atomic mass of C = (1185.6 + 14.3 + 0.126)/100
                <br />
                Relative atomic mass of C = 12.00026 amu
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            CONCEPT ASSESSMENT EXERCISE 3.1
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              An element has two isotopes A and B. The relative atomic mass of
              element is 35.5 amu. Relative abundance of isotope A is 75.77% and
              its isotopic mass is 35. Find the isotopic mass of B if its
              relative abundance is 24.23%.
            </p>
          </div>
        </section>

        {/* Section 3.5.6 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            3.5.6 Uses of Isotopes
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              Stable and radioactive isotopes have many applications in science
              and medicines. Some of these are as follows:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-500">•</span>
                Radioactive iodine-131 is used as a tracer in diagnosing thyroid
                problem.
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500">•</span>
                Na-24 is used to trace the flow of blood and detect possible
                constrictions or obstructions in the circulatory system.
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500">•</span>
                Iodine-123 is used to image the brain.
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500">•</span>
                Cobalt-60 is commonly used to irradiate cancer cells in the hope
                of killing or shrinking the tumors.
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500">•</span>
                Carbon-14 is used to trace the path of carbon in photosynthesis.
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500">•</span>
                Radioactive isotopes are used to determine the molecular
                structure e.g. sulphur-35 has been used in the structure
                determination of thiosulphate, S₂O₃⁻² ion.
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500">•</span>
                Radioactive isotopes are also used to study the mechanism of
                chemical reactions.
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500">•</span>
                Radioactive isotopes are used to date rocks, soils,
                archaeological objects, and mummies.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3.5.7 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            3.5.7 Carbon Dating
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700">
              Carbon-14 is used to estimate the age of carbon-containing
              substances. Carbon atoms circulate between the oceans, and living
              organism at a rate very much faster than they decay. As a result
              the concentration of C-14 in all living things, keep on
              increasing. After death organisms no longer pick up C-14. By
              comparing the activity of a sample of skull or jaw bones, with the
              activity of living tissues, we can estimate how long it has been
              since the organism died. This process is called dating.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IsotopesPage;
