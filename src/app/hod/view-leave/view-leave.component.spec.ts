import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeaveComponent } from './view-leave.component';
import { HttpClientModule } from '@angular/common/http';

describe('ViewLeaveComponent', () => {
  let component: ViewLeaveComponent;
  let fixture: ComponentFixture<ViewLeaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ViewLeaveComponent]
    });
    fixture = TestBed.createComponent(ViewLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
