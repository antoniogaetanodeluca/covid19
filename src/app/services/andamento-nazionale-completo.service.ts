import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AndamentoNazionaleCompletoService {
  repositoryAndamentoCompleto = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json";
  
  andamentoDatiNazionaleCompleto: Array<any> = [];

  constructor(private http: HttpClient){
    this.http.get(this.repositoryAndamentoCompleto).toPromise().then(
      data => {
      for (let key in data)
          if (data.hasOwnProperty(key))
          this.andamentoDatiNazionaleCompleto.push(data[key]);
      }
  )
}

  getAndamentoCompleto(){
    return this.andamentoDatiNazionaleCompleto;
  }
}
