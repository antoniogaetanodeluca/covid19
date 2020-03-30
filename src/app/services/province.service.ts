import { Injectable } from '@angular/core';
import { ProvinceInterface } from '../interfaces/province-interface';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable()

export class provinceService {
    repositoryProvince = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province-latest.json";
    province: Array<ProvinceInterface> = [];

    constructor(private http: HttpClient){
        this.http.get(this.repositoryProvince).toPromise().then(
            data => {
            for (let key in data)
                if (data.hasOwnProperty(key))
                this.province.push(data[key]);
            }
        )
    }

    getProvince(codice_regione) {
        var provinceTrovate = [];
        for (var i = 0; i < this.province.length; i++ ){
            if(this.province[i].codice_regione == codice_regione){
                if(this.province[i].denominazione_provincia != "In fase di definizione/aggiornamento"){
                    provinceTrovate.push(this.province[i]);                
                }
            }
        }
        return provinceTrovate;
    }
}