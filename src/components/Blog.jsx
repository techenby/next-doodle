export function Blog() {
    return (
        <section id="blog" className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
            <div className="absolute inset-0">
                <div className="h-1/3 bg-white sm:h-2/3"></div>
            </div>
            <div className="relative mx-auto max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                    <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.</p>
                </div>
                <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                        <div className="flex-shrink-0">
                            <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="" />
                        </div>
                        <div className="flex flex-1 flex-col justify-between bg-white p-6">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-amber-600">
                                    <a href="#" className="hover:underline">Tips & Tricks</a>
                                </p>
                                <a href="#" className="mt-2 block">
                                    <p className="text-xl font-semibold text-gray-900">10 Tips for Taking Better Notes and Boosting Your Productivity</p>
                                    <p className="mt-3 text-base line-clamp-4 text-gray-500">Are you tired of taking sloppy notes that you can't decipher later? Do you feel like you're always missing important details in meetings or lectures? Our note-taking app can help! In this blog post, we'll share our top 10 tips for taking better notes and staying organized, so you can boost your productivity and achieve your goals.</p>
                                </a>
                            </div>
                            <div className="mt-6 flex items-center">
                                <div className="flex-shrink-0">
                                    <a href="#">
                                        <span className="sr-only">Roel Aufderehar</span>
                                        <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    </a>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">
                                        <a href="#" className="hover:underline">Roel Aufderehar</a>
                                    </p>
                                    <div className="flex space-x-1 text-sm text-gray-500">
                                        <time datetime="2020-03-16">Mar 16, 2020</time>
                                        <span aria-hidden="true">&middot;</span>
                                        <span>6 min read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}