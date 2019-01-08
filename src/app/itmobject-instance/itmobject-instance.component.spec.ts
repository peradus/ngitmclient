import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmobjectInstanceComponent } from './itmobject-instance.component';

describe('ItmobjectInstanceComponent', () => {
  let component: ItmobjectInstanceComponent;
  let fixture: ComponentFixture<ItmobjectInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItmobjectInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItmobjectInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
