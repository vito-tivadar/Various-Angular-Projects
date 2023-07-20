import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragTestItemComponent } from './drag-test-item.component';

describe('DragTestItemComponent', () => {
  let component: DragTestItemComponent;
  let fixture: ComponentFixture<DragTestItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragTestItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragTestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
