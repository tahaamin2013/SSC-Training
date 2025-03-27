import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const IqaamahInfo = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-500 p-6">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-4xl w-full text-gray-800">
        <h1 className="text-3xl font-extrabold text-center mb-6 border-b-4 pb-3 border-blue-500 uppercase">
          LESSON NO: 12 - ABOUT IQAAMAH
        </h1>

        <div className="space-y-6 mb-2">
          <div>
            <h2 className="text-2xl font-bold">Q1: What is Iqaamah?</h2>
            <p className="text-gray-700">
              Announcing the commencement of prayer in which the words of Azaan
              are repeated, causing the believers to stand in rows behind the
              Imaam, is called Iqaamah or Takbeer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Q2: What is the difference between Azaan and Iqaamah?
            </h2>
            <p className="text-gray-700">
              The difference between Azaan and Iqaamah is that while making
              Azaan one stands on a high or an elevated place outside the
              precinct of the mosque and puts his index fingers into the ears,
              while Iqaamah is made inside the mosque in the first row behind
              (right-side or left-side of) the Prayer Leader (Imaam) without
              putting forefingers into the ears. Besides, in Iqaamah the words
              &quot;Qad Qaamatis Salaah, Qad Qaamatis Salaah&quot; (the prayer has been
              established) are recited after &quot;Haie-ya &apos;Alal Falaah&quot;.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Q3: How should one respond to Iqaamah?
            </h2>
            <p className="text-gray-700">
              Iqaamah should be responded to in a way similar to the Azaan.
              However, in response to &quot;Qad Qaamatis Salaah&quot; these words should
              be uttered: &quot;Aqaamahal Laahu Ta&apos;aalaa wa Adaamahaa
              Maadaamatis-Samaawaatu wal-Ard&quot; (Allah has established it, and
              will keep it intact forever, until the sky and the earth are in
              existence).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Q4: Should Iqaamah (Takbeer) be listened to whilst sitting or
              whilst standing?
            </h2>
            <p className="text-gray-700">
              The Prayer Leader (Imaam) and the follower (Muqtadi) should stand
              up upon hearing &quot;Haie-ya &apos;Alal Falaah&quot;. It is undesirable to
              listen to the Iqaamah while standing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Q5: What is the proclaimer of the Iqaamah called?
            </h2>
            <p className="text-gray-700">
              He who proclaims the Iqaamah is called a &quot;Mukabbir&quot;.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Q6: Who should proclaim the Iqaamah?
            </h2>
            <p className="text-gray-700">
              The first right of proclaiming the Iqaamah is that of the Mu&apos;azzin
              (one who proclaimed the Azaan). However, any other person can also
              make Iqaamah with his permission or in his absence.
            </p>
          </div>
        </div>
        <PlantUMLDiagram
          code={`@startmindmap
<style>
mindmapDiagram {
 .definition {
   BackgroundColor lightblue
 }
 .differences {
   BackgroundColor lightgreen
 }
 .response {
   BackgroundColor gold
 }
 .rules {
   BackgroundColor pink
 }
 .roles {
   BackgroundColor violet
 }
}
</style>

* Iqaamah (Prayer Commencement) <<definition>>

** Definition <<definition>>
*** Announces start of prayer
*** Repeats Azaan words
*** Causes believers to form rows
*** Also called Takbeer

** Differences from Azaan <<differences>>
*** Location
**** Inside mosque vs. outside
**** First row behind Imam
**** No elevated place needed

*** Method
**** No fingers in ears
**** Additional words added
***** "Qad Qaamatis Salaah" (2 times)
***** After "Haie-ya 'Alal Falaah"

left side

** Response Protocol <<response>>
*** Similar to Azaan response
*** Special response to "Qad Qaamatis Salaah"
**** "Aqaamahal Laahu Ta'aalaa..."
**** Meaning: Allah has established it...

** Rules & Etiquette <<rules>>
*** Standing/Sitting Rules
**** Remain seated during Iqaamah
**** Stand at "Haie-ya 'Alal Falaah"
**** Standing during Iqaamah is undesirable

** Roles & Rights <<roles>>
*** Mukabbir
**** Person who proclaims Iqaamah
*** Proclamation Rights
**** First right: Mu'azzin
**** Others can proclaim
***** With Mu'azzin's permission
***** In Mu'azzin's absence
@endmindmap`}
        />
      </div>
    </div>
  );
};

export default IqaamahInfo;
