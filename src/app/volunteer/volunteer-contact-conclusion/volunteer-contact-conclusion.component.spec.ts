import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VolunteerContactConclusionComponent} from './volunteer-contact-conclusion.component';

describe('VolunteerContactConclusionComponent', () => {
  let component: VolunteerContactConclusionComponent;
  let fixture: ComponentFixture<VolunteerContactConclusionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerContactConclusionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerContactConclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
