import { Component, OnInit } from '@angular/core';
import { ServiceInfo } from '../service-panel/service-panel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'dashboard';
  dataUpdateFrequency: number = 1000;
  decimalPlaces: number = 1;

  log(event: any) {
    console.log(event);
  }

  components: componentType[] = [
    {
      title: 'CPU',
      icon: 'assets/icons/server-components/CPU.png',
      currentValue: 0,
      maxValue: 100,
      valueUnit: '%',
      dataUpdateFrequency: this.dataUpdateFrequency,
    },
    {
      title: 'RAM',
      icon: 'assets/icons/server-components/RAM.png',
      currentValue: 0,
      maxValue: 24,
      valueUnit: 'GB',
      dataUpdateFrequency: this.dataUpdateFrequency,
    },
    {
      title: 'GPU',
      icon: 'assets/icons/server-components/GPU.png',
      currentValue: 0,
      maxValue: 100,
      valueUnit: '%',
      dataUpdateFrequency: this.dataUpdateFrequency,
    },
    {
      title: 'SSD [ C: ]',
      icon: 'assets/icons/server-components/HDD.png',
      currentValue: Math.round(Math.random() * 250 * 10 ** this.decimalPlaces) / 10 ** this.decimalPlaces,
      maxValue: 250,
      valueUnit: 'GB',
      dataUpdateFrequency: 0,
    },
    {
      title: 'HDD [ D: ]',
      icon: 'assets/icons/server-components/HDD.png',
      currentValue: Math.round(Math.random() * 6144 * 10 ** this.decimalPlaces) / 10 ** this.decimalPlaces,
      maxValue: 6144,
      valueUnit: 'GB',
      dataUpdateFrequency: 0,
    },
  ];

  serverBookmarks: bookmarkType[] = [
    {
      text: 'Website',
      image: 'assets/icons/bookmark-icons/website-logo.png',
      url: 'https://vitotivadar.ovh/',
    },
    {
      text: 'ownCloud',
      image: 'assets/icons/bookmark-icons/ownCloud-logo.png',
      url: 'https://cloud.vitotivadar.ovh/',
    },
    {
      text: 'Gitea',
      image: 'assets/icons/bookmark-icons/gitea-logo.png',
      url: 'https://git.vitotivadar.ovh/',
    },
    {
      text: 'Docker',
      image: 'assets/icons/bookmark-icons/docker-logo.png',
      url: 'https://dashboard.vitotivadar.ovh/docker',
    },
  ];

  otherBookmarks: bookmarkType[] = [
    {
      text: 'DuckDuckGo',
      image: 'assets/icons/bookmark-icons/DuckDuckGo.png',
      url: 'https://www.duckduckgo.com/',
    },
    {
      text: 'Google',
      image: 'assets/icons/bookmark-icons/Google.png',
      url: 'https://www.google.com/',
    },
    {
      text: 'YouTube',
      image: 'assets/icons/bookmark-icons/YouTube.png',
      url: 'https://www.youtube.com/feed/subscriptions',
    },
    {
      text: 'AliExpress',
      image: 'assets/icons/bookmark-icons/AliExpress.png',
      url: 'https://www.aliexpress.com/',
    },
  ];

  services: ServiceInfo[] = [
    {
      title: 'Docker',
      description: 'running on this server',
      icon: 'assets/icons//bookmark-icons/docker-logo.png',
      isRunning: true,
      editServiceRoute: 'docker',
      subItems: [
        {
          text: 'Running',
          value: 13,
        },
        {
          text: 'stopped',
          value: 18,
        },
        {
          text: 'total',
          value: 13 + 18,
        },
      ],
    },
    {
      title: 'ownCloud',
      description: 'Online storage',
      icon: 'assets/icons//bookmark-icons/ownCloud-logo.png',
      isRunning: false,
      editServiceRoute: '',
      subItems: [
        {
          text: 'Used space',
          value: 183,
          valueUnit: '[GB]',
        },
        {
          text: 'Folders shared',
          value: 4,
        },
      ],
    },
    {
      title: 'Gitea',
      description: 'Git server',
      icon: 'assets/icons//bookmark-icons/gitea-logo.png',
      isRunning: false,
      editServiceRoute: '',
      subItems: [
        {
          text: 'Private repos',
          value: 6,
        },
        {
          text: 'Public repos',
          value: 9,
        },
      ],
    },
  ];

  ngOnInit(): void {
    setInterval(() => this.generatePercentage(), this.dataUpdateFrequency);
  }

  generatePercentage(): void {
    let valueCPU: number = Math.round(Math.random() * 100 * 10 ** this.decimalPlaces) / 10 ** this.decimalPlaces;
    let valueRAM: number = Math.round(Math.random() * 24 * 10 ** this.decimalPlaces) / 10 ** this.decimalPlaces;
    let valueGPU: number = Math.round(Math.random() * 100 * 10 ** this.decimalPlaces) / 10 ** this.decimalPlaces;
    // console.log(valueCPU, valueRAM, valueGPU);

    this.components[0].currentValue = valueCPU;
    this.components[1].currentValue = valueRAM;
    this.components[2].currentValue = valueGPU;
  }

  goToURL(URL: string): void {
    console.log(URL);
    location.href = URL;
  }
}

type bookmarkType = {
  text: string;
  image: string;
  url: string;
};

type componentType = {
  title: string;
  icon: string;
  currentValue: number;
  maxValue: number;
  valueUnit: string;
  dataUpdateFrequency: number;
};
