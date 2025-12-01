import { CardProject } from "@/features/cards/card-project";
import { symmetryData } from "@/features/projects/symmetry/symmetry-data";

export default function Symmetry() {
  return (
    <div className="w-full overflow-y-auto">
      <CardProject {...symmetryData} className="border-none"/>
    </div>
  );
}
