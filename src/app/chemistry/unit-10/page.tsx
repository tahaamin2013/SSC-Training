"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List, Zap } from "lucide-react";
import Link from "next/link";
const data = [
    {
        id: "10.1",
        title: "10.1 Concepts Of Acids And Bases",
        links: [
            { href: "/chemistry/unit-10/concepts-of-acids-and-bases/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-10/concepts-of-acids-and-bases/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-10/concepts-of-acids-and-bases/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-10/concepts-of-acids-and-bases/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-10/concepts-of-acids-and-bases/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-10/concepts-of-acids-and-bases/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "10.2",
        title: "10.2 Strength of Acids and Bases",
        links: [
            { href: "/chemistry/unit-10/strength-of-acids-and-bases/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-10/strength-of-acids-and-bases/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-10/strength-of-acids-and-bases/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-10/strength-of-acids-and-bases/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-10/strength-of-acids-and-bases/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-10/strength-of-acids-and-bases/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "10.3",
        title: "10.3 Characteristic Properties of Acids",
        links: [
            { href: "/chemistry/unit-10/characteristic-properties-of-acids/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-10/characteristic-properties-of-acids/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-10/characteristic-properties-of-acids/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-10/characteristic-properties-of-acids/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-10/characteristic-properties-of-acids/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-10/characteristic-properties-of-acids/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "10.4",
        title: "10.4 Characteristic Properties of Bases",
        links: [
            { href: "/chemistry/unit-10/characteristic-properties-of-bases/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-10/characteristic-properties-of-bases/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-10/characteristic-properties-of-bases/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-10/characteristic-properties-of-bases/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-10/characteristic-properties-of-bases/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-10/characteristic-properties-of-bases/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "10.5",
        title: "10.5 Oxides and Hydroxides",
        links: [
            { href: "/chemistry/unit-10/oxides-and-hydroxides/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-10/oxides-and-hydroxides/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-10/oxides-and-hydroxides/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-10/oxides-and-hydroxides/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-10/oxides-and-hydroxides/brief-questions", text: "BRIEF QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-10/oxides-and-hydroxides/detailed-questions", text: "DETAILED QUESTIONS", icon: List },
        ],
    },
    {
        id: "11",
        title: "Chapter Round Up",
        links: [
            { href: "/chemistry/unit-10/chapter-round-up/original-content", text: "ORIGINAL CONTENT", icon: List },
            { href: "/chemistry/unit-10/chapter-round-up/notes", text: "NOTES", icon: BookOpen },
            { href: "/chemistry/unit-10/chapter-round-up/mind-map", text: "MIND MAP", icon: Brain },
            { href: "/chemistry/unit-10/chapter-round-up/quiz", text: "MCQS", icon: HelpCircle },
            { href: "/chemistry/unit-10/chapter-round-up/textbook-questions", text: "TEXTBOOK QUESTIONS", icon: FileText },
            { href: "/chemistry/unit-10/chapter-round-up/short-questions", text: "SHORT QUESTIONS", icon: List },
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
                Acids, Bases and Salts
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