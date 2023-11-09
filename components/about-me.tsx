import React from 'react'

function AboutMe() {
    return (
        <section id="about" className="pt-36 pb-32 dark:bg-dark">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="mb-10 w-full px-4 lg:w-1/2">
                        <h4 className="mb-3 text-lg font-bold uppercase text-primary">ABOUT ME</h4>
                        <h2 className="mb-5 max-w-md text-3xl font-bold text-dark dark:text-white lg:text-4xl">Crafting Digital Solutions, One Line of Code at a Time</h2>
                        <p className="max-w-xl text-base font-medium text-secondary lg:text-lg">Greetings! I&apos;m Freddy, a passionate freelance software developer on a mission to transform ideas into seamless digital experiences. With a keen eye for detail and a love for elegant solutions, I specialize in turning complex concepts into clean, efficient code.</p>
                    </div>
                    <div className="mb-10 w-full px-4 lg:w-1/2">
                        <h3 className="mb-4 text-2xl font-semibold text-dark dark:text-white lg:pt-10 lg:text-3xl">Tools of the Trade</h3>
                        <p className="mb-6 text-base font-medium text-secondary lg:text-lg">Armed with the latest technologies and always eager to explore new horizons, I am proficient in languages such as [List of Programming Languages], frameworks like [Frameworks You Specialize In], and version control systems. I believe in staying ahead of the curve to provide my clients with innovative and future-proof solutions.</p>
                    </div>
                    <div className="mb-10 w-full px-4 lg:w-1/2">
                        <h3 className="mb-4 text-2xl font-semibold text-dark dark:text-white lg:pt-10 lg:text-3xl">Collaborative Approach</h3>
                        <p className="mb-6 text-base font-medium text-secondary lg:text-lg">I understand that effective communication is the cornerstone of successful projects. I thrive on collaboration, working closely with clients to understand their unique needs and translating those requirements into functional, scalable solutions. Your project isn&apos;t just a job for me; it&apos;s a partnership aimed at achieving excellence.</p>
                    </div>
                    <div className="mb-10 w-full px-4 lg:w-1/2">
                        <h3 className="mb-4 text-2xl font-semibold text-dark dark:text-white lg:pt-10 lg:text-3xl">Why Choose Me</h3>
                        <p className="mb-6 text-base font-medium text-secondary lg:text-lg">Quality Assurance: I&apos;m dedicated to delivering code that not only meets but exceeds industry standards.
                            Timely Delivery: Your time is valuable, and I respect deadlines as much as you do.
                            Adaptability: From small tweaks to major overhauls, I&apos;m adaptable to project changes and feedback.</p>
                    </div>
                    <div className="mb-10 w-full px-4 lg:w-1/2">
                        <h3 className="mb-4 text-2xl font-semibold text-dark dark:text-white lg:pt-10 lg:text-3xl">Expertise</h3>
                        <p className="mb-6 text-base font-medium text-secondary lg:text-lg">I bring to the table a diverse skill set, ranging from front-end development using cutting-edge frameworks to robust back-end solutions. My proficiency extends to database management, API integrations, and a knack for troubleshooting to ensure a smooth user experience.</p>
                    </div>

                    <div className="w-full px-4 lg:w-1/2">
                        <h3 className="mb-4 text-2xl font-semibold text-dark dark:text-white lg:pt-10 lg:text-3xl">Let&apos;s Connect</h3>
                        <p className="mb-6 text-base font-medium text-secondary lg:text-lg">
                            I&apos;m excited about the possibility of collaborating on your next project. Whether you have a detailed roadmap or just the spark of an idea, let&apos;s discuss how we can turn it into a digital reality. Feel free to reach out at freddymuleya16@gmail.com or connect with me on
                        </p>
                        <div className="flex items-center">

                            <a
                                href="https://youtube.com/freddymuleya16"
                                target="_blank"
                                className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                            >
                                <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title>YouTube</title>
                                    <path
                                        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                                    />
                                </svg>
                            </a>


                            <a
                                href="https://instagram.com/freddy_muleya"
                                target="_blank"
                                className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                            >
                                <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title>Instagram</title>
                                    <path
                                        d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                                    />
                                </svg>
                            </a>
 
                            <a
                                href="https://tiktok.com/@freddy_muleya1"
                                target="_blank"
                                className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                            >
                                <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title>TikTok</title>
                                    <path
                                        d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                                    />
                                </svg>
                            </a>


                            <a
                                href="https://linkedin.com/in/freddymuleya16"
                                target="_blank"
                                className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                            >
                                <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title>LinkedIn</title>
                                    <path
                                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe