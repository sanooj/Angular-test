import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwiperModule } from 'swiper/angular';
import { LightboxModule } from 'ngx-lightbox';


import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    SwiperModule,
    LightboxModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
