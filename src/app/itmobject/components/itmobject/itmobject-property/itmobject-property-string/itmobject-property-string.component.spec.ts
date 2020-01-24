import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmobjectPropertyStringComponent } from './itmobject-property-string.component';

describe('ItmobjectPropertyStringComponent', () => {
  let component: ItmobjectPropertyStringComponent;
  let fixture: ComponentFixture<ItmobjectPropertyStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItmobjectPropertyStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItmobjectPropertyStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
