import Image from "next/image";
import Link from "next/link";

export default function ResearchPage() {
  return (
    <main className="relative z-10 pt-32 pb-section-gap">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Editorial Header */}
        <header className="mb-stack-lg animate-fade-in-up">
          <p className="text-secondary font-label-md text-label-md uppercase tracking-widest mb-2 font-semibold">
            Portfolio Journal
          </p>
          <h1 className="font-display text-headline-lg-mobile md:text-display text-primary mb-4">
            Insights &amp; Research
          </h1>
          <p className="text-on-surface-variant font-body-md text-body-md max-w-xl leading-relaxed">
            Exploring the intersections of high-performance engineering, algorithmic efficiency, and the future of quantitative finance.
          </p>
        </header>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">

          {/* Main Feed - Left Column (Articles Stack) */}
          <div className="lg:col-span-8 space-y-section-gap">

            {/* Blog Post 1: Sustainable Finance */}
            <article className="glass-card rounded-xl overflow-hidden shadow-sm relative group hover:shadow-xl transition-premium">
              <div className="accent-line absolute top-0 left-0 w-full"></div>
              <div className="aspect-video relative overflow-hidden bg-surface-container">
                <Image
                  src="/sanay/sustainable_finance.png"
                  alt="Futuristic sustainable metropolis and financial ESG charts"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute top-4 right-4 bg-secondary text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider rounded-full flex items-center gap-1 shadow-lg z-10">
                  <span className="material-symbols-outlined text-[14px]">
                    star
                  </span>{" "}
                  Featured Publication
                </div>
              </div>
              <div className="p-stack-lg">
                <span className="text-secondary font-label-md text-label-md uppercase tracking-wider block mb-2 font-medium">
                  Sustainable Finance
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-3 leading-snug group-hover:text-secondary transition-colors">
                  THE BIGGEST CHALLENGE IN SUSTAINABLE FINANCE TODAY
                </h2>

                {/* Blockquote for Subtitle */}
                <blockquote className="border-l-4 border-secondary/50 pl-4 py-1 my-4 italic text-body-lg text-on-surface-variant font-medium">
                  “Money shapes the world we live in. The question: Can we help save it?”
                </blockquote>

                {/* Article Body */}
                <div className="space-y-6 text-on-surface-variant font-body-md text-body-md leading-relaxed">
                  <p>
                    Over the last decade sustainable finance as a concept has transformed from niche to a global movement. Investors, corporations and governments increasingly recognise that financial decisions must account not only for profits but also for environmental and social consequences. Green bonds, ESG funds, impact investing, and climate focused initiatives have gained unprecedented momentum. However, despite its promise, sustainable finance faces significant obstacles. Beneath the optimistic headlines lies a complex reality filled with regulatory uncertainty, inconsistent standards, and difficult trade-offs. If sustainable finance is to genuinely drive positive change, these challenges must first be addressed.
                  </p>

                  {/* Highlights/Sections */}
                  <div className="space-y-4 pt-2">
                    <div className="p-5 bg-surface-container-low rounded-lg border-l-4 border-l-secondary">
                      <h3 className="font-headline-md text-[18px] text-primary mb-2 font-bold">
                        1. Greenwashing: When Sustainability Becomes a Marketing Strategy
                      </h3>
                      <p className="text-sm leading-relaxed">
                        One of the most pressing concerns in sustainable finance is greenwashing—the practice of portraying investments or businesses as environmentally responsible without sufficient evidence to support such claims. Many investment funds advertise themselves as &quot;green&quot; or &quot;ESG-focused&quot; while maintaining substantial holdings in companies with questionable environmental records. This creates confusion among investors and undermines trust in the entire sector. Greenwashing ultimately threatens the credibility of sustainable finance. Investors need transparency, not slogans.
                      </p>
                    </div>

                    <div className="p-5 bg-surface-container-low rounded-lg border-l-4 border-l-secondary">
                      <h3 className="font-headline-md text-[18px] text-primary mb-2 font-bold">
                        2. The Lack of Standardised ESG Reporting
                      </h3>
                      <p className="text-sm leading-relaxed">
                        Environmental, Social, and Governance (ESG) criteria are central to sustainable investing. Yet there remains no universally accepted framework for measuring and reporting ESG performance. Different organisations prioritise different indicators. One rating agency may rank a company highly, while another may assign it a poor score. As a result, investors struggle to compare opportunities accurately. Without consistent reporting standards, sustainable investing risks becoming subjective rather than evidence-based.
                      </p>
                    </div>

                    <div className="p-5 bg-surface-container-low rounded-lg border-l-4 border-l-secondary">
                      <h3 className="font-headline-md text-[18px] text-primary mb-2 font-bold">
                        3. Climate Risks Remain Underestimated
                      </h3>
                      <p className="text-sm leading-relaxed">
                        Climate change is not only an environmental issue; it is increasingly a financial one. Rising temperatures, extreme weather events, and resource scarcity can significantly affect businesses and investment portfolios. Infrastructure damage, supply chain disruptions, and increased insurance costs represent material risks that many markets still fail to price adequately. Ignoring these risks today could lead to severe economic consequences tomorrow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Blog Post 2: Engineering Ethics */}
            <article className="glass-card rounded-xl overflow-hidden shadow-sm relative group hover:shadow-xl transition-premium">
              <div className="accent-line absolute top-0 left-0 w-full"></div>
              <div className="aspect-video relative overflow-hidden bg-surface-container">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC42CXIK17IzklyexQi1L0S7HMz2uKMnr3gCETqOvl0mB09rTL9DI5UwDrr0tOWHW1e_U32vHE7QTFwOxhbDsJi5YP5tqeYTpA2zIu-7r9G5wahHokJJOtWq6L_2JX43wGmsbV2HAGvgei8Nq7fohNKa1d1qIgcSD7gCUCcq8SHTJmbT-2OpgN7IAlXXxJy36ztaJ_KwF05ixilN7dYgm0--fxMWnNkeyxMzQ9F8JxUaC3rKJ58HiuzsB6UdNB-DzSEJUpOjZSQk5hM"
                  alt="Cinematic macro shot of carbon-fiber F1 car wing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                  unoptimized
                />
              </div>
              <div className="p-stack-lg">
                <span className="text-secondary font-label-md text-label-md uppercase tracking-wider block mb-2 font-medium">
                  Theoretical Paradigm
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-3 leading-snug group-hover:text-secondary transition-colors">
                  Engineering Ethics in the Fast Lane: The F1 Paradigm
                </h2>
                <p className="text-on-surface-variant font-body-md text-body-md mb-6 leading-relaxed">
                  An analysis of technical decision-making under extreme pressure and the transferable ethics of competitive engineering to financial markets.
                </p>
                <a
                  href="mailto:sanaychoubey13@gmail.com?subject=Inquiry regarding: Engineering Ethics in the Fast Lane"
                  className="inline-flex w-full bg-primary text-white py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-secondary transition-colors items-center justify-center gap-2 rounded shadow-sm hover:shadow-md active:scale-95 animate-fade-in"
                >
                  Read Full Journal
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </article>

          </div>

          {/* Sidebar Feed - Right Column */}
          <div className="lg:col-span-4 space-y-gutter">

            {/* Collaboration CTA */}
            <div className="bg-primary p-8 rounded-xl relative overflow-hidden shadow-md group hover:shadow-lg transition-premium">
              {/* Background visual interest */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-25 blur-3xl -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="relative z-10">
                <h3 className="font-headline-md text-headline-md text-white mb-4 leading-snug">
                  Let's Synthesize Ideas
                </h3>
                <p className="text-on-primary-container font-body-md text-body-md mb-8 leading-relaxed">
                  I am always open to collaborating on research papers, quantitative projects, or technical engineering challenges.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center bg-white text-primary px-8 py-4 rounded font-label-md text-label-md uppercase tracking-widest hover:bg-secondary hover:text-white transition-all active:scale-95 shadow-md font-semibold text-center"
                >
                  Contact for Collaboration
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
