import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const page = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
    <h1 className="text-2xl font-bold text-center mb-6">VOLUME 1 / LESSON NO: 4 - ABOUT PARADISE</h1>
    
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Q 1: What is paradise?</h2>
        <p className="mt-2">A. Paradise (heaven) is an abode of endless bliss that Allah Almighty has created for the believers. It comprises one hundred ranks and the distance between two ranks is like that of the distance between the earth and heavens. Each heaven is so vast and spacious that there will remain enough room if the whole world with all its contents is placed therein.</p>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold">Q 2: What is in paradise?</h2>
        <p className="mt-2">A. Allah Almighty has created in Paradise such a variety of physical and spiritual bliss and felicity that is unseen, unheard, unimagined, and undreamt of. Even an emperor in this world cannot enjoy such pleasures and facilities which will be available to the inmates of the lowest rank of paradise.</p>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold">Q 3: What will be the greatest blessing in paradise?</h2>
        <p className="mt-2">A. The greatest favor bestowed to the believers in Paradise is the &quot;vision (sight) of Allah&quot;. All divine bounties and favors will be eclipsed by Allah&apos;s vision. Once the believers experience this “vision” they would remain absorbed in its exquisite ecstasy forever.</p>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold">Q 4: How many believers will be admitted into paradise?</h2>
        <p className="mt-2">A. The Holy Prophet said, “From my slaves, seventy thousand would be admitted into heaven without any reckoning. Every one of them would take a group of seventy thousand believers with him into paradise.” Allah Almighty would yet grace them and three more multitudes of believers would accompany them. The exact number of believers who will be admitted into heaven is known only to Allah or His noble Prophet whom Allah Almighty has endowed with such knowledge.</p>
      </div>
    </div>
<PlantUMLDiagram
    code={`
@startmindmap
<style>
mindmapDiagram {
    .green {
        BackgroundColor lightgreen
        FontColor darkgreen
    }
    .blue {
        BackgroundColor lightblue
        FontColor navy
    }
    .orange {
        BackgroundColor #FFD700
        FontColor #FF8C00
    }
    .purple {
        BackgroundColor lavender
        FontColor purple
    }
}
</style>

* Paradise<<green>>
** What is Paradise?<<blue>>
*** Created by Allah for believers
*** 100 ranks
*** Distance between ranks = Earth to Heaven
*** Each heaven vast & spacious
*** Can fit entire world with contents

** What's in Paradise?<<orange>>
*** Physical bliss
*** Spiritual felicity
*** Unseen pleasures
*** Unheard comforts
*** Better than emperor's luxuries
left side
** Greatest Blessing<<purple>>
*** Vision of Allah
**** Supreme divine favor
**** Eclipses all other bounties
**** Eternal ecstasy

** Number of Believers<<blue>>
*** 70,000 without reckoning
**** Each takes 70,000 more
*** Additional 3 multitudes
*** Exact number known to
**** Allah
**** His Prophet

@endmindmap`}
  />
  </div>
  );
};

export default page;
