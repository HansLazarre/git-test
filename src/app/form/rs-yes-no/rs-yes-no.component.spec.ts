import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RsYesNoComponent} from './rs-yes-no.component';

describe('RsYesNoComponent', () => {
  let component: RsYesNoComponent;
  let fixture: ComponentFixture<RsYesNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RsYesNoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsYesNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
