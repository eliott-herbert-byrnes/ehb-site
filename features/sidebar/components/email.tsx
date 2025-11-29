import { WebLink } from "@/features/web-link/web-link";

export function Email() {
  return (
    <WebLink
      href="mailto:ehb@example.com"
      title="Email"
      className="w-full border-none hover:scale-98 transition-all duration-300 cursor-pointer"
    />
  );
}
