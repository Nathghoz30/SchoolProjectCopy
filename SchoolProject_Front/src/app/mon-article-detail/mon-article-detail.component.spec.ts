import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonArticleDetailComponent } from './mon-article-detail.component';

describe('MonArticleDetailComponent', () => {
  let component: MonArticleDetailComponent;
  let fixture: ComponentFixture<MonArticleDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonArticleDetailComponent]
    });
    fixture = TestBed.createComponent(MonArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
