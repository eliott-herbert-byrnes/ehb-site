import { AboutMe } from "./components/about-me";
import { CV } from "./components/cv";
import { Email } from "./components/email";
import { Github } from "./components/github";
import { Linkedin } from "./components/linkedin";
import { NameTag } from "./components/name-tag";

export function Sidebar() {
    return (
        <div className="flex flex-col gap-4 animate-fade-from-top">
            <NameTag />
            <AboutMe />
            <Github />
            <Linkedin />
            <Email />
            <CV />
        </div>
    )
}