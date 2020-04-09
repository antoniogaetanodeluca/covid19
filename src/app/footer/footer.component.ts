import { Component, OnInit } from '@angular/core';
import { AndamentoNazionaleService } from '../services/andamento-nazionale.service';
import { AndamentoNazionaleInterface } from '../interfaces/andamento-nazionale-interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  response: Array<AndamentoNazionaleInterface>;

  constructor(private service: AndamentoNazionaleService) {}

  async ngOnInit(){
    await this.service.getAndamento().then(
      andamentoFooter => {
        this.displayAndamento(andamentoFooter),
        err => console.log(err),
        () => console.log('Chiamata eseguita correttamente.')
      }
    );    
  }

  displayAndamento(array){
    this.response = array;
    return this.response;
  }

}
