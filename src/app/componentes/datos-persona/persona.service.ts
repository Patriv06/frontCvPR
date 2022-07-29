import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private baseURL="https://backcvpatrivas.herokuapp.com/ver/personas";
  private modifURL ="https://backcvpatrivas.herokuapp.com/modif/persona"
  constructor(private httpClient :HttpClient) { }
  
  obtenerPersona():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(`${this.baseURL}`);
  }
  //Update 
  modificarPersona( persona:Persona) { 
    console.log(this.modifURL);
    console.log("estoy en el servicio");
    console.log(persona);   
    console.log(Persona)
   return this.httpClient.put<Persona>(`${this.modifURL}`, persona)
}
}