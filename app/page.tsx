import Image from "next/image"
import Link from "next/link"
import ReactWrapBalancer from "react-wrap-balancer"
import React from "react"
import Npm from "./components/Npm"
import Tools from "./components/Tools"

const GITHUB_URL = "https://github.com/liulalemx/felig-toolkit"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      {/* Navbar */}
      <nav className="flex px-2 md:px-16 h-[80px] items-center justify-between md:h-[100px] w-full">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-slate-200 text-2xl font-bold">
            <p className="text-center">
              🔧 felig <span className="text-sky-600">toolkit</span>
            </p>
          </Link>
        </div>

        {/* Menu */}
        <div className="flex items-center">
          <div className="inline-flex items-center justify-center">
            <Link
              href={"#demo"}
              className="w-full px-2 text-slate-300 inline-flex h-8 items-center justify-center rounded-md text-sm hover:text-slate-12 hover:bg-white/10 outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/20"
            >
              Try Tools
            </Link>
          </div>

          <span
            aria-hidden="true"
            className="bg-slate-700 mx-2 hidden h-5 w-px sm:!inline-block"
          />

          <div className="inline-flex items-center justify-center">
            <Link
              href={GITHUB_URL}
              className="w-full px-2 text-slate-300 inline-flex h-8 items-center justify-center rounded-md text-sm hover:text-slate-12 hover:bg-white/10 outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section>
        <div className="relative max-w-6xl min-h-screen px-4 mx-auto sm:px-6">
          <div className="pt-16 pb-16 md:pt-24 md:pb-32">
            {/* Hero content */}
            <div className="container mx-auto text-center">
              <div className="mb-6" data-aos="fade-down">
                <div className="relative inline-flex before:absolute before:inset-0 ">
                  <Link
                    className="px-3 py-1 text-sm font-medium inline-flex items-center justify-center border border-transparent rounded-full  text-zinc-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.primary.900),_theme(colors.primary.900))_padding-box,_conic-gradient(theme(colors.primary.400),_theme(colors.primary.700)_25%,_theme(colors.primary.700)_75%,_theme(colors.primary.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-zinc-800/30 before:rounded-full before:pointer-events-none"
                    href="https://github.com/chronark/highstorm"
                  >
                    <span className="relative inline-flex items-center">
                      Felig Toolkit now supports typescript{" "}
                      <span className="text-sky-500 px-1 inline-flex">
                        v2.0.0
                      </span>{" "}
                      <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                        -&gt;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <h1
                className="pb-4 font-extrabold tracking-tight text-transparent text-7xl lg:text-8xl  bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60"
                data-aos="fade-down"
              >
                <ReactWrapBalancer>Felig Toolkit</ReactWrapBalancer>
              </h1>
              <p
                className="mb-8 text-lg text-zinc-300"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                A toolset for Amharic language pre-processing
              </p>
              <div
                className="flex flex-col items-center max-w-xs mx-auto gap-4 sm:max-w-none  sm:justify-center sm:flex-row sm:inline-flex"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <Link
                  className="w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                  href="https://github.com/liulalemx/felig-toolkit#readme"
                >
                  Learn More{" "}
                  <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>

                <Npm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section id="demo" className="w-full">
        <Tools />
      </section>
    </main>
  )
}
