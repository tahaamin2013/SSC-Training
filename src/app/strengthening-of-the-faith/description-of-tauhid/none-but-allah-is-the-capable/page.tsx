import PlantUMLDiagram from "@/components/PlantUMLDiagram";

const page = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
    <h1 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4">
      None but Allah is the Capable
    </h1>
    <p className="mb-4">
      The objects which the polytheists offer their worship to are absolutely powerless. They possess 
      no capability of either benefiting anybody or inflicting any harm on someone. As to their notion 
      that they will intercede with Allah on their behalf, is nothing but a mere fallacy for the simple 
      reason that Allah did not inform them about any such thing.
    </p>
    <p className="mb-4">
      Do they profess to be more knowledgeable than Allah in regard to the matters of this world and the heavens 
      in what they believe to be their mediators with Allah on their behalf? Thus, it becomes known to us that there 
      is no such mediator in this universe who, on the basis of people&apos;s belief or disbelief in them, can either 
      benefit or harm someone. Even the intercession of the Prophets and saints itself is governed by Allah. Nothing 
      happens if someone calls upon them in distress.
    </p>
    <p className="mb-4">
      Furthermore, we are warned that whoever worships someone as his intercessor is also a <span className="font-semibold">Mushrik</span> 
      as stated by Allah in this verse:
    </p>
    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 bg-gray-50 p-3 rounded-md my-4">
      &#123; And those who take Auliya (protectors and helpers) besides Him (say): &apos;We worship them only 
      that they may bring us near to Allah.&apos; Verily, Allah will judge between them concerning that 
      wherein they differ. Truly, Allah guides not him who is a liar, and a disbeliever. &#125; (V.39:3)
    </blockquote>
    <p className="text-sm text-gray-500 mt-4">
      *Translation and interpretation of the Qur&apos;anic verse provided for context.
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

* None but Allah is the Capable
** Powerlessness of Worshipped Objects
*** Polytheists' Worship is Futile
**** Objects of worship have no capability
**** Cannot benefit or harm anyone
** Fallacy of Mediators
*** No intercessor with Allah
**** Allah did not inform about any intercessor
*** No one more knowledgeable than Allah
**** Mediators cannot affect outcomes
** Intercession in Islam
*** Governed by Allah
**** Prophets and saints' intercession is subject to Allah's will
**** Calling upon them in distress does not affect outcome
** Warning about Worship of Intercessors
*** Worshipping intercessors = Mushrik (Polytheist)
**** Verse reference: V.39:3
**** Allah will judge those who differ
*** Liar and disbeliever will not be guided

@endmindmap
`}
/>
  </div>
  );
};

export default page;
