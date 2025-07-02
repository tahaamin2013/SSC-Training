import React from 'react'

const page = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow space-y-6">
      <h2 className="text-xl font-bold">7.1 SALES RETURNS AND CREDIT NOTES TO CUSTOMERS</h2>
      <p>
        It is quite common in business for a customer to return goods to a supplier, perhaps because some of the goods are faulty, or not what the customer ordered. Sometimes, goods are sold to a retailer on a 'sale or return' basis, which means that if the retailer doesn't resell the goods within an agreed period of time, they can be return the goods to the supplier.
      </p>
      <p>
        Suppose for example that a book publisher sells 100 copies of a book on credit to a book distributor at a price of $15 per book on a 'sale or return' basis. The publisher will initially send an invoice to the distributor for $1,500. Some weeks later, the distributor may send back 20 of the books because they were not needed and there is a sale or return agreement in place. The amount owed by the distributor is now just $1,200, not $1.500.
      </p>
      <p>
        It might seem logical to suppose that the publisher will issue a new invoice for $1,200 to replace the original invoice for $1,500. However, if the book distributor is a regular customer of the publisher (an 'account customer'), this isn't what happens. Instead of issuing a new invoice to replace the old invoice:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>the original invoice for $1,500 remains valid</li>
        <li>
          the publisher issues a document called a credit note. In this example, the credit note will be for $300 (20 books at $15 each). A credit note could be described as a negative invoice. It is a statement that the supplier (the book publisher in this example) is reducing the amount owed by the customer. Here, the effect of the credit note is to reduce the amount owing on the book distributor's 'account' by $300, so the net amount owed by the book distributor is just $1,200 ($1,500 $300).
        </li>
      </ul>
      <p>
        A credit note looks similar to a sales invoice. An example of a credit note is shown below. This has been issued by a supplier of office stationery, to an account customer who has returned some items of stationery that had been purchased but had been damaged in transit.
      </p>
      </div>

 
    <div className="max-w-3xl mx-auto p-8 bg-gray-50">
      <div className="bg-white border-2 border-black p-8 font-sans text-sm">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex-1 pr-4">
            <div className="font-bold text-base mb-1">BLACKHILL FILES</div>
            <div>742 St Anne's Way</div>
            <div>York YO5 4NP</div>
            <div>Telephone: 01904 27635</div>
            <div className="mt-4">
              <span className="font-medium">Credit note No:</span> C456
            </div>
          </div>
          <div className="w-24 h-24 flex-shrink-0">
     
          </div>
        </div>

        {/* Credit Note Title */}
        <div className="text-center text-xl font-bold mb-8">CREDIT NOTE</div>

        {/* Customer and Account Details */}
        <div className="flex justify-between mb-6">
          <div className="flex-1 pr-4">
            <div className="flex items-start mb-2">
              <span className="text-gray-700 mr-4 min-w-[80px]">Customer</span>
              <div className="flex-1">
                <div>J Forrester Wholesale Supplies Ltd</div>
                <div>Unit 79B</div>
                <div>Oakhampton Industrial Estate</div>
                <div>Bristol BS27 4JW</div>
              </div>
            </div>
            <div className="flex items-baseline mt-4">
              <span className="text-gray-700 mr-4">Date/Tax Point:</span>
              <span>24 June 20X4</span>
            </div>
            <div className="flex items-baseline mt-2">
              <span className="text-gray-700 mr-4">Order No:</span>
              <span>E10741</span>
            </div>
          </div>
          <div className="flex-shrink-0 text-right pt-8">
            <div>Account: 84163</div>
          </div>
        </div>

        {/* Credit Items Table */}
        <div className="border border-black mb-6">
          <div className="grid grid-cols-5 text-center font-bold border-b border-black">
            <div className="p-2 border-r border-black">Item No.</div>
            <div className="p-2 border-r border-black">Description</div>
            <div className="p-2 border-r border-black">Quantity</div>
            <div className="p-2 border-r border-black">Unit value</div>
            <div className="p-2">
              Total <br /> $
            </div>
          </div>
          <div className="grid grid-cols-5 text-center">
            <div className="p-2 border-r border-black">17340</div>
            <div className="p-2 border-r border-black text-left">A5 Lever Arch File</div>
            <div className="p-2 border-r border-black">50</div>
            <div className="p-2 border-r border-black">$3.00</div>
            <div className="p-2">150.00</div>
          </div>
          <div className="grid grid-cols-5 text-center border-t border-black">
            <div className="p-2 border-r border-black">10691</div>
            <div className="p-2 border-r border-black text-left">A4 2 Hole Ring Binder</div>
            <div className="p-2 border-r border-black">100</div>
            <div className="p-2 border-r border-black">$1.75</div>
            <div className="p-2">175.00</div>
          </div>
          <div className="grid grid-cols-[1fr_1fr] text-right border-t border-black">
            <div className="col-span-1 p-2 font-bold border-r border-black">Total</div>
            <div className="col-span-1 p-2 font-bold">$325.00</div>
          </div>
        </div>

        {/* Reason for return */}
        <div>
          <p className="text-gray-700">Reason for return: Damaged in transit</p>
        </div>
      </div>
    </div>

    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow space-y-6 mt-8">
      <h2 className="text-xl font-bold">7.2 CREDIT NOTE FOR PURCHASE RETURNS</h2>
      <p>
        Credit notes arise with purchases as well as sales, and for the same reasons. If the buyer is dissatisfied with the goods, and the seller agrees to take them back, the seller will issue a credit note for the items returned. The amount owed to the seller is then the amount of the original invoice less the value of the credit note.
      </p>
      <h2 className="text-xl font-bold">7.3 DEBIT NOTE</h2>
      <p>
        A debit note is a document raised by a customer and issued to a supplier to request a credit note for goods returned because, for example, they were faulty
      </p>
      <h2 className="text-xl font-bold">ACTIVITY 4</h2>
      <ol className="list-decimal list-inside space-y-4">
        <li>
          Which document is used to correct an overcharge in an original invoice?
          <div className="ml-4 space-y-1">
            <div>A Credit note</div>
            <div>B Debit note</div>
            <div>C Dispatch note</div>
            <div>D Goods received note</div>
          </div>
        </li>
        <li>
          Which document provides a summary of the credit transactions between a customer and supplier during the previous month?
          <div className="ml-4 space-y-1">
            <div>A Advice note</div>
            <div>B Internal cheque requisition</div>
            <div>C Invoice</div>
            <div>D Statement of account</div>
          </div>
        </li>
      </ol>
      <div className="mt-4">
        For a suggested answer, see the 'Answers' section at the end of the book
      </div>

    </div>

    </div>
  )
}

export default page
