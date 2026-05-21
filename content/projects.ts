export type Project = {
  title: string;
  date: string;
  stack: string[];
  summary: string;
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Rivals!",
    date: "Nov. 2025",
    stack: ["React Native", "TypeScript", "Supabase", "Python", "Riot Games API"],
    summary:
      "Cross-platform mobile app for League of Legends stat comparison. BFS-based Python pipeline discovered 100K+ players across regions; custom impact-score ranking algorithm and database schema for auth, profiles, and match history.",
  },
  {
    title: "ML Facial Expression Recognition",
    date: "Oct. 2025",
    stack: ["Python", "TensorFlow", "NumPy", "Pandas"],
    summary:
      "CNN-based facial expression recognition system trained on grayscale 48×48 images. Reached 80% accuracy through hyperparameter, batch size, and architecture tuning; automated inference and CSV export.",
  },
  {
    title: "Roast-Me!",
    date: "Feb. 2025",
    stack: ["HTML", "CSS", "JavaScript", "Python", "OpenCV", "Dlib"],
    summary:
      "AI-powered web app delivering real-time personalized responses via computer vision and generative AI. OpenCV + Dlib facial-landmark pipeline feeds OpenAI prompts and ElevenLabs voice synthesis end-to-end in under 3 seconds.",
  },
];
