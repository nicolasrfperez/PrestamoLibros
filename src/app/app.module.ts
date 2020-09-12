import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ComponentePadreComponent } from './componente-padre/componente-padre.component';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';
import { LibrosPrestadosComponent } from './libros-prestados/libros-prestados.component';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ComponentePadreComponent,
    FormularioLibroComponent,
    LibrosPrestadosComponent,
    ListadoLibrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
