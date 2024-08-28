import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddminDashboardComponent } from './addmin-dashboard.component';

describe('AddminDashboardComponent', () => {
  let component: AddminDashboardComponent;
  let fixture: ComponentFixture<AddminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddminDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
