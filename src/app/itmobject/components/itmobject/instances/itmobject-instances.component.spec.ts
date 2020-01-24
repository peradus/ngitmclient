import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmobjectInstancesComponent } from './itmobject-instances.component';

describe('ItmobjectInstancesComponent', () => {
  let component: ItmobjectInstancesComponent;
  let fixture: ComponentFixture<ItmobjectInstancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItmobjectInstancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItmobjectInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
