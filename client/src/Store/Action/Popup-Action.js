import {
    IsPopUp,
    PopupContent
} from './index'

export const OpenPopUp = () => {
    return async dispatch => {
        const onSuccess = () => {
            dispatch({
                type: IsPopUp,
                payload: true
            })
        }

        const onError = () => {
            dispatch({
                type: IsPopUp,
                payload: false
            })
        }
        
        try {
            return onSuccess()
        } catch (error) {
            return onError()
        }
    }
}

export const ClosePopUp = () => {
    return async dispatch => {
        const onSuccess = () => {
            dispatch({
                type: IsPopUp,
                payload: false
            })
        }

        const onError = () => {
            dispatch({
                type: IsPopUp,
                payload: false
            })
        }
        
        try {
            return onSuccess()
        } catch (error) {
            return onError()
        }
    }
}

export const PopUpContent = (des) => {

    return async dispatch  => {
        const onSuccess = () => {
            dispatch({
                type: PopupContent,
                payload: des
            })
        }
        const onError = () => {
            dispatch({
                type: PopupContent,
                payload: null
            })
        }
        try {
            onSuccess()
        } catch (error) {
            onError()
        }
    }
}
