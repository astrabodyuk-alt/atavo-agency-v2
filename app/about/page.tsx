import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-24 bg-canvas">
          <div className="max-w-3xl mx-auto px-6">
            <span className="uppercase tracking-widest text-xs text-champagne font-medium">The Studio</span>
            <h1 className="font-display font-light text-5xl md:text-6xl text-ink mt-3 mb-12">A small studio that ships.</h1>

            <div className="flex flex-col gap-8 text-taupe leading-relaxed text-lg">
              <p>
                Atavo is a small UK digital studio. We work with restaurants, beauty brands, trades businesses, and indie founders who need a proper digital presence but do not want to hire a 10-person agency and wait six months.
              </p>
              <p>
                We do three things well: websites, SaaS platforms, and automation. We do them quickly and we do them right. Every project starts with a business audit, because a site that does not understand its buyer is just an expensive brochure.
              </p>
              <p>
                Our process is built for speed without cutting corners. A discovery call, a competitor audit, a design sprint, a build sprint, a launch. Ten days from audit to live. Ninety days of support after. No handoff and disappear.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 pt-12 border-t border-linen">
              {[
                { num: "10", label: "days from audit to live" },
                { num: "90", label: "days post-launch support" },
                { num: "£299", label: "to start with an audit" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl text-ink mb-1">{stat.num}</p>
                  <p className="text-taupe text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-panel rounded-lg">
              <p className="text-taupe text-sm">More coming soon.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
