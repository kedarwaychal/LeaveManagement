import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogApplyLeaveComponent } from './dialog-apply-leave.component';

describe('DialogApplyLeaveComponent', () => {
  let component: DialogApplyLeaveComponent;
  let fixture: ComponentFixture<DialogApplyLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogApplyLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogApplyLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
