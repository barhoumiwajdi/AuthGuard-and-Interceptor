import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Template/home/home.component';
import { AdminComponent } from './Template/admin/admin.component';
import { UserComponent } from './Template/user/user.component';
import { ManagerComponent } from './Template/manager/manager.component';
import { LoginComponent } from './Template/login/login.component';
import { RegisterComponent } from './Template/register/register.component';

import { FooterComponent } from './Layout/footer/footer.component';
import { ForbidenAccessComponent } from './Layout/forbiden-access/forbiden-access.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardGuard } from './_Auth/auth-guard.guard';
import { AuthInterceptor } from './_Auth/Auth.Interceptor';
import { AuthService } from './_Services/auth.service';
import { HeaderComponent } from './Template/header/header.component';
import { ProfileComponent } from './Template/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    ManagerComponent,
    LoginComponent,
    RegisterComponent,

    FooterComponent,
    ForbidenAccessComponent,
    HeaderComponent,
    ProfileComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule


  ],
  providers: [
    AuthGuardGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
