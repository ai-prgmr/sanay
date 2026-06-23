import Image from "next/image";

export default function ExperiencePage() {
  return (
    <main className="relative z-10 pt-32 pb-section-gap">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header Section */}
        <header className="mb-stack-lg animate-fade-in-up">
          <div className="flex items-center gap-stack-sm mb-4">
            <div className="accent-line w-10"></div>
            <span className="text-secondary font-label-md tracking-widest">
              PORTFOLIO OF EXCELLENCE
            </span>
          </div>
          <h1 className="font-display text-headline-lg-mobile md:text-display text-primary max-w-4xl">
            Engineering Strategy &amp; <span className="text-secondary">Diplomatic Leadership.</span>
          </h1>
        </header>

        {/* Experience Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mt-stack-lg">
          {/* F1 in Schools - Hero Card */}
          <section className="md:col-span-8 glass-card rounded-xl p-stack-lg overflow-hidden relative group hover:shadow-xl transition-premium">
            <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>
            <div className="flex flex-col md:flex-row justify-between items-start mb-stack-md gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-stack-sm mb-2">
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-label-sm font-bold uppercase tracking-wider">
                    Automotive Engineering
                  </span>
                  <span className="bg-tertiary-fixed-dim/20 text-on-tertiary-container px-3 py-1 rounded-full text-label-sm font-bold">
                    Top 5 in India
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-1">
                  F1 in Schools
                </h2>
                <p className="text-on-surface-variant font-label-md">
                  Co-Team Manager &amp; Head of R&D
                </p>
              </div>
              <span className="material-symbols-outlined text-4xl text-outline-variant group-hover:text-secondary transition-colors">
                settings_input_component
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
              <div className="space-y-stack-md">
                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  Led a high-performance team in the world's most prestigious STEM competition. Directed the development of a miniature Formula 1 car, integrating advanced aerodynamics and manufacturing protocols.
                </p>
                <div className="grid grid-cols-2 gap-stack-sm">
                  <div className="bg-surface-container-low p-4 rounded-lg">
                    <span className="block font-headline-md text-secondary">0.02s</span>
                    <span className="text-label-sm text-outline uppercase tracking-tighter">
                      Reaction Time
                    </span>
                  </div>
                  <div className="bg-surface-container-low p-4 rounded-lg">
                    <span className="block font-headline-md text-secondary">Top 5</span>
                    <span className="text-label-sm text-outline uppercase tracking-tighter">
                      National Rank
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden min-h-[240px] group-hover:shadow-lg transition-premium">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDu1FMPNEONOR3rViwGtdvFajsLRm2IYKjNVG5qRgRRmk3A6YsS2ovAm3JV9RQiIvmkhCLw_E84_RYnNUSRYvqJ9tYFaZxKWWL7cws02CpsGuZ3ntCba3NKL4GUxpyi3Fbg6zwgQQLrvsckDakOVZyXLFGVbg0aZUq3rydQbv9CZdh0U3tt0dHsBm00-NA1WiBtvfzTxvR2BHMBZlXtthHFNDkWIThD9EUYlnqPps3-B2K7cjDubBHvED4EOEGzhHnMliO-BNwbsbq"
                  alt="CAD Model of Miniature Formula 1 Car"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-label-sm font-bold opacity-80">
                    CAD Model Alpha-4
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-stack-lg border-t border-outline/10 pt-stack-md flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container rounded-full text-label-md font-medium">
                <span className="material-symbols-outlined text-[18px]">
                  deployed_code
                </span>{" "}
                CFD Analysis
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container rounded-full text-label-md font-medium">
                <span className="material-symbols-outlined text-[18px]">
                  precision_manufacturing
                </span>{" "}
                CNC Machining
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container rounded-full text-label-md font-medium">
                <span className="material-symbols-outlined text-[18px]">
                  monitoring
                </span>{" "}
                Data Telemetry
              </div>
            </div>
          </section>

          {/* Leadership Card */}
          <section className="md:col-span-4 glass-card rounded-xl p-stack-lg flex flex-col justify-between hover:border-secondary/50 hover:-translate-y-2 hover:shadow-xl transition-premium">
            <div>
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-stack-md">
                <span className="material-symbols-outlined text-on-primary">
                  groups
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary mb-2">
                Student Leadership
              </h2>
              <p className="text-on-surface-variant text-body-md mb-stack-md leading-relaxed">
                Elected School Prefect and Student Council member, bridging the gap between administration and the student body.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-secondary text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-label-md text-on-surface font-medium">
                    Managed 500+ student events
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-secondary text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-label-md text-on-surface font-medium">
                    Policy reform advocate
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-secondary text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-label-md text-on-surface font-medium">
                    Mentored junior debate teams
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-stack-lg pt-stack-md border-t border-outline/10">
              <span className="text-label-sm text-outline block mb-1">
                Key Competency
              </span>
              <span className="text-primary font-bold">
                Organizational Strategy
              </span>
            </div>
          </section>

          {/* Diplomacy Card */}
          <section className="md:col-span-6 glass-card rounded-xl p-stack-lg hover:border-secondary/50 hover:-translate-y-2 hover:shadow-xl transition-premium flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <h2 className="font-headline-md text-headline-md text-primary">
                  Diplomacy &amp; Public Speaking
                </h2>
                <span className="bg-tertiary text-on-tertiary px-3 py-1 text-label-sm font-bold rounded">
                  INTERNATIONAL
                </span>
              </div>
              <div className="space-y-stack-md">
                <div className="flex gap-stack-md items-start">
                  <div className="min-w-[80px] h-[80px] rounded-lg bg-surface-container-highest flex flex-col items-center justify-center border border-outline/10">
                    <span className="text-headline-md text-primary font-bold">
                      HV
                    </span>
                    <span className="text-label-sm text-outline">Harvard</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">
                      Sustainability Summit
                    </h3>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">
                      Delegate representing India on Global Carbon Credit Policy. Collaborated with 50+ international delegates.
                    </p>
                  </div>
                </div>
                <div className="flex gap-stack-md items-start">
                  <div className="min-w-[80px] h-[80px] rounded-lg bg-surface-container-highest flex flex-col items-center justify-center border border-outline/10">
                    <span className="text-headline-md text-primary font-bold">
                      UN
                    </span>
                    <span className="text-label-sm text-outline">MUN</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">
                      Best Delegate - MUN
                    </h3>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">
                      Outstanding performance in crisis committees and international relations strategy across multiple conferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills & Technical Stack */}
          <section className="md:col-span-6 glass-card rounded-xl p-stack-lg overflow-hidden relative hover:border-secondary/50 transition-premium">
            <div className="flex items-center gap-stack-sm mb-stack-md">
              <span className="material-symbols-outlined text-secondary">
                psychology
              </span>
              <h2 className="font-headline-md text-headline-md text-primary">
                Technical Expertise
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-label-md font-bold text-on-surface">
                    CAD Design (SolidWorks/Fusion 360)
                  </span>
                  <span className="text-secondary font-bold text-label-md">
                    95%
                  </span>
                </div>
                <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-secondary transition-all duration-1000 w-[95%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-label-md font-bold text-on-surface">
                    CFD &amp; Fluid Simulation
                  </span>
                  <span className="text-secondary font-bold text-label-md">
                    88%
                  </span>
                </div>
                <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-secondary transition-all duration-1000 w-[88%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-label-md font-bold text-on-surface">
                    Project Management (Agile)
                  </span>
                  <span className="text-secondary font-bold text-label-md">
                    92%
                  </span>
                </div>
                <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-secondary transition-all duration-1000 w-[92%]"></div>
                </div>
              </div>
            </div>
            <div className="mt-stack-lg grid grid-cols-2 gap-stack-sm">
              <div className="p-3 border border-outline/10 rounded-lg flex items-center gap-2 font-medium">
                <span className="material-symbols-outlined text-secondary text-[18px]">
                  analytics
                </span>{" "}
                Strategic Analysis
              </div>
              <div className="p-3 border border-outline/10 rounded-lg flex items-center gap-2 font-medium">
                <span className="material-symbols-outlined text-secondary text-[18px]">
                  public
                </span>{" "}
                Global Diplomacy
              </div>
            </div>
          </section>
        </div>

        {/* Timeline of Growth */}
        <section className="mt-section-gap relative">
          <div className="text-center mb-stack-lg">
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Academic &amp; Personal Milestones
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto mt-2 leading-relaxed">
              A structured journey through education, competition, and leadership.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-outline-variant/30 hidden md:block"></div>
            
            {/* Milestone 1 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 group">
              <div className="md:w-[45%] mb-4 md:mb-0 md:text-right">
                <div className="glass-card p-6 rounded-xl border-l-4 border-l-secondary md:border-l-0 md:border-r-4 md:border-r-secondary hover:shadow-lg transition-premium">
                  <span className="text-secondary font-bold text-label-md">
                    2023 - PRESENT
                  </span>
                  <h3 className="font-headline-md text-primary mt-1">
                    Prefect &amp; Student Council
                  </h3>
                  <p className="text-body-md text-on-surface-variant mt-2 leading-relaxed">
                    Overseeing major school initiatives and representing the student voice in high-level policy discussions.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background z-10 hidden md:block"></div>
              <div className="md:w-[45%]"></div>
            </div>

            {/* Milestone 2 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 group">
              <div className="md:w-[45%]"></div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-tertiary-fixed-dim border-4 border-background z-10 hidden md:block"></div>
              <div className="md:w-[45%] mt-4 md:mt-0">
                <div className="glass-card p-6 rounded-xl border-l-4 border-l-tertiary-fixed-dim hover:shadow-lg transition-premium">
                  <span className="text-tertiary-fixed-dim font-bold text-label-md">
                    2022 - 2023
                  </span>
                  <h3 className="font-headline-md text-primary mt-1">
                    F1 in Schools National Finals
                  </h3>
                  <p className="text-body-md text-on-surface-variant mt-2 leading-relaxed">
                    Led 'Team Velocity' to a top 5 finish in the National Finals, setting track records for car velocity.
                  </p>
                </div>
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-1 group">
              <div className="md:w-[45%] mb-4 md:mb-0 md:text-right">
                <div className="glass-card p-6 rounded-xl border-l-4 border-l-secondary md:border-l-0 md:border-r-4 md:border-r-secondary hover:shadow-lg transition-premium">
                  <span className="text-secondary font-bold text-label-md">
                    2022
                  </span>
                  <h3 className="font-headline-md text-primary mt-1">
                    Harvard Sustainability Delegate
                  </h3>
                  <p className="text-body-md text-on-surface-variant mt-2 leading-relaxed">
                    One of 100 students selected globally to discuss climate crisis solutions at the Harvard-hosted summit.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background z-10 hidden md:block"></div>
              <div className="md:w-[45%]"></div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
