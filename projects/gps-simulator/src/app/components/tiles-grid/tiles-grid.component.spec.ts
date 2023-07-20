import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesGridComponent } from './tiles-grid.component';

describe('TilesGridComponent', () => {
  let component: TilesGridComponent;
  let fixture: ComponentFixture<TilesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TilesGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TilesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
