import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import PlantUMLDiagram from '@/components/PlantUMLDiagram';

const ModernText = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <Card className="max-w-4xl mx-auto bg-white shadow-xl mb-5">
        <CardContent className="p-8 sm:p-12">
          {/* Decorative element */}
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-8" />
          
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-12 tracking-tight">
            The Unity of Life
          </h1>
          
          <div className="space-y-8 text-gray-800">
            <p className="text-lg sm:text-xl leading-relaxed font-light">
              It is true that for practical purposes, human life can be divided into various fields. However, treating each field as an independent and isolated island is extremely harmful. The individual and collective, political and economic, social and cultural aspects of life are so interconnected that they cannot be entirely separated into distinct parts. In human life, it is impossible to create a complete distinction between these different fields.
            </p>

            {/* Decorative quote emphasis */}
            <blockquote className="border-l-4 border-indigo-500 pl-6 my-8 italic text-xl text-gray-700">
              Unless all aspects of life are corrected and brought into harmony, human life cannot achieve true prosperity and success.
            </blockquote>

            <p className="text-lg sm:text-xl leading-relaxed font-light">
              Just as it is impossible for half of your face to smile while the other half does not, it is also impossible for life to flourish solely by organizing the economy while ignoring politics. Similarly, just as a person cannot walk in different directions at the same time or ride two boats going in opposite directions, it is also impossible for the various aspects of human life to work towards entirely different goals simultaneously.
            </p>

            <p className="text-lg sm:text-xl leading-relaxed font-light">
              Experience has taught modern humans that if they seek stability in their personality and genuine progress in civilization, they must choose the path of unity and cohesion over fragmentation. This is why the greatest need of the present time is for a healthy philosophy of life that can rescue the world from the chaos it finds itself in—a chaos that is proving to be fatal for humanity.
            </p>
          </div>

          {/* Decorative element */}
          <div className="w-20 h-1 bg-indigo-500 mx-auto mt-12" />
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
        BackgroundColor salmon
        BorderColor red
    }
    :depth(3) {
        BackgroundColor lightyellow
        BorderColor orange
    }
}
</style>

* Unity of Life

** Interconnected Aspects
*** Individual
*** Collective
*** Political
*** Economic
*** Social
*** Cultural

** Key Principles
*** Cannot separate aspects completely
*** All parts need harmony
*** Unified direction required

left side

** Analogies for Unity
*** Face
**** Cannot half-smile
**** Demonstrates indivisibility
*** Movement
**** Cannot walk in opposite directions
**** Cannot ride opposing boats
*** Progress
**** Economy cannot succeed alone
**** Politics cannot be ignored

** Modern Understanding
*** Need for stability
*** Importance of cohesion
*** Rejection of fragmentation

** Current Challenge
*** World in chaos
*** Need for healthy philosophy
*** Seeking unified approach
*** Critical for humanity's future

@endmindmap
          `}
      />
    </div>
  );
};

export default ModernText;