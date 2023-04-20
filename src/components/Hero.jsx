export function Hero({ heading, subheading }) {
    return (
        <section id="hero">
            <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 pb-16 sm:pb-24">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">{heading}</span>
                    </h1>
                    <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">{subheading}</p>
                </div>
            </div>
        </section>
    )
}