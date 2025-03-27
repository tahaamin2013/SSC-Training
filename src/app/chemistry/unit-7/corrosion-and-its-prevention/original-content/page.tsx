import React from 'react';

const Page = () => {
  return (
    <div className="p-8 bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">7.5 CORROSION AND ITS PREVENTION</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7.5.1 Corrosion</h2>
        <p className="mb-4">
          Corrosion is a natural electrochemical process that occurs when a metal reacts with its environment. In this reaction, a metal reacts with oxygen and moisture in the atmosphere. Corrosion converts refined metals to the more stable metal oxides. It can cause significant damage to structures, vehicles, and equipment.
        </p>
        <p className="mb-4">
          The most familiar example of corrosion is the formation of rust on iron. Oxygen and water are necessary for iron to rust. Corrosion is an oxidation-reduction reaction. A region of the metal surface that has relatively less moisture acts as an anode. Will Fe oxidize in this region? Fe (s) → Fe<sup>2+</sup> (aq) + 2e<sup>-</sup>.
        </p>
        <p className="mb-4">
          Another region on the surface of the metal that has relatively more moisture acts as a cathode. The electrons released in the oxidation process reduce atmospheric oxygen to hydroxyl ions.
        </p>
        <p className="mb-4">
          O<sub>2</sub> + 2H<sub>2</sub>O + 4e<sup>-</sup> → 4OH<sup>-</sup>.
        </p>
        <p className="mb-4">
          The Fe<sup>2+</sup> ions formed at the anodic regions flow to the cathodic regions through the moisture on the surface. Here, Fe<sup>2+</sup> ions further react with oxygen to form rust, Fe<sub>2</sub>O<sub>3</sub>·xH<sub>2</sub>O.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">7.5.2 Prevention of Corrosion</h2>
        <p className="mb-4">
          Corrosion is a widespread issue that affects industries, infrastructures, and everyday objects. Therefore, understanding corrosion and implementing preventive measures are crucial. Prevention of corrosion is an important way of conserving our natural resources. The following methods have been devised to protect metals from corrosion:
        </p>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">1. Coating with Paint</h3>
          <p className="mb-4">
            Corrosion can be prevented by applying a protective coating such as paint or epoxy, creating a barrier between the metal surface and its environment. Paint is cheap and can be applied easily. Paint is used to protect many everyday steel objects such as cars, trucks, trains, bikes, bridges, etc. Paint also provides visual appeal.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">2. Alloying</h3>
          <p className="mb-4">
            The tendency of iron to oxidize can be greatly reduced by alloying it with other metals. For example, adding chromium to iron forms stainless steel, which is highly resistant to corrosion.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">3. Coating with a Thin Layer of Another Metal</h3>
          <p className="mb-4">
            Metals that readily corrode can be protected by coating with a thin layer of another metal that resists corrosion. This can be done by:
            <p>(a) Tinning</p>
          <p>(b) Galvanizing (Coating with Zinc)</p>
          <p>(c) Electroplating </p>
          </p>
        
          <ul className="list-disc pl-8 mb-4">
            <li className="mb-2">
              <strong>(a) Tinning:</strong> In the process of tin plating, a clean iron sheet is dipped in a bath of molten tin. It is then passed through a hot pair of rollers. Tin protects iron effectively since it is very stable.
            </li>
            <li className="mb-2">
              <strong>(b) Galvanizing (Coating with Zinc):</strong> The process of galvanizing consists of dipping a clean iron sheet in a hot zinc chloride bath and heating. After this, the sheet is rolled into a zinc bath and cooled.
            </li>
            <li className="mb-2">
              <strong>(c) Electroplating:</strong> In electroplating, an electrolytic process is used to deposit one metal on another metal.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">4. Cathodic Protection</h3>
          <p className="mb-4">
            Cathodic protection, also called sacrificial protection, is the process in which the metal to be protected from corrosion is made the cathode and connected to an active metal such as magnesium or aluminum. These metals are more active than iron, so they act as the anode. The more active metal oxidizes itself and saves iron from corrosion. Cathodic protection is employed to prevent iron and steel structures such as pipes, tanks, oil rigs, etc., in moist underground and marine environments. Large bars of magnesium are used to help protect ships against rusting.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Page;