import { useEffect } from 'react'

export const useChangeTitle = (titleText) => {
    useEffect(() => {
        document.title = titleText
    })
}