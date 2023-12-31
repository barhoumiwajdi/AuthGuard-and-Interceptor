import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Template/admin/admin.component';
import { HomeComponent } from './Template/home/home.component';
import { LoginComponent } from './Template/login/login.component';
import { ForbidenAccessComponent } from './Layout/forbiden-access/forbiden-access.component';
import { UserComponent } from './Template/user/user.component';
import { ManagerComponent } from './Template/manager/manager.component';
import { RegisterComponent } from './Template/register/register.component';
import { AuthGuardGuard } from './_Auth/auth-guard.guard';
import { ProfileComponent } from './Template/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Admin', component: AdminComponent, canActivate: [AuthGuardGuard], data: { roles: ['ADMIN'] } },
  { path: 'User', component: UserComponent, canActivate: [AuthGuardGuard], data: { roles: ['USER'] } },
  { path: 'Manager', component: ManagerComponent, canActivate: [AuthGuardGuard], data: { roles: ['MANAGER'] } },
  { path: 'Profile/:id', component: ProfileComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: '**', component: ForbidenAccessComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
