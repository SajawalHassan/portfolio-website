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
  description: string;
  badgeText: string;
  badgeColor: string;
}

export const webProjects: projectType[] = [
  {
    title: "A clone of Reddit (of the old UI)",
    description:
      "Made in NextJS, in like three months. Massive project, I'd recommend tinkering around for a while in there.",
    badgeText: "complete",
    badgeColor: "green",
  },
  {
    title: "A clone of Discord",
    description:
      "A nice, simple clone of Discord, also made in NextJS. Uses websockets, has calling functionality, authentication, servers and more.",
    badgeText: "complete",
    badgeColor: "green",
  },
  {
    title: "This portfolio website",
    description: "Made, as you could've guessed, in NextJS. As for the features... well, you're looking at those.",
    badgeText: "complete",
    badgeColor: "green",
  },
  {
    title: "Aetherize, a website builder.",
    description:
      "Attempted to re-make it a third time, and, like all the other ones, gave up midway. Still, it's got the core functionality.",
    badgeText: "progress",
    badgeColor: "yellow",
  },
  {
    title: "Html SPA loader",
    description:
      "Automatically generate dynamic SPA pages from HTML files with a homepage using Next.js and Tailwind CSS.",
    badgeText: "complete",
    badgeColor: "yellow",
  },
];

export const linuxProjects: projectType[] = [
  {
    title: "My arch linux dotfiles",
    description:
      "Took a lot of time to set up my ideal setup, and am rather proud of it. Using hyprland, waybar, and other, for the most part, standard utils.",
    badgeText: "Will always be wip",
    badgeColor: "yellow",
  },
  {
    title: "Random, small bash scripts",
    description:
      "Some were made for genuine productivity, others were for showing off. They're small, and any ai can write them, but, still, they hold a special place in my heart.",
    badgeText: "Will always be wip",
    badgeColor: "yellow",
  },
];

export const datascienceProjects: projectType[] = [
  {
    title: "A GAN (Generative Adversarial Network) that generates images of anime faces",
    description:
      "Made in pytorch a very long time ago, in around sixth or seventh class. Was a very fun but difficult project for a boy so early in his youth.",
    badgeText: "complete",
    badgeColor: "green",
  },
  {
    title: "EDA (Exploratory Data Analysis) of a housing prices dataset",
    description:
      "Also made during sixth or seventh grade. Part of the early steps I took towards Data Science, and drifted from ever since, hoping to return again one day.",
    badgeText: "complete",
    badgeColor: "green",
  },
  {
    title: "A sentence completing LSTM (Long Short-Term Memory)",
    description:
      "Made an LSTM in pytorch that completes a given, incomplete sentence. It's not very good, but a transformer architecuture was too difficult for me to understand back then, and even now.",
    badgeText: "complete",
    badgeColor: "green",
  },
  {
    title: "Sentiment analysis neural network",
    description: "An ANN made in pytorch that classifies a sentence into a positive or a negative sentiment.",
    badgeText: "complete",
    badgeColor: "green",
  },
];

export const randomProjects: projectType[] = [
  {
    title: "Quote video generator.",
    description:
      "Made the bulk of it at 2am on a random tuesday, not wanting to study for my upcoming physics exam. Automatically chooses quotes (or you may enter them manually), generates videos of them, and publishes them.",
    badgeText: "complete",
    badgeColor: "green",
  },
  {
    title: "Note taking app",
    description:
      "Made to learn the basics of docker. Has a multi container architecture, is properly dockerized, has a working CI/CD pipeline, with automated deployments to a GCP virtual machine.",
    badgeText: "complete",
    badgeColor: "green",
  },
  {
    title: "A RPG game in Unity",
    description: "Very much incomplete, maybe I'll finish it one day.",
    badgeText: "progress",
    badgeColor: "yellow",
  },
  {
    title: "Shooting game in Godot",
    description: "Made very early in my coding career. A simple shooting game in Godot",
    badgeText: "complete",
    badgeColor: "green",
  },
];

import Youtube from "@/public/assets/icons/yt.svg";
import Discord from "@/public/assets/icons/discord.svg";
import Instagram from "@/public/assets/icons/instagram.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

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
