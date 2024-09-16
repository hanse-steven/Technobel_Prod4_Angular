import {ResolveFn} from '@angular/router';
import {ChildlistShortDtoModel} from "../models/childlist.short.dto.model";
import {Observable} from "rxjs";
import {inject} from "@angular/core";
import {ChildlistService} from "../services/childlist.service";

export const childlistResolver: ResolveFn<Observable<ChildlistShortDtoModel[]>> = (route, state) => {
    const childListService: ChildlistService = inject(ChildlistService)
    return childListService.findAll()
};
