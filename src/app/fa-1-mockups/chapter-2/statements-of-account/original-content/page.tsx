import React from 'react'

const page = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow space-y-6">
   
  <h2 className="text-2xl font-bold mb-4">6 STATEMENTS OF ACCOUNT</h2>
  <p>
    Instead of issuing a remittance advice to customers with each invoice, a business may, instead, choose to issue a statement of account to each customer at regular Intervals, typically every month.
  </p>
  <p>
    A statement of account shows how much the customer still owes. It may show the total amount owed by the customer at the date of the previous statement of account, the new invoices issued to the customer since then, the amounts the customer has paid, and, finally, the total amount still owed by the customer.
  </p>
  <p>
    An example of a statement of account is shown below. This has been issued by a business called Disks and Labels Ltd to its customer, J Forrester Wholesale Supplies Ltd.
  </p>



    <div className="max-w-4xl mx-auto p-8 bg-gray-50">
      <div className="bg-white border-2 border-black p-8 font-sans text-sm">
        {/* Company Header */}
        <div className="text-center mb-8">
          <h1 className="text-lg font-bold mb-1">DISKS AND LABELS LTD</h1>
          <p>76 Wood End Road</p>
          <p>Newcastle Upon Tyne</p>
          <p>NE4 9AJ</p>
          <p className="mt-2">Tel: 0141 839 4444</p>
        </div>

        {/* Customer and VAT Info */}
        <div className="flex justify-between mb-6">
          <div className="flex-1 pr-4">
            <div>J Forrester Wholesale Supplies Ltd</div>
            <div>Unit 79b</div>
            <div>Oakhampton Industrial Estate</div>
            <div>Bristol BS27 4JW</div>
          </div>
          <div className="flex-shrink-0 text-right">
            <div>VAT Reg No. 341 5079 584</div>
          </div>
        </div>

        {/* Date and Title */}
        <div className="flex justify-between items-baseline mb-6">
          <div className="flex items-baseline">
            <span className="font-bold mr-2">Date:</span> 5 June 20X3
          </div>
          <div className="text-xl font-bold">STATEMENT OF ACCOUNT</div>
        </div>

        {/* Account Statement Table */}
        <div className="border border-black mb-8">
          <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1.5fr] text-center font-bold border-b border-black">
            <div className="p-2 border-r border-black">Date</div>
            <div className="p-2 border-r border-black">Description</div>
            <div className="p-2 border-r border-black">$</div>
            <div className="p-2 border-r border-black">$</div>
            <div className="p-2">
              Balance <br /> owing ($)
            </div>
          </div>
          {/* Table Rows */}
          <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1.5fr] text-center">
            <div className="p-2 border-r border-black">14 May</div>
            <div className="p-2 border-r border-black text-left">Balance B/f</div>
            <div className="p-2 border-r border-black"></div>
            <div className="p-2 border-r border-black"></div>
            <div className="p-2">1,729.46</div>
          </div>
          <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1.5fr] text-center border-t border-black">
            <div className="p-2 border-r border-black">26 May</div>
            <div className="p-2 border-r border-black text-left">Invoice 314/X5</div>
            <div className="p-2 border-r border-black">397.42</div>
            <div className="p-2 border-r border-black"></div>
            <div className="p-2">2,126.88</div>
          </div>
          <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1.5fr] text-center border-t border-black">
            <div className="p-2 border-r border-black">29 May</div>
            <div className="p-2 border-r border-black text-left">Invoice 386/X5</div>
            <div className="p-2 border-r border-black">927.04</div>
            <div className="p-2 border-r border-black"></div>
            <div className="p-2">3,053.92</div>
          </div>
          <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1.5fr] text-center border-t border-black">
            <div className="p-2 border-r border-black">3 June</div>
            <div className="p-2 border-r border-black text-left">Cheque rec'd</div>
            <div className="p-2 border-r border-black"></div>
            <div className="p-2 border-r border-black">1,729.46</div>
            <div className="p-2">1,324.46</div>
          </div>
          <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1.5fr] text-center border-t border-black">
            <div className="p-2 border-r border-black">4 June</div>
            <div className="p-2 border-r border-black text-left">Invoice 019/X5</div>
            <div className="p-2 border-r border-black">1,062.96</div>
            <div className="p-2 border-r border-black"></div>
            <div className="p-2">2,387.42</div>
          </div>
          {/* Amount now due */}
          <div className="grid grid-cols-[1fr_1.5fr] text-center border-t border-black">
            <div className="col-span-1 p-2 text-right font-bold">Amount now due</div>
            <div className="col-span-1 p-2 border-l border-black font-bold">2,387.42</div>
          </div>
        </div>
      </div>
    </div>













  <p>
    A customer may return the statement of account with the next payment. If so, the statement of account may also be used in a similar way to a remittance advice.
  </p>
  <p>
    When the customer receives the monthly statement of account, the customer will reconcile it against the record held of the previous transactions. Any discrepancies are queried with the supplier. Because the statement is produced by a supplier, it acts as a useful external check of the internal records of the customer.
  </p>
  <p>
    Statements of account represent the ledger account of the customer in the supplier's books of account
  </p>
      </div>
    </div>
  )
}

export default page
