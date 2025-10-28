import Image from "next/image";
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/Home";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Certificate from "@/components/Certificate";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="flex">
      <Navbar />
      <main className="w-full ">
        <HomeSection/>
        <Education />
        <Skills />
        <Projects />
        <Certificate />
        <Footer />
      </main>
    </div>
  );
}
