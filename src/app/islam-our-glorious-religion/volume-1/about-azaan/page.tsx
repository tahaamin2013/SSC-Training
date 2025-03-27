import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const AzaanInfo = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 to-green-500 p-6">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-4xl w-full text-gray-800">
        <h1 className="text-3xl font-extrabold text-center mb-6 border-b-4 pb-3 border-green-500 uppercase">
          ABOUT AZAAN (CALL TO PRAYER)
        </h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Q1: What is Azaan?</h2>
            <p className="text-gray-700">
              A particular proclamation to call all Muslims to mosque for
              offering prayer is called the Azaan.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Q2: Are there some specified words of Azaan?
            </h2>
            <p className="text-gray-700">
              Yes, there are specified words of Azaan:
            </p>
            <div className="p-4 bg-gray-100 rounded-md text-center font-semibold text-lg">
              <p>
                اللهُ أَكْبَرُ اللهُ اكْبَرُ اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ
                أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ ، أَشْهَدُ أَنْ لَا إِلَهَ
                إِلَّا اللهُ اشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ أَشْهَدُ
                أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ حَى عَلَى الصلوة ، حَيَّ عَلَى
                الصلوة حَى عَلَى الْفَلَاحِ ، حَيَّ عَلَى الْفَلَاحِ ، اللهُ
                أَكْبَرُ الله اكبر لا اله إلا الله
              </p>
            </div>
          </div>

          <p>
            Allaho Akbar. Allaho Akbar. Allaho Akbar. Allaho Akbar. Ash-hadu
            Allaaa Ilaaha IllalLaah. Ash-hadu Allaaa Ilaaha IllalLaah. Ash-hadu
            Anna Mohammedar Rasoolul Laah. Ash-hadu Anna Mohammedar Rasoolul
            Laah. Ash-hadu Anna Mohammedar Rasoolul Laah. Haiey-ya
            &apos;Alas-Salaah.Haiey-ya &apos;Alas-Salaah. Haiey-ya &apos;Alal Falaah. Haiey-ya
            &apos;Alal Falaah. Allaho Akbar,Allaho Akbar. Laa Ilaaha IllalLaah.
          </p>

          <div>
            <h2 className="text-2xl font-bold">
              Q3: Are the same words repeated in every Azaan?
            </h2>
            <p className="text-gray-700">
              Yes, except for Fajr Azaan where the words &quot;asSalaatu Khaierum
              Minan Naum&quot; (prayer is better than sleep) are added.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Q4: How should one proclaim the Azaan?
            </h2>
            <p className="text-gray-700">
              One should stand in ablution, face the Qibla, place index fingers
              in ears, and proclaim loudly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Q5: What is the proclaimer of Azaan called?
            </h2>
            <p className="text-gray-700">
              The one who proclaims Azaan is called a Mu&apos;azzin.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Q6: What should one do on hearing Azaan?
            </h2>
            <p className="text-gray-700">
              One should stop all work, listen attentively, and respond
              accordingly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Q7: What should one say in response to Azaan?
            </h2>
            <p className="text-gray-700">
              Repeat the Mu&apos;azzin&apos;s words except for &quot;Haie-ya &apos;AlasSalaah&quot; and
              &quot;Haie-ya &apos;Alal-Falaa&quot;, where one should say &quot;Laa Haula wa-Laa
              Quwwata Illaa Billaah&quot;.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Q8: What should a believer do on hearing the Prophet&apos;s name in
              Azaan?
            </h2>
            <p className="text-gray-700">
              Invoke blessings upon the Prophet and say &quot;Qurratu &apos;Aienee Beka
              Yaa Rasoolal Laah...&quot; while kissing the thumbs and touching the
              eyes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Q9: What should be recited on hearing &quot;As-Salaatu Khaierum Minan
              Naum&quot;?
            </h2>
            <p className="text-gray-700">
              Say &quot;Sadaqta wa-Bararta wa-Bil-haqi Nataqta&quot;.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Q10: Which Du&apos;aa is made after Azaan?
            </h2>
            <p className="text-gray-700">Recite Durood Sharif followed by:</p>
            <div className="p-4 bg-gray-100 rounded-md text-center font-semibold text-lg">
              <p>
                Allaa-humma Rabba Haazihid-Da&apos;watit-Taaammati was-Salaatil
                Qaa-imati Aati Saiey-yidinaa Mohammeda nil-Waseelata
                wal-Fadeelata wad-Darajatar Rafee&apos;ata wab-As-hu MaqaamamMahmooda
                nil-Lazee wa&apos;Attahu waj&apos;alnaa Shafaa&apos;atehee Yaumal Qi-yaamah.
                Innaka Laa Tukhliful-Mee&apos;aad.
              </p>
            </div>
            <p>
              O Allah, the Lord of this perfect call and of the Prayer to be
              established! Grant our leader Hazrat Mohammed, the highest point
              in Paradise, and Excellence, and the highest rank, and install him
              on the praiseworthy position which You have promised him - and
              grant us his intercession on the Day of Resurrection. Indeed You
              do not go against Your promise.)
            </p>
          </div>
        </div>
      <PlantUMLDiagram
      code={`
        @startmindmap
<style>
mindmapDiagram {
 .definition {
   BackgroundColor lightblue
 }
 .words {
   BackgroundColor lightgreen
 }
 .method {
   BackgroundColor gold
 }
 .response {
   BackgroundColor pink
 }
 .special {
   BackgroundColor violet
 }
 .dua {
   BackgroundColor orange
 }
}
</style>

* Azaan (Call to Prayer) <<definition>>
** Definition & Purpose <<definition>>
*** Proclamation to call Muslims to prayer
*** Made five times daily
*** Called by Mu'azzin

** Words of Azaan <<words>>
*** Standard Words
**** Allaho Akbar (4 times)
**** Ash-hadu Allaaa Ilaaha IllalLaah (2 times)
**** Ash-hadu Anna Mohammedar Rasoolul Laah (2 times)
**** Haiey-ya 'Alas-Salaah (2 times)
**** Haiey-ya 'Alal Falaah (2 times)
**** Final Takbeer & Kalima
*** Special Addition for Fajr
**** "asSalaatu Khaierum Minan Naum"
**** (Prayer is better than sleep)

left side

** Method of Proclamation <<method>>
*** Stand in ablution
*** Face the Qibla
*** Place index fingers in ears
*** Proclaim loudly

** Responding to Azaan <<response>>
*** Stop all work
*** Listen attentively
*** Repeat Mu'azzin's words except:
**** Say "Laa Haula wa-Laa Quwwata Illaa Billaah"
**** For "Haie-ya 'AlasSalaah"
**** For "Haie-ya 'Alal-Falaa"

** Special Responses <<special>>
*** On Prophet's name
**** Invoke blessings
**** Kiss thumbs
**** Touch eyes
**** Say "Qurratu 'Aienee Beka..."
*** For Fajr addition
**** Say "Sadaqta wa-Bararta..."

** Post-Azaan Du'aa <<dua>>
*** Recite Durood Sharif
*** Special Du'aa
**** Allaa-humma Rabba Haazihid-Da'watit...
**** Asking for Prophet's intercession
**** Seeking highest ranks for Prophet
@endmindmap
      `} />
      </div>
    </div>
  );
};

export default AzaanInfo;
