import {Injectable} from "@angular/core";
import {Http, URLSearchParams, Response} from "@angular/http";
import {NavController, LoadingController} from "ionic-angular";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class ApiService {

    constructor(private http: Http,
                private nav: NavController,
                private loadingController: LoadingController) {
    }

    public get(uri: string, params?: Object): Promise<any> {
        let loading = this.loadingController.create();
        loading.present();

        let urlParams: URLSearchParams = new URLSearchParams();
        for (var key in params) {
            urlParams.set(key, params[key]);
        }

        return new Promise((resolve) => {
            this.http.get(uri, {search: urlParams})
                .map(this.extractData)
                .subscribe(data => {
                        loading.dismiss();
                        resolve(data);
                    },
                    error => {
                        loading.dismiss();
                    }
                );
        });
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
}