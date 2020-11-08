import { TestBed } from '@angular/core/testing';

import { MagazinOnlineFormService } from './magazin-online-form.service';

describe('MagazinOnlineFormService', () => {
  let service: MagazinOnlineFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagazinOnlineFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
