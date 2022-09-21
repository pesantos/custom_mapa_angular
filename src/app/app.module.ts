import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxPanZoomModule } from 'ngx-panzoom';
import { MapaComponent } from './mapa/mapa.component';
import { NovoMapaComponent } from './novo-mapa/novo-mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    NovoMapaComponent
  ],
  imports: [
    BrowserModule,
    NgxPanZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
