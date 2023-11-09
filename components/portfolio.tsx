import React from 'react'

function Portfolio() {
    return<></>
    return (
        <section id="portfolio" className="bg-slate-100 pt-36 pb-16 dark:bg-slate-800">
            <div className="container">
                <div className="w-full px-4">
                    <div className="mx-auto mb-16 max-w-xl text-center">
                        <h4 className="mb-2 text-lg font-semibold text-primary">Portfolio</h4>
                        <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">Latest Projects</h2>
                        <p className="text-md font-medium text-secondary md:text-lg">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus porro consequuntur alias, commodi nemo enim aliquam ipsam obcaecati? Assumenda, ipsam?
                        </p>
                    </div>
                </div>

                <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
                    <div className="mb-12 p-4 md:w-1/2">
                        <div className="overflow-hidden rounded-md shadow-md">
                            <img src="/img/portfolio/1.png" alt="Landing Page" width="w-full" />
                        </div>
                        <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">Landing Page freddy Muleya</h3>
                        <p className="text-base font-medium text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.</p>
                    </div>
                    <div className="mb-12 p-4 md:w-1/2">
                        <div className="overflow-hidden rounded-md shadow-md">
                            <img src="/img/portfolio/2.png" alt="E-Commerce" width="w-full" />
                        </div>
                        <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">E-Commerce</h3>
                        <p className="text-base font-medium text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.</p>
                    </div>
                    <div className="mb-12 p-4 md:w-1/2">
                        <div className="overflow-hidden rounded-md shadow-md">
                            <img src="/img/portfolio/3.png" alt="Technical Documentation" width="w-full" />
                        </div>
                        <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">Technical Documentation</h3>
                        <p className="text-base font-medium text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.</p>
                    </div>
                    <div className="mb-12 p-4 md:w-1/2">
                        <div className="overflow-hidden rounded-md shadow-md">
                            <img src="/img/portfolio/4.png" alt="Tribute Page" width="w-full" />
                        </div>
                        <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">Tribute Page</h3>
                        <p className="text-base font-medium text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio