import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToDo} from '../ToDo'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  serviceURL : string ;

  constructor(private http : HttpClient) {
    this.serviceURL = 'http://localhost:3000/todolist'
  }
  addToDo(toDo : ToDo) : Observable<ToDo>{
    return this.http.post<ToDo>(serviceURL,toDo);
  }

}
