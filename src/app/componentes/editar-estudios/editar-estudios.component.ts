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
   console.log(est);
   console.log("Estoy en modificar estudios");
   this.estudiosServicio.modificarEstudios(est).subscribe(()=>this.traerEstudios())

 
 }

 public delEstudios(estudios:Estudios):void{
   this.estudiosServicio.borrarEstudios(estudios).subscribe(()=>this.traerEstudios());
   
   
}
public altaEstudios(estu:Estudios){
 console.log(estu);
 console.log("Estoy en alta trabajos");
 this.estudiosServicio.crearEstudios(estu).subscribe((dato: { id: number; tituloEstudios: string;institucionEstudios: string; nivelEstudios: string; redesEstudios: string; fechainicEstudios: Date; fechafinEstudios: Date; }) =>this.traerEstudios());
 this.recargar()
 
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

