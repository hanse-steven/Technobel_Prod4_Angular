import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {ChildlistitemDtoModel} from "../models/childlistitem.dto.model";

@Injectable({
    providedIn: 'root'
})
export class ChildlistitemService {

    constructor(
        private readonly _http: HttpClient
    ) {

    }

    findById(id: string): Observable<ChildlistitemDtoModel> {
        return this._http.get<ChildlistitemDtoModel>(environment.childListItem + '?childlistitem_id=' + id)
    }
}
