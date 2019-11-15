import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmobjectPropertyComponent } from './itmobject-property.component';

describe('ItmobjectPropertyComponent', () => {
  let component: ItmobjectPropertyComponent;
  let fixture: ComponentFixture<ItmobjectPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItmobjectPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItmobjectPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
