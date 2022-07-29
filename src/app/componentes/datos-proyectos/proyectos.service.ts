import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from './proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

    private baseURL="https://backcvpatrivas.herokuapp.com/ver/proyecto";
    private modifURL ="https://backcvpatrivas.herokuapp.com/modif/proyecto";
    private delURL="https://backcvpatrivas.herokuapp.com/delete/proyecto/";
    private altaURL="https://backcvpatrivas.herokuapp.com/new/proyecto"
    
    proy = {
      id:1,
      nombreProyecto:" ",
      descripcionProyecto:" ",
      fechainicProyecto:new Date(),
      fechafinProyecto: new Date()
    }
  
     
    
    constructor(private httpClient :HttpClient) { }
    
  
    obtenerProyectos():Observable<Proyectos[]>{
      console.log("Estoy en Obtener:"+ Proyectos)
    
      return this.httpClient.get <Proyectos[]>(`${this.baseURL}`);
      
      
    }
  
    modificarProyectos( proyectos:Proyectos) { 
      console.log("Estoy en modificar:"+ proyectos)
     return this.httpClient.put<Proyectos>(`${this.modifURL}`, proyectos)
    
    
    }
  
    borrarProyectos(proyectos:Proyectos){
      console.log("Estoy en Borrar:"+ proyectos)
      
     return this.httpClient.delete<Proyectos>(this.delURL+proyectos.id)
    }
    crearProyectos(proyectos:Proyectos){
      console.log("Estoy en Crear:"+ proyectos)
      return this.httpClient.post<Proyectos>(`${this.altaURL}`, proyectos)
    }
  
  }
  
  
  
  

