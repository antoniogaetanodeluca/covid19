import { Component, OnInit } from '@angular/core';
import { regioniService } from '../services/regioni.service';
import { RegioniInterface } from '../interfaces/regioni-interface';

@Component({
  selector: 'app-regioni',
  templateUrl: './regioni.component.html',
  styleUrls: ['./regioni.component.scss']
})
export class RegioniComponent implements OnInit {
  regioni: Array<RegioniInterface>;
  public isCollapsed = false;

  constructor(private service: regioniService) {}

  ngOnInit() {
    this.regioni = this.service.getRegioni();    
  }  
}

