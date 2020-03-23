import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegioneComponent } from './regione/regione.component';
import { regioniService } from './regione/regioni.service';
import { RegioniComponent } from './regioni/regioni.component';

@NgModule({
  declarations: [
    AppComponent,
    RegioneComponent,
    RegioniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [regioniService],
  bootstrap: [AppComponent]
})
export class AppModule { }
