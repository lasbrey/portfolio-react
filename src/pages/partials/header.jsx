import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="pointer-events-none relative z-50 flex flex-col">
      <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>
      <div className="sm:px-8 top-0 order-last -mb-3 pt-3">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="top-[var(--avatar-top,theme(spacing.3))] w-full">
                <div className="relative">
                  <Link
                    aria-label="Home"
                    className="block h-16 w-16 origin-left pointer-events-auto"
                    to={"/"}
                  >
                    <img
                      className="text-transparent rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16"
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVEhUSFRYVGBISFRISEhgSFRESERIRGBUZGRgVGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISGjQhJCExNDExMTQxNDQ0NDQ0NDQ0NDQ0NDQxNDQxNDQxMTE+MTQ0ND81PzE0MTExMTQxMTQ/NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xAA7EAACAQIFAgQDBgUEAQUAAAABAgADEQQFEiExQVEGImFxEzKRFBUjUoGhQnKxwfAHM5LRYhZTgrLx/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EACMRAAICAgICAwEBAQAAAAAAAAABAhESIQMxQVETImEygQT/2gAMAwEAAhEDEQA/APTGplTF+PwKuDtvHFKurDeQYjDnkTzWq2jrjLdM8/xlBqTWN9MjV7y05lRVwQRvK393vq24hjJeSyOVaSB4XSy1pOMqaOpI2QCGA/8AyTI/+WhQyZj1kiZO3eHJGyRDTN4zwdQra0jpZQ3eH0csI6ykZIlKSY0wmOvYGHg3iyjgrQmndT6S0ZJnNJLwGTJoRbj84p09r6m/Kv8Ac8SiVk20hnMlNxXiZz8gVR9TAKniCt+dv00/9RlxsVzR6BaasPSed/ftb/3H+ohOH8R1h/Hf+YAzfGwfIi+WEwqJWcL4nvbWnuVP9o6wmZU6nynfsdjA4yQVKLCzTHYSJsMh6CT3m4o4KMGnYRN4kwy6NhLFE3iAeSNHbFl0UR6O8tfhNLXiBl3lj8NbXlJLRKL2WWbmTJEuZMmTJjFNFVk3HEPw+ZgixIgb0yRFGLQi5WeRGfg9WcIvY+xCK52M5p4MSnvnTpuQbDtOv/VDKASrbx0iDdaLymFEnTCiU6n4icrqsYMfGhBsVbb2jRQssi/rhhOxhhKXl3ilqh2BjZczfsYfqjKE30WFaInYpjvK8uYv/hky45/8MdSiB8Mx8EE06wLC4q/MD8T5ytClYH8SoCtMdh1b2tKRkn0QlFxewPPc/wBINFD5hs7A8eglUqYr/OsVPivX/sn3kL4udkZUiMo2MHxEHbERa+JkRxEOQMUNvtEkTExIK8mSvCpAcB/SxMYUMVv6iVmnXhtDER1ISUT0HKc74RzcHYN1HvLGpBFxwd55fhsTLl4bzIOPhsfMN1v1HURJRXaGjJrTLBFOffJG0T+ID+HFj2PLoqFQ7yweGTuZV6lTeWPwq9yZWXRKPZbZkyZIFzJk1eZMYrypt7xdUo/MIwpvtbtB3+e3efN54nouVWit4zCg03233EFr4BTTTb8ssb0R5173kP2cfDHoRG+evJzNuwKngha1ukr+a5VYkgdZeFpAi/pF+IpB2K9pbi5vJRy0V7w9R0sRvzLaggGW4P8AEb0No4enaWlK9l+OSo4VZIsjVp0r7wJlbtBNRwilzsqgk+wnnGb4561RqjddlG9gg4EuOf4oGj8MH5iL/wAo5EpOOIE6+GNbOPkdix3MgepOcRVtBvizpTOeiV6sjNX1kFR5HrhsVoMWpJ0qQJTtOg8NgoZJUhVKtFCPCKdaMmI0PqOIjXLswKOjjlDf9OolYo1oWleUTEaPbKGIV0VwfKyhh7GJvEtdfhnfpEPhrOGagaZ5pmw9VO4/vNZ7XJpyV1Ki6hlGyu1a2/1lm8HYgamBPaUerV3jnw5WOvYx5S0SjHZ6r8Ud5EcSJX0xZHMLwyF9wZzuZVpUNvjTIB8N5kX5GJQItr37wGtU/EAneAxBPlPIgebU7Ojjod/6T55UtP0WlOyfG+V79CJ0i3pzeOXUgbqAP6TWWNqp79JySnoWyLDVTfT+k1hsOQ7sf82neHt8S0xatmdfedPHypRYZS0awNQan9zCqrbGLME4DN7wqrVvsJ3xkqRbgdneFFyZ3XSwJkOXPuR6zrNaulCPQxYtuVHQpaZWMxxV39OIpxaXB9JDSzpHdlKckgdiJFmWKITyixE9KH1jRy03sUYtLGAM46GYl3fzE2MIqU0UWBF/cStgaAneaW86JE5LxkK0TCpJFe8GVpIrxrEZNqtO0qQdn3napteZM1B9Kv6wlK3UROlh3vf9oQaoB2v7Q5GxLV4UxJGIK32ZHuOhIsZYc8q/hmVPwxvXLdEQn/kQBH2cVL0/1kpP7FoL6NFVqVd438O1vxP0lfrVN428OVB8TePJ/VkFpl/pjWQIZd6JuN16+kR1amndT9ITQzg20vv0nFl7BJ2xx99r2aZE/wAZPSbhyXsGyOlitFSx6wjNXD07+l4kx5Or2nWGxRZCh6CeRPj3kFjbAYjXTse1pBgMXoqNTPB4ivKsTpqFehvO8WPxge84lCp0+mLYxqVdNdT0JIkma4kK9/zCAVzdk9CDOPEzgKhHM6eLh3+D3oJyohg7eptCqBvEeR46yMvqY1wdTykzuaSSS8FeKWNhGDqBXa8EzmtqBHe4+u0FeqRUPqZDi6t2AixvKxozbTZUcydKZCgC67XNhvIGr/EpsR8yi5Hcd46zzLEFQV1O9hcEavOp2Iid8QQHqP8AM4KqLAeU+gnpQdpBTELmx263hFPCHQNZubna7ny9NhIqlK7bX/SF0bodLqCPUbyotCx8MQdif0nJuI4xoWw02HcCKanMKYGjEaSh5ADMd46JsletvDab+QH0iX4m94xpNamIWZdm1YnzAwrUGQ9wV/rAqV242HWFYcdOgN/ciAey7f6cIr4qsrC6/BU+gYOLD+v0lq8WYVFoEgAG+0p3gbMEw9SotQotOomsu2xVk3039r7S1544q4cMgLK+6kdR3kJN5FIpY9nmmJO8c+F6AepY9toNUyWu7bUzbuSgH7mNcmymtRqByE/+LgmVl/LIpK9jTGhqZtvp6QYVDa8smhaqaW2aJlo/Dc03GzXsZwO/KGlxK7T0B/aDMjX7tTuJkwmH6d5zT0kOBt1ic1xfaWbErqpkHpeV+th1N9OxE4OLkUlixGAFyrhh3h+Z1DpRxyCIrxIINobQfUgB6bxOTiuaaNQwxJtTDdbRLi8QXFj0h2OxNwq9BFFU7mdEErpeAo1gahDGWXw/d309ALyr4Ucn1j7JqjoTU0nTaVWnYWEZuwSsVHaKnxHnvI8fiy9RnvzAQSzWgisnYb1Q3DGqxUC5tsOd72lSzilUDkMrA9AQbge0tKXpoXF9QG1ue8rWdYmrdSFe5W4LeYkd7zrg/Bbj/m2JKutCObxlgMV8Wl5ra0Nr9xFC1HYnUdz36Q7LkCA77nmdBvJxiWgLwzFcwJjDEEjkmQVXm679pBeURKTOoyUn4YA7RakY0XtaECJab255MZ5Xg3rVFp011O/ygdupJ6Ad4DhqTPUWmg1O7BKajlmJ4E9p8NeHUw1L4exqsPxn6k/kX/xEVuho7F+SeGqVGzuq1Ko5Zhemp7Ip5I7xxiq7kWvZRwAABD6qWEXYiKMLKySPT/m0LdJCyQgZwhtN1k1izbkcHqJgWSIu8DimLYJ9jb803GEyL8SAbxT6HsflMr+YgoxYcHeWHEOlWlqHIERYlwylTyNp4UYJcmv9JiXE4m+87w2IGmQY3CkKWECw1TmdUoWtFEM6z7gwTEPYyYuCBIsSgPqYIRp0YzCNtGv210p6LC3QxHh3tfv6yV8UWFoakpaCcPUufW8Z5dgj85BMW4FF+IC3HMsuJzxKdIoq3YiwtOiEU1swFisNVdSQBo6772inMEUFDdiWQiwNlW3WEYbNqlrG1ie3HpB8zy2pUZApUIykhydwPUe8pCk6Q8JXorOICgmx29eYOanQGS47C6GKlrkckcGCUqYJv2l0MSPUveC1alp3VcC+8CqPcx0icmYTME5naiOIdIN4cggtJZYPDWVfacVSofwu16h/LRXzOfpt+s3QUX//AE48OaKYxtRfxKgb7OpG6U+DU9GPSehUqWlQPr6zvD0h5VAsqgBR0VBwv9Jqq12sOJPvZRaBq/EXVVh+JPSBDdv1mMwerTsLwNjH+Np6aI9bxDa8ZCs0BOlG80BNnv2mAdaGmTn7QZqYwgwWMKeU8QTFYjzk95JiLEahFlZ9955ceOKlaJoJFcNseu0VVKZViJ2aljtJsSNS6hGapjJnOGa8mqVtPAvAsI/mtJcdVKj3gaqSYQR65LE9TOhUgTPvOjUjuNuwhbVOs2al7XgYeGU6d7R0qQGHYBNTDtIc+zE06ioAArKFLE30km3y9RDsN5BK34qrBnUdVBuOvO0bjj9jRdPRFmOVur3Yght9osxHl2ELx2al1HcAA787RPUcnrOmMR5SI2a85m5gEoIYJIomlWSIswCais9U/wBJMt/38UwuBppU/U/M39p5nh0nvf8Ap/gfh5fhxYfia67EddTEqf1FoH0MiwFtCXb5m3PvIKAspY8tOcQddQJ/Cu5hFfYDte37RBhbiTuZDg6epyPadV/mMKymj5ix6QoJrPm0oiCIUXYxhnVfVUt0G0DYWW8ZCMhBmwJoC63mzwG+sIDjTMnfxBMmCUtiReL2Y3IMdZXlr1XIv+GpI1dx6Q3NcHh6a6bgvxzc3nCoNKxCqGE4JtQKmRMltxxOMI9qkSS0E5NPTVA9YXmtD8PVCMTQDOGi7OcSVAXpJ3bQRLc3kt5GiljOqi2NpejHa8xphzFVEXMaUzaAAfr2lZ8QUhq1DrzG2LxWhSYheuXNzxKQ07MhW46SMrHbZcrjyfMOd+YLiMsqJ8y89txOhSQRbabVIamAY72t79YXhsuBPmP0hckAWpSJhNKhLRnPho0adKugJoV0pujc6SV8yN2N4qp0Lf5t9YUw0R0aNgfY/wBJ9D5PTFPB0B+TD0V/UIP7zxvJcjev5rEUxy24v6DvPZcRtRpovVUUewUQXY1VRvLKRsXPLHad4k8jsVP7wtUCJYfwiLna5B/M1z9NpmZOwMrcmM8OmimW6kQalSuwHrCsedNO3pMgyK1iDqe8248s5Au0Iqp5YyEYvU6Wt0M7C2Nuh4m2S4mqJv5Tz0mAcfZ5kL+E3pMmCVrO83XDUhSp2DkW25A7ymmuWJYm5PJMOzbBsWZySWP+Wi2lhn5tYeuxnI5Jih2Gq72PE7r4azBxxA0B6Dcdrxrhm1LvfaSkmjIKakdIPtEOaqDzHtWqbW6RHmO5tIRVyGFFCrpaT4jzbwWthze87w7ngzraAF4SnH9HLmVBUa2m14swa7Xh2YZm5pfD6WsfaaKXkIlzysreVeOtovwmGZzsNoThcKXPpLLlmCXTa3Ea1FDRg5OkL8twh1WtH+FysVm+GRtadU6WngRlkp/EPcCRyuWjo+FxVspee5f8CqafTYqedoLhkF9428YuftJ9AAIlpzoSOVntuVYVWyujTZVZfgUiVYAjdQ17d94vbwJhiy1VRrEK2gsdAa3aMPCVbVhKKX2bD0rfzKmhh9VliprZQOwEslaDdCCnllhYAADYACwA9BGq0/Ol/wCFf3hoWc6fNf0tMo0FysgxtXStup2gyUtK78yQDVUv/Cv9Z3iRdgO8zMtHODTe8gzirawjJFsJXs4qXcjtMC7YBTHmhOJHlkFDmF11uIyAwA8XEjZdtQ5BkqLzO6Q3t0MwDPtPrNST7Ge4+kyYxWsrwGtrtx6x39y0WBYKDb6RVgwyqb7Sx5IQaRF9yes4+OKb2agE4aiigaFA67AQfFYjDIhXy3I9I2x2RCrTsXIvfg2nn+YZG9OtpU6geLm5lZxpAOMTa5I4vtFGMUDeejYPIKa0r1baiOveUvOcB+IVTcC85VBqVhK7UqjtIQReMHwR6icJgXPAlmMkZh3MkdCT7wrBZLVcEqLae/WQ0sM+ogjdTYiGtGSthlPCMqhgu3t0hP2pFAIO55hdPH6E0uh45teJcY6M3l68W7yT+zo60lBWixUqgYXEnwNYJUueolfwFZ1IDA2OwMaYpPLqi4uMis+RTgJfFDh65ZeLQHD4cbXPUSXFgl5pEPWdEWedLs9N8JvowWHqDcK9VT/LrO37mXQtcAjg/uOkqXgqhrywKedVUj/lLPh1stNeoVb/AEl49BCxI67WUn0295ziqwRC3Ybe85w7a0UnqAT7xhTVBdCXPuZugt/MeTJGW+3SdwJBs4rvpUmVTF1NTk95Ys0e1M+xlYYXMzCiTDne0NqiBUxYiH1F2vCBi9hvJKSTlxveEYdJgE15ubsJkxhZmmEspK9IgGLdbqLg/rPSKmGQ8yE5dS/KPoJD468jXZ5uMyxAYDWdPsYxyxiHNRzft6S7HLKX5R9BNjLqXYftDV+RaKNm2cCqCgDADbgiD+G8sL1G1g6Txe8v/wB10fyj9pPSwyLwAJsF7DR5x4myj4bgAbGJkpsvAnr2IwdN92APvIfuqj+UfQQPjXhhR5kuIqKp0DnvFtKnUDFyLkm52M9f+6qP5R9BOhllL8q/QQYP2FNXZ5pSq603Q3t+UxXUwi69Wm1vSevJllIcKPoJo5RRO+kfQTR4qfZSfJkqo8jpVbuBbYQrGPtYb+09P+5qH5R9BNDJqH5R9BC42Ttnjv2Zib2P0MkTD25E9hGUUfyj6CafJqB2KC3sJowryBg3hBNOCoi3IY/VzNtRr/FdqlULSFvhimFVgv8A5FhzftG1KgqIEUWVRZR2gpqXUq4uSCDfhgdiQo3A97S4BLnGKe/2amxLIoetUfzCmpFxf8zHoI08M1S+EpMTc2YEnm4dhKtj6woLVporaX03LEsdbKbgsd+AoHaPfBLE4QX6O4HqNt4LC1oscRZ34lw+FB+IWLC11RdRueB2vHLuACSQANyTsAPeePf6jZlSq4gLRcOB/uFblQ42AB4P6QgSsfYj/UHDVLgrWUd2RT/9WhOAzKlV3R1b0BGoe45E8mnSVCpDKSGHBBsYrKUe0IsO03W3pPL8p8Z1KZC1R8RONQsKgH9xPR8nzKniaQqUm1Kdj0KkcqR0MKYkkRqnIknxAiM54QFrd/SbqU7HUID4graaOng1CF25tyYRRJ98Ve8yBWHc/tMmMeokzi5kYxC95v4y955mX6dGL9HTXnJJmGqO85aoO82X6FL8Nlj3nNz3nBrL3mfFXvFcn7GUfw71Gb1HvOBVXvNGoO82T9mx/DpnPea+Ie8jLDvIy47zZv2MofgXrM0XMgSrOvjCHN+wY/hJqPebue8h+IJ0Ko7wZv2bH8JLnvJMPcsJAKgkuGqANufSNxyuStiyWnoZQfFaQpci+kE+p9JPeAVa4PkO5PmXY2OkhrftPSOZFS8WkpQVW+erUNR7fmAvYegsBB8B4hNDDU6NJVLkMzu1yiMzHYL/ABEbc2gPjHNRWekBY6EOrSfKXLWP6+U/WKqew9hEbosoprZPm+PrVharVd1/KDoT20rz+srtVFHAAjHGVNonrPFsZJEFW0gdp1VeDO8yA0ds0tPgDP1w9dqdQ2pV7bm2lKg4J9xz7CVK83pBlEIz6BtfccEX23B9R3lX8T1b1EToqX/Uk/2ErXgPxO9KomErMWoudNJmN2ptyEJ6qd/a3rGmY4n4lZ36FrL/ACjYf9/rDYlEFpky0yE1F4CbSO3qZOxkBfeeDbPTRKAbcmaKnvNKwnRM1s1EJpe8wU/eSlpzqmthRyF9Zw9x1kjGQvVF4LZtGwW7yBy1+TCQ46SFmF+Zth0cCowPMmOoiRPUAMmGIQC5YAepAhWQHRCqv3m1Ru5gmKzugnLr+hvE+J8W01+Tze+0aMJy6QHKK8lvS9uTOKmob3nnuJ8Y1TshCj0A/qYoxOeVn5dv+RnRD/mk+2SfLH0exYXOkFqbuof+G55ndXE6G1djuO4M8IxGPcn5m+pvGmW+NMQgFNyHA2Gu97e/JndCLjGm7OWTTdpDXNagfF1NOyK7KoGwCg/9zTVNoBhqhZnqHliSe1zuZJVc/tA2OgbFVeYrqvJ67wKo0yCR1HkJaY7yPVCKyQNJacHUwqgtyAOTsPeMhWO8kw9zrI+UjT6HvHwe36wTC0wiBe3PvJk3N4wgRqmpljMmMX9+IE0yZPCPSRJSkxmTJgnLcRVm3yzJkZdgK9CF6TJkZAQZSguJ5/UTJkYIDjYlxXEyZGj2JISt80x5kydnEc8jGnLTJkoDwDVJCnzD3E3MlEIWvBf7Z/mMytwZkyS8joVV+IC8yZMgg7yOZMjCnaxjln+4n8w/vMmRkKy01f8APrJqU3MhEJpkyZMY/9k="
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-0 z-10 h-16 pt-6">
        <div className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="relative flex gap-4 justify-center items-center">
                  <div className="flex justify-center items-center">
                    <div
                      className="pointer-events-auto md:hidden"
                      data-headlessui-state=""
                    >
                      <button
                        className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                        id="headlessui-popover-button-:Rqb6:"
                        type="button"
                        aria-expanded="false"
                        data-headlessui-state=""
                      >
                        Menu
                        <svg
                          viewBox="0 0 8 6"
                          aria-hidden="true"
                          className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                        >
                          <path
                            d="M1.75 1.75 4 4.25l2.25-2.5"
                            fill="none"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <nav className="pointer-events-auto hidden md:block">
                      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                        <li>
                          <Link
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            to={"/"}
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            to={"/about"}
                          >
                            About
                          </Link>
                        </li>
                        {/* <li>
                          <Link
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            to={"/articles"}
                          >
                            Articles
                          </Link>
                        </li> */}
                        <li>
                          <Link
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            to={"/projects"}
                          >
                            Projects
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/* <div className="flex justify-end md:flex-1">
                    <div className="pointer-events-auto">
                      <button
                        type="button"
                        aria-label="Toggle dark mode"
                        className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"
                        >
                          <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
                          <path
                            d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                            fill="none"
                          ></path>
                        </svg>
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"
                        >
                          <path
                            d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
