import React from 'react'
import Header from "../partials/header.jsx";
import Footer from "../partials/footer.jsx";
import Main from "./main.jsx"

function About() {
  return (
    <div>
       <div className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <div>
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
            </div>
          </div>
          <div className="relative">
            <Header/>

            <div className="mt-[116px]"></div>
            <Main/>

           <Footer/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About