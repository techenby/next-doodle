export function Features() {
    return (
        <section id="features" className="bg-white">
            <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-amber-600">Features</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All-in-one platform</p>
                </div>

                <dl className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
                    <div className="relative">
                        <dt>
                            <svg className="absolute mt-1 h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <p className="ml-10 text-lg font-semibold leading-8 text-gray-900">Create and Edit Notes</p>
                        </dt>
                        <dd className="mt-2 ml-10 text-base leading-7 text-gray-600">Users can create and edit notes in a variety of formats (text, audio, video, image) and organize them using tags or folders.</dd>
                    </div>

                    <div className="relative">
                        <dt>
                            <svg className="absolute mt-1 h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <p className="ml-10 text-lg font-semibold leading-8 text-gray-900">Real-time Collaboration</p>
                        </dt>
                        <dd className="mt-2 ml-10 text-base leading-7 text-gray-600">Users can collaborate with others in real-time on shared notes or documents, making it easy to work together on a project or assignment.</dd>
                    </div>

                    <div className="relative">
                        <dt>
                            <svg className="absolute mt-1 h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <p className="ml-10 text-lg font-semibold leading-8 text-gray-900">Search Functionality</p>
                        </dt>
                        <dd className="mt-2 ml-10 text-base leading-7 text-gray-600">Users can easily find notes by searching for keywords or phrases, saving time and increasing productivity.</dd>
                    </div>

                    <div className="relative">
                        <dt>
                            <svg className="absolute mt-1 h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <p className="ml-10 text-lg font-semibold leading-8 text-gray-900">Reminders and Notifications</p>
                        </dt>
                        <dd className="mt-2 ml-10 text-base leading-7 text-gray-600">Users can set reminders or receive notifications to help them stay on top of deadlines or important events.</dd>
                    </div>

                    <div className="relative">
                        <dt>
                            <svg className="absolute mt-1 h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <p className="ml-10 text-lg font-semibold leading-8 text-gray-900">Sync Across Devices</p>
                        </dt>
                        <dd className="mt-2 ml-10 text-base leading-7 text-gray-600">Users can access their notes from any device with an internet connection, making it easy to work on-the-go.</dd>
                    </div>

                    <div className="relative">
                        <dt>
                            <svg className="absolute mt-1 h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <p className="ml-10 text-lg font-semibold leading-8 text-gray-900">Security and Privacy</p>
                        </dt>
                        <dd className="mt-2 ml-10 text-base leading-7 text-gray-600">Users can be assured that their notes are kept private and secure, with options for password protection, encryption, and two-factor authentication.</dd>
                    </div>

                    <div className="relative">
                        <dt>
                            <svg className="absolute mt-1 h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <p className="ml-10 text-lg font-semibold leading-8 text-gray-900">Voice-to-Text Transcription</p>
                        </dt>
                        <dd className="mt-2 ml-10 text-base leading-7 text-gray-600">Users can dictate their notes using voice-to-text transcription, saving time and reducing the need for typing.</dd>
                    </div>

                    <div className="relative">
                        <dt>
                            <svg className="absolute mt-1 h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <p className="ml-10 text-lg font-semibold leading-8 text-gray-900">Handwriting Recognition</p>
                        </dt>
                        <dd className="mt-2 ml-10 text-base leading-7 text-gray-600">Users can write notes by hand on a touchscreen device and have them converted to digital text, providing a more natural note-taking experience.</dd>
                    </div>
                </dl>
            </div>
        </section>
    )
}