import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegioneComponent } from './regione/regione.component';
import { RegioniComponent } from './regioni/regioni.component';
import { ProvinceComponent } from './province/province.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AndamentoComponent } from './andamento/andamento.component';
import { ChartAndamentoComponent } from './chart-andamento/chart-andamento.component';

//services
import { regioniService } from './services/regioni.service';
import { provinceService } from './services/province.service';
import { AndamentoNazionaleService } from './services/andamento-nazionale.service';
import { AndamentoNazionaleCompletoService } from './services/andamento-nazionale-completo.service';

@NgModule({
  declarations: [
    AppComponent,
    RegioneComponent,
    RegioniComponent,
    ProvinceComponent,
    HeaderComponent,
    FooterComponent,
    AndamentoComponent,
    ChartAndamentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [regioniService, provinceService, AndamentoNazionaleService, AndamentoNazionaleCompletoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
