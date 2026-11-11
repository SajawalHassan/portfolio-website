import { StaticImport } from "next/dist/shared/lib/get-img-props";
import me from "@/public/assets/profile.webp";

export interface ItemType {
  link: string;
  text: string;
  isLast?: boolean;
}

export const TOC: ItemType[] = [
  {
    link: "/about",
    text: "More About me",
  },
  {
    link: "/computers",
    text: "Everything Computers",
  },
  {
    link: "/pretentious-gibberish",
    text: "Pretentious Gibberish",
  },
  {
    link: "/talk-to-me",
    isLast: true,
    text: "Talk to me",
  },
];

export const aboutDescriptionParas: string[] = [
  `Hi! I'm Sajawal Hassan, sixteen years old, and desperately trying to escape my lovely country: Pakistan. I love my country's culture and history but everything else about my nation hints doomsday. But this website isn't about my country, it's about me (yayyy), so lets talk about me! My first hobby was drawing characters from a series called Dragon Ball Z; I got pretty good at it until the realization came to me that I also needed to make money someday. And so dreading the day I'd be homeless I switched to the computer; and have ever since lived in the world of screens.`,
  `At the ripe age of nine, I, like any other kid, loved playing games, and so when learning to code, of course I decided to pursue game development. I chose Godot as my game engine which I'd like to say was because I truly valued FOSS, but in reality it was because my computer wasn't good enough for Unity - or so I thought. Since eventually I did switch to Unity and made some more simple games, both 3D and 2D, there as well.`,
  `Since I was so young however, I got stuck due to the all the maths in Game Development; and so to website development I went. And web development has become my home mostly. Throughout the years I learnt, obviously, the basics like HTML, CSS, Javascript; then further went to Typescript, Python, C# and more. I now stand knowing frameworks like NextJS, ReactJS, ExpressJS, Django, TailwindCSS, and a lot more you can see here!`,
  `Oh also, somewhere along this journey (like late sixth grade) I also did a lot of Data Science; making my own LSTMs, GANs, ANNs, RNNs using NumPy, Tensorflow, PyTorch, ScikitLearn and the other classics; doing proper EDA on datasets I'd find from Kaggle; and a lot of maths and statistics with notes and stuff you can find here! I moved on from it though since being a sixth grader I could only learn so much linear algebra and calculus. Eventually I hit a ceiling and moved around, learning 3D modelling in blender, random automation stuffs, scripts, and more where I made plenty of unfinished projects with big dreams.`,
  `Side-by-side to all this I was also going through my Linux journey. And here also lies another home of mine. I started with, as all beginners do, Ubuntu; but not allowing myself to falter to the Microsoft of linux, I distro hopped a lot: Mint, Fedora, Kali and some others. Eventually then I inevitably came to Arch Linux and have lived in its cozy hearth ever since. I've learnt a lot about linux over the years and have a riced up setup I'm pretty happy with, the dotfiles of which you'll find (if I haven't forgotten to actually put them on github) here!`,
  `Then there's the more humanitarian part of me. I love books, poetry, literature, philosophy and skepticism. I'm mainly influenced by Bertrand Russell and Will Durant on life and love reading classical literature. My favorite novel is Brave New World by Huxley (though The Odyssey is a close second) as it genuinely changed my worldview on a lot of things; I love the writings of Orwell and of course his famous, 1984; and some plays by Shakespeare which I find utterly fascinating. In philosophy I've read basic classics like The Problems of Philosophy by Russell, The Pleasures of Philosophy (currently reading) by Durant and a golden mention of "The Conquest of Happiness" by Russell since it changed a little boy's life forever. See my full book list here!`,
  `Lastly (I promise this is the finale!) I love poetry! English poetry obviously, but Eastern poetry a lot. I know a plentiful of kalams in Urdu, some in Farci (Persian), and a couple from the bhaktvi tradition in Sant Bhasha, Brij Bhasha etc. I love qawwalis, and see them not just as an entertainment, but, as Farid Ayaz says, "تربیت" - a cultivation of the self. I'm very new to it all, voyaging in a vast sea with no map nor a north star; just a boy trying to connect to this "Ultimate Reality". I engage with Sufi Mysticism and enjoy it a lot, but due to the influence of western thought, I don't necessarily accept all its doctrines.`,
  `So that is me, Sajawal Hassan! Sorry for the long essay, you don't have to read it, but as I said, I love writing >.<! You can check some of my poetry, quotes and essays here! I'm unsure where I'll be going in the future, but I'm interested in a lot of things, and have an unquenching thirst for knowledge that, I hope, never fades.`,
];

export const computersGateways: ItemType[] = [
  {
    text: "Web Dev",
    link: "/computers/web",
  },
  {
    text: "Linux",
    link: "/computers/linux",
  },
  {
    text: "Data Science",
    link: "/computers/data-science",
  },
  {
    text: "Random",
    link: "/computers/random",
  },
];

export interface projectType {
  title: string;
  subText: string;
  description?: string[];
  technologies?: string[];
  image?: StaticImport;
  githubLink?: string;
  liveLink?: string;
  badgeText: string;
  badgeColor: string;
}

export const webProjects: projectType[] = [
  {
    title: "A clone of Reddit (of the old UI)",
    subText:
      "Made in NextJS, in like two months. Massive project, I'd recommend tinkering around for a while in there.",
    description: [
      "Made this back in November of 2023, when I was in seventh grade, and without AI. Took me roughly two months to complete, and made me learn a lot about just what it takes to make an entire website from scratch... all by yourself.",
      "It's got authentication (from clerk), CRUD operations on subreddits, profiles, posts, nested comment sections, and upvotes. It has both dark and light mode, and is fully responsive. Looking back at the codebase now, even today I'm shocked as to how I did all that. It's not the most complex project, but it required a lot of work, consistency and dedication.",
    ],
    technologies: ["NextJS", "PrismaORM", "Typescript", "TailwindCSS", "MySQL", "Zustand", "Clerk", "Zod"],
    image: me,
    githubLink: "https://github.com/SajawalHassan/reddit_clone_nextjs",
    liveLink: "https://reddit-clone-nextjs-1f12.vercel.app",
    badgeText: "complete",
    badgeColor: "green",
  },
  {
    title: "A clone of Discord",
    subText:
      "A nice, simple clone of Discord, also made in NextJS. Uses websockets, has calling functionality, authentication, servers and more.",
    description: [
      "Took around a month to make, back in October of 2023, from a youtube tutorial. It was the first proper large-scale project I had made, and learnt much things along the way, which allowed me to make my Reddit Clone later, all by myself.",
      "It has the ability to call (using livekit), real-time messaging ability using websockets, authentication (through clerk), CRUD on servers and profiles, alongside, of course, the ability to invite people to servers. There's a global server everyone is added to by default.",
    ],
    technologies: ["NextJS", "PrismaORM", "Typescript", "TailwindCSS", "MySQL", "Zustand", "Clerk", "Zod"],
    githubLink: "https://github.com/SajawalHassan/Discord_clone_nextJS",
    liveLink: "https://discord-clone-sajawal.vercel.app",
    image: me,
    badgeText: "complete",
    badgeColor: "green",
  },
  {
    title: "This portfolio website",
    subText: "Made, as you could've guessed, in NextJS. As for the features... well, you're looking at those.",
    description: [
      "Took roughly three months, if you're counting the gaps of commits. But proper work was roughly a month, the rest was gobbled up in the humbug toils of the life I unfortunately must bear outside books and computers.",
      "It's an odd choice to read what features this website has, when you're on it... Just explore, see what beauty I had to code with the pain of a horrid and slow laptop.",
    ],
    image: me,
    technologies: ["NextJS", "Typescript", "TailwindCSS", "Google Drive API", "Zod", "Framer Motion"],
    githubLink: "https://github.com/SajawalHassan/portfolio-website/",
    badgeText: "complete",
    badgeColor: "green",
  },
  {
    title: "Aetherize, a website builder.",
    subText:
      "Attempted to re-make it a third time, and, like all the other ones, gave up midway. Still, it's got the core functionality.",
    description: [
      "Got pretty far the first time I made. Restarted for a 'fresh start', got far again, then restarted again. The core functionality this time around isn't much, but poke around at its git history, you'll see some fun stuff.",
    ],
    githubLink: "https://github.com/SajawalHassan/aetherize",
    image: me,
    technologies: ["NextJS", "Typescript", "TailwindCSS", "Next Auth", "Native DnD", "React DnD"],
    badgeText: "progress",
    badgeColor: "yellow",
  },
  {
    title: "Html SPA loader",
    subText: "Automatically generate dynamic SPA pages from HTML files with a homepage using Next.js and Tailwind CSS.",
    description: [
      "Made for my dad, who needed a way to create simple websites from simple html pages in NextJS.",
      "You add an html file to /html-pages and the new page is automatically available. Supports tailwindcss as well. Wasn't really a difficult project, but definitely a fun idea.",
    ],
    githubLink: "https://github.com/SajawalHassan/html-spa-loader",
    image: me,
    technologies: ["NextJS", "TailwindCSS"],
    badgeText: "complete",
    badgeColor: "yellow",
  },
];

export const linuxProjects: projectType[] = [
  {
    title: "My arch linux dotfiles",
    subText:
      "Took a lot of time to set up my ideal setup, and am rather proud of it. Using hyprland, waybar, and other, for the most part, standard utils.",
    description: [
      "Have been a linux user for at least three years now. Been on arch for about two years. These are all my dotfiles, present on my github.",
    ],
    githubLink: "https://github.com/sajawalhassan/",
    technologies: ["Hyprland", "Waybar", "Kitty", "Swaync", "Rofi", "Flameshot"],
    image: me,
    badgeText: "Will always be wip",
    badgeColor: "yellow",
  },
  {
    title: "Random, small bash scripts",
    subText:
      "Some were made for genuine productivity, others were for showing off. They're small, and any ai can write them, but, still, they hold a special place in my heart.",
    description: [
      "Just small little niche scripts that are probably not useful to anyone besides me. Still, they're fun.",
    ],
    technologies: ["Bash"],
    githubLink: "https://github.com/sajawalhassan/",
    badgeText: "Will always be wip",
    badgeColor: "yellow",
  },
];

export const datascienceProjects: projectType[] = [
  {
    title: "A GAN (Generative Adversarial Network) that generates images of anime faces",
    subText:
      "Made in pytorch a very long time ago, in around sixth or seventh class. Was a very fun but difficult project for a boy so early in his youth.",
    description: [
      "Checking the commits, it was in seventh class that I made this. Indeed a very fun project, and also a difficult one — not necessarily the code, but rather the concepts behind it.",
    ],
    technologies: ["Python", "Pytorch", "Numpy", "Google Colab", "Matplotlib"],
    githubLink: "https://github.com/SajawalHassan/anime_faces_gan",
    badgeText: "complete",
    badgeColor: "green",
  },
  {
    title: "EDA (Exploratory Data Analysis) of a housing prices dataset",
    subText:
      "Also made during sixth or seventh grade. Part of the early steps I took towards Data Science, and drifted from ever since, hoping to return again one day.",
    description: [
      "Followed an awesome playlist to learn EDA that I've now lost, but nevertheless made me learn a lot of statistical concepts.",
    ],
    badgeText: "complete",
    badgeColor: "green",
  },
  {
    title: "A sentence completing LSTM (Long Short-Term Memory)",
    subText:
      "Made an LSTM in pytorch that completes a given, incomplete sentence. It's not very good, but a transformer architecuture was too difficult for me to understand back then, and even now.",
    badgeText: "complete",
    badgeColor: "green",
  },
  {
    title: "Sentiment analysis neural network",
    subText: "An ANN made in pytorch that classifies a sentence into a positive or a negative sentiment.",
    badgeText: "complete",
    badgeColor: "green",
  },
];

export const randomProjects: projectType[] = [
  {
    title: "Quote video generator.",
    subText:
      "Made the bulk of it at 2am on a random tuesday, not wanting to study for my upcoming physics exam. Automatically chooses quotes (or you may enter them manually), generates videos of them, and publishes them.",
    badgeText: "complete",
    badgeColor: "green",
  },
  {
    title: "Note taking app",
    subText:
      "Made to learn the basics of docker. Has a multi container architecture, is properly dockerized, has a working CI/CD pipeline, with automated deployments to a GCP virtual machine.",
    badgeText: "complete",
    badgeColor: "green",
  },
  {
    title: "A RPG game in Unity",
    subText: "Very much incomplete, maybe I'll finish it one day.",
    badgeText: "progress",
    badgeColor: "yellow",
  },
  {
    title: "Shooting game in Godot",
    subText: "Made very early in my coding career. A simple shooting game in Godot",
    badgeText: "complete",
    badgeColor: "green",
  },
];

import Youtube from "@/public/assets/icons/yt.svg";
import Discord from "@/public/assets/icons/discord.svg";
import Instagram from "@/public/assets/icons/instagram.svg";

export type ContactIconsType = {
  icon: StaticImport;
  href: string;
};

export const ContactIcons: ContactIconsType[] = [
  {
    icon: Youtube,
    href: "#1",
  },
  {
    icon: Discord,
    href: "#2",
  },
  {
    icon: Instagram,
    href: "#3",
  },
];
