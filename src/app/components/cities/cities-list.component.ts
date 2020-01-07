import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/city.model";
import { CitiesEndpoint } from '../../services/cities/cities-endpoint.service'

@Component({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css']
})

export class CitiesListComponent implements OnInit {

    cities: ICity[];
    constructor(private cityEndpoint: CitiesEndpoint) { }

    ngOnInit(): void {
        this.getCities();
    }

    getCities() {
        this.cityEndpoint.getCities().then(response => {
            this.cities = response;
        });
    }

    deleteCity(id: number, name: string) {
        this.cityEndpoint.deleteCity(id)
            .then(response => {
                this.getCities();               // Backend delete not implemented, so doesn't actually refresh the grid!
                alert(name + " deleted");       // Hooking in a Toastr of some kind might look nice here.
            })
            .catch(error => {
                alert(error.error);               
            });
    }


}
