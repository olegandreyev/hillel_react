export const initialLocalStorage = (key) => {
    const items = localStorage.getItem(key)
        ? JSON.parse(localStorage.getItem(key))
        : []

    localStorage.setItem(key, JSON.stringify(items))
}

export const getItemFromLocalStorage = (key) => JSON.parse(
    localStorage.getItem(key)
)
