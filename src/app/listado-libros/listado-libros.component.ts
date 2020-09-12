import { Component, OnInit, Input } from '@angular/core';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-listado-libros',
  templateUrl: './listado-libros.component.html',
  styleUrls: ['./listado-libros.component.css']
})
export class ListadoLibrosComponent implements OnInit {

  @Input() libros:any = [];

  constructor(private librosservice: LibrosService) { }

    name= '';
    author= '';
    lended='';
    gender= '';
  

  ngOnInit(): void {
  }


  async prestar(id){

    var persona = ((document.getElementById(id) as HTMLInputElement).value);

    if(persona == ""){
      alert ("Debe colocar a quién se presta");
    }
    if (persona != ""){
      var respuesta:any;
      respuesta = await this.librosservice.modificar(id, persona);
      console.log(persona);
      console.log (id);

    }
  }
}
