import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthChild2Guard } from 'src/app/shared/auth-child-2.guard';
import { AuthGuard } from 'src/app/shared/auth.guard';
import { FooterChildComponent } from './footer-child/footer-child.component';

const routes: Routes = [
  {path:'footer1', component:FooterChildComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterRoutingModule { }
