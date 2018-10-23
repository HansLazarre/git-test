import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VolunteerAssistantListComponent} from './volunteer-assistant-list.component';

describe('VolunteerAssistantListComponent', () => {
  let component: VolunteerAssistantListComponent;
  let fixture: ComponentFixture<VolunteerAssistantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerAssistantListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerAssistantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
