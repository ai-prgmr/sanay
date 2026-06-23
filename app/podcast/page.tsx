"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Episode {
  id: number;
  number: string;
  title: string;
  guest: string;
  guestRole: string;
  guestBio: string;
  date: string;
  duration: string;
  audioUrl: string;
  summary: string;
  takeaways: string[];
}

const EPISODES: Episode[] = [
  {
    id: 1,
    number: "EPISODE 03",
    title: "The Aerodynamics of Capital Allocations",
    guest: "Dr. Evelyn Vance",
    guestRole: "Venture Partner at Apex Tech & Aero-Engineer",
    guestBio: "Dr. Evelyn Vance has over 15 years of experience in aerodynamics research before transitioning to deep-tech venture capital. She specializes in quantitative modeling and pre-seed valuation of engineering-heavy startups.",
    date: "May 12, 2026",
    duration: "42:15",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    summary: "Can computational fluid dynamics (CFD) help us understand investment flows? In this episode, we explore the surprising mathematical parallels between fluid drag in Formula racing and capital drag in illiquid markets, exploring how flow-optimization principles apply directly to venture portfolio management.",
    takeaways: [
      "Mathematical similarities between Navier-Stokes fluid models and macroeconomic capital flow vectors.",
      "How early-stage deep-tech startups optimize their runway under extreme market constraints, similar to aerodynamic drag reduction.",
      "Designing investment portfolios to minimize capital turbulence during periods of high market volatility."
    ]
  },
  {
    id: 2,
    number: "EPISODE 02",
    title: "From R&D to High-Performance Teams",
    guest: "Marcus Thorne",
    guestRole: "Former Team Manager, Alpine Academy",
    guestBio: "Marcus Thorne spent a decade coaching elite drivers and managing engineering divisions in junior Formula series. He now works as a corporate consultant, training corporate leadership teams on agile development under pressure.",
    date: "April 18, 2026",
    duration: "38:40",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    summary: "How do you construct high-performance engineering teams that deliver zero-margin-of-error designs in days? Marcus Thorne joins us to dissect the team dynamics from F1 in Schools up to professional racing academies, revealing the leadership principles that translate directly to financial analysis and corporate strategy.",
    takeaways: [
      "Building a culture of psychological safety where micro-failures are instantly diagnosed and solved.",
      "The role of clear role differentiation (e.g., Head of R&D vs. Team Manager) in maintaining focus.",
      "Applying the agile racing pit-stop mentality to quarter-end financial auditing."
    ]
  },
  {
    id: 3,
    number: "EPISODE 01",
    title: "The Art of the Pitch: Securing Corporate Sponsorships",
    guest: "Sarah Jenkins",
    guestRole: "VP of Partnerships at Velocity Group",
    guestBio: "Sarah Jenkins is a business development specialist who has closed over $50M in sponsorships and corporate partnerships across motorsports, tech, and educational programs.",
    date: "March 24, 2026",
    duration: "31:05",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    summary: "Securing major corporate funding is the lifeblood of any competitive team or startup. In this premiere episode, we detail the exact sponsorship framework and financial models that student teams use to pitch Fortune 500 companies, discussing value proposition alignment and partner relationship management.",
    takeaways: [
      "Reframing a sponsorship request from a 'charity donation' to a strategic B2B marketing alignment.",
      "The precise structure of a high-converting pitch deck and the critical financial indicators sponsors look for.",
      "Post-sponsorship accountability: keeping partners engaged and documenting ROI."
    ]
  }
];

export default function PodcastPage() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.8);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<HTMLInputElement | null>(null);

  const activeEpisode = EPISODES[activeIdx];

  // Sync state on source audio change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      setCurrentTime(0);
      setDuration(0);
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      }
    }
  }, [activeIdx]);

  // Toggle play/pause
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.error("Audio playback error:", err);
          setIsPlaying(false);
        });
    }
  };

  // Change active episode and play immediately
  const handleSelectEpisode = (index: number) => {
    setActiveIdx(index);
    setIsPlaying(true);
  };

  // Handle seek
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setCurrentTime(val);
    if (audioRef.current) {
      audioRef.current.currentTime = val;
    }
  };

  // Format time (e.g. 125 -> 02:05)
  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs === 0) return "00:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // Mute toggle
  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMuteState = !isMuted;
    audioRef.current.muted = nextMuteState;
    setIsMuted(nextMuteState);
  };

  // Update volume
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
      audioRef.current.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  return (
    <main className="relative z-10 pt-32 pb-section-gap">
      {/* Dynamic Keyframe style for visualizer */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-bar {
          0%, 100% { height: 4px; }
          50% { height: 28px; }
        }
        .animate-bar-1 { animation: bounce-bar 0.9s ease-in-out infinite; }
        .animate-bar-2 { animation: bounce-bar 0.6s ease-in-out infinite 0.25s; }
        .animate-bar-3 { animation: bounce-bar 0.8s ease-in-out infinite 0.1s; }
        .animate-bar-4 { animation: bounce-bar 0.7s ease-in-out infinite 0.4s; }
        .animate-bar-5 { animation: bounce-bar 0.5s ease-in-out infinite 0.15s; }
      `}} />

      {/* Audio element */}
      <audio
        ref={audioRef}
        src={activeEpisode.audioUrl}
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration);
          }
        }}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
        }}
      />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Editorial Header */}
        <header className="mb-stack-lg animate-fade-in-up">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-px bg-secondary"></div>
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">
              AUDIO EXPERIENCE
            </span>
          </div>
          <h1 className="font-display text-headline-lg-mobile md:text-display text-primary">
            The Velocity Podcast
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl leading-relaxed">
            Where high-performance engineering meets strategic finance. We explore the crossover between technical optimization, venture development, and quantitative analysis.
          </p>
        </header>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mt-stack-lg items-start">
          {/* Main Player & Show Notes - Left 8 Columns */}
          <div className="lg:col-span-8 space-y-gutter">
            
            {/* Custom Interactive Audio Player Card */}
            <section className="glass-card rounded-xl p-stack-lg border-t-2 border-t-secondary relative overflow-hidden shadow-sm hover:shadow-xl transition-premium">
              <div className="flex flex-col gap-6">
                
                {/* Player Header (Metadata) */}
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-label-sm font-bold uppercase tracking-wider">
                      {activeEpisode.number}
                    </span>
                    <h2 className="font-headline-md text-headline-md text-primary pt-2">
                      {activeEpisode.title}
                    </h2>
                    <p className="text-on-surface-variant font-label-md">
                      with guest <strong className="text-secondary">{activeEpisode.guest}</strong>
                    </p>
                  </div>
                  
                  {/* Equalizer Graphic Indicator */}
                  <div className="flex items-end gap-1 h-8 w-12 justify-center shrink-0">
                    <span className={`w-1 bg-secondary rounded-full ${isPlaying ? "animate-bar-1" : "h-1"}`}></span>
                    <span className={`w-1 bg-secondary rounded-full ${isPlaying ? "animate-bar-2" : "h-[6px]"}`}></span>
                    <span className={`w-1 bg-secondary rounded-full ${isPlaying ? "animate-bar-3" : "h-[4px]"}`}></span>
                    <span className={`w-1 bg-secondary rounded-full ${isPlaying ? "animate-bar-4" : "h-[8px]"}`}></span>
                    <span className={`w-1 bg-secondary rounded-full ${isPlaying ? "animate-bar-5" : "h-[3px]"}`}></span>
                  </div>
                </div>

                {/* Progress Controls */}
                <div className="space-y-2">
                  <input
                    ref={progressRef}
                    type="range"
                    min={0}
                    max={duration || 100}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-secondary"
                  />
                  <div className="flex justify-between text-label-sm font-body-md text-outline font-semibold">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Player Control Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-outline/10">
                  <div className="flex items-center gap-4">
                    {/* Big Play Button */}
                    <button
                      onClick={togglePlay}
                      className="w-14 h-14 bg-primary text-on-primary hover:bg-secondary rounded-full flex items-center justify-center shadow-md active:scale-95 transition-all select-none cursor-pointer"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      <span className="material-symbols-outlined text-3xl font-fill text-white">
                        {isPlaying ? "pause" : "play_arrow"}
                      </span>
                    </button>
                    <div>
                      <span className="text-label-sm text-outline block uppercase tracking-wider font-semibold">Status</span>
                      <span className="font-bold text-primary text-body-md">
                        {isPlaying ? "Now Playing" : "Paused"}
                      </span>
                    </div>
                  </div>

                  {/* Volume Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={toggleMute}
                      className="text-on-surface-variant hover:text-secondary p-1 cursor-pointer"
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      <span className="material-symbols-outlined text-2xl">
                        {isMuted || volume === 0 ? "volume_off" : "volume_up"}
                      </span>
                    </button>
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.05}
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-24 h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-secondary"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Episode Summary & Show Notes */}
            <article className="glass-card rounded-xl p-stack-lg space-y-6">
              <div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">
                  Episode Synopsis
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {activeEpisode.summary}
                </p>
              </div>

              <div className="border-t border-outline/10 pt-6">
                <h3 className="font-headline-md text-headline-md text-primary mb-4">
                  Key Takeaways
                </h3>
                <ul className="space-y-3">
                  {activeEpisode.takeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span
                        className="material-symbols-outlined text-secondary text-xl select-none shrink-0"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      <span className="text-body-md text-on-surface leading-relaxed">
                        {takeaway}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Guest Card */}
              <div className="border-t border-outline/10 pt-6">
                <div className="p-4 bg-surface-container-low rounded-lg flex flex-col md:flex-row gap-stack-md items-start">
                  <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary text-2xl">
                      person
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-body-md">
                      Featured Guest: {activeEpisode.guest}
                    </h4>
                    <p className="text-label-sm text-secondary font-semibold uppercase tracking-wider mb-2">
                      {activeEpisode.guestRole}
                    </p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {activeEpisode.guestBio}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Episode List & Host Profile - Right 4 Columns */}
          <div className="lg:col-span-4 space-y-gutter">
            
            {/* Host Card */}
            <section className="glass-card rounded-xl p-stack-lg hover:shadow-md transition-premium">
              <div className="flex items-center gap-stack-sm mb-4">
                <span className="material-symbols-outlined text-secondary">
                  mic
                </span>
                <h3 className="font-headline-md text-[18px] text-primary">
                  Meet the Host
                </h3>
              </div>
              <div className="space-y-stack-sm">
                <h4 className="font-bold text-primary">Sanay Choubey</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Sanay is a finance student and engineering enthusiast who leverages high-performance team principles to analyze modern markets. Through this podcast, he brings together leaders across deep-tech, athletics, and strategic finance.
                </p>
              </div>
            </section>

            {/* Episode Queue / List */}
            <section className="glass-card rounded-xl p-stack-lg hover:shadow-md transition-premium">
              <h3 className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-6 border-b border-outline/10 pb-2 font-semibold">
                Episode Archive
              </h3>
              
              <div className="space-y-4">
                {EPISODES.map((ep, index) => {
                  const isActive = index === activeIdx;
                  return (
                    <div
                      key={ep.id}
                      onClick={() => handleSelectEpisode(index)}
                      className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer flex flex-col gap-1 ${
                        isActive
                          ? "bg-secondary/5 border-secondary/40 shadow-sm"
                          : "border-outline/10 hover:bg-surface-container-low hover:border-outline/20"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className={`text-[10px] font-bold tracking-wider ${isActive ? "text-secondary" : "text-outline"}`}>
                          {ep.number}
                        </span>
                        <div className="flex items-center gap-1.5 text-[10px] text-outline font-semibold">
                          <span className="material-symbols-outlined text-xs">schedule</span>
                          {ep.duration}
                        </div>
                      </div>
                      
                      <h4 className={`text-sm font-bold line-clamp-2 mt-1 leading-snug ${isActive ? "text-secondary" : "text-primary"}`}>
                        {ep.title}
                      </h4>
                      
                      <p className="text-[12px] text-on-surface-variant line-clamp-2 mt-1">
                        {ep.summary}
                      </p>
                      
                      <div className="flex items-center gap-1 mt-2 text-[10px] font-semibold text-secondary">
                        <span className="material-symbols-outlined text-xs font-fill">play_arrow</span>
                        <span>{isActive ? "Currently Playing" : "Click to Listen"}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
