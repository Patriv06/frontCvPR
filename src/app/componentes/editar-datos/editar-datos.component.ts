import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Persona } from '../datos-persona/persona';
import { PersonaService } from '../datos-persona/persona.service';

@Component({
  selector: 'app-editar-datos',
  templateUrl: './editar-datos.component.html',
  styleUrls: ['./editar-datos.component.css']
})
export class EditarDatosComponent implements OnInit {
  

  perso!: Persona[];
 
  constructor(private personaServicio:PersonaService, router:Router) { }
  ngOnInit(): void {
      this.traerPersona();
      
     
   
  }
  public permiso:any;
  pers = {
    
    idPersona:1,
    nombre:"Pato ",
    apellido:"Rivas ",
    fechaNac:11111,
    telefono:" ",
    mail:"",
    objetivos:"",
    sobreMi:"",

  }

  private traerPersona(){
     this.personaServicio.obtenerPersona().subscribe((dato: Persona[]) =>{this.perso = dato})
    
     }

  public modifPersona(pers:Persona){
    console.log(pers);
    console.log("Estoy en modificar persona")
 
    
    this.personaServicio.modificarPersona(pers).subscribe((dato: { idPersona: number; nombre: string; apellido: string; fechaNac: number; telefono: string; mail: string; objetivos: string; sobreMi: string; }) =>{pers = dato})


  }
  ngAfterViewChecked() {   

    this.permiso = localStorage.getItem('permiso');
  
    return this.permiso;

  }
  recargar(): void {
    window.location.reload();
  }
}