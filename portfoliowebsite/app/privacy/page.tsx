import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto w-full">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
            Privacy <span className="text-pink-600">Policy</span>
          </h1>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed">
            Last updated: March 30, 2026
          </p>
        </div>

        <div className="space-y-12 text-lg text-muted-foreground leading-relaxed font-medium">
          <section>
            <h2 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tight">1. Information Collection</h2>
            <p>
              I respect your privacy and am committed to protecting it. This portfolio does not actively collect personally identifiable information from its visitors unless you voluntarily provide it through contact forms or other communication channels.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tight">2. Information Usage</h2>
            <p>
              If you provide information through a contact form, it will only be used to respond to your inquiry and provide you with requested information. I do not sell, rent, or trade your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tight">3. Cookie Policy</h2>
            <p>
              This website may use cookies to enhance the user experience and for analytics purposes. You can choose to disable cookies in your browser settings if you prefer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tight">4. Third-Party Links</h2>
            <p>
              This website contains links to other sites (such as GitHub, LinkedIn, and live project URLs). I am not responsible for the content or privacy practices of these other sites.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
