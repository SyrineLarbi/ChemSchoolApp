import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNoteSTComponent } from './edit-note-st.component';

describe('EditNoteSTComponent', () => {
  let component: EditNoteSTComponent;
  let fixture: ComponentFixture<EditNoteSTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNoteSTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNoteSTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
