import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Ali",
  lastName: " Chehab",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.png",
  email: "chehab.ali.f@gmail.com",
  location: "Oregon, USA", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Arabic"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      Founder of SweepChain, a Web3 platform built on the Sui blockchain that
      delivers transparent and fair sweepstakes with provably fair winner
      selection, instant settlement, and complete blockchain transparency for
      companies worldwide.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/chehabali",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/alifchehab",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>
      Building AI-powered fintech solutions and transparent blockchain platforms
    </>
  ),
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">SweepChain</strong>
      </>
    ),
    href: "https://sui-drab.vercel.app/",
  },
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ali is a software engineer with a passion for building scalable and
        efficient systems. He's also the founder of SweepChain, a Web3 platform
        built on the Sui blockchain that delivers transparent and fair
        sweepstakes with provably fair winner selection, instant settlement, and
        complete blockchain transparency for companies worldwide.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience", // set to false to hide this <section></section>
    experiences: [
      {
        company: "SweepChain",
        timeframe: "2024 - Present",
        role: "Founder",
        achievements: [
          <>
            Built the SweepChain platform, a Web3 platform built on the Sui
            blockchain that delivers transparent and fair sweepstakes with
            provably fair winner selection, instant settlement, and complete
            blockchain transparency for companies worldwide.
          </>,
          <>
            Raised 2.5M USD in seed funding from a16z, a16z crypto, and other
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/sweepchain.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Palantir",
        timeframe: "2022 - 2024",
        role: "Software Engineer",
        achievements: [
          <>
            Developed and maintained large-scale software systems for
            data-driven decision making, contributing to products deployed at
            critical institutions across public and private sectors.
          </>,
          <>
            Built features used by research scientists, aerospace engineers,
            intelligence analysts, and economic forecasters worldwide using
            Java, Go, TypeScript, and modern technologies like React and
            Elasticsearch.
          </>,
          <>
            Collaborated with cross-functional teams including Product Managers,
            Designers, and Forward Deployed Engineers to solve complex customer
            problems and deliver high-impact solutions.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Oregon State University",
        description: <>Double major in Computer Science and Finance</>,
        timeframe: "2015 - 2019",
      },
    ],
  },
  technical: {
    display: true,
    skills: [
      {
        title: "Blockchain & Web3", // set to false to hide this <section></section>
        description: (
          <>
            Building decentralized applications on the Sui blockchain using Move
            and Rust. Experienced with smart contract development, DeFi
            protocols, and blockchain infrastructure for transparent and
            scalable Web3 solutions.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-02.webp",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            // src: "/images/projects/project-01/cover-03.webp",
            // alt: "Project image",
            // width: 16,
            // height: 9,
          },
        ],
      },
      {
        title: "Full Stack Development", // set to false to hide this <section></section>
        description: (
          <>
            Expert in building complete web applications with Next.js, React,
            TypeScript, and Node.js. Proficient in modern frontend frameworks,
            server-side rendering, API development, and creating responsive,
            performant user experiences.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Cloud & Database Technologies", // set to false to hide this <section></section>
        description: (
          <>
            Experienced with AWS services, MongoDB, Supabase, and Vercel for
            deployment and hosting. Skilled in database design, cloud
            architecture, serverless functions, and building scalable backend
            infrastructure.
          </>
        ),
        images: [],
      },
      {
        title: "Programming Languages & Tools", // set to false to hide this <section></section>
        description: (
          <>
            Proficient in JavaScript, TypeScript, Rust, Go, Java, Python, and
            modern development tools. Experience with Git, Docker, CI/CD
            pipelines, testing frameworks, and agile development methodologies.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-05.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
