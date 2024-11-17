import React, { useState } from "react";
import { Filter } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "HTML & CSS Crash Course",
    category: "Frontend",
    description:
      "Complete HTML & CSS tutorial for beginners. Learn web development from scratch.",
    videoUrl: "https://www.youtube.com/watch?v=D-h8L5hgW-w",
    thumbnail: "https://i3.ytimg.com/vi/D-h8L5hgW-w/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "React JS Course 2024",
    category: "Frontend",
    description:
      "Modern React from the beginning - learn all the core fundamentals.",
    videoUrl: "https://www.youtube.com/watch?v=u6gSSpfsoOQ",
    thumbnail: "https://i3.ytimg.com/vi/u6gSSpfsoOQ/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Node.js Full Course",
    category: "Backend",
    description:
      "Learn Node.js by building real-world applications with Node JS, Express, and MongoDB.",
    videoUrl: "https://www.youtube.com/watch?v=Oe421EPjeBE",
    thumbnail: "https://i3.ytimg.com/vi/Oe421EPjeBE/maxresdefault.jpg",
  },
  {
    id: 4,
    title: "Data Structures Easy to Advanced",
    category: "Backend",
    description:
      "Complete course covering all data structures you need to know.",
    videoUrl: "https://www.youtube.com/watch?v=RBSGKlAvoiM",
    thumbnail: "https://i3.ytimg.com/vi/RBSGKlAvoiM/maxresdefault.jpg",
  },
  {
    id: 5,
    title: "Python for Data Science",
    category: "Data Engineering",
    description:
      "Learn Python for Data Science and Machine Learning from scratch.",
    videoUrl: "https://www.youtube.com/watch?v=LHBE6Q9XlzI",
    thumbnail: "https://i3.ytimg.com/vi/LHBE6Q9XlzI/maxresdefault.jpg",
  },
  {
    id: 6,
    title: "Machine Learning Basics",
    category: "Data Engineering",
    description:
      "Complete Machine Learning tutorial for beginners using Python.",
    videoUrl: "https://www.youtube.com/watch?v=7eh4d6sabA0",
    thumbnail: "https://i3.ytimg.com/vi/7eh4d6sabA0/maxresdefault.jpg",
  },
  {
    id: 7,
    title: "Advanced React Patterns",
    category: "Frontend",
    description: "Master advanced React patterns and best practices.",
    videoUrl: "https://www.youtube.com/watch?v=4UZrsTqkcW4",
    thumbnail: "https://i3.ytimg.com/vi/4UZrsTqkcW4/maxresdefault.jpg",
  },
  {
    id: 8,
    title: "Express.js Crash Course",
    category: "Backend",
    description: "Build a complete REST API with Express.js step by step.",
    videoUrl: "https://www.youtube.com/watch?v=SccSCuHhOw0",
    thumbnail: "https://i3.ytimg.com/vi/SccSCuHhOw0/maxresdefault.jpg",
  },
  {
    id: 9,
    title: "SQL Database Tutorial",
    category: "Backend",
    description: "Complete SQL tutorial covering all major database concepts.",
    videoUrl: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
    thumbnail: "https://i3.ytimg.com/vi/HXV3zeQKqGY/maxresdefault.jpg",
  },
  {
    id: 10,
    title: "TensorFlow 2.0 Complete Course",
    category: "Data Engineering",
    description: "Learn Deep Learning with TensorFlow 2.0 from scratch.",
    videoUrl: "https://www.youtube.com/watch?v=tPYj3fFJGjk",
    thumbnail: "https://i3.ytimg.com/vi/tPYj3fFJGjk/maxresdefault.jpg",
  },
];

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    ...new Set(courses.map((course) => course.category)),
  ];

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-4">
        Online Courses
      </h1>
      <p className="text-base md:text-2xl text-center text-white mb-8 max-w-2xl mx-auto">
        Explore our curated collection of top-rated programming courses across
        different domains
      </p>

      {/* Category Filter */}
      <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
        <Filter className="h-5 w-5 text-white" />
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="group rounded-xl overflow-hidden transition-transform hover:scale-105 bg-gray-800/50 backdrop-blur-sm border border-gray-700"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <div className="inline-block px-2 py-1 mb-2 text-xs font-semibold text-blue-300 bg-blue-900/50 rounded-full">
                {course.category}
              </div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                {course.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {course.description}
              </p>
              <a
                href={course.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Watch Tutorial
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
