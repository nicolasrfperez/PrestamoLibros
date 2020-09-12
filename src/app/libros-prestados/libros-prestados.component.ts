import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-libros-prestados',
  templateUrl: './libros-prestados.component.html',
  styleUrls: ['./libros-prestados.component.css']
})
export class LibrosPrestadosComponent implements OnInit {

  @Input() libroPrestado:any = [];
  @Output() libroFuePrestado = new EventEmitter();
  
  name = '';
  author = '';
  lended = '';
  gender = '';
  
  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
  }

  async aListado(id){
    var persona = ((document.getElementById(id) as HTMLInputElement).value);

    if(persona != ""){
      alert ("Debe borrar el nombre");
    }
    if (persona == ""){
      var respuesta:any;
      respuesta = await this.librosService.modificar(id, persona);
      console.log(persona);
      console.log (id);

    }
  }
}
