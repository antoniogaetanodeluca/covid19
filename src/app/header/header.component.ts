import { Component, OnInit } from '@angular/core';
import { AndamentoNazionaleService } from '../services/andamento-nazionale.service';
import { AndamentoNazionaleInterface } from '../interfaces/andamento-nazionale-interface';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  andamentoDati: Array<AndamentoNazionaleInterface>;

  constructor(private service: AndamentoNazionaleService) {}

  ngOnInit() {
    this.andamentoDati = this.service.getAndamento();    
  }

}
