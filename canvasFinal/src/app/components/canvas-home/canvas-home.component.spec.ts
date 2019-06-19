import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasHomeComponent } from './canvas-home.component';

describe('CanvasHomeComponent', () => {
  let component: CanvasHomeComponent;
  let fixture: ComponentFixture<CanvasHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
