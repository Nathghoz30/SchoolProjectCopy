import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatArticleComponent } from './achat-article.component';

describe('AchatArticleComponent', () => {
  let component: AchatArticleComponent;
  let fixture: ComponentFixture<AchatArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AchatArticleComponent]
    });
    fixture = TestBed.createComponent(AchatArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
