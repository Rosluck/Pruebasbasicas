import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl :'heroe.component.html'

})

export class HeroeComponent{
    nombre : string='ironman';
    edad: number =45;

    get nombreCapitalizado(){
        return this.nombre.toLocaleUpperCase();
    }

    obtenerNombre(): string{
        
        return `${this.nombre} - ${this.edad}`;
        //return this.nombre+' - '+this.edad     (es lo mismo pero es para el template)
    }

    cambiarNombre(): void{
        this.nombre ='Spiderman';
    }
    cambiarEdad():void{
        this.edad = 90;
    }
}