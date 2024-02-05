import Navbar from "./components/navbar";
import Bio from "@/components/bio";
import SelectedWork from "@/components/selected-work";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Bio/>
      <Skills/>
      <SelectedWork/>
      
    </div>
  );
}
