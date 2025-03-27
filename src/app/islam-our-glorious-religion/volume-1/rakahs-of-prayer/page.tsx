import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const SalaatTimings = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-500 p-6">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-3xl w-full text-gray-800">
        <h1 className="text-3xl font-extrabold text-center mb-6 border-b-4 pb-3 border-blue-500 uppercase">VOLUME 1 / LESSON NO: 10 - RAK&apos;AHS (CYCLES) OF PRAYER</h1>
        
        <div className="mb-6">
          <p className="text-xl font-bold text-blue-700">Q 1: How many Rak&apos;ahs (parts or cycles) are Fard (obligatory) in the 5 daily prayers?</p>
          <p className="text-gray-700 mt-2">A. <span className="font-semibold">17 Rak&apos;ahs</span> are obligatory i.e. Fajr = 2, Zuhr = 4, Asr = 4, Maghrib = 3, and &apos;Ishaa = 4.</p>
        </div>
        
        <div className="mb-6">
          <p className="text-xl font-bold text-blue-700">Q 2: How many Rak&apos;ahs are Sunnat-e-Muakkadah (emphasised Sunnah) in the five time prayers?</p>
          <p className="text-gray-700 mt-2">A. <span className="font-semibold">12 Rak&apos;ahs</span> are Sunnat-e-Muakkadah: 2 in Fajr before Fard, 6 in Zuhr (4 before Fard & 2 after Fard), 2 in Maghrib after Fard, and 2 in Isha after Fard.</p>
        </div>
        
        <div className="mb-6">
          <p className="text-xl font-bold text-blue-700">Q 3: How many Rak&apos;ahs are Sunnat-e-Ghair Muakkada (non-emphasised Sunnah) or Nafil (optional, voluntary prayer) in all the five time prayers?</p>
          <p className="text-gray-700 mt-2 leading-relaxed">
            A. Sunnat-e-Ghair-Muakkadah and Nafil prayers include:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>2 Nafil after Zuhr</li>
            <li>4 or 2 Sunnat-e-Ghair Muakkadah before Asr</li>
            <li>2 Nafil after Maghrib</li>
            <li>2 or 4 Sunnat-e-Ghair Muakkadah before Isha&apos;s Fard</li>
            <li>2 Sunnat-e-Ghair Muakkadah after Isha&apos;s Fard, followed by 2 Nafil</li>
            <li>3 Witr (essential prayer) and 2 Nafil</li>
          </ul>
          <p className="text-gray-700 mt-2">No particular number of Nafil prayers has been reported.</p>
        </div>
        
        <div className="mb-6">
          <p className="text-xl font-bold text-blue-700">Q 4: How many Rak&apos;ahs are offered in the five time prayers?</p>
          <p className="text-gray-700 mt-2 leading-relaxed">
            A. <span className="font-semibold">Total 48 Rak&apos;ahs</span> are offered in the five daily prayers:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Fajr: 4 Rak&apos;ahs (2 Sunnat & 2 Fard)</li>
            <li>Zuhr: 12 Rak&apos;ahs (4 Sunnat, 4 Fard, 2 Sunnat & 2 Nafil)</li>
            <li>Asr: 8 Rak&apos;ahs (4 Sunnat-e-Ghair-Muakkadah & 4 Fard)</li>
            <li>Maghrib: 7 Rak&apos;ahs (3 Fard, 2 Sunnat & 2 Nafil)</li>
            <li>Isha: 17 Rak&apos;ahs (4 Sunnat-e-Ghair-Muakkadah, 4 Fard, 2 Sunnat, 2 Nafil, 3 Witr & 2 Nafil)</li>
          </ul>
        </div>
        
        <div>
          <p className="text-xl font-bold text-blue-700">Q 5: Is Witr prayer Fard or Sunnah?</p>
          <p className="text-gray-700 mt-2">A. Three Rak&apos;ahs of Witr are neither Fard nor Sunnah but are <span className="font-semibold">Waajib (essential)</span>, offered with Isha prayer.</p>
        </div>

        <table className="w-full border-collapse border border-blue-500 mb-6 text-gray-700">
          <thead>
            <tr className="bg-blue-300 text-gray-800">
              <th className="border border-blue-500 px-4 py-2">Prayer</th>
              <th className="border border-blue-500 px-4 py-2">Sunnat-e-Muakkadah</th>
              <th className="border border-blue-500 px-4 py-2">Fard</th>
              <th className="border border-blue-500 px-4 py-2">Sunnat-e-Ghair Muakkadah</th>
              <th className="border border-blue-500 px-4 py-2">Nafil</th>
              <th className="border border-blue-500 px-4 py-2">Witr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-blue-500 px-4 py-2">Fajr</td>
              <td className="border border-blue-500 px-4 py-2">2</td>
              <td className="border border-blue-500 px-4 py-2">2</td>
              <td className="border border-blue-500 px-4 py-2">-</td>
              <td className="border border-blue-500 px-4 py-2">-</td>
              <td className="border border-blue-500 px-4 py-2">-</td>
            </tr>
            <tr>
              <td className="border border-blue-500 px-4 py-2">Zuhr</td>
              <td className="border border-blue-500 px-4 py-2">6 (4 before, 2 after)</td>
              <td className="border border-blue-500 px-4 py-2">4</td>
              <td className="border border-blue-500 px-4 py-2">-</td>
              <td className="border border-blue-500 px-4 py-2">2</td>
              <td className="border border-blue-500 px-4 py-2">-</td>
            </tr>
            <tr>
              <td className="border border-blue-500 px-4 py-2">Asr</td>
              <td className="border border-blue-500 px-4 py-2">-</td>
              <td className="border border-blue-500 px-4 py-2">4</td>
              <td className="border border-blue-500 px-4 py-2">4 before Fard</td>
              <td className="border border-blue-500 px-4 py-2">-</td>
              <td className="border border-blue-500 px-4 py-2">-</td>
            </tr>
            <tr>
              <td className="border border-blue-500 px-4 py-2">Maghrib</td>
              <td className="border border-blue-500 px-4 py-2">2 After Fard</td>
              <td className="border border-blue-500 px-4 py-2">3</td>
              <td className="border border-blue-500 px-4 py-2">-</td>
              <td className="border border-blue-500 px-4 py-2">2</td>
              <td className="border border-blue-500 px-4 py-2">-</td>
            </tr>
            <tr>
              <td className="border border-blue-500 px-4 py-2">Isha</td>
              <td className="border border-blue-500 px-4 py-2">2 After Fard</td>
              <td className="border border-blue-500 px-4 py-2">4</td>
              <td className="border border-blue-500 px-4 py-2">4 or 2</td>
              <td className="border border-blue-500 px-4 py-2">2 + 2</td>
              <td className="border border-blue-500 px-4 py-2">3</td>
            </tr>
          </tbody>
        </table>

      <PlantUMLDiagram
        code={`
            @startmindmap
<style>
mindmapDiagram {
 .fard {
   BackgroundColor lightblue
 }
 .sunnat {
   BackgroundColor lightgreen
 }
 .nafil {
   BackgroundColor gold
 }
 .witr {
   BackgroundColor pink
 }
 .total {
   BackgroundColor violet
 }
}
</style>

* Rak'ahs of Prayer (Total: 48 Rak'ahs)

** Fajr Prayer (4 Total) <<total>>
*** 2 Rak'ahs Fard <<fard>>
*** 2 Rak'ahs Sunnat-e-Muakkadah <<sunnat>>
**** Before Fard

** Zuhr Prayer (12 Total) <<total>>
*** 4 Rak'ahs Fard <<fard>>
*** 6 Rak'ahs Sunnat-e-Muakkadah <<sunnat>>
**** 4 Before Fard
**** 2 After Fard
*** 2 Rak'ahs Nafil <<nafil>>
**** After Sunnat

** Asr Prayer (8 Total) <<total>>
*** 4 Rak'ahs Fard <<fard>>
*** 4 Rak'ahs Sunnat-e-Ghair Muakkadah <<sunnat>>
**** Before Fard

left side

** Maghrib Prayer (7 Total) <<total>>
*** 3 Rak'ahs Fard <<fard>>
*** 2 Rak'ahs Sunnat-e-Muakkadah <<sunnat>>
**** After Fard
*** 2 Rak'ahs Nafil <<nafil>>
**** After Sunnat

** Isha Prayer (17 Total) <<total>>
*** 4 Rak'ahs Fard <<fard>>
*** Types of Additional Prayers
**** 4 Rak'ahs Sunnat-e-Ghair Muakkadah (Before Fard) <<sunnat>>
**** 2 Rak'ahs Sunnat-e-Muakkadah (After Fard) <<sunnat>>
**** 2 Rak'ahs Sunnat-e-Ghair Muakkadah (After Fard) <<sunnat>>
**** 2 + 2 Rak'ahs Nafil <<nafil>>
**** 3 Rak'ahs Witr (Essential) <<witr>>

** Prayer Categories
*** Fard (Obligatory) <<fard>>
**** Total 17 Rak'ahs
*** Sunnat-e-Muakkadah <<sunnat>>
**** Total 12 Rak'ahs
*** Sunnat-e-Ghair Muakkadah <<sunnat>>
**** Variable Rak'ahs
*** Nafil (Optional) <<nafil>>
**** No fixed number
*** Witr <<witr>>
**** 3 Rak'ahs (Essential)
@endmindmap`}
      />
      </div>
    </div>
  );
};

export default SalaatTimings;