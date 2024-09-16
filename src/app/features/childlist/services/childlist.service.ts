import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ChildlistShortDtoModel} from "../models/childlist.short.dto.model";
import {environment} from "../../../../environments/environment";
import {ChildlistLongDtoModel} from "../models/childlist.long.dto.model";
import {ChildlistFormModel} from "../models/childlist.form.model";

@Injectable({
    providedIn: 'root'
})
export class ChildlistService {

    constructor(
        private readonly _http: HttpClient
    ) {
    }

    findAll(): Observable<ChildlistShortDtoModel[]> {
        return this._http.get<ChildlistShortDtoModel[]>(environment.childList)
    }

    findById(id: string): Observable<ChildlistLongDtoModel[]> {
        return this._http.get<ChildlistLongDtoModel[]>(environment.childList + '?childlist_id=' + id)
    }

    save(childlist: ChildlistFormModel): Observable<ChildlistFormModel> {
        return this._http.post<ChildlistFormModel>(environment.childList, childlist)
    }
}
