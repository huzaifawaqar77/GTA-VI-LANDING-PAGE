import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import NavBar from "./sections/NavBar.jsx";
import Hero from "./sections/Hero.jsx";
import FirstVideo from "./sections/FirstVideo.jsx";

gsap.registerPlugin(ScrollTrigger)


export default function App() {
    return (
        <main>
           <NavBar />
            <Hero />
            <FirstVideo />
        </main>
    )
}