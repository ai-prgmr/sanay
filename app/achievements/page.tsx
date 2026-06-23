import Link from "next/link";

export default function AchievementsPage() {
  const awards = [
    {
      title: "Harvard Sustainability Impact Summit India 2025",
      badge: "Creative Architect",
      icon: "star",
      description:
        "Awarded the Creative Architect Award for design thinking and innovative sustainability visualization. Served as the official MU20 Ambassador for the summit.",
      tags: [
        { icon: "event", text: "2025" },
        { icon: "school", text: "Harvard" },
      ],
      isFeatured: true,
    },
    {
      title: "F1 in Schools Nationals & Regionals",
      badge: "Top 5 in India",
      icon: "settings_input_component",
      description:
        "Ranked Top 5 Teams in India. Won the Digital Media Award at Nationals, and the Pit Display & Verbal Presentation Award at Regionals. Nominated for Best Project Management & Sponsorship.",
      tags: [
        { icon: "workspace_premium", text: "Nationals" },
        { icon: "military_tech", text: "Digital Media" },
      ],
      isFeatured: true,
    },
    {
      title: "Asian Regional Space Settlement Design Competition",
      badge: "Winner",
      icon: "rocket_launch",
      description:
        "Won the prestigious regional space settlement competition. Served as the President Marketing at NASA Space Settlement Competition (Asians) for the engineering proposal.",
      tags: [
        { icon: "military_tech", text: "1st Place" },
        { icon: "public", text: "Regional" },
      ],
      isFeatured: true,
    },
    {
      title: "Odyssey of the Mind",
      badge: "World Qualifier",
      icon: "lightbulb",
      description:
        "Creative problem-solving competition focused on engineering and performance under intense constraints. Achieved North Asian Winner status and qualified for the World Finals.",
      tags: [{ icon: "trending_up", text: "North Asian Winner" }],
      isFeatured: false,
    },
    {
      title: "NASA Space Settlement Contest",
      badge: "National Qualifier",
      icon: "explore",
      description:
        "Qualified for the National level (Asians) in the NASA Space Settlement Contest, proposing innovative orbital habitat designs.",
      tags: [{ icon: "star_rate", text: "NASA Qualifier" }],
      isFeatured: false,
    },
    {
      title: "Diplomacy & MUN Honors",
      badge: "Best Delegate",
      icon: "gavel",
      description:
        "Earned Best Delegate (representing Russia) at ISMUN, and High Commendation (representing the USA) at PVOLVE MUN. Appointed as Campus Ambassador for NOVICES MUN.",
      tags: [{ icon: "public", text: "USA & Russia MUN" }],
      isFeatured: false,
    },
    {
      title: "Robowars Regionals",
      badge: "3rd Place",
      icon: "precision_manufacturing",
      description:
        "Designed and engineered combat robotics under strict performance constraints, securing a 3rd place podium finish at Regionals.",
      tags: [{ icon: "build", text: "Robotics" }],
      isFeatured: false,
    },
    {
      title: "Hackathon & IRIS Nationals",
      badge: "National Qualifier",
      icon: "terminal",
      description:
        "National level Qualifier in both the Hackathon Nationals and the IRIS Nationals science and engineering fair.",
      tags: [{ icon: "code", text: "Hackathon" }],
      isFeatured: false,
    },
    {
      title: "Black Belt Dan-2 in Taekwondo",
      badge: "Discipline",
      icon: "fitness_center",
      description:
        "Achieved the advanced Dan-2 rank through 6+ years of disciplined training, mental resilience, and physical mastery.",
      tags: [{ icon: "check_circle", text: "Certified Dan-2" }],
      isFeatured: false,
    },
  ];

  const timeline = [
    {
      date: "2025",
      title: "Harvard Sustainability Award",
      color: "bg-on-tertiary-container",
    },
    {
      date: "2023",
      title: "F1 in Schools Top 5 India",
      color: "bg-secondary",
    },
    {
      date: "2022",
      title: "Asian Space Settlement Winner",
      color: "bg-tertiary-fixed-dim",
    },
    {
      date: "2021",
      title: "Taekwondo Black Belt Dan-2",
      color: "bg-primary",
    },
  ];

  return (
    <main className="relative z-10 pt-32 pb-section-gap">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Profile / About Me Section */}
        <section className="mb-section-gap animate-fade-in-up">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-px bg-secondary"></div>
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">
              Profile
            </span>
          </div>
          <h1 className="font-display text-headline-lg-mobile md:text-display text-primary mb-2">
            About Me
          </h1>
          <p className="font-label-md text-label-md text-secondary uppercase tracking-wider font-semibold max-w-2xl mb-8">
            Aspiring Future Entrepreneur • Business Strategist • Builder • Leader
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            {/* Left Column: Biography (8 columns) */}
            <div className="lg:col-span-8 space-y-6 text-on-surface-variant font-body-md text-body-md leading-relaxed">
              <p>
                I am a high school student currently studying in class 12th with a passion for finance, business strategy, and technical innovations. While many explore ideas in theory, I like to turn them into reality—whether through leading competitive teams, securing monetary sponsorships, developing business concepts, or building solutions that create measurable impact.
              </p>
              <p>
                My journey began in engineering and competitive innovation back in class 9, where I learned how to solve problems under high pressure and tight time limits, and lead teams to ambitious goals while making data-driven decisions. Through experiences ranging from national-level competitions to entrepreneurship initiatives, I have developed a strong interest in how businesses are built, scaled, and sustained while being financially viable.
              </p>
              <p>
                My growing interest in sustainable finance stems from a desire to understand how capital can be deployed responsibly to support innovation, environmental progress, and inclusive economic growth. I am particularly interested in impact investing, ESG strategy, venture capital, and the role of financial markets in addressing global challenges.
              </p>
              <p>
                Beyond competitions and academics, I actively seek opportunities to create value through leadership, collaboration, and community engagement. Whether developing entrepreneurial ideas, leading teams, or exploring emerging business models, I am motivated by the challenge of building solutions that are both financially sustainable and socially meaningful.
              </p>
            </div>

            {/* Right Column: Areas of Impact & Education & Ventures (4 columns) */}
            <div className="lg:col-span-4 space-y-gutter">
              {/* Education Card */}
              <div className="glass-card rounded-xl p-stack-lg border-l-4 border-l-secondary shadow-sm hover:shadow-md transition-premium">
                <h3 className="font-headline-md text-[18px] text-primary mb-4 font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">
                    school
                  </span>
                  Education
                </h3>
                <div className="space-y-1 font-body-md text-sm text-on-surface-variant">
                  <p className="font-bold text-primary">Amity International School</p>
                  <p>Pushp Vihar, New Delhi</p>
                  <p className="text-xs text-outline font-semibold">Grade 12 • High School Diploma</p>
                </div>
              </div>

              {/* Startup Ventures Card */}
              <div className="glass-card rounded-xl p-stack-lg border-l-4 border-l-secondary shadow-sm hover:shadow-md transition-premium">
                <h3 className="font-headline-md text-[18px] text-primary mb-4 font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">
                    rocket_launch
                  </span>
                  Startup Ventures
                </h3>
                <div className="space-y-1 font-body-md text-sm text-on-surface-variant">
                  <p className="font-bold text-primary">VRLO</p>
                  <p>Co-Founder</p>
                  <p className="text-xs text-outline font-semibold">Co-founder &amp; strategist building immersive technical solutions.</p>
                </div>
              </div>

              {/* Areas of Impact Card */}
              <div className="glass-card rounded-xl p-stack-lg border-l-4 border-l-secondary shadow-sm hover:shadow-md transition-premium">
                <h3 className="font-headline-md text-[18px] text-primary mb-4 font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">
                    grid_view
                  </span>
                  Areas of Impact
                </h3>
                <ul className="space-y-3 font-body-md text-sm">
                  {[
                    "Sustainable Finance",
                    "Impact Investing",
                    "Entrepreneurship & Startups",
                    "Venture Capital",
                    "Business Strategy",
                    "ESG & Corporate Sustainability",
                    "Innovation & Emerging Tech",
                    "Leadership Development"
                  ].map((area, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Card Section */}
        <section className="mb-section-gap animate-fade-in-up">
          <div className="glass-card rounded-2xl p-stack-lg md:p-12 border-t-4 border-t-secondary relative overflow-hidden shadow-sm hover:shadow-lg transition-premium">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-secondary/10 p-4 rounded-xl shrink-0">
                <span className="material-symbols-outlined text-secondary text-5xl">
                  eco
                </span>
              </div>
              <div className="space-y-6">
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  Vision: Sustainable Finance &amp; Ecological Care
                </h2>
                <div className="space-y-4 text-on-surface-variant font-body-md text-body-md leading-relaxed">
                  <p>
                    My goal is to contribute to a future where business success and positive impact align in the field of finance and sustainability, contributing to the world.
                  </p>
                  
                  {/* Environmental Stat Callout */}
                  <div className="my-6 p-6 bg-surface-container-low rounded-xl border border-outline/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-3 text-center md:text-left">
                      <span className="block text-4xl font-bold text-secondary font-display">9.51B</span>
                      <span className="text-xs uppercase tracking-wider text-outline font-semibold">
                        Liters of Water / Year
                      </span>
                    </div>
                    <div className="md:col-span-9 text-sm space-y-2 border-t md:border-t-0 md:border-l border-outline/10 pt-4 md:pt-0 md:pl-6">
                      <p>
                        AI and supercomputers are built on water sites, and they use up to <strong>5 glasses of water</strong> per response. An AI company used up to <strong>9.51 billion liters of water</strong> in a single year—equal to the water consumption of the entire population of California.
                      </p>
                      <p className="italic text-outline font-semibold">
                        Economists and scientists project that clean water will be sold as a commodity in the coming ages.
                      </p>
                    </div>
                  </div>

                  <p>
                    It is our job to protect resources and think of alternatives that help the planet rather than exploit or take away its resources. We, the youngsters, have the power to come together, build on this, and start. A small group can also make a significant difference; otherwise, the gap between the rich and the poor will keep increasing, leading to many deaths. We must invest in companies focused on sustainability and put money toward securing the future of the coming generation.
                  </p>
                  <p className="font-bold text-primary text-lg">
                    That is what I aspire to become: A Sustainable Financier.
                  </p>
                  <p>
                    Someone who guides companies on where and how they should focus on ESG and lower their carbon footprint by investing in sustainable products which can and will set a benchmark for them. I am 17 years old right now, but if I do not start now, the world might be facing irreversible problems later on. There is no Planet B, and we should live by it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <hr className="border-outline/10 my-section-gap" />

        {/* Distinctions / Awards Section */}
        <section>
          {/* Header Section */}
          <header className="mb-stack-lg animate-fade-in-up">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-px bg-secondary"></div>
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">
                Global Awards
              </span>
            </div>
            <h2 className="font-display text-headline-lg-mobile md:text-display text-primary">
              Distinctions &amp; Achievements
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl leading-relaxed">
              A comprehensive selection of international recognition for innovation, engineering design, diplomacy, and personal discipline.
            </p>
          </header>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mt-stack-lg items-start">
            {/* Awards List - Left Columns */}
            <div className="lg:col-span-8 space-y-gutter">
              {awards.map((award, idx) => (
                <article
                  key={idx}
                  className={`glass-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-premium ${
                    award.isFeatured ? "border-t-2 border-t-secondary" : ""
                  }`}
                >
                  {award.isFeatured && <div className="accent-line w-full"></div>}
                  <div className="p-stack-lg">
                    <div className="flex justify-between items-start mb-stack-sm">
                      <span className="px-2 py-1 bg-on-tertiary-container/10 text-on-tertiary-container font-label-sm text-label-sm rounded uppercase tracking-wider font-semibold">
                        {award.badge}
                      </span>
                      <span className="material-symbols-outlined text-secondary text-2xl">
                        {award.icon}
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-2">
                      {award.title}
                    </h3>
                    <p className="font-body-md text-on-surface-variant mb-4 leading-relaxed">
                      {award.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {award.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 bg-secondary/5 border border-secondary/10 rounded-full font-label-sm text-label-sm text-secondary flex items-center gap-1 font-medium"
                        >
                          <span className="material-symbols-outlined text-sm">
                            {tag.icon}
                          </span>{" "}
                          {tag.text}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar - Right Columns */}
            <div className="lg:col-span-4 space-y-gutter">
              {/* Impact Stat Card */}
              <div className="glass-card rounded-xl p-stack-lg flex items-center justify-between border-l-4 border-l-on-tertiary-container hover:shadow-md transition-premium">
                <div>
                  <h2 className="font-display text-4xl text-primary leading-none">
                    15+
                  </h2>
                  <p className="font-label-md text-label-md text-on-surface-variant uppercase mt-2 font-medium">
                    Total Awards &amp; Honors
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-secondary text-2xl font-fill">
                    workspace_premium
                  </span>
                </div>
              </div>

              {/* Development Arc Timeline */}
              <div className="glass-card rounded-xl p-stack-lg hover:shadow-md transition-premium">
                <h4 className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-stack-lg border-b border-outline/10 pb-2 font-semibold">
                  Development Arc
                </h4>
                <div className="relative pl-6 border-l border-primary/10 space-y-stack-lg">
                  {timeline.map((item, idx) => (
                    <div key={idx} className="relative">
                      <div
                        className={`absolute -left-[31px] top-1 w-4 h-4 rounded-full border-4 border-surface-container-low shadow-sm ${item.color}`}
                      ></div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                        {item.date}
                      </p>
                      <p className="font-body-md text-body-md text-primary font-bold mt-0.5 leading-snug">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
