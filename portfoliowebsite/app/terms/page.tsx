import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto w-full">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
            Terms of <span className="text-pink-600">Service</span>
          </h1>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed">
            Last updated: March 30, 2026
          </p>
        </div>

        <div className="space-y-12 text-lg text-muted-foreground leading-relaxed font-medium">
          <section>
            <h2 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tight">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this portfolio website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree, please refrain from using the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tight">2. Intellectual Property</h2>
            <p>
              All content on this site, including but not limited to code, designs, text, graphics, and images, are the intellectual property of Ansah Fredrick (AnsahFredd) unless otherwise stated. Unauthorized use or reproduction of this material is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tight">3. Use License</h2>
            <p>
              Permission is granted to temporarily view the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tight">4. Disclaimer & Limitation of Liability</h2>
            <p>
              The materials on this website are provided on an &apos;as is&apos; basis. I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, I do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tight">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on this website could include technical, typographical, or photographic errors. I do not warrant that any of the materials on this website are accurate, complete or current. I may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tight">6. Indemnification</h2>
            <p>
              You agree to indemnify, defend and hold harmless AnsFredd from and against any and all losses, liabilities, expenses, damages and costs, including reasonable attorneys&apos; fees and court costs, arising or resulting from your use of the site and any violation of these Terms of Use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tight">7. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Ghana and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
