import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Idioma } from './idioma';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {
  private baseURL="https://backcvpatrivas.herokuapp.com/ver/idioma";
  private modifURL ="https://backcvpatrivas.herokuapp.com/modif/idioma";
  private delURL="https://backcvpatrivas.herokuapp.com/delete/idioma/";
  private altaURL="https://backcvpatrivas.herokuapp.com/new/idioma"
  constructor(private httpClient :HttpClient) { }
  
  obtenerIdioma():Observable<Idioma[]>{
    return this.httpClient.get<Idioma[]>(`${this.baseURL}`);
  }
  
  //Update 
  modificarIdioma( idioma:Idioma) { 
    console.log(this.modifURL);
    console.log("estoy en el servicio");
    console.log(idioma);   
    console.log(Idioma)
   return this.httpClient.put<Idioma>(`${this.modifURL}`, idioma)
}
borrarIdioma(idioma:Idioma){
  console.log("Estoy en Borrar:"+ idioma)
  
 return this.httpClient.delete<Idioma>(this.delURL+idioma.id)
}
crearIdioma(idioma:Idioma){
  console.log("Estoy en Crear:"+ idioma)
  return this.httpClient.post<Idioma>(`${this.altaURL}`, idioma)
}
}
