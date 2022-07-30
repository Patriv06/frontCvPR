import { Component, OnInit } from '@angular/core';
import { Trabajos } from './trabajos';
import { TrabajosService } from './trabajos.service';
@Component({
  selector: 'app-datos-trabajos',
  templateUrl: './datos-trabajos.component.html',
  styleUrls: ['./datos-trabajos.component.css']
})
export class DatosTrabajosComponent implements OnInit {

  trabaj!: Trabajos[];
  public permiso: any;  
  constructor(private trabajosServicio:TrabajosService) { }

  ngOnInit(): void {
     this.traerTrabajos();
  
 }
 
 private traerTrabajos(){
 
   this.trabajosServicio.obtenerTrabajos().subscribe(dato =>{this.trabaj = dato})
    
    console.log(this.trabaj);
    }
    ngAfterViewChecked() {   

      this.permiso =localStorage.getItem('permiso');
      console.log(this.permiso);
      console.log("ngAfterViewChecked");
      return this.permiso
  
    }
  
  
 }





