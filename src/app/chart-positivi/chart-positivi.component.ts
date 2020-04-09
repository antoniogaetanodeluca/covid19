import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AndamentoNazionaleCompletoService } from '../services/andamento-nazionale-completo.service';
import * as _ from 'lodash';
import {Observable,of, from} from 'rxjs';
import { AndamentoNazionaleInterface } from "../interfaces/andamento-nazionale-interface";
import { AndamentoNazionaleService } from '../services/andamento-nazionale.service';
import { Chart } from 'chart.js';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-chart-positivi',
  templateUrl: './chart-positivi.component.html',
  styleUrls: ['./chart-positivi.component.scss']
})
export class ChartPositiviComponent implements OnInit {
  response: Array<any> = [];
  constructor(private service: AndamentoNazionaleService){}

  async ngOnInit(){
    await this.service.getAndamento().then(
      andamentoChartPositivi => {
        this.displayAndamento(andamentoChartPositivi),
        err => console.log(err),
        () => console.log('Chiamata eseguita correttamente.')
      }
    );    
  }

  displayAndamento(array){
    this.response = array;
    // var itemsToIterate = this.response.slice(1, 7);
    // var percentualeGuariti, guariti;

    // for(let i=0; i<itemsToIterate.length; i++){
    //   guariti += itemsToIterate[i].dimessi_guariti;
    // }

    // percentualeGuariti = guariti - 
    
    return this.response;
  }

}

