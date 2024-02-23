"use client"

import useHeroTheme from "@/hooks/useHeroTheme"
import { Anton } from "next/font/google"

const anton = Anton({ weight: "400", subsets: ["latin"] })

export default function Home() {
  const { theme, changeTheme } = useHeroTheme()

  return (
    <main>
      <section>
        <div className={anton.className}>
          <p className={`ml-[1vw] w-fit uppercase slant tracking-wide`}>
            <span className="text-[6vw]">F</span>
            <span className="text-[4vw]"> is for</span>
          </p>
          <p className={`uppercase ${theme.nameLetterSpacing} text-[20vw] leading-[1em] overflow-hidden max-w-full`}>
            {theme.name.map((data, i) => (
              <span key={i} className={data.outline ? "font-outline text-transparent bg-clip-text" : ""}>
                {data.text}
              </span>
            ))}
          </p>
        </div>
        <input type="button" value="Change" onClick={() => changeTheme()} />
      </section>
    </main>
  )
}
