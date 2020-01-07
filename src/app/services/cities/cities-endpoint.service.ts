import { Injectable, Injector } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BaseService } from "../base.service";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { ICity } from "../../models/city.model";

@Injectable()
export class CitiesEndpoint extends BaseService {

    constructor(private _httpClient: HttpClient, private _injector: Injector) {
        super(_httpClient, _injector);
    }

    _baseURL : string = "http://localhost:53538/api/cities";

    getCities(): Promise<ICity[]> {

        return new Promise((resolve, reject) => {
            this._httpClient.get(this._baseURL)
                .subscribe((data: any) => {
                    resolve(data);
                });
        });

    }

    deleteCity(id: number): Promise<any> {

        return new Promise((resolve, reject) => {

            this._httpClient.delete(this._baseURL + "/delete-city/" + id)
                .subscribe(res => {
                    alert("City deleted");
                    resolve(true);
                }, err => {
                    console.log("Cannot delete city id: " + id);
                    resolve(false);
                });

        });

    }

}