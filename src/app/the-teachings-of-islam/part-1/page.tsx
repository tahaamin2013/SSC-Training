"use client";

import React from "react";
import { BookOpen, Brain, HelpCircle, FileText, List } from "lucide-react";
import Link from "next/link";

const data = [
  {
    id: "1",
    title: "Part 1",
    links: [
      {
        href: "/the-teachings-of-islam/part-1/introduction",
        text: "Introduction",
        icon: List,
      },
      {
        href: "/the-teachings-of-islam/part-1/imaan",
        text: "Imaan",
        icon: List,
      },
      {
        href: "/the-teachings-of-islam/part-1/prophet-muhammad",
        text: "Prophet Muhammad (PBUH)",
        icon: BookOpen,
      },
      {
        href: "/the-teachings-of-islam/part-1/the-quran",
        text: "The Qur'aan",
        icon: HelpCircle,
      },
      {
        href: "/the-teachings-of-islam/part-1/salaah",
        text: "Salaah",
        icon: Brain,
      },
      {
        href: "/the-teachings-of-islam/part-1/adhaan",
        text: "Adhaan",
        icon: FileText,
      },
      {
        href: "/the-teachings-of-islam/part-1/wuduu",
        text: "Wuduu",
        icon: Brain,
      },
      {
        href: "/the-teachings-of-islam/part-1/method-of-prayer",
        text: "Method of Prayer",
        icon: Brain,
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
        The Teachings of Islam / Part 1{" "}
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
