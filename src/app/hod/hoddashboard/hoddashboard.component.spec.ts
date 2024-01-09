import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoddashboardComponent } from './hoddashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

describe('HoddashboardComponent', () => {
  let component: HoddashboardComponent;
  let fixture: ComponentFixture<HoddashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientModule,MatDialog],
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
