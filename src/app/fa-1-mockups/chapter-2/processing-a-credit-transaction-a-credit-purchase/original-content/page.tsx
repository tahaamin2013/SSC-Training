import React from 'react'

const page = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow space-y-6">
       

      <h1 className="text-2xl font-bold mb-4">
        5 PROCESSING A CREDIT TRANSACTION: A CREDIT PURCHASE
      </h1>
      <p>
        It is important that purchases are properly authorised. If they are not, anyone could order whatever goods they want for any reason. For example, a junior office clerk may decide to order a new computer from a supplier because they want a machine that is faster and more powerful than the one they currently have. However, this should be properly authorised by a suitably responsible person, such as a senior manager. The manager may decide that the computer used by the clerk is sufficiently good enough and therefore refuse to authorise the purchase.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">5.1 PURCHASE REQUISITION</h2>
      <p>
        To authorise a purchase, it is usual to complete a form known as a purchase requisition. The form is prepared by the person requesting the goods, and is then signed by another person who has the authority to agree to the order being placed. (In much the same way, if an individual wants to obtain an item that is held in the warehouse, they may need to prepare a stores requisition, and have it authorised by an appropriate person.)
      </p>
      <p>
        The authorised purchase requisition is then given to a person whose job it is to place the order with a supplier. Larger businesses may have a purchasing department, with buyers whose job is to place orders with suppliers on the best financial and credit terms available. In smaller businesses, orders may be authorised and placed by a senior manager.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">5.2 PURCHASE ORDER</h2>
      <p>
        A purchase order is prepared and sent to the chosen supplier, after the details have been discussed with the supplier, and the sales price and credit terms agreed. Purchase orders should have a unique identification number (the purchase order number).
      </p>
      <p>
        An example of a purchase order is shown below together with a description of its contents.
      </p>







  <div className="max-w-3xl mx-auto p-8 bg-gray-50">
      <div className="bg-white border-2 border-black p-8 font-sans text-sm">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex-1 pr-4">
            <div className="flex items-baseline mb-2">
              <span className="text-xs text-gray-600 mr-2">(a)</span>
              <div className="flex-1">
                <div className="font-bold text-base">BLACKHILL FILES</div>
                <div>742 St Anne's Way</div>
                <div>York YO5 4NP</div>
                <div>Telephone: 01904 27635</div>
                <div className="flex items-baseline mt-1">
                  <span className="text-xs text-gray-600 mr-2">(b)</span>
                  <span>Registered in England, No 1457893</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-24 h-24 flex-shrink-0">
 
          </div>
        </div>

        {/* Purchase Order Title */}
        <div className="text-center text-xl font-bold mb-8">PURCHASE ORDER</div>

        {/* Supplier and Order Details */}
        <div className="flex justify-between mb-6">
          <div className="flex-1 pr-4">
            <div className="flex items-baseline mb-2">
              <span className="text-gray-700 mr-4">Printing Unlimited</span>
              <span className="text-xs text-gray-600 mr-2">(c)</span>
              <div className="flex-1">
                <div>80 New High Street</div>
                <div>Exeter</div>
                <div>EX4 2LP</div>
              </div>
            </div>
            <div className="flex items-baseline mt-4">
              <span className="text-gray-700 mr-4">Date:</span> 22 June 20X4
            </div>
          </div>
          <div className="flex-shrink-0 text-right">
            <div className="flex items-baseline mb-2">
              <span className="text-gray-700 mr-4">Order No:</span> 35762
              <span className="text-xs text-gray-600 ml-2">(d)</span>
            </div>
            <div className="flex items-baseline">
              <span className="text-gray-700 mr-4">Ref:</span> T.Holmes
              <span className="text-xs text-gray-600 ml-2">(e)</span>
            </div>
          </div>
        </div>

        {/* Order Details Box */}
        <div className="border border-black p-4 mb-6">
          <div className="flex items-baseline mb-2">
            <span className="text-xs text-gray-600 mr-2">(f)</span>
            <p className="flex-1">Please print 25,000 labels at $10.50 from copy supplied per 1,000</p>
          </div>
          <p className="ml-6 mb-2">Needed by 20 July 20X4</p>
          <p className="ml-6">Payment within 30 days of delivery.</p>
        </div>

        {/* Delivery To */}
        <div className="mb-8">
          <div className="flex items-baseline">
            <span className="text-gray-700 mr-4">Delivery to:</span> As above
            <span className="text-xs text-gray-600 ml-2">(g)</span>
          </div>
        </div>

        {/* Legend */}
        <div className="border-t border-black pt-4">
          <div className="mb-1">
            <span className="font-bold mr-2">(a)</span> <span className="font-bold">Business name</span>
          </div>
          <div className="mb-2 ml-4">This is the business name of the buyer.</div>
          <div className="mb-1">
            <span className="font-bold mr-2">(b)</span>{" "}
            <span className="font-bold">Registered office and business registration number</span>
          </div>
          <div className="mb-2 ml-4">
            Most countries have legal requirements relating to disclosure of specified information. For example, in the
            United Kingdom, whenever a limited company uses its name on business letters or on documents, such as a
            purchase order, it must state its registered office and registration number. This disclosure is voluntary on
            invoices and credit notes. Note that individual countries may have slightly different requirements.
          </div>
          <div className="mb-1">
            <span className="font-bold mr-2">(c)/(g)</span> <span className="font-bold">Supplier name and address</span>
          </div>
          <div className="mb-2 ml-4">This is where the purchase order is sent.</div>
          <div className="mb-1">
            <span className="font-bold mr-2">(d)</span> <span className="font-bold">Purchase order number</span>
          </div>
          <div className="mb-2 ml-4">Each purchase order has a unique identification number.</div>
          <div className="mb-1">
            <span className="font-bold mr-2">(e)</span> <span className="font-bold">Business contact</span>
          </div>
          <div className="mb-2 ml-4">
            This information allows a supplier to contact a named individual in the event of a query.
          </div>
          <div className="mb-1">
            <span className="font-bold mr-2">(f)</span> <span className="font-bold">Delivery date</span>
          </div>
          <div className="mb-2 ml-4">
            It is important to specify the delivery date on a purchase order as it is possible that a supplier may not
            be able to send the goods when they are needed.
          </div>
          <div className="mb-2 ml-4">
            The purchase order is sent to the supplier, but a copy is retained by the buyer. Until the goods are
            delivered, this copy may be held in the purchasing department.
          </div>
        </div>
      </div>
    </div>



      <h2 className="text-xl font-semibold mt-6 mb-2">5.3 DELIVERY NOTE AND GOODS RECEIVED NOTE</h2>
      <p>
        When the goods are delivered, the supplier provides a delivery note. The employee taking the delivery, who may be a member of the stores or warehouse staff, should immediately check the delivery note details against the physical items that have been delivered. For example, if the delivery note states that 40 boxes of photocopier paper have been delivered, the boxes should be counted to make sure there are 40, and not just 39.
      </p>
      <p>
        Delivery notes are not in a standard format, because each supplier has a different design of form, often in different paper sizes and colours. It is therefore quite common for the details of a delivery to be copied from the delivery note on to a goods received note. Extra details can be added on to a goods received note, such as the inventory identity numbers of the items delivered.
      </p>
      <p>
        The next step is to check that the items delivered were actually what were ordered. This is done by comparing the details on the goods received note with the purchase order. If the supplier has supplied the wrong items, or the wrong quantity, the problem should be identified and resolved as soon as possible after delivery has been made -and certainly before the goods are paid for.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">5.4 PURCHASE INVOICE</h2>
      <p>
        The supplier issues an invoice to the customer when the goods are delivered, or soon after, this is a purchase invoice which will be needed in the accounts department.
      </p>
      <p>
        A purchase invoice is similar to a sales invoice, except that it is an invoice received from a supplier instead of an invoice issued to a customer. In fact, for the supplier of the goods or services, it is a sales invoice. This means that a purchase invoice is likely to have the words 'sales invoice' printed on it. A business receives invoices from many different suppliers, and so purchase invoices will be in different designs, sizes and colours, and the information they contain is set out differently by each supplier. An example of a purchase invoice is shown below.
      </p>
  <div className="max-w-3xl mx-auto p-8 bg-gray-50">
      <div className="bg-white border-2 border-black p-8 font-sans text-sm">
        {/* Header Section - Mimicking the stacked paper effect */}
        <div className="relative w-full h-32 mb-8 flex justify-center items-center">
          {/* Background paper layers */}
          <div className="absolute w-[90%] h-[90%] bg-gray-200 transform -rotate-3 -translate-x-2 -translate-y-2 border border-gray-400" />
          <div className="absolute w-[95%] h-[95%] bg-gray-100 transform rotate-2 translate-x-1 translate-y-1 border border-gray-300" />
          {/* Top paper with content */}
          <div className="relative z-10 bg-white border border-black p-4 text-center w-[80%]">
            <h1 className="text-lg font-bold mb-1">PRINTING UNLIMITED</h1>
            <p>80 New High Street</p>
            <p>Exeter</p>
            <p>Devon EX4 2LP</p>
            <p className="mt-2">Tel: 01747 852481 Fax: 01747 852749</p>
          </div>
        </div>

        {/* Sales Invoice Title */}
        <div className="text-center text-xl font-bold mb-8">SALES INVOICE</div>

        {/* Customer and Invoice Details */}
        <div className="flex justify-between mb-6">
          <div className="flex-1 pr-4">
            <div className="flex items-start mb-2">
              <span className="text-gray-700 mr-4 min-w-[80px]">Customer:</span>
              <div className="flex-1">
                <div>Blackhill Files Ltd</div>
                <div>742 St Anne's Way</div>
                <div>York</div>
                <div>YO5 4NP</div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 text-right">
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-gray-700 mr-4">Invoice No:</span>
              <span className="font-medium">80071</span>
            </div>
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-gray-700 mr-4">VAT reg No:</span>
              <span className="font-medium">298 5414 554</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-gray-700 mr-4">Order No:</span>
              <span className="font-medium">35762</span>
            </div>
          </div>
        </div>

        {/* Invoice Items Table */}
        <div className="border border-black mb-6">
          <div className="grid grid-cols-[3fr_1fr] text-center font-bold border-b border-black">
            <div className="p-2 text-left"></div> {/* Empty for description header */}
            <div className="p-2 border-l border-black">Total $</div>
          </div>
          <div className="grid grid-cols-[3fr_1fr] text-center">
            <div className="p-2 text-left">
              Printing and supplying 25,000 labels at £10.50 per 1,000 from copy and supplied
            </div>
            <div className="p-2 border-l border-black">262.50</div>
          </div>
          <div className="grid grid-cols-[3fr_1fr] text-center border-t border-black">
            <div className="p-2 text-right font-bold">Total</div>
            <div className="p-2 border-l border-black font-bold">262.50</div>
          </div>
        </div>

        {/* Terms and Approval Box */}
        <div className="flex justify-between items-end">
          <div className="flex-1 pr-4">
            <p className="text-gray-700">Terms: Net cash within 30 days</p>
          </div>
          <div className="flex-shrink-0 border border-black">
            <div className="grid grid-cols-[1fr_1fr] border-b border-black">
              <div className="p-1 border-r border-black">Checked by:</div>
              <div className="p-1">J. Smith</div>
            </div>
            <div className="grid grid-cols-[1fr_1fr] border-b border-black">
              <div className="p-1 border-r border-black">Expense code:</div>
              <div className="p-1">417</div>
            </div>
            <div className="grid grid-cols-[1fr_1fr] border-b border-black">
              <div className="p-1 border-r border-black">Supplier code:</div>
              <div className="p-1">2064</div>
            </div>
            <div className="grid grid-cols-[1fr_1fr]">
              <div className="p-1 border-r border-black">Approved by:</div>
              <div className="p-1">B. Brown</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p>
      A purchase invoice is missing some items of information that the buyer needs to add. This additional information is added when the invoice has been received and when it is checked. In many cases, the information is added by stamping a grid-like box on to the invoice, or adding a stick-on label on the invoice. The box or label is used to add items of information such as
    </p>
    <ul className="list-disc ml-8 mb-4">
      <li>
        the signature or initials of the person who has checked the invoice, for example by checking the details against the purchase order and goods received note
      </li>
      <li>
        a code identifying the nature of the expense
      </li>
      <li>
        a code identifying the supplier
      </li>
      <li>
        the signature or initials of the person who approves the invoice for payment.
      </li>
    </ul>
    <p className="font-bold mb-2">ACTIVITY 2</p>
    <p>
      A purchase invoice for a business that buys goods from a supplier is the sales invoice from the supplier. A business receives purchase invoices from its suppliers, and it keeps a copy of sales invoices that it sends to customers.
    </p>
    <p className="mb-4">
      If you were shown a batch of sales invoices for your business and a batch of purchase invoices, how might they look different?
    </p>
    <p className="mb-6">
      For a suggested answer, see the 'Answers' section at the end of the book.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">5.5 PAYMENT AND REMITTANCE ADVICE</h2>
    <p>
      A member of the accounts department will check the details on the invoice against the purchase order. To do this, the purchase order and the invoice have to be matched together. If the purchase invoice shows the buyer's purchase order number, the task of matching the documents is made much easier and quicker.
    </p>
    <p>
      If the invoice details appear to be correct, the invoice should be submitted for authorisation by a responsible person, possibly a senior manager. Usually, authorisation is given by means of adding a signature to the invoice.
    </p>
    <p>
      The details of the authorised invoice are then recorded in the accounting system, and payment is made when the agreed credit period comes to an end.
    </p>
    <p>
      When paying a purchase invoice, some businesses send a remittance advice with their payment. A remittance advice is a document giving details of the invoice that is being paid (or possibly, of several invoices that are being paid at the same time), including the supplier's invoice number. If any prompt payment discount has been deducted from the invoice amount in making the payment, this will also be detailed on the remittance advice. This will help the supplier to identify what the payment is for.
    </p>

<div className="max-w-4xl mx-auto p-8 bg-gray-50">
      <div className="bg-white border-2 border-black p-8 font-sans text-sm">
        {/* Header */}
        <div className="text-center text-lg font-bold mb-8">REMITTANCE ADVICE</div>

        {/* Top Sections: Business Addresses */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Business cheque is sent to */}
          <div className="border border-black p-4">
            <div className="font-bold mb-2">Name and address of business the cheque is being sent to</div>
            <div className="mt-4">
              <span className="font-bold">To:</span>
              <div className="ml-4 mt-2">
                <div>A.J. Broom & Co</div>
                <div>59 Parkway</div>
                <div>Manchester</div>
                <div>M2 6EG</div>
              </div>
            </div>
          </div>

          {/* Business sending cheque */}
          <div className="border border-black p-4">
            <div className="font-bold mb-2">Name and address of business sending cheque</div>
            <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
              <span className="font-bold">Business Name:</span>
              <span>Trail Blazers</span>
              <span className="font-bold">Address:</span>
              <div>
                <div>Mount House</div>
                <div>West Street</div>
                <div>Manchester</div>
                <div>M4 7FB</div>
              </div>
              <span className="font-bold">Tel:</span>
              <span>0161 484 6490</span>
              <span className="font-bold">Fax:</span>
              <span>0161 484 6491</span>
              <span className="font-bold">Sales tax reg no:</span>
              <span>32141108</span>
              <span className="font-bold">Date:</span>
              <span>15 Sept X3</span>
            </div>
          </div>
        </div>

        {/* Invoice Details Table */}
        <div className="border border-black mb-8">
          <div className="grid grid-cols-5 text-center font-bold border-b border-black">
            <div className="p-2 border-r border-black">Date</div>
            <div className="p-2 border-r border-black">Your ref</div>
            <div className="p-2 border-r border-black">
              Amount <br /> $
            </div>
            <div className="p-2 border-r border-black">
              Discount taken <br /> $
            </div>
            <div className="p-2">
              Paid <br /> $
            </div>
          </div>
          <div className="grid grid-cols-5 text-center">
            <div className="p-2 border-r border-black">15 Aug X3</div>
            <div className="p-2 border-r border-black">68204</div>
            <div className="p-2 border-r border-black">618.40</div>
            <div className="p-2 border-r border-black">30.92</div>
            <div className="p-2">587.48</div>
          </div>
          <div className="grid grid-cols-5 text-center border-t border-black">
            <div className="p-2 border-r border-black">20 Aug X3</div>
            <div className="p-2 border-r border-black">68210</div>
            <div className="p-2 border-r border-black">426.94</div>
            <div className="p-2 border-r border-black">21.34</div>
            <div className="p-2">405.60</div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <span className="font-bold">Invoice amounts being paid</span>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-right">
            <span className="font-bold">Cheque total</span>
            <div className="flex justify-end items-center">
              <span className="font-bold mr-2">Total paid</span>
              <div className="border border-black p-2 w-32 text-center font-bold">£993.08</div>
            </div>
            <span className="font-bold">Cheque number</span>
            <div className="flex justify-end items-center">
              <span className="font-bold mr-2">Cheque no</span>
              <div className="border-b border-gray-400 pb-1 w-32 text-center">041261</div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <p className="font-bold mb-2">ACTIVITY 3</p> 
    <p>
      Explain the purpose of the following sales documents, and list them in the order in which they are produced:
    </p>
    <ul className="list-disc ml-8 mb-2">
      <li>sales invoice</li>
      <li>delivery note</li>
      <li>remittance advice</li>
      <li>sales order</li>
    </ul>
    <p>
      Also, explain the purpose of the following purchase documents, and list them in the order in which they are produced:
    </p>
    <ul className="list-disc ml-8 mb-2">
      <li>goods received note</li>
      <li>purchase order</li>
      <li>purchase invoice</li>
    </ul>
    <p className="mb-6">
      For a suggested answer, see the 'Answers' section at the end of the book.
    </p>







































    </div>
    </div>
  )
}

export default page
