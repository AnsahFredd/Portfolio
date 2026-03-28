import { projects, StandardProjectCard } from "../components/portfolio";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "../components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="mb-12">
          <Link href="/#work" passHref>
            <Button variant="ghost" className="mb-8 hover:bg-transparent hover:text-pink-600 px-0 flex items-center gap-2 group text-muted-foreground font-black uppercase tracking-widest text-xs">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
            </Button>
          </Link>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            Project <span className="text-pink-600">Archive</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl font-medium leading-relaxed">
            A complete collection of the applications, tools, and experiences I&apos;ve engineered over the years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
             <StandardProjectCard key={project.title} project={project} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
