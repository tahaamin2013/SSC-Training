import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const page = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4">
        None is the Supporter Other than Allah
      </h1>
      <p className="mb-4">
        The fact is that Allah is very close to a human being, but the human
        beings themselves got distracted from this basic truth and coined a
        fallacious concept believing that an idol shall draw us near to Allah
        and thus took such idols to be their mediators.
      </p>
      <p className="mb-4">
        These are the people who shamelessly turned down the bounty of Allah
        that it is He who listens to everyone directly and fulfills everyone&apos;s
        desires. Instead of turning to Allah, they started directing their
        prayers and invocations towards the so-called deities other than Allah
        for the fulfillment of their wishes.
      </p>
      <p className="mb-4">
        To make the matters worse, these people also wished to be near to Allah
        by employing erroneous and wrong methods. How could these ingrates and
        untruthful people be guided on the Right Path? The more they tread on
        this crooked path, the more shall they be driven away from the Right
        Path.
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

* None is the supporter other than Allah
** Close Proximity of Allah to Humans
*** Humans distracted from this truth
**** Belief in idols as mediators
** Misguided Path to Allah
*** Prayers directed to false deities
**** Seeking fulfillment through idols
** Erroneous Methods for Seeking Closeness
*** Wrong approaches to get nearer to Allah
**** Treading on a crooked path
** Consequences of Misguidance
*** More distance from the Right Path
**** Being driven away from the truth
@endmindmap
    `}
      />
    </div>
  );
};

export default page;
