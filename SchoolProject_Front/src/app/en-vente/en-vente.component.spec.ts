import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnVenteComponent } from './en-vente.component';

describe('EnVenteComponent', () => {
  let component: EnVenteComponent;
  let fixture: ComponentFixture<EnVenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnVenteComponent]
    });
    fixture = TestBed.createComponent(EnVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
