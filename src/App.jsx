import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import NavBar from "./sections/NavBar.jsx";
import Hero from "./sections/Hero.jsx";
import FirstVideo from "./sections/FirstVideo.jsx";
import Jason from "./sections/Jason.jsx";
import SecondVideo from "./sections/SecondVideo.jsx";
import Lucia from "./sections/Lucia.jsx";
import PostCard from "./sections/PostCard.jsx";
import FinalVideo from "./sections/FinalVideo.jsx";
import OutroSection from "./sections/OutroSection.jsx";

gsap.registerPlugin(ScrollTrigger)


export default function App() {
    return (
        <main>
           <NavBar />
            <Hero />
            <FirstVideo />
            <Jason />
            <SecondVideo />
            <Lucia />
            <PostCard />
            <FinalVideo />
            <OutroSection />
        </main>
    )
}