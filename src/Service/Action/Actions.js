import {Add_To_List} from '../Constants'
import {RemoveFromList} from '../Constants'

export const AddToList = (data) => {
    console.warn("ye data aya h click krne pe", data)
    return {
        type: Add_To_List, 
        data: data
    };
}
export const DeleteMail = (data) => {
    return {
        type: RemoveFromList, 
        data: data
    };
}