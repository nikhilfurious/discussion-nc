import { TestBed } from '@angular/core/testing';

import { ForumHttpService } from './forum-http.service';

describe('ForumHttpService', () => {
  let service: ForumHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
