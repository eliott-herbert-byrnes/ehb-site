import { HomeAboutMe } from "@/features/home/home-about-me";
import { HomeProjectList } from "@/features/home/home-project-list";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-4 h-[calc(100vh-2rem)]">
        <HomeAboutMe />
        <HomeProjectList />
      </div>
    </>
  );
}
