// Single source of truth. Facts here come from the resume PDF.
// Edit this file to update the whole site.

export const profile = {
  name: "Kalidhasan A",
  role: "AI & Machine Learning Engineer",
  location: "Ariyalur, Tamil Nadu",
  email: "kalidhasan.a202@gmail.com",
  // Photo: place the file at public/images/kalidhasan-profile.jpg (see README).
  photo: {
    src: "/images/kalidhasan-profile.jpg",
    alt: "Portrait of Kalidhasan A",
  },
  resumeUrl: "/resume/Kalidhasan_A_Resume.pdf",
  links: {
    github: "https://github.com/Kalidhasanayyappan",
    linkedin: "https://www.linkedin.com/in/kalidhasan-ayyappan-504abb206",
    hackerrank: "https://www.hackerrank.com/profile/kalidhasan_a",
    // The resume lists this as "Portfolio". Remove if it is not the same site.
    previousPortfolio: "https://kalidhasan-portfolio.netlify.app/",
  },

  headline: "Turning data into intelligence.",
  tagline:
    "I build machine learning solutions that turn complex data into practical, real-world applications.",
  intro:
    "B.Tech student in Artificial Intelligence & Data Science at CARE College of Engineering, Trichy. I train computer vision models, wrap them in web apps, and I'm currently building an offline sign language interpreter.",

  about: [
    "I'm studying Artificial Intelligence & Data Science at CARE College of Engineering in Trichy, and I've been there since September 2023. Most of what I enjoy sits where a trained model meets a working application: a CNN is only useful once someone can point a webcam at it.",
    "My internships have covered both sides of that. I've worked on full stack web apps and Java, on ETL and SQL for a data warehouse, and on machine learning models in Python, Pandas and NumPy. That mix is why I tend to think about the whole system, not just the notebook.",
    "Outside coursework I serve as Treasurer of the ECO CARE Club and work with the Entrepreneurship Development Cell. The projects I care about most, like EcoVert and Gestro, aim at agriculture and accessibility.",
  ],

  pipeline: {
    caption: "How the emotion recognition project works",
    steps: ["Webcam frame", "Face detection (OpenCV)", "CNN trained on FER-2013", "Emotion shown in Flask app"],
  },

  skills: [
    { group: "Languages", items: ["Python", "Java", "SQL"], evidence: "Python and SQL appear across all three projects and internships." },
    { group: "AI & machine learning", items: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Predictive Analytics"], evidence: "Emotion recognition, EcoVert, Gestro." },
    { group: "Libraries & frameworks", items: ["TensorFlow", "Keras", "Scikit-learn", "OpenCV", "NumPy", "Pandas", "Matplotlib", "Flask"], evidence: "Emotion recognition uses TensorFlow, Keras, OpenCV and Flask." },
    { group: "Web", items: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "REST APIs"], evidence: "Full stack internship at Marcello Tech." },
    { group: "Databases", items: ["MySQL", "MongoDB"], evidence: "CRUD work and data warehousing internships." },
    { group: "Tools", items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab"], evidence: "" },
    { group: "Computer science core", items: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks"], evidence: "" },
  ],

  projects: {
    featured: {
      title: "AI-Powered Facial Emotion Recognition",
      status: "Completed",
      stack: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask"],
      summary:
        "A real-time system that reads facial emotion from a webcam stream, built on a CNN trained and evaluated on the FER-2013 dataset.",
      sections: [
        {
          heading: "What I built",
          body: "I trained and evaluated a Convolutional Neural Network on FER-2013, used OpenCV to find faces in the live video, and connected the trained model to a Flask web application so the prediction appears as the webcam runs.",
        },
        {
          heading: "Why the pieces are split this way",
          body: "Detection and classification are separate steps. OpenCV handles locating the face; the CNN only has to classify a face crop. That keeps the model's job narrow and lets either part be swapped without touching the other.",
        },
      ],
      // Add real links here and they appear automatically: repo: "https://github.com/...", demo: "https://..."
      repo: undefined as string | undefined,
      demo: undefined as string | undefined,
    },
    others: [
      {
        title: "EcoVert: Smart Plant Monitoring System",
        status: "Completed",
        stack: ["Machine Learning", "Python", "IoT", "Arduino"],
        body: "An Arduino setup with IoT sensors collects soil moisture, temperature and humidity in real time. Machine learning analyses those readings to judge plant health and support automated, data-driven plant care for sustainable agriculture.",
        repo: undefined as string | undefined,
        demo: undefined as string | undefined,
      },
      {
        title: "Gestro: Offline AI Sign Language Interpreter",
        status: "In development",
        stack: ["OpenCV", "TensorFlow", "Computer Vision"],
        body: "A computer vision system for real-time sign language recognition that runs without an internet connection, so communication doesn't depend on connectivity.",
        repo: undefined as string | undefined,
        demo: undefined as string | undefined,
      },
    ],
  },

  education: [
    { title: "B.Tech, Artificial Intelligence & Data Science", place: "CARE College of Engineering, Trichy", period: "Sep 2023 – present", note: "CGPA 7.26" },
    { title: "HSC (12th)", place: "Montfort Matriculation Higher Secondary School", period: "2022 – 2023", note: "69.16%" },
    { title: "HSC (10th)", place: "Montfort Matriculation Higher Secondary School", period: "2020 – 2021", note: "All pass" },
  ],

  internships: [
    {
      title: "AI/ML Developer Intern",
      place: "Kuganmahe Solutions Pvt Ltd",
      points: [
        "Developed machine learning models for data analysis and predictive applications.",
        "Preprocessed and analysed datasets with Python, Pandas and NumPy.",
        "Evaluated model performance with appropriate metrics and optimisation techniques.",
        "Helped deploy AI/ML solutions and documented project workflows.",
      ],
    },
    {
      title: "Data Warehousing Intern",
      place: "Aishvel Infotech Pvt Ltd",
      points: [
        "Assisted in designing and maintaining data warehouse solutions for business reporting.",
        "Ran ETL processes to integrate data from multiple sources.",
        "Wrote SQL to clean, transform and analyse large datasets.",
        "Supported data validation and reporting for accuracy and consistency.",
      ],
    },
    {
      title: "Java Intern",
      place: "Marcello Tech Pvt Ltd",
      points: [
        "Built object-oriented Java applications using file handling, exception handling and collections.",
        "Used JDBC to connect applications to relational databases.",
        "Debugged, tested and optimised Java programs.",
      ],
    },
    {
      title: "Full Stack Development Intern",
      place: "Marcello Tech Pvt Ltd",
      points: [
        "Developed responsive web applications with modern front-end and back-end technologies.",
        "Built and integrated REST APIs; performed CRUD operations on databases.",
        "Worked with the team using Git for version control.",
      ],
    },
  ],

  leadershipIntro:
    "Building communities, leading initiatives, and creating opportunities for students to learn, collaborate, and grow at CARE College of Engineering.",

  leadership: [
    { role: "Treasurer", org: "ECO CARE Club", period: "2026–27", body: "Managing club finances and supporting budget planning for environmental initiatives." },
    { role: "Secretary", org: "ECO CARE Club", period: "2025–26", body: "Coordinated club operations, communications, and team activities." },
    { role: "Joint Secretary", org: "ECO CARE Club", period: "2024–25", body: "Supported club initiatives, planning, and student engagement." },
    { role: "Executive Member", org: "Full Stack & Data Analytics Club", period: "2025–27", body: "Contributing to technical activities, coding bootcamps, and peer learning." },
    { role: "WorkForce Member", org: "Entrepreneurship Development Cell", period: "", body: "Supporting initiatives that promote innovation and entrepreneurial thinking." },
    { role: "NSS Volunteer", org: "National Service Scheme", period: "2023–25", body: "Participated in community service and social outreach activities." },
  ],

  leadershipHighlights: [
    {
      title: "Technical Workshop Lead",
      subtitle: "UI/UX Design, Power BI",
      body: "Led practical workshops for students from first year to final year, introducing UI/UX principles, data visualization, and industry-relevant tools.",
    },
    {
      title: "Overall Coordinator",
      subtitle: "College Onam Festival",
      body: "Led event planning and coordination, delegated responsibilities, and collaborated with student teams to create an engaging campus celebration.",
    },
  ],

  certifications: [
    "Machine Learning (AWS Academy)",
    "Gen AI (AWS Academy)",
    "Cloud Foundation (AWS Academy)",
    "AI (IBM)",
    "Data Analytics (IBM)",
    "Data Analytics Job Simulation (Deloitte)",
    "Full Stack Development (NoviTech R&D)",
    "Python, Basic (HackerRank)",
    "Problem Solving, Basic (HackerRank)",
    "SQL, Basic (HackerRank)",
  ],
};

export type Profile = typeof profile;