import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import PlantUMLDiagram from "@/components/PlantUMLDiagram";

const CommunismArticle = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="mx-auto max-w-4xl bg-white shadow-lg mb-5">
        <CardContent className="p-8 sm:p-12">
          {/* Decorative top border */}
          <div className="h-1 w-24 bg-gray-900 mb-8 mx-auto rounded"></div>

          <h1 className="text-4xl md:text-5xl font-serif text-center font-bold text-gray-900 mb-12">
            Communism
          </h1>

          <div className="space-y-8 text-gray-800">
            <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:mr-3 first-letter:float-left">
              In modern European history, communism emerged as a reaction to the
              same chaos and confusion, both as a philosophy of life and as a
              movement. Whatever success it has achieved in today&apos;s world is
              largely due to its apparent possession of a comprehensive code of
              life. This is the core of its appeal. However, since communism
              also failed to free itself from the negative trends of Western
              thought, it is similarly based on the division between matter and
              spirit, life and morality, and on the class distinctions within
              human society. While it provided a code of action, it could not
              present a healthy and life-affirming philosophy of life.
            </p>

            <p className="text-lg leading-relaxed">
              As long as communism remained just a theory, its appeal grew
              exponentially. But now that its practical results have come to
              light, its charm is steadily diminishing. This is because people
              are beginning to see:{" "}
              <em className="font-serif">
              &quot;And if the reins of power are handed to the laborer, then what?
                In the miner&apos;s system, there is the same taint of Nimrod!&quot;
              </em>{" "}
              (Iqbal)
            </p>

            <p className="text-lg leading-relaxed">
              On one hand, the modern world lacks a healthy philosophy of life,
              and on the other, the need for a philosophy that can solve life&apos;s
              problems on sound foundations and use human material progress for
              welfare and well-being is growing every day. Experience has proven
              that life is an indivisible whole. Human personality is singular,
              and it cannot simultaneously play two contradictory and opposing
              roles. If it does, it will fall into internal conflict. This is
              why modern man suffers from a fragmented personality. Social
              unrest, societal conflicts, the moral decline of youth, suicide
              rates, and the rise in mental illnesses are all stark reflections
              of this truth.
            </p>

            <p className="text-lg leading-relaxed">
              It was under such circumstances that Professor Judd remarked:{" "}
              <em className="font-serif">
              &quot;We have learned to fly like birds in the skies and swim like
                fish in the seas, but we have yet to learn how to live like
                humans on land.&quot;
              </em>
            </p>

            <p className="text-base text-gray-600 mt-12 border-t pt-8">
              For further details, see Chapter Four, as well as{" "}
              <strong>Chiragh-e-Rah</strong>, Socialism Number, Karachi, 1997,
              and Khurshid Ahmad&apos;s <strong>Socialism or Islam</strong>,
              Chiragh-e-Rah Library, Karachi, 1969.
            </p>
          </div>

          {/* Decorative bottom border */}
          <div className="h-1 w-24 bg-gray-900 mt-12 mx-auto rounded"></div>
        </CardContent>
      </Card>

      <PlantUMLDiagram
        code={`
@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightblue
        BorderColor blue
    }
    :depth(1) {
        BackgroundColor lightgreen
        BorderColor green
    }
    :depth(2) {
        BackgroundColor lightblue
        BorderColor red
    }
    :depth(3) {
        BackgroundColor lightyellow
        BorderColor orange
    }
}
</style>

* Communism in Modern Europe

** Historical Context
*** Emerged as reaction to chaos
*** Developed as philosophy and movement
*** Initially gained appeal through comprehensive code

** Core Issues
*** Division between matter and spirit
*** Split between life and morality
*** Class distinctions in society
*** Failed to provide life-affirming philosophy


** Practical Implementation
*** Theory vs Reality
**** Strong theoretical appeal
**** Diminishing charm in practice
*** Power dynamics
**** Same issues as previous systems
**** Quote from Iqbal about laborers' power

left side

** Modern World Impact
*** Lack of healthy life philosophy
*** Growing need for solutions
**** Sound foundations needed
**** Material progress integration required

** Human Consequences
*** Fragmented personality
*** Social problems
**** Societal conflicts
**** Moral decline in youth
**** Rising suicide rates
**** Increase in mental illness

** Contemporary Perspective
*** Professor Judd's observation
**** Mastered physical achievements
**** Still learning human living
*** Need for balanced approach

@endmindmap
          `}
      />
    </div>
  );
};

export default CommunismArticle;
