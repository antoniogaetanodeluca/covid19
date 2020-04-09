import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AndamentoNazionaleCompletoService } from '../services/andamento-nazionale-completo.service';
import * as _ from 'lodash';
import {Observable,of, from} from 'rxjs';
import { AndamentoNazionaleInterface } from "../interfaces/andamento-nazionale-interface";
import { AndamentoNazionaleService } from '../services/andamento-nazionale.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-andamento',
  templateUrl: './chart-andamento.component.html',
  styleUrls: ['./chart-andamento.component.scss']
})

export class ChartAndamentoComponent implements OnInit {
  andamentoCompleto: Array<AndamentoNazionaleInterface> = [];
  
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = [];
  public barChartData = [];
  public barChartType = 'line';
  public barChartLegend = true;
    
  constructor(private service: AndamentoNazionaleCompletoService){}
  
  async ngOnInit(){
    await this.service.getAndamentoCompleto().then(
      andamento => {
        this.displayChartAndamentoNazionale(andamento),
        err => console.log(err),
        () => console.log('Chiamata eseguita correttamente.')
      }
    );    
  }

  displayChartAndamentoNazionale(ar){
    let jsonObjPositivi;
    let jsonObjGuariti;
    let jsonObjDeceduti;

    let resultPositivi = {data: [], label: 'Positivi', backgroundColor: 'rgba(255, 151, 43, 0.7)', borderWidth: 1, borderColor:'#ff972b', fill: true, borderCapStyle: "yes", hoverBackgroundColor: "yes"};
    let resultGuariti = {data: [], label: 'Guariti', backgroundColor: 'rgba(0, 206, 150, 0.8)', borderWidth: 1, borderColor:'#03936C', fill: true, borderCapStyle: "yes"};
    let resultDeceduti = {data: [], label: 'Deceduti', backgroundColor: 'rgba(255, 80, 96, 0.9)' , borderWidth: 1, borderColor:'#FF5060', fill: true, borderCapStyle: "yes"};

    var itemsToIterate = ar.reverse().slice(0, 7);
    for (let i = 0; i<itemsToIterate.length; i++){      
      let day = ar[i].data.substr(8, 2);//estraggo il giorno dalle ultime 7 date dell'oggetto passato dalla promise
      this.barChartLabels.push(day);

      //popolo l'oggetto dei positivi
      jsonObjPositivi = ar[i].totale_positivi;
      resultPositivi.data.push(jsonObjPositivi);

      //popolo l'oggetto dei guariti
      jsonObjGuariti = ar[i].dimessi_guariti;
      resultGuariti.data.push(jsonObjGuariti);

      //popolo l'oggetto dei deceduti
      jsonObjDeceduti = ar[i].deceduti;
      resultDeceduti.data.push(jsonObjDeceduti);
    }
    this.barChartLabels.reverse(); //ordino al contrario l'array per mostrarlo sul grafico in ordine crescente
    this.barChartData.push(resultPositivi, resultGuariti, resultDeceduti);
    
    //inizializzo chart.js
    let ctx = 'chartAndamentoSettimanale';
    let chartAndamentoSettimanale = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.barChartLabels,
        datasets: this.barChartData
      },
      options: this.barChartOptions
    });

    this.andamentoCompleto = ar[0].data;
    return this.andamentoCompleto;
  }
  

}
