/* Change this file to get your personal Portfolio */
import { Box } from "@chakra-ui/layout";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaDatabase,
  FaDocker,
  FaAws,
  FaJava,
  FaPhp,
  FaSass,
  FaLaravel,
  FaAppStoreIos,
  FaGooglePlay,
} from "react-icons/fa";

// Navigation Links
const Links = [{ name: "Skills", link: "#skills" }, { name: "Work Experiences", link: "#experiences" }, { name: "Projects", link: "#projects" }, { name: "Blog", link: "#blog" }];
const MainLogo = 'EB'

const illustration = {
  animated: true, // set to false to use static SVG
};

// Summary And Greeting Section
const greeting = {
  username: "Erdenebulgan Sainkhishig",
  title: "Hi all, I'm Erdenebulgan",
  subTitle:
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.",
  subTitle2: "A full-stack developer and have 2 years of working experience. I have been specialising in web development and mobile application development for the past 2 years. I'm very passionate create high performance, scaleable and clean architecture of big software projects.",
  resumeLink: "",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/bulgaagithub",
  linkedin: "https://www.linkedin.com/in/erdenebulgan-sainkhishig-74bb6616b/",
  gmail: "erdenebulgandeveloper@gmail.com",
  gitlab: "https://gitlab.com/Erdenebulgan",
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "Skills",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
    "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
  ],
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: (
        <Box _hover={{ color: "orange.500" }}>
          <FaHtml5 size="50px" />
        </Box>
      ),
    },
    {
      skillName: "css3",
      fontAwesomeClassname: (
        <Box _hover={{ color: "blue.300" }}>
          <FaCss3Alt size="50px" />
        </Box>
      ),
    },
    {
      skillName: "sass",
      fontAwesomeClassname: (
        <Box _hover={{ color: "pink.500" }}>
          <FaSass size="50px" />
        </Box>
      ),
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: (
        <Box _hover={{ color: "yellow.300" }}>
          <FaJs size="50px" />
        </Box>
      ),
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: (
        <Box _hover={{ color: "blue.300" }}>
          <FaReact size="50px" />
        </Box>
      ),
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: (
        <Box _hover={{ color: "green.500" }}>
          <FaNode size="50px" />
        </Box>
      ),
    },
    {
      skillName: "php",
      fontAwesomeClassname: (
        <Box _hover={{ color: "purple.500" }}>
          <FaPhp size="50px" />
        </Box>
      ),
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: (
        <Box _hover={{ color: "red.500" }}>
          <FaLaravel size="50px" />
        </Box>
      ),
    },
    {
      skillName: "java",
      fontAwesomeClassname: (
        <Box _hover={{ color: "red.500" }}>
          <FaJava size="50px" />
        </Box>
      ),
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: (
        <Box _hover={{ color: "gray.500" }}>
          <FaDatabase size="50px" />
        </Box>
      ),
    },
    {
      skillName: "aws",
      fontAwesomeClassname: (
        <Box _hover={{ color: "orange.500" }}>
          <FaAws size="50px" />
        </Box>
      ),
    },
    {
      skillName: "docker",
      fontAwesomeClassname: (
        <Box _hover={{ color: "blue.500" }}>
          <FaDocker size="50px" />
        </Box>
      ),
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      //   logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2013 - May 2017",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      schoolName: "Stanford University",
      //   logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
  ],
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
        role: "IT Engineer",
        company: "Etugen University",
        //   companylogo: require("./assets/images/facebookLogo.png"),
        date: "September 2017 – February 2020",
        desc: "",
        descBullets: [
          "Develop The Univeristy ULMC Program",
          "Fix Computers",
        ],
    },
    {
        role: "Mobile Developer",
        company: "Chimege LLC",
        //   companylogo: require("./assets/images/quoraLogo.png"),
        date: "February 2020 – October 2020",
        desc: "",
        descBullets: [
            "Develop The Univeristy ULMC Program",
            "Fix Computers",
        ],
    },
    {
      role: "Software Developer",
      company: "Vadda LLC",
      //   companylogo: require("./assets/images/facebookLogo.png"),
      date: "February 2020 – Present",
      desc: "",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    }
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const projects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  data: [
    {
      //   image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Chimege Writer",
      projectDesc:
        "A transcriber for Mongolian audio and video contents based on Chimege technology.",
      url: "https://writer.chimege.mn",
      tech: ["React", "Javascript"],
      isMobile: false,
    },
    {
      //   image: require("./assets/images/nextuLogo.webp"),
      projectName: "Mongol Voice",
      projectDesc:
        "The main goal of this small project is to save Mongolian unique dialects before completely disappearing. Thus, we are inviting all those people specially old persons.",
      isMobile: true,
      link: "",
      links: [
        {
          link: "https://play.google.com/store/apps/details?id=com.bolorsoft.mongolvoice",
          icon: (
            <Box _hover={{ color: "gray.500" }}>
              <FaGooglePlay size="30px" />
            </Box>
          ),
        },
        {
            link: "https://apps.apple.com/us/app/mongol-voice/id1518578966",
            icon: (
                <Box _hover={{ color: "blue.400" }}>
                <FaAppStoreIos size="30px" />
                </Box>
            ),
        }
      ],
      tech: ["Flutter", "Dart"],
    },
    {
      //   image: require("./assets/images/nextuLogo.webp"),
      projectName: "Feel Mongolia",
      projectDesc:
        "Choose your vacation and travel plan. discover Mongolian beautiful places to visit",
      url: "",
      tech: ["Flutter", "Dart"],
      isMobile: true,
      links: [
        {
          link: "https://play.google.com/store/apps/details?id=pms.ihotel.rms&hl=en&gl=US",
          icon: (
            <Box _hover={{ color: "gray.500" }}>
              <FaGooglePlay size="30px" />
            </Box>
          ),
        },
        {
            link: "https://apps.apple.com/mn/app/feel-mongolia/id1504582728",
            icon: (
                <Box _hover={{ color: "blue.400" }}>
                <FaAppStoreIos size="30px" />
                </Box>
            ),
        }
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
// const achievementSection = {
//   title: "Achievements And Certifications 🏆 ",
//   subtitle:
//     "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
//   achievementsCards: [
//     {
//       title: "Google Code-In Finalist",
//       subtitle:
//         "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
//       //   image: require("./assets/images/codeInLogo.webp"),
//       footerLink: [
//         {
//           name: "Certification",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
//         },
//         {
//           name: "Award Letter",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
//         },
//         {
//           name: "Google Code-in Blog",
//           url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
//         },
//       ],
//     },
//     {
//       title: "Google Assistant Action",
//       subtitle:
//         "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//       //   image: require("./assets/images/googleAssistantLogo.webp"),
//       footerLink: [
//         {
//           name: "View Google Assistant Action",
//           url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
//         },
//       ],
//     },

//     {
//       title: "PWA Web App Developer",
//       subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
//       //   image: require("./assets/images/pwaLogo.webp"),
//       footerLink: [
//         { name: "Certification", url: "" },
//         {
//           name: "Final Project",
//           url: "https://pakistan-olx-1.firebaseapp.com/",
//         },
//       ],
//     },
//   ],
//   display: true, // Set false to hide this section, defaults to true
// };

// Blogs Section
// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
//     },
//   ],
//   display: true, // Set false to hide this section, defaults to true
// };

// Talks Sections
// const talkSection = {
//   title: "TALKS",
//   subtitle: "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅",
//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/",
//     },
//   ],
//   display: true, // Set false to hide this section, defaults to true
// };

// Podcast Section
// const podcastSection = {
//   title: "Podcast 🎙️",
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
//   ],
//   display: true, // Set false to hide this section, defaults to true
// };

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+976-99338846",
  email_address: "erdenebulgandeveloper@gmail.com",
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  projects,
  contactInfo,
  Links,
  MainLogo,
};
