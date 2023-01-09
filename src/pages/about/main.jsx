import React, { useState, useEffect } from "react";
import { db } from "../../config/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import {
  Twitter,
  Instagram,
  GitHub,
  LinkedIn,
  Email,
} from "@mui/icons-material";

function Main() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const getAbout = async () => {
      const data = await getDocs(collection(db, "about"));
      setAbout(data.docs.map((doc) => ({ ...doc.data(), id: doc.od })));
    };
    getAbout();
  }, []);

  return (
    <main>
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                  <div className="max-w-xs px-2.5 lg:max-w-none">
                    <img
                      alt=""
                      sizes="(min-width: 1024px) 32rem, 20rem"
                      src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&w=1080&q=75"
                      width="800"
                      height="800"
                      decoding="async"
                      data-nimg="1"
                      className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 text-transparent"
                      loading="lazy"
                    />
                  </div>
                </div>
                {about.map((about, i) => {
                  return (
                    <div className="lg:order-first lg:row-span-2">
                      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        {about.title}
                      </h1>
                      <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                        <p>
                         {about.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
                <div className="lg:pl-20">
                  <ul>
                    <li className="flex">
                      <a
                        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                        href="/about#"
                      >
                        <Twitter className="text-gray-400" />
                        <span className="ml-4">Follow on Twitter</span>
                      </a>
                    </li>
                    <li className="mt-4 flex">
                      <a
                        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                        href="/about#"
                      >
                        <Instagram className="text-gray-400" />
                        <span className="ml-4">Follow on Instagram</span>
                      </a>
                    </li>
                    <li className="mt-4 flex">
                      <a
                        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                        href="/about#"
                      >
                        <GitHub className="text-gray-400" />
                        <span className="ml-4">Follow on GitHub</span>
                      </a>
                    </li>
                    <li className="mt-4 flex">
                      <a
                        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                        href="/about#"
                      >
                        <LinkedIn className="text-gray-400" />
                        <span className="ml-4">Follow on LinkedIn</span>
                      </a>
                    </li>
                    <li className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
                      <a
                        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                        href="mailto:spencer@planetaria.tech"
                      >
                        <Email className="text-gray-400" />
                        <span className="ml-4">lazarusosilawal@gmail.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
