import { WebLink } from "@/features/web-link/web-link";

export function CV() {
  return (
    <WebLink
      href="/cv.pdf"
      title="CV"
      className="w-full border-none hover:scale-101 transition-all duration-300 cursor-pointer"
    />
  );
}
