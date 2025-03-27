"use client";

import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import { Card, CardContent } from "@/components/ui/card";

const SupplicationsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-8">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        {/* Page Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-primary tracking-wide drop-shadow-lg">
            Daily Supplications
          </h1>
          <p className="text-lg text-muted-foreground">
            A collection of beneficial supplications for daily life
          </p>
        </div>

        {/* Supplication Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {supplications.map((supplication, index) => (
            <Card
              key={index}
              className="shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <CardContent className="p-6 space-y-3">
                <h3 className="font-semibold text-lg text-primary">
                  {supplication.title}
                </h3>
                {supplication.arabic && (
                  <p className="text-2xl text-right font-arabic leading-loose text-primary">
                    {supplication.arabic}
                  </p>
                )}
                {supplication.transliteration && (
                  <p className="text-sm font-medium text-primary/80 italic">
                    {supplication.transliteration}
                  </p>
                )}
                <p className="text-sm text-muted-foreground">
                  {supplication.translation}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <PlantUMLDiagram
        code={`
        @startmindmap
*[#3498DB] Daily Supplications
 *[#F1C40F] On getting up from sleep
  *[#2ECC71] Arabic: اْلحَْمُد ِؕ لِِٰؕ اَّلذٰي أَحْيَاَنا َبعَْد ِؕ َما أََماَتنَا وَإَٰليْه ِٰؕ النُّشُور ُِؕ
  *[#2ECC71] Transliteration: Al-Hamdu Lil-Laahil Lazee Ahyaanaa Ba'da Maaa Amaatanaa wa Ilaie-hin Nushoor
  *[#2ECC71] Meaning: All praise is for Allah Who has given us life after our death and towards Him is the return.

 *[#F1C40F] On applying antimony (surma) to eyes
  *[#2ECC71] Arabic: اَللّٰهُمَّ مَتِّعْنِيْ بِالسَّمْعِ وَالْبَصَرِ
  *[#2ECC71] Transliteration: Allaa-humma Mat-ti'nee Bis-Sam'i wal Basar
  *[#2ECC71] Meaning: O Allah! Grant me the usage of hearing and sight.

 *[#F1C40F] Repeat Kalemah Tayyib or Kalemah Shahaadat
  *[#2ECC71] Meaning: Repeat Kalemah Tayyib or Kalemah Shahaadat after every prayer, it will earn you a great reward.

 *[#F1C40F] If you like or love anything
  *[#2ECC71] Meaning: If you like or love anything of your own or of your Muslim brother say 'TabaarakalLaahu Ahsanul Khaaleqeen. Allaa-humma Baarik Lahu Feehi wa Laa Tadurrah'.

 *[#F1C40F] Recite this Du&apos;aa on seeing a thing
  *[#2ECC71] Meaning: Recite this Du&apos;aa on seeing a thing which you dislike: 'Allaa-humma Laa Ya'til-Hasanaati Illaa Anta wa Laa Yadfa'us Saie-ati Illaa Anta wa Laa Haula wa Laa Quwwata Illaa BilLaah'.

 *[#F1C40F] Recite this Du&apos;aa when you see one in affliction or illness
  *[#2ECC71] Arabic: الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي مِمَّا ابْتَلَاكَ بِهِ وَفَضَّلَنِي عَلَى كَثِيرٍ مِمَّنْ خَلَقَ تَفْضِيلًا
  *[#2ECC71] Transliteration: Al-Hamdu Lil-Laahil Lazee 'Aafaanee Mimmabtalaaka Bihee wa Faddalanee 'Alaa Kaseerim Mimman Khalaqa Tafdeelaa
  *[#2ECC71] Meaning: All praise is due to Allah Who has saved me from the affliction which you are faced with and has favoured me over many of His creatures.
@endmindmap

        `}
      />
    </div>
  );
};

const supplications = [
  {
    title: "On getting up from sleep",
    arabic:
      "اْلحَْمُد ِؕ لِِٰؕ اَّلذٰي أَحْيَاَنا َبعَْد ِؕ َما أََماَتنَا وَإَٰليْه ِٰؕ النُّشُور ُِؕ",
    transliteration:
      "Al-Hamdu Lil-Laahil Lazee Ahyaanaa Ba'da Maaa Amaatanaa wa Ilaie-hin Nushoor",
    translation:
      "All praise is for Allah Who has given us life after our death and towards Him is the return.",
  },
  {
    title: "On applying antimony (surma) to eyes",
    arabic: "اَللّٰهُمَّ مَتِّعْنِيْ بِالسَّمْعِ وَالْبَصَرِ",
    transliteration: "Allaa-humma Mat-ti'nee Bis-Sam'i wal Basar",
    translation: "O Allah! Grant me the usage of hearing and sight.",
  },
  {
    title: "Repeat Kalemah Tayyib or Kalemah Shahaadat",
    translation:
      "Repeat Kalemah Tayyib or Kalemah Shahaadat after every prayer, it will earn you a great reward.",
  },
  {
    title: "If you like or love anything",
    translation:
      "If you like or love anything of your own or of your Muslim brother say 'TabaarakalLaahu Ahsanul Khaaleqeen. Allaa-humma Baarik Lahu Feehi wa Laa Tadurrah'.",
  },
  {
    title: "Recite this Du&apos;aa on seeing a thing",
    translation:
      "Recite this Du&apos;aa on seeing a thing which you dislike: 'Allaa-humma Laa Ya'til-Hasanaati Illaa Anta wa Laa Yadfa'us Saie-ati Illaa Anta wa Laa Haula wa Laa Quwwata Illaa BilLaah'.",
  },
  {
    title: "Recite this Du&apos;aa when you see one in affliction or illness",
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي مِمَّا ابْتَلَاكَ بِهِ وَفَضَّلَنِي عَلَى كَثِيرٍ مِمَّنْ خَلَقَ تَفْضِيلًا",
    transliteration:
      "Al-Hamdu Lil-Laahil Lazee 'Aafaanee Mimmabtalaaka Bihee wa Faddalanee 'Alaa Kaseerim Mimman Khalaqa Tafdeelaa",
    translation:
      "All praise is due to Allah Who has saved me from the affliction which you are faced with and has favoured me over many of His creatures.",
  },
];

export default SupplicationsPage;
