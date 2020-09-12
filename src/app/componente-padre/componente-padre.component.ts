import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent implements OnInit {

  lista:any = [];
  

  constructor(private librosService: LibrosService) { }

  async ngOnInit() {

    this.lista = await this.librosService.listaDeLibros();
    
  }


  async agregarLibroALista(){
    
    this.lista = await this.librosService.listaDeLibros();

  }
}
