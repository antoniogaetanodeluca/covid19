import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AndamentoNazionaleService {
  repositoryAndamento = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json";
  
  andamentoDatiNazionale: Array<any> = [];

  constructor(private http: HttpClient){
    this.http.get(this.repositoryAndamento).toPromise().then(
        data => {
        for (let key in data)
            if (data.hasOwnProperty(key))
            this.andamentoDatiNazionale.push(data[key]);
        }
    )
}

  getAndamento(){
    return this.andamentoDatiNazionale;
  }
}
