import About from "@/components/about/About";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Opinions from "@/components/Opinions";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { navItems } from "@/data";

export default function Home() {
  return (
    <>
      <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
      <main className="relative sm:px-10 px-5 bg-black-100 flex mx-auto flex-col items-center justify-center overflow-clip selection:bg-purple-400/30 ">
        <div className="max-w-7xl w-full flex flex-col items-center justify-center text-center">
          <FloatingNav navItems={navItems} />
          <Hero />
          <About />
          <RecentProjects />
          <Opinions />
          <Experience />
          <Approach />
          <Footer />
        </div>
      </main>
    </>
  );
}
