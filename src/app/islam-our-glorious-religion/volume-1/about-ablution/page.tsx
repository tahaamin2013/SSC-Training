import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const WuduInfo = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-500 p-6">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-4xl w-full text-gray-800">
        <h1 className="text-3xl font-extrabold text-center mb-6 border-b-4 pb-3 border-blue-500 uppercase">
          ABOUT ABLUTION (WUDU)
        </h1>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Q1: What is ablution (Wudu)?</h2>
            <p className="text-gray-700">
              To wash the face from the forelock down to the lower portion of the chin and from the lobe of one
              ear to the other, to wash hands up to the elbows and the feet up to ankles, and passing wet fingers of
              both the hands over the head is called ablution (Wudu). It is forbidden to offer prayer without
              ablution.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold">Q2: What is the method of performing Wudu?</h2>
            <p className="text-gray-700">
              Sit at a clean elevated place facing the Qibla to perform ablution and then recite &quot;Bism-Allah
              irRahmaan irRaheem&quot; with the intention of gaining reward and carrying out the command of Allah
              Almighty. Wash both hands up to the wrists and then apply &quot;Miswaak&quot; (soft brush of plant stem) to
              the teeth if available; otherwise, rub the teeth with the forefinger. Rinse the mouth thoroughly thrice
              and also gargle if not observing fast. Sniff up water into the nostrils with the right hand three times
              ensuring that the water reaches the soft spot of the nose and wash the nose with the left hand.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold">Q3: How is Masah done?</h2>
            <p className="text-gray-700">
              Wet the hands with fresh water; join three fingers (excluding the forefingers and thumbs) of both
              hands and pass them over the head from the forelock up to the nape of the neck and then bring
              them back similarly to the forehead. The palms should not touch the head. Wipe the inner sides of
              the ears with the tips of forefingers and the outsides of the ears with the insides of the thumbs.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold">Q4: What should be recited after Wudu?</h2>
            <p className="text-gray-700">Having performed Wudu, recite:</p>
            <div className="p-4 bg-gray-100 rounded-md text-center font-semibold text-lg">
              <p>اللَُّهم َِّؕ اجْعَلْنٰي مٰن َِؕ التَّوَّابٰين َِؕ وَاجْعَلْنٰي مٰن َِؕ اْلُمتَطَهرٰين َِؕ</p>
              <p>
              &quot;Allaa-hummaj &apos;Alnee Minat-tawwaabeena waj&apos;alnee Minal Mutatah-hareen&quot; (O&apos; Allah! make me
                of those who have repented and make me of those who have been purified).
              </p>
            </div>
            <p className="text-gray-700">Drink a little of the remaining ablution water (standing upright). Recite Kalemah-e-Shahaadat. Then whilst raising the index finger and looking towards the sky, recite Surah Al-Qadr which will earn you a great reward.</p>
          </div>
        </div>
        <PlantUMLDiagram
        code={`@startmindmap
<style>
mindmapDiagram {
 .definition {
   BackgroundColor lightblue
 }
 .steps {
   BackgroundColor lightgreen
 }
 .masah {
   BackgroundColor gold
 }
 .completion {
   BackgroundColor pink
 }
 .important {
   BackgroundColor violet
 }
}
</style>

* Ablution (Wudu)

** Definition <<definition>>
*** Washing specific body parts
**** Face (forehead to chin, ear to ear)
**** Hands up to elbows
**** Feet up to ankles
**** Wiping head (Masah)
*** Mandatory for prayer

** Method <<steps>>
*** Preparation
**** Sit facing Qibla
**** Clean elevated place
**** Recite "Bismillah"
**** Set intention

*** Washing Sequence
**** Hands to wrists
**** Use Miswak/finger for teeth
**** Mouth rinse (3 times)
**** Nose cleansing (3 times)
**** Face washing (3 times)
**** Arms to elbows (3 times)
***** Right first
***** Left second

left side

** Masah (Wiping) Details <<masah>>
*** Head
**** Wet hands with fresh water
**** Use three middle fingers
**** Forelock to nape and back
**** Avoid palm contact

*** Ears
**** Inner: Use forefingers
**** Outer: Use thumbs

*** Neck
**** Use back of fingers
**** Avoid throat wiping

** Final Steps <<completion>>
*** Feet washing (3 times)
**** Right foot first
**** Left foot second
**** Include ankles

** Completion Ritual <<completion>>
*** Recite du'a
**** "Allaa-hummaj 'Alnee..."
*** Drink remaining water
*** Recite Kalimah-e-Shahadat
*** Recite Surah Al-Qadr
**** Raise index finger
**** Look towards sky
@endmindmap`}
        />
      </div>
    </div>
  );
};

export default WuduInfo;