import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RsTextareaComponent} from './rs-textarea.component';

describe('RsTextareaComponent', () => {
  let component: RsTextareaComponent;
  let fixture: ComponentFixture<RsTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RsTextareaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
