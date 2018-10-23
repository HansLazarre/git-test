import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RsEmailComponent} from './rs-email.component';

describe('RsEmailComponent', () => {
  let component: RsEmailComponent;
  let fixture: ComponentFixture<RsEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RsEmailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
