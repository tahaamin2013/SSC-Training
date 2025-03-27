import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const page = () => {
  return (
 
    <div className="container mx-auto">
    <h1 className="text-2xl font-bold text-center mb-8">VOLUME 1 / LESSON NO: 8 - EXCELLENCE OF SALAAT (PRAYER)</h1>

    <div className="space-y-6">
      {/* Question 1 */}
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-semibold">Q 1: What is Salaat (prayer)?</h2>
        <p className="mt-2">A. Worship of Allah by the Muslims in a specific manner is called &quot;Salaat&quot; (prayer). This method of prayer has been taught to the Muslims by Allah Almighty, His Apostle, Holy Qur’an, and Sunnah.</p>
      </div>

      {/* Question 2 */}
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-semibold">Q 2: On whom is prayer obligatory?</h2>
        <p className="mt-2">A. It is obligatory (Fard) upon every sane and mature Muslim male and female. The denier of its obligatory nature is an infidel.</p>
      </div>

      {/* Question 3 */}
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-semibold">Q 3: Is prayer obligatory on children?</h2>
        <p className="mt-2">A. It is not obligatory upon minors. However, at the age of seven, they should be taught how to offer prayer. When they reach the age of 10, they should be coerced to offer prayer: if they don’t, they should be forced.</p>
      </div>

      {/* Question 4 */}
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-semibold">Q 4: Please explain some excellences of prayer?</h2>
        <p className="mt-2">A. The Beloved Prophet of Allah Hazrat Mohammed Mustafa (may Allah&apos;s choicest blessings & peace be upon him) has said: When a Muslim stands up to offer prayer, his sins are shed away, just like the leaves of a tree during autumn. In another tradition, it is reported that when a Muslim stands up to offer prayer, the gates of Paradise are opened up for him. Prayer is key to heavens. Prayer is the pillar of Islam; whoever establishes it strengthens Islam. If he abandons it, he demolishes the fortress of Islam. The Holy Qur’an says: Indeed, prayer keeps one away from shameful and forbidden acts. In summary, the believer who is steadfast in offering prayer is dear to Allah and His Apostle, and his livelihood, life, and faith are blessed by the grace of prayer.</p>
      </div>

      {/* Question 5 */}
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-semibold">Q 5: What about a believer who does not offer prayer?</h2>
        <p className="mt-2">A. The Holy Prophet said that the name of a Muslim who deliberately abandons prayer is written on the gates of Hell. Allah and His Prophet are disgusted with him. A believer who is not steadfast in prayer will be raised along with Pharaoh on Doomsday.</p>
      </div>

      {/* Question 6 */}
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-semibold">Q 6: What punishment should be meted out to a believer who does not offer prayer?</h2>
        <p className="mt-2">A. Excommunicate him. He may improve himself by fear of excommunication and become steadfast in offering prayer.</p>
      </div>

      {/* Question 7 */}
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-semibold">Q 7: What is the maturity age in Islam?</h2>
        <p className="mt-2">A. Boys and girls who have attained the age of 15 are considered mature in Islam. Prayer and fasts become obligatory upon them, and all Islamic rules and regulations apply to them.</p>
      </div>
    </div>
<PlantUMLDiagram
  code={`
@startmindmap
<style>
mindmapDiagram {
  .important {
    BackgroundColor lightblue
  }
  .warning {
    BackgroundColor salmon
  }
  .definition {
    BackgroundColor lightgreen
  }
  .excellence {
    BackgroundColor gold
  }
  .punishment {
    BackgroundColor pink
  }
}
</style>

* Salaat (Prayer)
** Definition <<definition>>
*** Specific form of worship to Allah
*** Taught by Allah, Prophet, Quran & Sunnah

** Obligatory Nature <<important>>
*** Required for sane & mature Muslims
*** Denial makes one infidel
*** Maturity age: 15 years

** Children's Prayer Rules
*** Age 7: Should be taught
*** Age 10: Should be enforced
*** Not obligatory before maturity

left side

** Excellence of Prayer <<excellence>>
*** Sheds sins like autumn leaves
*** Opens gates of Paradise
*** Key to heavens
*** Pillar of Islam
*** Prevents shameful acts
*** Brings blessings to:
**** Livelihood
**** Life
**** Faith

** Consequences of Abandoning Prayer <<warning>>
*** Name written on gates of Hell
*** Disgust from Allah and Prophet
*** Raised with Pharaoh on Doomsday

** Remedial Actions <<punishment>>
*** Excommunication as deterrent
*** Aim to improve prayer habits

@endmindmap`}
/>
  </div>
  );
};

export default page;

