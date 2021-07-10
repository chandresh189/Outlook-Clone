import { AddToList, RemoveFromList } from "./Constants"

const initialState = {
    MailList:[]
}
export default function ListItems (state = initialState, action) {
    switch(action.type) {
        case AddToList: 
        console.warn('reducer', action)
            return {
                ...StaticRange,
                MailList: action.data
            }
        case RemoveFromList: 
            return {
                ...StaticRange,
                MailList: action.data
            }
        default: {
            return state;
        }
    }
}