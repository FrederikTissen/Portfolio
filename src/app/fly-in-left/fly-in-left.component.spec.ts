import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyInLeftComponent } from './fly-in-left.component';

describe('FlyInLeftComponent', () => {
  let component: FlyInLeftComponent;
  let fixture: ComponentFixture<FlyInLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyInLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlyInLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
