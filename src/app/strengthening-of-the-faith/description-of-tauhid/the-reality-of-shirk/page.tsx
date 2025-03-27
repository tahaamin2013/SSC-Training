import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const page = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4">
        The Reality of Shirk (Polytheism)
      </h1>
      <p className="mb-4">
        Shirk does not only imply that an entity be equated with Allah or be
        reckoned as His counterpart, but it goes much further to include the
        things and manners which Allah has peculiarized to His Qualities and
        that represent the signs of worshipping and obeisance which He has
        specified for His slaves to observe for Him Alone.
      </p>
      <p className="mb-4">
        In case, someone observes those signs and exhibits them in front of any
        other entity whatsoever other than Allah, such a practice also lies
        within the definition of Shirk. This practice includes making
        prostrations, sacrificing an animal in the Name of Allah, making vows,
        calling upon Him in distress, considering Allah to be Himself present
        everywhere, and maintaining that the others do have a role to play in
        the matters of one&apos;s fate and destiny. All the above are different
        shapes and varieties of Shirk.
      </p>
      <p className="mb-4">
        Prostration is particularized to be performed for the sake of Allah
        only, animal sacrifice is done for Him Alone, vows are made to Him
        Alone, He is the One, Who, in times of distress (situations), is called
        upon. He is the Omnipotent and All-Powerful and He is the Supreme
        Authority over everything. If any of these qualities are ascribed to any
        other entity other than Allah, it is known as Shirk, even if such an
        entity is regarded as inferior to Allah or is reckoned to be a creature
        or slave of Allah.
      </p>
      <p className="mb-4">
        All such beings and entities like a Prophet, saint, jinn, Satan, ghost,
        apparition, and fairy shall all be treated equally in this matter, and
        whoever considers them as having Divine powers commits an act of Shirk
        and the doer of such a thing will become a Mushrik (the one who
        associates partners with Allah). Hence Allah has brought down His wrath
        on the Jews and Christians too even though they did not practice
        idolatry, but treated their Prophets and saints in a similar manner
        (i.e. they attributed to them the qualities which are purely Divine in
        nature) as Allah has stated in the following Qur&apos;anic verse:
      </p>
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 bg-gray-50 p-3 rounded-md my-4">
        They (Jews and Christians) took their rabbis and their monks to be their
        lords besides Allah, (by obeying them in things which they made lawful
        or unlawful according to their own desires without being ordered by
        Allah) and (they also took as their lord) Messiah, son of Mary, while
        they (Jews and Christians) were commanded (in the Torah and the Gospel)
        to worship none but One (God-Allah) La ilaha ilia Huwa (none has the
        right to be worshipped but He). Praise and glory is to Him, (far above
        is He) from having the partners they associate (with Him). (V.9:31)
      </blockquote>
      <p className="mb-4">
        It means that even though they considered Allah as the Most Supreme
        Lord, but besides that, they also gave their recognition to other
        mini-lords, which are their priests and monks. These people were never
        instructed to commit such acts of Shirk. Allah is all Alone worthy of
        being worshipped. He has no partners. Everyone, whether big or small,
        are none but His helpless slaves.
      </p>
      <p className="mb-4">
        Allah states in one of the verses of the Noble Qur&apos;an:
      </p>
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 bg-gray-50 p-3 rounded-md my-4">
        There is none in the heavens and the earth but comes unto the Most
        Beneficent (Allah) as a slave. Verily, He knows each one of them, and
        has counted them a full counting. And everyone of them will come to Him
        alone on the Day of Resurrection (without any helper, or protector or
        defender,). (V.19:93-95)
      </blockquote>
      <p className="mb-4">
        It means that regardless of whether a creature happens to be an angel or
        a human being, it carries a status of no more than being a slave before
        Allah. A slave lies under an absolute hegemony of Allah and therefore,
        is completely helpless and powerless. Everything lies under Allah&apos;s
        control. He gives nobody under anyone&apos;s control. Everyone shall have to
        appear in His Presence to account for his deeds. No one will advocate
        for anyone there nor one could lend his support to anyone else.
      </p>
      <p className="mb-4">
        There are hundreds of verses mentioned in this regard in the Noble
        Qur&apos;an, whereas only we, as a specimen, have made a mention of a few of
        them. Whosoever understands them clearly, shall have a clear
        understanding of the concept of Shirk and Tauhid. In sha &apos;Allah.
      </p>
      <PlantUMLDiagram
        code={`
@startmindmap
skinparam BackgroundColor white
skinparam ArrowColor black

<style>
mindmapDiagram {
 node {
   BackgroundColor #F9F9F9
   BorderColor #7F8C8D
   FontColor black
 }
 rootNode {
   BackgroundColor #9B59B6
   BorderColor #8E44AD
   FontColor white
 }
 :depth(1) {
   BackgroundColor #E67E22
   BorderColor #D35400
   FontColor white
 }
 :depth(2) {
   BackgroundColor #1ABC9C
   BorderColor #16A085
   FontColor white
 }
 :depth(3) {
   BackgroundColor #F39C12
   BorderColor #E67E22
   FontColor white
 }
}
</style>

* The Reality of Shirk (Polytheism)
** Definition of Shirk
*** Equating an entity with Allah
*** Ascribing Allah's qualities to others
*** Practices associated with worshiping Allah
** Forms of Shirk
*** Prostration to other than Allah
*** Sacrificing in the name of others
*** Making vows to others
*** Calling upon others in distress
*** Belief that others control fate
** Types of Entities Involved in Shirk
*** Prophets, saints, jinn, Satan, ghosts
*** Any entity with Divine powers ascribed to them
*** All treated equally in this matter
** The Issue with Jews and Christians
*** Revering priests, monks, and Jesus as mini-lords
*** Treating them as divine in nature
*** Despite acknowledging Allah's supremacy
** Quranic Perspective on Worship
*** Allah alone is worthy of worship
*** All beings are Allah's helpless slaves
*** Everyone will appear before Allah on the Day of Resurrection
** The Power of Allah
*** Allah's control over everything
*** No one is in anyone's control
*** Each being is a slave of Allah
*** No mediator or advocate on the Day of Judgment
@endmindmap

`}
      />
    </div>
  );
};

export default page;
