import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PlantUMLDiagram from "@/components/PlantUMLDiagram";

export default function PrayerGuidePage() {
  const prayers = [
    {
      title: "SANAA",
      arabic:
        "Subhaanaka-Allahomma wa Bi-Hamdika wa Tabaarakasmuka wa Ta'aalaa Jadduka WalaaaIlaaha Ghairuk.",
      translation:
        "O'Allah! All glory is due to You, I praise You, Your name is the Most Auspicious, Your Majesty is Most Supreme and there is none worthy of worship except You.",
    },
    {
      title: "TA'AWUZ",
      arabic: "A'oozu Billaahi Minash Shaietaa-nir Rajeem.",
      translation: "I seek the refuge of Allah from the accursed devil.",
    },
    {
      title: "TASMIYAH",
      arabic: "Bism-Allah irRahmaan irRaheem.",
      translation:
        "Allah – beginning with the name of -the Most Affectionate, the Most Merciful.",
    },
    {
      title: "SURAH FAATEHA",
      arabic:
        "Al-Hamdu Lillaahi Rabbil 'Alaameen. Ar-Rahmaanir Raheem. Maaleke Yaumid-deen. Ei-yaaka Na'budu wa Ei-yaaka Nasta'een. Ihdenas Siraatal Mustaqeema Siraatal Lazeena An'amta 'Alaie-him Ghaieril Maghdoobi 'Alaie-him Walad Daaaleeen.",
      arabicText:
        "ا ْل َح ْم ُد َ ه َلِلّ َر ِّب ا ْل َعالَ َمي َن\nَمال هر َحيَنال هر ْح ََٰمَينال ِّدَمَمالَ َك َي ْوهيا َك َن ْس َت َعي ُنَإهيا َك َن ْع ُب ُد َوَإ\nا ْه َد َنا ال ِّص َرا َط ا ْل ُم ْس َت َقي َم\nَص َرا َط اله َذي َن أَ ْن َع ْم َت َعلَ ْي َه ْم َغ ْي َر ا ْل َم ْغ ُضو َب َعلَ ْي َه ْم َو َلَ ال هضالِّي َن",
      translation:
        "All praise is to Allah, the Lord Of The Creation. The Most Gracious, the Most Merciful. Owner of the Day of Recompense. You alone we worship and from You alone we seek help (and may we always). Guide us on the Straight Path. The path of those whom You have favoured - Not the path of those who earned Your anger - nor of those who are astray.",
    },
    {
      title: "SURAH IKHLAAS",
      arabic:
        "Qul HuwAllaho Ahad. Allaa-hus Samad Lam Yalid Walam Yoolad Walam Yakul Lahoo Kufuwan Ahad.",
      arabicText:
        "قُ ْل ُه َو هاللُّ أَ َحد\nهاللُّ ال هص َم ُدلَ ْم َيلَ ْد َولَ ْم ُيولَ ْد\nَولَ ْم َي ُكن له ُه ُكفُ ًوا أَ َحد",
      translation:
        'Proclaim, "He is Allah, He is One. Allah is the Un-wanting. He has no offspring, nor is He born from anything. And there is none equal to Him."',
    },
    {
      title: "TASMEEY",
      arabic: "Sami 'Allaahu Liman Hamidah.",
      translation: "Allah listens to whoever praises Him.",
    },
    {
      title: "TAHMEED",
      arabic: "Rabbanaa Lakal-Hamd.",
      translation: "O our Lord! All praise is for You.",
    },
    {
      title: "TASHAH-HUD",
      arabic:
        "Atta-hee-yaatu Lillaahi was-Salawaatu wat-Taie-yi-baat. As-Salaamu 'Alaieka Aie-yu-han Nabeeyu wa Rahmatul Laahi wa Barakaatu. As-Salaamu 'Alaie-naa wa 'Alaa 'Ibaadil Laahis Saaleheen. Ash-hadu Allaa Ilaaha Illal Laahu wa Ash-hadu Anna Mohammedan 'Abduhu wa Rasoolu.",
      translation:
        "O Allah! You alone deserve all veneration, worship and glory. O Prophet! Peace be on you and the mercy of Allah and His blessings. Peace be upon us and upon the virtuous bondmen of Allah. I bear witness that there is no God except Allah and I bear witness that Mohammed is His chosen servant and His Apostle.",
    },
    {
      title: "DUROOD-E-IBRAAHEEMI",
      arabic:
        "Allaa-humma Salle 'Alaa Saiey-yidinaa Mohammedin wa 'Alaaa Aale Saiey-yidinaa Mohammedin Kamaa Salaieta 'Alaa Saiey-yidinaa Ibraaheema wa 'Alaaa Aale Saiey-yidinaa Ibraaheema Innaka Hamee-dum Majeed. Allaa-humma Baarik 'Alaa Saiey-yidinaa Mohammedin wa 'Alaaa Aale Saiey-yidinaa Mohammedin Kamaa Baarakta 'Alaaa Saiey-yidinaa Ibraaheema wa 'Alaaa Aale Saiey-yidinaa Ibraaheema Innaka Hamee-dum Majeed.",
      translation:
        "O' Allah! Send blessings on our master Mohammed as You did send on our master Ibraheem and the descendants of Ibraheem. You are, indeed, Praised, Glorified. O Allah! Bless our master Mohammed and the descendants of Mohammed as You did bless our master Ibraheem and the descendants of Ibraheem. Undoubtedly, You are Praised, Glorified.",
    },
  ];

  const duas = [
    {
      title: "General Du&apos;aa",
      arabic:
        "Allaa-humma Innee Zalamtu Nafsee Zulman Kaseeran wa inna Laa Yaghfiruz-Zunooba Illaa Anta Faghfirlee Maghfiratam Min 'Indika Warhamnee Innaka Antal Ghafoorur Raheem.",
      translation:
        "O' Allah! I have oppressed my soul and undoubtedly there is no forgiver of sins except You. So Forgive me by clemency from Yourself, and have mercy on me. Undoubtedly, You are the Most Forgiving, the Most Merciful.",
    },
    {
      title: "Alternative Du&apos;aa",
      arabic:
        "Allaa-humma Rabbanaa Aatinaa Fid-Dunyaa Hasanah, wa Fil-Aakhirate Hasanah, wa Qinaa 'Azaaban-Naar.",
      translation:
        "O' Allah! Our Sovereign Lord, grant us good in this world and in the hereafter and protect us from the torment of hell.",
    },
    {
      title: "Du&apos;aa-E-QUNOOT",
      arabic:
        "Allaa-humma Innaa Nasta'eenuka wa Nastaghfiruka wa Nu'minu Bika wa Natawakkalu 'Alaieka wa Nusnee 'Alaiekal Khaier. Wa Nashkuruka walaa Nakfuruka wa Nakhla'u wa Natruku Maien Yafjuruk. Allaa-humma Ei-yaaka Na'budu wa Laka Nusallee wa Nasjudu wa Ilaieka Nas'aa wa Nah-fidu wa Narjoo Rahmataka wa Nakhshaa 'Azaabaka Inna 'Azaabaka Bil Kuffaare Mulhiq.",
      translation:
        "O Allah! We seek Your help and seek Your forgiveness - and we believe in You and rely on You - and we praise You with all goodness - and we are thankful to You and not ungrateful to You - and we separate from and forsake whoever offends You. O Allah! You alone we worship and for You only we offer the Prayer and the prostration. And towards You only do we rush, and present ourselves for service. And we hope for Your mercy and fear Your punishment. Indeed Your punishment will grasp the disbelievers.",
    },
  ];

  // Replace the existing faqs array with this updated version:
  const faqs = [
    {
      question:
        "What should one recite in case he has not learnt Du&apos;aa-e-Qunoot by heart?",
      answer:
        "He should recite \"Allaa-humma Rabbanaa Aatinaa Fid-Dunyaa Hasanah, wa Fil-Aakherate Hasanah, wa Qinaa 'Azaaban-Naar\" until he commits Du&apos;aa-e-Qunoot to his memory.",
    },
    {
      question:
        'What is the standing-upright posture after performance of "Rukoo" called?',
      answer: 'Standing straight after performing Rukoo is called "Qaumah".',
    },
    {
      question: 'What is "sitting posture between two prostrations" called?',
      answer:
        'A pause while sitting between two prostrations is called "Jalsah".',
    },
    {
      question: "What is the prayer offered in congregation called?",
      answer:
        'Prayer offered in congregation is called "Jama\'at". He who leads the prayer is called the "Imaam" and one who follows the Imaam in prayer is called a "Muqtadee".',
    },
    {
      question: "What is he who offers prayer by himself, called?",
      answer:
        'He who does not offer prayer in Jamaa\'at but offers by alone, is called "Mufrid".',
    },
    {
      question: "How much reward does one get by offering prayer in Jama'at?",
      answer:
        "Prayer in Jama'at carries 27 times more reward than offering it alone.",
    },
    {
      question:
        "Which supplications (Du&apos;aa) should be recited while entering and stepping out of mosque?",
      answer:
        'When one enters the mosque, he should put his right foot first and then the left - and recite: "Allaa-hummaf-tah Lee Abwaaba Rahmatik" (O\' Allah! Open the gates of Your mercy for me), and when he steps out he should take his left foot out first and then the right and recite: "Allaa-humma Innee As-aluka Min Fadlik" (O\' Allah! I beseech You for Your grace).',
    },
    {
      question: "What should we do in the mosque?",
      answer:
        "Having entered the mosque, softly say \"Salaam\" to those present there. Offer prayer with Jamaa'at. If there is no time of appointed prayer or you have offered prayer then busy yourself in recitation of the Holy Qur'an, remembrance of Allah, recitation of Kalemah or Durood Shareef. Do not indulge in worldly talks for it is strictly forbidden in the mosque. Do not pass in front of those who are offering prayer. Do not snap fingers.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-slate-900 mb-8">
          Words of Salaat (Prayer)
        </h1>

        {/* Main Prayer Content */}
        <div className="space-y-8">
          {/* Prayers Section */}
          <div className="grid gap-6">
            {prayers.map((prayer, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                    {prayer.title}
                  </h2>
                  <div className="space-y-4">
                    {prayer.arabicText && (
                      <p className="text-lg text-right font-arabic leading-relaxed text-emerald-800 whitespace-pre-line">
                        {prayer.arabicText}
                      </p>
                    )}
                    <p className="text-lg text-right font-arabic leading-relaxed text-emerald-800">
                      {prayer.arabic}
                    </p>
                    <p className="text-slate-600">{prayer.translation}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Du&apos;aa Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Supplications (Du&apos;aa)
            </h2>
            <div className="grid gap-6">
              {duas.map((dua, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-r from-emerald-50 to-teal-50"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">
                      {dua.title}
                    </h3>
                    <p className="text-right mb-2 text-emerald-800 font-arabic">
                      {dua.arabic}
                    </p>
                    <p className="text-slate-600">{dua.translation}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQs Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium text-slate-800 hover:text-emerald-700">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <PlantUMLDiagram
          code={`
            @startmindmap
<style>
mindmapDiagram {
 .recitations {
   BackgroundColor lightblue
 }
 .postures {
   BackgroundColor lightgreen
 }
 .congregational {
   BackgroundColor gold
 }
 .mosque {
   BackgroundColor pink
 }
 .dua {
   BackgroundColor violet
 }
}
</style>

* Words & Actions of Salaat

** Essential Recitations <<recitations>>
*** Opening Words
**** Sanaa
**** Ta'awuz 
**** Tasmiyah
*** Required Surahs
**** Surah Fatiha
**** Surah Ikhlaas
*** During Prayer
**** Tasmeey
**** Tahmeed
**** Tashah-hud
**** Durood-e-Ibraaheemi

** Prayer Postures <<postures>>
*** Qaumah
**** Standing after Rukoo
*** Jalsah
**** Sitting between prostrations

left side

** Congregational Prayer <<congregational>>
*** Jama'at
**** Led by Imam
**** Followed by Muqtadee
**** 27x more reward
*** Individual Prayer
**** Called Mufrid

** Mosque Etiquette <<mosque>>
*** Entering
**** Right foot first
**** Recite entry dua
*** Inside Behavior
**** Say soft Salam
**** No worldly talk
**** Don't cross others
**** Recite Quran/Dhikr
*** Exiting
**** Left foot first
**** Recite exit dua

** Special Duas <<dua>>
*** Du&apos;aa-e-Qunoot
**** Full version
**** Alternative version
*** Regular Duas
**** For forgiveness
**** For good in both worlds
@endmindmap
            `}
        />
      </div>
    </div>
  );
}
