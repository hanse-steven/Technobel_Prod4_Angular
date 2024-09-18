import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {ChildlistDtoModel} from "../models/childlist.dto.model";
import {ChildlistFormModel} from "../models/childlist.form.model";

@Injectable({
    providedIn: 'root'
})
export class ChildlistService {

    constructor(
        private readonly _http: HttpClient
    ) {
    }

    findAll(): Observable<ChildlistDtoModel[]> {
        return this._http.get<ChildlistDtoModel[]>(environment.childList)
    }

    findById(id: string): Observable<ChildlistDtoModel> {
        return this._http.get<ChildlistDtoModel>(environment.childList + '?childlist_id=' + id)
    }

    save(childlist: ChildlistFormModel): Observable<ChildlistFormModel> {
        return this._http.post<ChildlistFormModel>(environment.childList, childlist)
    }

    delete(id: string): Observable<string> {
        const options = {
            body: { childlist_id: id },
            responseType: 'text' as 'text'
        };
        return this._http.delete(environment.childList, options)
    }
}
