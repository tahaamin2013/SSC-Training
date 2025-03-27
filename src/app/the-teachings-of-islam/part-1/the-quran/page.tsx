// pages/quran.tsx
import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import { NextPage } from "next";

interface QuranQuestion {
  question: string;
  answer: string;
}

const QuranPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <main className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <h1 className="text-4xl font-arabic text-center text-emerald-800 mb-12">
            The Holy Qur&apos;aan
          </h1>

          {/* Questions and Answers */}
          <div className="space-y-6">
            {quranQuestions.map((qa, index) => (
              <div
                key={index}
                className="bg-emerald-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-xl font-semibold text-emerald-900">
                      {qa.question}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">{qa.answer}</p>
                  </div>
                </div>
              </div>
            ))}
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
}
</style>

* The Holy Qur'aan
** Revelation Process
*** Revealed in parts
**** One aayah (verse)
**** Multiple aayaat (verses)
**** Complete surah (chapter)
*** Duration: 23 years
*** Through Angel Jibreel
**** Recited to Prophet (PBUH)
**** Prophet memorized it
**** Written by companions
** Prophet Muhammad (PBUH)
*** Was ummiy
**** Could not read or write
**** No formal schooling
**** Blessed with divine knowledge
** Angel Jibreel
*** Divine messenger
*** Brought Allah's orders
*** Communicated with prophets

@endmindmap
`}
          />
        </main>
      </div>
    </div>
  );
};

const quranQuestions: QuranQuestion[] = [
  {
    question:
      "Was the Holy Qur'aan revealed to Hadrat Muhammad (PBUH) all at once or in parts?",
    answer:
      "The Holy Book was revealed to Prophet Muhammad (PBUH) in parts. Sometimes one aayah (verse) and sometimes two or more aayaat (verses) and sometimes one whole surah (chapter) was revealed, according to the need.",
  },
  {
    question: "How long did the Qur'aan take for its complete revelation?",
    answer: "Twenty-three years.",
  },
  {
    question:
      "How was the Holy Qur'aan revealed to the Prophet Muhammad (PBUH)?",
    answer:
      "The Holy Qur'aan was revealed through the angel Jibreel (peace be upon him). He would come to the Prophet (PBUH) and recite before him one aayah or one surah which the Prophet (PBUH) would remember and then get it written down by someone while many others memorized it.",
  },
  {
    question: "Why did the Prophet (PBUH) not write himself?",
    answer: "Because the Noble Prophet (PBUH) was ummiy.",
  },
  {
    question: "What is ummiy?",
    answer:
      "A person who did not learn to read and write from any human being is called ummiy. Although the Prophet (PBUH) did not receive any customary schooling, Allah bestowed upon him knowledge, the like of which is not found anywhere else in the world.",
  },
  {
    question: "Who is angel Jibreel (peace be upon him)?",
    answer:
      "An angel who brought Allah's orders to His prophets and messengers.",
  },
];

export default QuranPage;
