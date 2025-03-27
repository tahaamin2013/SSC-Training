import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const page = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
    <h1 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4">
      None is the Sustainer Other than Allah
    </h1>
    <p className="mb-4">
      This clarifies that whosoever worships the so-called deities in the hope that worshipping them
      shall make him nearer to Allah, is none but a polytheist, an accomplished liar, and the one who
      rejects the bounty of Allah.
    </p>
    <p className="mb-4">
      Allah states in one of the Qur&apos;anic verses:
    </p>
    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 bg-gray-50 p-3 rounded-md my-4">
      Say: In Whose Hand is the sovereignty of everything (i.e. treasures of each and everything)? 
      And He protects (all), while against Whom there is no protector, (i.e. if Allah saves anyone none 
      can punish or harm him, and if Allah punishes or harms anyone none can save him), if you know. 
      They will say: &apos;(All that belongs) to Allah.&apos; Say: &apos;How then are you deceived and turn away 
      from the truth?&apos; (V.23:88-89)
    </blockquote>
    <p className="mb-4">
      Even if the polytheists are asked about an entity who exercises an absolute control over the whole
      universe and against whom no one can stand, they will definitely say it is Allah. When Allah is
      All-Powerful, is not it an act of lunacy to associate partners with Allah?
    </p>
    <p className="mb-4">
      Thus, it becomes known to us that Allah has not given anyone authority to dispose of universal matters
      and no one is either capable of supporting someone else. Furthermore, even the polytheists of the prophetic
      era did not consider the idols to be on a par with Allah in terms of status, but considered them as slaves
      and creatures of Allah. They also knew that these idols did not possess any of the Divine powers, but their
      Shirk was represented by calling upon them, making vows to them, presenting offerings to them and considering
      them as their intercessors with Allah.
    </p>
    <p className="mb-4">
      This means that whosoever accords someone a similar treatment, even though by reckoning him to be a slave
      and a creature, such a person is bound to be regarded as a counterpart of Abu Jahl in terms of polytheism.
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

* None is the sustainer other than Allah
** Worshipping Deities is Polytheism
*** Worshipping deities to get nearer to Allah = Polytheism
**** Such a person is a liar and rejects Allah's bounty
** Qur'anic Verse V.23:88-89
*** Sovereignty of everything belongs to Allah
**** Allah is the protector; no one can harm or save anyone without His will
*** Polytheists' deception: turning away from the truth
** Allah's Absolute Control
*** Polytheists acknowledge Allah's power
**** No one can stand against Allah's will
*** Associating partners with Allah is illogical
** No One Can Control the Universe Except Allah
*** Allah does not delegate authority over the universe to anyone
**** No one can support another person
** Polytheism in the Prophetic Era
*** Polytheists acknowledged idols as creatures of Allah
**** Idols were not seen as having Divine powers
*** Shirk: Calling upon idols, making vows, and presenting offerings
** Consequences of Polytheism
*** Treating idols like Allah's creatures = Polytheism
**** Such a person is comparable to Abu Jahl in their polytheism

@endmindmap
`}
/>
  </div>
  );
};

export default page;
