import {
	SiReact,
	SiTypescript,
	SiJavascript,
	SiTailwindcss,
	SiHtml5,
	SiCss,
	SiGit,
} from "react-icons/si";
import type { IconType } from "react-icons";

export const skills: { name: string; icon: IconType }[] = [
	{ name: "React", icon: SiReact },
	{ name: "TypeScript", icon: SiTypescript },
	{ name: "JavaScript", icon: SiJavascript },
	{ name: "Tailwind CSS", icon: SiTailwindcss },
	{ name: "HTML", icon: SiHtml5 },
	{ name: "CSS", icon: SiCss },
	{ name: "Git", icon: SiGit },
];