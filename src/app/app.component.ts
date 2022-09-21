import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mapa';
  pontos:any = [{
    id:1,
    nome:'A1',
    medida:'6x3',
    x:40,
    y:90,
    situacao:'livre'
  },{
    id:2,
    nome:'A2',
    medida:'6x3',
    x:160,
    y:110,
    situacao:'livre'
  },{
    id:3,
    nome:'A3',
    medida:'6x3',
    x:80,
    y:210,
    situacao:'vendido'
  }];
  recebeu(e:any){
    console.log("Recebeu o ponto ", e);
  }
}
