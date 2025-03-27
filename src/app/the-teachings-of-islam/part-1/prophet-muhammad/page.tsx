// pages/prophet.tsx
import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import { NextPage } from "next";

interface ProphetQuestion {
  question: string;
  answer: string;
}

const prophetQuestions: ProphetQuestion[] = [
  {
    question: "Who was Hadrat Muhammad (PBUH)?",
    answer:
      "Hadrat Muhammad (PBUH) was Allah's worshipper and a Prophet and a Messenger of Allah. We belong to his ummah.",
  },
  {
    question: "Where was our Prophet Muhammad (PBUH) born?",
    answer: "He was born in Makkah, a city in Arabia.",
  },
  {
    question: "What were the names of his father and grandfather?",
    answer:
      "'Abdullah was the name of his father and 'Abdul-Muttalib was the name of his grandfather.",
  },
  {
    question:
      "Was our Prophet Muhammad (PBUH) greater or lesser in position than the other prophets?",
    answer:
      "Our Prophet (PBUH) was the greatest of all prophets. He is the holiest of all creation.",
  },
  {
    question: "Where did the Prophet Muhammad (PBUH) live all his life?",
    answer:
      "He remained in the city of his birth, Makkah, for 53 years. Then he went to the Holy City of Madinah in obedience to the Command of Allah. There he lived for 10 years. He left for his heavenly abode at the age of 63.",
  },
  {
    question:
      "What about a person who does not believe in Prophet Muhammad (PBUH)?",
    answer:
      "One who does not accept Hadrat Muhammad (PBUH) as Allah's prophet is a kaafir.",
  },
  {
    question: "What is meant by believing in Hadrat Muhammad (PBUH)?",
    answer:
      "To believe in Hadrat Muhammad (PBUH) means that we accept him as the Prophet and Messenger of Allah, and that we should love him more than everything except Allah, and that we should obey his orders.",
  },
  {
    question:
      "How do we know that Hadrat Muhammad (PBUH) is Allah's Prophet and Messenger?",
    answer:
      "It is because the Holy Book, the Qur'aan, bears witness to his prophethood and he (PBUH), in his words and actions, maintained a standard of life to which only prophets can rise. Hadrat Muhammad (PBUH) bore witness to his prophethood and he never lied in his entire life.",
  },
  {
    question: "How do we know that the Holy Qur'aan is Allah's book?",
    answer:
      "Because Hadrat Muhammad (PBUH) said it is a Book of Allah and it was revealed to him by Allah. Its teachings and its style of expression are unmatched and it surpasses and eludes human skill and wisdom.",
  },
];

const Prophet: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <main className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold font-sans text-emerald-800">
              Prophet Muhammad{` `}
              <span className="text-emerald-600">(PBUH)</span>
            </h1>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
          </header>

          {/* Questions and Answers */}
          <div className="space-y-8">
            {prophetQuestions.map((qa, index) => (
              <div
                key={index}
                className="bg-emerald-50 rounded-xl p-6 transition-all duration-300 hover:shadow-md"
              >
                <h2 className="text-xl font-semibold text-emerald-900 mb-3">
                  {qa.question}
                </h2>
                <p className="text-gray-700 leading-relaxed">{qa.answer}</p>
              </div>
            ))}
          </div>
        </main>
        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
  node {
    BackgroundColor #F0F8FF
    FontColor black
  }
  :depth(1) {
    BackgroundColor #E8F5E9
  }
  :depth(2) {
    BackgroundColor #FFF3E0
  }
  :depth(3) {
    BackgroundColor #F3E5F5
  }
}
</style>

* Prophet Muhammad (PBUH)
** Identity & Status
*** Allah's worshipper and Messenger
*** Greatest of all prophets
*** Holiest of all creation
*** We belong to his ummah

** Birth & Family
*** Birthplace
**** Born in Makkah, Arabia
*** Family
**** Father: 'Abdullah
**** Grandfather: 'Abdul-Muttalib

** Life Journey
*** Makkah
**** Lived for 53 years
*** Madinah
**** Lived for 10 years
**** Moved by Allah's Command
*** Age at passing
**** 63 years old

left side

** Belief in Prophet Muhammad
*** Requirements
**** Accept him as Prophet and Messenger
**** Love him more than everything except Allah
**** Obey his orders
*** Consequences
**** Rejection makes one a kaafir

** Proof of Prophethood
*** Holy Qur'aan
**** Bears witness to his prophethood
**** Revealed to him by Allah
**** Unmatched teachings
**** Surpasses human wisdom
*** Personal Character
**** Never lied in entire life
**** Maintained prophetic standard
**** Bore witness to own prophethood

@endmindmap
`}
        />

        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
    .important {
        BackgroundColor lightblue
    }
    .life {
        BackgroundColor lightgreen
    }
    .status {
        BackgroundColor pink
    }
    .faith {
        BackgroundColor lightyellow
    }
    .personal {
        BackgroundColor #F3E5F5
    }
}
</style>

* Prophet Muhammad (PBUH)<<important>>
** Early Life & Origin<<life>>
*** Birth & Childhood
**** Born in Makkah, Arabia
**** Father Abdullah passed before birth
**** Mother Aminah died when he was 6
**** Nursed by Haleema
**** Raised by grandfather Abdul-Muttalib until age 8

** Divine Status & Identity<<status>>
*** Allah's Worshipper and Messenger
*** Last Prophet (Khaataman Nabiyyeen)
*** Leader and Greatest of all Prophets
*** Holiest of all creation
*** Me'raaj (ascension to heavens)
**** Visited seven skies
**** Saw Paradise and Hell
**** Prayer made obligatory

** Life Journey & Mission<<life>>
*** Makkah Period
**** Lived for 53 years
**** Received Prophethood at age 40
**** First revelation
**** Initially preached secretly
**** Later preached openly
*** Madinah Period
**** Lived for 10 years
**** Migrated by Allah's Command
*** Passed away at age 63

left side

** First Followers<<life>>
*** Abu Bakr (first among men)
*** Khadija (first among women)
*** Ali (first among young boys)
*** Zaid bin Harisa (first among slaves)

** Proof of Prophethood<<personal>>
*** Holy Qur'aan
**** Bears witness to his prophethood
**** Revealed to him by Allah
**** Unmatched teachings
*** Personal Character
**** Never lied in entire life
**** Maintained prophetic standard

** Faith & Devotion<<faith>>
*** Belief Requirements
**** Accept as Last Prophet
**** Love him more than self (except Allah)
**** Follow his teachings
**** Obey his orders
*** Expressions of Love
**** Speak with reverence
**** Recite Durood Shareef
**** Follow his Sunnah
**** Love his family & companions
**** Show proper respect
**** Rejection makes one a kaafir
@endmindmap`}
        />
      </div>
    </div>
  );
};

export default Prophet;
