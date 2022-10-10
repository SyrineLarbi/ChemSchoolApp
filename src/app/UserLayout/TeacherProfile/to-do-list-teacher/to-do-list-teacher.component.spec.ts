import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListTeacherComponent } from './to-do-list-teacher.component';

describe('ToDoListTeacherComponent', () => {
  let component: ToDoListTeacherComponent;
  let fixture: ComponentFixture<ToDoListTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoListTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
