import { TestBed } from '@angular/core/testing';

import { AstushaUiService } from './astusha-ui.service';

describe('AstushaUiService', () => {
  let service: AstushaUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AstushaUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
