import { Component, OnInit } from '@angular/core';
import { AndamentoNazionaleService } from '../services/andamento-nazionale.service';
import { AndamentoNazionaleInterface } from '../interfaces/andamento-nazionale-interface';

@Component({
  selector: 'app-andamento',
  templateUrl: './andamento.component.html',
  styleUrls: ['./andamento.component.scss']
})
export class AndamentoComponent implements OnInit {
  andamento: Array<AndamentoNazionaleInterface>;

  constructor(private service: AndamentoNazionaleService) {}

  ngOnInit(): void {
    this.service.getAndamento().then(
      andamentoResponse => {
        this.displayAndamento(andamentoResponse),
        err => console.log(err),
        () => console.log('Chiamata eseguita correttamente.')
      }
    );
  }

  displayAndamento(array){
    this.andamento = array;
    return this.andamento;
  }

}
