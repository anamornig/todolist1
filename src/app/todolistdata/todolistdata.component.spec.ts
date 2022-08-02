import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistdataComponent } from './todolistdata.component';

describe('TodolistdataComponent', () => {
  let component: TodolistdataComponent;
  let fixture: ComponentFixture<TodolistdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
