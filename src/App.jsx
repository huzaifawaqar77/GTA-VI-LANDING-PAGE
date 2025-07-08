import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import NavBar from "./sections/NavBar.jsx";
import Hero from "./sections/Hero.jsx";

gsap.registerPlugin(ScrollTrigger)


export default function App() {
    return (
        <main>
           <NavBar />
            <Hero />
        </main>
    )
}