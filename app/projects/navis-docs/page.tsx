import { CardProject } from "@/features/cards/card-project";
import { navisDocsData } from "@/features/projects/navis-docs/navis-docs-data";

export default function NavisDocs() {
  return (
    <div className="w-full overflow-y-auto">
      <CardProject {...navisDocsData} />
    </div>
  );
}
