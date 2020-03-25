import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'li[app-province]',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.scss']
})
export class ProvinceComponent implements OnInit {
  @Input() province
  @Input() codice_regione
  
  constructor(){}
  ngOnInit(){}
}
