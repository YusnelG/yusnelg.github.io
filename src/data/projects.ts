export type Project = {
  title: string;
  description: string;
  techs: string[];
  img?: string;
  link: string;
  codelink: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    techs: ["test", "test", "test"],
    link: "#",
    codelink: "#",
    img: "/post_img.webp",
  },
  {
    title: "Real Time Chat App",
    description: "A simple real-time chat application with the functionality of creating private groups.",
    techs: ["Python" ,"Flask", "SocketIO", "JavaScript"],
    link: "https://yusnelg.pythonanywhere.com/",
    codelink: "https://github.com/YusnelG/python-flask-chat",
    img: "/projects/realtimechat.webp",
  },
  {
    title: "Fpip",
    description: "A pip clone created in the Rust language to make it more efficient and faster",
    techs: ["Rust", "Fs", "http"],
    link: "/",
    codelink: "/",
    img: "/projects/fpip.webp",
    isComingSoon: true,
  },
  
];

export default projects;
