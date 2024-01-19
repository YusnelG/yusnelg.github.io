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
    title: "Real Time Chat App",
    description: "A simple real-time chat application with the functionality of creating private groups.",
    techs: ["Python" ,"Flask", "SocketIO", "JavaScript"],
    link: "https://yusnelg.pythonanywhere.com/",
    codelink: "https://github.com/YusnelG/python-flask-chat",
    img: "/projects/realtimechat.webp",
  },
  
];

export default projects;
