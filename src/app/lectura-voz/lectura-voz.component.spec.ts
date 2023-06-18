import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturaVozComponent } from './lectura-voz.component';

describe('LecturaVozComponent', () => {
  let component: LecturaVozComponent;
  let fixture: ComponentFixture<LecturaVozComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecturaVozComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LecturaVozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
