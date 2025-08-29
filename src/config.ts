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
  skills: ["Unity", "C#", ".NET", "C++", "Java", "Python", "Docker", "React", "Javascript", "XR", "Deep Learning", "Computer Vision", "MQTT"],
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
      link: "https://github.com/yunus-topal",
      skills: ["Unity", "XRI", "C#", "Whisper"],
    },
    {
      name: "Generalized 3D-LMNet",
      description:
        "Replicated and extended the 3D-LMNet architecture to perform 3D object reconstruction from single-view 2D images.",
      link: "https://github.com/yunus-topal/Generalized-3D-LMNet",
      skills: ["PyTorch", "Python", "Deep Learning", "3D Computer Vision", "Model Generalization"],
    },
    {
      name: "Sudoku",
      description:
        "Developed a Sudoku mobile application using Unity and C#.",
      link: "https://github.com/yunus-topal/Sudoku",
      skills: ["Unity", "C#", "Mobile Development", "UI/UX Design"],
    },
    {
      name: "Minesweeper",
      description:
        "Developed a Minesweeper mobile application using Unity and C#.",
      link: "https://github.com/yunus-topal/MineSweeper",
      skills: ["Unity", "C#", "Mobile Development", "UI/UX Design"],
    },
  ],
  experience: [
    {
      company: "Holo-Light",
      title: "Software Developer",
      dateRange: "Oct 2023 - Present",
      bullets: [
        "Optimized SDKs and streaming pipelines in C++ for enterprise projects, improving system performance and enabling smooth data delivery in distributed environments.",
        "Designed and implemented backend services using FastAPI and RabbitMQ for testing endpoints, managing broker connections, and handling Server-Sent Events (SSE) integrations.",
        "Integrated third-party APIs and message brokers, collaborating with 8+ partner companies to enable seamless data exchange.",
        "Implemented secure authentication flows with OAuth 2.0, ensuring reliable and scalable integration across systems."
      ],
    },
    {
      company: "Cropy AI",
      title: "Software Developer",
      dateRange: "Oct 2023 - Present",
      bullets: [
        "Built a FastAPI service that extracts frames from video (FFmpeg), processed them through an AI model, and performed computer vision–based compositing/alignment with OpenCV. ",
        "Developed secure backend endpoints and wrote unit/integration tests using ASP.NET and MongoDB.",
        "Implemented SSO and role-based authentication for user management.",
        "Integrated Apple Pay and Stripe gateways for secure payment processing.",
        "Developed middleware to track and analyze usage of endpoints in the system."
      ],
    },
    {
      company: "Oredata",
      title: "Software Developer",
      dateRange: "Jan 2022 - Aug 2022",
      bullets: [
        "Developed and tested backend endpoints with Spring Boot and PostgreSQL, achieving 99%+ reliability through comprehensive unit and integration testing.",
        "Implemented SSO and role-based authentication, enhancing security and fine-grained access control.",
        "Integrated backend systems with a major bank to enable secure, real-time data exchange.",
        "Streamlined deployments by containerizing applications with Docker and automating delivery via CI/CD pipelines."
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
        "Focus Areas: Computer Vision, High-Performance Computing, Machine Learning and Analytics."
      ],
    },
    {
      school: "Boğaziçi University",
      degree: "Bachelor of Science in Computer Engineering",
      dateRange: "2022",
      achievements: [
        "Thesis: Live Migration using Docker Containers"
      ],
    },
  ],
};
