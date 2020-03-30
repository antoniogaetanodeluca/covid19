import { Component, OnInit } from '@angular/core';
import { AndamentoNazionaleService } from '../services/andamento-nazionale.service';
import { AndamentoNazionaleInterface } from '../interfaces/andamento-nazionale-interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  andamentoDati: Array<AndamentoNazionaleInterface>;

  constructor(private service: AndamentoNazionaleService) {}

  ngOnInit() {
    this.andamentoDati = this.service.getAndamento();    
  }

}
