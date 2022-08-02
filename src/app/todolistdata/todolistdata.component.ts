import { Component, OnInit } from '@angular/core';
import toDoList from 'db.json';
import Observable from 'rxjs';

interface ToDo{
  id:number;
  name:string;
  isCompleted:boolean;
}

@Component({
  selector: 'app-todolistdata',
  templateUrl: './todolistdata.component.html',
  styleUrls: ['./todolistdata.component.css']
})
export class TodolistdataComponent implements OnInit {

  constructor() { }

  toDos:ToDo[]=toDoList;

  ngOnInit(): void {   
  }

}
