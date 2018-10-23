import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RsCheckboxComponent} from './rs-checkbox.component';

describe('RsCheckboxComponent', () => {
  let component: RsCheckboxComponent;
  let fixture: ComponentFixture<RsCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RsCheckboxComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
