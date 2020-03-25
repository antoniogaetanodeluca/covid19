import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { provinceService } from '../services/province.service';
import {RegioniInterface} from '../interfaces/regioniInterface';

declare var $:any;
@Component({
  selector: 'li[app-regione]',
  templateUrl: './regione.component.html',
  styleUrls: ['./regione.component.scss']
})

export class RegioneComponent implements OnInit {
  @Input() regione: RegioniInterface;
  @Input() province
  @Output('provinceDetailInfo') provinceDetail = new EventEmitter();
  isShown:boolean = false;
  provinceArray:Array<any> = [];

  constructor(private service: provinceService) {}
  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip({
      selector: ".regione_data_detail"
    });   
  }

  showFn = function(){
    this.isShown = !this.isShown;
    return false; 
  }

  getProvinciaDetail(){
    this.provinceArray = this.service.getProvince(this.regione.codice_regione);
  }
}
