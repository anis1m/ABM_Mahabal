import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardcommonComponent } from './dashboardcommon.component';

describe('DashboardcommonComponent', () => {
  let component: DashboardcommonComponent;
  let fixture: ComponentFixture<DashboardcommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardcommonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardcommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
