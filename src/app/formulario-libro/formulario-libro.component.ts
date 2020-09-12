import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GenerosService } from '../generos.service';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-formulario-libro',
  templateUrl: './formulario-libro.component.html',
  styleUrls: ['./formulario-libro.component.css']
})
export class FormularioLibroComponent implements OnInit {
  
  @Output() hayUnNuevoLibro = new EventEmitter();

  libro = {
    name: '',
    author: '',
    lended:'',
    gender: ''
  };
  

  generos:any;

   //prueba para generosService
  constructor(private generosService: GenerosService, private librosService: LibrosService) { }

  ngOnInit(): void {
    this.generos = this.generosService.listaGeneros();
    console.log('generos',this.generos);
  }

  async guardar(){
    
    //Envio estructura libro al metodo creado en el service
    var respuesta: any;
    respuesta = await this.librosService.guardarLibro(this.libro);
    console.log("Libro guardado: ", this.libro);
    this.hayUnNuevoLibro.emit();  //aviso que guarde el libro
  }

    
   
}    


  


