import { CardAboutMe } from "../cards/card-about-me";
import Image from "next/image";

export function AboutMeCardList() {
  return (
    <>
      <CardAboutMe
        title="Hi there!"
        description={`I’m a designer-turned-developer from Nottingham, UK. After six years in Bristol learning and working in design, I transitioned into engineering and have spent the past year pursuing a focused path toward full-stack development. I’m passionate about modern web technologies and the opportunity they provide to build meaningful and impactful digital experiences.`}
      >
        <Image
          className="w-full h-full object-cover rounded-xl"
          src="/about-me-images/about-me-portrait.png"
          alt="About Me"
          width={500}
          height={600}
        />
      </CardAboutMe>
      <CardAboutMe
        title="Fitness"
        description={`Outside of work, my biggest passion is sports and fitness. I have recently become interested in calisthenics and finally achieved my first muscle up!`}
      >
        <Image
          className="w-full h-full object-cover rounded-xl"
          src="/about-me-images/about-me-fitness.png"
          alt="Fitness"
          width={500}
          height={600}
        />
      </CardAboutMe>
      <CardAboutMe
        title="Manchester United"
        description={`I am a big Manchester United fan and have been for many years. I always try to catch a game, and I have been lucky enough to attend a few.`}
      >
        <Image
          className="w-full h-full object-cover rounded-xl"
          src="/about-me-images/about-me-manu.png"
          alt="Fitness"
          width={500}
          height={600}
        />
      </CardAboutMe>
      <CardAboutMe
        title="Travel"
        description={`I love to travel and feel fortunate to have visited many countries. I have explored Europe, Asia, and North America. My favourite country I have visited is India, and I am hoping to see more of Asia in the future.`}
      >
        <Image
          className="w-full h-full object-cover rounded-xl"
          src="/about-me-images/about-me-travel.png"
          alt="Fitness"
          width={500}
          height={600}
        />
      </CardAboutMe>
    </>
  );
}
