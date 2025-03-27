// pages/molecular-formula.js

export default function MolecularFormula() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="prose prose-lg">
        <h2 className="text-2xl font-bold mb-6">6.7 MOLECULAR AND STRUCTURAL FORMULA</h2>
        
        <p className="mb-4">
          A structural formula of a compound shows the arrangement of atoms present in it. Whereas a molecular formula shows the number of atoms of each element. For example,
        </p>

        <div className="bg-gray-50 p-4 rounded-lg my-4">
          <p>
            Structural formula of n-Butane is CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub> and its molecular formula is C<sub>4</sub>H<sub>10</sub>
          </p>
        </div>

        <p className="mb-4">
          How can you write the molecular formula of a compound from its structural formula?
        </p>

        <p className="mb-4">Follow the following steps:</p>
        <ol className="list-decimal pl-6 space-y-2 mb-6">
          <li>Identify different types of elements present in the structural formula.</li>
          <li>Write symbols of these elements side by side in a line.</li>
          <li>Count the number of atoms of each element from the structural formula.</li>
          <li>Show this number of atoms as subscripts of symbol of corrosponding element.</li>
        </ol>

        <div className="bg-gray-50 p-4 rounded-lg my-6">
          <h3 className="font-bold mb-3">Example 6.13: Writing the molecular formula of the following compound.</h3>
          <p className="font-mono mb-2">
            CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-OH
          </p>
          <p className="mt-2">
            Solution: C<sub>3</sub>H<sub>8</sub>O
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg my-6">
          <h3 className="font-bold mb-3">CONCEPT ASSESSMENT EXERCISE 6.8</h3>
          <p>Write the molecular formulae of the following compounds:</p>
          <ol className="list-decimal pl-6 space-y-2 mt-3">
            <li>
              <span className="font-mono">CH<sub>3</sub>-CH<sub>2</sub>-OH</span>
            </li>
            <li>
              <span className="font-mono">CH<sub>3</sub>-CH<sub>2</sub>-NH<sub>2</sub></span>
            </li>
            <li>
              <span className="font-mono">CH<sub>3</sub>-CO-CH<sub>3</sub></span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}