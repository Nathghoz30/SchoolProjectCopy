import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactVendeurComponent } from './contact-vendeur.component';

describe('ContactVendeurComponent', () => {
  let component: ContactVendeurComponent;
  let fixture: ComponentFixture<ContactVendeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactVendeurComponent]
    });
    fixture = TestBed.createComponent(ContactVendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
