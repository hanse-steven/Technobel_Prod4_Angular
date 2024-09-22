import {ChildlistDtoModel} from "./childlist.dto.model";

export interface ChildlistitemDtoModel {
    childlistitem_id: string
    name: string
    price: number
    image: string
    boughtBy: number | null
    description: string
    childlist: ChildlistDtoModel | null
}
