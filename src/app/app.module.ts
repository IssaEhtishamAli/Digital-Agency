import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './Theme-Integration/banner/banner.component';
import { ServiceComponent } from './Theme-Integration/service/service.component';
import { AboutUsComponent } from './Theme-Integration/about-us/about-us.component';
import { TestimonialComponent } from './Theme-Integration/testimonial/testimonial.component';
import { ContactUsComponent } from './Theme-Integration/contact-us/contact-us.component';
import { SocialMediaComponent } from './Theme-Integration/social-media/social-media.component';
import { FooterComponent } from './Theme-Integration/footer/footer.component';
import {NavBarComponent} from '../app/Theme-Integration/nav-bar/nav-bar.component';
import {ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ServiceComponent,
    AboutUsComponent,
    TestimonialComponent,
    ContactUsComponent,
    SocialMediaComponent,
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
