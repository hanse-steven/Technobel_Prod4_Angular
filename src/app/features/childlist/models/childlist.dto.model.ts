import {ChildlistitemDtoModel} from "./childlistitem.dto.model";

export interface ChildlistDtoModel {
    childlist_id: string
    firstname: string
    lastname: string
    birthdate: Date
    createdBy: number
    items: ChildlistitemDtoModel[]
}
