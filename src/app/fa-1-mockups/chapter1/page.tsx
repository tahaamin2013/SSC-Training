"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List } from "lucide-react";
import Link from "next/link";

const data = [
    {
        id: "1",
        title: "1. Types of business transaction",
        links: [
            {
                href: "/fa-1-mockups/chapter1/types-of-business-transaction/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/fa-1-mockups/chapter1/types-of-business-transaction/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/fa-1-mockups/chapter1/types-of-business-transaction/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/fa-1-mockups/chapter1/types-of-business-transaction/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/fa-1-mockups/chapter1/types-of-business-transaction/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/fa-1-mockups/chapter1/types-of-business-transaction/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "2",
        title: "2. Terminology",
        links: [
            {
                href: "/fa-1-mockups/chapter1/terminology/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/fa-1-mockups/chapter1/terminology/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/fa-1-mockups/chapter1/terminology/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/fa-1-mockups/chapter1/terminology/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/fa-1-mockups/chapter1/terminology/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/fa-1-mockups/chapter1/terminology/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "3",
        title: "3. Cash and credit transactions",
        links: [
            {
                href: "/fa-1-mockups/chapter1/cash-and-credit-transactions/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/fa-1-mockups/chapter1/cash-and-credit-transactions/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/fa-1-mockups/chapter1/cash-and-credit-transactions/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/fa-1-mockups/chapter1/cash-and-credit-transactions/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/fa-1-mockups/chapter1/cash-and-credit-transactions/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/fa-1-mockups/chapter1/cash-and-credit-transactions/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "4",
        title: "4. Petty cash",
        links: [
            {
                href: "/fa-1-mockups/chapter1/petty-cash/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/fa-1-mockups/chapter1/petty-cash/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/fa-1-mockups/chapter1/petty-cash/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/fa-1-mockups/chapter1/petty-cash/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/fa-1-mockups/chapter1/petty-cash/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/fa-1-mockups/chapter1/petty-cash/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "5",
        title: "5. Payroll",
        links: [
            {
                href: "/fa-1-mockups/chapter1/payroll/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/fa-1-mockups/chapter1/payroll/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/fa-1-mockups/chapter1/payroll/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/fa-1-mockups/chapter1/payroll/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/fa-1-mockups/chapter1/payroll/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/fa-1-mockups/chapter1/payroll/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "6",
        title: "6. Keeping a record",
        links: [
            {
                href: "/fa-1-mockups/chapter1/keeping-a-record/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/fa-1-mockups/chapter1/keeping-a-record/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/fa-1-mockups/chapter1/keeping-a-record/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/fa-1-mockups/chapter1/keeping-a-record/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/fa-1-mockups/chapter1/keeping-a-record/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/fa-1-mockups/chapter1/keeping-a-record/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "7",
        title: "7. Key personnel",
        links: [
            {
                href: "/fa-1-mockups/chapter1/key-personnel/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/fa-1-mockups/chapter1/key-personnel/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/fa-1-mockups/chapter1/key-personnel/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/fa-1-mockups/chapter1/key-personnel/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/fa-1-mockups/chapter1/key-personnel/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/fa-1-mockups/chapter1/key-personnel/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "8",
        title: "8. Control over transactions",
        links: [
            {
                href: "/fa-1-mockups/chapter1/control-over-transactions/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/fa-1-mockups/chapter1/control-over-transactions/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/fa-1-mockups/chapter1/control-over-transactions/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/fa-1-mockups/chapter1/control-over-transactions/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/fa-1-mockups/chapter1/control-over-transactions/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/fa-1-mockups/chapter1/control-over-transactions/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
    {
        id: "9",
        title: "9. Timing of transactions",
        links: [
            {
                href: "/fa-1-mockups/chapter1/timing-of-transactions/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/fa-1-mockups/chapter1/timing-of-transactions/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/fa-1-mockups/chapter1/timing-of-transactions/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/fa-1-mockups/chapter1/timing-of-transactions/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/fa-1-mockups/chapter1/timing-of-transactions/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/fa-1-mockups/chapter1/timing-of-transactions/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
        {
        id: "10",
        title: "10. CONCLUSION",
        links: [
            {
                href: "/fa-1-mockups/chapter1/concluson/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/fa-1-mockups/chapter1/concluson/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/fa-1-mockups/chapter1/concluson/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/fa-1-mockups/chapter1/concluson/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/fa-1-mockups/chapter1/concluson/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/fa-1-mockups/chapter1/concluson/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
            {
        id: "11",
        title: "11. KEY TERMS",
        links: [
            {
                href: "/fa-1-mockups/chapter1/key-terms/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/fa-1-mockups/chapter1/key-terms/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/fa-1-mockups/chapter1/key-terms/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/fa-1-mockups/chapter1/key-terms/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/fa-1-mockups/chapter1/key-terms/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/fa-1-mockups/chapter1/key-terms/detailed-questions",
                text: "DETAILED QUESTIONS",
                icon: List,
            },
        ],
    },
                {
        id: "12",
        title: "12. SELF TEST QUESTIONS",
        links: [
            {
                href: "/fa-1-mockups/chapter1/self-test-questions/original-content",
                text: "ORIGINAL CONTENT",
                icon: List,
            },
            {
                href: "/fa-1-mockups/chapter1/self-test-questions/notes",
                text: "NOTES",
                icon: BookOpen,
            },
            {
                href: "/fa-1-mockups/chapter1/self-test-questions/mind-map",
                text: "MIND MAP",
                icon: Brain,
            },
            {
                href: "/fa-1-mockups/chapter1/self-test-questions/quiz",
                text: "MCQS",
                icon: HelpCircle,
            },
            {
                href: "/fa-1-mockups/chapter1/self-test-questions/brief-questions",
                text: "BRIEF QUESTIONS",
                icon: FileText,
            },
            {
                href: "/fa-1-mockups/chapter1/self-test-questions/detailed-questions",
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
        Business Transactions    </h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {data.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

export default ComputerSystemsDashboard;
