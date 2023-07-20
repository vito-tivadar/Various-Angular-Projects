import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiuiButtonComponent } from './tiui-button.component';

describe('TiuiButtonComponent', () => {
  let component: TiuiButtonComponent;
  let fixture: ComponentFixture<TiuiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiuiButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiuiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
