import { TestBed } from '@angular/core/testing';

import { GestionMessagesService } from 'src/app/services/gestion-messages.service';

describe('GestionMessagesServiceService', () => {
  let service: GestionMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
