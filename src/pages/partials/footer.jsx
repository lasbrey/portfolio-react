import React from "react";
import {Link} from "react-router-dom"

function Footer() {
  return (
    <footer class="mt-32">
      <div class="sm:px-8">
        <div class="mx-auto max-w-7xl lg:px-8">
          <div class="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
            <div class="relative px-4 sm:px-8 lg:px-12">
              <div class="mx-auto max-w-2xl lg:max-w-5xl">
                <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div class="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    <Link
                      class="transition hover:text-teal-500 dark:hover:text-teal-400"
                      to={"/about"}
                    >
                      About
                    </Link>
                    <Link
                      class="transition hover:text-teal-500 dark:hover:text-teal-400"
                      to={"/projects"}
                    >
                      Projects
                    </Link>
                    {/* <Link
                      class="transition hover:text-teal-500 dark:hover:text-teal-400"
                      to={"/article"}
                    >
                      Article
                    </Link> */}
                  </div>
                  <p class="text-sm text-zinc-400 dark:text-zinc-500">
                    © Lazarus Lawal. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;