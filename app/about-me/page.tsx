import { AboutMeCardList } from "@/features/about-me/about-me-card-list";

export default function AboutMe() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:h-[calc(100vh-2rem)]">
      <AboutMeCardList />
    </div>
  );
}
