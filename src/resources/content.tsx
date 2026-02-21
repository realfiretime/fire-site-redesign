import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "FireTime",
  lastName: "",
  name: `FireTime`,
  role: "",
  avatar: "/images/avatar.jpg",
  email: "firetime@firetime.me",
  location: "America/New_York",
  languages: ["English"],
};

const newsletter: Newsletter = {
  display: true,
  title: (
    <>
      Subscribe to the firetime newsletter? i dont know why you would do
      that
    </>
  ),
  description: <>My newsletter about literaly nothing</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/realfiretime",
    essential: true,
  },
  {
    name: "Youtube",
    icon: "youtube",
    link: "https://www.youtube.com/@firetime.official",
    essential: true,
  },
  {
    name: "Twitch",
    icon: "twitch",
    link: "https://www.twitch.tv/firetimeofficial",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Site`,
  description: `Hey there, I make stuff on the internet!`,
  headline: <>Hey there, I make things on the internet!</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">firetime.me</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Back to main site, this site is still experemental
        </Text>
      </Row>
    ),
    href: "https://firetime.me",
  },
  subline: (
    <>
      Hey, Im{" "}
      <Text as="span" size="xl" weight="strong">
        FireTime
      </Text>
      , I make things on the internet. <br /> This is my website where I
      accasionaly post things here. See ya soon!
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `You want to know who i am, why?`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hey there, im firetime, i make things on the internet. from apps to
        websites, and some games, i dont know whatelse to put here so.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section, true to show
    title: "Work Experience",
    experiences: [
      {
        company: "velit ipsum id",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Deserunt veniam cupidatat reprehenderit sint voluptate pariatur est esse.
          </>,
          <>
            Consectetur sit qui deserunt ullamco tempor.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "nulla veniam velit sunt",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            DCommodo mollit laborum labore proident magna velit nisi. Aliqua commodo veniam commodo.
          </>,
          <>
            Esse occaecat magna sint elit. Lorem irure incididunt deserunt fugiat.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section, true to show
    title: "Studies",
    institutions: [
      {
        name: "irure",
        description: <>Quis magna amet et enim cupidatat cillum aute occaecat dolor qui fugiat pariatur non veniam ullamco.</>,
      },
      {
        name: "non",
        description: <>Ut veniam laboris fugiat laboris..</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section, true to show
    title: "Things I Made",
    skills: [
      {
        title: "Fire Clicker",
        description: <>A cookie clicker like game i made when i was bored</>,
        tags: [
          {
            name: "click.firetime.me",
            icon: "firetime",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "FTCL",
        description: <>FireTime Command Line. COMMING SOON</>,
        tags: [
          {
            name: "SOON",
            icon: "soon",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "",
            alt: "",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Random stuff",
  description: `What have I been doing, well thats for me to know and you to find out`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Random images gallery – ${person.name}`,
  description: `A random image collection by ${person.name}`,
  //-t means transparent
  images: [
    {
      src: "/images/gallery/backround-01.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/backround-02.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/rectangle-1-t.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/rectangle-2-t.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/rectangle-3-t.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/rectangle-4-t.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/rectangle-5-t.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/rectangle-6-t.png",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
