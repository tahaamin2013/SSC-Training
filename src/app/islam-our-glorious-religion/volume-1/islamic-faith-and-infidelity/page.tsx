import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const page = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
    <h1 className="text-2xl font-bold text-center mb-6">VOLUME 1 / LESSON NO: 3 - ISLAMIC FAITH & INFIDELITY</h1>
    
    <div className="space-y-6 mb-2">
      <div>
        <h2 className="text-lg font-semibold">Q 1: What is Islamic faith?</h2>
        <p className="mt-2">A. Islamic faith is to firmly believe that the Holy Prophet Hazrat Mohammed (PBUH) is a true Apostle and his every word and deed is also true. Whoever believes so is a Muslim.</p>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold">Q 2: Can one be a Muslim who recites the Kalemah without understanding its meaning?</h2>
        <p className="mt-2">A. One who believes that Islam is the true religion and expresses his intention of embracing Islam with his tongue by reciting the Kalemah – will be considered a Muslim: even if there is no one to make him understand the meaning of the Kalemah or he does not understand it due to some handicap.</p>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold">Q 3: What are those who do not believe in Islam, called?</h2>
        <p className="mt-2">A. Such people are called &quot;infidels&quot; (kaafir).</p>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold">Q 4: Who is called a renegade (murtad)?</h2>
        <p className="mt-2">A. An apostate or a renegade is the wretched one who embraces Islam but even then speaks blasphemous words against Islam and is adamant not to renounce his blasphemy.</p>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold">Q 5: Who are hypocrites?</h2>
        <p className="mt-2">A. Hypocrites are those who embrace Islam and claim to be Muslims but deny Islam from their heart.</p>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold">Q 6: Who are polytheists (mushriks)?</h2>
        <p className="mt-2">A. Polytheists are those wretched ones who worship different objects except Allah or consider someone or something as partners in Allah&apos;s absolute kingdom and power.</p>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold">Q 7: Which communities are polytheists (Mushrik) in the world?</h2>
        <p className="mt-2">A. For example, Hindus who worship idols and consider them partners in Allah&apos;s infinite Kingdom and eternal power, Christians, Jews, Parsis, etc., who believe either in duality of God or in trinity. All such people are &quot;Mushriks&quot;.</p>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold">Q 8: Are there any &quot;Mushriks&quot; (polytheists) in Muslims?</h2>
        <p className="mt-2">A. God forbid! How can a Muslim be a &quot;Mushrik&quot;? For, he firmly believes in Oneness of the true God i.e. Allah! Contrary to this, a Mushrik is one who considers one or the other human being or thing as a partner of Allah. No Mushrik can be called a Muslim and no Muslim can be described as a Mushrik.</p>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold">Q 9: What about those people who term Muslims as &quot;Mushriks&quot;?</h2>
        <p className="mt-2">A. Some misguided and disgruntled groups of people have surfaced who call Muslims &quot;polytheists&quot; and &quot;heretics&quot; on one pretext or the other. Muslims must avoid and disassociate themselves from such misguided elements, in order to save their faith.</p>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold">Q 10: Can we call an infidel as infidel or not?</h2>
        <p className="mt-2">A. A Muslim should be called a Muslim and an infidel should be called an infidel. There is no valid reason in forbidding one to call an infidel as &quot;Kaafir&quot;. Allah Almighty Himself calls infidels as &quot;Kaafir&quot; in the Holy Qur’an i.e. &quot;Qul Yaaa Aieyu-Hal Kaaferoon&quot; (Say you [Mohammed] O&apos; infidels!).</p>
      </div>
    </div>
<PlantUMLDiagram
  code={`
@startmindmap
*[#LightBlue] ISLAMIC FAITH & INFIDELITY
**[#LightGreen] Islamic Faith
***_ Belief in Prophet Mohammed
***_ Following his words and deeds
***_ Reciting Kalemah with belief
***_ Considered Muslim even without understanding Kalemah's meaning

**[#Pink] Types of Non-Believers
***[#Orange] Infidels (Kaafir)
****_ Those who don't believe in Islam

***[#Red] Renegade (Murtad)
****_ Embraces Islam then speaks against it
****_ Adamant in blasphemy

***[#Purple] Hypocrites
****_ Claim to be Muslim
****_ Deny Islam in heart

***[#Yellow] Polytheists (Mushriks)
****_ Worship other than Allah
****_ Believe in multiple deities
****_ Examples
*****_ Hindus (idol worship)
*****_ Christians (trinity belief)
*****_ Jews
*****_ Parsis

**[#LightCyan] Important Points
***_ Muslims cannot be Mushriks
***_ Must avoid misguided groups
***_ Correct terminology important
****_ Call Muslims as Muslims
****_ Call infidels as Kaafir
@endmindmap
`}
/>
  </div>
  );
};

export default page;
