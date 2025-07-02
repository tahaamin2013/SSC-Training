import React from 'react'

const page = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow space-y-6">
      
      <h1 className="text-2xl font-bold">8 PETTY CASH CLAIM</h1>
      <p>
        The petty cash system within a business also has its own documents.
        The initial record of any petty cash claim is a petty cash voucher.
        Blank petty cash vouchers are obtainable from stationery suppliers in pads, and each voucher is torn off the pad when it is used.
        An example of a blank voucher is shown below.
      </p>
      </div>
      <div className="max-w-xl mx-auto p-8 bg-gray-50">
      <div className="bg-white border-2 border-black p-8 font-sans text-sm">
        {/* Top Section */}
        <div className="flex justify-between items-baseline mb-4">
          <div className="font-bold text-base">Petty Cash Voucher</div>
          <div className="flex items-baseline">
            <span className="mr-2">No.</span>
            <span className="flex-1 border-b border-gray-400 w-24"></span>
          </div>
        </div>
        <div className="flex items-baseline mb-6">
          <span className="mr-2">Date</span>
          <span className="flex-1 border-b border-gray-400 w-32"></span>
        </div>

        <hr className="border-t border-black mb-6" />

        {/* Middle Section - For what required and Amount */}
        <div className="flex justify-between items-start mb-6">
          <div className="font-bold text-base">For what required</div>
          <div className="text-center">
            <div className="font-bold text-base">AMOUNT</div>
            <div className="flex justify-center gap-4 mt-1">
              <span className="font-bold text-base">$</span>
              <span className="font-bold text-base">¢</span>
            </div>
          </div>
        </div>

        {/* Large Blank Area with Columns */}
        <div className="border border-black h-48 mb-6 flex">
          <div className="flex-1 border-r border-black"></div>
          <div className="w-24 border-r border-black"></div>
          <div className="w-24"></div>
        </div>

        <hr className="border-t border-black mb-6" />

        {/* Bottom Section - Signatures */}
        <div className="mb-4">
          <div className="flex items-baseline mb-4">
            <span className="mr-4 min-w-[80px]">Signature</span>
            <span className="flex-1 border-b border-gray-400"></span>
          </div>
          <div className="flex items-baseline">
            <span className="mr-4 min-w-[80px]">Authorised</span>
            <span className="flex-1 border-b border-gray-400"></span>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow space-y-4 mt-8">
      <h2 className="text-xl font-bold">Notes on completing a voucher</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Petty cash vouchers should be given a unique identification number. For control purposes, they should be numbered sequentially by the person with responsibility for accounting for petty cash.</li>
        <li>Each voucher should be dated (with the date it is completed and authorised).</li>
        <li>The details of the expenditure and the amount should be entered. If there is a receipt, this should be attached by a staple or paper clip.</li>
        <li>The person claiming the petty cash should sign the voucher.</li>
        <li>The person authorising payment of the claim should also sign the voucher.</li>
      </ul>
      <h2 className="text-xl font-bold mt-6">8.1 SUPPORTING DOCUMENTATION</h2>
      <p>
        To ensure that a petty cash claim is a valid business expense, each claim must normally be supported by documentation demonstrating that the expense is genuine. Before the petty cash claim is authorised, this supporting documentation must be checked.
      </p>
      <p>
        Most types of petty cash claim are for straightforward office expenses such as the purchase of office refreshments, postage stamps, or local train, bus or taxi fares to attend meetings. In these cases, a simple receipt is sufficient evidence of the payment for the expense. For train fares, the ticket itself may be used as the evidence.
      </p>
      <p>
        However, if the payment includes sales tax (such as 'value added tax' or 'VAT in the UK), a proper receipt showing the supplier's name and the sales tax registration number is required. Most till roll receipts do show this information.
      </p>
      <p>
        In each case the supporting documentation should be attached to the petty cash claim.
      </p>
      <p>
        Many of the examples throughout this publication use VAT as an example of the sales tax that may be included within relevant documents.
      </p>
    </div>
    </div>
  )
}

export default page
