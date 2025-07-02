import React from 'react'

const page = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow space-y-6">
      <h1 className="text-2xl font-bold mb-4">
        4 PROCESSING A CREDIT TRANSACTION: A CREDIT SALE
      </h1>
      <p>
        Businesses usually like to receive an order in writing for a credit transaction. It helps to have a written order in the event of any subsequent disagreement with the customer. Even when a customer makes the order by telephone, the supplier usually asks the customer to confirm the order in writing, or will make a written or computerised record of the order.
      </p>
      <p>
        Since the customer initiates the written order, the order document is a purchase order.
      </p>
      <p>
        On receipt of the order, a member of the sales team or order processing team must check the order details, to ensure that they are valid and correct. At this stage, it may be necessary to check that the customer has enough credit left, and that the order would not exceed the customer's credit limit.
      </p>
      <p>
        If the order is for the purchase of goods that the supplier already has in available e.g. in its warehouse, the supplier will produce a dispatch note for the warehouse and a delivery note. (In practice, it is likely that the order details will be keyed into a computer system, which then produces a dispatch note and delivery note automatically.)
      </p>
      <p>
        The goods are then delivered to the customer, who signs the delivery note. A copy of the delivery note is returned to the supplier, as evidence that the customer has taken possession of the goods. The delivery note is matched with the purchase order.
      </p>
      <p>
        The purchase order details are also used to produce an invoice. For the seller, it is called a sales invoice. One copy goes to the customer. One or more copies are kept by the supplier. An invoice can be used, when the customer eventually pays, to check that the payment is correct. The invoice might even be stamped 'PAID' to show that the customer no longer owes the money. (In practice, invoice details are usually held on computer, and when a customer pays, the computer record is used to check that the payment is correct, and is updated to record the fact that the customer has now paid.)
      </p>
      <p>
        When a customer pays, the payment might be accompanied by a remittance advice.<br />
        This is a document containing details of the payment, including the sales invoice number. A remittance advice can be valuable in helping the supplier to recognise what the payment is for, and which invoice or invoices is/are being paid.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">4.1 THE SALES INVOICE</h2>
      <p>
        Invoices are particularly important source documents used to record credit sales and credit purchases.<br />
        An example of a sales invoice is shown below with along with a description of its contents. The contents will be explained in more depth in a subsequent chapter.
      </p>
          <div className="max-w-3xl mx-auto p-8 bg-gray-50">
      <div className="bg-white border-2 border-black p-8 font-sans text-sm">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex-1 pr-4">
            <div className="flex items-baseline mb-2">
              <span className="text-xs text-gray-600 mr-2">(b)</span>
              <div className="flex-1">
                <div className="font-bold text-base">BLACKHILL FILES</div>
                <div>742 St Anne's Way</div>
                <div>York YO5 4NP</div>
                <div>Telephone: 01904 27635</div>
              </div>
            </div>
            <div className="flex items-baseline mt-4">
              <span className="text-xs text-gray-600 mr-2">(c)</span>
              <div className="flex-1">
                <span className="font-medium">Invoice No.</span> 23100
              </div>
            </div>
          </div>
          <div className="w-24 h-24 flex-shrink-0">
          
          </div>
        </div>

        {/* Sales Invoice Title */}
        <div className="text-center text-xl font-bold mb-8">SALES INVOICE</div>

        {/* Customer and Account Details */}
        <div className="flex justify-between mb-6">
          <div className="flex-1 pr-4">
            <div className="flex items-baseline mb-2">
              <span className="text-gray-700 mr-4">Customer</span>
              <span className="text-xs text-gray-600 mr-2">(a)</span>
              <div className="flex-1">
                <div>John Forrester Wholesale Supplies Ltd</div>
                <div>Unit 79B</div>
                <div>Oakhampton Industrial Estate</div>
                <div>Bristol BS27 4JW</div>
              </div>
            </div>
            <div className="flex items-baseline mt-4">
              <span className="text-gray-700 mr-4">Date/ Tax Point:</span>
              <span className="text-xs text-gray-600 mr-2">(d)</span>
              <div className="flex-1">
                <span>24 June 20X4</span>
              </div>
            </div>
            <div className="flex items-baseline mt-2">
              <span className="text-gray-700 mr-4">Order No:</span>
              <span className="text-xs text-gray-600 mr-2">(f)</span>
              <div className="flex-1">
                <span>E10741</span>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 text-right pt-8">
            <span className="text-xs text-gray-600 mr-2">(e)</span>
            <div>Account: 84163</div>
          </div>
        </div>

        {/* Invoice Items Table */}
        <div className="border border-black mb-6">
          <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr] text-center font-bold border-b border-black">
            <div className="p-2 border-r border-black">Item No.</div>
            <div className="p-2 border-r border-black">Description</div>
            <div className="p-2 border-r border-black">Quantity</div>
            <div className="p-2 border-r border-black">Unit value</div>
            <div className="p-2">Total £</div>
          </div>
          <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr] text-center">
            <div className="p-2 border-r border-black flex items-baseline justify-center">
              <span className="text-xs text-gray-600 mr-1">(g)</span>
              <span>17340</span>
            </div>
            <div className="p-2 border-r border-black text-left">A5 Lever Arch File</div>
            <div className="p-2 border-r border-black">500</div>
            <div className="p-2 border-r border-black">$3.00</div>
            <div className="p-2">1,500.00</div>
          </div>
          <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr] text-center border-t border-black">
            <div className="p-2 border-r border-black">10691</div>
            <div className="p-2 border-r border-black text-left">A4 2 Hole Ring Binder</div>
            <div className="p-2 border-r border-black">2,000</div>
            <div className="p-2 border-r border-black">$1.75</div>
            <div className="p-2">3,500.00</div>
          </div>
          <div className="grid grid-cols-[1fr_1fr] text-right border-t border-black">
            <div className="col-span-1 p-2 font-bold border-r border-black">Total</div>
            <div className="col-span-1 p-2 font-bold">$5,000.00</div>
          </div>
        </div>

        {/* Terms */}
        <div className="mb-8">
          <p className="text-gray-700">
            Terms: 5% settlement discount for payment within 10 days, otherwise net 30 days{" "}
            <span className="text-xs text-gray-600">(h)</span>
          </p>
          <span className="text-xs text-gray-600 ml-16">(i)</span>
        </div>

        {/* Legend */}
      
      </div>
    </div>
      <div className="border-t border-black pt-4">
          <div className="mb-1">
            <span className="font-bold mr-2">(a)</span> Customer name and address
          </div>
          <div className="mb-1">
            <span className="font-bold mr-2">(b)</span> Name of your business, business address and telephone number
          </div>
          <div className="mb-1">
            <span className="font-bold mr-2">(c)</span> Invoice number
          </div>
          <div className="mb-1">
            <span className="font-bold mr-2">(d)</span> Invoice date
          </div>
          <div className="mb-1">
            <span className="font-bold mr-2">(e)</span> Customer account reference
          </div>
          <div className="mb-1">
            <span className="font-bold mr-2">(f)</span> Order number
          </div>
          <div className="mb-1">
            <span className="font-bold mr-2">(g)</span> Quantity, description and price of goods
          </div>
          <div className="mb-1">
            <span className="font-bold mr-2">(h)</span> Final total value
          </div>
          <div className="mb-1">
            <span className="font-bold mr-2">(i)</span> Settlement terms - these state when the invoice should be paid
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
