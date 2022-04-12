import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicaoComponent } from './adicao/adicao.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NaveComponent } from './nave/nave.component';

import { UsersComponent } from './users/users.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  { path: 'login', component: LoginComponent},
  { path: 'nave', component: NaveComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'adicao', component: AdicaoComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
