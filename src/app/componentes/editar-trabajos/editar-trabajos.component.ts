import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trabajos } from '../datos-trabajos/trabajos';
import { TrabajosService } from '../datos-trabajos/trabajos.service';
@Component({
  selector: 'app-editar-trabajos',
  templateUrl: './editar-trabajos.component.html',
  styleUrls: ['./editar-trabajos.component.css']
})
export class EditarTrabajosComponent implements OnInit {

  trabaj!: Trabajos[];

  constructor(private trabajoServicio:TrabajosService, private router:Router ) { }

ngOnInit(): void { 
   this.traerTrabajos();

}
public permiso:any;
trab = {
  id:1,
  nombreTrabajo:" ",
  puestoTrabajo:" ",
  descripcionTrabajo:" ",
  tipoTrabajo:" ",
  redesTrabajo:" ",
  fechainicTrabajo:new Date(),
  fechafinTrabajo: new Date()
}




public traerTrabajos(){
 this.trabajoServicio.obtenerTrabajos().subscribe(dato =>{this.trabaj = dato})
  }
public modifTrabajos(tra:Trabajos){
  if (tra.nombreTrabajo != " "){
    if (tra.fechainicTrabajo < tra.fechafinTrabajo){
      this.trabajoServicio.modificarTrabajos(tra).subscribe(()=>this.traerTrabajos())
  }
  else {alert("la fecha de inicio debe ser menor a la fecha de fin")}
  
} else{  alert("El nombre no puede estar en blanco")}
 
}
   
    
    
  

  public delTrabajos(trabajos:Trabajos):void{
    this.trabajoServicio.borrarTrabajos(trabajos).subscribe(()=>this.traerTrabajos());
  
   
 
 

 }
 public altaTrabajos(tra:Trabajos){
  
  if (tra.nombreTrabajo!= " "){
    if (tra.fechainicTrabajo < tra.fechafinTrabajo){
  this.trabajoServicio.crearTrabajos(tra).subscribe((dato: { id: number; nombreTrabajo: string; puestoTrabajo: string; descripcionTrabajo: string; tipoTrabajo: string; redesTrabajo:string; fechainicTrabajo: Date; fechafinTrabajo: Date; })=>this.traerTrabajos());
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

