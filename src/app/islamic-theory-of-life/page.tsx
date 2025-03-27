"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Book, ChevronRight } from "lucide-react";

type Section = {
  id: string;
  link: string;
  title: string;
};

const data: Section[] = [
  {
    id: "1",
    link: "/islamic-theory-of-life/chapter-1",
    title: "Chapter 1 - Introduction",
  },
  { id: "2", link: "/islamic-theory-of-life/chapter-2", title: "Chapter 2" },
  { id: "3", link: "/islamic-theory-of-life/chapter-3", title: "Chapter 3" },
  { id: "4", link: "/islamic-theory-of-life/chapter-4", title: "Chapter 4" },
  { id: "5", link: "/islamic-theory-of-life/chapter-5", title: "Chapter 5" },
  { id: "6", link: "/islamic-theory-of-life/chapter-6", title: "Chapter 6" },
  { id: "7", link: "/islamic-theory-of-life/chapter-7", title: "Chapter 7" },
  { id: "8", link: "/islamic-theory-of-life/chapter-8", title: "Chapter 8" },
  { id: "9", link: "/islamic-theory-of-life/chapter-9", title: "Chapter 9" },
  { id: "10", link: "/islamic-theory-of-life/chapter-10", title: "Chapter 10" },
  { id: "11", link: "/islamic-theory-of-life/chapter-11", title: "Chapter 11" },
  { id: "12", link: "/islamic-theory-of-life/chapter-12", title: "Chapter 12" },
  { id: "13", link: "/islamic-theory-of-life/chapter-13", title: "Chapter 13" },
  { id: "14", link: "/islamic-theory-of-life/chapter-14", title: "Chapter 14" },
  { id: "15", link: "/islamic-theory-of-life/chapter-15", title: "Chapter 15" },
  { id: "16", link: "/islamic-theory-of-life/chapter-16", title: "Chapter 16" },
  { id: "17", link: "/islamic-theory-of-life/chapter-17", title: "Chapter 17" },
  { id: "18", link: "/islamic-theory-of-life/chapter-18", title: "Chapter 18" },
  { id: "19", link: "/islamic-theory-of-life/chapter-19", title: "Chapter 19" },
  { id: "20", link: "/islamic-theory-of-life/chapter-20", title: "Chapter 20" },
  { id: "21", link: "/islamic-theory-of-life/chapter-21", title: "Chapter 21" },
];

const UnitCard = ({
  section,
  isRedirecting,
  onRedirect,
}: {
  section: Section;
  isRedirecting: boolean;
  onRedirect: () => void;
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onRedirect();
    setTimeout(() => {
      router.push(section.link);
    }, 1500); // Adjust this delay as needed
  };

  if (isRedirecting) {
    return (
      <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-600 opacity-100" />
        <div className="relative z-10 p-6 flex items-center justify-center h-full">
          <p className="text-xl font-bold text-white animate-pulse">
            Redirecting...
          </p>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={section.link}
      onClick={handleClick}
      className="group relative overflow-hidden rounded-2xl  shadow-lg border-white/40 border shadow-white/5 transition-all duration-300 hover:shadow-xl"
    >
      <div className="flex items-end">
        <div className="bg-gradient-to-br from-purple-400 to-indigo-600  rounded-sm text-white font-bold z-50 px-2 h-fit w-fit">
          {section.id}
        </div>
      </div>
      <div className="absolute border inset-0 bg-gradient-to-br from-purple-400 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10 p-6 pt-3">
        <Book className="mb-4 h-8 w-8 text-purple-500 transition-colors duration-300 group-hover:text-white" />
        <h2 className="mb-2 capitalize text-xl font-bold  text-zinc-200 transition-colors duration-300 group-hover:text-white">
          {section.title}
        </h2>
        <p className="text-sm text-zinc-200 transition-colors duration-300 group-hover:text-purple-100">
          Explore this unit
        </p>
        <ChevronRight className="absolute bottom-4 right-4 h-6 w-6 text-purple-500 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-white" />
      </div>
    </Link>
  );
};

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [redirectingId, setRedirectingId] = useState<string | null>(null);

  const filteredData = data.filter((section) =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRedirect = (id: string) => {
    setRedirectingId(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-center text-5xl font-extrabold leading-tight tracking-tight text-transparent text-white">
          Islamic Theory of Life
        </h1>
        <div className="relative mb-16 flex justify-center">
          <input
            type="text"
            placeholder="Search subjects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-2xl rounded-full border-2 border-gray-700 bg-gray-800 py-4 px-6 text-lg text-white placeholder-gray-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredData.map((section) => (
            <UnitCard
              key={section.id}
              section={section}
              isRedirecting={redirectingId === section.id}
              onRedirect={() => handleRedirect(section.id)}
            />
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-2xl font-semibold text-white">No units found.</p>
            <p className="mt-2 text-gray-500">
              Try a different search term or explore our available units.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
