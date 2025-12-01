import { CardProject } from "@/features/cards/card-project";
import { ticketackerData } from "@/features/projects/ticketacker/ticketacker-data";

export default function Ticketacker() {
  return (
    <div className="w-full overflow-y-auto">
      <CardProject {...ticketackerData} className="border-none"/>
    </div>
  );
}
