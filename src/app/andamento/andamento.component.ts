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
    this.andamento = this.service.getAndamento();
  }

}
