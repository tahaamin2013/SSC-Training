import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PlantUMLDiagram from "@/components/PlantUMLDiagram";

export default function PrayerMethodPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">
          Method of Prayer
        </h1>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem
            value="perform-salaah"
            className="bg-white rounded-lg shadow-sm"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <h2 className="text-xl font-semibold text-slate-700">
                How to perform the salaah?
              </h2>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <div className="prose prose-slate max-w-none space-y-4">
                <p>
                  After performing wuduu&apos;, stand upright facing the Qiblah at a
                  clean place, dressed in neat and clean clothes.
                </p>

                <p>
                  Then say niyyah (intention), raise both hands up to the ears
                  and say Allaahu akbar, then cross them on the belly below the
                  navel.<sup>10</sup> Put the right hand on top of the left one.
                </p>

                <p>
                  Do not look hither and thither while saying prayers.
                  <sup>11</sup> Stand with respect and full attention to Allah.
                </p>

                <p>
                  After crossing the hands, recite thana, then ta-&apos;awwudh and
                  tasmiyah. Then recite al-Faatihah. After finishing alFaatihah,
                  say softly &quot;aameen.&quot; Then recite another surah that you know.
                </p>

                <p>
                  Then say Allaahu akbar and bow for ruku&apos;. In the ruku&apos;, catch
                  hold of the knees with your hands and say the tasbeeh for
                  ruku&apos; three or five times. Then, saying tasmee&apos;a stand upright
                  again and also say tahmeed.
                </p>

                <p>
                  Then, saying takbeer, prostrate for sajdah. Put your knees on
                  the ground first, then hands and then place your nose and then
                  forehead on the ground. Say tasbeeh of sajdah three or five
                  times. Then say takbeer and get up and sit upright. Sit for a
                  few moments and then say takbeer and perform the second sajdah
                  in the same way.
                </p>

                <p>
                  Then say the takbeer again and stand up without putting your
                  hands on the ground.
                </p>

                <p>
                  This is one complete rak&apos;ah and the next one begins. After
                  tasmiyah, recite al-Faatihah again and add another surah.
                </p>

                <p>
                  Then perform ruku&apos;, qaumah (standing up), and the two sajdah.
                  Get up and sit upright from the second sajdah and recite
                  tashah-hud, then darood shareef and du&apos;a and then perform the
                  salaam – first turning your face to the right and then towards
                  the left. Two rak&apos;aat have been completed.
                </p>

                <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                  <p className="text-sm text-slate-600">
                    <sup>10</sup> For women, they should cross their hands upon
                    their chest.
                    <br />
                    <sup>11</sup> Your eyes should be fixed upon the place where
                    your forehead touches during sajdah
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <Card className="bg-white">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-slate-700 mb-4">
                After the salaam, recite the du&apos;a:
              </h3>
              <div className="space-y-4">
                <div className="text-right">
                  <p className="text-xl mb-2 font-arabic">
                    اللَّهُمَّ أَنْتَ السَّلامُ وَ مِنْكَ السَّلامُ
                  </p>
                  <p className="text-xl font-arabic">
                    تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ
                  </p>
                </div>
                <p className="text-slate-600 italic">
                  Allaahum-ma an-tas-salaamu wa min-kas-salaamu, tabaarak-ta yaa
                  dhal-jalaali wal-ikraam
                </p>
                <p>
                  O Allah! You are the bestower of peace, and from You comes
                  peace. Blessed are You, O Lord of Glory and Honor.
                </p>

                <div className="mt-4 text-right">
                  <p className="text-xl mb-2 font-arabic">
                    رَبَّنَا اتنا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ
                  </p>
                  <p className="text-xl font-arabic">
                    حَسَنَةً وَقِنَا عَذَابَ النَّارِ
                  </p>
                </div>
                <p>
                  Our Lord! Grant us the good of this world and the good of the
                  Hereafter and save us from the torment of the hell-fire.
                  <sup>12</sup>
                </p>

                <p className="mt-4">
                  For du&apos;a, raise your hands up, but do not raise them too high.
                  They should not be above the shoulders. After finishing du&apos;a,
                  rub both hands over your face.
                </p>

                <div className="mt-2 text-sm text-slate-600">
                  <sup>12</sup> Surah 2, Ayaah 201
                </div>
              </div>
            </CardContent>
          </Card>

          <AccordionItem
            value="sitting-position"
            className="bg-white rounded-lg shadow-sm"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <h2 className="text-xl font-semibold text-slate-700">
                How to sit between the two sajdah, or when reciting tashah-hud?
              </h2>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p className="text-slate-600">
                Have your right foot upright with its toes facing qiblah and lay
                down the left foot and sit on it. Both the hands should rest on
                the knees while sitting so.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="differences"
            className="bg-white rounded-lg shadow-sm"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <h2 className="text-xl font-semibold text-slate-700">
                Is there any difference between the salaah of the imaam,
                munfarid or muqtadi?
              </h2>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <div className="prose prose-slate max-w-none space-y-4">
                <p>
                  Yes, there is a little difference. That is that the imaam and
                  munfarid recite thana, ta&apos;awwudh, tasmiyah and do qiraa&apos;at in
                  the first rak&apos;ah. In the second rak&apos;ah, they recite tasmiyah,
                  al-Faatihah and another surah.
                </p>

                <p>
                  But the muqtadi says only thana in the first rak&apos;ah and after
                  that he stands silent in all the rest.
                </p>

                <p>
                  Another difference is that after ruku&apos; the imaam and munfarid
                  say &quot;Sami &apos;al-laahu li man hamidah.&quot; While the munfarid can
                  also say the tahmeed as well, the muqtadi only says the
                  tahmeed.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="three-four-rakaat"
            className="bg-white rounded-lg shadow-sm"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <h2 className="text-xl font-semibold text-slate-700">
                How to offer salaah of 3 or 4 rak&apos;aat?
              </h2>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <div className="prose prose-slate max-w-none space-y-4">
                <p>
                  The first two rak&apos;aat should be said in the same way as
                  explained above. And in the qa&apos;ada (sitting), darood shareef
                  should not be recited after tashah-hud. Instead, stand up
                  saying takbeer.
                </p>

                <p>
                  If the salaah is waajib, sunnah or nafl then in the following
                  rak&apos;ah recite tasmiyah, al-Faatihah and another surah. If it
                  is a fard salaah, then in the third and fourth rak&apos;aat only
                  alFaatihah but not another surah should be recited.
                </p>

                <p>
                  Complete the three or four rak&apos;aat and then sit in the qa&apos;da
                  and recite tashah-hud, darood and du&apos;a and then say salaam,
                  ending the three or four rak&apos;aat.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="three-rakaat-sunnah"
            className="bg-white rounded-lg shadow-sm"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <h2 className="text-xl font-semibold text-slate-700">
                Can we say three rak&apos;aat of sunnah or nafl prayer?
              </h2>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p className="text-slate-600">
                No. Sunnah and nafl salaah are said in units of two or four
                rak&apos;aat, never three.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="correct-ruku"
            className="bg-white rounded-lg shadow-sm"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <h2 className="text-xl font-semibold text-slate-700">
                What is the correct way of doing ruku&apos;?
              </h2>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p className="text-slate-600">
                For ruku&apos;, the head and waist should be on the same level. The
                head should neither be higher nor lower than the waist-line and
                both the hands should be kept away from the ribs and the knees
                be held tightly.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="correct-sajdah"
            className="bg-white rounded-lg shadow-sm"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <h2 className="text-xl font-semibold text-slate-700">
                What is the correct way of doing sajdah?
              </h2>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p className="text-slate-600">
                Sajdah should be done in such a way that the palms rest on the
                ground, the wrist and elbows are raised from the ground. The
                abdomen should not touch the thighs. The hands should be kept
                away from the ribs also.
              </p>
            </AccordionContent>
          </AccordionItem>

          <Card className="bg-white">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-slate-700 mb-4">
                What is counted on the fingers after saying the prayers?
              </h3>
              <div className="space-y-2">
                <p className="text-slate-600">
                  <span className="font-semibold">Subhaanallaah</span> 33 times
                </p>
                <p className="text-slate-600">
                  <span className="font-semibold">Al-hamdu lil-laah</span> 33
                  times
                </p>
                <p className="text-slate-600">
                  <span className="font-semibold">Allaahu akbar</span> 34 times
                </p>
                <p className="text-slate-600 italic mt-4">
                  There is great reward in doing so.
                </p>
              </div>
            </CardContent>
          </Card>
        </Accordion>
      </div>
      <PlantUMLDiagram
        code={`
          @startmindmap
*[#LightBlue] Method of Prayer
** Steps
*** Standing Position
**** Face Qiblah
**** Clean clothes
**** Niyyah (intention)
**** Raise hands to ears
**** Say "Allaahu akbar"
**** Cross hands below navel
***** Right hand on top of left
***** Women: Cross on chest
*** First Rak'ah
**** Recitations
***** Thana
***** Ta-'awwudh
***** Tasmiyah
***** Al-Faatihah
***** Say "Aameen"
***** Another surah
**** Ruku' (Bowing)
***** Say "Allaahu akbar"
***** Hold knees
***** Say tasbeeh 3-5 times
***** Rise saying tasmee'a
**** Sajdah (Prostration)
***** Two prostrations
***** Sequence
****** Knees first
****** Hands
****** Nose
****** Forehead
***** Say tasbeeh 3-5 times
*** Second Rak'ah
**** Similar to first
**** End with
***** Tashah-hud
***** Darood shareef
***** Du'a
***** Salaam (right & left)
left side
** Special Rules
*** 3-4 Rak'aat Prayer
**** First two like normal
**** Third/Fourth
***** Fard: Only Al-Faatihah
***** Other: Al-Faatihah + Surah
*** Sunnah/Nafl
**** Only 2 or 4 rak'aat
**** Never 3 rak'aat
** Post-Prayer
***[#Pink] Counting on Fingers
**** Subhaanallaah (33x)
**** Al-hamdu lil-laah (33x)
**** Allaahu akbar (34x)
** Proper Positions
***[#LightGreen] Ruku'
**** Head & waist level
**** Hands away from ribs
**** Hold knees tightly
***[#LightGreen] Sajdah
**** Palms on ground
**** Wrists/elbows raised
**** Abdomen not touching thighs
**** Hands away from ribs
@endmindmap
          `}
      />
    </div>
  );
}
