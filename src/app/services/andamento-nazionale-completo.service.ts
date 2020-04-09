import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AndamentoNazionaleInterface } from "../interfaces/andamento-nazionale-interface";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class AndamentoNazionaleCompletoService {
  repositoryAndamentoCompleto = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json";
  
  andamentoDatiNazionaleCompleto: Array<AndamentoNazionaleInterface> = [];

  constructor(private http: HttpClient){}
  
  getAndamentoCompleto() {
    let promise = new Promise((resolve, reject) => {
      this.http
      .get(this.repositoryAndamentoCompleto)
      .toPromise()
      .then(
        data => {      
          for (let key in data){
            if (data.hasOwnProperty(key)){
              this.andamentoDatiNazionaleCompleto.push(data[key]);
            }
          }
          resolve(this.andamentoDatiNazionaleCompleto);
        },
        msg => {
          reject(msg);
        }
      );
    });    
    return promise;        
  }
}