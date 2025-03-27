"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List, Zap } from "lucide-react";
import Link from "next/link";

const data = [
    {
        id: "1",
        title: "Introduction",
        links: [
            { href: "/chemistry/unit-7/introduction/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-7/introduction/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-7/introduction/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-7/introduction/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-7/introduction/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-7/introduction/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "2",
        title: "7.1 OXIDATION AND REDUCTION",
        links: [
            { href: "/chemistry/unit-7/oxidation-and-reduction/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-7/oxidation-and-reduction/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-7/oxidation-and-reduction/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-7/oxidation-and-reduction/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-7/oxidation-and-reduction/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-7/oxidation-and-reduction/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },

    {
        id: "3",
        title: "7.2 OXIDATION STATES AND RULES FOR ASSIGNING OXIDATION STATES",
        links: [
            { href: "/chemistry/unit-7/oxidation-states-and-rules-for-assigning-oxidation-states/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-7/oxidation-states-and-rules-for-assigning-oxidation-states/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-7/oxidation-states-and-rules-for-assigning-oxidation-states/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-7/oxidation-states-and-rules-for-assigning-oxidation-states/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-7/oxidation-states-and-rules-for-assigning-oxidation-states/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-7/oxidation-states-and-rules-for-assigning-oxidation-states/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "4",
        title: "7.3 FORMULA OF AN IONIC COMPOUND",
        links: [
            { href: "/chemistry/unit-7/formula-of-an-ionic-compound/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-7/formula-of-an-ionic-compound/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-7/formula-of-an-ionic-compound/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-7/formula-of-an-ionic-compound/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-7/formula-of-an-ionic-compound/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-7/formula-of-an-ionic-compound/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "5",
        title: "7.4 OXIDIZING AND REDUCING AGENTS",
        links: [
            { href: "/chemistry/unit-7/oxidizing-and-reducing-agents/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-7/oxidizing-and-reducing-agents/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-7/oxidizing-and-reducing-agents/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-7/oxidizing-and-reducing-agents/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-7/oxidizing-and-reducing-agents/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-7/oxidizing-and-reducing-agents/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "6",
        title: "7.5 CORROSION AND ITS PREVENTION",
        links: [
            { href: "/chemistry/unit-7/corrosion-and-its-prevention/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-7/corrosion-and-its-prevention/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-7/corrosion-and-its-prevention/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-7/corrosion-and-its-prevention/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-7/corrosion-and-its-prevention/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-7/corrosion-and-its-prevention/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "6",
        title: "Chapter Round Up",
        links: [
            { href: "/chemistry/unit-7/chapter-round-up/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-7/chapter-round-up/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-7/chapter-round-up/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-7/chapter-round-up/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-7/chapter-round-up/short-questions", text: "SHORT QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-7/chapter-round-up/textbook-questions", text: "TEXTBOOK QUESTIONS", icon: List },
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
        </div>
    );
};

const ComputerSystemsDashboard = () => {
    return (
        <div className="min-h-screen text-white  px-3 bg-gradient-to-br from-gray-900 to-gray-800" style={{ fontFamily: '"Poppins", sans-serif' }}>
            <h1 className="text-6xl font-extrabold mb-16 text-center text-white">
            ELECTROCHEMISTRY
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