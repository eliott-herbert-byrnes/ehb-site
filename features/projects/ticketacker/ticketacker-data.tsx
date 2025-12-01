import { CardProjectProps } from "@/features/cards/card-project";

export const ticketackerData: CardProjectProps = {
  title: "TickeTacker",
  subtitle: "Modern Full-Stack SaaS Ticketing Platform",
  description:
    "A production-ready ticketing and project management platform built with cutting-edge web technologies, demonstrating enterprise-grade architecture patterns including multi-tenancy, subscription billing, real-time collaboration, and secure file storage.",
  techStack: [
    { name: "Next.js", version: "15" },
    { name: "React", version: "19" },
    { name: "TypeScript", version: "5" },
    { name: "Prisma" },
    { name: "PostgreSQL" },
    { name: "Stripe" },
    { name: "AWS S3" },
    { name: "Inngest" },
    { name: "NextAuth.js" },
    { name: "Resend" },
    { name: "Tailwind CSS" },
  ],
  liveDemo: "https://www.ticketacker.com/",
  github: "https://github.com/eliott-herbert-byrnes/ticketacker",
  overviewImage: "/homepage-images/homepage-image-tt.png",
  businessProblem: {
    challenge:
      "Small to medium-sized teams face several challenges when selecting ticketing and project management tools: cost barriers (enterprise solutions like Jira and ServiceNow are prohibitively expensive), complexity overhead (many platforms are over-engineered for simple use cases), vendor lock-in (proprietary formats make data migration difficult), privacy concerns (sensitive project data stored on third-party servers), and customisation limitations (rigid workflows that don't adapt to team needs).",
    solution:
      "TickeTacker addresses these pain points with an affordable pricing model (free tier for small teams without per-user pricing traps), streamlined workflow (clean interface focused on essential features with fast ticket creation), data ownership (open database schema, export functionality, and self-hosting capability), security & privacy (self-contained authentication, secure file storage, and audit logs), and flexibility (API-first architecture enabling custom integrations, webhook support, and customisable workflows).",
  },
  keyFeatures: [
    {
      title: "Comprehensive Ticket Management",
      description:
        "Create, edit, archive, and delete tickets with full lifecycle tracking. Rich text descriptions with markdown support, custom fields for priority, status, category, and assignees. Advanced search with full-text capabilities, filtering by status, priority, assignee, and date ranges. Sorting by creation date, priority, last updated with configurable pagination.",
    },
    {
      title: "Threaded Discussions",
      description:
        "Comment system with markdown formatting and reply threading for organised conversations. @mentions for user notifications, edit and delete permissions based on authorship. Real-time comment updates with comprehensive history and audit trail.",
    },
    {
      title: "Secure File Attachments",
      description:
        "Drag-and-drop file upload interface with AWS S3 storage using organisation-namespaced buckets. Presigned URL generation for temporary secure access, automatic file type validation and size limits. Thumbnail generation for images with virus scanning integration ready and attachment versioning support.",
    },
    {
      title: "Multi-Tenant Organisation Management",
      description:
        "Create and manage multiple organisations per user with seamless organisation switching. Custom branding per organisation (logos, colours), organisation-level settings and preferences. Complete data isolation ensuring privacy between tenants with organisation transfer and ownership management capabilities.",
    },
    {
      title: "Membership & Access Control",
      description:
        "Role-based permissions (Owner, Admin, Member, Guest) with invitation system and email-based onboarding. Pending invitation management and resending, membership deactivation and reactivation. Activity tracking per member with permission inheritance and custom role creation.",
    },
    {
      title: "Subscription & Billing",
      description:
        "Multiple pricing tiers (Free, Professional, Enterprise) with Stripe-powered checkout and secure payment processing. Subscription management dashboard with automatic billing and invoice generation. Usage-based limits per tier with upgrade/downgrade flows and prorated billing. Cancellation with end-of-period access retention.",
    },
    {
      title: "Email Workflows",
      description:
        "Welcome emails with onboarding steps, email verification with secure tokens, and password reset with time-limited links. Invitation emails with organisation context, ticket notification digests, billing and payment confirmations. Custom email templates with React Email for professional communication.",
    },
    {
      title: "Background Processing",
      description:
        "Asynchronous job queue with Inngest for scheduled digest emails (daily, weekly). Automated cleanup of expired resources, bulk operations (import/export), analytics aggregation jobs, and webhook delivery retry logic for reliable processing.",
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
              Next.js 15 (App Router, React Server Components, Server Actions) •
              TypeScript 5 • React 19 • Tailwind CSS 4 • shadcn/ui (Radix UI
              primitives) • Lucide React • TanStack React Query v5 • nuqs (URL
              state management) • React Hook Form with Zod validation
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Backend</h4>
            <p className="text-muted-foreground">
              Node.js 18+ • Next.js API Routes & Server Actions • Prisma 5 (with
              typed SQL preview) • PostgreSQL 15+ • NextAuth.js v5 (JWT
              strategy) • @node-rs/argon2 (password hashing) • Zod schemas
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">External Services</h4>
            <p className="text-muted-foreground">
              AWS S3 SDK v3 (file storage) • Stripe SDK (payment processing) •
              Inngest (background jobs) • Resend API (email delivery) • React
              Email (email templates)
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Infrastructure</h4>
            <p className="text-muted-foreground">
              Vercel (hosting) • Vercel Postgres / Supabase / Self-hosted
              PostgreSQL • AWS S3 or S3-compatible (MinIO, DigitalOcean Spaces)
              • Inngest Cloud or self-hosted
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
            <div>Browser Client</div>
            <div className="pl-2">↓ Next.js 15, React 19, TanStack Query</div>
            <div className="pl-4">↓ Vercel Edge Network</div>
            <div className="pl-6">
              ↓ Next.js Server (Node.js) - RSC, Server Actions, API Routes
            </div>
            <div className="pl-8">↓ External Services</div>
            <div className="pl-10">
              (PostgreSQL, AWS S3, Stripe, Resend, Inngest)
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Authenticated Request Flow</h4>
            <div className="bg-muted p-4 rounded-lg font-mono text-xs space-y-1">
              <div>User Action → Server Component/Action</div>
              <div className="pl-2">
                → Authentication Middleware (NextAuth)
              </div>
              <div className="pl-4">→ Authorisation Guard</div>
              <div className="pl-6">→ Business Logic Layer</div>
              <div className="pl-8">→ Response / Revalidation</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "🎓 Learning Objectives",
      content: (
        <div className="space-y-3 text-sm">
          <p className="text-muted-foreground">
            This project was conceived as an advanced learning exercise to develop
            expertise in modern full-stack web application development. Rather
            than building a simple tutorial application, the goal was to create a
            production-ready SaaS platform incorporating real-world architectural
            patterns and integrations that professional developers encounter
            daily.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-muted-foreground">
            <div>• Master Modern React & Next.js</div>
            <div>• Full-Stack TypeScript</div>
            <div>• Enterprise Authentication</div>
            <div>• Payment Integration</div>
            <div>• Cloud Infrastructure</div>
            <div>• Background Processing</div>
            <div>• Database Design</div>
            <div>• Email Systems</div>
            <div>• UI/UX Excellence</div>
            <div>• Production Patterns</div>
          </div>
        </div>
      ),
    },
    {
      title: "🔒 Security & Authentication",
      content: (
        <div className="space-y-3 text-sm">
          <div>
            <h4 className="font-semibold mb-1">Authentication</h4>
            <p className="text-muted-foreground">
              NextAuth.js with Credentials provider using secure password hashing
              via @node-rs/argon2. JWT strategy with Prisma adapter and user
              metadata enrichment. Email verification and password reset flows
              with time-limited secure tokens.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Authorization</h4>
            <p className="text-muted-foreground">
              Authorization guard (get-auth-or-redirect) enforces login, email
              verification, organisation presence, and active membership before
              accessing protected routes. Role-based permissions with Owner,
              Admin, Member, and Guest roles.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">File Security</h4>
            <p className="text-muted-foreground">
              AWS S3 presigned URLs for temporary secure access, keys namespaced
              by organisation and entity. Automatic file type validation, size
              limits, and sanitised filenames prevent injection attacks.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "💡 About This Project",
      content:
        "TickeTacker was built as a comprehensive learning project to master contemporary full-stack web development. It showcases production-grade patterns including multi-tenant architecture, subscription billing with Stripe, secure file storage with AWS S3, background job processing with Inngest, transactional email workflows, and modern UI/UX with dark mode support. The project demonstrates end-to-end TypeScript type safety, React Server Components, Next.js 15 App Router, and professional development practices suitable for enterprise applications.",
    },
  ],
};

