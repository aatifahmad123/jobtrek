import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LandingPage = () => {
  const companies = [
    { name: "Adobe", logo: "/companies/adobe.jpeg" },
    { name: "Amazon", logo: "/companies/amazon.svg" },
    { name: "Atlassian", logo: "/companies/atlassian.svg" },
    { name: "Google", logo: "/companies/google.webp" },
    { name: "IBM", logo: "/companies/ibm.svg" },
    { name: "Meta", logo: "/companies/meta.svg" },
    { name: "Microsoft", logo: "/companies/microsoft.webp" },
    { name: "Netflix", logo: "/companies/netflix.png" },
    { name: "Uber", logo: "/companies/uber.svg" },
  ];

  return (
    <main className="flex flex-col gap-5 sm:gap-10 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Get Hired with <span className="font-extrabold">JOBTREK</span>
        </h1>
        <p className="text-xs mt-2 sm:text-lg md:text-xl lg:text-2xl sm:mt-4">
          Explore jobs and courses to kickstart your career or get your ideal
          candidate.
        </p>
      </section>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center sm:gap-8">
        {/* Get Jobs Button */}
        <div className="w-full sm:w-auto">
          <Link to="/jobs">
            <Button variant="blue" size="xl" className="w-full">
              Get Jobs
            </Button>
          </Link>
        </div>

        {/* Create Job Listing Button */}
        <div className="w-full sm:w-auto">
          <Link to="/post-job">
            <Button variant="red" size="xl" className="w-full">
              Create Job Listing
            </Button>
          </Link>
        </div>

        {/* Explore Courses Button */}
        <div className="w-full sm:w-auto">
          <Link to="/courses">
            <Button variant="green" size="xl" className="w-full">
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>

      {/* Companies Section */}
      <section className="my-8 px-4">
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-gray-300 mb-8">
          Trusted by Leading Companies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto">
          {companies.map((company) => (
            <div
              key={company.name}
              className="group relative aspect-video sm:aspect-auto sm:h-24"
            >
              <div
                className="absolute inset-0 bg-gray-800/50 rounded-xl 
                         backdrop-blur-sm border border-gray-700/50 
                         transition-all duration-300 
                         group-hover:bg-gray-700/50 
                         group-hover:border-gray-600/50"
              >
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="w-full h-full object-contain filter 
                             brightness-90 group-hover:brightness-100 
                             transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* carousel */}
      <img src="/banner.png" className="w-full" alt="Banner" />

      {/* banner */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl font-bold">
              For Candidates
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base">
            Search jobs, apply for them, track applications and explore courses
            to elevate yourself!
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl font-bold">
              For Organizations
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base">
            Post jobs, manage applications, and get the ideal candidates.
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default LandingPage;
