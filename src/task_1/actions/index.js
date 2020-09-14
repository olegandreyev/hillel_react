export const removeItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: id,
  }
}

export const changeItem = (id, name, value) => {
  return {
    type: "CHANGE_ITEM",
    id: id,
    name: name,
    value: value,
  }
}

export const addItem = (item) => {
  return {
    type: "ADD_ITEM",

    item: {
      id: Date.now(),
      isEdit: true,
      ...item,
    },
  }
}

export const toggleCreateForm = () => {
  return {
    type: "TOGGLE_CREATE_FORM",
  }
}

export const toggleInput = id => {
  return {
    type: "TOGGLE_EDIT_INPUT",
    id: id,
  }
}

export const handleInputChange = (name, value) => {
  return {
    type: "HANDLE_INPUT_CHANGE",
    payload: { [name]: value },
  }
}
