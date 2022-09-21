import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Panzoom from '@panzoom/panzoom'
@Component({
  selector: 'app-novo-mapa',
  templateUrl: './novo-mapa.component.html',
  styleUrls: ['./novo-mapa.component.css']
})
export class NovoMapaComponent implements OnInit {

  constructor() { }

  @Input()pontos:any = [];
  @Input()largura:any = 400;
  @Output()emissor = new EventEmitter();

  ngOnInit(): void {
    this.elemento = document.getElementById('alvo')
    const panzoom = Panzoom(this.elemento, {
      maxScale: 6,
      minScale:1
    })
    panzoom.pan(10, 10)
    panzoom.zoom(1, { animate: true })

    // Panning and pinch zooming are bound automatically (unless disablePan is true).
    // There are several available methods for zooming
    // that can be bound on button clicks or mousewheel.
    // button.addEventListener('click', panzoom.zoomIn)
    this.elemento.parentElement.addEventListener('wheel', panzoom.zoomWithWheel)
    
  }

  elemento:any;

  selecionou(ponto:any){
    // console.log("Selecionou ",ponto);
    this.emissor.emit(ponto);
  }

}
