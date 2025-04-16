import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagecommonComponent } from './homepagecommon.component';

describe('HomepagecommonComponent', () => {
  let component: HomepagecommonComponent;
  let fixture: ComponentFixture<HomepagecommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepagecommonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepagecommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
