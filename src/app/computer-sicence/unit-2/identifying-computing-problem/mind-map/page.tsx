"use client";
import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import mermaid from "mermaid";
import Image from "next/image";
import { useEffect } from "react";

const Page = () => {
  const umlCode = `
@startmindmap

<style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
    :depth(1) {
      BackgroundColor lightGreen
    }
    :depth(2) {
      BackgroundColor lightYellow
    }
    :depth(3) {
      BackgroundColor lightPink
    }
}
</style>

* Identifying a Computing Problem
** Definition
*** Challenge or situation needing a solution
*** Solved step-by-step using computation
*** Includes arithmetical or logical calculations
*** Well-defined input
*** Output with desired properties
** Types of Computing Problems
*** Decision Problems
**** Yes/No answer
**** Example: Is this number prime?
*** Search Problems
**** Find a specific item or solution
**** Example: Find the shortest path between two cities
*** Counting Problems
**** Determine the number of solutions or possibilities
**** Example: How many ways can you arrange these letters?
@endmindmap
`;

const umlCode2 = `
@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
    :depth(1) {
      BackgroundColor lightGreen
    }
    :depth(2) {
      BackgroundColor lightYellow
    }
    :depth(3) {
      BackgroundColor lightPink
    }
}
</style>


* Search Problems

** Definition
*** In science and engineering, many problems are solved using search.
*** Search problems involve finding a solution within a set of objects.
*** Often represented using graphs (nodes and links).

** Components
*** Initial State: Starting node.
*** Operations: Transitions between nodes (moves).
*** Goal: Target or end condition.

** Examples
*** Route Finding Problem
**** Graph: Nodes = Cities, Links = Routes.
**** Problem: Find a path from city S to city T.
**** Initial State: City S
**** Goal State: City T
**** Operations: Travel along existing routes (links)

*** Eight Puzzle Problem
**** Board: 3x3 with 8 numbered tiles and 1 empty space.
**** Goal: Arrange tiles in a specific order.
***** Restriction 1: We can only slide one step
***** Restriction 2: Only four types of slides are allowed (left, right, above, and below)
**** Initial State: Initial tile arrangement.
**** Goal State: Desired tile arrangement.
**** Operations: Slide a tile into the empty space (left, right, up, down).

@endmindmap
`;

const umlCode1 = `
@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
    :depth(1) {
      BackgroundColor lightGreen
    }
    :depth(2) {
      BackgroundColor lightYellow
    }
    :depth(3) {
      BackgroundColor lightPink
    }
}
</style>

* Decision Problems
** Definition
*** A decision problem occurs when a given input requires a binary response, either Yes or No.
*** Responses may take various forms, such as true or false.
*** In complex cases, answers extend beyond a straightforward Yes-or-No, involving multiple decision factors and criteria.
** Characteristics
*** Binary Response (Yes/No, True/False)
*** Input required
*** Can be simple or complex
**** Complex cases involve multiple decision factors and criteria.
** Examples
*** Simple Examples
**** Is a given number odd?
**** Is a given number a prime number?
**** Does a sequence x of English alphabets contain "aa"?
*** Complex Examples (Illustrative - Expand as needed)
**** Loan Approval (Multiple factors like credit score, income, etc.)
**** Medical Diagnosis (Symptoms, test results, etc.)
**** Product Recommendation (User preferences, past purchases, etc.)
** Visual Representation
*** Simple Decision Problem
**** Input --> Decision Process --> Output (Yes/No)
*** Complex Decision Problem
**** Multiple Inputs --> Multiple Decision Processes --> Output (Based on criteria)

@endmindmap
`;

const umlCode3 = `
@startmindmap

<style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
    :depth(1) {
      BackgroundColor lightGreen
    }
    :depth(2) {
      BackgroundColor lightYellow
    }
    :depth(3) {
      BackgroundColor lightPink
    }
}
</style>
* Counting Problems
** Principle
*** If event/decision 1 has A choices
*** And event/decision 2 has B choices
*** Then total combinations = A x B
** Examples
*** Simple Example
**** Shirts: 5
**** Pants: 3
**** Total outfits: 5 x 3 = 15
*** Complex Example
**** Computer System Choices
***** Monitors: 4
***** Keyboards: 2
***** Computers: 4
***** Printers: 3
**** Total Systems: 4 x 2 x 4 x 3 = 96
** Complications
*** Listing all possibilities can become difficult
*** Problems can become complex quickly
@endmindmap
`;


const umlCode4 = `
@startmindmap

<style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
    :depth(1) {
      BackgroundColor lightGreen
    }
    :depth(2) {
      BackgroundColor lightYellow
    }
    :depth(3) {
      BackgroundColor lightPink
    }
}
</style>

* Problem Solving

** Definition: Analyzing a situation and generating a response.

** Simple Problems (4 Steps)
*** Define and Analyze the Problem
**** What is the problem?
**** Why is it happening?
*** Design a Plan (Algorithm)
*** Impleament the Plan (Code)
*** Evaluate (Did it work?)

** Complex Problems (6 Steps)
*** Define and Analyze the Problem
**** Clarity is crucial
**** Specify objectives
**** Thorough investigation of all aspects
*** Decompose the Problem (Sub-problems)
**** Make manageable sub-problems
*** Identify Potential Plans (for each sub-problem)
**** Plan A
**** Plan B
**** Plan C
*** Select and Design the Best Plan (Algorithm)
*** Implement the Plan (Code)
*** Evaluate (Did it work?)

@endmindmap
`;
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);

  return (
    <div className="p-4">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th
              colSpan={2}
              className="text-center py-4 text-lg font-bold border-b"
            >
              Identifying Computing Problems
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2} className="px-6 py-4 border-b">
              <strong>Definition:</strong> A challenge or situation in computer
              science that needs to be overcome using computation, solved
              step-by-step, usually with well-defined input and desired output
              properties.
            </td>
          </tr>
          <tr>
            <td className="w-1/3 px-6 py-4 border-b font-semibold bg-gray-100">
              Types of Problems
            </td>
            <td className="w-2/3 px-6 py-4 border-b font-semibold bg-gray-100">
              Description and Examples
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b font-medium">
              1. Decision Problems
            </td>
            <td className="px-6 py-4 border-b">
              <ul className="list-disc list-inside space-y-2">
                <li>Requires binary response (Yes/No, True/False)</li>
                <li>Can be simple or complex</li>
                <li>
                  Examples:
                  <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                    <li>Is a number odd or even?</li>
                    <li>Is a number prime?</li>
                    <li>Is &quot;aa&quot; in a sequence of English alphabets?</li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b font-medium">
              2. Search Problems
            </td>
            <td className="px-6 py-4 border-b">
              <ul className="list-disc list-inside space-y-2">
                <li>Common in science and engineering</li>
                <li>Searches for solution among a set of objects</li>
                <li>Often represented as graphs</li>
                <li>
                  Components:
                  <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                    <li>Initial State</li>
                    <li>Operations</li>
                    <li>Goal</li>
                  </ul>
                </li>
                <li>Example: Route Finding Problem (e.g., Google Maps)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b font-medium">
              3. Counting Problems
            </td>
            <td className="px-6 py-4 border-b">
              <ul className="list-disc list-inside space-y-2">
                <li>Based on principle of combinations</li>
                <li>
                  If A has X choices and B has Y choices, total combinations = X
                  * Y
                </li>
                <li>
                  Example: Outfit combinations = (number of shirts) * (number of
                  pants)
                </li>
                <li>Complex example: Computer system configurations</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b font-semibold bg-gray-100">
              Problem-Solving Approach
            </td>
            <td className="px-6 py-4 border-b">
              <ol className="list-decimal list-inside space-y-2">
                <li>Identify problem type</li>
                <li>Define inputs and desired outputs</li>
                <li>Break down into smaller steps</li>
                <li>Apply appropriate algorithms</li>
                <li>Verify solution against constraints</li>
              </ol>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="p-4">
        {/* Table content remains the same */}
        <PlantUMLDiagram code={umlCode} />
        <h1 className='text-3xl font-bold'>Decision Problems</h1>
        <PlantUMLDiagram code={umlCode1} />
        <h1 className='text-3xl font-bold'>Search Problems</h1>
        <PlantUMLDiagram code={umlCode2} />
        <div className='grid grid-cols-2'>
<Image src='/Diagrma.jpg' alt='fds' width={500} height={500} className="max-w-full" />
<Image src='/hi.png' alt='fds' width={500} height={500} className="max-w-full" />
<Image src='/Image-016_22_6_36.jpg' alt='fds' width={500} height={500} className="max-w-full mb-[30px]" />
        </div>
        <h1 className='text-3xl font-bold'>Counting Problems        </h1>
        <PlantUMLDiagram code={umlCode3} />
        <h1 className='text-3xl font-bold'>Problem Solving      </h1>
        <PlantUMLDiagram code={umlCode4} />
      </div>
    </div>
  );
};

export default Page;
