import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegioneComponent } from './regione/regione.component';
import { RegioniComponent } from './regioni/regioni.component';
import { ProvinceComponent } from './province/province.component';
import { regioniService } from './services/regioni.service';
import { provinceService } from './services/province.service';
import { HeaderComponent } from './header/header.component';

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
    NgbModule
  ],
  providers: [regioniService, provinceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
