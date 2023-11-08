import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoddashboardComponent } from './hoddashboard.component';

describe('HoddashboardComponent', () => {
  let component: HoddashboardComponent;
  let fixture: ComponentFixture<HoddashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoddashboardComponent]
    });
    fixture = TestBed.createComponent(HoddashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
