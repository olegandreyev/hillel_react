import { initialState } from "./initialState"

export const uiReducer = (state = initialState.ui, action) => {
    switch (action.type) {
        case "TOGGLE_CREATE_FORM": {
            return {
                isCreateFormHidden: !(state.isCreateFormHidden)
            }
        }
        default: return state
    }
}