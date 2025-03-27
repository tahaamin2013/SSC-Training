// pages/isotopes.tsx
import { FC } from "react";

const IsotopesPage: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Section 3.6 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            3.6 CATIONS AND ANIONS
          </h2>

          {/* Cations subsection */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Cations:
            </h3>
            <p className="text-gray-700 mb-6">
              Cations are positively charged ions that form when an atom loses
              one or more electrons. Cations are usually formed from metal atoms
              that tend to lose electrons to achieve a stable electron
              configuration similar to a noble gas. When an atom loses one or
              more electrons, it forms a cation. The resulting cation has the
              electronic configuration of a noble gas. Neutral atoms have equal
              number of protons and electrons. When an atom loses one or more
              electrons, the number of protons becomes greater than electrons,
              as a result atom acquires positive charge.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">
                Example 3.1: Describing the formation of cations
              </h4>
              <p className="text-gray-700 mb-4">
                Describe the formation of Na⁺ and Mg⁺² cations.
              </p>

              <div className="bg-white p-4 rounded-lg mb-4">
                <h5 className="font-semibold mb-2">
                  Problem Solving Strategy:
                </h5>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>
                    Sodium belongs to Group IA on the periodic table. It has
                    only one electron in the valence shell. Sodium atom loses
                    its valence electron and is left with an octet.
                  </li>
                  <li>
                    Magnesium belongs to Group IIA in the periodic table. It has
                    two valence electrons. Magnesium atom loses these electrons
                    to achieve noble gas configuration.
                  </li>
                </ol>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Solution:</h5>
                <p className="mb-2">(a) Formation of Na⁺ ion</p>
                <p className="font-mono mb-4">
                  Na 1s² 2s² 2p⁶ 3s¹ (-e) → Na⁺ 1s² 2s² 2p⁶
                </p>
                <p className="mb-2">(b) Formation of Mg ion</p>
                <p className="font-mono">
                  Mg 1s² 2s² 2p⁶ 3s² (-2e) → Mg⁺² 1s² 2s² 2p⁶
                </p>
              </div>
            </div>
          </div>

          {/* CONCEPT ASSESSMENT EXERCISE 3.2 */}
          <div className="bg-blue-50 rounded-lg shadow-md p-6 mb-6">
            <h4 className="text-xl font-semibold mb-4">
              CONCEPT ASSESSMENT EXERCISE 3.2
            </h4>
            <p className="text-gray-700">
              Describe the formation of cations for the following metal atoms:
              <br />
              (a) Li (atomic no 3)
              <br />
              (b) Al (atomic no.12)
            </p>
          </div>

          {/* Anions subsection */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Anions
            </h3>
            <p className="text-gray-700 mb-6">
              Anions are negatively charged ions that form when an atom gains
              one or more electrons. This process usually occurs when an atom
              has a relatively high electron affinity, meaning that it can
              easily attract and capture more electrons to achieve a stable
              electron configuration similar to a noble gas. When an atom gains
              one or more electrons, the number of electrons becomes greater
              than protons, so it acquires negative charge.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">
                Example 3.1: Describing the formation of anions
              </h4>
              <p className="text-gray-700 mb-4">
                Describe the formation of anions for the following non-metal
                atoms:
                <br />
                (a) Oxygen (atomic no.8)
                <br />
                (b) Fluorine (atomic no. 9)
              </p>

              <div className="bg-white p-4 rounded-lg mb-4">
                <h5 className="font-semibold mb-2">
                  Problem Solving Strategy:
                </h5>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>Write electronic configuration or dot structure.</li>
                  <li>
                    Find the number of electrons needed to acquire eight
                    electron configuration.
                  </li>
                  <li>Represent addition of electrons.</li>
                </ol>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Solution:</h5>
                <p className="mb-2">(a) Formation of anion by oxygen atom:</p>
                <p className="text-gray-700 mb-4">
                  Oxygen belongs to Group VIA on the periodic table. So it has
                  six electrons in its valence shell. It needs two electrons to
                  achieve noble gas configuration.
                </p>
                <p className="font-mono mb-4">
                  O 1s² 2s² 2p⁴ +2e⁻ → O⁻² 1s² &lbrace; 2s² 2p⁶ &rbrace; octet
                </p>

                <p className="mb-2">(b) Formation of anion by fluorine atom:</p>
                <p className="text-gray-700 mb-4">
                  Fluorine belongs to Group VIIA on the periodic table. So it
                  has seven electrons in the valence shell. A fluorine atom
                  therefore, requires only one electron to complete octet.
                </p>
                <p className="font-mono">
                  F 1s² 2s² 2p⁵ + e⁻ → F⁻ 1s² &rbrace; 2s² 2p⁶&rbrace; octet
                </p>
              </div>
            </div>
          </div>

          {/* CONCEPT ASSESSMENT EXERCISE 3.3 */}
          <div className="bg-blue-50 rounded-lg shadow-md p-6">
            <h4 className="text-xl font-semibold mb-4">
              CONCEPT ASSESSMENT EXERCISE 3.3
            </h4>
            <p className="text-gray-700">
              Describe the formation of anions by the following non-metals:
              <br />
              (a) Sulphur (atomic No. 16)
              <br />
              (b) Chlorine(atomic No. 17)
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default IsotopesPage;
