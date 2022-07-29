import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trabajos } from './trabajos';

@Injectable({
  providedIn: 'root'
})
  
export class TrabajosService {
  private baseURL="https://backcvpatrivas.herokuapp.com/ver/trabajo";
  private modifURL ="https://backcvpatrivas.herokuapp.com/modif/trabajo";
  private delURL="https://backcvpatrivas.herokuapp.com/delete/trabajo/";
  private altaURL="https://backcvpatrivas.herokuapp.com/new/trabajo"
  
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
 
   
  
  constructor(private httpClient :HttpClient) { }
  

  obtenerTrabajos():Observable<Trabajos[]>{
    console.log("Estoy en Obtener:"+ Trabajos)
  
    return this.httpClient.get<Trabajos[]>(`${this.baseURL}`);
    
    
  }

  modificarTrabajos( trabajos:Trabajos) { 
    console.log("Estoy en modificar:"+ trabajos)
   return this.httpClient.put<Trabajos>(`${this.modifURL}`, trabajos)
  
  
  }

  borrarTrabajos(trabajos:Trabajos){
    console.log("Estoy en Borrar:"+ trabajos)
    
   return this.httpClient.delete<Trabajos>(this.delURL+trabajos.id)
  }
  crearTrabajos(trabajos:Trabajos){
    console.log("Estoy en Crear:"+ trabajos)
    return this.httpClient.post<Trabajos>(`${this.altaURL}`, trabajos)
  }

}



