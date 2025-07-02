"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List } from "lucide-react";
import Link from "next/link";

const data = [
    {
        id: "1",
        title: "1. Documents for business transactions.",
        links: [
            {
                href: "/fa-1-mockups/chapter-2/documents-for-business-transactions/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/fa-1-mockups/chapter-2/documents-for-business-transactions/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/fa-1-mockups/chapter-2/documents-for-business-transactions/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/fa-1-mockups/chapter-2/documents-for-business-transactions/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/fa-1-mockups/chapter-2/documents-for-business-transactions/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/fa-1-mockups/chapter-2/documents-for-business-transactions/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "2",
        title: "2. Processing a cash transaction",
        links: [
            {
                href: "/fa-1-mockups/chapter-2/processing-a-cash-transaction/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/fa-1-mockups/chapter-2/processing-a-cash-transaction/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/fa-1-mockups/chapter-2/processing-a-cash-transaction/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/fa-1-mockups/chapter-2/processing-a-cash-transaction/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/fa-1-mockups/chapter-2/processing-a-cash-transaction/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/fa-1-mockups/chapter-2/processing-a-cash-transaction/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "3",
        title: "3. Credit transaction procedures",
        links: [
            {
                href: "/fa-1-mockups/chapter-2/credit-transaction-procedures/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/fa-1-mockups/chapter-2/credit-transaction-procedures/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/fa-1-mockups/chapter-2/credit-transaction-procedures/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/fa-1-mockups/chapter-2/credit-transaction-procedures/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/fa-1-mockups/chapter-2/credit-transaction-procedures/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/fa-1-mockups/chapter-2/credit-transaction-procedures/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "4",
        title: "4. Processing a credit transaction: a credit sale",
        links: [
            {
                href: "/fa-1-mockups/chapter-2/processing-a-credit-transaction-a-credit-sale/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/fa-1-mockups/chapter-2/processing-a-credit-transaction-a-credit-sale/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/fa-1-mockups/chapter-2/processing-a-credit-transaction-a-credit-sale/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/fa-1-mockups/chapter-2/processing-a-credit-transaction-a-credit-sale/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/fa-1-mockups/chapter-2/processing-a-credit-transaction-a-credit-sale/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/fa-1-mockups/chapter-2/processing-a-credit-transaction-a-credit-sale/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "5",
        title: "5. Processing a credit transaction: a credit purchase",
        links: [
            {
                href: "/fa-1-mockups/chapter-2/processing-a-credit-transaction-a-credit-purchase/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/fa-1-mockups/chapter-2/processing-a-credit-transaction-a-credit-purchase/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/fa-1-mockups/chapter-2/processing-a-credit-transaction-a-credit-purchase/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/fa-1-mockups/chapter-2/processing-a-credit-transaction-a-credit-purchase/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/fa-1-mockups/chapter-2/processing-a-credit-transaction-a-credit-purchase/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/fa-1-mockups/chapter-2/processing-a-credit-transaction-a-credit-purchase/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "6",
        title: "6. Statements of account",
        links: [
            {
                href: "/fa-1-mockups/chapter-2/statements-of-account/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/fa-1-mockups/chapter-2/statements-of-account/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/fa-1-mockups/chapter-2/statements-of-account/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/fa-1-mockups/chapter-2/statements-of-account/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/fa-1-mockups/chapter-2/statements-of-account/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/fa-1-mockups/chapter-2/statements-of-account/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "7",
        title: "7. Returns, credit and debit notes",
        links: [
            {
                href: "/fa-1-mockups/chapter-2/returns-credit-and-debit-notes/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/fa-1-mockups/chapter-2/returns-credit-and-debit-notes/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/fa-1-mockups/chapter-2/returns-credit-and-debit-notes/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/fa-1-mockups/chapter-2/returns-credit-and-debit-notes/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/fa-1-mockups/chapter-2/returns-credit-and-debit-notes/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/fa-1-mockups/chapter-2/returns-credit-and-debit-notes/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "8",
        title: "8. Petty cash claim",
        links: [
            {
                href: "/fa-1-mockups/chapter-2/petty-cash-claim/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/fa-1-mockups/chapter-2/petty-cash-claim/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/fa-1-mockups/chapter-2/petty-cash-claim/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/fa-1-mockups/chapter-2/petty-cash-claim/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/fa-1-mockups/chapter-2/petty-cash-claim/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/fa-1-mockups/chapter-2/petty-cash-claim/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "9",
        title: "9. Document retention policies",
        links: [
            {
                href: "/fa-1-mockups/chapter-2/document-retention-policies/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/fa-1-mockups/chapter-2/document-retention-policies/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/fa-1-mockups/chapter-2/document-retention-policies/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/fa-1-mockups/chapter-2/document-retention-policies/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/fa-1-mockups/chapter-2/document-retention-policies/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/fa-1-mockups/chapter-2/document-retention-policies/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "10",
        title: "10. Data protection",
        links: [
            {
                href: "/fa-1-mockups/chapter-2/data-protection/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/fa-1-mockups/chapter-2/data-protection/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/fa-1-mockups/chapter-2/data-protection/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/fa-1-mockups/chapter-2/data-protection/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/fa-1-mockups/chapter-2/data-protection/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/fa-1-mockups/chapter-2/data-protection/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "12",
        title: "12. Conclusion",
        links: [
            {
                href: "/fa-1-mockups/chapter-2/conclusion/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/fa-1-mockups/chapter-2/conclusion/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/fa-1-mockups/chapter-2/conclusion/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/fa-1-mockups/chapter-2/conclusion/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/fa-1-mockups/chapter-2/conclusion/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/fa-1-mockups/chapter-2/conclusion/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "13",
        title: "13. Key terms",
        links: [
            {
                href: "/fa-1-mockups/chapter-2/key-terms/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/fa-1-mockups/chapter-2/key-terms/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/fa-1-mockups/chapter-2/key-terms/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/fa-1-mockups/chapter-2/key-terms/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/fa-1-mockups/chapter-2/key-terms/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/fa-1-mockups/chapter-2/key-terms/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "14",
        title: "14. Self test questions",
        links: [
            {
                href: "/fa-1-mockups/chapter-2/self-test-questions/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/fa-1-mockups/chapter-2/self-test-questions/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/fa-1-mockups/chapter-2/self-test-questions/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/fa-1-mockups/chapter-2/self-test-questions/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/fa-1-mockups/chapter-2/self-test-questions/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/fa-1-mockups/chapter-2/self-test-questions/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
];

const Section = ({ section }: any) => {
  return (
    <div className="w-[400px] mb-6 py-6 px-5 rounded-3xl transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-purple-900 to-indigo-900 border border-purple-700">
      <h2 className="text-xl font-bold text-white mb-2">{section.title}</h2>
      <div className="grid grid-cols-2 gap-3">
        {section.links.map((link: any) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center space-x-3 p-3 rounded-xl text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200 group"
          >
            <div className="p-2 bg-purple-700 rounded-lg group-hover:bg-purple-600 transition-colors duration-200">
              {React.createElement(link.icon, { size: 20 })}
            </div>
            <span className="text-sm font-medium">{link.text}</span>
          </Link>
        ))}
      </div>
    </div>);
};

const ComputerSystemsDashboard = () => {
  return (
    <div
      className="min-h-screen text-white p-8 bg-gradient-to-br from-gray-900 to-gray-800"
      style={{
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      <h1 className="text-5xl font-extrabold mb-12 text-center text-white">
        TYPES OF BUSINESS DOCUMENTATION
         </h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {data.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

export default ComputerSystemsDashboard;
