import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaReparacionComponent } from './nueva-reparacion.component';

describe('NuevaReparacionComponent', () => {
  let component: NuevaReparacionComponent;
  let fixture: ComponentFixture<NuevaReparacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaReparacionComponent]
    });
    fixture = TestBed.createComponent(NuevaReparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
