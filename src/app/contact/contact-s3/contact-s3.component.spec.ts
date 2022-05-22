import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactS3Component } from './contact-s3.component';

describe('ContactS3Component', () => {
  let component: ContactS3Component;
  let fixture: ComponentFixture<ContactS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
