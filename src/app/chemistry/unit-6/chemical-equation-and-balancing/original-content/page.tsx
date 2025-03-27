export default function ChemicalEquationsAndBalancing() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">6.6 CHEMICAL EQUATION AND BALANCING</h2>
      <p className="mb-2">
        The symbolic representation of a chemical reaction is called a chemical equation. The reactants in a chemical equation are the substances that initiate the chemical reaction, and the products are the substances that are formed during the chemical reaction. Reactants are always written on the left of the equation and products on the right, with an arrow between them used to show the direction of the chemical change.
      </p>
      <p className="mb-2">
        For writing a chemical equation, follow these steps:
        <br />
        <strong>Step 1:</strong> Identify reactants and products and write a word equation for the reaction. Represent the chemical equation as follows:
        <br />
        <strong>Reactants → Products</strong>
        <br />
        <strong>Step 2:</strong> Write the symbols and formulae of reactants and products. Indicate their physical states in parentheses. Use <strong>s</strong> for solid, <strong>l</strong> for liquid, <strong>g</strong> for gas, and <strong>aq</strong> for aqueous.
      </p>

      <h3 className="text-lg font-semibold mb-2">Example 6.11: Burning of Coal</h3>
      <p className="mb-2">
        The burning of coal can be represented as follows:
        <br />
        Coal + Oxygen → Carbon Dioxide
        <br />
        C<sub> + 0<sub>2</sub> → CO<sub>2</sub></sub>
      </p>

      <h4 className="text-md font-medium mb-2">CONCEPT ASSESSMENT EXERCISE 6.6</h4>
      <p className="mb-2">
        Represent the following chemical reactions by chemical equations:
        <br />
        1. Burning of hydrogen (H<sub>2</sub>) to produce water.
        <br />
        2. Burning of magnesium (Mg) to produce magnesium oxide (MgO).
      </p>

      <h3 className="text-lg font-semibold mb-2">6.6.1 Balancing a Chemical Equation</h3>
      <p className="mb-2">
        A chemical reaction only changes the arrangements of atoms. The number of atoms remains the same. Count the number of atoms of each type in the following equation:
        <br />
        <strong>Reactants:</strong> C + O<sub>2</sub>
        <br />
        <strong>Products:</strong> CO<sub>2</sub>
        <br />
        1 C-atom on both sides
        <br />
        2 O-atoms on both sides
        <br />
        Note that the number of atoms of each type are the same on the reactant side adn the product side. Such a chemical equation is called a balanced chemical equation dead the product
chemical reaction, it is unbalanced? <br /> Consider the following reaction;
      </p>
      <p className="mb-2">
        <br />
        <strong>Reactants:</strong> CH<sub>4</sub> + O<sub>2</sub>
        <br />
        <strong>Products:</strong> CO<sub>2</sub> + H<sub>2</sub>O
        <br />
        1 C-atom on both sides
        <br />
        4 H-atoms on the left and 2 H-atoms on the right
        <br />
        2 O-atoms on the left and 3 O-atoms on the right
      </p>
     <p>
          C-atoms are balanced, but H and O-atoms are unbalanced.
          Balance one element at a time. To balance the chemical equation use co-efficients. Always start with the lowest co-efficient. Remember that you should not change subscripts in a chemical formula.
        </p>

        <h3 className="font-bold mt-6 mb-4">Step 1</h3>
        <div className="my-4">
          Put a co-efficient 2 before H<sub>2</sub>O to balance H-atoms.
          <div className="my-2 font-mono">
            CH<sub>4</sub>(g) + O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O
          </div>
        </div>

        <h3 className="font-bold mt-6 mb-4">Step 2</h3>
        <div className="my-4">
          Now balance O-atoms. There are 2 O-atoms on the left side and 3 O-atoms on the right side. Put 2 before O<sub>2</sub>,
          <div className="my-2 font-mono">
            CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O
          </div>
        </div>

        <h3 className="font-bold mt-6 mb-4">Step 3</h3>
        <p>
          Now check the equation again, it is balanced.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">6.6.2 Exploring ionic equation</h2>
        <p>
          A chemical equation in which substances dissolved in water are written as individual ions is called an ionic equation. For example,
        </p>
        <div className="my-4 font-mono">
          HCl(aq) + NaOH(aq) → NaCl(aq) + H<sub>2</sub>O(l)
        </div>

        <p className="mt-4">
          Write the substances that are soluble in water in their dissociated form.
        </p>
        <div className="my-4 font-mono">
          H<sup>+</sup>(aq) + Cl<sup>-</sup>(aq) + Na<sup>+</sup>(aq) + OH<sup>-</sup>(aq) → Na<sup>+</sup>(aq) + Cl<sup>-</sup>(aq) + H<sub>2</sub>O(l)
        </div>

        <p className="mt-4">
          Remove common ions from both sides. These ions do not actually take part in the chemical reaction and are called spectator ions. Write net ionic equation.
        </p>
        <div className="my-4 font-mono">
          H<sup>+</sup>(aq) + OH<sup>-</sup>(aq) → H<sub>2</sub>O(l)
        </div>

        <h3 className="font-bold mt-6 mb-4">Example 6.12: Transform the following chemical equations into ionic equations.</h3>
        <div className="my-4 font-mono">
          Mg + H<sub>2</sub>SO<sub>4</sub> → MgSO<sub>4</sub> + H<sub>2</sub>
          <br />
          Mg<sup>2+</sup> + H<sup>+</sup> + SO<sub>4</sub><sup>2-</sup> → Mg<sup>2+</sup> + SO<sub>4</sub><sup>2-</sup> + H<sub>2</sub>
          <br />
          Mg + 2H<sup>+</sup> → Mg<sup>2+</sup> + H<sub>2</sub>
        </div>

        <h3 className="font-bold mt-6 mb-4">CONCEPT ASSESSMENT EXERCISE 6.7</h3>
        <p>
          Transform the following chemical equations into ionic equations.
        </p>
        <div className="my-4 font-mono">
          1. AgNO<sub>3</sub> + NaCl → AgCl + NaNO<sub>3</sub>
          <br />
          2. Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub>
        </div>
 </div>
  );
}
