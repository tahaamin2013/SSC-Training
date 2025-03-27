import Link from "next/link";

const websites = [
    {
      name: "Wifaq-ul-Madaris",
      url: "https://www.wifaqulmadaris.org/",
      description:
        "Wifaq-ul-Madaris is a central board of religious seminaries that manages and oversees the education, examination, and certification of Islamic studies.",
      pros: [
        "Centralized Islamic studies certification",
        "Wide network of affiliated seminaries",
        "Provides official certification"
      ],
      cons: [
        "Limited to certain regions",
        "Website not very user-friendly",
        "Some content only in Urdu"
      ]
    },
    {
      name: "Kanz-ul-Madaris",
      url: "https://kanz-ul-madaris.org/",
      description:
        "Kanz-ul-Madaris is an Islamic educational organization focused on providing certifications for traditional Islamic education and supporting religious seminaries.",
      pros: [
        "Focus on traditional Islamic education",
        "Reputable organization with strong networks",
        "Variety of educational programs"
      ],
      cons: [
        "Website can be hard to navigate",
        "Information is somewhat scattered",
        "Mostly in Urdu, limited English resources"
      ]
    },
    {
      name: "Tanzeem-ul-Madaris",
      url: "https://tanzeemulmadaris.com/",
      description:
        "Tanzeem-ul-Madaris works to establish and regulate Islamic seminaries, promoting quality education and standardized curriculum for students of Islamic studies.",
      pros: [
        "Comprehensive curriculum for students",
        "Supports high standards of Islamic education",
        "Widely recognized certification"
      ],
      cons: [
        "Website not very modern",
        "Navigation could be improved",
        "Limited international outreach"
      ]
    },
    {
      name: "AIOU Matric Dars-e-Nizami",
      url: "https://www.aiou.edu.pk/matric-dars-e-nizami",
      description:
        "AIOU offers a Dars-e-Nizami program at the Matric level, a traditional Islamic curriculum for students seeking education in Islamic sciences.",
      pros: [
        "Official accreditation from AIOU",
        "Accessible to a large number of students",
        "Government-backed education"
      ],
      cons: [
        "Program may be difficult for non-native speakers",
        "Limited to a specific educational system",
        "Website may not have detailed course information"
      ]
    }
  ];
  
  export default function WebsitesPage() {
    return (
      <div className="bg-white text-gray-900 font-sans">
        <div className="min-h-screen flex flex-col items-center px-6 py-8 sm:px-8 lg:px-10">
          {/* Title */}
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Islamic Educational Boards</h1>
  
          {/* Websites List */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
            {websites.map((site) => (
              <div
                key={site.url}
                className="flex flex-col p-6 border rounded-xl shadow-lg bg-white transition-all duration-300 hover:shadow-2xl"
              >
                <h2 className="text-2xl font-semibold mb-4 text-blue-700 hover:text-blue-500 transition-colors">
                  <a href={site.url} target="_blank" rel="noopener noreferrer">
                    {site.name}
                  </a>
                </h2>
                <p className="text-base mb-4 leading-relaxed text-gray-700">{site.description}</p>
  
                {/* Pros */}
                <h3 className="text-lg font-semibold text-gray-800 mt-4">Pros</h3>
                <ul className="text-sm list-disc pl-5 mb-4 text-gray-600">
                  {site.pros.map((pro, index) => (
                    <li key={index}>{pro}</li>
                  ))}
                </ul>
  
                {/* Cons */}
                <h3 className="text-lg font-semibold text-gray-800">Cons</h3>
                <ul className="text-sm list-disc pl-5 mb-4 text-gray-600">
                  {site.cons.map((con, index) => (
                    <li key={index}>{con}</li>
                  ))}
                </ul>
  
                {/* Visit Button */}
                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block text-center px-5 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
                >
                  Visit Website
                </Link>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    );
  }
  