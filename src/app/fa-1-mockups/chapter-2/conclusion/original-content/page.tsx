import React from 'react'

const page = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow space-y-6">
    <h1 className="text-2xl font-bold mb-4">PAY RECORDING FINANCIAL TRANSACTIONS</h1>
    <h2 className="text-xl font-semibold mb-2">CONCLUSION</h2>
    <p>
      In this chapter you reviewed a variety of documents used by a business as evidence of transactions. You will appreciate that they differ depending on their purpose and are often issued in order to indicate different stages of, for example, the sale or purchase of goods andlor services as indicated below.
    </p>
    <h3 className="text-lg font-semibold mt-4">DOCUMENT FLOW</h3>
    <div className="flex flex-col md:flex-row gap-4 mt-2">
      <div>
        <span className="font-semibold">Purchaser</span>
        <ul className="list-disc list-inside ml-4">
          <li>Enquiry</li>
          <li>Purchase order</li>
          <li>Goods received note - internal document only (produced and retained by the purchaser when goods actually received)</li>
          <li>If any goods-damaged, etc. goods returns note</li>
          <li>Statement and remittance advice</li>
          <li>Payment with remittance advice</li>
        </ul>
      </div>
      <div>
        <span className="font-semibold">Supplier</span>
        <ul className="list-disc list-inside ml-4">
          <li>Acknowledgement, catalogue, price list</li>
          <li>Confirmation of receipt of order</li>
          <li>Advice note/delivery note/despatch note</li>
          <li>Invoice</li>
          <li>Credit note</li>
        </ul>
      </div>
    </div>
    <p className="mt-4">
      Documents, particularly associated with making payments, must be properly authorised. Generally this takes the form of the signature of an authorised person. Documents are used throughout a business to record transactions and the financial implications of those transactions.
    </p>
    <p>
      Key documents used in recording financial transactions are invoices, credit notes, receipts and petty cash vouchers. Statements and payslips are useful summaries which can be used as a check of transactions.
    </p>
      </div>
    </div>
  )
}

export default page
