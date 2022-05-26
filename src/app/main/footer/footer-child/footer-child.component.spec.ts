import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterChildComponent } from './footer-child.component';

describe('FooterChildComponent', () => {
  let component: FooterChildComponent;
  let fixture: ComponentFixture<FooterChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
