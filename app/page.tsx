import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient -z-10"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          {/* Hero Content */}
          <div className="md:col-span-7 py-stack-lg animate-fade-in-up">
            <div className="inline-block bg-secondary-container/10 px-4 py-1 mb-stack-md rounded-full border border-secondary/20">
              <span className="text-secondary font-label-md text-label-md">
                Future Finance Professional
              </span>
            </div>
            <h1 className="font-display text-display text-primary leading-tight mb-stack-md">
              Bridging <span className="text-secondary">Innovation</span> &amp; Finance
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-stack-lg leading-relaxed">
              A high-achieving finance aspirant merging technical precision with strategic foresight. From competing in F1 in Schools to leading impact-driven community initiatives, I design solutions where efficiency meets value.
            </p>
            <div className="flex flex-wrap gap-stack-md">
              <Link
                href="/experience"
                className="bg-primary text-on-primary px-8 py-4 rounded font-label-md text-label-md hover:bg-secondary transition-premium flex items-center gap-2 shadow-sm hover:shadow-lg active:scale-95 duration-300"
              >
                Explore My Work{" "}
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/achievements"
                className="border border-primary text-primary px-8 py-4 rounded font-label-md text-label-md hover:bg-primary/5 transition-premium shadow-sm hover:shadow-md active:scale-95"
              >
                About Me
              </Link>
            </div>
          </div>

          {/* Hero Image Area */}
          <div className="md:col-span-5 relative group animate-fade-in-left">
            <div className="absolute -inset-4 border border-outline/10 rounded-xl -rotate-3 transition-premium group-hover:rotate-0"></div>
            <div className="glass-card p-4 rounded-xl relative z-10 hover:shadow-2xl transition-premium">
              <div className="aspect-[4/5] overflow-hidden rounded-lg bg-surface-container relative">
                <Image
                  src="/sanay/sanay-temp.png"
                  alt="Sanay Choubey Portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale-[20%] hover:grayscale-0 transition-premium"
                  priority
                  unoptimized
                />
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bento Grid */}
      <section className="py-section-gap bg-surface-container-low/30 border-y border-outline/5">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col items-center mb-stack-lg text-center">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Key Metrics of Excellence
            </h2>
            <div className="w-20 h-1 bg-secondary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Stat 1: Community Service */}
            <div className="md:col-span-2 glass-card p-stack-lg rounded-xl flex flex-col justify-between group hover:border-secondary/50 hover:-translate-y-2 hover:shadow-xl transition-premium relative overflow-hidden">
              <div className="accent-line absolute top-0 left-0 w-full opacity-50"></div>
              <div className="flex justify-between items-start mb-12">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <span className="material-symbols-outlined text-secondary text-4xl">
                    volunteer_activism
                  </span>
                </div>
                <div className="bg-primary-fixed px-3 py-1 rounded font-label-sm text-label-sm text-on-primary-fixed">
                  SOCIAL IMPACT
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-[64px] text-primary">108</span>
                  <span className="font-headline-md text-on-surface-variant">
                    Hours
                  </span>
                </div>
                <p className="font-body-md text-on-surface-variant">
                  Dedicated to 108 extensive hours of community engagement at the <strong>Lotus Petal Foundation</strong>, fostering leadership and sustainable social development.
                </p>
              </div>
            </div>

            {/* Stat 2: F1 Ranking */}
            <div className="md:col-span-2 glass-card p-stack-lg rounded-xl flex flex-col justify-between group hover:border-secondary/50 hover:-translate-y-2 hover:shadow-xl transition-premium relative overflow-hidden">
              <div className="accent-line absolute top-0 left-0 w-full opacity-50"></div>
              <div className="flex justify-between items-start mb-12">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <span className="material-symbols-outlined text-secondary text-4xl">
                    sports_score
                  </span>
                </div>
                <div className="bg-primary-fixed px-3 py-1 rounded font-label-sm text-label-sm text-on-primary-fixed">
                  COMPETITIVE EDGE
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-[64px] text-primary">Top 5</span>
                  <span className="font-headline-md text-on-surface-variant">
                    National
                  </span>
                </div>
                <p className="font-body-md text-on-surface-variant">
                  Achieved elite national ranking in F1 in Schools, demonstrating excellence in engineering design and project management.
                </p>
              </div>
            </div>

            {/* Small High-Frequency Metric 1 */}
            <div className="md:col-span-1 glass-card p-stack-md rounded-xl text-center border-b-2 border-b-secondary hover:-translate-y-1.5 hover:shadow-md transition-premium">
              <span className="block font-headline-md text-primary mb-1">98%</span>
              <span className="block font-label-sm text-on-surface-variant uppercase tracking-wider">
                Academic Excellence
              </span>
            </div>

            {/* Small High-Frequency Metric 2 */}
            <div className="md:col-span-1 glass-card p-stack-md rounded-xl text-center border-b-2 border-b-secondary hover:-translate-y-1.5 hover:shadow-md transition-premium">
              <span className="block font-headline-md text-primary mb-1">15+</span>
              <span className="block font-label-sm text-on-surface-variant uppercase tracking-wider">
                Projects Led
              </span>
            </div>

            {/* Small High-Frequency Metric 3 */}
            <div className="md:col-span-1 glass-card p-stack-md rounded-xl text-center border-b-2 border-b-secondary hover:-translate-y-1.5 hover:shadow-md transition-premium">
              <span className="block font-headline-md text-primary mb-1">4.0</span>
              <span className="block font-label-sm text-on-surface-variant uppercase tracking-wider">
                GPA Standing
              </span>
            </div>

            {/* Small High-Frequency Metric 4 */}
            <div className="md:col-span-1 glass-card p-stack-md rounded-xl text-center border-b-2 border-b-secondary hover:-translate-y-1.5 hover:shadow-md transition-premium">
              <span className="block font-headline-md text-primary mb-1">3+</span>
              <span className="block font-label-sm text-on-surface-variant uppercase tracking-wider">
                Certifications
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Preview Section */}
      <section className="py-section-gap relative">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-4">
              <h3 className="font-headline-lg text-headline-lg text-primary mb-stack-md">
                Engineering a Financial Future
              </h3>
              <p className="font-body-md text-on-surface-variant mb-stack-lg">
                My journey is defined by a relentless pursuit of optimization, whether it's aerodynamic efficiency in racing or capital efficiency in markets.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="font-body-md text-primary font-semibold group-hover:translate-x-2 transition-transform">
                    Financial Modeling
                  </span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="font-body-md text-primary font-semibold group-hover:translate-x-2 transition-transform">
                    Competitive Strategy
                  </span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="font-body-md text-primary font-semibold group-hover:translate-x-2 transition-transform">
                    Leadership &amp; Management
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
              {/* Featured Project 1 */}
              <div className="group relative overflow-hidden rounded-xl bg-surface shadow-sm hover:shadow-xl transition-premium">
                <div className="h-48 overflow-hidden relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr0_4kRURxZZbMZMyPJ16hQmniZlkTWxqZ4Kt8Ilv2uffAMNh5xDcDdtTHx_1fqUJptKgpMRf1gfhHGsP-u9_OV7mkuEobgmNA7ESCBhyKXqaFxJtxL9Hf8BNYHJfxszjkvHdUh7TLvyfmpro6JCMRIKw_NBN0neOp_8i3NJJRgtmYFxr5J6NTbhPdjnc-zxQ8hfLGsvCdj25cjnMdPd6FwK5qlgi4jrBwz9b5aKU1rc_G9MawUWR8WhME6sIx4y689If_Js-kiEnL"
                    alt="F1 in Schools Miniature Racing Car"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-premium"
                    unoptimized
                  />
                </div>
                <div className="p-stack-md">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-headline-md text-primary">F1 in Schools</h4>
                    <span className="material-symbols-outlined text-secondary">
                      verified
                    </span>
                  </div>
                  <p className="font-body-md text-on-surface-variant text-sm mb-4">
                    Led a multi-disciplinary team to a top national ranking, managing budgets, sponsorships, and technical R&amp;D.
                  </p>
                  <Link
                    href="/experience"
                    className="text-secondary font-label-md text-label-md flex items-center gap-1 hover:underline hover:opacity-85"
                  >
                    View Case Study{" "}
                    <span className="material-symbols-outlined text-[16px]">
                      open_in_new
                    </span>
                  </Link>
                </div>
              </div>

              {/* Featured Project 2 */}
              <div className="group relative overflow-hidden rounded-xl bg-surface shadow-sm hover:shadow-xl transition-premium">
                <div className="h-48 overflow-hidden relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9Ip2gdF_GoKn908xrheyAiDPrRNXYPmv4Z7Ro6pZBa0ggEMB4L4sGNzBeqWcfcgHfisq3r91B7VzAAQ_LA_16SPWY7LhSK2memBM1lD608IxkdIAKF4hBmTe62UH64JVLphq7bTvtz_wl_c8YEBz8W-CX-JjMVOgREIX5XFZ9TXHl0FATILpIDVjaWjg9IrUN64Grs_xTfULR2OMcnG0ZIkx1j_AapA8WmfmLRUkwxhE7IznAnWMXMnPi40ZGU9fOSmGvGDNzRZgO"
                    alt="Financial Data Visualization"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-premium"
                    unoptimized
                  />
                </div>
                <div className="p-stack-md">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-headline-md text-primary">
                      Investment Analysis
                    </h4>
                    <span className="material-symbols-outlined text-secondary">
                      query_stats
                    </span>
                  </div>
                  <p className="font-body-md text-on-surface-variant text-sm mb-4">
                    Developed quantitative models to assess market volatility and optimize portfolio risk-reward ratios.
                  </p>
                  <Link
                    href="/research"
                    className="text-secondary font-label-md text-label-md flex items-center gap-1 hover:underline hover:opacity-85"
                  >
                    View Project{" "}
                    <span className="material-symbols-outlined text-[16px]">
                      open_in_new
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="glass-card p-stack-lg md:p-20 rounded-2xl text-center relative overflow-hidden shadow-sm hover:shadow-lg transition-premium">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary via-primary to-secondary"></div>
            <h2 className="font-display text-headline-lg-mobile md:text-display text-primary mb-stack-md">
              Ready to Build the Future?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-stack-lg">
              I am currently seeking opportunities at the intersection of finance and technology. Let's discuss how my analytical background and competitive drive can contribute to your team.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/contact"
                className="bg-primary text-on-primary px-10 py-4 rounded font-label-md text-label-md hover:bg-secondary transition-premium hover:shadow-lg active:scale-95"
              >
                Contact Sanay
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
