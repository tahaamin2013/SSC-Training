import PlantUMLDiagram from "@/components/PlantUMLDiagram";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-100 text-black">
      <div className="max-w-4xl mx-auto px-6 py-14">
        <article className="prose prose-slate lg:prose-lg mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl">
          <h1 className="text-4xl font-bold mb-8 text-black tracking-tight">
            The Meaning of Deen
          </h1>
          
          <div className="space-y-6 text-zinc-800 leading-relaxed">
            <p className="text-lg">
              The word <span className="font-semibold">Deen</span> has been used in various contexts in the Arabic language. However, when all its usages are considered, it becomes clear that the term represents four fundamental concepts:
            </p>

            <div className="pl-6 space-y-3">
              <p className="text-lg">
                1. <span className="font-semibold">Dominance and Authority</span>: Referring to the power of a supreme authority.
              </p>
              <p className="text-lg">
                2. <span className="font-semibold">Obedience and Submission</span>: Referring to the submission of individuals to this authority.
              </p>
              <p className="text-lg">
                3. <span className="font-semibold">Rules and Regulations</span>: Referring to the code or system that is followed.
              </p>
              <p className="text-lg">
                4. <span className="font-semibold">Accountability and Judgement</span>: Referring to reckoning, decisions, and reward or punishment.
              </p>
            </div>

            <p className="text-lg mt-8">
              In the Quranic language, <span className="font-semibold">Deen</span> represents a complete system of life whose key components are:
            </p>

            <div className="pl-6 space-y-3">
              <p className="text-lg">
                1. The sovereignty and supreme authority of Allah.
              </p>
              <p className="text-lg">
                2. Submission and obedience in acknowledgment of this authority.
              </p>
              <p className="text-lg">
                3. A comprehensive system of thought and action operating under this authority.
              </p>
              <p className="text-lg">
                4. Reward and punishment from this supreme authority, based on loyalty to or rebellion against this system.
              </p>
            </div>

            <p className="text-lg">
              The Quran uses the term <span className="font-semibold">Deen</span> as a comprehensive concept that refers to a system of life where humans recognize the supreme authority of a being, accept its commandments, live within its rules and regulations, seek rewards for loyalty, and fear punishment for disobedience.
            </p>

            <p className="text-lg">
              This position of authority is exclusive to the <span className="font-semibold">One True God</span> (Allah). <span className="font-semibold">Islam</span> is the Deen that is founded on this sovereignty, and it is the path of life ordained by Allah for humanity.
            </p>

            <blockquote className="pl-6 border-l-4 border-zinc-300 italic my-6 text-lg">
            &quot;Today, I have perfected your Deen for you, completed My favor upon you, and have chosen Islam as your Deen.&quot; (Surah Al-Ma&apos;idah, 5:3)
            </blockquote>

            <blockquote className="pl-6 border-l-4 border-zinc-300 italic my-6 text-lg">
              &quot;Indeed, the true Deen with Allah is Islam.&quot; (Surah Aal-e-Imran, 3:19)
            </blockquote>

            <blockquote className="pl-6 border-l-4 border-zinc-300 italic my-6 text-lg">
            &quot;And whoever seeks a Deen other than Islam, it will never be accepted from him.&quot; (Surah Aal-e-Imran, 3:85)
            </blockquote>

            <h2 className="text-3xl font-bold mt-10 mb-6 text-black tracking-tight">
              The Concept of Islam
            </h2>

            <p className="text-lg">
              The literal meaning of <span className="font-semibold">Islam</span> is submission, surrender, and complete devotion. It also means peace, safety, and harmony. Islam is the Deen that offers a complete code of life based on the sovereignty of God. It demands that humans accept and follow this system because Islam essentially means surrendering to the laws of Allah and obeying them.
            </p>

            <p className="text-lg">
              Moreover, Islam implies that the outcome of such submission will be a life enriched with peace, safety, and harmony. It will bring contentment to the heart, establish genuine peace in individual and collective lives, and ensure salvation and eternal peace in the life to come.
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
        BackgroundColor #E8F5E9
        BorderColor #2E7D32
        FontColor black
    }
    .main {
        BackgroundColor #FFB74D
        FontSize 16
        FontStyle bold
    }
    .arabic {
        BackgroundColor #B2EBF2
        FontColor #006064
    }
    .quranic {
        BackgroundColor #E1BEE7
        FontColor #4A148C
    }
    .islam {
        BackgroundColor #FFCDD2
        FontColor #B71C1C
    }
    .verses {
        BackgroundColor #FFF9C4
        FontColor #827717
    }
}
</style>

* Concept of Deen & Islam <<main>>

** Arabic Meaning of Deen <<arabic>>
*** Dominance & Authority
**** Supreme Power
**** Divine Control
*** Obedience & Submission
**** Human Response
**** Acceptance
*** Rules & Regulations
**** System Framework
**** Code of Conduct
*** Accountability
**** Judgment
**** Rewards & Punishments

** Quranic Components <<quranic>>
*** Allah's Sovereignty
**** Supreme Authority
**** Divine Control
*** Human Submission
**** Recognition
**** Obedience
*** Comprehensive System
**** Thought Framework
**** Action Guidelines
*** Divine Justice
**** Rewards for Loyalty
**** Punishment for Rebellion

left side

** Islam as Deen <<islam>>
*** Literal Meanings
**** Submission
**** Surrender
**** Complete Devotion
*** Additional Meanings
**** Peace
**** Safety
**** Harmony

** Quranic Verses <<verses>>
*** "Perfected Deen" (5:3)
*** "True Deen is Islam" (3:19)
*** "Only Islam Accepted" (3:85)

** Outcomes of Submission <<islam>>
*** Individual Benefits
**** Heart's Contentment
**** Personal Peace
*** Collective Benefits
**** Societal Harmony
**** Communal Peace
*** Eternal Benefits
**** Salvation
**** Eternal Peace

@endmindmap
          `}
      />
    </main>
  );
}