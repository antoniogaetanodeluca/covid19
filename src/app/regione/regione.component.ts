import { Component, OnInit } from '@angular/core';
import { regioniService } from './regioni.service';

@Component({
  selector: 'app-regione',
  templateUrl: './regione.component.html',
  styleUrls: ['./regione.component.scss']
})

export class RegioneComponent implements OnInit {
  regioni = [];
  isShown:any = {};

  constructor(private service: regioniService) {}

  ngOnInit() {
    this.regioni = this.service.getRegioni();
  } 
  
  showFn = function(codice_regione){
    
    // Object.keys(this.isShown).forEach(h => {
    //   this.isShown[h] = false;
    // });
    // this.isShown[codice_regione] = true;

    
  }

}
