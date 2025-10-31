import { Mail, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-xl font-semibold tracking-tight hover:text-accent transition-colors">
              Lab<span className="font-light">78</span>
            </a>
            <div className="flex gap-6 text-sm">
              <a href="#about" className="hover:text-accent transition-colors">About</a>
              <a href="#movement" className="hover:text-accent transition-colors">Movement</a>
              <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6 animate-in fade-in duration-700">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              🌱 LabSeventyEight
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl font-light">
              Resilient engineering and creative expression for open, sustainable ecosystems.
            </p>
            <div className="h-px w-24 bg-border"></div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold tracking-tight">Welcome</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                LabSeventyEight exists to support open-source communities, scientific platforms, and long-lived creative ecosystems.
                Guided by transparency, perseverance, and collaboration, we contribute to projects—and artworks—that embody innovation, 
                reproducibility, and shared growth.
              </p>
              <p>
                Our work spans code and canvas. We build tools—and make images—that capture moments from a singular point of view to 
                question purpose; in parallel, our charcoal drawings explore structure through light, shadow, and restraint.
              </p>
              <p>
                We are not currently available for commercial engagements. Instead, our focus is on strengthening open ecosystems, 
                sharing knowledge, and connecting people around sustainable engineering and artistic practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold tracking-tight">About</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Inspired by the Japanese proverb <em>"Fall seven times, stand up eight,"</em> LabSeventyEight reflects a belief 
                that meaningful work—technical or artistic—is built through iteration, experimentation, and enduring commitment.
              </p>
              <p>
                Our foundation lies in more than 17 years of experience leading and contributing to large-scale open-source 
                platforms and creative initiatives.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Contributions & Explorations</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">3D Slicer</strong> – Core developer shaping architecture, packaging, and release strategy</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Python packaging</strong> – Founder of <strong className="text-foreground">scikit-build</strong>, advancing modern CMake-based Python build tooling</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">VTK & ITK</strong> – Contributor to foundational medical imaging and visualization frameworks</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">CI/CD & cross-platform systems</strong> – Architecting reproducible pipelines for scientific and medical applications</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Art & Photography</strong> – Capturing moments that question purpose, and exploring structure through charcoal, light, and form</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  LabSeventyEight represents a space for stewardship, creativity, and open collaboration—across disciplines that endure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Movement Section */}
      <section id="movement" className="py-20 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold tracking-tight">Movement</h2>
            <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl">
              Beyond software and art, <strong className="text-foreground">climbing</strong> shapes how we approach creation itself—a 
              continual search for the line and for balance between discipline and flow. Each ascent becomes an act of design in motion, 
              built on practice, resilience, and curiosity.
            </p>
          </div>
        </div>
      </section>

      {/* Looking Ahead Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold tracking-tight">Looking Ahead</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                LabSeventyEight is a space for stewardship—not just code, not just art. We believe that both open ecosystems and 
                creative practices grow stronger when knowledge is shared, contributors are supported, and long-term thinking is 
                prioritized over short-term perfection.
              </p>
              <p>
                We welcome conversations about open-source sustainability, visual process, architectural evolution, and collaborative 
                opportunities that connect engineering and art.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Availability & Contact Section */}
      <section id="contact" className="py-20 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold tracking-tight">Availability</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚫</span>
                  <div>
                    <p className="font-medium text-foreground">Not currently available for:</p>
                    <p className="text-muted-foreground">Commercial consulting or contracting engagements</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-medium text-foreground">Open to:</p>
                    <p className="text-muted-foreground">
                      Conversations, community guidance, OSS collaboration, ecosystem mentorship, and creative exchange
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2"
                  onClick={() => window.location.href = 'mailto:jcfr@lab78.xyz'}
                >
                  <Mail className="h-4 w-4" />
                  jcfr@lab78.xyz
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2"
                  onClick={() => window.open('https://github.com/jcfr', '_blank')}
                >
                  <Github className="h-4 w-4" />
                  @jcfr
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 LabSeventyEight. Fall seven times, stand up eight.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
