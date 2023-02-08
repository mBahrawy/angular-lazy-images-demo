import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgLazyImagesModule } from 'ng-lazy-images';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgLazyImagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
