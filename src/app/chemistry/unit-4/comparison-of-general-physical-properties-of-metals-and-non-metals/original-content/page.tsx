import React from 'react';

const ComparisonPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <main className="max-w-4xl mx-auto">
        <article className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            4.9 COMPARISON OF GENERAL PHYSICAL PROPERTIES OF METALS AND NON-METALS:
          </h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-bold mb-2">Thermal Conductivity:</h2>
              <p className="text-gray-700">
                Metals generally have high thermal conductivity, which means they can conduct heat easily. On the other hand, non-metals tend to have poor conductivity, making them less efficient at conducting heat.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">Electrical Conductivity:</h2>
              <p className="text-gray-700">
                Metals are good conductor of electricity, because they have free electrons that can move freely in the metal lattice. Non-metals, with few exception such as graphite, are poor conductor of electricity because they lack free electrons.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">Adaptability:</h2>
              <p className="text-gray-700">
                The metals are malleable and ductile. So, they can be hammered, drawn into wires or transformed into thin sheets without breaking. This property is due to metallic bonds which allow atoms exchange easily under pressure. Non-metals are neither malleable nor ductile rather they are brittle.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">Melting Points and Boiling Points</h2>
              <p className="text-gray-700">
                Metals generally have high melting points and boiling points due to strong metallic bonds that require a lot of energy to break. On the other hand non-metals often have lower melting points and boiling points because their atoms and molecules are held by weaker bonds such as covalent bonds, van der Waals bends, or hydrogen bonds that require less energy to break.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-bold mb-2">CONCEPT ASSESSMENT EXERCISE 4.10</h2>
              <p className="text-gray-700">
                Compare the general properties of metals and non-metals
              </p>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
};

export default ComparisonPage;