import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>

        <button (click)=" acumular( base ) " >+</button>
        <span>{{ numero }}</span>
        <button (click)=" acumular( -base ) ">-</button>
    `
})
export class ContadorComponent {
    title = 'bases';
    numero = 1;
    base: number = 5;

    acumular( valor: number){
        this.numero += valor;
    }
}