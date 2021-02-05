import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCarrierShipperTransporterComponent } from './register-carrier-shipper-transporter.component';

describe('RegisterCarrierShipperTransporterComponent', () => {
  let component: RegisterCarrierShipperTransporterComponent;
  let fixture: ComponentFixture<RegisterCarrierShipperTransporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCarrierShipperTransporterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCarrierShipperTransporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
