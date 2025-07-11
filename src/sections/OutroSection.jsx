import React from 'react'
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";

const OutroSection = () => {
    useGSAP(() => {
        gsap.set('.final-message', {
            opacity: 0,
            marginTop: '-100vh'
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.final-message',
                start: "top top",
                end: "top top",
                scrub: true,
                duration: 2
            }
        })

        tl.to('.final', {
            opacity: 0,
            duration: 2,
            ease: 'power1.inOut'
        })

        tl.to('.final-message', {
            opacity: 1,
            duration: 2,
            ease: 'power1.inOut'
        }, "<")


    });
    return (
        <section className={"final-message"}>
            <div className="h-full col-center gap-10">
                <img src={"/images/logo.webp"} alt={"logo"} className={"entrance-logo h-44 w-auto"} />

                <div>
                    <h3 className="gradient-title !mt-0">
                        Coming <br /> 14 August <br /> 2025
                    </h3>
                </div>

                <div className="flex-center gap-10">
                    <img src="/images/ps-logo.svg" alt="logo" className={"md:w-32 w-20"}/>
                    <img src="/images/x-logo.svg" alt="logo" className={"md:w-52 w-40"}/>
                </div>

            </div>

        </section>
    )
}
export default OutroSection
