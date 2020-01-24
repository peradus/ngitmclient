import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmobjectPropertyNumericComponent } from './itmobject-property-numeric.component';

describe('ItmobjectPropertyNumericComponent', () => {
  let component: ItmobjectPropertyNumericComponent;
  let fixture: ComponentFixture<ItmobjectPropertyNumericComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItmobjectPropertyNumericComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItmobjectPropertyNumericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
