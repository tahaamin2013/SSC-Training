export const quiz = {
  totalQuestions: 50,
  questions: [
    {
      id: 1,
      question:
        "Kevin operates his petty cash with an imprest of $120. At the end of one particular week he had vouchers in the petty cash tin of $17.45, $32.16 and $21.94. In order to restore the petty cash balance what transaction should Kevin make?",
      answers: [
        "Dr Bank $48.45 Cr Petty cash $48.45",
        "Dr Bank $71.55 Cr Petty cash $71.55",
        "Dr Petty cash $71.55 Cr Bank $71.55",
        "Dr Petty cash $48.45 Cr Bank $48.45",
      ],
      correctAnswer: "Dr Petty cash $71.55 Cr Bank $71.55",
    },
    {
      id: 2,
      question:
        "The following statements relate to the trade payables control account: (1) It is used to record transactions with credit customers (2) Amounts posted to it are not part of the double entry system of accounting. Which of the above statements are correct?",
      answers: ["Statement 1 only", "Neither statement", "Both statements", "Statement 2 only"],
      correctAnswer: "Neither statement",
    },
    {
      id: 3,
      question:
        "Simon was owed $496.70 from Trevor. He subsequently found out that Trevor had gone bankrupt and could not pay. He therefore wanted to write off Trevor's debt. What would be the correct double entry to write off Trevor's debt?",
      answers: [
        "Dr Irrecoverable debts $496.70 Cr Receivables $496.70",
        "Dr Receivables $496.70 Cr Sales $496.70",
        "Dr Receivables $496.70 Cr Irrecoverable debts $496.70",
        "Dr Sales $496.70 Cr Receivables $496.70",
      ],
      correctAnswer: "Dr Irrecoverable debts $496.70 Cr Receivables $496.70",
    },
    {
      id: 4,
      question:
        "The trade receivables control account has a balance of $4,214. The total on the list of individual customer balances is $4,890. Which of the following would explain the difference?",
      answers: [
        "A customer owing $676 has been omitted from the list of customer balances",
        "The sales day book is understated by $676",
        "A contra with the payables ledger for $676 has been accounted for in the list of customer balances but not accounted for in the control account",
        "An irrecoverable debt of $676 has been written off a customer's individual account but has not yet been written off the control account",
      ],
      correctAnswer:
        "An irrecoverable debt of $676 has been written off a customer's individual account but has not yet been written off the control account",
    },
    {
      id: 5,
      question:
        "Dorien owns a shop and rents out the flat above the shop. What is the correct double entry to account for the rent she receives?",
      answers: ["Dr Sales Cr Cash", "Dr Cash Cr Rental income", "Dr Rental income Cr Cash", "Dr Cash Cr Sales"],
      correctAnswer: "Dr Cash Cr Rental income",
    },
    {
      id: 6,
      question:
        "Brian issues a document to a customer indicating that the amount owed is being reduced for sales returns. What is this document?",
      answers: ["Debit note", "Credit note", "Delivery note", "Advice note"],
      correctAnswer: "Credit note",
    },
    {
      id: 7,
      question:
        "Desmond is performing a control account reconciliation between the trade payables control account and the list of suppliers' balances. He finds that a purchase day book total has been understated by $3,000. Where will the error need to be corrected to ensure the two balances reconcile?",
      answers: [
        "List of suppliers balances only",
        "Both the control account and the list of suppliers balance",
        "Control account only",
        "Neither the control account nor the list of suppliers' balances",
      ],
      correctAnswer: "Control account only",
    },
    {
      id: 8,
      question:
        "The balance on the trade payables control account should be equal to which other figure in the accounting system?",
      answers: [
        "The total of the balances on the individual suppliers accounts",
        "The balance on the trade receivables control account reconciled for items in transit",
        "The balance on the trade receivables control account",
        "The total of the balances on the individual customers' accounts",
      ],
      correctAnswer: "The total of the balances on the individual suppliers accounts",
    },
    {
      id: 9,
      question:
        "Which of the following accounts would show a credit balance? Account 1: Total Dr $400 Total Cr $200, Account 2: Total Dr $200 Total Cr $100, Account 3: Total Dr $300 Total Cr $300, Account 4: Total Dr $200 Total Cr $300",
      answers: ["Account 4 only", "Accounts 3 and 4", "Accounts 1 and 2", "Accounts 2 and 3"],
      correctAnswer: "Account 4 only",
    },
    {
      id: 10,
      question: "Which of the following should be reported in the statement of profit or loss?",
      answers: ["Receivables", "Revenue", "Non-current assets", "Payables"],
      correctAnswer: "Revenue",
    },
    {
      id: 11,
      question:
        "Warren is a window cleaner. He cleaned Millie's windows and she paid him $10 in cash. What kind of transaction is this?",
      answers: [
        "Purchase of a service by Millie",
        "Purchase of goods by Warren",
        "Sale of a service by Millie",
        "Sale of goods by Warren",
      ],
      correctAnswer: "Purchase of a service by Millie",
    },
    {
      id: 12,
      question:
        "Which of the following would be classified as revenue expenditure? (1) Rental income (2) Purchase of machine (3) Purchase of goods for resale (4) Employees wages",
      answers: ["1 and 3", "3 and 4", "2 and 4", "1 and 2"],
      correctAnswer: "3 and 4",
    },
    {
      id: 13,
      question:
        "In error Tarik posted goods he purchased for his own use into the business purchases account. Which of the following journals will correct this error?",
      answers: ["Dr Purchases Cr Drawings", "Dr Sales Cr Drawings", "Dr Drawings Cr Purchases", "Dr Drawings Cr Sales"],
      correctAnswer: "Dr Drawings Cr Purchases",
    },
    {
      id: 14,
      question:
        "Arthur sold goods to Meabh for $5,400. He subsequently realised he has overcharged Meabh by $200. Which of the following documents would Arthur issue to correct this overcharge?",
      answers: ["Debit note", "Credit note", "Invoice", "Remittance advice"],
      correctAnswer: "Credit note",
    },
    {
      id: 15,
      question:
        "When the trial balance was prepared the following two ledger accounts were omitted and a suspense account had to be created to make it balance: Discounts allowed $5,780, Discounts received $4,920. What was the balance on the suspense account?",
      answers: ["$860 Cr", "$860 Dr", "$10,700 Dr", "$10,700 Cr"],
      correctAnswer: "$860 Cr",
    },
    {
      id: 16,
      question: "What is the correct double entry to write off an irrecoverable receivables balance?",
      answers: [
        "Dr Trade payables Cr Irrecoverable debt expense",
        "Dr Trade receivables Cr Irrecoverable debt expense",
        "Dr Irrecoverable debt expense Cr Trade receivables",
        "Dr Irrecoverable debt expense Cr Trade payables",
      ],
      correctAnswer: "Dr Irrecoverable debt expense Cr Trade receivables",
    },
    {
      id: 17,
      question:
        "Fatima has made an error in posting a sales return from the sales returns day book to the general ledger. Which book of prime entry should be used to record the correction of the error?",
      answers: ["Sales return day book", "Journal", "General ledger", "Sales day book"],
      correctAnswer: "Journal",
    },
    {
      id: 18,
      question:
        "The following extract of account codes is taken from a business's accounting manual: Bank 20000, Cash 21000, Petty cash 22000, Trade receivables 23000, Other receivables 24000, Inventory 25000, Current liabilities (account numbers 40000 to 44999), Trade payables 40000, Other payables 42000, Bank overdraft 44000. Which of the following would be an appropriate account code for Parkers, a credit customer?",
      answers: ["25545", "23274", "44564", "40402"],
      correctAnswer: "23274",
    },
    {
      id: 19,
      question:
        "Cash sales of $15,800 have been correctly entered in the cash account but entered as $18,500 in the sales account. What is the double entry to correct this transaction?",
      answers: [
        "Dr Sales $2,700 Cr Cash $2,700",
        "Dr Suspense account $2,700 Cr Sales $2,700",
        "Dr Sales $2,700 Cr Suspense account $2,700",
        "Dr Cash $2,700 Cr Sales $2,700",
      ],
      correctAnswer: "Dr Sales $2,700 Cr Suspense account $2,700",
    },
    {
      id: 20,
      question: "Which of the following entries correctly records a purchase of materials on credit?",
      answers: [
        "Dr Materials Cr Cash book payments",
        "Dr Purchase day book Cr Materials",
        "Dr Materials Cr Purchase day book",
        "Dr Cash book payments Cr Materials",
      ],
      correctAnswer: "Dr Materials Cr Purchase day book",
    },
    {
      id: 21,
      question:
        "At the start of the year Bharvinder had an interest free loan of $20,000. During the year he repaid $10,000. Which parts of the accounting equation will change as a result of the loan repayment?",
      answers: ["Liabilities and profit", "Assets and liabilities", "Capital and liabilities", "Capital and assets"],
      correctAnswer: "Assets and liabilities",
    },
    {
      id: 22,
      question:
        "Alvin received a supplier statement from Darcy showing Alvin owed Darcy $21,980. Alvin's records showed he only owed Darcy $20,140. Which of the following could be responsible for the discrepancy?",
      answers: [
        "Darcy has performed a contra against a balance she owes Alvin",
        "Alvin has made a payment not yet received by Darcy",
        "Darcy has already recorded a settlement discount relating to an invoice Alvin has not yet paid",
        "Darcy has issued a credit note to Alvin which he has not yet received",
      ],
      correctAnswer: "Alvin has made a payment not yet received by Darcy",
    },
    {
      id: 23,
      question:
        "In Khalid's cash payments book for the month of May the trade payables column totalled $7,400. What does this amount represent?",
      answers: [
        "The amount owed to Khalid's suppliers at the end of May",
        "The amount paid to Khalid's suppliers during May",
        "The discounts received from Khalid's suppliers in May",
        "The amount invoiced by Khalid's suppliers in May",
      ],
      correctAnswer: "The amount paid to Khalid's suppliers during May",
    },
    {
      id: 24,
      question:
        "Which of the following would appear on a supplier's statement? (1) Invoices issued during the period (2) Trade discounts given during the period (3) Credit notes issued during the period (4) Payments made during the period",
      answers: ["1, 3 and 4 only", "1, 2, 3 and 4", "2 and 3 only", "1 and 4 only"],
      correctAnswer: "1, 3 and 4 only",
    },
    {
      id: 25,
      question: "Which of the following correctly represents the accounting equation?",
      answers: [
        "Capital $49,000 Assets $22,100 Liabilities $27,000",
        "Capital $22,000 Assets $27,000 Liabilities $49,000",
        "Capital $49,000 Assets $27,000 Liabilities $22,000",
        "Capital $27,000 Assets $49,000 Liabilities $22,000",
      ],
      correctAnswer: "Capital $27,000 Assets $49,000 Liabilities $22,000",
    },
    {
      id: 26,
      question:
        "The total of the discounts column in the cash received book is $140. How should this be posted in the ledger?",
      answers: [
        "Cr Discounts received $140",
        "Cr Discounts allowed $140",
        "Dr Discounts received $140",
        "Dr Discounts allowed $140",
      ],
      correctAnswer: "Dr Discounts allowed $140",
    },
    {
      id: 27,
      question:
        "The trade receivables control account shows a balance of $42,500 but the list of customer balances shows a total of $45,200. Which of the following could explain the difference?",
      answers: [
        "A credit note of $2,700 has been correctly treated in the customer's individual account but not entered into the control account",
        "The trade receivables column of the cash receipts book is overstated by $2,700",
        "The sales day book is overcast by $2,700",
        "A customer balance of $2,700 has been omitted from the list of balances",
      ],
      correctAnswer: "A customer balance of $2,700 has been omitted from the list of balances",
    },
    {
      id: 28,
      question:
        "Esther received $4,418 from a customer to whom she had sold goods on credit for $3,760 plus sales tax of $658. What is the double entry for this receipt in the accounts of Esther?",
      answers: [
        "Dr Accounts receivable $4,418 Cr Cash $4,418",
        "Dr Cash $3,760 Cr Sales $3,760",
        "Dr Sales $3,760 Cr Cash $3,760",
        "Dr Cash $4,418 Cr Accounts receivable $4,418",
      ],
      correctAnswer: "Dr Cash $4,418 Cr Accounts receivable $4,418",
    },
    {
      id: 29,
      question:
        "Which of the following are valid reasons for preparing an aged receivables analysis? (1) It is part of the double entry system (2) To identify receivables which need to be followed up to ensure payment (3) To help calculate allowances for irrecoverable debts (4) To ensure the trial balance balances",
      answers: ["2 and 3", "1 and 4", "1 and 3", "2 and 4"],
      correctAnswer: "2 and 3",
    },
    {
      id: 30,
      question:
        "The following is an extract from a ledger account: Cash - 9 Oct Cash 1,270, 19 Oct Cash 1,959, 10 Oct Cash 1,095, 26 Oct Cash 586. What is the closing balance on this account?",
      answers: [
        "Credit balance of $3,677",
        "Debit balance of $3,677",
        "Credit balance of $4,264",
        "Debit balance of $4,264",
      ],
      correctAnswer: "Debit balance of $3,677",
    },
    {
      id: 31,
      question:
        "Joanna makes regular payments to a specific charity. The cash goes straight from her account and the charity cannot amend the amount paid. What method of payment is Joanna using?",
      answers: ["Standing order", "Petty cash payment", "BACS payment", "Direct debit"],
      correctAnswer: "Standing order",
    },
    {
      id: 32,
      question:
        "When performing a bank reconciliation which of the following would require adjustments to the cash book balance? (1) Unpresented cheques (2) Bank charges not yet accounted for (3) Outstanding lodgements (4) Standing order payments not accounted for",
      answers: ["2 and 3", "1 and 4", "1 and 3", "2 and 4"],
      correctAnswer: "2 and 4",
    },
    {
      id: 33,
      question:
        "Which of the following checks should the petty cashier make prior to paying out petty cash? (1) That the claim is supported by appropriate documentation (2) That the claim has been authorised by an appropriate signature (3) The credit rating of the business receiving the payment (4) That the amount is within the petty cash limit",
      answers: ["1 and 2 only", "3 and 4", "2 and 3", "1, 2 and 4"],
      correctAnswer: "1, 2 and 4",
    },
    {
      id: 34,
      question:
        "The bank statement of Hugo showed a debit balance of $12,800. The bank reconciliation showed there were outstanding lodgements of $3,400 and unpresented cheques of $4,700. What is the correct amount of cash that should be recorded in Hugo's accounts?",
      answers: ["$11,500 Dr", "$14,100 Cr", "$14,100 Dr", "$11,500 Cr"],
      correctAnswer: "$11,500 Dr",
    },
    {
      id: 35,
      question:
        "Manfred runs his own business and operates an imprest system of petty cash maintaining a float of $200. At the end of November there is cash of $37.20 and vouchers of $162.80. How much will Manfred need to pay into petty cash to maintain the float?",
      answers: ["$37.20", "$162.80", "$125.60", "$200"],
      correctAnswer: "$162.80",
    },
    {
      id: 36,
      question:
        "The following is extracted from the trial balance at the year end: Capital 9,000, Sales 32,000, Purchases 26,000, Trade receivables 23,000, Inventory 14,000, Trade payables 12,000, Bank overdraft ?. What is the figure for the bank overdraft?",
      answers: ["$10,000", "$28,000", "$22,000", "$12,000"],
      correctAnswer: "$10,000",
    },
    {
      id: 37,
      question:
        "Eddy has purchased a van paying by cheque. Eddy uses account codes in his ledgers. His account codes include: Bank 2150, Motor Vehicles 4270, Purchases 3820. Which of the following is the correct double entry to record the transaction to the correct accounts?",
      answers: ["Dr 4270 Cr 2150", "Dr 2150 Cr 4270", "Dr 3820 Cr 2150", "Dr 2150 Cr 3820"],
      correctAnswer: "Dr 4270 Cr 2150",
    },
    {
      id: 38,
      question:
        "A transaction has been recorded in the ledger of Samir as follows: Equipment - 19 Oct Bank 16,800, Bank - 19 Oct Equipment 16,800. What was the transaction?",
      answers: [
        "Banking of the proceeds from the sale of equipment",
        "Receipt of a bank loan to purchase equipment",
        "Purchase of equipment on credit",
        "Purchase of equipment paid for by cheque",
      ],
      correctAnswer: "Purchase of equipment paid for by cheque",
    },
    {
      id: 39,
      question:
        "The following information for wages and salaries has been taken from the accounts of Roman: Wages and salaries (gross) 65,708, Income tax 15,770, Employer's pension contributions 5,257, Employee's pension contributions 3,942. There are no statutory or non-statutory deductions other than the above. What is Roman's total wages and salaries expense?",
      answers: ["$74,907", "$90,677", "$65,708", "$70,965"],
      correctAnswer: "$70,965",
    },
    {
      id: 40,
      question:
        "Jan is employed at an annual salary of $18,720. She is contracted to work 30 hours per week. If overtime has to be worked the first seven hours of overtime in any week are not paid for. Any overtime in excess of seven hours in a week is paid for at double time. During one week Jan worked 12 hours of overtime. What will be Jan's overtime pay for the week?",
      answers: ["$480", "$120", "$288", "$60"],
      correctAnswer: "$60",
    },
    {
      id: 41,
      question:
        "Jasminder had correctly recorded a wages and salaries expense of $32,000 in her accounts. She only has two employees who each earn a gross salary of $14,000 per annum. Which of the following could explain the difference between the gross salaries and total wages and salaries in the accounts?",
      answers: [
        "Pension contributions paid by Jasminder on behalf of her employees",
        "Employee pension contributions",
        "Employee income tax payments",
        "Jasminder's drawings",
      ],
      correctAnswer: "Pension contributions paid by Jasminder on behalf of her employees",
    },
    {
      id: 42,
      question:
        "Velma sent an invoice to Marion for goods purchased. Velma subsequently issued a debit note to Marion. Which of the following would explain the issue of the debit note?",
      answers: [
        "Packing and posting costs payable by the customer were omitted from the invoice",
        "Marion has refused some of the goods as they were faulty",
        "The invoice should have been sent to a customer called Maureen not Marion",
        "The invoice was incorrectly totalled and overstated by $500",
      ],
      correctAnswer: "Packing and posting costs payable by the customer were omitted from the invoice",
    },
    {
      id: 43,
      question:
        "Bob bought $2,000 of goods from Harvey on 1 November 20X7. He agreed to pay Harvey on 31 January 20X8. What kind of transaction is this from Harvey's point of view?",
      answers: ["Credit purchase", "Credit sale", "Cash purchase", "Cash sale"],
      correctAnswer: "Credit sale",
    },
    {
      id: 44,
      question: "Which of the following items would appear on opposite sides of the trial balance?",
      answers: [
        "Motor vehicles and inventory",
        "Sales and capital",
        "Trade payables and expenses",
        "Trade receivables and purchases",
      ],
      correctAnswer: "Trade payables and expenses",
    },
    {
      id: 45,
      question:
        "Alfredo runs his own business maintaining receivables and payables control accounts as part of his accounting system. When preparing the trial balance which one of the following errors would require the creation of a suspense account?",
      answers: [
        "$250 of motor vehicle repairs is posted to the motor vehicles account",
        "The purchase day book is overstated by $420",
        "A bank overdraft of $880 is recorded as a positive cash balance",
        "Alfredo's drawings of $320 have been recorded as wages and salaries",
      ],
      correctAnswer: "A bank overdraft of $880 is recorded as a positive cash balance",
    },
    {
      id: 46,
      question:
        "Jenny has trade receivables of $92,320 at the start of November. During November she had the following transactions: Cash sales 15,200, Cash receipts from customers 46,420, Credit sales 38,170, Irrecoverable debts written off 2,600. What is the balance on Jenny's trade receivables at the end of November?",
      answers: ["$96,760", "$81,470", "$97,970", "$66,270"],
      correctAnswer: "$81,470",
    },
    {
      id: 47,
      question:
        "Xena buys goods from Alex for $20,800 on credit. She subsequently returns goods worth $3,100 and pays him $9,200. In Xena's ledger what is the balance with Alex as a result of these transactions?",
      answers: ["$26,900 Dr", "$8,500 Dr", "$8,500 Cr", "$26,900 Cr"],
      correctAnswer: "$8,500 Cr",
    },
    {
      id: 48,
      question:
        "Rodger is registered for sales tax which is charged at 17.5%. A customer is invoiced for goods with a list price of $240,000. The customer is given a trade discount of 25% and a settlement discount of 5% is given if the invoice is paid within 21 days. How much sales tax should be included on the invoice?",
      answers: ["$31,500", "$29,925", "$39,900", "$42,000"],
      correctAnswer: "$29,925",
    },
    {
      id: 49,
      question: "What is the purpose of a journal?",
      answers: [
        "To record all individual transactions entered into the sales day book",
        "To record unusual movements between accounts",
        "To record the purpose of all transactions made in the accounts",
        "To record when all transactions were made between accounts",
      ],
      correctAnswer: "To record unusual movements between accounts",
    },
    {
      id: 50,
      question:
        "Which of the following are valid reasons for having a formal document retention policy? (1) To help minimise costs associated with maintaining business records (2) To ensure that all business records are kept for the maximum time possible (3) To help locate business records (4) To ensure the trial balance balances",
      answers: ["2 and 3", "2 and 4", "1 and 4", "1 and 3"],
      correctAnswer: "1 and 3",
    },
  ],
}
