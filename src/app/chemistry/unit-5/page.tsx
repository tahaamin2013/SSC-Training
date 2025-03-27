"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List, Zap } from "lucide-react";
import Link from "next/link";

const data = [
    {
        id: "1",
        title: "Introduction",
        links: [
            { href: "/chemistry/unit-5/introduction/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-5/introduction/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-5/introduction/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-5/introduction/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-5/introduction/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-5/introduction/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "1",
        title: "5.1 WHY DO ATOMS REACT?",
        links: [
            { href: "/chemistry/unit-5/why-do-atoms-react/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-5/why-do-atoms-react/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-5/why-do-atoms-react/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-5/why-do-atoms-react/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-5/why-do-atoms-react/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-5/why-do-atoms-react/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "2",
        title: "5.2 CHEMICAL BONDS",
        links: [
            { href: "/chemistry/unit-5/chemical-bonds/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-5/chemical-bonds/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-5/chemical-bonds/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-5/chemical-bonds/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-5/chemical-bonds/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-5/chemical-bonds/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "3",
        title: "5.3 TYPES OF BONDS",
        links: [
            { href: "/chemistry/unit-5/types-of-bonds/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-5/types-of-bonds/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-5/types-of-bonds/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-5/types-of-bonds/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-5/types-of-bonds/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-5/types-of-bonds/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "4",
        title: "5.4 INTERMOLECULAR FORCES",
        links: [
            { href: "/chemistry/unit-5/intermolecular-forces/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-5/intermolecular-forces/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-5/intermolecular-forces/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-5/intermolecular-forces/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-5/intermolecular-forces/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-5/intermolecular-forces/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "5",
        title: "5.5 NATURE OF BONDING, STRUCTURE AND PROPERTIES",
        links: [
            { href: "/chemistry/unit-5/nature-of-bonding-structure-and-properties/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-5/nature-of-bonding-structure-and-properties/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-5/nature-of-bonding-structure-and-properties/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-5/nature-of-bonding-structure-and-properties/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-5/nature-of-bonding-structure-and-properties/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-5/nature-of-bonding-structure-and-properties/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "6",
        title: "5.6 METALLIC BONDS",
        links: [
            { href: "/chemistry/unit-5/metallic-bonds/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-5/metallic-bonds/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-5/metallic-bonds/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-5/metallic-bonds/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-5/metallic-bonds/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-5/metallic-bonds/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "7",
        title: "Chapter Rownd Up",
        links: [
            { href: "/chemistry/unit-5/round-up/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-5/round-up/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-5/round-up/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-5/round-up/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-5/round-up/textbook-questions", text: "TEXTBOOK QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-5/round-up/short-response-questions", text: "SHORT RESPONSE QUESTIONS", icon: List },
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
                Chemical Bonding
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