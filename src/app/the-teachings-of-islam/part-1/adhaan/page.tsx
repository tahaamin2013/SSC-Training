// app/page.tsx
import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Adhaan() {
  return (
    <div className={`min-h-screen bg-gray-50 ${poppins.className}`}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-emerald-800 mb-8 text-center">
          Adhaan
        </h1>

        <section className="space-y-8">
          {/* Adhaan Section */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">
              Q. What is Adhaan (call for prayer)?
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                When the time for salaah comes, a man stands up before the
                prayer and calls aloud these words:
              </p>

              <div className="space-y-6">
                <div className="flex flex-col">
                  <span className="text-xl text-gray-800 font-arabic mb-1 text-right">
                    اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ اللَّهُ
                    أَكْبَرُ
                  </span>
                  <span className="text-emerald-600 italic">
                    Allaahu akbar – Allah is the Greatest (4 times)
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xl text-gray-800 font-arabic mb-1 text-right">
                    أَشْهَدُ أَنْ لاَ إِلَٰهَ إِلَّا اللهُ
                  </span>
                  <span className="text-emerald-600 italic">
                    Ash-hadu an-laa ilaaha il-lal-laah – I bear witness that
                    there is no god except Allah (2 times)
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xl text-gray-800 font-arabic mb-1 text-right">
                    أَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللهِ
                  </span>
                  <span className="text-emerald-600 italic">
                    Ash-hadu an-na Muhammadan-rasool-ul-laah – I declare that
                    Muhammad is Allah&apos;s Messenger (2 times)
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xl text-gray-800 font-arabic mb-1 text-right">
                    حَيَّ عَلَى الصَّلَاةِ
                  </span>
                  <span className="text-emerald-600 italic">
                    Hay-ya &apos;alas-salaah – Come for salaah (2 times, turning
                    the head to the right both times)
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xl text-gray-800 font-arabic mb-1 text-right">
                    حَيَّ عَلَى الْفَلَاحِ
                  </span>
                  <span className="text-emerald-600 italic">
                    Hay-ya &apos;alal-falaah – Come to success (2 times, turning
                    the head to the left both times)
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xl text-gray-800 font-arabic mb-1 text-right">
                    اللهُ أَكْبَرُ اللهُ أَكْبَرُ
                  </span>
                  <span className="text-emerald-600 italic">
                    Allaahu akbar – Allah is the Greatest (2 times)
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xl text-gray-800 font-arabic mb-1 text-right">
                    لاَ إِلَٰهَ إِلَّا اللهُ
                  </span>
                  <span className="text-emerald-600 italic">
                    Laa ilaaha il-lal-laah – There is no god except Allah
                  </span>
                </div>
              </div>

              <div className="mt-6 bg-emerald-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  These words are called adhaan. In the adhaan of Fajr after
                  Hay-ya &apos;alal-falaah, say 2 times:
                </p>
                <div className="flex flex-col mt-3">
                  <span className="text-xl text-gray-800 font-arabic mb-1 text-right">
                    الصَّلاَةُ خَيْرٌ مِّنَ النَّوْمِ
                  </span>
                  <span className="text-emerald-600 italic">
                    As-salaatu khairum-minan-naum – Prayer is better than sleep
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Iqaamah Section */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">
              Q. What is iqaamah or takbeer (magnification of the Lord)?
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                When people stand up for salaah, a person repeats the words of
                adhaan, this is called iqaamah or takbeer. The words of adhaan
                are repeated exactly the same in iqaamah but, after hay-ya
                &apos;alal-falaah, one says 2 times:
              </p>
              <div className="flex flex-col">
                <span className="text-xl text-gray-800 font-arabic mb-1 text-right">
                  قَدْ قَامَتِ الصَّلَاةُ
                </span>
                <span className="text-emerald-600 italic">
                  Qad qaamatis-salaah – The prayer is ready
                </span>
              </div>
            </div>
          </div>

          {/* Terminology Section */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-emerald-700 mb-4">
                  Q. What name is given to the person who recites adhaan or
                  takbeer?
                </h2>
                <p className="text-gray-700">
                  The person who recites adhaan is called mu-adh-dhin, and the
                  one who recites takbeer is called mukab-bir.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-emerald-700 mb-4">
                  Q. When many people assemble and say salaah together, what do
                  we call it?
                </h2>
                <p className="text-gray-700">
                  Salaah which is offered not individually but along with other
                  people is called salaah bil-jamaa&apos;ah (namaaz ba
                  jamaa&apos;at or &quot;prayer in congregation&quot;). The
                  person who leads the jamaa&apos;ah is called the imaam. A
                  person who says salaah behind the imaam is known as a muqtadi.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-emerald-700 mb-4">
                  Q. What is the person called who says salaah alone?
                </h2>
                <p className="text-gray-700">
                  He is called munfarid (&quot;solitary&quot; or
                  &quot;isolated&quot;).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-emerald-700 mb-4">
                  Q. What is the house called that is specially built for
                  salaah?
                </h2>
                <p className="text-gray-700">
                  Such a place is called a masjid (mosque).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-emerald-700 mb-4">
                  Q. What should one do in a masjid?
                </h2>
                <p className="text-gray-700">
                  One should offer salaah, read the Holy Qur&apos;aan or
                  wazeefa, or sit silently and respectfully. It is very bad to
                  play, jump, make noise, or talk of worldly affairs in a
                  masjid.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">
              Q. What are the benefits of salaah?
            </h2>
            <div className="space-y-2">
              <p className="text-gray-700 mb-4">
                There are many benefits. Here are some of them:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  The body and clothes of a namaazi (musalli or one who prays
                  salaah) are always neat and clean.
                </li>
                <li>
                  Allah, the Almighty, is pleased with one who says salaah.
                </li>
                <li>Prophet Muhammad (ﷺ) is pleased with a musalli.</li>
                <li>Allah, the Almighty, favors those who pray salaah.</li>
                <li>Good men hold a musalli in high esteem.</li>
                <li>A musalli is saved from many evil deeds.</li>
                <li>
                  Allah, the Almighty, keeps a musalli in peace and comfort
                  after his death.
                </li>
              </ul>
            </div>
          </div>

          {/* Expressions Section */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">
              Q. What are the names of the expressions or phrases said in
              salaah?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {expressions.map((expression, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-emerald-600">{expression.name} –</span>
                  <span className="font-arabic">{expression.arabic}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 max-w-full text-center">
            <h1 className="text-xl font-bold text-gray-800 mb-4">
              Q. What are the wordings of the above-mentioned expressions?
              Please recite a few surahs as well.
            </h1>
            <p className="text-lg font-semibold text-gray-700">
              A. The wordings of the expressions are:
            </p>
            <div className="mt-4 p-4 bg-gray-200 rounded-lg">
              <h2 className="text-lg font-bold text-gray-800">Takbeer:</h2>
              <p className="text-2xl font-arabic mt-2">اللهُ أَكْبَرُ</p>
              <p className="text-lg text-gray-700">Allaahu Akbar</p>
              <p className="text-lg text-gray-700">Allah is the Greatest</p>
            </div>
          </div>

          {/* Du&apos;a Section */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            {/* <h2 className="text-xl font-semibold text-emerald-700 mb-4">
              Various Du&apos;as and Expressions:
            </h2> */}

            {duas.map((dua, index) => (
              <div key={index} className="mb-8 space-y-4">
                <h3 className="text-lg font-medium text-emerald-600">
                  {dua.title}
                </h3>
                <div className="text-right">
                  <p className="text-2xl font-arabic mb-2">{dua.arabic}</p>
                  <p className="text-emerald-600 italic">
                    {dua.transliteration}
                  </p>
                  <p className="text-gray-700 text-left mt-2">
                    {dua.translation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <PlantUMLDiagram
          code={`
@startmindmap
skinparam backgroundColor #EEEEEE

<style>
mindmapDiagram {
    .prayer {
        BackgroundColor #E1F5FE
    }
    .adhaan {
        BackgroundColor #FFE0B2
    }
    .people {
        BackgroundColor #C8E6C9
    }
    .place {
        BackgroundColor #F8BBD0
    }
    .benefits {
        BackgroundColor #D1C4E9
    }
    .expressions {
        BackgroundColor #B2EBF2
    }
    .duas {
        BackgroundColor #FFCCBC
    }
    .types {
        BackgroundColor #F0F4C3
    }
}
</style>

* Prayer (Salaah) <<prayer>>
** Adhaan (Call for Prayer) <<adhaan>>
*** Words of Adhaan
**** Allaahu akbar (4 times)
**** Ash-hadu an-laa ilaaha il-lal-laah (2 times)
**** Ash-hadu an-na Muhammadan-rasool-ul-laah (2 times)
**** Hay-ya 'alas-salaah (2 times)
**** Hay-ya 'alal-falaah (2 times)
**** Allaahu akbar (2 times)
**** Laa ilaaha il-lal-laah
*** Special Fajr Addition
**** As-salaatu khairum-minan-naum (2 times)

** People <<people>>
*** Mu-adh-dhin (Person who recites Adhaan)
*** Mukab-bir (Person who recites Takbeer)
*** Imaam (Prayer leader)
*** Muqtadi (Person praying behind Imaam)
*** Munfarid (Person praying alone)

** Place of Prayer <<place>>
*** Masjid (Mosque)
**** Proper Conduct
***** Offer salaah
***** Read Holy Qur'aan
***** Read wazeefa
***** Sit silently and respectfully
***** Avoid
****** Playing
****** Jumping
****** Making noise
****** Worldly talk

** Benefits of Salaah <<benefits>>
*** Clean body and clothes
*** Allah's pleasure
*** Prophet's pleasure
*** Allah's favor
*** Respect from good people
*** Protection from evil
*** Peace after death

left side
** Special Du'as <<duas>>
*** Du'a for Parents
*** Du'a after prayers
*** Du'a Qunoot

** Prayer Types <<types>>
*** Salaah bil-jamaa'ah (Congregational)
*** Individual Prayer

** Prayer Expressions <<expressions>>
*** Takbeer
*** Thana
*** Ta-'aw-wudh
*** Tasmiyah
*** Qiraa'at
**** Suratil-Faatihah
**** Suratul-Kauthar
**** Suratul-Ikhlaas
**** Suratul-Falaq
**** Suratum-Naas
*** Tas-beeh of ruku'
*** Tas-mee'a of ruku'
*** Tah-meed of ruku'
*** Tasbeeh of sajdah
*** Tashah-hud
*** Darood
*** Du'a after darood
*** Salaam
@endmindmap
          `}
        />
      </div>
    </div>
  );
}

const expressions = [
  { name: "Takbeer", arabic: "تَكْبِير" },
  { name: "Thana", arabic: "ثَنَاء" },
  { name: "Ta-'aw-wudh", arabic: "تَعَوُّذ" },
  { name: "Tasmiyah", arabic: "تَسْمِيَة" },
  { name: "Qiraa'at", arabic: "قِرَاءَة" },
  { name: "Tas-beeh of ruku'", arabic: "تَسْبِيْح" },
  { name: "Tas-mee'a of ruku'", arabic: "سَمِعَ اللّهُ لِمَنْ حَمِدَهُ" },
  { name: "Tah-meed of ruku'", arabic: "تَحْمِيْد" },
  { name: "Tasbeeh of sajdah", arabic: "سُبْحَانَ رَبِّيَ الأَعْلَى" },
  { name: "Tashah-hud", arabic: "تَشَهُّد" },
  { name: "Darood", arabic: "دَرُود" },
  { name: "Du'a after darood", arabic: "دُعَاء" },
  { name: "Salaam", arabic: "سَلَام" },
];

const duas = [
  {
    title: "Thana",
    arabic:
      "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ",
    transliteration:
      "Subhaanakal-laahum-ma wa bi hamdika wa tabaarakas-muka wa ta'aalaa jad-duka wa laa ilaaha ghayruk",
    translation:
      "O Allah! Glory and Praise are for You, and blessed is Your name, and exalted is Your majesty; and there is no god except You.",
  },
  {
    title: "Ta-'awwudh",
    arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    transliteration: "A'oodhu bil-laahi minash-shaitaanir-rajeem",
    translation: "I seek refuge with Allah from the condemned Shaitaan.",
  },
  {
    title: "Tasmiyah",
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    transliteration: "Bismillaahir-rahmaanir-raheem",
    translation: "In the name of Allah, Most Gracious, Most Merciful.",
  },
  // Add these entries to your duas array
  {
    title: "Qiraa'at - Suratil-Faatihah",
    arabic:
      "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿١﴾ الرَّحْمَٰنِ الرَّحِيمِ ﴿٢﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٣﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٤﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿٥﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٦﴾",
    transliteration:
      "Al-hamdu lil-laahi rabbil-'aalameen. Ar-rahmaanir-raheem. Maaliki yawmid-deen. Iyyaaka na'budu wa iyyaaka nasta'een. Ihdinas-siraatal-mustaqeem. Siraatal-ladheena an'amta 'alaihim ghairil-maghdoobi 'alaihim wa lad-daal-leen.",
    translation:
      "All praise is for Allah, the Sustainer of the worlds; Most Gracious, Most Merciful; Master of the Day of Judgment. Thee do we worship and Thee alone do we ask for help. Guide us to the straight way – the way of those upon whom Thou has bestowed Thy blessing; not those who earn Thy anger nor those who go astray.",
  },
  {
    title: "Qiraa'at - Suratul-Kauthar",
    arabic:
      "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ ﴿١﴾ فَصَلِّ لِرَبِّكَ وَانْحَرْ ﴿٢﴾ إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ ﴿٣﴾",
    transliteration:
      "Innaa a'tainaakal-kauthar. Fasalli li-rabbika wanhar. Inna shaani'aka huwal-abtar.",
    translation:
      "Lo! We have given you Abundance. So pray unto your Lord and sacrifice. Lo! It is your insulter who is without posterity.",
  },
  {
    title: "Qiraa'at - Suratul-Ikhlaas",
    arabic:
      "قُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾ اللَّهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ﴿٤﴾",
    transliteration:
      "Qul huwal-laahu ahad. Allaahus-samad. Lam yalid wa lam yoolad. Wa lam yakul-lahu kufuwan ahad.",
    translation:
      "Say: He is Allah, the One! Allah, the eternally Besought of all! He begets not nor was He begotten. And there is none comparable to Him.",
  },
  {
    title: "Qiraa'at - Suratul-Falaq",
    arabic:
      "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴿١﴾ مِن شَرِّ مَا خَلَقَ ﴿٢﴾ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ﴿٣﴾ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ﴿٤﴾ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿٥﴾",
    transliteration:
      "Qul a'oodhu bi-rabbil-falaq. Min sharri maa khalaq. Wa min sharri ghaasiqin idhaa waqab. Wa min sharrin-naffaathaati fil-'uqad. Wa min sharri haasidin idhaa hasad.",
    translation:
      "Say: I seek refuge in the Lord of the Daybreak. From the evil of that which He created; From the evil of the darkness when it is intense, and from the evil of malignant witchcraft, and from the evil of the envier when he envies.",
  },
  {
    title: "Qiraa'at - Suratum-Naas",
    arabic:
      "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ﴿١﴾ مَلِكِ النَّاسِ ﴿٢﴾ إِلَٰهِ النَّاسِ ﴿٣﴾ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ﴿٤﴾ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ﴿٥﴾ مِنَ الْجِنَّةِ وَالنَّاسِ ﴿٦﴾",
    transliteration:
      "Qul a'oodhu bi-rabbin-naas. Malikin-naas. Ilaahin-naas. Min sharril-waswaasil-khannaas. Alladhee yuwaswisu fee sudoorin-naas. Minal-jinnati wan-naas.",
    translation:
      "Say: I seek refuge in the Lord of mankind, the King of mankind, the God of mankind, from the evil of the sneaking whisperer, who whispers in the hearts of mankind – of the jinn and mankind.",
  },
  {
    title: "Tasbeeh of ruku'",
    arabic: "سُبْحَانَ رَبِّىَ ٱلْعَظِيمِ",
    transliteration: "Subhaana rab-biyal-'azeem",
    translation: "Glory be to my Lord, the Great.",
  },
  {
    title: "Tasmee'a of ruku'",
    arabic: "سَمِعَ ٱللَّهُ لِمَنْ حَمِدَهُ",
    transliteration: "Sami'al-laahu li man hamidah",
    translation: "Allah hears the one who praises Him.",
  },
  {
    title: "Tahmeed of ruku'",
    arabic: "رَبَّنَا لَكَ ٱلْحَمْدُ",
    transliteration: "Rab-banaa lakal-hamd",
    translation: "Our Lord, praise be to You.",
  },
  {
    title: "Tasbeeh of sajdah",
    arabic: "سُبْحَانَ رَبِّىَ ٱلْأَعْلَىٰ",
    transliteration: "Subhaana rab-biyal-a'laa",
    translation: "Glory be to my Lord, the Highest.",
  },
  {
    title: "Tashahhud",
    arabic:
      "ٱلتَّحِيَّاتُ لِلَّـهِ وَٱلصَّلَوَاتُ وَٱلطَّيِّبَاتُ ٱلسَّلَامُ عَلَيْكَ أَيُّهَا ٱلنَّبِيُّ وَرَحْمَةُ ٱللَّـهِ وَبَرَكَاتُهُ ٱلسَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ ٱللَّـهِ ٱلصَّالِحِينَ أَشْهَدُ أَنْ لَا إِلَـٰهَ إِلَّا ٱللَّـهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    transliteration:
      "At-tahiyyaatu lil-laahi was-salawaatu wat-tayyibaatu. As-salaamu 'alaika ayyuhan-nabiyyu wa rahmatul-laahi wa barakaatuh. As-salaamu 'alainaa wa 'alaa 'ibaadil-laahis-saaliheen. Ash-hadu an laa ilaaha il-lal-laahu wa ash-hadu an-na Muhammadan 'abduhu wa rasooluh.",
    translation:
      "All prayer is for Allah and worship and goodness. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no god except Allah, and I bear witness that Muhammad is His servant and messenger.",
  },
  {
    title: "Darood Shareef",
    arabic:
      "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ اللَّهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    transliteration:
      "Allaahum-ma salli 'alaa Muhammadi(n)w-wa 'alaa aali Muhammadin kamaa sal-lay-ta 'alaa Ibraaheema wa 'alaa aali Ibraaheema in-naka hameedum-majeed. Allaahum-ma baarik 'alaa Muhammadi(n)w-wa 'alaa aali Muhammadin kamaa baarakta 'alaa Ibraaheema wa 'alaa aali Ibraaheema in-naka hameedum-majeed.",
    translation:
      "O Allah, let Your blessing come upon Muhammad and the family of Muhammad as You blessed Ibrahim and his family. Truly You are the Praiseworthy, the Glorious. O Allah, bless Muhammad and the family of Muhammad as You blessed Ibrahim and his family. Truly You are the Praiseworthy, the Glorious.",
  },
  {
    title: "Du'a after Darood",
    arabic:
      "اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا وَلاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ",
    transliteration:
      "Allaahum-ma in-ni zalamtu nafsi zulman katheera(n)w-wa laa yaghfirudh-dhunooba il-laa an-ta faghfir-lee maghfiratan-min 'indika war-ham-niy in-naka antal-ghafooru-raheem.",
    translation:
      "O Allah! I have been unjust to myself and no one grants pardon for sins except You. Therefore, forgive me with Your forgiveness and have mercy on me. Surely, You are the Forgiver, the Merciful.",
  },
  {
    title: "Du'a for Parents",
    arabic:
      "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلاَةِ وَمِنْ ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
    transliteration:
      "Rabbij-'alniy muqeemaṣ-ṣalaati wa min dhurriyyatiy rabbanaa wa taqabbal Du&apos;aa'. Rabbanaa ighfir-lee wa li-waalidayya wa lil-mu'mineena yawma yaqoomul-hisaab.",
    translation:
      "O Lord! Make me and my children steadfast in salah. Our Lord! Accept the prayer. Our Lord! Forgive me and my parents and the believers on the Day of Judgement.",
  },
  {
    title: "Salaam",
    arabic: "ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّهِ",
    transliteration: "As-salaamu 'alaikum wa rahmatul-laah",
    translation: "Peace and blessings of Allah be upon you.",
  },
  {
    title: "Du'a after prayers",
    arabic:
      "اللَّهُمَّ أَنْتَ السَّلامُ وَمِنْكَ السَّلامُ تَبَارَكْتَ يَا ذَا الْجَلالِ وَالإِكْرَامِ",
    transliteration:
      "Allaahum-ma an-tas-salaamu wa min-kas-salaamu, tabarak-ta yaa dhal-jalaali wal-ikraam",
    translation:
      "O Allah! We ask Thy help and ask for Thy pardon and believe in Thee and rely upon Thee. And we praise Thee in the best way and we thank Thee and we are not ungrateful to Thee. And we cast off and leave one who disobeys Thee. O Allah! Thee alone we worship and to Thee do we pray and prostrate. And to Thee to we turn in haste. And we hope for Thy blessings and fear Thy punishment. Truly Thy punishment is for the disbelievers unavoidable.",
  },
  {
    title: "Du'a Qunoot",
    arabic:
      "ٱللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنُؤْمِنُ بِكَ وَنَتَوَكَّلُ عَلَيْكَ وَنُثْنِي عَلَيْكَ ٱلْخَيْرَ وَنَشْكُرُكَ وَلَا نَكْفُرُكَ وَنَخْلَعُ وَنَتْرُكُ مَن يَفْجُرُكَ ٱللَّهُمَّ إِيَّاكَ نَعْبُدُ وَلَكَ نُصَلِّي وَنَسْجُدُ وَإِلَيْكَ نَسْعَىٰ وَنَحْفِدُ وَنَرْجُو رَحْمَتَكَ وَنَخْشَىٰ عَذَابَكَ إِنَّ عَذَابَكَ بِٱلْكُفَّارِ مُلْحِقٌ",
    transliteration:
      "Allaahum-ma in-naa nasta'eenuka wa nastaghfiruka wa nu'minu bika wa natawak-kalu 'alaika wa nuthni 'alaikal-khair wa nashkuruka wa laa nakfuruka wa nakhla'u wa nat-ruku ma(n)-yafjuruk. Allaahum-ma iy-yaaka na'budu wa laka nusall-i wa nasjudu wa ilaika nas'aa wa nahfidu wa narju rahmataka wa nakhshaa 'adhaabaka, in-na 'adhaabaka bil-kuffaari mul-hiq.",
    translation:
      "O Allah! We ask Your assistance and seek Your forgiveness and believe in Thee and rely upon Thee. And we praise Thee in the best way and we thank Thee and we are not ungrateful to Thee. And we cast off and leave one who disobeys Thee. O Allah! Thee alone we worship and to Thee do we pray and prostrate ourselves. To Thee do we turn in haste and hope for Thy mercy, and we fear Thy chastisement. Surely, Thy chastisement overtakes the unbelievers.",
  },
];
