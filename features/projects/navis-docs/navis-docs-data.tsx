import { CardProjectProps } from "@/features/cards/card-project";

export const navisDocsData: CardProjectProps = {
  title: "Navis Docs",
  subtitle: "Enterprise Process Documentation & Knowledge Management Platform",
  description:
    "Navis Docs is a modern enterprise SaaS platform designed to solve the critical challenge of process documentation management in organisations. Built with a focus on scalability, user experience, and AI-powered intelligence, it serves as a centralised knowledge repository where teams can create, manage, version, and search their standard operating procedures (SOPs).",
  techStack: [
    { name: "Next.js", version: "15.5" },
    { name: "TypeScript", version: "5.0" },
    { name: "PostgreSQL" },
    { name: "Prisma", version: "6.16" },
    { name: "React", version: "19.1" },
    { name: "Tailwind CSS" },
    { name: "OpenAI" },
    { name: "Claude" },
    { name: "pgvector" },
    { name: "Stripe" },
    { name: "Vercel" },
  ],
  liveDemo: "https://navisdocs.com",
  overviewImage: "/homepage-images/homepage-image-nd.png",
  businessProblem: {
    challenge:
      "Modern enterprises face critical challenges with process documentation: scattered information across multiple platforms (Google Docs, SharePoint, wikis, email), version control issues causing operational errors, employees wasting hours searching for procedures, lack of audit trails for compliance, knowledge loss when employees depart, and new hire onboarding delays.",
    solution:
      "Navis Docs provides a centralised repository as a single source of truth, AI-powered semantic search using vector embeddings for natural language queries, built-in version control tracking every change, complete immutable audit trail for compliance, smart organisation mirroring company structure (Org → Department → Team → Process), collaborative features including error reporting and idea submission, and support for multiple process formats (RAW text, sequential steps, flowcharts, and decision trees).",
  },
  keyFeatures: [
    {
      title: "Multi-Format Process Editor",
      description:
        "Four different editing modes to suit any documentation need: RAW (rich text editor powered by TipTap), STEPS (linear step-by-step procedures), FLOW (visual flowchart builder using ReactFlow), and YES/NO (interactive decision trees for guided troubleshooting).",
    },
    {
      title: "AI Chat Assistant",
      description:
        "Semantic search using OpenAI embeddings (text-embedding-3-small) with PostgreSQL pgvector for similarity matching. Claude 3.5 Haiku provides conversational responses with source citations and direct links to relevant processes. Context-aware answers based on published documentation.",
    },
    {
      title: "Error Tracking & Management",
      description:
        "In-context error reporting directly from process pages with status tracking (Open → Resolved → Archived). Includes analytics dashboard for identifying problematic processes, priority assignment, and resolution workflow.",
    },
    {
      title: "Idea & Improvement System",
      description:
        "Crowdsource improvements from team members with status pipeline (New → In Progress → Completed → Archived). Integrates with process updates and prioritisation based on frequency and impact.",
    },
    {
      title: "Comprehensive Audit Logging",
      description:
        "Immutable record of all system actions tracking who, what, when, and where for compliance. Filterable by user, action type, entity, and date range with export capabilities for compliance reporting.",
    },
    {
      title: "Multi-Tenant Organisation Structure",
      description:
        "Role-based access control (Owner, Admin, Member) with hierarchical organisation (Departments → Teams). Invitation system with email verification and team-specific news and announcements.",
    },
    {
      title: "Favorites & Personalisation",
      description:
        "Bookmark frequently-used processes with customizable dashboard and quick access sidebar for improved productivity.",
    },
    {
      title: "Subscription Management",
      description:
        "Stripe integration for payments with Business ($49/mo) and Enterprise ($299/mo) tiers. Customer portal for subscription management and usage-based entitlements (processes, departments, teams).",
    },
  ],
  sections: [
    {
      title: "🛠️ Technology Stack",
      content: (
        <div className="space-y-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Frontend</h4>
            <p className="text-muted-foreground">
              Next.js 15.5 (App Router, Server Components, Server Actions) •
              TypeScript 5 • React 19.1 • Tailwind CSS 4 • Radix UI primitives
              • TanStack Query • TipTap 3 • ReactFlow (xyflow) • dnd-kit
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Backend</h4>
            <p className="text-muted-foreground">
              Node.js • Next.js API Routes & Server Actions • PostgreSQL with
              pgvector • Prisma 6.16 • NextAuth.js 5 • Inngest • Resend
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">AI & Machine Learning</h4>
            <p className="text-muted-foreground">
              Claude 3.5 Haiku (Anthropic) • OpenAI text-embedding-3-small
              (1536 dimensions) • PostgreSQL pgvector • Cosine similarity
              search
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Infrastructure & DevOps</h4>
            <p className="text-muted-foreground">
              Vercel (Edge Functions, ISR, SSR) • Supabase (managed PostgreSQL)
              • Upstash Redis • Stripe • Vercel Edge Network
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "🏗️ System Architecture",
      content: (
        <div className="space-y-4 text-sm">
          <div className="bg-muted p-4 rounded-lg font-mono text-xs space-y-1">
            <div>Client (Browser)</div>
            <div className="pl-2">↓ Next.js 15 App Router, React 19</div>
            <div className="pl-4">↓ Vercel Edge Network</div>
            <div className="pl-6">↓ Next.js Server (Node.js)</div>
            <div className="pl-8">↓ Server Components | API Routes</div>
            <div className="pl-10">↓ Supabase PostgreSQL + External APIs</div>
            <div className="pl-12">
              (OpenAI, Anthropic, Stripe, Resend, Upstash)
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">AI Chat Data Flow</h4>
            <div className="bg-muted p-4 rounded-lg font-mono text-xs space-y-1">
              <div>User Query → Embedding Generation (OpenAI)</div>
              <div className="pl-2">
                → Vector Search (pgvector) → Retrieve Relevant Chunks
              </div>
              <div className="pl-4">
                → Context Assembly → LLM Request (Claude)
              </div>
              <div className="pl-6">→ Response with Sources → User Interface</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "🔒 Security & Compliance",
      content: (
        <div className="space-y-3 text-sm">
          <div>
            <h4 className="font-semibold mb-1">Authentication & Authorization</h4>
            <p className="text-muted-foreground">
              Multi-factor authentication (Email OTP + OAuth), JWT session
              management with HTTP-only cookies, RBAC with Owner/Admin/Member
              roles, and row-level security filtering all queries by
              organization membership.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Data Protection</h4>
            <p className="text-muted-foreground">
              AES-256 encryption at rest, TLS 1.3 in transit, rate limiting via
              Upstash Redis, Zod schema validation on all forms, and React
              auto-escaping with DOMPurify for rich text.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Audit & Compliance</h4>
            <p className="text-muted-foreground">
              Immutable audit logs for every action with before/after state,
              configurable data retention, CSV/JSON export for compliance
              reporting, and complete process version history.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "💡 About This Project",
      content:
        "NavisDocs was built to demonstrate full-stack proficiency with Next.js 15, AI/ML integration with vector embeddings and semantic search, complex database design with PostgreSQL and pgvector, multi-tenant SaaS architecture with RBAC, modern development practices with TypeScript and TanStack Query, production deployment on Vercel, and enterprise-grade security with authentication, authorization, and audit logging.",
    },
  ],
};

