import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes:string[] = ['Spiderman', 'Hulk', 'Thor', 'Capitán América'];
  
  heroesBorrados:string= '';

  borrarHeroe() {
    this.heroesBorrados = this.heroes.shift() || '';
  } 

}
