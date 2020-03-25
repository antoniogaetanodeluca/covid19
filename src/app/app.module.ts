import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegioneComponent } from './regione/regione.component';
import { RegioniComponent } from './regioni/regioni.component';
import { ProvinceComponent } from './province/province.component';
import { regioniService } from './services/regioni.service';
import { provinceService } from './services/province.service';

@NgModule({
  declarations: [
    AppComponent,
    RegioneComponent,
    RegioniComponent,
    ProvinceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [regioniService, provinceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
