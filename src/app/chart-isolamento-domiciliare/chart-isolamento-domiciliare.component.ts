import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AndamentoNazionaleCompletoService } from '../services/andamento-nazionale-completo.service';
import * as _ from 'lodash';
import {Observable,of, from} from 'rxjs';
import { AndamentoNazionaleInterface } from "../interfaces/andamento-nazionale-interface";
import { AndamentoNazionaleService } from '../services/andamento-nazionale.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-chart-isolamento-domiciliare',
  templateUrl: './chart-isolamento-domiciliare.component.html',
  styleUrls: ['./chart-isolamento-domiciliare.component.scss']
})
export class ChartIsolamentoDomiciliareComponent implements OnInit {

  public andamentoCompleto: Array<AndamentoNazionaleInterface> = [];
  
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      display: false
    }
  };

  public barChartLabels = [];
  public barChartData = [];
  public barChartType = 'line';
  public barChartLegend = true;
    
  constructor(private service: AndamentoNazionaleCompletoService){}

  async ngOnInit(){
    await this.service.getAndamentoCompleto().then(
      andamento => {
        this.showIsolamentoDomiciliare(andamento),
        err => console.log(err),
        () => console.log('Chiamata eseguita correttamente.')
      }
    );    
  }

  showIsolamentoDomiciliare(ar){
    var itemsToIterate = ar.reverse().slice(0, 7);
    let jsonObjIsolamentoDomiciliare;
    let resultIsolamentoDomiciliare = {data: [], label: 'Isolati', backgroundColor: 'rgba(255, 247, 0, 1)', borderWidth: 1, borderColor:'#fff700', fill: true, borderCapStyle: "yes", hoverBackgroundColor: "yes"};
    
    for (let i = 0; i<itemsToIterate.length; i++){      
      let day = ar[i].data.substr(8, 2);//estraggo il giorno dalle ultime 7 date dell'oggetto passato dalla promise
      this.barChartLabels.push(day);
      
      //popolo l'oggetto dei positivi
      jsonObjIsolamentoDomiciliare = ar[i].isolamento_domiciliare;
      resultIsolamentoDomiciliare.data.push(jsonObjIsolamentoDomiciliare);
      //console.log(ar[i]);
    }
    this.barChartLabels.reverse(); //ordino al contrario l'array per mostrarlo sul grafico in ordine crescente
    this.barChartData.push(resultIsolamentoDomiciliare);
    
    //inizializzo chart.js
    let ctx = 'chartIsolamentoDomicialiare';
    let chartIsolamentoDomicialiare = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.barChartLabels,
        datasets: this.barChartData
      },
      options: this.barChartOptions
    });
  }

}
