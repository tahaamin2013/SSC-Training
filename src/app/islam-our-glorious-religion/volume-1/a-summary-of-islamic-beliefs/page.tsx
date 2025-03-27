import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const page = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
      <h1 className="text-2xl font-bold text-center mb-6">
        A SUMMARY OF ISLAMIC BELIEFS
      </h1>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <p>
            Allah is One indeed. He has absolutely no partner. He alone is
            worthy of being worshipped. He is all Independent and depends on
            none. All the worlds and creatures are subservient to Him.
          </p>
        </li>
        <li>
          <p>
            We believe in all Apostles and Prophets whom Allah Almighty sent for
            the guidance of humanity. It is obligatory upon every believer to
            respect and revere all Apostles and consider them as Allahs1 ‘loved
            ones&apos;. Our kind lord and master Hazrat Mohammed (may the choicest
            blessings & peace of Allah be upon him) is the leader and highest of
            all the Apostles and Prophets.
          </p>
        </li>
        <li>
          <p>
            Allah, the Almighty has revealed books to some Apostles, which are
            called &quot;Kalaam Allah&quot; (speech of Allah). To have faith and belief in
            all the revealed books and in their contents is essential. Of all
            the revealed books, the Glorious Qur&apos;an which was gifted to our
            Beloved Prophet (Hazrat) Mohammed is the best and Allah Almighty
            Himself has taken up the responsibility of its protection.
          </p>
        </li>
        <li>
          <p>
            Angels are the creatures of Allah, whom he has created from light.
            They are neither male nor female. They are innocent and obedient
            servants of Allah. They only do or perform what Allah commands them.
            They subsist on the worship and remembrance of Allah.
          </p>
        </li>
        <li>
          <p>
            Genies have been created of fire. They live and die like human
            beings. There are believers, disbelievers, the good and the bad in
            them. Disbelieving and mischievous genies are called devils.
          </p>
        </li>
        <li>
          <p>
            One day everything (angels, mountains, animals, the earth, the sky)
            will perish like human beings. There will remain nothing in
            existence but Allah alone. Then all things will be re-created and
            the dead ones will be resurrected from their graves. All will be
            made to gather in a particular field that is called &quot;Mahshar&quot;. The
            Balance will be installed and deeds of each one will be weighed in
            it. Everyone will get the punishment of his/her misdeeds & sins and
            the reward of their own virtuous acts. Believers will be admitted
            into paradise while infidels (kaafir) and disbelievers will be cast
            into Hell.
          </p>
        </li>
        <li>
          <p>
            Hell has a bridge over it that leads to heaven. It is called &quot;Pool
            Siraat&quot; (the path). It is thinner than a hair and sharper than a
            sword. All people will have to cross this &quot;Siraat&quot;. It is the one
            and only one pathway to reach heaven.
          </p>
        </li>
        <li>
          <p>
            Whatever had to happen in the world and whatever one had to do -
            Allah Almighty wrote all of that with His eternally infinite
            knowledge. And whatever has been decreed will certainly happen
            without the slightest change. This is called &quot;Taqdeer&quot;
            (predestination).
          </p>
        </li>
      </ol>
      <PlantUMLDiagram
        code={`
@startmindmap
<style>
mindmapDiagram {
  node {
    BackgroundColor lightblue
    BorderColor darkblue
    FontColor black
  }
  :depth(1) {
    BackgroundColor pink
  }
  :depth(2) {
    BackgroundColor lightyellow
  }
}
</style>
* Islamic Beliefs
** Allah
*** One and Only
*** No partners
*** Worthy of worship
*** All-Independent
*** Creator of all worlds
** Prophets and Apostles
*** Belief in all
*** Respect and reverence
*** Mohammed (PBUH)
**** Leader and The Last Prophet of all Apostles
** Revealed Books
*** Kalaam Allah
*** Faith in all books
**** The Tawrat: The Torah
**** The Zabur: The Psalms
**** The Injeel: The Gospel
**** The Holy Quran: The Last and Final Revelation
*** Quran
**** Best of all books
**** Protected by Allah
*** Bible as a whole contains the Torah, Psalms, and Gospel
** Angels
*** Created from light
*** Neither male nor female
*** Innocent and obedient
*** Subsist on worship
left side
** Genies
*** Created from fire
*** Live and die like humans
*** Believers and disbelievers
*** Devils (mischievous genies)
** Day of Judgment
*** Everything will perish
*** Resurrection
*** Mahshar (gathering place)
*** Balance of deeds
*** Paradise for believers
*** Hell for disbelievers
** Pool Siraat
*** Bridge over Hell
*** Thinner than hair
*** Sharper than sword
*** Only path to Heaven
** Taqdeer (Predestination)
*** Allah's eternal knowledge
*** Everything predetermined
@endmindmap
`}
      />
    </div>
  );
};

export default page;
