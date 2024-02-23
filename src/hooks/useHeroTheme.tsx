import { useEffect, useMemo, useState } from "react"

type Theme = {
  name: ThemeNameSection[]
  nameLetterSpacing: string
}

type ThemeNameSection = {
  text: string
  outline: boolean
}

export default function useHeroTheme() {
  const themes: Theme[] = useMemo(
    () => [
      {
        name: [
          { text: "Australi", outline: true },
          { text: "Fin", outline: false }
        ],
        nameLetterSpacing: "tracking-[0.98vw]"
      },
      {
        name: [
          { text: "Fin", outline: false },
          { text: "tastic", outline: true }
        ],
        nameLetterSpacing: "tracking-[3.6vw]"
      },
      {
        name: [
          { text: "Ibupro", outline: true },
          { text: "Fin", outline: false }
        ],
        nameLetterSpacing: "tracking-[3.19vw]"
      }
    ],
    []
  )

  const [theme, setTheme] = useState(themes[0])

  useEffect(() => {
    setTheme(themes[Math.floor(Math.random() * themes.length)])
  }, [themes, themes.length])

  function changeTheme() {
    const index = themes.indexOf(theme)
    let newIndex = index

    while (newIndex === index) {
      newIndex = Math.floor(Math.random() * themes.length)
      if (themes.length === 1) break
    }

    setTheme(themes[newIndex])
  }

  return { theme, changeTheme }
}
