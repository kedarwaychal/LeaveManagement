import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyLeaveComponent } from './apply-leave.component';
import { HttpClientModule } from '@angular/common/http';

describe('ApplyLeaveComponent', () => {
  let component: ApplyLeaveComponent;
  let fixture: ComponentFixture<ApplyLeaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyLeaveComponent],
      imports:[HttpClientModule]
    });
    fixture = TestBed.createComponent(ApplyLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
