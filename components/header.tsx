"use client";
import React from 'react'

export default function Header() {

    const toggleMenu = () => {
        const hamburger = document.querySelector('#hamburger') as Element;
        const navMenu = document.querySelector('#nav-menu') as Element;

        hamburger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
    }

    const toggleDarkTheme = () => {
        const darkToggle = document.querySelector('#dark-toggle') as HTMLInputElement;
        const html = document.querySelector('html');

        if (darkToggle.checked) {
            html!.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            html!.classList.remove('dark');
            localStorage.theme = 'light';
        }

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            darkToggle!.checked = true;
        } else {
            darkToggle!.checked = false;
        }
    }
    return (
        <header className="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent">
            <div className="container">
                <div className="relative flex items-center justify-between">
                    <div className="px-4">
                        <a href="#home" className="block py-6 text-lg font-bold text-primary">Freddy Muleya</a>
                    </div>
                    <div className="flex items-center px-4">
                        <button onClick={toggleMenu} id="hamburger" name="hamburger" type="button" className="absolute right-4 block lg:hidden">
                            <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
                        </button>

                        <nav
                            id="nav-menu"
                            className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent"
                        >
                            <ul className="block lg:flex">
                                <li className="group">
                                    <a href="#home" className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">Home</a>
                                </li>
                                <li className="group">
                                    <a href="#about" className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">About Me</a>
                                </li>
                                <li className="group">
                                    <a href="#portfolio" className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">Portfolio</a>
                                </li>
                                <li className="group">
                                    <a href="#contact" className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">Contact</a>
                                </li>
                                <li className="mt-3 flex items-center pl-8 lg:mt-0">
                                    <div className="flex">
                                        <span className="mr-2 text-sm text-slate-500">light</span>
                                        <input type="checkbox" className="hidden" id="dark-toggle" onClick={toggleDarkTheme} />
                                        <label htmlFor="dark-toggle">
                                            <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                                                <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"></div>
                                            </div>
                                        </label>
                                        <span className="ml-2 text-sm text-slate-500">dark</span>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
