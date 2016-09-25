import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {ApiService} from "../../providers/api/ApiService";
import {MapToIterable} from "../../pipes/MapToIterable";

@Component({
    templateUrl: 'build/pages/home/home.html',
    providers: [ApiService],
    pipes: [MapToIterable]
})
export class HomePage {
    public people;

    constructor(public nav: NavController, public api: ApiService) {
    }

    public apiCall() {
        this.api.get('https://randomuser.me/api/?results=10')
            .then(data => {
                console.log(data.results);
                this.people = data.results;
            });
    }
}
