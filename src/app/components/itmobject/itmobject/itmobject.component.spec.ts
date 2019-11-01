import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmobjectComponent } from './itmobject.component';

describe('ItmobjectComponent', () => {
  let component: ItmobjectComponent;
  let fixture: ComponentFixture<ItmobjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItmobjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItmobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
