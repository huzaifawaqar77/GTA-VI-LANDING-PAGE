import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const FirstVideo = () => {

    useGSAP(() => {
        gsap.set(".first-vd-wrapper", {
            marginTop: "-150vh",
            opacity: 0
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".first-vd-wrapper",
                start: "top top",
                end: "+=200%",
                scrub: true,
                pin: true,
            }
        })

        tl.to(
            '.hero-section'
        , {
                opacity: 0,
                delay: 0.5,
                ease: "power1.inOut"
            })

        tl.to(".first-vd-wrapper", {
            opacity: 1,
            duration: 2,
            ease: "power1.inOut"
        })

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration,
                duration: 3,
                ease: "power1.inOut"
            }, "<")
        }
    }, [])

    const videoRef = useRef(null);
    return (
        <section className={"first-vd-wrapper"}>
            <div className="h-dvh">
                <video
                    ref={videoRef}
                    muted
                    playsInline
                    preload={"auto"}
                    src={"/videos/output1.mp4"}
                    className={"first-vd"}
                />
            </div>
        </section>
    )
}
export default FirstVideo
