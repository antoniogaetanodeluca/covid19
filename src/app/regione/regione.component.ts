import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { provinceService } from '../services/province.service';
import { RegioniInterface } from '../interfaces/regioni-interface';
import { ProvinceInterface } from '../interfaces/province-interface';

@Component({
  selector: 'li[app-regione]',
  templateUrl: './regione.component.html',
  styleUrls: ['./regione.component.scss']
})

export class RegioneComponent implements OnInit {
  @Input() regione: RegioniInterface;
  @Input() province: ProvinceInterface;
  @Output('provinceDetailInfo') provinceDetail = new EventEmitter();

  isShown:boolean = false;
  provinceArray:Array<any> = [];

  constructor(private service: provinceService) {}
  ngOnInit() {
     
  }

  showFn = function(){
    this.isShown = !this.isShown;
    return false; 
  }

  getProvinciaDetail(codice_regione){
    this.showFn();
    this.provinceArray = this.service.getProvince(this.regione.codice_regione);
    return false;
  }
}
