import {ResolveFn} from '@angular/router';
import {ChildlistDtoModel} from "../models/childlist.dto.model";
import {Observable} from "rxjs";
import {inject} from "@angular/core";
import {ChildlistService} from "../services/childlist.service";

export const childlistResolver: ResolveFn<Observable<ChildlistDtoModel>> = (route, state) => {
    const childListService: ChildlistService = inject(ChildlistService)
    return childListService.findById(route.params['id'])
};
