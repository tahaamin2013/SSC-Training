'use client'

import React from 'react';
import { BookOpen, Brain, HelpCircle, FileText, List } from 'lucide-react';
import Link from 'next/link';

const data = [
  {
    id: "1",
    title: "Artificial Intelligence and Machine Learning",
    links: [
      { href: "/computer-sicence/unit-5/artificial-intelligence-and-machine-learning/notes", text: "Notes", icon: BookOpen },
      { href: "/computer-sicence/unit-5/artificial-intelligence-and-machine-learning/mind-map", text: "Mind Map", icon: Brain },
      { href: "/computer-sicence/unit-5/artificial-intelligence-and-machine-learning/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/computer-sicence/unit-5/artificial-intelligence-and-machine-learning/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/computer-sicence/unit-5/artificial-intelligence-and-machine-learning/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },

  {
    id: "2",
    title: "Different Areas of AI",
    links: [
      { href: "/computer-sicence/unit-5/defferent-areas-of-ai/notes", text: "Notes", icon: BookOpen },
      { href: "/computer-sicence/unit-5/defferent-areas-of-ai/mind-map", text: "Mind Map", icon: Brain },
      { href: "/computer-sicence/unit-5/defferent-areas-of-ai/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/computer-sicence/unit-5/defferent-areas-of-ai/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/computer-sicence/unit-5/defferent-areas-of-ai/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "3",
    title: "Applications of AI",
    links: [
      { href: "/computer-sicence/unit-5/application-of-ai/notes", text: "Notes", icon: BookOpen },
      { href: "/computer-sicence/unit-5/application-of-ai/mind-map", text: "Mind Map", icon: Brain },
      { href: "/computer-sicence/unit-5/application-of-ai/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/computer-sicence/unit-5/application-of-ai/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/computer-sicence/unit-5/application-of-ai/detailed-questions", text: "Detailed Questions", icon: List },
    ],
  },
  {
    id: "4",
    title: "Cloud Computing",
    links: [
      { href: "/computer-sicence/unit-5/cloud-computing/notes", text: "Notes", icon: BookOpen },
      { href: "/computer-sicence/unit-5/cloud-computing/mind-map", text: "Mind Map", icon: Brain },
      { href: "/computer-sicence/unit-5/cloud-computing/quiz", text: "MCQs", icon: HelpCircle },
      { href: "/computer-sicence/unit-5/cloud-computing/brief-questions", text: "Brief Questions", icon: FileText },
      { href: "/computer-sicence/unit-5/cloud-computing/detailed-questions", text: "Detailed Questions", icon: List },
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
    <div className="min-h-screen text-white p-8 bg-gradient-to-br from-gray-900 to-gray-800">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center text-white">

        Application of Computer Science
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