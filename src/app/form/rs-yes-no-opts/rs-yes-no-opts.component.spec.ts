import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RsYesNoOptsComponent} from './rs-yes-no-opts.component';

describe('RsYesNoOptsComponent', () => {
  let component: RsYesNoOptsComponent;
  let fixture: ComponentFixture<RsYesNoOptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RsYesNoOptsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsYesNoOptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
