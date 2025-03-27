import React from 'react';

const Page = () => {
  return (
    <div className="p-6 font-sans bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">7.1 OXIDATION AND REDUCTION</h1>
      <p className="mb-4">
        We can define redox reactions in terms of transfer of oxygen, hydrogen, and electrons. In redox reactions, oxidation and reduction occur simultaneously.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">7.1.1 Oxidation-Reduction in Terms of Loss or Gain of Oxygen, Hydrogen or Electrons</h2>
      <p className="mb-4">
        Oxidation is gain of oxygen and reduction is loss of oxygen.
      </p>
      <p className="mb-4">
        In steel mills, iron ores, usually oxides of iron, are converted to the pure metal commercially by the reaction with coke (carbon) in the blast furnace. The carbon first reacts with air to form carbon monoxide, which in turn reacts with iron oxide as follows:
      </p>
      <p className="mb-4 font-mono bg-gray-200 p-2 rounded">
        Fe<sub>2</sub>O<sub>3</sub> + 3CO -→ 2Fe + 3CO<sub>2</sub>
      </p>
      <p className="mb-4">
        Which substance in this reaction is losing oxygen? Which substance is gaining oxygen?
      </p>
      <p className="mb-4">
        CO is gaining oxygen, so undergoing oxidation.
      </p>
      <p className="mb-4">
        Fe<sub>2</sub>O<sub>3</sub> is losing oxygen, so undergoing reduction.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">7.1.2 Oxidation-Reduction in Terms of Transfer of Hydrogen</h2>
      <p className="mb-4">
        Oxidation is loss of hydrogen and reduction is gain of hydrogen.
      </p>
      <p className="mb-4">
        Acetylene (C<sub>2</sub>H<sub>2</sub>) is commercially used for cutting and welding metals. When acetylene burns, it produces a very hot flame known as oxy-acetylene flame. The following reaction takes place when it burns:
      </p>
      <p className="mb-4 font-mono bg-gray-200 p-2 rounded">
        2C<sub>2</sub>H<sub>2</sub> + 5O<sub>2</sub> → 4CO<sub>2</sub> + 2H<sub>2</sub>O
      </p>
      <p className="mb-4">
        Which substance is losing hydrogen? Which substance is gaining hydrogen?
      </p>
      <p className="mb-4">
        C<sub>2</sub>H<sub>2</sub> is losing hydrogen, so undergoing oxidation.
      </p>
      <p className="mb-4">
        O<sub>2</sub> is gaining hydrogen, so undergoing reduction.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">7.1.3 Oxidation and Reduction in Terms of Transfer of Electrons</h2>
      <p className="mb-4">
        Oxidation is loss of electrons and reduction is gain of electrons. For example, consider the following reaction:
      </p>
      <p className="mb-4 font-mono bg-gray-200 p-2 rounded">
        CuO + Zn → Cu + ZnO
      </p>
      <p className="mb-4">
        Copper(II) oxide and zinc(II) oxide are both ionic compounds. Rewrite this equation as an ionic equation:
      </p>
      <p className="mb-4 font-mono bg-gray-200 p-2 rounded">
        CuO + Zn → Cu + ZnO
      </p>
      <p className="mb-4">
        Oxide ions are spectator ions, so the net equation is:
      </p>
      <p className="mb-4 font-mono bg-gray-200 p-2 rounded">
        Cu<sup>2+</sup> + Zn → Cu + Zn<sup>2+</sup>
      </p>
      <p className="mb-4">
        Cu<sup>2+</sup> ions are gaining 2 electrons to form Cu. Its oxidation state changes from +2 to zero. So Cu is undergoing reduction. The oxidation number of Zn is increasing from zero to +2, so Zn is losing 2 electrons and undergoing oxidation.
      </p>
      <p className="mb-4">
        Oxidation is defined as the loss of hydrogen, gain of oxygen, or loss of electrons.
      </p>
      <p className="mb-4">
        Reduction is defined as the gain of hydrogen, loss of oxygen, or gain of electrons.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">Example 7.1: Identifying the Element Undergoing Oxidation in Terms of Transfer of Oxygen or Hydrogen</h2>
      <p className="mb-4">
        The following reaction occurs when you burn Sui gas:
      </p>
      <p className="mb-4 font-mono bg-gray-200 p-2 rounded">
        CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O + heat
      </p>
      <p className="mb-4">
        Identify the element undergoing oxidation.
      </p>
      <p className="mb-4 font-bold">Problem-solving strategy:</p>
      <p className="mb-4">
        Identify the substance that gains O-atoms or loses H-atoms.
      </p>
      <p className="mb-4 font-bold">Solution:</p>
      <p className="mb-4">
      Since C in CH<sub>4</sub> loses H-atoms and combines with oxygen atoms, thus C atoms undergo oxidation. At the same time O-atoms combine with H-atoms to form H₂O, thus O-atoms undergo reduction      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">Society, Technology, and Science</h2>
      <h3 className="text-xl font-bold mt-4 mb-2">Redox in Photography</h3>
      <p className="mb-4">
        A photographic film is basically an emulsion of silver bromide (AgBr) in gelatin. When the film is exposed to light, silver bromide granules become activated. This activation depends on the intensity of the light falling upon them. When the exposed film is placed in the developer solution, which is actually a reducing agent, hydroquinone (a mild reducing agent) is used as the developer. In hydroquinone, the activated granules of silver bromide are reduced to black metallic silver. Reduced silver atoms form the image.
      </p>
      <p className="mb-4 font-mono bg-gray-200 p-2 rounded">
        Ag<sup>+</sup> + 1e<sup>-</sup> → Ag
      </p>
      <p className="mb-4">
        Inactivated silver bromide is removed from the film by using a solvent called a fixer. Sodium thiosulphate is used for this purpose. The areas of the film exposed to the light appear darkest because they have the highest concentration of metallic silver. Thus, photography involves oxidation-reduction reactions.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">CONCEPT ASSESSMENT EXERCISE 7.1</h2>
      <p className="mb-4">
        Identify elements undergoing oxidation and reduction in the following reactions:
      </p>
      <ol className="list-decimal pl-8 mb-4">
        <li className="mb-2">N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub></li>
        <li className="mb-2">2H<sub>2</sub>O → 2H<sub>2</sub> + O<sub>2</sub></li>
        <li className="mb-2">Fe<sub>2</sub>O<sub>3</sub> + 3CO → 2Fe + 3CO<sub>2</sub></li>
        <li className="mb-2">4Al + 3O<sub>2</sub> → 2Al<sub>2</sub>O<sub>3</sub></li>
      </ol>

      <h2 className="text-2xl font-bold mt-6 mb-4">Example 7.2: Identifying the Element Oxidized or Reduced in Terms of Transfer of Electrons</h2>
      <p className="mb-4">
        In the following reaction, identify which element is oxidized and which element is reduced:
      </p>
      <p className="mb-4 font-mono bg-gray-200 p-2 rounded">
        2Ca + O<sub>2</sub> → 2CaO
      </p>
      <p className="mb-4 font-bold">Problem-solving strategy:</p>
      <p className="mb-4">
        Ca, being a metal, forms a cation by losing electrons (oxidation), and oxygen, being a non-metal, gains electrons (reduction) to form an anion.
      </p>
      <p className="mb-4 font-bold">Solution:</p>
      <p className="mb-4">
        Remember that Group IIA metals form M<sup>2+</sup> cations, and that Group VIA non-metals form X<sup>2-</sup> anions. This means in this reaction, each Ca atom loses two electrons to form Ca<sup>2+</sup>, so it is oxidized. Each oxygen atom gains two electrons to form O<sup>2-</sup>, so it is reduced.
      </p>
      <p className="mb-4 font-mono bg-gray-200 p-2 rounded">
        2Ca → 2Ca<sup>2+</sup> + 4e<sup>-</sup> (oxidation)
      </p>
      <p className="mb-4 font-mono bg-gray-200 p-2 rounded">
        O<sub>2</sub> + 4e<sup>-</sup> → 2O<sup>2-</sup> (reduction)
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">CONCEPT ASSESSMENT EXERCISE 7.2</h2>
      <p className="mb-4">
        In the following reactions, identify which element is oxidized and which element is reduced in terms of electron transfer.
      </p>
      <ol className="list-decimal pl-8 mb-4">
        <li className="mb-2">4Na + O<sub>2</sub> → 2Na<sub>2</sub>O</li>
        <li className="mb-2">2Al + 3Cl<sub>2</sub> → 2AlCl<sub>3</sub></li>
        <li className="mb-2">Mg + Cl<sub>2</sub> → MgCl<sub>2</sub></li>
      </ol>
    </div>
  );
};

export default Page;