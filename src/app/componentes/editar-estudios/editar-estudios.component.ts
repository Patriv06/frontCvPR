import { Component, OnInit, SimpleChanges,  } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from '../datos-estudios/estudios';
import { EstudiosService } from '../datos-estudios/estudios.service';






@Component({
  selector: 'app-editar-estudios',
  templateUrl: './editar-estudios.component.html',
  styleUrls: ['./editar-estudios.component.css']
})

export class EditarEstudiosComponent implements OnInit {
  estud!: Estudios[];

    constructor(private estudiosServicio:EstudiosService, private router:Router ) { }

   ngOnInit(): void {
     this.traerEstudios();}

 
 public permiso:any;

 est = {
  id:1,
  tituloEstudios:" ",
  institucionEstudios:" ",
  nivelEstudios:" ",
  redesEstudios:" ",
  fechainicEstudios:new Date(),
  fechafinEstudios: new Date()
}



public traerEstudios(){
this.estudiosServicio.obtenerEstudios().subscribe(dato =>{this.estud = dato});

 }
public modifEstudios(est:Estudios){
  if (est.institucionEstudios != " "){
    if (est.fechainicEstudios < est.fechafinEstudios){
   this.estudiosServicio.modificarEstudios(est).subscribe(()=>this.traerEstudios())
  }
  else {
   
    alert("la fecha de inicio debe ser menor a la fecha de fin")}
  
} else{  alert("El nombre no puede estar en blanco")}
 
}
 public delEstudios(estudios:Estudios):void{
   this.estudiosServicio.borrarEstudios(estudios).subscribe(()=>this.traerEstudios());
   
   
}
public altaEstudios(estu:Estudios){
  if (estu.institucionEstudios != " "){
    if (estu.fechainicEstudios < estu.fechafinEstudios){

 this.estudiosServicio.crearEstudios(estu).subscribe((dato: { id: number; tituloEstudios: string;institucionEstudios: string; nivelEstudios: string; redesEstudios: string; fechainicEstudios: Date; fechafinEstudios: Date; }) =>this.traerEstudios());
}
else {
 
  alert("la fecha de inicio debe ser menor a la fecha de fin")}

} else{  alert("El nombre no puede estar en blanco")}

}
recargar(): void {
 window.location.reload();
}
ngAfterViewChecked() {   

this.permiso = window.localStorage.getItem('permiso');

return this.permiso;

}
ngOnChange(){
  window.location.reload();
}
 }

