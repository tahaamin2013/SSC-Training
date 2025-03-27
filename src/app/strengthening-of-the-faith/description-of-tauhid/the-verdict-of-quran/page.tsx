import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const page = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4">
        The Verdict of Qur&apos;an
      </h1>
      <p className="mb-4">
        The sole reason for all the above incongruities is that people have
        forsaken the <span className="font-semibold">Qur&apos;an</span> and{" "}
        <span className="font-semibold">Hadith</span>, and exercise their own
        judgments in the matters concerning{" "}
        <span className="italic">Shari&apos;ah</span>
        by applying their own intellect, pursuing myths and superstitions, and
        trying to justify their erroneous customs and traditions by presenting
        insubstantial evidence.
      </p>
      <p className="mb-4">
        If they had the knowledge of Qur&apos;an and Hadith, they would have known
        that even the pagans among the Arabs used to employ a similar kind of
        argument before the Prophet (Peace be upon Him). Allah&apos;s wrath befell
        them as He declared them liars in one of the Qur&apos;anic verses:
      </p>
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 bg-gray-50 p-3 rounded-md my-4">
        &#123;And they worship besides Allah things that hurt them not, nor
        profit them, and they say: &apos;These are our intercessors with Allah.&apos; Say:
        Do you inform Allah of that which He knows not in the heavens and on the
        earth? Glorified and Exalted is He above all that which they associate
        as partners with Him!&#125; (V.10:18)
      </blockquote>
      <p className="text-sm text-gray-500 mt-4">
        *Translation and interpretation of the Qur&apos;anic verse provided for
        context.
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

* The Verdict of Qur'an
** Forsaking the Qur'an and Hadith
*** Using personal judgments in Shari'ah matters
**** Applying own intellect
**** Pursuing myths and superstitions
*** Justifying erroneous customs with insubstantial evidence
** Knowledge of Qur'an and Hadith
*** Arabs used similar arguments before the Prophet (Peace be upon Him)
*** Allah's wrath befell those who misused knowledge
** Qur'anic Verse Reference
*** Verse: V.10:18
**** Worshipping intercessors = Lying about Allah's knowledge
**** Allah is glorified above all partners and associates

@endmindmap

`}
      />
    </div>
  );
};

export default page;
