export type Project = {
  title: string;
  description: string;
  techs: string[];
  img?: string;
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    techs: ["test", "test", "test"],
    link: "#",
    img: "/post_img.webp",
  },
  {
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    techs: ["test", "test", "test"],
    link: "#",
    img: "/post_img.webp",
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    techs: ["test"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
