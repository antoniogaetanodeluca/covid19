import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegioneComponent } from './regione/regione.component';
import { RegioniComponent } from './regioni/regioni.component';
import { ProvinceComponent } from './province/province.component';
//layout
import { HeaderComponent } from './header/header.component';
//services
import { regioniService } from './services/regioni.service';
import { provinceService } from './services/province.service';
import { AndamentoNazionaleService } from './services/andamento-nazionale.service';

@NgModule({
  declarations: [
    AppComponent,
    RegioneComponent,
    RegioniComponent,
    ProvinceComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [regioniService, provinceService, AndamentoNazionaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
