import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingImgaesLazyLoadingComponent } from './core/components/testing-imgaes-lazy-loading/testing-imgaes-lazy-loading.component';
import { LazyLoadImagesDirective } from './core/directives/lazy-load-images.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestingImgaesLazyLoadingComponent,
    LazyLoadImagesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
