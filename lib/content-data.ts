import { StaticImport } from "next/dist/shared/lib/get-img-props";
import reddit from "@/public/assets/project-images/REDDIT.png";
import discord from "@/public/assets/project-images/DISCORD.png";
import archDotfilesPreview from "@/public/assets/project-images/arch-dotfiles.png";

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
  `Hey, I'm Sajawal Hassan. I do a lot of things, and this website is a failed attempt at showing them all. For how may I even tell the ecstasy of becoming human, and then put it into a website? Nevertheless, I shall try. I'm from Pakistan — a country I staunchly despise, and which I am in the continual, incessant effort of escaping. There are two sides to me overall, one attracted to the physical sciences, and in that, especially computers; the other attracted to the humanitarian aspect, with an emphasis on philosophy and literature.`,
  `Come, gaze into the computer aspect first. The first contact with programming I had was roughly in second or third grade, when my dad handed me a very classic book for learning Python, the name of which has unfortunately faded from my memory. I didn't stick to it for long, leaning into drawing anime characters instead, and only properly started coding in Godot — a game engine, in fourth or fifth class.`,
  `From there I went into Unity, C# and Blender, making prototypes I never finished nor put in the cloud. Then switched to web dev, starting with regular HTML, CSS, and JS, followed by learning the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS), then towards NextJS. Later on I messed around with other frameworks too, and learnt Typescript as well. From there I went to Data Science, getting inspired by 3b1b's “But what is a neural network” series. I made GANs, LSTMs, ANNs, performed proper EDA, learnt high level statistical concepts as ANOVA, all the different tests, different distributions and what not… all in late sixth and early seventh grade.`,
  `Then I did a lot of, mostly, random stuff. Some freelance work here and there, making around 200 USD from mainly web dev, and applying for jobs for a guy. Somewhere I learnt C++ as well, alongside React Native for app development, plus a lot more I simply don't remember or haven't documented. Most of my life has been spent on the laptop, but excessive development in some one physical science at a young age isn't enough, which I learnt when adolescence and its insecurities hit me. I would've gone down a very bad if it wasn't for developing the humanitarian aspect of me, which started with Bertrand Russell's book, “The Conquest of Happiness”.`,
  `Starting with that, I avoided depression, and learnt how to live as mostly alone, unable to find congenial relationships. This led me to reading more formal philosophy of people like Russell and Will Durant; alongside people like Orwell, Machiavelli, and Huxley. I have plans to read primary people as Hume or J.S Mill, but currently I'm very cozied with the 20th century. Alongside this, I love me a cup of literature, specifically classics as 1984, Brave New World, The Odyssey and more. Further, I find much beauty in poetry. The love of english poetry is obvious, but urdu poetry is something I also love very much. Specifically it is the Sufi thought I love, whose ecstasy I enjoy due to the rich culture of Qawwali, but also whose doctrines I reject due to the influence of western philosophy.`,
  `So that is me, Sajawal Hassan. Doubtless I have failed at telling you who I am, but I hope this was a good approximation. Enjoy this website.\n\n— Sajawal Hassan`,
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
    image: reddit,
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
    image: discord,
    badgeText: "complete",
    badgeColor: "green",
  },
  {
    title: "This portfolio website",
    subText: "Made, as you could've guessed, in NextJS. As for the features... well, you're looking at those.",
    description: [
      "Took roughly three months, if you're counting the gaps of commits. But proper work was roughly a month, the rest was gobbled up in the humbug toils of the life I unfortunately must bear outside books and computers.",
      "It's an odd choice to read what features this website has, since... well you're on it. Just explore, see what beauty I had to code with the pain of a horrid and slow laptop.",
    ],
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
      "Got pretty far the first time I made it. Restarted for a 'fresh start', got far again, then restarted again. The core functionality this time around isn't much, but poke around at its git history, you'll see some fun stuff.",
    ],
    githubLink: "https://github.com/SajawalHassan/aetherize",
    technologies: ["NextJS", "Typescript", "TailwindCSS", "Next Auth", "Native DnD", "React DnD"],
    badgeText: "progress",
    badgeColor: "yellow",
  },
  {
    title: "Html SPA loader",
    subText: "Automatically generate dynamic SPA pages from HTML files with a homepage using Next.js and Tailwind CSS.",
    description: [
      "Made for my dad, who needed a way to create simple websites from just html pages in NextJS.",
      "You add an html file to /html-pages and the new page is automatically available. Supports tailwindcss as well. Wasn't really a difficult project, but definitely a fun idea.",
    ],
    githubLink: "https://github.com/SajawalHassan/html-spa-loader",
    technologies: ["NextJS", "TailwindCSS"],
    badgeText: "complete",
    badgeColor: "green",
  },
];

export const linuxProjects: projectType[] = [
  {
    title: "My arch linux dotfiles",
    subText:
      "Took a lot of time to set up my ideal setup, and am rather proud of it. Using hyprland, waybar, and other, for the most part, standard utils.",
    description: [
      "Have been a linux user for at least three years now. Been on arch for about two years. These are all my dotfiles, present on my github.",
      "Its got hyprland with waybar, kitty, and for the most part, standard utils you'll see in typical dotfiles. Though I am very happy with these right now, I also know my urge to continually change everything about it, shall, ironically, never change.",
    ],
    githubLink: "https://github.com/sajawalhassan/dotfiles",
    technologies: ["Hyprland", "Waybar", "Kitty", "Swaync", "Rofi", "Flameshot", "Grub"],
    image: archDotfilesPreview,
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
    title: "EDA (Exploratory Data Analysis) of a housing prices dataset",
    subText:
      "Made during sixth or seventh grade. Part of the early steps I took towards Data Science, and drifted from ever since, hoping to return again one day.",
    description: [
      "Followed an awesome playlist to learn EDA, which made me learn a lot of statistical concepts. Performed EDA on a dataset of housing prices grabbed from, I think, Kaggle.",
      "Found univariate and bivariate stats about it, calculated heteroscedasiticity, performed bivariate visualizations and MLR (multivariate statistics), pieced out the multicollinearity between variables, and optimized for best fit columns. It was very fun.",
    ],
    githubLink: "https://github.com/SajawalHassan/Housing-price-analysis",
    technologies: [
      "Python",
      "Pandas",
      "Numpy",
      "Statsmodels",
      "SciPy",
      "Scikit-learn",
      "Seaborn",
      "Matplotlib",
      "Google Colab",
    ],
    badgeText: "complete",
    badgeColor: "green",
  },
  {
    title: "A GAN (Generative Adversarial Network) that generates images of anime faces",
    subText:
      "Also made in pytorch a very long time ago, in around sixth or seventh class. Was a very fun but difficult project for a boy so early in his youth.",
    description: [
      "Checking the commits, it was in seventh class that I made this. Indeed a very fun project, and also a difficult one — not necessarily the code, but rather the concepts behind it.",
    ],
    technologies: ["Python", "Pytorch", "Numpy", "Google Colab", "Matplotlib"],
    githubLink: "https://github.com/SajawalHassan/anime_faces_gan",
    badgeText: "complete",
    badgeColor: "green",
  },
  {
    title: "A sentence completing LSTM (Long Short-Term Memory)",
    subText:
      "Made an LSTM in pytorch that completes a given, incomplete sentence. It's not very good, but a transformer architecuture was too difficult for me to understand back then, and even now.",
    description: [
      "Made this while exploring NLP, right after getting comfortable with basic neural networks. You give it the start of a sentence, and it predicts the next words one at a time until it hits the given word generation limit",
      "The results are not very good at all. It'll produce something grammatical maybe half the time, and the other half it wanders off into sheer humbug. Still, getting my head around embeddings, hidden states and how a model can 'remember' earlier words gave many euraka moments to me.",
    ],
    technologies: ["Python", "Pytorch", "Numpy", "Google Colab"],
    githubLink: "https://github.com/SajawalHassan/sentence_generation_tensorflow",
    badgeText: "complete",
    badgeColor: "green",
  },
  {
    title: "Sentiment analysis neural network",
    subText: "An ANN made in pytorch that classifies a sentence into a positive or a negative sentiment.",
    description: [
      "One of my first steps into NLP. The model takes a sentence, converts it into numerical features, and passes it through a simple feed-forward network to decide whether it sounds positive or negative.",
      "Nothing fancy, but it taught me a lot about text preprocessing, tokenization, and how to properly train and evaluate a classifier without getting fooled with the accuracy numbers.",
    ],
    technologies: ["Python", "Pytorch", "Numpy", "Google Colab"],
    githubLink: "https://github.com/SajawalHassan/sentiment_analysis_pytorch",
    badgeText: "complete",
    badgeColor: "green",
  },
];

export const randomProjects: projectType[] = [
  {
    title: "Quote video generator.",
    subText:
      "Made the bulk of it at 2am on a random tuesday, not wanting to study for my upcoming physics exam. Automatically chooses quotes (or you may enter them manually), generates videos of them, and publishes them.",
    description: [
      "Procrastination has, on rare occasions, been productive. This is the result of one such night. It picks a quote (or takes one you type in), renders it over a background into a short video, and then uploads it automatically, with no manual editing whatsoever.",
      "It's a small automation pipeline at heart, but stitching together quote selection, video rendering and publishing into one hands-off flow was a lot of fun to figure out.",
    ],
    technologies: ["Python", "MoviePy", "FFmpeg"],
    githubLink: "https://github.com/SajawalHassan/quote-video-generator",
    badgeText: "complete",
    badgeColor: "green",
  },
  {
    title: "Note taking app",
    subText:
      "Made to learn the basics of docker. Has a multi container architecture, is properly dockerized, has a working CI/CD pipeline, with automated deployments to a GCP virtual machine.",
    description: [
      "The app itself was rather simple, but learning how a proper project is shipped was definitely a journey. Splitting services into separate containers, wiring them together with Docker Compose, making the whole thing reproducible, implementing CI/CD pipelines, and conencting to a GCP virtual machine, opened a whole new world to me.",
      "Every push to the main branch runs through a CI/CD pipeline that builds the images and automatically deploys them to a GCP virtual machine. I still think this project is so cool.",
    ],
    technologies: ["Docker", "Docker Compose", "GitHub Actions", "GCP", "NextJS"],
    githubLink: "https://github.com/SajawalHassan/note-taking-app",
    badgeText: "complete",
    badgeColor: "green",
  },
  {
    title: "A RPG game in Unity",
    subText: "Very much incomplete, maybe I'll finish it one day.",
    description: [
      "Started with big ambitions and a head full of ideas, and, like many game projects, scope crept faster than I could code. The basics are in place, but a lot is still missing.",
      "It's sitting in my repos waiting patiently for me to come back to it. Each time I give it (and myself) false-hope by the false promise of returning.",
    ],
    technologies: ["Unity", "C#"],
    githubLink: "https://github.com/SajawalHassan/Rpg_game_unity",
    badgeText: "progress",
    badgeColor: "yellow",
  },
  {
    title: "Shooting game in Godot",
    subText: "Made very early in my coding career. A simple shooting game in Godot",
    description: [
      "One of the very first things I ever built. It's a simple shooter: move around, aim, shoot, and survive. Nothing groundbreaking, but it's where I first learned how game loops, collisions and scenes fit together.",
    ],
    technologies: ["Godot", "GDScript"],
    githubLink: "https://github.com/SajawalHassan/Shootin_Game",
    badgeText: "complete",
    badgeColor: "green",
  },
];

import YWS from "@/public/assets/yws.jpg";
import Instagram from "@/public/assets/icons/instagram.svg";

export type ContactIconsType = {
  icon: StaticImport;
  href: string;
  title: string;
};

export const ContactIcons: ContactIconsType[] = [
  {
    icon: YWS,
    href: "https://writerfeed.com/profile/abcisbest",
    title: "Young Writers Society",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/sajawal_hassan__",
    title: "Instagram",
  },
];
