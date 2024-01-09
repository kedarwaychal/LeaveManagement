import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuboneComponent } from './subone.component';

describe('SuboneComponent', () => {
  let component: SuboneComponent;
  let fixture: ComponentFixture<SuboneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuboneComponent]
    });
    fixture = TestBed.createComponent(SuboneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
