import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const page = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4">
        Those who profess to have Faith in Allah while their actions reeking of
        polytheism (Shirk)
      </h1>
      <p className="mb-4">
        It means that the majority of people who outwardly profess to have faith
        in Allah are in fact entangled in the quagmire of polytheism (Shirk). If someone
        questions them as to why they are involved in{" "}
        <span className="font-semibold italic">Shirk</span> while evincing faith
        in Allah, they answer by saying that we are not committing an act of
        polytheism (Shirk); rather, we cherish a tremendous amount of love for the
        prophets and saints, and we are none but their true devotees.
      </p>
      <p className="mb-4">
        Had we considered them on an equal status with Allah, it would have been
        &apos;an act of Shirk&apos;, but we merely consider them the slaves and creatures
        of Allah, Who had vested in them an authority and given them the
        capability to the effect that they manipulate the matters concerning
        this world by the Will of Allah. Therefore, calling upon them for help
        is calling upon Allah for His Help.
      </p>
      <p className="mb-4">
        These people are dear ones to Allah and therefore are free to do
        whatever they like. These are our advocates who will intercede with
        Allah on our behalf. Meeting them makes one meet his Cherisher, and
        calling upon them makes us near to Allah. The more we recognize their
        greatness and pay our respect to them, the more we shall be drawn
        towards Allah.
      </p>
      <p className="mb-4">
        In addition to all this, they make a lot of other absurd and baseless
        statements.
      </p>
      <PlantUMLDiagram
        code={`
@startmindmap
skinparam BackgroundColor white
skinparam ArrowColor black

<style>
mindmapDiagram {
 node {
   BackgroundColor #FAFEFF
   BorderColor #2C3E50
   FontColor black
 }
 rootNode {
   BackgroundColor #3498DB
   BorderColor #2980B9
   FontColor white
 }
 :depth(1) {
   BackgroundColor #F1C40F
   BorderColor #F39C12 
   FontColor black
 }
 :depth(2) {
   BackgroundColor #2ECC71
   BorderColor #27AE60
   FontColor white
 }
 :depth(3) {
   BackgroundColor #E74C3C
   BorderColor #C0392B
   FontColor white
 }
}
</style>

* Faith vs Actions
** Common Justifications
*** Not considering it Shirk
*** Claiming only devotion
*** Viewing saints as intermediaries
*** Believing in delegated authority

** Their Claims About Saints
*** They are Allah's dear ones
*** They have special powers
*** They can manipulate worldly matters
*** They have Allah's permission
*** They act as advocates
*** They can intercede

left side

** Beliefs About Worship
*** Calling saints equals calling Allah
*** Meeting saints equals meeting Allah
*** Respecting saints draws one to Allah
*** More respect means more divine proximity

** Core Issue
*** Outward profession of faith
*** Actions contradict beliefs
*** Entanglement in polytheism (Shirk)
*** Making baseless statements

@endmindmap
`}
      />
    </div>
  );
};

export default page;
