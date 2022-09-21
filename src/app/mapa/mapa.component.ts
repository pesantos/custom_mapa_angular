import { Component, OnInit } from '@angular/core';
import { PanZoomConfig, PanZoomAPI, PanZoomModel, PanZoomConfigOptions } from 'ngx-panzoom';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    // this.panZoomConfig.keepInBounds = true;
    this.panZoomConfig.initialZoomLevel=0;
    this.panZoomConfig.neutralZoomLevel=0;
    // this.panZoomConfig.scalePerZoomLevel=1;
    console.log(this.panZoomConfig);
  }

  panZoomConfig: PanZoomConfig = new PanZoomConfig();
}
