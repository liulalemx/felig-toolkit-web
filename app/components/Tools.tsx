"use client"

import { useState } from "react"
import ReactWrapBalancer from "react-wrap-balancer"
import Code from "./Code"

const Tools = () => {
  const [text, setText] = useState<string>("")
  const [transToggle, setTransToggle] = useState<boolean>(false)
  const [stemToggle, setStemToggle] = useState<boolean>(true)
  const [lexToggle, setLexToggle] = useState<boolean>(false)
  const [stpToggle, setStpToggle] = useState<boolean>(false)

  const toggleOff = () => {
    setLexToggle(false)
    setStemToggle(false)
    setStpToggle(false)
    setTransToggle(false)
  }

  const handleChange = (event: any) => {
    setText(event.target.value)
  }

  return (
    <div className="min-h-screen w-full flex flex-col p-16 items-center gap-4">
      <h1
        className="pb-4 font-extrabold tracking-tight text-transparent text-7xl lg:text-8xl  bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60"
        data-aos="fade-down"
      >
        <ReactWrapBalancer>Try the tools</ReactWrapBalancer>
      </h1>

      <div className="flex flex-col">
        {/* Tools */}
        <div className="flex flex-col gap-4 items-center">
          {/* select tool */}
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => {
                toggleOff()
                setTransToggle(true)
              }}
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
            >
              Transliterator
            </button>
            <button
              onClick={() => {
                toggleOff()
                setStemToggle(true)
              }}
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
            >
              Stemmer
            </button>
            <button
              onClick={() => {
                toggleOff()
                setLexToggle(true)
              }}
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900  hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
            >
              Lexical Analyzer
            </button>
            <button
              onClick={() => {
                toggleOff()
                setStpToggle(true)
              }}
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-r border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
            >
              Stopword Remover
            </button>
          </div>

          {/* form */}
          <div className="w-full">
            <div className="mb-6">
              <input
                value={text}
                onChange={handleChange}
                placeholder="Write text"
                type="text"
                id="large-input"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <button className="w-fit justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-10 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group">
              Submit{" "}
            </button>
          </div>
        </div>

        {/* Sample Code */}
        <div>
          <Code
            type={
              lexToggle
                ? "lex"
                : stemToggle
                ? "stem"
                : stpToggle
                ? "stp"
                : "trans"
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Tools
