export const profile = {
  name: "Akanksha Shah",
  title: "Software Engineer · Backend & Systems",
  email: "shahakanksha286@gmail.com",
  social: {
    github: "https://www.github.com/akanksha6082",
    linkedin: "https://www.linkedin.com/in/shah-akanksha",
    instagram: "https://www.instagram.com/akanksha_shah6082",
  },
  resumePath: "/resume.pdf",
} as const;

/**
 * When you add a photo under `public/`, set its URL path (e.g. `/images/profile.png`).
 * Leave empty to keep the generated placeholder.
 */
export const profileImagePath: string | undefined = "/images/profile.jpg";

/**
 * Random caption under the hero (new line every 3s), matching the original site behavior.
 */
export const rotatingCaptions: string[] = [
  "Convincing the pixels to align perfectly...",
  "Counting the seconds until the page loads...",
  "Creating more memes for the internet...",
  "Digging for treasure...",
  "Downloading extra RAM...",
  "Drinking more masala chai...",
  "Escaping the loading page...",
  "Figuring out how to close vim...",
  "Finding more friends...",
  "Finding the stash of loading messages...",
  "It's Time-For-Chai...",
  "Finding my Ikigai...",
  "Loading a humorous message...",
  "Looking around at how lucky we are to be alive right now...",
  "Not throwing away her shot...",
  "Software Engineer | Backend Developer",
  "Optimizing algorithms for maximum efficiency...",
  "Organizing the chaos...",
  "Putting the final touches on a masterpiece...",
  "Replacing error messages with jokes...",
  "Rhyming with finesse, loading with impress...",
  "Searching for the meaning of life...",
  "Sending a Slack message...",
  "Shipping quickly and often...",
  "Solving more maths problems...",
  "Sorting the lines...",
  "Summoning the website gods...",
  "Taking some photos...",
  "Thinking past tomorrow...",
  "Tightening loose screws...",
  "Trying to catch them all...",
  "Trying to go faster...",
  "Writing every night like he's running out of time...",
];

export const aboutParagraphs: string[] = [
  "Hi there! My name is Akanksha and I am pursuing a Master of Computer Science at Texas A&M University. I completed my B.Tech in Computer Engineering at College of Engineering, Pune (COEP Technological University).",
  "I have two years of industry experience as a Software Developer at Citicorp Services India, where I worked on data security, microservices, and scalable solutions with Kafka. Through graduate study I aim to deepen how ML and AI can streamline operations and build more consumer-centric systems—and to bridge business needs with solid engineering.",
  "Outside of code and research I enjoy movies, cooking, evening runs, ping-pong, hiking, and sketching. Reach out if you want to collaborate or chat about an opportunity.",
];

export type EducationEntry = {
  school: string;
  location: string;
  degree: string;
  years: string;
  detail?: string;
  coursework: string[];
  logoPath?: string;
  logoSize?: "default" | "wide";
};

export const education: EducationEntry[] = [
  {
    school: "Texas A&M University",
    logoPath: "/images/tamu_logo.png",
    logoSize: "wide",
    location: "College Station, TX, USA",
    degree: "M.S. Computer Science",
    years: "2024 — 2026",
    detail: "CGPA: 4.0 / 4.0",
    coursework: [
      "Large Language Models",
      "Software Engineering",
      "Machine Learning",
      "Deep Reinforcement Learning",
      "Artificial Intelligence",
      "Parallel Computing",
      "Analysis of Algorithms",
      "Network Security",
      "Distributed Processing & Cloud Computing"
      
    ],
  },
  {
    school: "COEP Technological University",
    logoPath: "/images/coep_logo.png",
    location: "Pune, India",
    degree: "B.Tech Computer Engineering",
    years: "2018 — 2022",
    detail: "CGPA: 9.14 / 10",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Data Science",
      "Information Retrieval",
      "Computer Organization",
    ],
  },
];

export type ExperienceRole = {
  id: string;
  company: string;
  location: string;
  title: string;
  range: string;
  bullets: string[];
};

export const experienceRoles: ExperienceRole[] = [
  {
    id: "aws-intern",
    company: "Amazon Web Services (AWS)",
    location: "Seattle, WA, USA",
    title: "Software Developer Engineering Intern",
    range: "May 2025 -  Aug 2025",
    bullets: [
    "Worked with the Amazon CloudWatch Logs Insights (CWLI) team within AWS Observability.",
    "Extended the CloudWatch Logs Insights query language and compilation pipeline to support a new sample command, integrating sampling into the distributed query execution engine for efficient large-scale log analysis.",
    "Designed and launched a log context viewer within CloudWatch Logs Insights and Live Tail consoles, as well as CloudWatch dashboard widgets, enabling users to retrieve surrounding log context for faster debugging and investigation.",
    ],
  },
  {
    id: "citi-swe",
    company: "Citicorp Services India Private Limited",
    location: "Pune, MH, India",
    title: "Software Developer",
    range: "July 2022 — July 2024",
    bullets: [
      "Worked with BCMA Shared Services Team in Information Services Group (ISG).",
      "Engineered a Kafka encryption/decryption library with Ionic KMS to secure data streams across 16 production applications with minimal latency overhead.",
      "Contributed to the development of the data replication utility to migrate the data from a golden data source to distributed servers, reducing replication time and manual errors.",
      "Designed a client-agnostic metadata-driven search service for VAULT, enabling document discovery across multiple storage systems such as S3, DMC, DMCR, Teams, etc.",
    ],
  },
  {
    id: "citi-intern",
    company: "Citicorp Services India Private Limited",
    location: "Pune, MH, India",
    title: "Summer Analyst — Internship",
    range: "May 2021 — July 2021",
    bullets: [
    "Worked with the Core Banking team in Treasury and Trade Solutions.",
    "Conceptualized and developed a Maker Checker process for an application that tested various middleware services.",
    ],
  },
];


export type NewsItem = {
  id: string; 
  date: string;
  body: string;
  links?: { label: string; href: string }[];
};

export const newsItems: NewsItem[] = [
  {
    id: "tamu-ta",
    date: "Aug 2025",
    body: "Teaching assistant for CSCE 481 Seminar and CSCE 431 Software Engineering under Prof. Pauline Wade",
    links: [
      { label: "Prof. Wade", href: "https://engineering.tamu.edu/cse/profiles/wade-pauline.html" },
     
    ],
  },
  {
    id: "aws-internship",
    date: "May 2025",
    body: "Started as SDE Intern with CloudWatch Logs at Amazon Web Services (AWS)",
    links: [
      { label: "CloudWatch Logs", href: "https://aws.amazon.com/cloudwatch/?nc2=type_a" },
      {
        label: "AWS",
        href: "https://aws.amazon.com/",
      },
    ],
  },
  {
    id: "teamup-2024",
    date: "Aug 2024",
    body: "Software Developer Volunteer for Teamup Organization (Apps for Good Program) TAMU",
    links: [
      { label: "Teamup", href: "https://teamup.org/" },
      {
        label: "Apps for Good Program",
        href: "https://teamup.org/apps/neo/",
      },
    ],
  },

  {
    id: "tamu-mcs",
    date: "Aug 2024",
    body: "Started the M.S. in Computer Science program at Texas A&M University, College Station.",
    links: [{ label: "Texas A&M", href: "https://www.tamu.edu" }],
  },
  {
    id: "citi-gigawatts",
    date: "Jan 2024",
    body: "Secured second runner up position in the India FinTech Innovation Hackathon organized by Citi India",

  },
  {
    id: "citi-swe",
    date: "July 2022",
    body: "Started working as a Software Developer Engineer at Citicorp Services India",
    links: [{ label: "Citi careers", href: "https://jobs.citi.com/" }],
  },
  {
    id: "international-trip",
    date: "Aug 2022",
    body: "Completed my first international trip to Singapore and Malaysia",
  },
  {
    id: "citi-internship",
    date: "May 2021",
    body: "Started summer internship at Citicorp Services India",
    links: [{ label: "Citi careers", href: "https://jobs.citi.com/" }],
  },
  {
    id: "undergrad-mindspark",
    date: "Jan 2021",
    body: "Events Volunteer and Documentation Head at MindSpark, national level technical fest, COEP",
  },
  {
    id: "undergrad-2018",
    date: "Aug 2018",
    body: "Commenced my undergraduate journey at College of Engineering, Pune",
  },
];

export type EventItem = {
  id: string;
  title: string;
  location?: string;
  date: string;
  body: string;
  /** Optional photo under `public/` (e.g. `/images/technight.jpg`). */
  image?: string;
  /** With `object-cover`, `"top"` keeps the top of the photo visible (crop from bottom). */
  imageObjectPosition?: "top" | "center";
  links?: { label: string; href: string }[];
};

export const recentEvents: EventItem[] = [
  {
    id: "paycom-2024",
    title: "Paycom Tech Night & Women in Tech Summit",
    location: "Dallas, Texas",
    date: "November 2024",
    body: "Participated in Paycom Tech Night, an event focused on showcasing innovative technology solutions, fostering networking among tech enthusiasts, and promoting collaborative problem-solving in the tech community.",
    image: "/images/technight.jpg",
    imageObjectPosition: "top",
    links: [
      { label: "Paycom", href: "https://www.paycom.com/about/" },
      {
        label: "Tech Night (video)",
        href: "https://www.youtube.com/watch?v=vcE38KTz6Xw",
      },
    ],
  },
  // {
  //   id: "teamup-neo",
  //   title: "Software Developer — Teamup Organization",
  //   location: "Texas A&M University",
  //   date: "Ongoing",
  //   body: "Volunteer developer on a team of ~10, helping productionize a project management tool for students and mentors in the Apps for Good program.",
  //   links: [
  //     { label: "Teamup", href: "https://teamup.org/" },
  //     { label: "Neo app", href: "https://teamup.org/apps/neo/" },
  //   ],
  // },
  {
    id: "citi-gigawtts",
    title: "GigawaTTS — Citi India Innovation (2nd place)",
    location: "Citicorp Services India",
    date: "August 2023",
    body: "Won Second Prize in the India FinTech Innovation Challenge organized by TTS (Treasury and Trade Solutions) where we developed an B2B ecommerce platform for citi clients leveraging the Open Network for Digital Commerce (ONDC) framework. The project aimed to streamline B2B transactions by leveraging ONDC’s open-source, interoperable infrastructure, enabling seamless communication between buyers, sellers, and service providers. ONDC decentralizes traditional e-commerce by allowing multiple vendors and platforms to interact without being confined to a single ecosystem. This approach improved efficiency and created cross-product opportunities, enabling businesses to discover and integrate complementary products and services.",
    image: "/images/tts_pic.png",
  },
];

export type Publication = {
  id: string;
  title: string;
  venue: string;
  date: string;
  abstract: string;
  link?: { label: string; href: string };
};

export const publications: Publication[] = [
  {
    id: "ddos-sdn",
    title: "Detection and Mitigation of (D)DoS Attacks in SDN Environment",
    venue:
      "International Journal of Advanced Research in Science, Communication and Technology (IJARSCT)",
    date: "June 2023",
    abstract:
     "Proposed and implemented an entropy-based mechanism to detect and mitigate DoS and DDoS attacks in Software Defined Networking (SDN) environments. The system uses Shannon entropy over sliding windows of network traffic and a self-adjusting dynamic threshold to distinguish attack traffic from normal traffic in real time. Integrated sFlow-RT for low-congestion flow statistics collection and the POX controller for network management. A two-stage mitigation module identifies victim and attacker hosts using packet header analysis and installs OpenFlow drop-flow rules at the source switch to block attack traffic close to origin. The approach achieved 100% detection accuracy with a 12%+ improvement over baseline by eliminating false positives through three-round entropy confirmation.",
    link: {
      label: "Proceedings (PDF)",
      href: "https://ijarsct.co.in/Paper12105.pdf",
    },
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
  /** Optional image under /public — add files as you scale the portfolio */
  image?: string;
};

/** Add entries here to grow the portfolio; UI filters by tag automatically. */
export const projects: Project[] = [
  {
    id: "meal-calorie",
    title: "Meal Calorie Prediction",
    description:
      "Multimodal ML for meal calorie estimation: CGM, microbiome, demographics, and meal images.",
    tags: ["ML", "Research", "Health"],
    links: [{ label: "Details (PDF)", href: "/meal.pdf" }],
  },
  {
    id: "summarize-me",
    title: "SummarizeME",
    description:
      "Text summarization tool: condense long articles and documents into clear, readable summaries.",
    tags: ["Web", "ML", "NLP"],
    links: [
      {
        label: "Demo recording",
        href: "https://drive.google.com/file/d/1PS1rSf_1QuQ-AMmh1sSottwApywel7AO/view?usp=sharing",
      },
    ],
  },
  {
    id: "docquery-ai",
    title: "DocQueryAI",
    description:
      "Ask natural-language questions over documents and get context-grounded answers with retrieval-augmented generation.",
    tags: ["AI", "NLP", "Web"],
    links: [],
  },
  {
    id: "neo-pm",
    title: "Project Management Tool (Neo)",
    description:
      "Centralized milestones and progress for students and mentors; analytics for resource and project management.",
    tags: ["Web", "Product", "Volunteer"],
    links: [{ label: "Live", href: "https://teamup.org/apps/neo/" }],
  },
  {
    id: "athread",
    title: "Userland multithreading library",
    description:
      "Lightweight POSIX-style threading: one-one and many-one models.",
    tags: ["C", "Systems", "OS"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/akanksha6082/multithreading-library",
      },
    ],
  },
  {
    id: "price-tracer",
    title: "Price Tracer",
    description:
      "Web scraping across e-commerce sites with trends, charts, and price-drop alerts.",
    tags: ["Python", "Web", "Data"],
    links: [
      { label: "GitHub", href: "https://github.com/akanksha6082/PriceTracer" },
    ],
  },
  {
    id: "http-server",
    title: "HTTP/1.1 Server",
    description:
      "Multi-threaded Python server: GET, PUT, POST, DELETE, HEAD; cookies, logging, config.",
    tags: ["Python", "Networking"],
    links: [
      { label: "GitHub", href: "https://github.com/akanksha6082/HTTP-Server" },
    ],
  },
  {
    id: "diff-patch",
    title: "Linux Diff & Patch CLI",
    description: "Line-by-line diff using LCS; patch workflow in the terminal.",
    tags: ["C", "Algorithms", "CLI"],
    links: [
      { label: "GitHub", href: "https://github.com/akanksha6082/Diff-Patch" },
    ],
  },
];

export const allProjectTags: string[] = Array.from(
  new Set(projects.flatMap((p) => p.tags)),
).sort((a, b) => a.localeCompare(b));
