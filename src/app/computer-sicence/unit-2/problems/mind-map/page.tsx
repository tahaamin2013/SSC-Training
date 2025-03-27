import React from "react";
import MermaidDiagram from "@/components/mermaiddiagram";
import PlantUMLDiagram from "@/components/PlantUMLDiagram";

const HistoryTable = () => {
  const umlCode = `
@startmindmap
*[#Orange] Problems
right side
**[#lightblue] Economic
***[#lightgreen] What to produce?
***[#lightgreen] How to manage limited budgets?
**[#lightblue] Healthcare
***[#lightgreen] How to expand access to medicines?
***[#lightgreen] How to stop infectious diseases?
**[#lightblue] Education
***[#lightgreen] How to increase literacy rate in Pakistan?
***[#lightgreen] What subject areas of education should be focused on more?
left side
**[#lightblue] Transportation
***[#lightgreen] Why is the number of vehicles growing up?
***[#lightgreen] Why are the accidents on motorways increasing?
**[#lightblue] Internet
***[#lightgreen] How to secure mobile banking transactions?
***[#lightgreen] Why do websites show unwanted advertisements?
**[#lightblue] Biology
***[#lightgreen] How do 5G cell phone signals harm humans?
***[#lightgreen] How do trees give earth all its oxygen?
@endmindmap
`;
const umlCode2 = `@startmindmap
skinparam backgroundColor white

<style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
        FontColor black
        FontSize 14
    }
}
</style>

*[#FFB6C1] Computer
**[#98FB98] Definition
***[#E0FFFF] Machine for problem solving
***[#E0FFFF] Accepts inputs
***[#E0FFFF] Performs operations
***[#E0FFFF] Produces outputs

**[#DDA0DD] Key Characteristics
***[#F0E68C] Cannot think independently
***[#F0E68C] Follows programmed instructions
***[#F0E68C] Executes algorithms
***[#F0E68C] Faster than humans
***[#F0E68C] More accurate than humans
left side
**[#87CEEB] Programming Requirements
***[#FFE4B5] Understanding real-world problems
***[#FFE4B5] Developing solutions
***[#FFE4B5] Converting solutions to instructions
***[#FFE4B5] Creating programs

**[#98FB98] Core Components
***[#E6E6FA] Processor
***[#E6E6FA] Main Memory

**[#FFA07A] Operation Process
***[#B0E0E6] Input acceptance
***[#B0E0E6] Processing
***[#B0E0E6] Output generation

**[#F0E68C] Types
***[#FFB6C1] Vary by size
***[#FFB6C1] Vary by capacity
***[#FFB6C1] Share basic computation principles
@endmindmap
`;
  
  const markdownContent = `
  # UML Diagram
  \`\`\`plantuml
  ${umlCode}
  \`\`\`
  `;
 

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Problems
        </h1>

        <section className="mb-16">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b">Field</th>
                    <th className="py-2 px-4 border-b">Problems</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Economic</td>
                    <td className="py-2 px-4 border-b">
                      <ul className="list-disc pl-5">
                        <li>What to produce?</li>
                        <li>How to manage limited budgets?</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Healthcare</td>
                    <td className="py-2 px-4 border-b">
                      <ul className="list-disc pl-5">
                        <li>How to expand access to medicines?</li>
                        <li>How to stop infectious diseases?</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Education</td>
                    <td className="py-2 px-4 border-b">
                      <ul className="list-disc pl-5">
                        <li>How to increase literacy rate in Pakistan?</li>
                        <li>
                          What subject areas of education should be focused on
                          more?
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Transportation</td>
                    <td className="py-2 px-4 border-b">
                      <ul className="list-disc pl-5">
                        <li>Why is the number of vehicles growing up?</li>
                        <li>Why are the accidents on motorways increasing?</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Internet</td>
                    <td className="py-2 px-4 border-b">
                      <ul className="list-disc pl-5">
                        <li>How to secure mobile banking transactions?</li>
                        <li>Why do websites show unwanted advertisements?</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Biology</td>
                    <td className="py-2 px-4 border-b">
                      <ul className="list-disc pl-5">
                        <li>How do 5G cell phone signals harm humans?</li>
                        <li>How do trees give earth all its oxygen?</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              MindMap
            </h3>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Introduction
            </h3>
            <PlantUMLDiagram code={umlCode2} />

            <PlantUMLDiagram code={umlCode} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HistoryTable;
