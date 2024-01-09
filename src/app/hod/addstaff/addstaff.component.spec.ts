import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstaffComponent } from './addstaff.component';
import { HttpClientModule } from '@angular/common/http';

describe('AddstaffComponent', () => {
  let component: AddstaffComponent;
  let fixture: ComponentFixture<AddstaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientModule],
      declarations: [AddstaffComponent]
    });
    fixture = TestBed.createComponent(AddstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
