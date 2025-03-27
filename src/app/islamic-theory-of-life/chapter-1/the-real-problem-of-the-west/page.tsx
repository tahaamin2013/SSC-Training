import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import PlantUMLDiagram from "@/components/PlantUMLDiagram";

const Article = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="mx-auto max-w-4xl bg-white shadow-lg mb-10">
        <CardContent className="p-8 sm:p-12">
          {/* Decorative top border */}
          <div className="h-1 w-24 bg-gray-900 mb-8 mx-auto rounded"></div>

          <h1 className="text-4xl md:text-5xl font-serif text-center font-bold text-gray-900 mb-12">
            The Real Problem of the West
          </h1>

          <div className="space-y-8 text-gray-800">
            {/* First paragraph with larger text and drop cap */}
            <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:mr-3 first-letter:float-left">
              The tragedy of the Western world lies in its long-standing lack of
              a life-giving philosophy. Christianity failed to provide a
              comprehensive system of life. As a result, Western man, deprived
              of divine guidance, was forced to rely solely on human intellect
              and reasoning, and consequently failed to establish a balanced and
              holistic system. These failures led to a state of despair, and
              over time, the need for a comprehensive philosophy of life was
              outright denied.
            </p>

            <p className="text-lg leading-relaxed">
              Modern Western thought has evolved along lines that fragment the
              unity of life. Descartes was the first to deny the unity of spirit
              and matter. His philosophy of dualism posited that spirit and
              matter are two independent entities. Leibniz took this further by
              proposing the idea of multiple independent entities, suggesting
              that every soul or essence is a universe in itself, with its own
              distinct existence and unique perspective reflecting the whole
              cosmos. Under the influence of Locke and Hume, the importance of
              quantity grew while the value of quality diminished. Advancements
              in physics and mathematics accelerated this trend, leading to
              Western thought&apos;s defining characteristic: a retreat from the
              whole to the fragment. Modern intellectuals refer to this
              phenomenon as{" "}
              <span className="font-semibold border-b-2 border-gray-200">
                atomism
              </span>{" "}
              or{" "}
              <span className="font-semibold border-b-2 border-gray-200">
                fragmentation
              </span>
              .
            </p>

            <p className="text-lg leading-relaxed">
              This intellectual trend caused disorder and fragmentation in every
              sphere of life. The concept of a global state was replaced by the
              idea of the nation-state, leading to the division of the Roman
              Empire into smaller national states. Religion was entirely
              separated from politics, and individualism began to dominate
              political thought. In economics, specialization and divisive
              tendencies emerged, and industrial and commercial progress
              followed these lines. Nationalism, secularism, individualism, and
              industrialism are products of this mindset.
            </p>

            <p className="text-lg leading-relaxed">
              The logical outcome of this Western tendency was the absence of a
              unified philosophy of life that could bring harmony to all aspects
              of human existence. Secularism and materialism are negative
              movements; they cannot provide a positive system of life. This is
              why each field developed on separate foundations and along
              different cultural lines, leaving no unity in life. For instance,
              the economy moves in one direction, society in another, politics
              in a different manner, and morality and culture in yet another.
              Multiple standards emerged, and no single measure remained to
              evaluate all aspects of life.
            </p>

            <p className="text-lg leading-relaxed">
              The modern fragmentation of European life cannot be understood
              without grasping this reality. When a student of history observes
              the coexistence of democracy in politics with industrial
              oppression and worker exploitation in economics, or when they see
              imperialism side by side with the ideals of liberty, they are left
              confused. This contradiction exists because while there is
              agreement on negative principles, no positive philosophy of life
              exists to unite life&apos;s various spheres while providing
              comprehensive intellectual and practical guidance.
            </p>

            {/* Final paragraph with subtle emphasis */}
            <p className="text-lg leading-relaxed font-medium">
              This lack of unity has resulted in fragmented progress in
              different fields, leading to the internal disarray of Western
              civilization today.
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
    BorderColor black
    BorderThickness 1
  }
  .root {
    BackgroundColor #FFD700
    FontColor black
    FontStyle bold
    BorderColor #DAA520
    BorderThickness 2
  }
  .philosophy {
    BackgroundColor #B0E0E6
    FontColor #000080
    BorderColor #4682B4
  }
  .christianity {
    BackgroundColor #E6E6FA
    FontColor #483D8B
    BorderColor #9370DB
  }
  .evolution {
    BackgroundColor #98FB98
    FontColor #006400
    BorderColor #228B22
  }
  .society {
    BackgroundColor #FFB6C1
    FontColor #8B0000
    BorderColor #DC143C
  }
  .political {
    BackgroundColor #FFA07A
    FontColor #8B4513
    BorderColor #D2691E
  }
  .religious {
    BackgroundColor #DDA0DD
    FontColor #4B0082
    BorderColor #8B008B
  }
  .economic {
    BackgroundColor #87CEEB
    FontColor #00008B
    BorderColor #4169E1
  }
  .cultural {
    BackgroundColor #98FB98
    FontColor #006400
    BorderColor #228B22
  }
  .consequences {
    BackgroundColor #F0E68C
    FontColor #8B4513
    BorderColor #DAA520
  }
}
</style>

* The Real Problem of the West <<root>>
** Lack of Life-Giving Philosophy <<philosophy>>
*** Christianity's Failure <<christianity>>
**** Failed to provide comprehensive system
**** Led to reliance on human intellect alone
*** Evolution of Western Thought <<evolution>>
**** Cartesian Dualism
***** Separation of spirit and matter
**** Leibniz's Multiple Entities
***** Each soul as independent universe
**** Locke and Hume's Influence
***** Emphasis on quantity over quality
**** Physics & Mathematics Impact
***** Further quantification of thought
** Fragmentation in Society <<society>>
*** Political Fragmentation <<political>>
**** Breakup of Roman Empire
**** Rise of nation-states
*** Religious Separation <<religious>>
**** Divorce of religion from politics
*** Economic Division <<economic>>
**** Industrial specialization
**** Commercial segmentation
*** Cultural Impacts <<cultural>>
**** Nationalism
**** Secularism
**** Individualism
**** Industrialism
** Consequences <<consequences>>
*** Multiple Standards
**** Different directions in economy
**** Separate paths in society
**** Distinct political development
**** Independent moral evolution
*** Modern Contradictions
**** Democracy vs Industrial oppression
**** Liberty vs Imperialism
*** Internal Disarray
**** Fragmented progress
**** Lack of unified direction
@endmindmap
          `}
      />
    </div>
  );
};

export default Article;
