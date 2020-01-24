import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmobjectImageComponent } from './itmobject-image.component';

describe('ItmobjectImageComponent', () => {
  let component: ItmobjectImageComponent;
  let fixture: ComponentFixture<ItmobjectImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItmobjectImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItmobjectImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
