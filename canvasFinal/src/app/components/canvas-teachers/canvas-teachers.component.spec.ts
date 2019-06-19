import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasTeachersComponent } from './canvas-teachers.component';

describe('CanvasTeachersComponent', () => {
  let component: CanvasTeachersComponent;
  let fixture: ComponentFixture<CanvasTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
