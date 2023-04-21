export function Features({ features }) {
    return (
        <section id="features" className="bg-white">
            <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-amber-600">Features</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All-in-one platform</p>
                </div>

                <dl className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
                    {features.map(feature => (
                    <div key={feature.entry_id} className="relative">
                        <dt>
                            <svg className="absolute mt-1 h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <p className="ml-10 text-lg font-semibold leading-8 text-gray-900">{feature.title}</p>
                        </dt>
                        <dd className="mt-2 ml-10 text-base leading-7 text-gray-600">{feature.description}</dd>
                    </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}