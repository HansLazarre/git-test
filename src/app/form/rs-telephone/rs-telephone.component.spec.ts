import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RsTelephoneComponent} from './rs-telephone.component';

describe('RsTelephoneComponent', () => {
  let component: RsTelephoneComponent;
  let fixture: ComponentFixture<RsTelephoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RsTelephoneComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsTelephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
