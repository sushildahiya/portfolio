// Mock data for Sushil Dahiya's Portfolio
export const personalInfo = {
  name: "Sushil Dahiya",
  title: "Full-Stack Developer & AI/ML Engineer",
  location: "Sonipat, Haryana",
  phone: "8109339024",
  email: "sushildahiya37@gmail.com",
  linkedin: "https://linkedin.com/in/sushil-dahiya",
  github: "https://github.com/sushildahiya",
  naukri: "https://www.naukri.com/code360/profile/Sushil_Dahiya",
  tagline: "Innovative, results-driven, and dynamic full-stack developer with expertise in React, Node.js, FastAPI, and Next.js",
  description: "Skilled in building scalable applications, optimizing performance, securing data, and integrating AI/ML solutions. Successfully led payment gateway migrations, microservices enhancements, and cloud-based deployments while demonstrating exceptional problem-solving and debugging skills."
};

export const education = [
  {
    id: 1,
    institution: "Hindu College of Engineering, Sonipat",
    degree: "Master of Technology in Electronics and Communication",
    duration: "Nov. 2020 – Aug. 2022",
    cgpa: "8.94 CGPA"
  },
  {
    id: 2,
    institution: "Hindu College of Engineering, Sonipat", 
    degree: "Bachelor of Technology in Electronics and Communication",
    duration: "Aug. 2016 – Sep. 2020",
    cgpa: "7.91 CGPA"
  }
];

export const experience = [
  {
    id: 1,
    company: "Vipas.AI",
    position: "SDE II",
    location: "Hyderabad, Telangana",
    duration: "May 2024 – July 2025",
    achievements: [
      "Led development of responsive user interfaces using React, Bootstrap, and Redux for state management",
      "Successfully migrated front-end from Bootstrap to Tailwind CSS, enhancing design consistency",
      "Migrated docs.vipas.ai from React to Next.js, improving SEO and performance optimization",
      "Secured local and session storage by implementing AES encryption",
      "Designed Node.js backend as intermediary between front-end and FastAPI backend",
      "Integrated Redis caching for optimized image fetching and storage",
      "Led migration of Razorpay INR to USD payments with multi-currency support",
      "Developed Streamlit-based RAG application using Llama models",
      "Deployed applications in Dockerized Kubernetes environment on GCP"
    ]
  },
  {
    id: 2,
    company: "HCL Technologies",
    position: "Software Engineer", 
    location: "Bengaluru, Karnataka",
    duration: "Feb 2021 – Dec 2023",
    achievements: [
      "Designed and developed reactive, scalable UI for internal CMS using ReactJS",
      "Implemented Redux for state management and JWT-based authentication",
      "Established automation framework for Android and iOS applications",
      "Integrated SMTP for automated report emails and Extent Reports",
      "Executed regression, sanity, smoke, performance and end-to-end testing",
      "Monitored app stability using Crashlytics, PostHog, and Metabase",
      "Developed UI for CMD appointment management web app"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Story Scape",
    description: "A blogging web app where registered users can create posts viewable by all clients",
    technologies: ["MongoDB", "NodeJS", "ReactJS", "ExpressJS", "React Quill", "Passport-JWT"],
    features: [
      "JWT based login functionality",
      "Text editor for writing post descriptions", 
      "Post creation, editing, and deletion for authors",
      "Public viewing of all published posts"
    ],
    github: "https://github.com/sushildahiya/story_scape",
    liveLink: "https://story-scape-git-main-sushils-projects-5ce2d618.vercel.app/",
    image: "https://via.placeholder.com/600x400/1a1a2e/eee?text=Story+Scape"
  },
  {
    id: 2,
    title: "Career Crafter",
    description: "Employee Review System for performance reviews and peer feedback",
    technologies: ["NodeJS", "ExpressJS", "MongoDB", "EJS Template", "JavaScript", "CSS"],
    features: [
      "Role-based login and respective UI",
      "Performance review form filling",
      "Peer feedback system",
      "Admin access management",
      "Goal setting and self-assessment"
    ],
    github: "https://github.com/sushildahiya/career_crafter",
    image: "https://via.placeholder.com/600x400/16213e/eee?text=Career+Crafter"
  },
  {
    id: 3,
    title: "Bug Hive",
    description: "Project and bug tracking system for managing development workflows",
    technologies: ["NodeJS", "ExpressJS", "MongoDB", "EJS Template", "JavaScript", "CSS"],
    features: [
      "User signup and login with basic authentication",
      "Project creation and management",
      "Bug/issue creation and tracking",
      "Project-specific issue viewing",
      "Comprehensive bug lifecycle management"
    ],
    github: "https://github.com/sushildahiya/bug_hive",
    image: "https://via.placeholder.com/600x400/0f3460/eee?text=Bug+Hive"
  }
];

export const skills = {
  languages: ["JavaScript", "Java 8", "HTML/CSS", "SQL", "Embedded C"],
  databases: ["PostgreSQL", "MongoDB", "Firebase/Firestore"],
  tools: ["VS Code", "Eclipse", "Android Studio"],
  frameworks: ["ReactJS", "NodeJS", "ExpressJS", "Appium", "Redux", "Socket.io", "PassportJS", "Angular", "TestNG", "NextJS"],
  versionControl: ["Git", "Github"],
  cloud: ["AWS Cognito", "Lambda@Edge", "CloudFront", "S3", "EC2", "ECR", "EKS"],
  other: ["DSA", "OOPS", "Linux"]
};

export const certifications = [
  {
    id: 1,
    title: "HackerRank Basic SQL Certification",
    link: "https://www.hackerrank.com/certificates/iframe/b81dad9cd6d2"
  },
  {
    id: 2,
    title: "HackerRank Intermediate SQL Certification", 
    link: "https://www.hackerrank.com/certificates/iframe/976a886e4077"
  },
  {
    id: 3,
    title: "HackerRank Frontend Developer (React) Certification",
    link: "https://www.hackerrank.com/certificates/iframe/a5bb7d1f8900"
  },
  {
    id: 4,
    title: "Elite Certification in Embedded System Design using ARM from NPTEL India",
    link: "https://drive.google.com/file/d/1xhGmlQ9BfG8X5Dpkamuu3n9fE3nUxWOz/view"
  }
];

export const trainings = [
  {
    id: 1,
    title: "Java Fullstack with Angular",
    description: "Trained in Java 8, Spring boot, hibernate, Angular 13 and PostgreSQL"
  },
  {
    id: 2,
    title: "Full Stack Course - MERN Stack",
    description: "Completed MERN stack course and system-design course from Coding Ninjas"
  }
];