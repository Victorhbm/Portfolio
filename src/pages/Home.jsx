import Header from "../components/Header";
import SectionAbout from "../components/SectionAbout";

export default function Home() {
  return (
    <div className="font-inter">
      <div className="min-h-screen bg-dark text-light">
        <Header />
        <SectionAbout />
      </div>
    </div>
  )
}