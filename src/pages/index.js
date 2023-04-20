export default function Home() {
  return (
    <main>
      <section id="hero">
        <div class="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 pb-16 sm:pb-24">
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block xl:inline">Capture your ideas with Doodle</span>
            </h1>
            <p class="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">Effortlessly take notes and stay on top of your tasks with out missing a beat.</p>
          </div>
        </div>
      </section>

      <section id="features" class="bg-white">
        <div class="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8 lg:py-40">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-lg font-semibold leading-8 tracking-tight text-amber-600">Features</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All-in-one platform</p>
          </div>

          <dl class="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
            <div class="relative">
              <dt>
                <svg class="absolute mt-1 h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p class="ml-10 text-lg font-semibold leading-8 text-gray-900">Create and Edit Notes</p>
              </dt>
              <dd class="mt-2 ml-10 text-base leading-7 text-gray-600">Users can create and edit notes in a variety of formats (text, audio, video, image) and organize them using tags or folders.</dd>
            </div>

            <div class="relative">
              <dt>
                <svg class="absolute mt-1 h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p class="ml-10 text-lg font-semibold leading-8 text-gray-900">Real-time Collaboration</p>
              </dt>
              <dd class="mt-2 ml-10 text-base leading-7 text-gray-600">Users can collaborate with others in real-time on shared notes or documents, making it easy to work together on a project or assignment.</dd>
            </div>

            <div class="relative">
              <dt>
                <svg class="absolute mt-1 h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p class="ml-10 text-lg font-semibold leading-8 text-gray-900">Search Functionality</p>
              </dt>
              <dd class="mt-2 ml-10 text-base leading-7 text-gray-600">Users can easily find notes by searching for keywords or phrases, saving time and increasing productivity.</dd>
            </div>

            <div class="relative">
              <dt>
                <svg class="absolute mt-1 h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p class="ml-10 text-lg font-semibold leading-8 text-gray-900">Reminders and Notifications</p>
              </dt>
              <dd class="mt-2 ml-10 text-base leading-7 text-gray-600">Users can set reminders or receive notifications to help them stay on top of deadlines or important events.</dd>
            </div>

            <div class="relative">
              <dt>
                <svg class="absolute mt-1 h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p class="ml-10 text-lg font-semibold leading-8 text-gray-900">Sync Across Devices</p>
              </dt>
              <dd class="mt-2 ml-10 text-base leading-7 text-gray-600">Users can access their notes from any device with an internet connection, making it easy to work on-the-go.</dd>
            </div>

            <div class="relative">
              <dt>
                <svg class="absolute mt-1 h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p class="ml-10 text-lg font-semibold leading-8 text-gray-900">Security and Privacy</p>
              </dt>
              <dd class="mt-2 ml-10 text-base leading-7 text-gray-600">Users can be assured that their notes are kept private and secure, with options for password protection, encryption, and two-factor authentication.</dd>
            </div>

            <div class="relative">
              <dt>
                <svg class="absolute mt-1 h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p class="ml-10 text-lg font-semibold leading-8 text-gray-900">Voice-to-Text Transcription</p>
              </dt>
              <dd class="mt-2 ml-10 text-base leading-7 text-gray-600">Users can dictate their notes using voice-to-text transcription, saving time and reducing the need for typing.</dd>
            </div>

            <div class="relative">
              <dt>
                <svg class="absolute mt-1 h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p class="ml-10 text-lg font-semibold leading-8 text-gray-900">Handwriting Recognition</p>
              </dt>
              <dd class="mt-2 ml-10 text-base leading-7 text-gray-600">Users can write notes by hand on a touchscreen device and have them converted to digital text, providing a more natural note-taking experience.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="testimonials" class="bg-gray-100 py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-lg font-semibold leading-8 tracking-tight text-amber-600">Testimonials</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Folks who love taking notes with Doodle</p>
          </div>
          <div class="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div class="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              <div class="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure class="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote class="text-gray-900">
                    <p>“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.”</p>
                  </blockquote>
                  <figcaption class="mt-6 flex items-center gap-x-4">
                    <img class="h-10 w-10 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                      <div>
                        <div class="font-semibold text-gray-900">Leslie Alexander</div>
                        <div class="text-gray-600">@lesliealexander</div>
                      </div>
                  </figcaption>
                </figure>
              </div>

              <!-- More testimonials... -->
            </div>
          </div>
        </div>
      </section>

      <section id="blog" class="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
        <div class="absolute inset-0">
          <div class="h-1/3 bg-white sm:h-2/3"></div>
        </div>
        <div class="relative mx-auto max-w-7xl">
          <div class="text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
            <p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.</p>
          </div>
          <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div class="flex-shrink-0">
                <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">
              </div>
              <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
                  <p class="text-sm font-medium text-amber-600">
                    <a href="#" class="hover:underline">Tips & Tricks</a>
                  </p>
                  <a href="#" class="mt-2 block">
                    <p class="text-xl font-semibold text-gray-900">10 Tips for Taking Better Notes and Boosting Your Productivity</p>
                    <p class="mt-3 text-base line-clamp-4 text-gray-500">Are you tired of taking sloppy notes that you can't decipher later? Do you feel like you're always missing important details in meetings or lectures? Our note-taking app can help! In this blog post, we'll share our top 10 tips for taking better notes and staying organized, so you can boost your productivity and achieve your goals.</p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <a href="#">
                      <span class="sr-only">Roel Aufderehar</span>
                      <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                    </a>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#" class="hover:underline">Roel Aufderehar</a>
                    </p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time datetime="2020-03-16">Mar 16, 2020</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>6 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div class="flex-shrink-0">
                <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">
              </div>
              <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
                  <p class="text-sm font-medium text-amber-600">
                    <a href="#" class="hover:underline">Video</a>
                  </p>
                  <a href="#" class="mt-2 block">
                    <p class="text-xl font-semibold text-gray-900">Why Real-time Collaboration is the Future of Note-Taking</p>
                    <p class="mt-3 text-base line-clamp-4 text-gray-500">Gone are the days of emailing files back and forth or relying on sticky notes to communicate with colleagues. With our note-taking app's real-time collaboration feature, you can work with others on shared notes or documents in real-time, from anywhere in the world. In this blog post, we'll explore why real-time collaboration is the future of note-taking and how it can revolutionize the way you work.</p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <a href="#">
                      <span class="sr-only">Brenna Goyette</span>
                      <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                    </a>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#" class="hover:underline">Brenna Goyette</a>
                    </p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time datetime="2020-03-10">Mar 10, 2020</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>4 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div class="flex-shrink-0">
                <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">
              </div>
              <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
                  <p class="text-sm font-medium text-amber-600">
                    <a href="#" class="hover:underline">Article</a>
                  </p>
                  <a href="#" class="mt-2 block">
                    <p class="text-xl font-semibold text-gray-900">Protect Your Notes and Privacy with Our Secure Note-Taking App</p>
                    <p class="mt-3 line-clamp-4 text-base text-gray-500">Are you worried about your notes falling into the wrong hands? Do you want to ensure that your private thoughts and ideas remain secure? Our note-taking app has a range of security features, including password protection, encryption, and two-factor authentication, so you can rest easy knowing that your notes are safe. In this blog post, we'll discuss why security and privacy are essential for note-taking and how our app can help you keep your notes protected.</p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <a href="#">
                      <span class="sr-only">Daniela Metz</span>
                      <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                    </a>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#" class="hover:underline">Daniela Metz</a>
                    </p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time datetime="2020-02-12">Feb 12, 2020</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>11 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <div class="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-lg font-semibold leading-8 tracking-tight text-amber-600">Frequently Asked Questions</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We've answered all your burning questions. Hopefully.</p>
          </div>
          <dl class="mt-10 space-y-8 divide-y divide-gray-900/10">
            <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt class="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">Is this a real app?</dt>
              <dd class="mt-4 lg:col-span-7 lg:mt-0">
                <p class="text-base leading-7 text-gray-600">No this is a example Laravel application built by the lovely folks at Tighten to showcase various implementations of CoilPack for Expression Engine.</p>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  )
}
