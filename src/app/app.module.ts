import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwiperModule } from 'swiper/angular';
import { LightboxModule } from 'ngx-lightbox';


import { AppComponent } from './app.component';
import { ArtWorksComponent } from './art-works/art-works.component';
import { ArtWorkGroupComponent } from './art-works/art-work-group/art-work-group.component';
import { ArtWorkComponent } from './art-works/art-work-group/art-work/art-work.component';



@NgModule({
  declarations: [
    AppComponent,
    ArtWorksComponent,
    ArtWorkGroupComponent,
    ArtWorkComponent
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
