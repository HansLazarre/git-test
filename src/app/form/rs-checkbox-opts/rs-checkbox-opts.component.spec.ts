import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RsCheckboxOptsComponent} from './rs-checkbox-opts.component';

describe('RsCheckboxOptsComponent', () => {
  let component: RsCheckboxOptsComponent;
  let fixture: ComponentFixture<RsCheckboxOptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RsCheckboxOptsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsCheckboxOptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
