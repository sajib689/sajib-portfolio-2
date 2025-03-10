import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./dashboard/ProjectsSection";
import EmailSection from "./components/EmailSection";
import AchievementsSection from "./components/AchievementsSection";
import AnimatedBackground from "@/Animation/AnimatedBackground";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <AnimatedBackground/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
    </main>
  );
}
