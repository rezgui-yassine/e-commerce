import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMarouselComponent } from './main-marousel.component';

describe('MainMarouselComponent', () => {
  let component: MainMarouselComponent;
  let fixture: ComponentFixture<MainMarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainMarouselComponent]
    });
    fixture = TestBed.createComponent(MainMarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
