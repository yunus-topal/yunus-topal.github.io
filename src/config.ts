export const siteConfig = {
  name: "Yunus Emre Topal",
  title: "Software Engineer",
  description: "Portfolio website of Yunus Emre Topal",
  accentColor: "#1d4ed8",
  social: {
    email: "emretopal20@gmail.com",
    linkedin: "https://www.linkedin.com/in/yunus-emre-topal-a89478194/",
    github: "https://github.com/yunus-topal",
  },
  aboutMe:
    "I’m a software engineer with a Master’s in Informatics (specializing in Computer Vision) from the Technical University of Munich (TUM) and a B.Sc. in Computer Engineering from Boğaziçi University. I have previous work experience building, containerizing, and deploying backend services using .NET and Spring Boot. For the last two years, I’ve been working at Holo-Light, crafting immersive XR experiences in Unity and MRTK.",
  skills: ["Unity", "C#", ".NET", "C++", "Java", "Python", "Docker", "XR", "Deep Learning", "Computer Vision", "MQTT"],
  projects: [
    {
      name: "Human-LLM Interaction Evaluation Framework",
      description:
        "Developed a framework to evaluate human-LLM interactions using multimodal data, including text, audio, and video.",
      link: "https://hai.edu.sot.tum.de/",
      skills: ["React", ".NET", "Docker", "C#", "JavaScript"],
    },
    {
      name: "LLM Dialogue Extractor Extension",
      description:
        "A browser extension that extracts and summarizes dialogues from LLMs, enhancing user experience by providing quick access to conversation history. Supports ChatGPT, Claude, DeepSeek and Gemini.",
      link: "https://github.com/yunus-topal/ChatGptExtractor",
      skills: ["Javascript", "HTML", "CSS"],
    },
    {
      name: "Decoration Game (VR)",
      description:
        "Developed a serious game about Chinese cultural heritage in Unity for Meta Quest 3 and Varjo XR-3",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["Unity", "XRI", "C#", "Whisper"],
    },
  ],
  experience: [
    {
      company: "Holo-Light",
      title: "Software Developer",
      dateRange: "Oct 2023 - Present",
      bullets: [
        "Working on the Research team, developing the XR applications for the Horizon Europe projects.",
        "Collaborating with 8+ partner companies on Horizon Europe projects and showing the results at international conferences.",
        "Customized and integrated Holo-Light Stream for a pre-market Hitachi XR device.",
      ],
    },
    {
      company: "Oredata",
      title: "Software Developer",
      dateRange: "Jan 2022 - Aug 2022",
      bullets: [
        "Integrated backend services into a major bank's internal systems, enabling real-time data analytics.",
        "Implemented CI/CD pipeline to reduce deployment time by 50%.",
        "Delivered new endpoints with unit tests to ensure 99%+ reliability",
      ],
    },
  ],
  education: [
    {
      school: "Technical University of Munich (TUM)",
      degree: "Master of Science in Informatics",
      dateRange: "2022 - 2025",
      achievements: [
        "Graduated Cum Laude with 2.0 GPA",
        "Thesis: Multimodal Human-AI Interaction Evaluation Framework",
        "Interdisciplinary Project: Chinese Cultural Heritage VR Game",
      ],
    },
    {
      school: "Boğaziçi University",
      degree: "Bachelor of Science in Computer Engineering",
      dateRange: "2022",
    },
  ],
};
