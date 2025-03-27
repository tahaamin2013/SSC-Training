// pages/nature-of-science.tsx

import { NextPage } from 'next';
import Head from 'next/head';

const NatureOfScience: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nature of Science in Chemistry</title>
        <meta name="description" content="Nature of Science in Chemistry - Unit 01" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-8 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">UNIT 01 - NATURE OF SCIENCE IN CHEMISTRY</h1>
          <h4 className="text-lg font-semibold mb-4">Student Learning Outcomes (SLOS)</h4>
          <ul className="list-disc list-inside mb-8">
            <li>Define chemistry as the study of matter, its properties, composition, and its interactions with other matter and energy.</li>
            <li>Explain with examples that chemistry has many sub-fields and interdisciplinary fields.</li>
            <li>Formulate examples of essential questions that are important for the branch of chemistry.</li>
            <li>Differentiate between &apos;science&apos; &apos;technology&apos; and &apos;engineering&apos; by referring to examples from the physical sciences.</li>
          </ul>

          <h5 className="text-md font-semibold mb-4">1.1 DEFINITION OF CHEMISTRY AND ITS INTERACTION WITH OTHER MATTER AND ENERGY:</h5>
          <p className="mb-4">
            Chemistry is defined as the science that studies the materials of the universe and the changes that these materials undergo. Understanding the composition, structure, properties, behavior, and changes of matter and energy helps to explain natural phenomena and apply them to the development of essential substances, drugs, and technologies.
          </p>
          <p className="mb-4">
            Understanding the fundamentals of chemistry helps to explain natural phenomena and apply them to the development of essential substances, drugs, and technologies.
          </p>

          <h5 className="text-md font-semibold mb-4">DO YOU KNOW?</h5>
          <p className="mb-4">
            How green chemistry is helpful in understanding and reducing pollution?
          </p>
          <p>
            Green chemistry is the model of chemical products and processes that reduce the use of hazardous substances.
          </p>
        </div>
      </main>
    </>
  );
};

export default NatureOfScience;
