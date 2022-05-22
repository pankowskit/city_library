import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import { ContactS1Component } from './contact-s1/contact-s1.component';
import { ContactS2Component } from './contact-s2/contact-s2.component';
import { ContactS3Component } from './contact-s3/contact-s3.component';


@NgModule({
  declarations: [
    ContactComponent,
    ContactS1Component,
    ContactS2Component,
    ContactS3Component
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
