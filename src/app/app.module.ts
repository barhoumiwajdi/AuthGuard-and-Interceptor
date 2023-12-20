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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FooterComponent } from './Layout/footer/footer.component';
import { ForbidenAccessComponent } from './Layout/forbiden-access/forbiden-access.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardGuard } from './_Auth/auth-guard.guard';
import { AuthInterceptor } from './_Auth/Auth.Interceptor';
import { AuthService } from './_Services/auth.service';
import { HeaderComponent } from './Template/header/header.component';
import { ProfileComponent } from './Template/profile/profile.component';
import { AboutUsComponent } from './Template/about-us/about-us.component';
import { ToastrModule } from 'ngx-toastr';
import { DiagramComponent } from './Template/Chart/diagram/diagram.component';


import { NgChartsModule } from 'ng2-charts';

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
    AboutUsComponent,
    DiagramComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,

    ToastrModule.forRoot(),
    NgChartsModule,



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
