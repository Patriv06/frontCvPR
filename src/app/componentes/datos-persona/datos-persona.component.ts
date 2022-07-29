import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Persona } from './persona';
import { PersonaService } from './persona.service';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-datos-persona',
  templateUrl: './datos-persona.component.html',
  styleUrls: ['./datos-persona.component.css']
})
export class DatosPersonaComponent implements OnInit {
  public permiso:any;
  perso!: Persona[];
 
  constructor(private personaServicio:PersonaService) { }

  ngOnInit(): void {
      this.traerPersona();
   
  }
  
  private traerPersona(){
    this.personaServicio.obtenerPersona().subscribe(dato =>{this.perso = dato})
    
    console.log(this.perso);
     }
     ngAfterViewChecked() {   

      this.permiso = localStorage.getItem('permiso');
      console.log(this.permiso);
      console.log("ngAfterViewChecked");
      return this.permiso
  }

 
 


}