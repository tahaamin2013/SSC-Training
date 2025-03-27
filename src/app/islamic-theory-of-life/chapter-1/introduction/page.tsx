import PlantUMLDiagram from "@/components/PlantUMLDiagram";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 text-black">
      <div className="max-w-4xl mx-auto px-6 py-14">
        <article className="prose prose-slate lg:prose-lg mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-black tracking-tight bg-gradient-to-r from-black to-zinc-700 bg-clip-text text-transparent">
            Islamic Ideology of Life: An Introduction
          </h1>

          <div className="space-y-8 text-zinc-800 leading-relaxed mb-5">
            <p className="text-lg first-letter:text-4xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
              Islam is not merely a religion focused on reforming an
              individual&quot;s private or personal life, limited to a set of
              rituals, prayers, and customs. Rather, it is a complete code of
              life that, under the guidance of God and His final Prophet (peace
              be upon him), shapes and structures every aspect of life. It
              illuminates every facet of existence with divine guidance—whether
              personal or collective, social or cultural, material or spiritual,
              economic or political, sectarian or international.
            </p>

            <p className="text-lg">
              The core message of Islam is that God&quot;s law should prevail on His
              earth, and His will should be fulfilled in every corner of life,
              from the depths of the human heart to the farthest reaches of
              civilization.
            </p>

            <div className="bg-zinc-50 p-6 rounded-2xl">
              <p className="text-lg mb-4">
                Allama Iqbal, while discussing the essence of Islamic culture,
                brilliantly differentiates between a limited religious
                perspective and Islam&quot;s revolutionary outlook. He references a
                Sufi reflection on the event of the Mi&quot;raj (the Prophet&quot;s
                ascension):
              </p>

              <blockquote className="pl-6 border-l-4 border-zinc-400 italic my-6 text-lg bg-white p-6 rounded-r-xl shadow-sm">
                &quot;Muhammad of Arabia reached the highest heavens and returned. By
                God, if I had reached that level, I would never have returned.&quot;
              </blockquote>
            </div>

            <p className="text-lg">
              This single sentence encapsulates the difference between a limited
              religious mindset and the revolutionary perspective of the
              Prophets. A person solely focused on personal spiritual elevation
              might consider reaching God to be the ultimate goal. For such an
              individual, returning to the world and engaging with its
              complexities would seem unnecessary after attaining spiritual
              heights.
            </p>

            <p className="text-lg">
              However, the approach of a Prophet is entirely different. After
              reaching such lofty heights, the Prophet returns to the world and
              uses the enlightenment and knowledge gained to build a new world.
              Prophets overcome historical forces, initiate revolutionary
              transformations, and rebuild human civilization.
            </p>

            <p className="text-lg">
              God sent His Prophets to illuminate the world with divine
              guidance, establishing a new humanity and society under the truth
              of faith. All Prophets carried this mission, and our Prophet
              Muhammad (peace be upon him) fulfilled it in its most complete and
              exemplary form.
            </p>

            <p className="text-lg border-t border-zinc-100 pt-8">
              Islam does not teach escapism but rather advocates for building
              life and beautifying it. It offers a comprehensive system of
              guidance to shape and perfect every aspect of life. This system of
              guidance is known as{" "}
              <span className="font-semibold bg-gradient-to-r from-black to-zinc-700 bg-clip-text text-transparent">
                Islamic ideology
              </span>
              .
            </p>
          </div>
        </article>
      </div>
      <PlantUMLDiagram
        code={`
          @startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor #E1F5FE
        BorderColor #0288D1
        FontColor black
    }
    .main {
        BackgroundColor #FFA726
        FontSize 16
        FontStyle bold
    }
    .essence {
        BackgroundColor #A5D6A7
        FontColor #2E7D32
    }
    .miraj {
        BackgroundColor #F8BBD0
        FontColor #C2185B
    }
    .prophetic {
        BackgroundColor #B3E5FC
        FontColor #0277BD
    }
}
</style>

* Islamic Ideology of Life <<main>>

** Islam as a Complete Code of Life <<essence>>
*** Private and Personal Life
**** Rituals
**** Prayers
**** Customs
*** Social and Collective Life
**** Social Structures
**** Cultural Practices
*** Material and Spiritual Aspects
**** Material Guidance
**** Spiritual Growth
*** Economic and Political Systems
**** Economic Policies
**** Political Governance
*** Sectarian and International Dimensions
**** Unity Among Sects
**** International Relations

** Core Message of Islam <<essence>>
*** God's Law
**** Prevails on Earth
**** Fulfilled in All Aspects of Life
***** From Human Heart
***** To Civilization
*** Revolutionary Outlook
**** Differentiated from Limited Religious Perspective
**** Allama Iqbal's Analysis
***** Islamic Culture
***** Essence of Islam
*** Mi'raj Reflection
**** Prophet Muhammad's Ascension
**** Sufi's Remark
***** "Muhammad of Arabia reached the highest heavens and returned."
***** "By God, if I had reached that level, I would never have returned."

left side

** Two Perspectives <<miraj>>
*** Limited Religious View
**** Personal Spirituality
**** Individual Reform
**** Spiritual Ascension

*** Prophetic Vision <<prophetic>>
**** World Transformation
**** Civilization Building
**** Revolutionary Change
**** Societal Reform

** Islamic Mission <<prophetic>>
*** World Illumination
*** New Humanity
*** Divine Guidance System
*** Comprehensive Framework
*** Life Building
*** Universal Beautification

@endmindmap
          `}
      />
    </main>
  );
}
