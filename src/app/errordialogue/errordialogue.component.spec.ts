import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrordialogueComponent } from './errordialogue.component';

describe('ErrordialogueComponent', () => {
  let component: ErrordialogueComponent;
  let fixture: ComponentFixture<ErrordialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrordialogueComponent]
    });
    fixture = TestBed.createComponent(ErrordialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
