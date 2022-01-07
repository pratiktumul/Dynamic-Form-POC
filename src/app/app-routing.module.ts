import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImgFormComponent } from './Component/img-form/img-form.component';

const routes: Routes = [{
  path: 'imgupload', component: ImgFormComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
