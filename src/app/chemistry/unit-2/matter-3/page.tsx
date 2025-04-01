import React from 'react';

export default function TestPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="space-y-4">
        {/* MCQs */}
        <h2 className="text-2xl font-bold">12 MCQs (Each 1 Mark)</h2>
        <div className="space-y-2">
          <p>What is the basic unit that makes up all matter?</p>
          <ul className="list-decimal pl-6">
            <li>a) Molecule</li>
            <li>b) Electron</li>
            <li>c) Atom</li>
            <li>d) Proton</li>
          </ul>

          <p>Which state of matter has particles arranged in a fixed, orderly pattern?</p>
          <ul className="list-decimal pl-6">
            <li>a) Gas</li>
            <li>b) Liquid</li>
            <li>c) Solid</li>
            <li>d) Plasma</li>
          </ul>

          <p>What property of gases allows them to be compressed easily?</p>
          <ul className="list-decimal pl-6">
            <li>a) High density</li>
            <li>b) Strong intermolecular forces</li>
            <li>c) Large empty spaces between molecules</li>
            <li>d) Rigid structure</li>
          </ul>

          <p>What happens when heat is added to a solid?</p>
          <ul className="list-decimal pl-6">
            <li>a) It remains a solid</li>
            <li>b) It melts into a liquid</li>
            <li>c) It turns into plasma</li>
            <li>d) It disappears</li>
          </ul>

          <p>In which state of matter do free electrons and ionized particles exist?</p>
          <ul className="list-decimal pl-6">
            <li>a) Liquid</li>
            <li>b) Gas</li>
            <li>c) Solid</li>
            <li>d) Plasma</li>
          </ul>

          <p>Which process involves the transformation of a liquid into a gas?</p>
          <ul className="list-decimal pl-6">
            <li>a) Condensation</li>
            <li>b) Evaporation</li>
            <li>c) Freezing</li>
            <li>d) Sublimation</li>
          </ul>

          <p>Which state of matter has a definite volume but takes the shape of its container?</p>
          <ul className="list-decimal pl-6">
            <li>a) Solid</li>
            <li>b) Liquid</li>
            <li>c) Gas</li>
            <li>d) Plasma</li>
          </ul>

          <p>What happens when water reaches its boiling point?</p>
          <ul className="list-decimal pl-6">
            <li>a) It turns into a solid</li>
            <li>b) It turns into gas</li>
            <li>c) It stays liquid</li>
            <li>d) It turns into plasma</li>
          </ul>

          <p>Why can liquids flow but solids cannot?</p>
          <ul className="list-decimal pl-6">
            <li>a) Liquids have stronger bonds between molecules</li>
            <li>b) Solids have fixed molecules, while liquids have loosely arranged molecules</li>
            <li>c) Solids are less dense than liquids</li>
            <li>d) Liquids have lower energy than solids</li>
          </ul>

          <p>Which state of matter has the highest energy level?</p>
          <ul className="list-decimal pl-6">
            <li>a) Gas</li>
            <li>b) Plasma</li>
            <li>c) Liquid</li>
            <li>d) Solid</li>
          </ul>

          <p>How is plasma different from gas?</p>
          <ul className="list-decimal pl-6">
            <li>a) Plasma is made of neutral atoms</li>
            <li>b) Plasma contains charged particles (ions and free electrons)</li>
            <li>c) Plasma has less energy than gas</li>
            <li>d) Plasma is a type of solid</li>
          </ul>

          <p>What is the term used for the direct transition from solid to gas?</p>
          <ul className="list-decimal pl-6">
            <li>a) Melting</li>
            <li>b) Evaporation</li>
            <li>c) Condensation</li>
            <li>d) Sublimation</li>
          </ul>
        </div>

        {/* Short Questions */}
        <h2 className="text-2xl font-bold">11 Short Questions (Each 3 Marks)</h2>
        <div className="space-y-2">
          <p>Define chemistry and explain its connection to matter.</p>
          <p>Describe the properties of plasma and where it can be found.</p>
          <p>Explain why gases have lower density compared to solids and liquids.</p>
          <p>What happens to molecules of a liquid when it is cooled to its freezing point?</p>
          <p>How does the motion of particles change as matter moves from solid to gas?</p>
          <p>What is compressibility? Compare the compressibility of gases and liquids.</p>
          <p>Why do different states of matter exist? Explain with an example.</p>
          <p>Describe the concept of Bose-Einstein Condensate (BEC) and its significance.</p>
          <p>How can temperature and pressure influence the state of matter?</p>
          <p>What are liquid crystals, and where are they used in everyday life?</p>
          <p>How do physical and chemical changes differ? Give an example of each.</p>
        </div>

        {/* Long Questions */}
        <h2 className="text-2xl font-bold">4 Long Questions (Each 5 Marks)</h2>
        <div className="space-y-2">
          <p>Explain the particle arrangement in solids, liquids, and gases, and describe how their properties differ.</p>
          <p>Describe the process of phase transitions (melting, freezing, evaporation, condensation, sublimation) with examples.</p>
          <p>Discuss how matter changes states due to energy changes, and explain the role of temperature and pressure.</p>
          <p>Compare and contrast the properties of plasma and Bose-Einstein Condensate (BEC).</p>
        </div>

        <p className="text-sm text-gray-600 mt-6">
          This test includes fresh questions while maintaining a focus on key concepts. Let me know if you&apos;d like any changes! 😊
        </p>
      </div>
    </div>
  );
}
