import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idioma } from '../datos-idiomas/idioma';
import { IdiomaService } from '../datos-idiomas/idioma.service';

@Component({
  selector: 'app-editar-idiomas',
  templateUrl: './editar-idiomas.component.html',
  styleUrls: ['./editar-idiomas.component.css']
})
export class EditarIdiomasComponent implements OnInit {

  idiom!: Idioma[];

  constructor(private idiomaServicio:IdiomaService, private router:Router ) { }

ngOnInit(): void {
   this.traerIdioma();

}
public permiso:any;
idio = {
id:1,
nombreIdioma:" ",
nivelIdioma:" ",
}



private traerIdioma(){
  this.idiomaServicio.obtenerIdioma().subscribe(dato =>{this.idiom= dato})}

public modifIdioma(idi:Idioma){
    console.log(idi);
    console.log("Estoy en modificar idioma");
    this.idiomaServicio.modificarIdioma(idi).subscribe(dato =>{idi = dato});
   
  }

  public delIdioma(idioma:Idioma):void{
   this.idiomaServicio.borrarIdioma(idioma).subscribe(dato=>{idioma = dato});

 
 

 }
 public altaIdioma(idi:Idioma){
  console.log(idi);
  console.log("Estoy en alta idioma");
  this.idiomaServicio.crearIdioma(idi).subscribe((dato: { id: number; nombreIdioma: string; nivelIdioma: string;}) =>{idi = dato});
 
  
}
recargar(): void {
  window.location.reload();
}
ngAfterViewChecked() {   

this.permiso = window.localStorage.getItem('permiso');

return this.permiso;


}

}
