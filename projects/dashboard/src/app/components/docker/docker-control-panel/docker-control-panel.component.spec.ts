import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerControlPanelComponent } from './docker-control-panel.component';

describe('DockerControlPanelComponent', () => {
  let component: DockerControlPanelComponent;
  let fixture: ComponentFixture<DockerControlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockerControlPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DockerControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
