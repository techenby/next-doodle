export function Faq({ faq }) {
    return (
        <section id="faq">
            <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-amber-600">Frequently Asked Questions</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We've answered all your burning questions. Hopefully.</p>
                </div>
                <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
                    {faq.map(entry => (
                    <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                        <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{entry.title}</dt>
                        <dd className="mt-4 lg:col-span-7 lg:mt-0">
                            <p className="text-base leading-7 text-gray-600">{entry.description}</p>
                        </dd>
                    </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}