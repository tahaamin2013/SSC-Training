// pages/salah.tsx
import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import { NextPage } from "next";

interface SalahQuestion {
  question: string;
  answer: string;
}

interface PrayerTime {
  name: string;
  description: string;
}

const SalahPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <main className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <h1 className="text-4xl font-arabic text-center text-emerald-800 mb-12">
            Salaah (Prayer)
          </h1>

          {/* Main Questions */}
          <div className="space-y-8">
            {salahQuestions.map((qa, index) => (
              <div
                key={index}
                className="bg-emerald-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-emerald-900">
                    {qa.question}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{qa.answer}</p>
                </div>
              </div>
            ))}

            {/* Prayer Times Section */}
            <div className="bg-white rounded-xl border-2 border-emerald-200 p-6 mt-8">
              <h2 className="text-2xl font-semibold text-emerald-900 mb-6">
                The Five Daily Prayers
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {prayerTimes.map((prayer, index) => (
                  <div
                    key={index}
                    className="p-4 bg-emerald-50 rounded-lg border border-emerald-100"
                  >
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">
                      {prayer.name}
                    </h3>
                    <p className="text-gray-600">{prayer.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <PlantUMLDiagram
            code={`
@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
        FontColor black
        FontSize 14
    }
    :depth(1) {
        BackgroundColor lightGreen
    }
    :depth(2) {
        BackgroundColor pink
    }
    :depth(3) {
        BackgroundColor lightYellow
    }
}
</style>

* Salaah (Prayer)
** Five Daily Prayers
*** Fajr
**** Before sunrise
*** Zuhr
**** Afternoon
*** Asr
**** Late afternoon
*** Maghrib
**** Just after sunset
*** Isha
**** 1.5-2 hours after sunset
** Prerequisites
*** Wuduu' (Ablution)
**** Washing face, hands, feet
**** Mandatory for valid prayer
*** Facing Qiblah
**** Direction towards Makkah
**** Towards Ka'bah
left side
** Method of Prayer
*** Standing before Allah
*** Facing Qiblah
*** Hands crossed on belly
*** Reciting Qur'aan
*** Praising Allah
*** Bowing in respect
*** Prostrating in humility
** Location
*** Mosque
**** Preferred for men
*** Home
**** Acceptable for all
*** Allah is Omnipresent
left side

@endmindmap
`}
          />
        </main>
      </div>
      <PlantUMLDiagram
        code={`
@startmindmap
<style>
mindmapDiagram {
  .important {
    BackgroundColor lightblue
  }
  .definition {
    BackgroundColor lightgreen
  }
  .excellence {
    BackgroundColor gold
  }
  .warning {
    BackgroundColor salmon
  }
  .punishment {
    BackgroundColor pink
  }
  .times {
    BackgroundColor lightYellow
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
*** Mandatory 5 times daily
*** Covers full day (24 hours)

** Children's Prayer Rules
*** Age 7: Should be taught
*** Age 10: Should be enforced
*** Not obligatory before maturity

** Five Daily Prayers <<times>>
*** Fajr
**** Time: Dawn to Sunrise
**** Before sunrise
*** Zuhr
**** Time: After Sun Passes Meridian until Shadow Doubles
**** Afternoon
*** Asr
**** Time: After Zuhr Time until Before Sunset
**** 1.5-2 hours before sunset
*** Maghrib
**** Time: After Sunset until Twilight Disappears
**** Just after sunset
*** Isha
**** Time: After Evening Twilight until Before Dawn
**** 1.5-2 hours after sunset

left side

** Prerequisites
*** Wuduu' (Ablution)
**** Washing face, hands, feet
**** Mandatory for valid prayer
*** Facing Qiblah
**** Direction towards Makkah
**** Towards Ka'bah

** Method of Prayer
*** Standing before Allah
*** Facing Qiblah
*** Hands crossed on belly
*** Reciting Qur'aan
*** Praising Allah
*** Bowing in respect
*** Prostrating in humility

** Location
*** Mosque
**** Preferred for men
*** Home
**** Acceptable for all
*** Allah is Omnipresent

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

** Consequences <<warning>>
*** Name written on gates of Hell
*** Disgust from Allah and Prophet
*** Raised with Pharaoh on Doomsday

** Remedial Actions <<punishment>>
*** Excommunication as deterrent
*** Aim to improve prayer habits
@endmindmap
`}
      />
    </div>
  );
};

const salahQuestions: SalahQuestion[] = [
  {
    question: "How do Muslims adore and worship Allah?",
    answer:
      "They say salaah (namaaz), keep fasts (saum), give zakaat and perform hajj.",
  },
  {
    question: "What is salaah or namaaz?",
    answer:
      "Salaah is a special way of worship and prayer taught by Allah in the Holy Qur'aan, elucidated and explained practically by His apostle, Muhammad (ﷺ), in ahaadeeth (traditions).",
  },
  {
    question: "How is salaah performed?",
    answer:
      "Salaah is performed by standing before Allah facing the Qiblah, with hands crossed on the belly, in the mosque or at home, reciting the Qur'aan, praising Allah's greatness, bowing to Him in respect and putting the forehead on the ground to show humility to Him.",
  },
  {
    question:
      "Observing prayer - is it done in the masjid (mosque) or in the home?",
    answer:
      "Allah is Omnipresent (present everywhere and at all times)- whether a man or woman present themselves before Allah in the vicinity of a masjid or within the four walls of their house. You can say your prayers at home or in a mosque- Allah is everywhere. But for men there is greater reward in observing the prayers in a masjid.",
  },
  {
    question:
      "One has to wash the face, hands and feet before the salaah: what is that called?",
    answer:
      "It is called wuduu' (ablution). Salaah done without wuduu' is not acceptable and not valid.",
  },
  {
    question:
      "To which direction should a Muslim turn his or her face while offering prayer?",
    answer: "Towards Makkah.",
  },
  {
    question: "Why has it been ordered to turn one's face to Makkah?",
    answer:
      "Since it is in Makkah that the sacred house of Allah is located. It is called the Ka'bah. One must turn one's face towards the Ka'bah while offering namaaz.",
  },
  {
    question: "What name do we give to the direction of our prayer?",
    answer: "It is called Qiblah.",
  },
];

const prayerTimes: PrayerTime[] = [
  {
    name: "Fajr",
    description: "The first prayer, which is said before the sunrise",
  },
  {
    name: "Zuhr",
    description: "The second prayer, offered in the afternoon",
  },
  {
    name: "Asr",
    description: "The third prayer, said in the late afternoon before sunset",
  },
  {
    name: "Maghrib",
    description: "The fourth prayer, said just after sunset",
  },
  {
    name: "Isha",
    description:
      "The fifth prayer, said one and a half or two hours after sunset",
  },
];

export default SalahPage;
