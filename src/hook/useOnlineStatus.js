import { useState, useEffect } from 'react'

export const useOnlineStatus = () => {

    const [isOnline, setIsOnline] = useState(window.navigator.onLine)

    useEffect(
        () => {
            window.addEventListener('online', () => setIsOnline(true));
            window.addEventListener('offline', () => setIsOnline(false));
        }, [isOnline]
    )

    return isOnline
}