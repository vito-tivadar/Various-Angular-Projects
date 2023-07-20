import { TestBed } from '@angular/core/testing';

import { TiuiCoreService } from './tiui-core.service';

describe('TiuiCoreService', () => {
  let service: TiuiCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiuiCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
