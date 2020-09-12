import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  url = 'https://aqueous-spire-30568.herokuapp.com/';

  constructor(private http: HttpClient) { }

  //Metodo para solicitar guardar un libro con todos los datos
  async guardarLibro(unLibro){
    try{
      var resultado: any;

      resultado = await this.http.post(this.url+"libro", unLibro).toPromise(); //Post para guardar

      console.log(resultado);
      
      return resultado;
    }
    catch(error){
      console.log(error);
    }
    
  }

  
  //Metodo para solicitar guardar un libro prestado con todos los datos
  async guardarLibroPrestado(unLibro){
    try{
      var resultado: any;
  
      resultado = await this.http.post(this.url+"libro", unLibro.name+unLibro.author+unLibro.lended+unLibro.gender).toPromise(); //Post para guardar
  
      console.log(resultado);
        
      return resultado;
    }
    catch(error){
      console.log(error);
    }
      
  }

  //Metodo para recibir el listado de todos los libros
  async listaDeLibros(){
    try{
      var resultado: any;

      resultado = await this.http.get(this.url+"libro").toPromise(); 
    
      return resultado;
    }
    catch(error){
      console.log(error);
    }
    
  }

  async modificar(id, persona){
    try{
      var resultado: any;
      resultado = await this.http.put(this.url+"libro/"+id, persona).toPromise();
      console.log(resultado);
      return resultado;
      
    }
    catch(error){
      console.log(error);
      
    }
  }

  async getGenero(){
    try{
      var resultado: any;
      resultado = await this.http.get(this.url+"genero").toPromise();
      return resultado;
    }
    catch(error){
      console.log(error);
    }
  }

  async postGenero(unLibro){
    try{
      var resultado: any;
      resultado = await this.http.post(this.url+"genero", unLibro.name).toPromise();
      return resultado;
    }
    catch(error){
      console.log(error);
    }
  }

  
}
