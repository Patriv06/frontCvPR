import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hobbies } from '../datos-hobbies/hobbies';
import { HobbiesService } from '../datos-hobbies/hobbies.service';


@Component({
  selector: 'app-editar-hobbies',
  templateUrl: './editar-hobbies.component.html',
  styleUrls: ['./editar-hobbies.component.css']
})
export class EditarHobbiesComponent implements OnInit {

  hobb!: Hobbies[];

  constructor(private hobbiServicio:HobbiesService, private router:Router ) { }

ngOnInit(): void {
   this.traerHobbie();

}
public permiso:any;
hob = {
id:1,
nombreHobbie:" ",
descripcioHobbie:" ",
}



private traerHobbie(){
  this.hobbiServicio.obtenerHobbie().subscribe(dato =>{this.hobb= dato})}

public modifHobbie(hob:Hobbies){
   
    this.hobbiServicio.modificarHobbie(hob).subscribe(dato =>{hob = dato});
    
  }

  public delHobbie(hobbie:Hobbies):void{
   this.hobbiServicio.borrarHobbie(hobbie).subscribe(dato=>{hobbie = dato});
  
   
 }
 public altaHobbie(hobbi:Hobbies){
  
  this.hobbiServicio.crearHobbie(hobbi).subscribe((dato: { id: number; nombreHobbie: string; descripcioHobbie: string;}) =>{hobbi = dato});
  
  
}
recargar(): void {
  window.location.reload();
}
ngAfterViewChecked() {   

this.permiso = window.localStorage.getItem('permiso');

return this.permiso;


}

}
