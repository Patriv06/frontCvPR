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
    console.log(tra);
    console.log("Estoy en modificar trabajos");
    this.trabajoServicio.modificarTrabajos(tra).subscribe(()=>this.traerTrabajos())
    
    
  }

  public delTrabajos(trabajos:Trabajos):void{
    this.trabajoServicio.borrarTrabajos(trabajos).subscribe(()=>this.traerTrabajos());
  
   
 
 

 }
 public altaTrabajos(tra:Trabajos){
  if (tra.nombreTrabajo!= " "){
  this.trabajoServicio.crearTrabajos(tra).subscribe((dato: { id: number; nombreTrabajo: string; puestoTrabajo: string; descripcionTrabajo: string; tipoTrabajo: string; redesTrabajo:string; fechainicTrabajo: Date; fechafinTrabajo: Date; })=>this.traerTrabajos());
  }else{  alert("El Lugar no puede estar en blanco")}
}
recargar(): void {
  window.location.reload();
}
ngAfterViewChecked() {   

this.permiso = window.localStorage.getItem('permiso');

return this.permiso;


}
}

