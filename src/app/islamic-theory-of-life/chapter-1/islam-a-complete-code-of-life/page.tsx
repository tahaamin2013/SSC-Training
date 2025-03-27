import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const IslamCompleteCode = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 py-24">
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 tracking-tight">
            Islam: A Complete Code of Life
          </h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <section className="space-y-6">
          <p className="text-xl leading-relaxed">
            Islam addresses the greatest need of the modern age—and not only
            addresses it, but does so uniquely. It is a complete system of life.
            On one hand, it provides reasonable and scientific solutions to
            life&apos;s problems, resolving confusion and untangling complexities. On
            the other hand, it offers a detailed framework for cultural and
            social life, meeting all the needs of human society while paving the
            way for healthy progress and development.
          </p>
          <p className="text-xl leading-relaxed">
            Islam strongly emphasizes the spiritual reality of life and uses
            material resources as tools to achieve moral goals. Unlike other
            religions, it does not turn away from material life, nor does it,
            like modern materialism, make the material aspect dominant over
            every other dimension of existence. Instead, it instills in humans
            the belief that everything in this world is created for them, yet
            their purpose is far more elevated.
          </p>
        </section>

        {/* Quote Section */}
        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-lg">
          <p className="text-2xl font-light italic text-gray-700 text-center">
            &quot;You are neither for the earth nor the sky; <br />
            The universe is for you, but you are not for the universe.&quot;
          </p>
        </div>
      </div>
      <PlantUMLDiagram
        code={`
            @startmindmap
<style>
mindmapDiagram {
  .root {
    BackgroundColor #3498DB
    LineColor #2980B9
    FontColor white
  }
  .depth1 {
    BackgroundColor #F1C40F
    LineColor #F39C12
    FontColor black
  }
  .depth2 {
    BackgroundColor #2ECC71
    LineColor #27AE60
    FontColor white
  }
  .depth3 {
    BackgroundColor #E74C3C
    LineColor #C0392B
    FontColor white
  }
}
</style>
* <&globe> Islam: A Complete Code of Life <<root>>
** Reason & Science <<depth1>>
*** Solves modern problems <<depth2>>
*** Untangles complexities <<depth2>>
** Social & Cultural Framework <<depth1>>
*** Guides societal structure <<depth2>>
*** Ensures development <<depth2>>
** Spiritual & Material Balance <<depth1>>
*** Uses material as a tool for moral growth <<depth2>>
*** Does not reject material life <<depth2>>
*** Balances spirituality and worldly affairs <<depth2>>
** Higher Purpose <<depth1>>
*** Humans are above material existence <<depth2>>
*** Guided by divine wisdom <<depth2>>
** Quote by Iqbal <<depth1>>
*** "You are neither for the earth nor the sky" <<depth2>>
*** "The universe is for you, but you are not for the universe" <<depth2>>
@endmindmap

          `}
      />
    </div>
  );
};

export default IslamCompleteCode;
