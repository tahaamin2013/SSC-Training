import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const page = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
      <h1 className="text-2xl font-bold text-center mb-6">
        VOLUME 1 / LESSON NO: 5 - ABOUT HELL
      </h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold">Q 1: What is hell?</h2>
          <p className="mt-2">
            A. Allah Almighty has created a dreadful place for the chastisement
            and punishment of infidels, disbelievers, and sinners, which is
            called &quot;Jahannam&quot; (hell). It has seventy thousand dangerous and
            horrendous valleys, with each valley having seventy thousand similar
            horrid dells and pits. These valleys, dells, and pits are infested
            with innumerable frightful scorpions and serpents.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Q 2: What is in hell?</h2>
          <p className="mt-2">
            A. There are varied torments in hell. It is dreadful even to think
            of the torments therein. In summary, it has the torments of fire,
            extreme cold, snakes, scorpions, poisonous animals, etc. Its flames
            continuously rage high and overtake infidels with violent force. The
            fuel of hell are human beings and stones.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">
            Q 3: How will a sinful believer be absolved?
          </h2>
          <p className="mt-2">
            A. A believer will ultimately be absolved irrespective of his
            countless sins and admitted into paradise either by the forgiveness
            of Allah Almighty, or the intercession of His beloved, the chosen
            Prophet Hazrat Mohammed Mustafa (may Allah&apos;s choicest blessings and
            peace be upon him), or after having served his term of punishment in
            hell. Paradise is the last and ultimate abode of believers wherein
            they will live eternally.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">
            Q 4: Is there any absolution for infidels?
          </h2>
          <p className="mt-2">
            A. The major sins of infidelity and polytheism will never be
            forgiven. Infidels and polytheists will live eternally in hell and
            face different sorts of torments. They will also be locked in boxes
            of fire, which will be encased in other fire boxes. Every infidel
            and polytheist will think that it is the last chastisement, but they
            will get no relief and keep suffering torment upon torment.
          </p>
        </div>
      </div>
      <PlantUMLDiagram
        code={`
@startmindmap
*[#FF4444] Hell (Jahannam)
**[#FFA500] Structure
***[#FFD700] 70,000 valleys
****[#FFFF00] Each valley has 70,000 dells and pits
****[#FFFF00] Infested with scorpions and serpents

**[#FF6B6B] Torments
***[#FF8C8C] Fire
***[#FF8C8C] Extreme cold
***[#FF8C8C] Dangerous creatures
****[#FFA7A7] Snakes
****[#FFA7A7] Scorpions
****[#FFA7A7] Poisonous animals
***[#FF8C8C] Fuel
****[#FFA7A7] Human beings
****[#FFA7A7] Stones
left side

**[#4CAF50] Punishment & Absolution
***[#66BB6A] For Believers
****[#81C784] Can be absolved
****[#81C784] Methods of absolution
*****[#A5D6A7] Allah's forgiveness
*****[#A5D6A7] Prophet's intercession
*****[#A5D6A7] Serving punishment term
****[#81C784] Ultimate destination: Paradise

***[#E57373] For Infidels
****[#EF5350] No absolution possible
****[#EF5350] Eternal punishment
****[#EF5350] Locked in fire boxes
****[#EF5350] Endless torments

@endmindmap`}
      />
    </div>
  );
};

export default page;
