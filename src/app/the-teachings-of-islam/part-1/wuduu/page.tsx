import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const page = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Wuduu&apos;</h1>
      <p className="mb-4">
        <strong>Q.</strong> How to do wuduu&apos;?
      </p>
      <p className="mb-4">
        <strong>A.</strong> Sit at a high place. Take clean water in a clean
        pot. It is better to face the Qiblah but if there is no possibility of
        it, there is no harm. Roll up your sleeves to your elbows; then recite
        Bismillaah and wash both the hands up to the wrists, three times.
      </p>
      <p className="mb-4">
        Then gargle three times and brush your teeth. If you do not have a brush
        or miswaak, rub your teeth with your (right index) finger.
      </p>
      <p className="mb-4">
        Then put water into your nostrils three times and clean them with your
        left little finger, then wash your face three times. Do not splash water
        on your face with force but run water on the forehead softly and wash
        from the forehead down to the chin and on either side of the face up to
        the ears.
      </p>
      <p className="mb-4">
        Then wash the right arm up to the elbow three times, and do the same
        with the left arm.
      </p>
      <p className="mb-4">
        Then wet your hands and pass them over the head, ears and neck. This is
        called masah. Masah should be done on each part only once.
      </p>
      <p>
        Then wash each foot three times up to the ankle, first the right foot,
        then the left.
      </p>
      <PlantUMLDiagram
        code={`
          @startmindmap
*[#3498DB] Wuduu'
 *[#F1C40F] Q: How to do wuduu'?
  *[#2ECC71] A: Sit at a high place.
  *[#2ECC71] Take clean water in a clean pot.
  *[#2ECC71] It is better to face the Qiblah, but if not possible, there is no harm.
  *[#2ECC71] Roll up your sleeves to your elbows.
  *[#2ECC71] Recite Bismillaah.
  *[#2ECC71] Wash both hands up to the wrists, three times.
  *[#2ECC71] Gargle three times and brush your teeth (use miswaak or right index finger if unavailable).
  *[#2ECC71] Put water into nostrils three times and clean with left little finger.
  *[#2ECC71] Wash face three times (forehead to chin, ear to ear) softly.
  *[#2ECC71] Wash right arm up to the elbow three times, then the left arm.
  *[#2ECC71] Perform masah (wipe hands over head, ears, and neck once).
  *[#2ECC71] Wash each foot three times up to the ankle (right foot first, then left).
@endmindmap
`}
      />
    </div>
  );
};

export default page;
