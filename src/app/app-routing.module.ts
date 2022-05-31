import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterChildComponent } from './main/footer/footer-child/footer-child.component';
import { FooterComponent } from './main/footer/footer.component';
import { HeaderComponent } from './main/header/header.component';
import { MainComponent } from './main/main/main.component';
import { AuthChild2Guard } from './shared/auth-child-2.guard';
import { AuthGuard } from './shared/auth.guard';
import { LoginComponent } from './users/login/login/login.component';
import { RegisterComponent } from './users/register/register.component';

const routes: Routes = [
  {path:'', component: RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'main', component:MainComponent},
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent, canActivate:[AuthGuard]},
  // {
  //   path: 'footer', 
  //   loadChildren: () => import('./main/footer/footer.module').then(m => m.FooterModule)
  // },
  {
    path:'footer', 
    component: FooterComponent, canActivateChild:[AuthChild2Guard],
    children: [
      {path:'footer1', component: FooterChildComponent,}
    ]
  }
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
