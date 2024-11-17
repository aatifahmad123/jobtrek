import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const teamMembers = [
  { name: "Dr. Venkat Ram Reddy", role: "Supervisor" },
  { name: "Aatif Ahmad", role: "Lead Developer" },
  { name: "Harshit Goyal", role: "Clerk Manager" },
  { name: "Saumitra Agrawal", role: "Supabase Admin" },
];

const techStack = [
  {
    category: "Language",
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    category: "Build Tool",
    name: "Vite",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    url: "https://vitejs.dev",
  },
  {
    category: "Library",
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    url: "https://react.dev",
  },
  {
    category: "Styling",
    name: "Tailwind CSS",
    logo: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg",
    url: "https://tailwindcss.com",
  },
  {
    category: "Authentication",
    name: "Clerk",
    logo: "https://clerk.com/_next/image?url=%2Fv2%2Fdownloads%2Fclerk-logo-light-accent.svg&w=1920&q=75",
    url: "https://clerk.com",
  },
  {
    category: "Database",
    name: "Supabase",
    logo: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
    url: "https://supabase.com",
  },
  {
    category: "Validation",
    name: "Zod",
    logo: "https://zod.dev/logo.svg",
    url: "https://zod.dev",
  },
];

const AboutPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          About JOBTREK
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          We're on a mission to connect talented individuals with their dream
          jobs and help organizations find the perfect candidates.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="relative rounded-lg overflow-hidden backdrop-blur-sm border border-gray-700/50 bg-gray-800/50 p-6 text-center"
            >
              <h3 className="text-xl font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-blue-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Our Tech Stack
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {techStack.map((tech) => (
            <a
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              key={tech.name}
              className="group"
            >
              <Card className="hover:border-blue-500/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      className="w-12 h-12 object-contain"
                    />
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1">
                        {tech.category}
                      </p>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-white">
                          {tech.name}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
