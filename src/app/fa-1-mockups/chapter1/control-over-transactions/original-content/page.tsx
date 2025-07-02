import React from 'react'

const page = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">8 CONTROL OVER TRANSACTIONS</h1>
      <p className="mb-4">
        If many people in a business are involved in entering into and authorising a range of transactions then it is important that these transactions are properly controlled. This has two aspects:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          only properly authorised employees can enter into transactions on behalf of the business. For example only properly trained sales assistants can make sales to customers and only the departmental buyer can enter into a transaction to buy goods for the store.
        </li>
        <li>
          transactions are carried out in the correct manner and following the correct procedures. For example, each time a shop assistant makes a sale the amount of the sale must be entered into the till or cash register and the money received placed into the till.
        </li>
      </ul>
      <p className="mb-4">
        When a transaction takes place in a business, the systems that the business operates should ensure the correct recording of that transaction
      </p>
      <p className="mb-4">
        For example when money is received for a cash sale this receipt must be recorded as part of the monies received during the day and also as a sale. The accounting systems should ensure that the cash received is recorded in the till and recorded on the till roll. This receipt should then also be recorded in the accounting system as a sale.
      </p>
      <p className="mb-4">
        However, on occasions, errors may be made when transactions are recorded. Businesses will therefore usually have a variety of internal checks or controls in order to identify any errors made so that they can be corrected.
      </p>
      <h2 className="text-xl font-semibold mb-2">8.1 EXAMPLES</h2>
      <p className="mb-2">
        Depending upon the size and structure of a business, it may operate a number of internal checks and controls including:
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>reconciliations of cash in the till or cash register to the till roll records</li>
        <li>checking of the addition of cheque listings used to complete paying in slips</li>
        <li>reconciliations of amounts of petty cash held to the petty cash records</li>
        <li>checking of accounting entries</li>
        <li>checking of bank payments made or petty cash authorisations, and</li>
        <li>reconciliations of bank and cash records to bank statements received.</li>
      </ul>
    </div>
  )
}

export default page
