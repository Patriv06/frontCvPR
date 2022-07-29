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
  descripcionProyecto:" ",
  fechainicProyecto:new Date(),
  fechafinProyecto: new Date()
}
 
 
 
 
 public traerProyectos(){
  this.proyectosServicio.obtenerProyectos().subscribe(dato =>{this.proyec = dato})
   }
 public modifProyectos(pro:Proyectos){
     console.log(pro);
     console.log("Estoy en modificar proyectos");
     this.proyectosServicio.modificarProyectos(pro).subscribe(dato=>{pro= dato})
     
     
   }
 
   public delProyectos(proyectos:Proyectos):void{
     this.proyectosServicio.borrarProyectos(proyectos).subscribe(dato=>{proyectos= dato});
   
    
  
  
 
  }
  public altaProyectos(pro:Proyectos){
   console.log(pro);
   console.log("Estoy en alta Proyectos");
   this.proyectosServicio.crearProyectos(pro).subscribe((dato: { id: number; nombreProyecto: string; descripcionProyecto: string; fechainicProyecto: Date; fechafinProyecto: Date; }) =>{pro= dato});
   
 }
 recargar(): void {
   window.location.reload();
 }
 ngAfterViewChecked() {   
 
 this.permiso = window.localStorage.getItem('permiso');
 
 return this.permiso;
 
 
 }

}
