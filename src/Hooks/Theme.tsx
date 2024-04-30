import { useState } from "react"

export const Theme = ['light', 'dark'] as const

const useTheme = () => {
    const localStorageTheme = window.localStorage.getItem('theme') ?? window.matchMedia('(prefers-colors-scheme: dark)' ).matches ? Theme[0]: Theme[1]
    const [theme, setTheme] = useState<String>(localStorageTheme)

    const nextTheme = () => {
        const newTheme = theme === 'Dark'? 'Light' : 'Dark'
        setTheme(newTheme)
    }

    const getTheme = () => {

    }

    return [getTheme, nextTheme]
}

export default useTheme