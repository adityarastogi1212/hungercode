import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { DownloadQrCodeComponent } from './download-qr-code/download-qr-code.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WebService } from './WebService';
import { ProfileComponent } from './profile/profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    DownloadQrCodeComponent,
    LoginComponent,
    RegisterComponent,
    UploadImageComponent,
    ViewMenuComponent,
    ProfileComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path:'upload-image',component:UploadImageComponent },
      { path:'download-qr-code',component:DownloadQrCodeComponent },
      { path:'view-menu',component:ViewMenuComponent },
      { path:'',component:LoginComponent},
      { path:'login',component:LoginComponent},
      { path:'register',component:RegisterComponent},
      { path:'profile',component:ProfileComponent},
      { path:'contact-us',component:ContactUsComponent}
    ]),
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
