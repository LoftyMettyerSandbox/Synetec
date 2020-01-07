import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/city.model";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css']
})

export class CitiesListComponent implements OnInit {

    cities: ICity[];
    constructor(private httpClient: HttpClient) { }

    ngOnInit(): void {

        this.httpClient.get("http://localhost:53538/api/cities")
            .subscribe((data: any) => {
                this.cities = data;
            });
    }

    deleteCity(id: number) {

        this.httpClient.delete("http://localhost:53538/api/cities/delete-city/" + id)
            .subscribe(res => {
                alert("Deleted");
            }, err => {
                alert("Not deleted");
            });

    }


}
