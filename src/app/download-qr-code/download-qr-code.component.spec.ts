import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadQrCodeComponent } from './download-qr-code.component';

describe('DownloadQrCodeComponent', () => {
  let component: DownloadQrCodeComponent;
  let fixture: ComponentFixture<DownloadQrCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadQrCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
