import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityfeedComponent } from './activityfeed.component';

describe('ActivityfeedComponent', () => {
  let component: ActivityfeedComponent;
  let fixture: ComponentFixture<ActivityfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
