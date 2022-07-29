import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Hobbies } from './hobbies';


@Injectable({
  providedIn: 'root'
})
export class HobbiesService {

  private baseURL="https://backcvpatrivas.herokuapp.com/ver/hobbies";
  private modifURL ="https://backcvpatrivas.herokuapp.com/modif/hobbies";
  private delURL="https://backcvpatrivas.herokuapp.com/delete/hobbies/";
  private altaURL="https://backcvpatrivas.herokuapp.com/new/hobbies"
  constructor(private httpClient :HttpClient) { }
  
  obtenerHobbie():Observable<Hobbies[]>{
    return this.httpClient.get<Hobbies[]>(`${this.baseURL}`);
  }
  //Update 
  modificarHobbie( hobbie:Hobbies) { 
    console.log(this.modifURL);
    console.log("estoy en el servicio");
    console.log(hobbie);   
    console.log(Hobbies)
   return this.httpClient.put<Hobbies>(`${this.modifURL}`, hobbie)
}
borrarHobbie(hobbie:Hobbies){
  console.log("Estoy en Borrar:", hobbie)
  
 return this.httpClient.delete<Hobbies>(this.delURL+hobbie.id)

  console.log("Estoy en la segunda parte de Borrar:", hobbie)
}
crearHobbie(hobbie:Hobbies){
  console.log("Estoy en Crear:"+ hobbie)
  return this.httpClient.post<Hobbies>(`${this.altaURL}`, hobbie)
}
}
