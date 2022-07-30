import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from '../datos-proyectos/proyectos';
import { ProyectosService } from '../datos-proyectos/proyectos.service';


@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {
  proyec!: Proyectos[];

  constructor(private proyectosServicio:ProyectosService, private router:Router ) { }

  ngOnInit(): void {
    this.traerProyectos();
 
 }
 public permiso:any;
 proy = {
  id:1,
  nombreProyecto:" ",
  descripcioProyecto:" ",
  fechainicProyecto:new Date(),
  fechafinProyecto: new Date()
}
 
 
 
 
 public traerProyectos(){
  this.proyectosServicio.obtenerProyectos().subscribe(dato =>{this.proyec = dato})
   }
 public modifProyectos(pro:Proyectos){
  if (pro.nombreProyecto != " "){
    if (pro.fechainicProyecto < pro.fechafinProyecto){
   this.proyectosServicio.modificarProyectos(pro).subscribe(()=>this.traerProyectos())
  }
  else {alert("la fecha de inicio debe ser menor a la fecha de fin")}
  
} else{  alert("El nombre no puede estar en blanco")}
 
}
     
     
   
 
   public delProyectos(proyectos:Proyectos):void{
     this.proyectosServicio.borrarProyectos(proyectos).subscribe(()=>this.traerProyectos());
   
    
  
  
 
  }
  public altaProyectos(pro:Proyectos){
    if (pro.nombreProyecto != " "){
      if (pro.fechainicProyecto < pro.fechafinProyecto){
   this.proyectosServicio.crearProyectos(pro).subscribe((dato: { id: number; nombreProyecto: string; descripcioProyecto: string; fechainicProyecto: Date; fechafinProyecto: Date; }) =>{pro= dato});
      }
else {alert("la fecha de inicio debe ser menor a la fecha de fin")}

} else{  alert("El nombre no puede estar en blanco")}

}
 recargar(): void {
   window.location.reload();
 }
 ngAfterViewChecked() {   
 
 this.permiso = window.localStorage.getItem('permiso');
 
 return this.permiso;
 
 
 }

}
