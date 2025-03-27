import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const page = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">
        People&apos;s unawareness and ignorance:
      </h2>
      <ul className="list-disc ml-8">
        <li className="text-lg leading-relaxed pb-5">
          Polytheism is generally widespread among the people and the concept of
          Monotheism is in scarcity.
        </li>
        <li className="text-lg leading-relaxed pb-5">
          Many people who claim to be the bearers of Faith do not understand the
          meanings of
          <span className="italic text-blue-600">Tauhid</span> (Monotheism) and
          <span className="italic text-blue-600">Shirk</span> (polytheism).
          Apparently they are Muslims, but they are unconsciously involved in
          the acts of
          <span className="italic text-blue-600">Shirk</span>.
        </li>
        <li className="text-lg leading-relaxed pb-5">
          Therefore, first we should try to understand the meanings of
          <span className="italic text-blue-600">Tauhid</span> (Monotheism) and
          <span className="italic text-blue-600">Shirk</span> (polytheism) so
          that we may know about their advantages and disadvantages as directed
          by Qur&apos;an and
          <span className="italic text-blue-600">Sunnah</span>.
        </li>
      </ul>
      <PlantUMLDiagram
        code={`
@startmindmap
skinparam BackgroundColor transparent

<style>
mindmapDiagram {
  node {
    BackgroundColor lightgreen
    FontColor black
    FontSize 15
  }
  rootNode {
    BackgroundColor lightgreen
    FontColor black
    FontSize 15
  }
  :depth(1) {
    BackgroundColor lightblue
    FontSize 14
  }
  :depth(2) {
    BackgroundColor pink
    FontSize 13
  }
}
</style>

+ People's Unawareness and Ignorance
++ Widespread Polytheism
+++ Monotheism is scarce
+++ General population follows polytheistic practices
++ Misconceptions in Faith Bearers
+++ Limited understanding of Tauhid (Monotheism)
+++ Limited understanding of Shirk (Polytheism)
+++ Unconscious involvement in acts of Shirk
++ Need for Understanding
+++ Study Tauhid and Shirk
+++ Learn advantages and disadvantages
+++ Follow Qur'an and Sunnah guidance

@endmindmap
          `}
      />
    </div>
  );
};

export default page;
