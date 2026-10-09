import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export const contacts = [
	{ icon: GitHubIcon, label: "GitHub", href: "https://github.com/alinecascaes" },
	{
		icon: LinkedInIcon,
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/alinecascaes/",
	},
	{
		icon: EmailIcon,
		label: "Email",
		href: "mailto:alinemcascaes@gmail.com",
	},
] as const;