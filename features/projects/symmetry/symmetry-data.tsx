import { CardProjectProps } from "@/features/cards/card-project";

export const symmetryData: CardProjectProps = {
  title: "Symmetry",
  subtitle: "Interactive 3D Molecular and Crystal Structure Visualisation Platform",
  description:
    "A modern web application for visualising and exploring molecular and crystal structures in real-time, built with cutting-edge web technologies and 3D rendering capabilities. Originally developed during my Masters placement at Nantes Université, this represents a complete refactoring using modern React, Next.js 16, and Three.js.",
  techStack: [
    { name: "Next.js", version: "16.0" },
    { name: "React", version: "19.2" },
    { name: "TypeScript", version: "5.0" },
    { name: "Three.js", version: "0.181" },
    { name: "React Three Fiber", version: "9.4" },
    { name: "Drei", version: "10.7" },
    { name: "Supabase", version: "2.81" },
    { name: "PostgreSQL" },
    { name: "Tailwind CSS" },
    { name: "Radix UI" },
  ],
  liveDemo: "https://www.symmetryudn.com/",
  github: "https://github.com/eliott-herbert-byrnes/symmetry",
  overviewImage: "/homepage-images/homepage-image-sa.png",
  businessProblem: {
    challenge:
      "During my Masters in Game Development (2021-2022) at UWE Bristol, I undertook a placement project for the physics department at Nantes Université. The challenge was to create an accessible web application allowing students and researchers to visualise and interact with molecular and crystal structures without requiring expensive desktop software or specialised hardware. The original application suffered from performance limitations, dated interface, scalability issues, poor mobile support, and outdated dependencies.",
    solution:
      "Symmetry represents a complete refactoring and modernisation, addressing these challenges through: modern React framework (Next.js 16 with React 19), hardware-accelerated 3D rendering (React Three Fiber leveraging WebGL), responsive mobile-first design (Tailwind CSS and Radix UI), scalable backend (Supabase with PostgreSQL, authentication, and file storage), full TypeScript implementation for reliability, and modular component architecture with Shadcn UI for consistency.",
  },
  keyFeatures: [
    {
      title: "Interactive 3D Molecular Viewer",
      description:
        "Hardware-accelerated WebGL rendering using Three.js with auto-rotating camera and smooth orbit controls. CPK colour scheme for atomic visualisation (industry standard), dynamic lighting system with ambient and directional lights. Zoom, pan, and rotate capabilities with mouse/touch controls for intuitive exploration.",
    },
    {
      title: "Comprehensive Model Management",
      description:
        "Upload and parse PDB (Protein Data Bank) files with cloud storage via Supabase. Edit molecular properties and metadata, delete structures with automatic cleanup. Searchable and filterable model library for efficient organisation and discovery.",
    },
    {
      title: "Molecular Property Display",
      description:
        "View chemical formula and molecular weight, symmetry group classification, space group notation, unit cell parameters and angles. Descriptive annotations with responsive side panel for desktop and bottom sheet for mobile devices.",
    },
    {
      title: "Visual Controls & Tools",
      description:
        "Reset camera view to initial position, toggle XYZ axes helper with colour-coded directions. Screenshot capture functionality for documentation, collapsible control panel to maximise viewing area. Real-time model switching with URL-based navigation.",
    },
    {
      title: "User Management System",
      description:
        "Role-based access control (Admin/Student) with email-based authentication via Supabase Auth. Invitation system with expiring tokens, user profile management, and administrative dashboard for user oversight.",
    },
    {
      title: "CPK Colour Scheme",
      description:
        "Industry-standard Corey-Pauling-Koltun colour scheme for molecular visualisation: Hydrogen (White), Carbon (Grey), Nitrogen (Blue), Oxygen (Red), Sulphur (Yellow), Phosphorus (Orange), and other elements following IUPAC standards for accurate chemical representation.",
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
              Next.js 16.0 (App Router, Server Components, Server Actions) •
              TypeScript 5 • React 19.2 • Three.js 0.181 • React Three Fiber 9.4
              • Drei 10.7 • Tailwind CSS 4 • Radix UI primitives • TanStack Table
              8.21 • Sonner (toast notifications)
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Backend</h4>
            <p className="text-muted-foreground">
              Node.js • Next.js Server Actions & Route Handlers • PostgreSQL (via
              Supabase) • Supabase Auth (Email OTP, OAuth ready) • Supabase
              Storage (PDB files) • Zod 4.1 (schema validation)
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">3D Rendering Pipeline</h4>
            <p className="text-muted-foreground">
              PDB File Upload → Supabase Storage → Public URL Generation →
              Client-side PDB Loader → Three.js Geometry Creation (parse atoms,
              generate bonds, apply CPK colours, create meshes) → WebGL
              Rendering (GPU) → Interactive Canvas
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Infrastructure</h4>
            <p className="text-muted-foreground">
              Vercel (hosting with Edge Network, ISR, SSR) • Supabase (managed
              PostgreSQL, Authentication, CDN-backed file storage) • pnpm 10.17
              (package management)
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "🏗️ 3D Visualisation Implementation",
      content: (
        <div className="space-y-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Lighting System</h4>
            <p className="text-muted-foreground mb-2">
              Multi-directional lighting for optimal molecular visibility:
            </p>
            <div className="bg-muted p-3 rounded-lg space-y-1 text-xs">
              <div>• Ambient light (0.3 intensity) - overall base illumination</div>
              <div>
                • Primary directional light (0.8 intensity) - main illumination
              </div>
              <div>
                • Secondary directional light (0.4 intensity) - depth and
                dimension
              </div>
              <div>
                • Point light at origin (0.3 intensity) - internal structure
                visibility
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Performance Optimisations</h4>
            <div className="space-y-1 text-muted-foreground">
              <div>
                • Instanced rendering with shared geometry for efficient memory
                usage
              </div>
              <div>
                • LOD (Level of Detail) with icosahedron at 2 subdivisions
              </div>
              <div>
                • Phong material for quality without PBR overhead
              </div>
              <div>• Automatic centring to reduce camera travel</div>
              <div>• Damping for smooth animations and reduced GPU load</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Camera Configuration</h4>
            <p className="text-muted-foreground">
              Narrow FOV (10°) creates near-orthographic projection, reducing
              perspective distortion for accurate spatial understanding of
              molecular geometry. Camera starts 90 units away with smooth orbit
              controls, auto-rotation, and momentum-based damping.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "🎓 Academic Background",
      content: (
        <div className="space-y-3 text-sm">
          <div>
            <h4 className="font-semibold mb-1">
              MSc Game Development (2021-2022)
            </h4>
            <p className="text-muted-foreground">
              University of the West of England Bristol
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">
              Placement Project: Web Application for Molecular Structure
              Visualisation
            </h4>
            <p className="text-muted-foreground">
              Nantes Université, Physics Department | 2021-2022
            </p>
          </div>
          <div className="space-y-2 text-muted-foreground">
            <p>
              Worked with the research team to develop an accessible web-based
              tool for visualising complex molecular and crystal structures. The
              project addressed the need for a platform-independent solution that
              didn&apos;t require expensive commercial software licenses.
            </p>
            <div>
              <h4 className="font-semibold mb-1 text-foreground">
                Key Achievements:
              </h4>
              <div className="space-y-1">
                <div>
                  • Application adopted by physics department for undergraduate
                  teaching
                </div>
                <div>
                  • Positive feedback from faculty and students on usability
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "🔒 Security & User Management",
      content: (
        <div className="space-y-3 text-sm">
          <div>
            <h4 className="font-semibold mb-1">Authentication</h4>
            <p className="text-muted-foreground">
              Email OTP (One-Time Password) authentication via Supabase. User
              requests sign-in with email, receives 6-digit code, verified
              server-side, and session token issued. Automatic profile creation
              with database trigger on first sign-in.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Role-Based Access Control</h4>
            <p className="text-muted-foreground">
              <strong>Student Role:</strong> View all molecular models, interact
              with 3D viewer, view model properties, and take screenshots.
              <br />
              <strong>Admin Role:</strong> All student permissions plus upload new
              models, edit model metadata, delete models, manage users, create
              invitations, and change user roles.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Security Best Practices</h4>
            <div className="space-y-1 text-muted-foreground">
              <div>• Row Level Security (RLS) protecting all tables</div>
              <div>• Zod schemas validating all user input</div>
              <div>• File upload sanitisation and extension validation</div>
              <div>• Server-side mutations via Server Actions</div>
              <div>• Environment variables never exposed to client</div>
              <div>• Invitation tokens expire after 7 days</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "💡 About This Project",
      content:
        "Symmetry represents a complete refactoring of my Masters placement project from 2021-2022, showcasing modern React expertise (Next.js 16 App Router, React 19 Server Components), 3D graphics programming (Three.js, React Three Fiber, WebGL optimisation), full-stack development (Next.js API routes, Supabase integration, PostgreSQL), TypeScript proficiency with strict type safety, responsive UI/UX design with mobile-first approach, database design with Row Level Security, authentication & security (Supabase Auth, role-based access control), performance optimisation for 3D rendering, and modern tooling (pnpm, ESLint, Tailwind CSS 4, Radix UI). The project demonstrates the evolution from academic proof-of-concept to production-ready web application.",
    },
  ],
};

