import { Injectable } from '@angular/core';
import {RegioniInterface} from "../interfaces/regioni-interface";
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable()

export class regioniService {
    repositoryRegioni = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json";
    regioni: Array<RegioniInterface> = [];
    
    constructor(private http: HttpClient){
        this.http.get(this.repositoryRegioni).toPromise().then(
            data => {
            for (let key in data)
                if (data.hasOwnProperty(key))
                    this.regioni.push(data[key]);
            }
        )
    }

    getRegioni() {
        return this.regioni;    
    }   
}