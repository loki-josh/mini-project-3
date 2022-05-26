import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './main/footer/footer.component';
import { HeaderComponent } from './main/header/header.component';
import { MainComponent } from './main/main/main.component';
import { AuthGuard } from './shared/auth.guard';
import { LoginComponent } from './users/login/login/login.component';
import { RegisterComponent } from './users/register/register.component';

const routes: Routes = [
  {path:'', component: RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'main', component:MainComponent},
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent, canActivate:[AuthGuard]},
  {
    path: 'footer',
    loadChildren: () => import('./main/footer/footer.module').then(m => m.FooterModule)
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
