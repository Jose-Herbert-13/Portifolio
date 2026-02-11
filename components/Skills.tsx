import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiCss3,
  SiHtml5,
} from "react-icons/si";
import { FaCoffee } from "react-icons/fa";

const skills = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Java", icon: <FaCoffee  /> },
  { name: "Python", icon: <SiPython /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "HTML", icon: <SiHtml5 /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-full bg-preto/5 py-10 px-10 md:px-20 lg:px-30"
    >
      <div className="text-center mb-10">
        <p className="text-sm text-preto/60">O Que Eu Faço</p>
        <h2 className="text-4xl lg:text-6xl font-bold">
          Skills &
          <br />
          <span className="italic text-roxo">Especialidades</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-branco p-6 rounded-xl shadow-md text-center
                       flex flex-col items-center gap-3 hover:scale-105"
          >
            <div className="text-4xl text-roxo">{skill.icon}</div>
            <h3 className="font-bold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
