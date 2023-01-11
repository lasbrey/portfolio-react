import React, { useState, useEffect } from "react";
import { db } from "../../config/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import {
  Twitter,
  Instagram,
  GitHub,
  LinkedIn,
  HomeRepairService,
  ArrowDownward
} from "@mui/icons-material";

function Landing() {
  const [posts, setPosts] = useState([]);
  const [bio, setBio] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const getData = async (collectionName) => {
      const data = await getDocs(collection(db, collectionName));
      return data.docs.map((doc) => ({ ...doc.data(), id: doc.od }));
    };

    const getAllData = async () => {
      const [posts, bio, experience] = await Promise.all([
        getData("posts"),
        getData("bio"),
        getData("experience"),
      ]);
      setPosts(posts);
      setBio(bio);
      setExperience(experience);
    };
    getAllData();
  }, []);

  return (
    <main>
      <div className="sm:px-8 mt-9">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              {bio.map((bio, i) => {
                return (
                  <div className="max-w-2xl" key={i}>
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                      {bio.title}
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                      {bio.bio}
                    </p>
                    <div className="mt-6 flex gap-6 text-white">
                      <a
                        className="group -m-1 p-1 hover:text-gray-400"
                        aria-label="Follow on Twitter"
                        href="https://twitter.com/lasbreylawal"
                      >
                        <Twitter />
                      </a>
                      <a
                        className="group -m-1 p-1 hover:text-gray-400"
                        aria-label="Follow on Instagram"
                        href="https://www.instagram.com/_lasbrey/"
                      >
                        <Instagram />
                      </a>
                      <a
                        className="group -m-1 p-1 hover:text-gray-400"
                        aria-label="Follow on GitHub"
                        href="https://github.com/lasbrey"
                      >
                        <GitHub />
                      </a>
                      <a
                        className="group -m-1 p-1 hover:text-gray-400"
                        aria-label="Follow on LinkedIn"
                        href="https://www.linkedin.com/in/lazarus-lawal-79847586/"
                      >
                        <LinkedIn />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="sm:px-8 mt-24 md:mt-28">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                <div className="flex flex-col gap-16">
                  {posts.map((posts, i) => {
                    return (
                      <article
                        className="group relative flex flex-col items-start"
                        key={i}
                      >
                        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                          <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                          <a href="/articles/crafting-a-design-system-for-a-multiplanetary-future">
                            <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                            <span className="relative z-10">{posts.title}</span>
                          </a>
                        </h2>
                        <time
                          className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                          datetime="2022-09-05"
                        >
                          <span
                            className="absolute inset-y-0 left-0 flex items-center"
                            aria-hidden="true"
                          >
                            <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                          </span>
                          {posts.date}
                        </time>
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          {posts.description}
                        </p>
                      </article>
                    );
                  })}
                </div>
                <div className="space-y-10 lg:pl-16 xl:pl-24">
                  <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                    <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      <HomeRepairService className="text-gray-400" />
                      <span className="ml-3">Work</span>
                    </h2>
                    <ol className="mt-6 space-y-4">
                      {experience.map((experience, i) => {
                        return (
                          <li className="flex gap-4" key={i}>
                            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                              <GitHub/>
                            </div>
                            <dl className="flex flex-auto flex-wrap gap-x-2">
                              <dt className="sr-only">Company</dt>
                              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                {experience.company}
                              </dd>
                              <dt className="sr-only">Role</dt>
                              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                {experience.position}
                              </dd>
                              <dt className="sr-only">Date</dt>
                              <dd
                                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                                aria-label="2019 until Present"
                              >
                                {experience.duration}
                              </dd>
                            </dl>
                          </li>
                        );
                      })}
                    </ol>
                    <a
                      className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
                      href="/#"
                    >
                      Download CV
                      <ArrowDownward sx={{fontSize: 16}} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Landing;
