"use client"

const Npm = () => {
  return (
    <div
      onClick={() => navigator.clipboard.writeText("npm install felig-toolkit")}
      className="border-slate-600 relative inline-flex h-11 w-full items-center whitespace-pre rounded-md border pl-4 pr-10 text-sm backdrop-blur-md cursor-pointer"
    >
      <p className="text-slate-300 before:text-slate-400 before:mr-2 before:content-['$'] font-mono hover:text-slate-50">
        {" "}
        npm install felig-toolkit
      </p>
    </div>
  )
}

export default Npm
