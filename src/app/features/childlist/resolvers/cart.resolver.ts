import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core"
import {ChildlistitemService} from "../services/childlistitem.service"
import {Observable} from "rxjs"
import {ChildlistitemDtoModel} from "../models/childlistitem.dto.model"

export const cartResolver: ResolveFn<Observable<ChildlistitemDtoModel[]>> = (route, state) => {
    const childlistitemService: ChildlistitemService = inject(ChildlistitemService)
    return childlistitemService.findAllByidFromCart()
};
