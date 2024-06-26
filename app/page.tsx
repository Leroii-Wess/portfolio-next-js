import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import Experience from "@/components/ui/Experience";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/ui/Grid";
import Approach from "@/components/ui/Approach";
import RecentProjects from "@/components/ui/RecentProjects";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
