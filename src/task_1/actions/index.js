export const removeItem = id => {
    return {
        type: 'REMOVE_ITEM',
        payload: id
    }
}

export const addItem = item => {
    return {
        type: 'ADD_ITEM',

        item: {
            id: Date.now(),
            ...item
        }

    }
}

export const toggleCreateForm = () => {
    return {
        type: 'TOGGLE_CREATE_FORM'
    }
}

export const handleInputChange = (name, value) => {
    return {
        type: 'HANDLE_INPUT_CHANGE',
        payload: { [name]: value }
    }
}



