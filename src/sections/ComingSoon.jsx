import React from 'react'

const ComingSoon = () => {
    return (
        <section className={"entrance-message"}>
            <div className="h-full col-center gap-10">
                <img src={"/images/logo.webp"} alt={"logo"} className={"entrance-logo "} />

                <div className={"text-wrap mt-24"}>
                    <h3 className="gradient-title !important font-2xl">
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
export default ComingSoon
