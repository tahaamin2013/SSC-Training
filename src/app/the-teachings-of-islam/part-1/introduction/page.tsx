import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const Introduction = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Q&A on Islam
      </h1>
      <div className="space-y-6">
        {/* Question 1 */}
        <div>
          <p className="text-lg font-medium text-gray-700">
            Q. What is your name?
          </p>
          <p className="text-lg text-gray-600 mt-1">
            A. My name is <span className="font-semibold">Ahmad</span>/
            <span className="font-semibold">Aaminah</span>.
          </p>
        </div>
        {/* Question 2 */}
        <div>
          <p className="text-lg font-medium text-gray-700">
            Q. What is the name of your religion?
          </p>
          <p className="text-lg text-gray-600 mt-1">
            A. Islam. And I am a <span className="font-semibold">Muslim</span>.
          </p>
        </div>
        {/* Question 3 */}
        <div>
          <p className="text-lg font-medium text-gray-700">
            Q. What does Islam teach?
          </p>
          <p className="text-lg text-gray-600 mt-2">A. Islam teaches that:</p>
          <ul className="list-disc list-inside space-y-2 mt-2 text-gray-600">
            <li>
              <span className="font-semibold text-blue-600">Allah</span> is one,
              and He alone should be worshipped.
              <span className="font-semibold">
                Hadrat Muhammad Mustafa (peace be upon him)
              </span>{" "}
              is Allah’s worshipper and His Messenger, and the
              <span className="font-semibold">Noble Qur&apos;aan</span> is the
              Book of Allah.
            </li>
            <li>
              Islam is the true religion. It teaches all good things about the
              here and the hereafter.
            </li>
          </ul>
        </div>
        <PlantUMLDiagram
          code={`
@startmindmap
* Islam Q&A
** Personal Identity
*** Name
**** Ahmad/Aaminah
*** Religion
**** Islam (I am a Muslim)
** Islamic Teachings
*** Core Beliefs
**** Allah is One
***** Only Allah should be worshipped
**** Prophet Muhammad
***** Hadrat Muhammad Mustafa (peace be upon him)
***** Allah's worshipper and Messenger
**** Sacred Text
***** Noble Qur'aan
***** Book of Allah
*** Purpose
**** True Religion
**** Teaches all good things
***** About here
***** About hereafter
@endmindmap
`}
        />
      </div>
    </div>
  );
};

export default Introduction;
