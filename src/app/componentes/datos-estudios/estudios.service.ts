import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudios } from './estudios';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  private baseURL="https://backcvpatrivas.herokuapp.com/ver/estudios";
  private modifURL ="https://backcvpatrivas.herokuapp.com/modif/estudios";
  private delURL="https://backcvpatrivas.herokuapp.com/delete/estudios/";
  private altaURL="https://backcvpatrivas.herokuapp.com/new/estudios"
  est = {
    id:1,
    tituloEstudios:" ",
    institucionEstudios:" ",
    nivelEstudios:" ",
    redesEstudios:" ",
    fechainicEstudios:new Date(),
    fechafinEstudios: new Date()
  }
  
  constructor(private httpClient :HttpClient) { }
  
  obtenerEstudios():Observable<Estudios[]>{
   
    
    return this.httpClient.get<Estudios[]>(`${this.baseURL}`);
    
       
  }

  modificarEstudios( estudios:Estudios) { 
   
   return this.httpClient.put<Estudios>(`${this.modifURL}`, estudios)

  
  }

  borrarEstudios(estudios:Estudios){
   
   return this.httpClient.delete<Estudios>(this.delURL+ estudios.id)



   
  }
  crearEstudios(estudios:Estudios){
   
    return this.httpClient.post<Estudios>(`${this.altaURL}`, estudios)
  
  }

}

