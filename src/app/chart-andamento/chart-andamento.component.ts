import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AndamentoNazionaleCompletoService } from '../services/andamento-nazionale-completo.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-chart-andamento',
  templateUrl: './chart-andamento.component.html',
  styleUrls: ['./chart-andamento.component.scss']
})

export class ChartAndamentoComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  private andamentoCompleto: Array<any> = [];
   arrayCopia = [];
  constructor(private service: AndamentoNazionaleCompletoService){}

  ngOnInit() {
    this.andamentoCompleto = this.service.getAndamentoCompleto();
     this.arrayCopia = this.andamentoCompleto
    var dateToday = new Date().toISOString().slice(0, 19);
    var ar = [
      {
        "data": "2020-02-24T18:00:00",
        "stato": "ITA",
        "ricoverati_con_sintomi": 101,
        "terapia_intensiva": 26,
        "totale_ospedalizzati": 127,
        "isolamento_domiciliare": 94,
        "totale_positivi": 221,
        "variazione_totale_positivi": 0,
        "nuovi_positivi": 221,
        "dimessi_guariti": 1,
        "deceduti": 7,
        "totale_casi": 229,
        "tamponi": 4324,
        "note_it": "",
        "note_en": ""
    },
    {
        "data": "2020-02-25T18:00:00",
        "stato": "ITA",
        "ricoverati_con_sintomi": 114,
        "terapia_intensiva": 35,
        "totale_ospedalizzati": 150,
        "isolamento_domiciliare": 162,
        "totale_positivi": 311,
        "variazione_totale_positivi": 90,
        "nuovi_positivi": 93,
        "dimessi_guariti": 1,
        "deceduti": 10,
        "totale_casi": 322,
        "tamponi": 8623,
        "note_it": "",
        "note_en": ""
    }
    ];
    ar.forEach((element, index, array) => {
      console.log(element.data);
    });
    console.log(JSON.stringify(arrayCopia));

  }

}
