import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const page = () => {
  return (
    <div className="max-w-3xl bg-white shadow-lg rounded-lg p-6 sm:p-10 mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 border-b pb-3">
        The Acts Leading to Polytheism (Shirk)
      </h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        In difficult times and situations people call upon saints, Prophets,
        Imam, martyrs, angels and fairies for assistance; make their vows to
        them, invoke them for the fulfillment of their wishes and even make
        so-called offerings to them so that their wishes may come true.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        To avoid ailments, they have no scruples about attributing their sons to
        those false deities by giving them such names as Abdun-Nabi, Ali Bakhsh,
        Hussain Bakhsh, Peer Bakhsh, Madar Bakhsh, Salar Bakhsh, Ghulam
        Muhiuddin, and Ghulam Moinuddin etc. Someone raises a plait of hair in
        the name of a deity, someone slaughters an animal in their names,
        someone invokes them in a distressed situation and someone swears an
        oath in their names.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This means that the way non-Muslims treat their gods and goddesses,
        these so-called Muslims also give exactly a similar treatment to the
        Prophets, saints, Imam, martyrs, angels, and fairies. Despite committing
        all the above sinful acts, they still claim to be Muslims.
      </p>
      <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-600">
        &#123;And most of them believe not in Allah except that they attribute
        partners unto Him.&#125; (V.12:106)
      </blockquote>
      <PlantUMLDiagram
        code={`
@startmindmap
skinparam BackgroundColor white
skinparam ArrowColor black

<style>
mindmapDiagram {
  node {
    BackgroundColor #FAFEFF
    BorderColor #2C3E50
    FontColor black
  }
  rootNode {
    BackgroundColor #3498DB
    BorderColor #2980B9
    FontColor white
  }
  :depth(1) {
    BackgroundColor #E8F8F5
    BorderColor #16A085
  }
  :depth(2) {
    BackgroundColor #FDEDEC
    BorderColor #E74C3C
  }
  :depth(3) {
    BackgroundColor #FEF9E7
    BorderColor #F1C40F
  }
  :depth(4) {
    BackgroundColor #F4ECF7
    BorderColor #8E44AD
  }
}
</style>

* Polytheistic (Shirk) Practices
** People's Invocations
*** Saints
*** Prophets
*** Imams
*** Martyrs
*** Angels
*** Fairies

** Practices
*** Making vows
*** Seeking fulfillment
*** Making offerings
*** Swearing oaths
*** Slaughtering animals
*** Raising plaits
*** Invoking in distress

left side

** Naming Practices
*** Abd- names
**** Abdun-Nabi
*** Bakhsh names
**** Ali Bakhsh
**** Hussain Bakhsh
**** Peer Bakhsh
*** Ghulam names
**** Ghulam Muhiuddin
**** Ghulam Moinuddin

** Key Issues
*** Non-Muslim practices
*** False Muslim identity
*** Partner attribution
*** Quran reference

@endmindmap
    `}
      />
    </div>
  );
};

export default page;
