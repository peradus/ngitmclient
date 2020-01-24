import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmobjectPropertiesComponent } from './itmobject-properties.component';

describe('ItmobjectPropertiesComponent', () => {
  let component: ItmobjectPropertiesComponent;
  let fixture: ComponentFixture<ItmobjectPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItmobjectPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItmobjectPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
