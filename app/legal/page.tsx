import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-24 bg-canvas">
          <div className="max-w-3xl mx-auto px-6">
            <span className="uppercase tracking-widest text-xs text-champagne font-medium">Legal</span>
            <h1 className="font-display font-light text-5xl text-ink mt-3 mb-12">Privacy &amp; Terms</h1>

            <div className="flex flex-col gap-12 text-taupe leading-relaxed">
              <div>
                <h2 className="font-display text-2xl text-ink mb-4">Privacy Policy</h2>
                <p className="mb-4">
                  Atavo Agency collects only the information you voluntarily submit through our audit request form: your business name, website URL, and your message. We do not sell or share this data with third parties.
                </p>
                <p className="mb-4">
                  We may use your email address to respond to your enquiry and, with your consent, to send occasional updates about our services. You can unsubscribe at any time.
                </p>
                <p>
                  We do not use tracking cookies beyond basic analytics. Our website does not deploy advertising pixels. Full privacy notice coming soon.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-ink mb-4">Terms of Service</h2>
                <p className="mb-4">
                  By using this website or engaging Atavo Agency for services, you agree to these terms. All project work is governed by a separate client agreement signed before work begins.
                </p>
                <p className="mb-4">
                  Atavo Agency is registered in England and Wales. All prices shown are in GBP and exclusive of VAT where applicable.
                </p>
                <p>
                  Full terms of service coming soon. For any legal queries, contact hello@atavo.co.uk.
                </p>
              </div>

              <div className="p-6 bg-panel rounded-lg">
                <p className="text-sm">Full legal documentation in progress. Last updated April 2026.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
