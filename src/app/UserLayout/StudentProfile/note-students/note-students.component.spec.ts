import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteStudentsComponent } from './note-students.component';

describe('NoteStudentsComponent', () => {
  let component: NoteStudentsComponent;
  let fixture: ComponentFixture<NoteStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
