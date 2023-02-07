import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingImgaesLazyLoadingComponent } from './core/components/testing-imgaes-lazy-loading/testing-imgaes-lazy-loading.component';

const routes: Routes = [
  {
    path: "testing-lazy-loading-images",
    component: TestingImgaesLazyLoadingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
