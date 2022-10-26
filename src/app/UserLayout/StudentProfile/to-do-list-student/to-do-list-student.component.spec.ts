import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListStudentComponent } from './to-do-list-student.component';

describe('ToDoListStudentComponent', () => {
  let component: ToDoListStudentComponent;
  let fixture: ComponentFixture<ToDoListStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoListStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
