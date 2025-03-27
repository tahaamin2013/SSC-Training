export default function ComputingProblems() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        2.2 Identifying a Computing Problem
      </h1>
      <p className="mb-4">
        In computer science, a problem is a challenge or situation that needs to
        be overcome using some action. In computer science, a computing problem
        is a problem that is solved step-by-step using computation. It can
        include any type of calculation such as arithmetical or logical. These
        problems usually have a well-defined input and some desired properties
        that output must be satisfied.
      </p>
      <h2 className="text-xl font-semibold mb-2">
        Following are some of the computing problems:
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Decision Problems</li>
        <li>Search Problems</li>
        <li>Counting Problems</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Decision Problems:</h2>
      <p className="mb-4">
        A decision problem occurs when a given input requires a binary response,
        either Yes or No. Responses may take various forms, such as true or
        false. Figure 2.1 visually illustrates a simple decision problem. In
        complex cases, answers extend beyond a straightforward Yes-or-No,
        involving multiple decision factors and criteria.
      </p>
      <h3 className="text-lg font-medium mb-2">
        The examples of simple decision problems are:
      </h3>
      <ul className="list-disc list-inside mb-4">
        <li>The problem whether a given number is odd (or even).</li>
        <li>The problem whether a given number is a prime number.</li>
        <li>
          The problem that is there any occurrence of &quot;aa&quot;? in a
          sequence x of English alphabets.
        </li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Search Problems:</h2>
      <p className="mb-4">
        In science and engineering, many problems are solved using search. In
        such types of problems, we have a set of objects among which we search
        for the solution. For example, finding a path between two cities. Search
        problems are often represented using graphs, where we have nodes and
        each link connects two nodes. A node can be connected to multiple nodes.
      </p>
      <p className="mb-4">To solve such problems, we have three things:</p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Initial State:</strong> Represents the node from where we need
          to start the search.
        </li>
        <li>
          <strong>Operations:</strong> Represents the moves that transition from
          one node to another.
        </li>
        <li>
          <strong>Goal:</strong> Defines the target or end condition.
        </li>
      </ul>
      <h3 className="text-lg font-medium mb-2">Examples:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Route Finding Problem:</strong> The map shown in Fig. 2.2
          corresponds to a graph, where the nodes are assumed as cities and the
          links between nodes represent the routes between cities. The problem
          is to find a route in the graph from city S to city T.
        </li>
        <li>
          <strong>Eight Puzzle Problem:</strong> A 3x3 board is given that
          contains 8 tiles (each tile containing a number ranging from 1 to 8)
          and one empty space. The goal is to place the numbers on tiles in a
          specific ordering that matches the final configuration using the empty
          space. However, only one tile can be moved at a time, and only four
          types of slides are allowed (left, right, above, and below).
        </li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Counting Problems:</h2>
      <p className="mb-4">
        These problems work on the principle that if an event/decision has A
        number of choices and another decision/event has B number of choices
        then the total number of possible unique combinations would be AxB.
      </p>
      <p>Let&apos;s solve counting problems.</p>
      <h3 className="text-lg font-medium mb-2">Example:</h3>
      <p className="mb-4">
        One event is numbers of shirts, and another event is number of pants you
        own then how many pairs of shirts and pants you can make from it.
      </p>
      <p className="text-xl">Solution:</p>
      <p className="mb-4 font-semibold">
        Total possible casual dresses = (number of shirts) x (number of pants).
      </p>
      <p className="mb-4 font-semibold">Total casual dresses = 5 x 3 = 15</p>
      <p>
        The counting problems are normally seen as an easy task that can
        immediately be done. As we go deeper, the counting problems can get
        complicated very quickly if we want to list out all of the
        possibilities.
      </p>
      <h2 className="text-xl font-semibold mt-4">Example:</h2>
      <p>
        Fig. 2.6: Counting Problem Example 2 <br />
        You visit a computer shop to buy a computer system for you. The vender
        asks you to choose one of 4 monitors, one of 2 keyboards, one of 4
        computers and one of 3 printers. How many numbers of possible systems
        you can choose from?
      </p>
      <h3 className="text-lg font-semibold mt-4">Solution</h3>
      <p>
        You must choose 1 monitor, 1 keyboard, 1 computer and 1 printer. The
        below given diagram shows each component of the computer system with the
        number of choices you have.
      </p>
      <p>
        For the computer system elements, we have 4 monitors, 2 keyboard, 4
        computers and 3 printers. Using the counting principle, the number of
        all possible computer systems that you can buy is given by:
      </p>
      <p className="font-bold">N = 4 x 2 x 4 x 3 = 96</p>
      <h2 className="text-xl font-semibold mt-4">2.3 Problem Solving</h2>
      <p>
        Problem solving defines the process of analyzing some situation and
        accordingly behaving to generate some response. For simple problems the
        following 4 steps are used:
      </p>
      <ul className="list-disc pl-6">
        <li>
          Define and analyze a problem: What is the problem and why it is
          happening.
        </li>
        <li>Design a plan: What we are going to do (Algorithm)</li>
        <li>Implement the plan: Code it by using some programming language.</li>
        <li>Evaluate: did our plan work?</li>
      </ul>
      <p className="mt-4">
        However, for complex problems, the 6 step problem solving process could
        be used:
      </p>
      <ul className="list-disc pl-6">
        <li>Define and analyze a problem</li>
        <li>Decompose the problem: make sub-problems that are manageable</li>
        <li>
          Identify potential plans for each sub-problem: such as plan A, plan B
          and plan C
        </li>
        <li>Select and design best plan</li>
        <li>Implement that plan</li>
        <li>Evaluate</li>
      </ul>
      <p className="mt-4">
        Before jumping into an action for a problem, it must be thoroughly
        investigated capture all the relevant aspects of the problem. For this
        purpose, we properly define ar analyze a problem. In defining a problem,
        there must be clarity and the objectives of the problem must be
        specified.
      </p>
    </div>
  );
}
