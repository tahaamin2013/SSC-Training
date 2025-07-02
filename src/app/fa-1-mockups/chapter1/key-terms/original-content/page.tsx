import React from "react";

const keyTerms = [
    {
        term: "Expenses",
        definition:
            "Money spent for rent, electricity for lighting, telephone accounts and so on. This does not include purchases of goods for resale or the purchase of assets for use in the business on a continuing basis.",
    },
    {
        term: "Income",
        definition:
            "A more general term than sales to also include items such as interest received, rent received from letting part of the business premises.",
    },
    {
        term: "Ledger account",
        definition:
            "A record of similar financial transactions in a business.",
    },
    {
        term: "Payroll",
        definition:
            "List of employees and the wages or salaries due to each.",
    },
    {
        term: "Petty cash",
        definition:
            "A small amount of notes and coins held to reimburse employees for small payments made on behalf of the business.",
    },
    {
        term: "Purchases",
        definition:
            "Buying goods and/or services for use in the business or for resale to customers.",
    },
    {
        term: "Receipt",
        definition:
            "Written statement of an amount of money that has been paid/received.",
    },
    {
        term: "Sales",
        definition:
            "The exchange of goods or services for money. Terms such as commission and fees are also used instead of sales for some services.",
    },
    {
        term: "Till roll",
        definition:
            "Printed listing of all payments received through a till/point of sale desk in a retail outlet",
    },
];

export default function Page() {
    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">KEY TERMS</h1>
            <dl className="space-y-5">
                {keyTerms.map(({ term, definition }) => (
                    <div key={term}>
                        <dt className="font-semibold text-lg">{term}</dt>
                        <dd className="ml-4 text-gray-700">{definition}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}