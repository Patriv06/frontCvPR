import { Component, OnInit } from '@angular/core';
import { Proyectos } from './proyectos';
import { ProyectosService } from './proyectos.service';

@Component({
  selector: 'app-datos-proyectos',
  templateUrl: './datos-proyectos.component.html',
  styleUrls: ['./datos-proyectos.component.css']
})
export class DatosProyectosComponent implements OnInit {

  proy!: Proyectos[];
  public permiso: any;  
  constructor(private proyectosServicio:ProyectosService) { }

  ngOnInit(): void {
     this.traerProyectos();
  
 }
 
 private traerProyectos(){
   this.proyectosServicio.obtenerProyectos().subscribe(dato =>{this.proy = dato})
   
    console.log(this.proy);
    }
    ngAfterViewChecked() {   

      this.permiso =localStorage.getItem('permiso');
      console.log(this.permiso);
      console.log("ngAfterViewChecked");
      return this.permiso
  
    }
  

}
