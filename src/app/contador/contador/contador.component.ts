import { Component } from "@angular/core";

@Component({
        selector: 'app-contador',
        template:`<h1>{{title}}</h1>
        <span> {{numero}}</span>
        <button (click)="acumular(1)"> +1 </button>
        <button (click)="acumular(-1)"> -1 </button>
        
        <h3>La base es : <strong>{{base2}}</strong></h3>
        
        <button (click)="sumar(base)">+5</button>
        `
    })
export class ContadorComponent{
    title: string = 'Contado APP';
    numero: number =10;
  
    acumular(valor: number){
      this.numero+= valor;
    }
  
    base: number = 5;
    base2: number =0;
    sumar(valor2: number){
      this.base2 += valor2;
    }
}