import { Component, OnInit } from '@angular/core';
import { regioniService } from '../services/regioni.service';
import { RegioniInterface } from '../interfaces/regioni-interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  regioni: Array<RegioniInterface>;
  
  constructor(private service: regioniService) {}

  ngOnInit() {
    this.regioni = this.service.getRegioni();    
  }

}
