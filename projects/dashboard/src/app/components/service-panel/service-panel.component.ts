import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'service-panel',
  templateUrl: './service-panel.component.html',
  styleUrls: ['./service-panel.component.css'],
})
export class ServicePanelComponent implements OnInit {
  @Input('serviceInfo') serviceInfo: ServiceInfo = {
    title: 'No ServiceInfo Provided',
    description: 'Use: [serviceInfo]="serviceInfoVar"',
    icon: 'assets/icons/other-icons/Warning-Message-32.png',
    isRunning: false,
    editServiceRoute: '#',
    subItems: [
      {
        text: 'Sub-Item 1',
        value: 1,
      },
      {
        text: 'Sub-Item 2',
        value: 2,
      },
    ],
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.serviceInfo.description == null) this.serviceInfo.description = '%placeholder%';
    if (this.serviceInfo.title == null) this.serviceInfo.title = '%placeholder%';
  }

  onEditClick(): void {
    this.router.navigate([this.serviceInfo.editServiceRoute]);
    // location.href = this.serviceInfo.editServiceRoute;
  }
}

export type ServiceSubItem = {
  text: string;
  value: number;
  valueUnit?: string;
};

export type ServiceInfo = {
  title: string;
  description?: string;
  icon: string;
  isRunning: boolean;
  editServiceRoute: string;
  subItems: ServiceSubItem[];
};
