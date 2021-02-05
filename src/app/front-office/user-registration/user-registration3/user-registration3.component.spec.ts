import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistration3Component } from './user-registration3.component';

describe('UserRegistration3Component', () => {
  let component: UserRegistration3Component;
  let fixture: ComponentFixture<UserRegistration3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegistration3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistration3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
