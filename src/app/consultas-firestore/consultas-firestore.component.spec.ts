import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasFirestoreComponent } from './consultas-firestore.component';

describe('ConsultasFirestoreComponent', () => {
  let component: ConsultasFirestoreComponent;
  let fixture: ComponentFixture<ConsultasFirestoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasFirestoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultasFirestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
