import {ResolveFn} from '@angular/router';
import {Observable} from "rxjs";
import {inject} from "@angular/core";
import {ChildlistitemDtoModel} from "../models/childlistitem.dto.model";
import {ChildlistitemService} from "../services/childlistitem.service";

export const childlistitemResolver: ResolveFn<Observable<ChildlistitemDtoModel>> = (route, state) => {
    const childListitemService: ChildlistitemService = inject(ChildlistitemService)
    return childListitemService.findById(route.params['id'])
}
