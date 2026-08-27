export interface TOCItemtype {
  link: string;
  text: string;
  isLast?: boolean;
}

export const TOC: TOCItemtype[] = [
  {
    link: "/about",
    text: "More About me",
  },
  {
    link: "#",
    text: "Everything Computers",
  },
  {
    link: "#",
    text: "Pretentious Gibberish",
  },
  {
    link: "#",
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
  `Lastly (I promise this is the finale!) I love poetry! English poetry obviously, but Eastern poetry a lot. I know a plentiful of kalams in Urdu, some in Farci (Persian), and a couple from the bhaktvi tradition in Sant Bhasha, Brij Bhasha etc. I love qawwalis, and see them not just as an entertainment, but as a cultivation of the self and truly try to catch the lessons that qawwals like Aziz Mian, Farid Ayaz, Nusrat Fateh Ali Khan may bestow. I'm very new to it all, voyaging in a vast sea with no map nor a north star; just a boy trying to connect to this "Ultimate Reality". I engage with Sufi Mysticism and enjoy it a lot, but due to the influence of western thought, I don't necessarily accept all its doctrines.`,
  `So that is me, Sajawal Hassan! Sorry for the long essay, you don't have to read it, but as I said, I love writing >.<! You can check some of my poetry, quotes and essays here! I'm unsure where I'll be going in the future, but I'm interested in a lot of things, and have an unquenching thirst for knowledge that, I hope, never fades.`,
];
