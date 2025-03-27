import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const SalaatTimings = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl w-full text-gray-800">
        <h1 className="text-2xl font-bold text-center mb-6 border-b pb-2">
          LESSON NO: 9 - TIMINGS OF SALAAT (PRAYER)
        </h1>

        <div className="mb-4">
          <p className="text-lg font-semibold">
            Q 1: How many times is prayer to be offered every day?
          </p>
          <p className="text-gray-700 mt-1">
            A. Prayer is obligatory five times a day (day night: 24 hours).
          </p>
        </div>

        <div className="mb-4">
          <p className="text-lg font-semibold">
            Q 2: What are the names of prayers?
          </p>
          <ul className="list-disc pl-6 text-gray-700 mt-1">
            <li>Salaat-ul-Fajr (the early morning prayer)</li>
            <li>Salaat-ul-Zuhr (afternoon prayer)</li>
            <li>Salaat-ul-Asr (late afternoon prayer)</li>
            <li>Salaat-ul-Maghrib (evening prayer)</li>
            <li>Salaat-ul-&apos;Ishaa (night prayer)</li>
          </ul>
        </div>

        <div>
          <p className="text-lg font-semibold">
            Q 3: What is the appointed time of each prayer?
          </p>
          <p className="text-gray-700 mt-1 leading-relaxed">
            A. The appointed time of Fajr begins at dawn and ends at sunrise.
            Zuhr time begins when the sun has passed the meridian and lasts till
            the shadow of everything doubles excepting the real shadow. Asr time
            begins when the Zuhr time ends and lasts until before sunset.
            Maghrib time begins after the sun has set and lasts till the
            complete disappearance of evening twilight. &apos;Ishaa time begins after
            the evening twilight has vanished and lasts until before dawn.
          </p>
        </div>
        <PlantUMLDiagram
          code={`
        @startmindmap
* Islamic Prayer Timings
** Daily Prayers
*** 5 Obligatory Prayers
**** Salaat-ul-Fajr
***** Time: Dawn to Sunrise
**** Salaat-ul-Zuhr
***** Time: After Sun Passes Meridian until Shadow Doubles
**** Salaat-ul-Asr
***** Time: After Zuhr Time until Before Sunset
**** Salaat-ul-Maghrib
***** Time: After Sunset until Twilight Disappears
**** Salaat-ul-'Ishaa
***** Time: After Evening Twilight until Before Dawn

right side

** Key Points
*** Mandatory 5 Times
*** Covers Full Day (24 Hours)
*** Each Prayer Has Specific Time Window
*** Times Based on Sun Position
@endmindmap
        `}
        />
      </div>
    </div>
  );
};

export default SalaatTimings;
