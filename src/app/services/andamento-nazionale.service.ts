import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AndamentoNazionaleInterface } from "../interfaces/andamento-nazionale-interface";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AndamentoNazionaleService {
  repositoryAndamento = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json";
  
  andamentoDatiNazionale: Array<any> = [];

  // constructor(private http: HttpClient){
  //   this.http.get(this.repositoryAndamento).toPromise().then(
  //       data => {
  //       for (let key in data)
  //           if (data.hasOwnProperty(key))
  //           this.andamentoDatiNazionale.push(data[key]);
  //       }
  //   )
  // }

  // getAndamento(){
  //   return this.andamentoDatiNazionale;
  // }

  constructor(private http: HttpClient){}
  
  getAndamento() {
    let promise = new Promise((resolve, reject) => {
      this.http
      .get(this.repositoryAndamento)
      .toPromise()
      .then(
        data => {      
          for (let key in data){
            if (data.hasOwnProperty(key)){
              this.andamentoDatiNazionale.push(data[key]);
            }
          }
          resolve(this.andamentoDatiNazionale);
        },
        msg => {
          reject(msg);
        }
      );
    });
      
    return promise;        
  }


}
