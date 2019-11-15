import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmobjectMethodComponent } from './itmobject-method.component';

describe('ItmobjectMethodComponent', () => {
  let component: ItmobjectMethodComponent;
  let fixture: ComponentFixture<ItmobjectMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItmobjectMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItmobjectMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
