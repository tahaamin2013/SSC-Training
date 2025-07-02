import React from 'react'

const page = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow space-y-6">
        <h1 className="text-2xl font-bold mb-4">3 CASH AND CREDIT TRANSACTIONS</h1>
        <p>
          Most business transactions for buying and selling goods or services are either cash transactions or credit transactions.
          With a cash transaction, the buyer pays for the item either upon exchange of goods/services or they pay in advance. For example, sales in a shop or supermarket are cash transactions, because the customer pays at the cash desk or check-out point.
          With a credit transaction, the buyer doesn&apos;t pay for the item on receipt, but is allowed some time (a &apos;credit period&apos;) before having to make the payment.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <h2 className="font-semibold mb-2">Example of a credit transaction</h2>
          <p>
            Velocity Book Publishers places an order with a printing company, Q Print, to print 5,000 copies of a new book they are publishing. Q Print agree to print the books and Velocity Book Publishers will be given up to 60 days to pay after the books have been printed. Q Print delivers the books into the warehouse of Velocity Book Publishers on 1 March, and submits a demand for payment (known as an invoice) for $15,000, payable on or before 1 May.
            <br /><br />
            This is a credit transaction because Velocity Book Publishers does not have to pay for the purchased items when it orders the books, nor even when the books are received. Instead, it has been given time to pay after the goods have been received.
          </p>
        </div>
        <p>
          Most transactions between two businesses are credit transactions. In other words, businesses usually buy from other businesses and sell to other businesses on credit. The credit terms, such as how long the buyer has to pay, are agreed between the buyer and the supplier in advance.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2 text-left"> </th>
                <th className="border px-4 py-2 text-left">Cash</th>
                <th className="border px-4 py-2 text-left">Credit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-semibold">Sale</td>
                <td className="border px-4 py-2">Goods are sold or a service provided and the customer pays immediately.</td>
                <td className="border px-4 py-2">Goods are sold or a service provided and the customer pays at a later date.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Purchase</td>
                <td className="border px-4 py-2">Goods are purchased or a service received and is paid for immediately.</td>
                <td className="border px-4 py-2">Goods are purchased or a service received and paid for at a later date.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <h2 className="font-semibold mb-2">ACTIVITY 1</h2>
          <p>
            A client receives a haircut by a self-employed hairdresser. The client pays for this with $20 cash.
          </p>
          <ol className="list-decimal ml-6 mt-2 space-y-2">
            <li>
              What kind of transaction is this from the client&apos;s perspective?
              <ul className="list-none ml-4 mt-1">
                <li>A The sale of goods by the hairdresser</li>
                <li>B The sale of a service by the client</li>
                <li>C The purchase of goods by the hairdresser</li>
                <li>D The purchase of a service by the client s</li>
              </ul>
            </li>
            <li className="mt-2">
              What kind of transaction is this from the hairdresser&apos;s point of view?
              <ul className="list-none ml-4 mt-1">
                <li>A A cash sale</li>
                <li>B A credit sale</li>
                <li>C A cash purchase</li>
                <li>D A credit purchase</li>
              </ul>
            </li>
          </ol>
          <p className="mt-2 text-sm text-gray-600">
            For a suggested answer, see the &apos;Answers&apos; section at the end of the book.
          </p>
        </div>
        <p>
          Every purchase from one party&apos;s perspective is a sale from the other perspective of the other party to the transaction. The purchaser makes payment and seller receives it in exchange for the goods or services supplied.
        </p>
        <h2 className="text-xl font-bold mt-6 mb-2">3.1 METHODS OF PAYMENT</h2>
        <p>
          You need to understand the different methods of receiving payment from customers, or making payments to a supplier. Four common methods of receiving and making payments used in many businesses are:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>payments in &apos;cash&apos;, in other words, in notes and coins</li>
          <li>payments by debit and credit cards and electronic payment methods</li>
          <li>payments by cheque</li>
          <li>automated receipts and payments through the business bank accounts. Examples are standing orders and direct debits.</li>
        </ul>
        <p>
          Receiving and making payments by each of these methods will be explained in subsequent chapters.
        </p>
      </div>
    </div>
  )
}

export default page
