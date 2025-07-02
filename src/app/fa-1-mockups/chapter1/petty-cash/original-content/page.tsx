import React from 'react';

const page = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">4 PETTY CASH</h1>
      <p className="mb-4">
        Most businesses prefer to make as few payments in notes and coins (&lsquo;cash&rsquo;) as possible. It is more secure to pay by cheque or online because there is less risk of loss or theft. However, sometimes it is more convenient, or even necessary, to make payment in cash.
      </p>
      <p className="mb-4">
        Examples of items for which a business may make payment in cash include the following:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>payment for small office expenses such as office refreshments, postage stamps etc</li>
        <li>payment for taxi fares for business purposes</li>
        <li>payment for travel costs such as rail and bus for business purposes</li>
        <li>payment for flowers to send to an employee who is absent due to illness.</li>
      </ul>
      <p className="mb-4">
        A small amount of cash is held on business premises for such purposes. In a business that rarely makes cash transactions, such as a large engineering business, this is convenient. In businesses that regularly handles cash such as a restaurant, it is useful to retain a small amount of petty cash separate from income received from sales. This makes it easier to reconcile the cash received with the records of meals and drinks served and to investigate any discrepancies than it would be if a number of employees were able to take cash from the sales receipts to use to meet expenses at any time.
      </p>
    </div>
  );
};

export default page;
