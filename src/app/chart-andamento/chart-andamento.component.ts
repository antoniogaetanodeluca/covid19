import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AndamentoNazionaleCompletoService } from '../services/andamento-nazionale-completo.service';

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

  constructor(private service: AndamentoNazionaleCompletoService){}

  ngOnInit() {
    this.andamentoCompleto = this.service.getAndamentoCompleto();
    this.andamentoCompleto = this.andamentoCompleto.slice(Math.max(this.andamentoCompleto.length - 7, 1));
    console.log(this.andamentoCompleto);
    

  }

}
