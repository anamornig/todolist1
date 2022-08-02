import { Component } from '@angular/core';
import { ToDo } from './ToDo';
import toDos from 'db.json';
import Observable from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toDos : {id: any,name:string,isCompleted:boolean}[]=toDos;
  newToDo : string;

  saveToDo(){
    if(this.newToDo){
      let toDo = new ToDo();
      toDo.name = this.newToDo;
      toDo.isCompleted = true;
      this.toDos.push(toDo);
      this.newToDo= '';
    }else{
      alert('Please enter something to do')
    }
  }
  done(id:number){
    this.toDos[id].isCompleted =!this.toDos[id].isCompleted;
  }

  remove(id:number){
    this.toDos = this.toDos.filter((v,i)=> i !== id);
  }
  
  setToDos():void{
    for (let i = 0; i < this.toDos.length;){
      this.toDos.push(new ToDo)
    }
  }

}
