import { Component, OnInit } from '@angular/core';
import { Estudios } from './estudios';
import { EstudiosService } from './estudios.service';

@Component({
  selector: 'app-datos-estudios',
  templateUrl: './datos-estudios.component.html',
  styleUrls: ['./datos-estudios.component.css']
})
export class DatosEstudiosComponent implements OnInit {
  estud!: Estudios[];
  public permiso: any;  
  constructor(private estudiosServicio:EstudiosService) { }

  ngOnInit(): void {
     this.traerEstudios();
  
 }
 
 private traerEstudios(){
   this.estudiosServicio.obtenerEstudios().subscribe(dato =>{this.estud = dato})
   
    
    }
    ngAfterViewChecked() {   

      this.permiso =localStorage.getItem('permiso');
      
      return this.permiso
  
    }
  
  
 }


