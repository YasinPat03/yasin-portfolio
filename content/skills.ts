export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "HTML/CSS"],
  },
  {
    label: "Frameworks and Libraries",
    items: [
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "Tailwind CSS",
      "TensorFlow",
      "NumPy",
      "Pandas",
      "OpenCV",
      "Dlib",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite", "Supabase"],
  },
  {
    label: "Developer Tools",
    items: ["Git", "GitHub", "Docker", "VS Code", "npm"],
  },
  {
    label: "Concepts",
    items: [
      "REST APIs",
      "Object-Oriented Programming",
      "Data Structures",
      "Algorithms",
      "Web Scraping",
      "Agile",
    ],
  },
];
