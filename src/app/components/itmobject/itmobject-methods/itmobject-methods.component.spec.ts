import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmobjectMethodsComponent } from './itmobject-methods.component';

describe('ItmobjectMethodsComponent', () => {
  let component: ItmobjectMethodsComponent;
  let fixture: ComponentFixture<ItmobjectMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItmobjectMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItmobjectMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
