import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoMessageComponent } from './histo-message.component';

describe('HistoMessageComponent', () => {
  let component: HistoMessageComponent;
  let fixture: ComponentFixture<HistoMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
