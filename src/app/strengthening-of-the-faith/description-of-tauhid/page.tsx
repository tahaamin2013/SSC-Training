"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List } from "lucide-react";
import Link from "next/link";

const data = [
  {
    id: "1",
    title: "Tauhid",
    links: [
      {
        href: "/strengthening-of-the-faith/description-of-tauhid/people-unawareness",
        text: "People's unawareness",
        icon: List,
      },
      {
        href: "/strengthening-of-the-faith/description-of-tauhid/the-acts-leading-to-polytheism",
        text: "The acts leading to polytheism",
        icon: BookOpen,
      },
      {
        href: "/strengthening-of-the-faith/description-of-tauhid/those-who-profess-to-have-faith-in-allah-while-their-actions-reeking-of-polytheism",
        text: "Those who profess to have Faith in Allah while their actions reeking of polytheism",
        icon: HelpCircle,
      },
      {
        href: "/strengthening-of-the-faith/description-of-tauhid/the-verdict-of-quran",
        text: "The verdict of Qur'an",
        icon: Brain,
      },
      {
        href: "/strengthening-of-the-faith/description-of-tauhid/none-but-allah-is-the-capable",
        text: "None but Allah is the Capable",
        icon: FileText,
      },
      {
        href: "/strengthening-of-the-faith/description-of-tauhid/none-is-the-supporter-other-than-allah",
        text: "None is the supporter other than Allah",
        icon: Brain,
      },
      {
        href: "/strengthening-of-the-faith/description-of-tauhid/none-is-the-sustainer-other-than-allah",
        text: "None is the sustainer other than Allah",
        icon: Brain,
      },
      {
        href: "/strengthening-of-the-faith/description-of-tauhid/the-reality-of-shirk",
        text: "The reality of Shirk",
        icon: Brain,
      },
    ],
  },
];

const Section = ({ section }: any) => {
  return (
    <div className="w-[500px] mb-6 py-6 px-5 rounded-3xl transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-purple-900 to-indigo-900 border border-purple-700">
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
    <div
      className="min-h-screen text-white p-8 bg-gradient-to-br from-gray-900 to-gray-800"
      style={{
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      <h1 className="text-5xl font-extrabold mb-12 text-center text-white">
        Strengthening of the faith / Description of Tauhid{" "}
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
